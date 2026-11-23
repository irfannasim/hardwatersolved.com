import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
    amazonProductUrl,
    containsAmazonLink,
    extractAsin,
    getAmazonTag,
    withAffiliateTag,
} from './amazon';

const TAG = 'hardwatersolv-20';

beforeEach(() => {
    vi.stubEnv('NEXT_PUBLIC_AMAZON_TAG', TAG);
});

afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
});

describe('amazonProductUrl', () => {
    it('builds the canonical tagged URL', () => {
        expect(amazonProductUrl('B00YFOTWZG')).toBe(`https://www.amazon.com/dp/B00YFOTWZG?tag=${TAG}`);
    });

    it('normalises case and whitespace', () => {
        expect(amazonProductUrl(' b00yfotwzg ')).toBe(`https://www.amazon.com/dp/B00YFOTWZG?tag=${TAG}`);
    });

    it.each(['', 'B00YFOTWZ', 'B00YFOTWZGX', 'B00YFOT-ZG'])('throws in development on invalid ASIN %j', (asin) => {
        expect(() => amazonProductUrl(asin)).toThrow(/Invalid ASIN/);
    });

    it('logs instead of throwing on invalid ASIN in production', () => {
        vi.stubEnv('NODE_ENV', 'production');
        const error = vi.spyOn(console, 'error').mockImplementation(() => {});
        expect(() => amazonProductUrl('bad')).not.toThrow();
        expect(error).toHaveBeenCalled();
    });
});

describe('withAffiliateTag', () => {
    it('tags a normal product link', () => {
        expect(withAffiliateTag('https://www.amazon.com/dp/B00YFOTWZG')).toBe(
            `https://www.amazon.com/dp/B00YFOTWZG?tag=${TAG}`,
        );
    });

    it('tags the bare amazon.com host and upgrades http', () => {
        expect(withAffiliateTag('http://amazon.com/dp/B00YFOTWZG')).toBe(
            `https://www.amazon.com/dp/B00YFOTWZG?tag=${TAG}`,
        );
    });

    it('replaces a wrong existing tag', () => {
        expect(withAffiliateTag('https://www.amazon.com/dp/B00YFOTWZG?tag=someoneelse-20')).toBe(
            `https://www.amazon.com/dp/B00YFOTWZG?tag=${TAG}`,
        );
    });

    it('strips tracking params and the slug/ref path from product links', () => {
        const url =
            'https://www.amazon.com/Fleck-5600SXT-Softener/dp/B00YFOTWZG/ref=sr_1_3?pd_rd_w=abc&pd_rd_r=xyz&psc=1&th=1&linkCode=ll1&linkId=123&ref_=ast_sto_dp&tag=old-21';
        expect(withAffiliateTag(url)).toBe(`https://www.amazon.com/dp/B00YFOTWZG?tag=${TAG}`);
    });

    it('canonicalises /gp/product/ and /exec/obidos/ASIN/ links', () => {
        expect(withAffiliateTag('https://www.amazon.com/gp/product/B00YFOTWZG?psc=1')).toBe(
            `https://www.amazon.com/dp/B00YFOTWZG?tag=${TAG}`,
        );
        expect(withAffiliateTag('https://www.amazon.com/exec/obidos/ASIN/B00YFOTWZG/')).toBe(
            `https://www.amazon.com/dp/B00YFOTWZG?tag=${TAG}`,
        );
    });

    it('preserves the hash', () => {
        expect(withAffiliateTag('https://www.amazon.com/dp/B00YFOTWZG?ref=x#customerReviews')).toBe(
            `https://www.amazon.com/dp/B00YFOTWZG?tag=${TAG}#customerReviews`,
        );
    });

    it('tags non-product amazon.com pages and keeps their meaningful params', () => {
        expect(withAffiliateTag('https://www.amazon.com/s?k=water+softener&ref=nb_sb_noss&tag=x-20')).toBe(
            `https://www.amazon.com/s?k=water+softener&tag=${TAG}`,
        );
    });

    it.each([
        'https://amzn.to/3abcdef',
        'https://a.co/d/abc123',
        'https://amzn.com/B00YFOTWZG',
    ])('leaves short link %s unchanged', (url) => {
        expect(withAffiliateTag(url)).toBe(url);
    });

    it.each([
        'https://www.amazon.co.uk/dp/B00YFOTWZG',
        'https://www.amazon.ca/dp/B00YFOTWZG',
        'https://smile.amazon.com/dp/B00YFOTWZG',
        'https://m.media-amazon.com/images/I/abc.jpg',
        'https://www.amazon.com.evil.example/dp/B00YFOTWZG',
        'https://www.springwellwater.com/product/x/',
        '/blog/best-water-softeners/',
        '#faq',
        'mailto:hello@example.com',
    ])('leaves non-amazon.com URL %s unchanged', (url) => {
        expect(withAffiliateTag(url)).toBe(url);
    });

    it.each(['not a url', 'https://', 'http://[::1', ''])('returns invalid URL %j unchanged without throwing', (url) => {
        expect(withAffiliateTag(url)).toBe(url);
    });

    it('omits the tag and warns (does not throw) when the tag is missing in development', () => {
        vi.stubEnv('NEXT_PUBLIC_AMAZON_TAG', '');
        vi.stubEnv('NODE_ENV', 'development');
        vi.spyOn(console, 'warn').mockImplementation(() => {});
        expect(withAffiliateTag('https://www.amazon.com/dp/B00YFOTWZG?tag=old-20')).toBe(
            'https://www.amazon.com/dp/B00YFOTWZG',
        );
    });

    it('throws when the tag is missing in production', () => {
        vi.stubEnv('NEXT_PUBLIC_AMAZON_TAG', '');
        vi.stubEnv('NODE_ENV', 'production');
        expect(() => withAffiliateTag('https://www.amazon.com/dp/B00YFOTWZG')).toThrow(/NEXT_PUBLIC_AMAZON_TAG/);
        expect(() => getAmazonTag()).toThrow(/NEXT_PUBLIC_AMAZON_TAG/);
    });
});

describe('extractAsin', () => {
    it.each([
        ['https://www.amazon.com/dp/B00YFOTWZG', 'B00YFOTWZG'],
        ['https://www.amazon.com/Some-Name/dp/B00YFOTWZG/ref=x?psc=1', 'B00YFOTWZG'],
        ['https://www.amazon.com/gp/product/B00YFOTWZG', 'B00YFOTWZG'],
        ['https://www.amazon.com/exec/obidos/ASIN/B00YFOTWZG/', 'B00YFOTWZG'],
        ['https://www.amazon.com/dp/b00yfotwzg', 'B00YFOTWZG'],
        ['/dp/B00YFOTWZG', 'B00YFOTWZG'],
    ])('extracts from %s', (url, asin) => {
        expect(extractAsin(url)).toBe(asin);
    });

    it.each([
        'https://www.amazon.com/s?k=softener',
        'https://www.amazon.com/dp/B00YFOTWZGX',
        'https://amzn.to/3abcdef',
        '',
    ])('returns null for %j', (url) => {
        expect(extractAsin(url)).toBeNull();
    });
});

describe('containsAmazonLink', () => {
    it('detects amazon.com and short links in markdown', () => {
        expect(containsAmazonLink('[Check price on Amazon](https://www.amazon.com/dp/B00YFOTWZG)')).toBe(true);
        expect(containsAmazonLink('see https://amzn.to/abc')).toBe(true);
        expect(containsAmazonLink('[EPA](https://www.epa.gov/) and amazon.com in prose')).toBe(false);
    });
});
