// Checks article diagrams in public/diagrams/ before they are published.
//
// Usage: npm run check:diagrams -- <outDir> <file.svg> [more.svg ...]
//        npm run check:diagrams -- <outDir> public/diagrams        (every diagram)
//
// Renders each SVG in a headless Chromium browser, writes <outDir>/<name>.png
// (open these and LOOK at them — the checks below do not replace that), and reports:
//  - SEO/structure problems (title/desc/role/aria/viewBox/width/height/external refs)
//  - text-on-text overlaps
//  - text outside the canvas
//  - connector lines (class "ln") passing through text
//  - text straddling the edge of a box (class "box")
//  - smallest rendered font size on desktop and phone
// Exits non-zero if any diagram has a problem. Set BROWSER_PATH to use a
// browser other than Microsoft Edge's default Windows install.
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

const BROWSER =
    process.env.BROWSER_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const [outDir, ...args] = process.argv.slice(2);
// A directory argument expands to every .svg in it (the full set is too long for a Windows command line).
const files = args.flatMap((a) =>
    fs.statSync(a).isDirectory()
        ? fs.readdirSync(a).filter((f) => f.endsWith('.svg')).map((f) => path.join(a, f))
        : [a]
);
if (!outDir || files.length === 0) {
    console.error('Usage: npm run check:diagrams -- <outDir> <file.svg> [more.svg ...]');
    process.exit(2);
}
fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({ executablePath: BROWSER, headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
let failures = 0;

for (const file of files) {
    const src = fs.readFileSync(file, 'utf8');
    const name = path.basename(file, '.svg');
    const problems = [];

    // --- static checks
    const root = src.match(/<svg\b[^>]*>/)?.[0] || '';
    if (!/role="img"/.test(root)) problems.push('root <svg> missing role="img"');
    if (!/aria-labelledby="[^"]+"/.test(root)) problems.push('root <svg> missing aria-labelledby');
    if (!/viewBox="/.test(root)) problems.push('missing viewBox');
    if (!/\bwidth="\d+"/.test(root) || !/\bheight="\d+"/.test(root)) problems.push('missing numeric width/height');
    if (!/<title id="[^"]+">[^<]{10,}<\/title>/.test(src)) problems.push('missing/short <title id>');
    if (!/<desc id="[^"]+">[^<]{30,}<\/desc>/.test(src)) problems.push('missing/short <desc id>');
    if (/(href|src)="(https?:)?\/\//.test(src)) problems.push('external reference found');
    if (/<script|<foreignObject|<image\b/.test(src)) problems.push('script/foreignObject/image not allowed');
    if (/font-family="[^"]*(Inter|Roboto|Poppins)/.test(src)) problems.push('web font used; use Arial stack');
    const kb = (Buffer.byteLength(src) / 1024).toFixed(1);

    const vb = root.match(/viewBox="([\d.\s-]+)"/)?.[1].trim().split(/\s+/).map(Number) || [0, 0, 800, 450];
    const [, , vw, vh] = vb;

    await page.setViewport({ width: Math.ceil(vw), height: Math.ceil(vh), deviceScaleFactor: 1.5 });
    await page.setContent(
        `<!doctype html><html><body style="margin:0;background:#fff">
         <div id="w" style="width:${vw}px">${src.replace(/<\?xml[^>]*>/, '')}</div></body></html>`
    );

    const res = await page.evaluate(() => {
        const svg = document.querySelector('#w svg');
        svg.setAttribute('width', svg.viewBox.baseVal.width);
        svg.setAttribute('height', svg.viewBox.baseVal.height);
        const canvas = svg.getBoundingClientRect();
        const texts = [...svg.querySelectorAll('text')].filter((t) => t.textContent.trim());
        const rects = texts.map((t) => {
            const r = t.getBoundingClientRect();
            return { t: t.textContent.trim().slice(0, 40), x1: r.left, y1: r.top, x2: r.right, y2: r.bottom,
                fs: parseFloat(getComputedStyle(t).fontSize) };
        });
        const out = [];
        const inter = (a, b, pad = 0) => a.x1 < b.x2 - pad && a.x2 > b.x1 + pad && a.y1 < b.y2 - pad && a.y2 > b.y1 + pad;

        for (let i = 0; i < rects.length; i++) {
            const a = rects[i];
            if (a.x1 < canvas.left + 2 || a.y1 < canvas.top + 2 || a.x2 > canvas.right - 2 || a.y2 > canvas.bottom - 2)
                out.push(`TEXT CLIPPED at canvas edge: "${a.t}"`);
            for (let j = i + 1; j < rects.length; j++) {
                // glyph boxes include line-gap; shrink vertically a little to avoid false positives on stacked lines
                const b = rects[j];
                const sa = { ...a, y1: a.y1 + a.fs * 0.18, y2: a.y2 - a.fs * 0.18 };
                const sb = { ...b, y1: b.y1 + b.fs * 0.18, y2: b.y2 - b.fs * 0.18 };
                if (inter(sa, sb, 0.5)) out.push(`TEXT OVERLAP: "${a.t}" <> "${b.t}"`);
            }
        }

        // connectors through text
        const conns = [...svg.querySelectorAll('.ln')];
        for (const c of conns) {
            if (typeof c.getTotalLength !== 'function') continue;
            const len = c.getTotalLength();
            const ctm = c.getScreenCTM();
            const hits = new Set();
            for (let d = 0; d <= len; d += 2) {
                const p = c.getPointAtLength(d);
                const x = ctm.a * p.x + ctm.c * p.y + ctm.e;
                const y = ctm.b * p.x + ctm.d * p.y + ctm.f;
                for (const r of rects) {
                    const padY = r.fs * 0.2;
                    if (x > r.x1 + 1 && x < r.x2 - 1 && y > r.y1 + padY && y < r.y2 - padY) hits.add(r.t);
                }
            }
            for (const h of hits) out.push(`LINE THROUGH TEXT: "${h}"`);
        }

        // text straddling box edges
        const boxes = [...svg.querySelectorAll('.box')].map((b) => {
            const r = b.getBoundingClientRect();
            return { x1: r.left, y1: r.top, x2: r.right, y2: r.bottom };
        });
        for (const r of rects) {
            const sr = { ...r, y1: r.y1 + r.fs * 0.2, y2: r.y2 - r.fs * 0.2 };
            for (const b of boxes) {
                const inside = sr.x1 >= b.x1 + 2 && sr.x2 <= b.x2 - 2 && sr.y1 >= b.y1 + 1 && sr.y2 <= b.y2 - 1;
                if (inter(sr, b) && !inside) { out.push(`TEXT CROSSES BOX EDGE: "${r.t}"`); break; }
            }
        }

        const minFs = Math.min(...rects.map((r) => r.fs));
        return { out, minFs, n: rects.length };
    });

    const w760 = (res.minFs * Math.min(1, 760 / vw)).toFixed(1);
    const w360 = (res.minFs * (340 / vw)).toFixed(1);
    if (parseFloat(w760) < 11) problems.push(`smallest text renders at ${w760}px on desktop (<11px)`);

    await page.screenshot({ path: path.join(outDir, `${name}.png`), fullPage: true });

    const all = [...problems, ...res.out];
    if (all.length) failures++;
    console.log(`${all.length ? 'FAIL' : 'OK  '} ${name}  (${kb} KB, ${vw}x${vh}, ${res.n} labels, min font ${w760}px desktop / ${w360}px phone)`);
    for (const p of all) console.log(`     - ${p}`);
}

await browser.close();
process.exit(failures ? 1 : 0);
