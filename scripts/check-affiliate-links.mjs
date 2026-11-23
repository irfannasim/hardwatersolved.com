#!/usr/bin/env node
// Safety net for Amazon Associates links. Deliberately independent of
// app/_utils/amazon.ts (it imports nothing from the app), so a bug in the
// helper cannot hide itself.
//
// Built output (.next/server/app/**/*.html), fails on:
//   1. any amazon.com link without tag=<expected tag> (anchors AND raw URLs,
//      so JSON-LD and the RSC payload are covered too)
//   2. any amzn.to / a.co / amzn.com short link
//   3. any Amazon anchor whose rel lacks "sponsored" and "nofollow"
// Source (content/**/*.md, app/**/*.ts(x)), fails on:
//   - short links, and hand-written ?tag= on amazon.com URLs (tagging is
//     centralized at render time; content keeps plain /dp/ASIN URLs)
// Reports (warning only): other Amazon marketplaces, Amazon-hosted images.
//
// Expected tag: AFFILIATE_EXPECTED_TAG, else NEXT_PUBLIC_AMAZON_TAG from the
// environment, else from .env.production.local/.env.local/.env.production/.env.
//
// Usage: node scripts/check-affiliate-links.mjs [--source-only]
// Exits 1 when anything fails.

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const BUILD_DIR = path.join(ROOT, '.next', 'server', 'app');
const SOURCE_DIRS = ['content', 'app'];

const US_HOST = /^(www\.)?amazon\.com$/i;
const SHORT_HOST = /^(www\.)?(amzn\.to|a\.co|amzn\.com)$/i;
const IMAGE_HOST = /(^|\.)(media-amazon\.com|ssl-images-amazon\.com|images-amazon\.com)$/i;
const OTHER_MARKET_HOST = /^(www\.|smile\.)?amazon\.(?!com$)[a-z.]+$/i;
const SMILE_HOST = /^smile\.amazon\.com$/i;

