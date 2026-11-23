// Amazon Associates link handling. The Associates tag comes from ONE place,
// NEXT_PUBLIC_AMAZON_TAG, and every amazon.com link on the site is rewritten
// through this module at render time. Content files keep plain, untagged
// https://www.amazon.com/dp/ASIN URLs; never hand-write ?tag= into them.
//
// The account covers the US marketplace only, so only amazon.com hosts are
// tagged. Other Amazon marketplaces and short links (amzn.to, a.co) are left
// alone; scripts/check-affiliate-links.mjs flags short links in the build.

const ASIN_PATTERN = /^[A-Z0-9]{10}$/;
const TAGGABLE_HOSTS = new Set(['amazon.com', 'www.amazon.com']);

// Path forms that carry an ASIN. The ASIN must end the segment.
const ASIN_PATH_PATTERNS = [
    /\/dp\/([A-Za-z0-9]{10})(?=[/?#]|$)/,
    /\/gp\/product\/([A-Za-z0-9]{10})(?=[/?#]|$)/,
    /\/gp\/aw\/d\/([A-Za-z0-9]{10})(?=[/?#]|$)/,
    /\/exec\/obidos\/ASIN\/([A-Za-z0-9]{10})(?=[/?#]|$)/i,
];

// Tracking and attribution parameters Amazon (or another affiliate) appends.
// They never change which product is shown.
const JUNK_PARAMS = new Set([
    'ref',
    'ref_',
    'psc',
    'th',
    'linkcode',
    'linkid',
    'ascsubtag',
    'creative',
    'creativeasin',
    'camp',
    'qid',
    'sr',
    'crid',
    'sprefix',
    'content-id',
    'smid',
    'spla',
    'sp_csd',
    '_encoding',
    'dib',
    'dib_tag',
    'social_share',
    'starsleft',
    'language',
]);
const JUNK_PARAM_PREFIXES = ['pd_rd_', 'pf_rd_'];

let warnedMissingTag = false;

function isProduction() {
    return process.env.NODE_ENV === 'production';
}

/**
 * The Associates tracking ID. Throws in production when it is missing, so an
 * untagged site cannot be built (every article is prerendered by `next build`).
 * In development and tests it warns once and returns an empty string.
 */
export function getAmazonTag(): string {
    // Referenced literally so Next.js can inline it at build time.
    const tag = (process.env.NEXT_PUBLIC_AMAZON_TAG || '').trim();
    if (tag) return tag;

    if (isProduction()) {
        throw new Error(
            'NEXT_PUBLIC_AMAZON_TAG is not set. Amazon links would ship without the Associates tag. ' +
                'Set it in the environment (Vercel: Project Settings > Environment Variables) and rebuild.',
        );
    }
    if (!warnedMissingTag) {
        warnedMissingTag = true;
        console.warn('[amazon] NEXT_PUBLIC_AMAZON_TAG is not set; Amazon links will be untagged in this build.');
    }
    return '';
}

export function isValidAsin(asin: string): boolean {
    return ASIN_PATTERN.test(asin);
}

function canonicalProductUrl(asin: string, tag: string, hash = '') {
    const query = tag ? `?tag=${encodeURIComponent(tag)}` : '';
    return `https://www.amazon.com/dp/${asin}${query}${hash}`;
}

/** https://www.amazon.com/dp/{ASIN}?tag={TAG}. Throws outside production on an invalid ASIN. */
export function amazonProductUrl(asin: string): string {
    const normalized = (asin || '').trim().toUpperCase();
    if (!isValidAsin(normalized)) {
        const message = `[amazon] Invalid ASIN "${asin}": expected 10 characters, A-Z and 0-9.`;
        if (!isProduction()) throw new Error(message);
        console.error(message);
    }
    return canonicalProductUrl(normalized, getAmazonTag());
}

/** The ASIN from /dp/, /gp/product/, /gp/aw/d/ or /exec/obidos/ASIN/ URLs, or null. */
export function extractAsin(url: string): string | null {
    if (!url) return null;
    let pathname = url;
    try {
        pathname = new URL(url).pathname;
    } catch {
        // Not an absolute URL: match against the raw string.
    }
    for (const pattern of ASIN_PATH_PATTERNS) {
        const match = pathname.match(pattern);
        if (match) {
            const asin = match[1].toUpperCase();
            if (isValidAsin(asin)) return asin;
        }
    }
    return null;
}

export function isTaggableAmazonUrl(url: string): boolean {
    try {
        const parsed = new URL(url);
        return (
            (parsed.protocol === 'https:' || parsed.protocol === 'http:') &&
            TAGGABLE_HOSTS.has(parsed.hostname.toLowerCase())
        );
    } catch {
        return false;
    }
}

function isJunkParam(name: string) {
    const lower = name.toLowerCase();
    return JUNK_PARAMS.has(lower) || JUNK_PARAM_PREFIXES.some((prefix) => lower.startsWith(prefix));
}

/**
 * Adds (or replaces) the Associates tag on an amazon.com URL and strips
 * tracking junk. Product links come back in the canonical
 * https://www.amazon.com/dp/{ASIN}?tag={TAG} form, hash preserved.
 * Anything that is not an amazon.com URL is returned unchanged. Never throws
 * on bad input: an unparseable URL is returned as given.
 */
export function withAffiliateTag(url: string): string {
    if (typeof url !== 'string' || !isTaggableAmazonUrl(url)) return url;

    // Outside the try on purpose: a missing tag in production must fail the build.
    const tag = getAmazonTag();

    try {
        const parsed = new URL(url);
        const asin = extractAsin(url);

        if (asin) return canonicalProductUrl(asin, tag, parsed.hash);

        // Non-product amazon.com page (search, store, etc.): keep the path and
        // the meaningful query, drop the junk, and set our tag.
        parsed.protocol = 'https:';
        parsed.pathname = parsed.pathname.replace(/\/ref=[^/]*$/, '') || '/';
        for (const name of [...parsed.searchParams.keys()]) {
            if (isJunkParam(name) || name.toLowerCase() === 'tag') parsed.searchParams.delete(name);
        }
        if (tag) parsed.searchParams.set('tag', tag);
        return parsed.toString();
    } catch {
        return url;
    }
}

/** True when markdown/HTML source contains a link that will render as an Amazon affiliate link. */
export function containsAmazonLink(source: string): boolean {
    return /https?:\/\/(?:www\.)?(?:amazon\.com|amzn\.to|a\.co|amzn\.com)\//i.test(source);
}