const URL_PATTERN = /https?:\/\/[^\s"'<>\\)\]`]+/g;
const ANCHOR_PATTERN = /<a\b[^>]*>/gi;
const RSC_CHUNK_BOUNDARY = /"\]\)<\/script><script>self\.__next_f\.push\(\[1,"/g;

function decodeEntities(value) {
    return value
        .replace(/&amp;/g, '&')
        .replace(/&#x27;|&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
}

function attr(tag, name) {
    const match = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
    if (!match) return null;
    return decodeEntities(match[2] ?? match[3] ?? match[4] ?? '');
}

function hostOf(url) {
    try {
        return new URL(url).hostname;
    } catch {
        return '';
    }
}

function tagsOf(url) {
    try {
        return new URL(url).searchParams.getAll('tag');
    } catch {
        return [];
    }
}

function lineOf(text, index) {
    let line = 1;
    for (let i = 0; i < index; i++) if (text.charCodeAt(i) === 10) line++;
    return line;
}

/** Scan one built HTML document. Returns { errors, warnings } of { file, line, url, problem }. */
export function scanHtml(html, file, expectedTag) {
    const errors = [];
    const warnings = [];

    // Anchors: tag + rel.
    for (const match of html.matchAll(ANCHOR_PATTERN)) {
        const tag = match[0];
        const href = attr(tag, 'href');
        if (!href) continue;
        const host = hostOf(href);
        if (!host) continue;
        const isUs = US_HOST.test(host);
        const isShort = SHORT_HOST.test(host);
        if (!isUs && !isShort && !SMILE_HOST.test(host)) continue;

        const line = lineOf(html, match.index);
        const rel = (attr(tag, 'rel') || '').toLowerCase().split(/\s+/);
        if (!rel.includes('sponsored') || !rel.includes('nofollow')) {
            errors.push({ file, line, url: href, problem: `affiliate link missing rel="sponsored nofollow" (rel="${rel.join(' ').trim()}")` });
        }
        if (isShort) errors.push({ file, line, url: href, problem: 'short link (cannot be tagged)' });
        if (SMILE_HOST.test(host)) errors.push({ file, line, url: href, problem: 'smile.amazon.com link (retired host, not tagged)' });
    }

    // Every raw URL in the document, including scripts, JSON-LD and the RSC payload.
    // Next splits the RSC payload across <script> chunks, sometimes mid-URL, so
    // stitch the chunk boundaries back together first (they never span lines).
    const stitched = html.replace(RSC_CHUNK_BOUNDARY, '');
    for (const match of stitched.matchAll(URL_PATTERN)) {
        const url = decodeEntities(match[0]);
        const host = hostOf(url);
        if (!host) continue;
        const line = lineOf(stitched, match.index);
        if (US_HOST.test(host)) {
            const tags = tagsOf(url);
            if (tags.length !== 1 || tags[0] !== expectedTag) {
                errors.push({ file, line, url, problem: `amazon.com link without tag=${expectedTag}` });
            }
        } else if (SHORT_HOST.test(host)) {
            errors.push({ file, line, url, problem: 'short link (cannot be tagged)' });
        } else if (IMAGE_HOST.test(host)) {
            warnings.push({ file, line, url, problem: 'hotlinked Amazon image (report only)' });
        } else if (OTHER_MARKET_HOST.test(host)) {
            warnings.push({ file, line, url, problem: 'non-US Amazon marketplace (not covered by the US account; report only)' });
        }
    }

    return { errors: dedupe(errors), warnings: dedupe(warnings) };
}

/** Scan one source file (markdown or TS/TSX). */
export function scanSource(text, file) {
    const errors = [];
    const warnings = [];
    for (const match of text.matchAll(URL_PATTERN)) {
        const url = match[0];
        const host = hostOf(url);
        if (!host) continue;
        const line = lineOf(text, match.index);
        if (SHORT_HOST.test(host)) {
            errors.push({ file, line, url, problem: 'short link: replace with https://www.amazon.com/dp/ASIN' });
        } else if (US_HOST.test(host) && tagsOf(url).some((tag) => /^[\w-]+$/.test(tag))) {
            // Real tag values only; doc-comment placeholders like ?tag={TAG} are fine.
            errors.push({ file, line, url, problem: 'hand-written tag= in source: remove it, tagging happens at render time' });
        } else if (IMAGE_HOST.test(host)) {
            warnings.push({ file, line, url, problem: 'hotlinked Amazon image (report only)' });
        } else if (OTHER_MARKET_HOST.test(host)) {
            warnings.push({ file, line, url, problem: 'non-US Amazon marketplace (report only)' });
        }
    }
    return { errors, warnings };
}

function dedupe(items) {
    const seen = new Set();
    return items.filter((item) => {
        const key = `${item.file}|${item.line}|${item.url}|${item.problem}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

function walk(dir, keep, out = []) {
    if (!fs.existsSync(dir)) return out;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
            walk(full, keep, out);
        } else if (keep(entry.name)) {
            out.push(full);
        }
    }
    return out;
}

function readEnvFileValue(name) {
    for (const file of ['.env.production.local', '.env.local', '.env.production', '.env']) {
        const full = path.join(ROOT, file);
        if (!fs.existsSync(full)) continue;
        const match = fs.readFileSync(full, 'utf8').match(new RegExp(`^\\s*${name}\\s*=\\s*["']?([^"'\\r\\n#]+)`, 'm'));
        if (match) return match[1].trim();
    }
    return '';
}

export function resolveExpectedTag() {
    return (
        (process.env.AFFILIATE_EXPECTED_TAG || '').trim() ||
        (process.env.NEXT_PUBLIC_AMAZON_TAG || '').trim() ||
        readEnvFileValue('NEXT_PUBLIC_AMAZON_TAG')
    );
}

function report(title, items) {
    if (items.length === 0) return;
    console.log(`\n${title} (${items.length}):`);
    for (const item of items) {
        console.log(`  ${path.relative(ROOT, item.file)}:${item.line}  ${item.problem}\n      ${item.url}`);
    }
}

function main() {
    const sourceOnly = process.argv.includes('--source-only');
    const expectedTag = resolveExpectedTag();
    const errors = [];
    const warnings = [];

    if (!expectedTag) {
        console.error('check:affiliate: no expected tag. Set NEXT_PUBLIC_AMAZON_TAG (or AFFILIATE_EXPECTED_TAG).');
        process.exit(1);
    }
    console.log(`check:affiliate: expected tag "${expectedTag}"`);

    const sourceFiles = SOURCE_DIRS.flatMap((dir) =>
        walk(path.join(ROOT, dir), (name) => /\.(md|mdx|tsx?|jsx?)$/.test(name) && !/\.test\./.test(name)),
    );
    for (const file of sourceFiles) {
        const result = scanSource(fs.readFileSync(file, 'utf8'), file);
        errors.push(...result.errors);
        warnings.push(...result.warnings);
    }
    console.log(`  source: scanned ${sourceFiles.length} files`);

    if (!sourceOnly) {
        const htmlFiles = walk(BUILD_DIR, (name) => name.endsWith('.html'));
        if (htmlFiles.length === 0) {
            console.error(`check:affiliate: no built HTML in ${path.relative(ROOT, BUILD_DIR)}. Run "npm run build" first, or pass --source-only.`);
            process.exit(1);
        }
        let amazonLinks = 0;
        for (const file of htmlFiles) {
            const html = fs.readFileSync(file, 'utf8');
            amazonLinks += [...html.matchAll(ANCHOR_PATTERN)].filter((m) => US_HOST.test(hostOf(attr(m[0], 'href') || ''))).length;
            const result = scanHtml(html, file, expectedTag);
            errors.push(...result.errors);
            warnings.push(...result.warnings);
        }
        console.log(`  build:  scanned ${htmlFiles.length} HTML files, ${amazonLinks} amazon.com anchors`);
    }

    report('Warnings', warnings);
    report('FAILURES', errors);

    if (errors.length > 0) {
        console.error(`\ncheck:affiliate: FAILED with ${errors.length} problem(s).`);
        process.exit(1);
    }
    console.log('\ncheck:affiliate: OK');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    main();
}
