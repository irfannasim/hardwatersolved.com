import { describe, expect, it } from 'vitest';
import { scanHtml, scanSource } from './check-affiliate-links.mjs';

const TAG = 'hardwatersolv-20';
const REL = 'sponsored nofollow noopener noreferrer';

function problems(html) {
    return scanHtml(html, 'page.html', TAG).errors.map((e) => e.problem);
}

describe('scanHtml', () => {
    it('passes a tagged link with the sponsored rel', () => {
        expect(problems(`<a href="https://www.amazon.com/dp/B00YFOTWZG?tag=${TAG}" rel="${REL}">x</a>`)).toEqual([]);
    });

    it('flags an untagged amazon.com link', () => {
        expect(problems(`<a href="https://www.amazon.com/dp/B00YFOTWZG" rel="${REL}">x</a>`)).toEqual([
            `amazon.com link without tag=${TAG}`,
        ]);
    });

    it('flags a wrong tag and a duplicated tag', () => {
        expect(problems(`<a href="https://amazon.com/dp/B00YFOTWZG?tag=other-20" rel="${REL}">x</a>`)).toHaveLength(1);
        expect(
            problems(`<a href="https://www.amazon.com/dp/B00YFOTWZG?tag=${TAG}&amp;tag=other-20" rel="${REL}">x</a>`),
        ).toHaveLength(1);
    });

    it('flags a missing sponsored rel', () => {
        expect(problems(`<a href="https://www.amazon.com/dp/B00YFOTWZG?tag=${TAG}" rel="noopener">x</a>`)[0]).toMatch(
            /rel="sponsored nofollow"/,
        );
    });

    it('flags short links', () => {
        expect(problems(`<a href="https://amzn.to/3abc" rel="${REL}">x</a>`)).toContain('short link (cannot be tagged)');
        expect(problems(`<script>{"u":"https://a.co/d/xyz"}</script>`)).toContain('short link (cannot be tagged)');
    });

    it('flags untagged amazon.com URLs outside anchors (JSON-LD / RSC payload)', () => {
        expect(problems(`<script>self.__next_f.push([1,"{\\"href\\":\\"https://www.amazon.com/dp/B00YFOTWZG\\"}"])</script>`)).toHaveLength(1);
    });

    it('reads URLs split across RSC payload chunks', () => {
        const split = (url, at) =>
            `<script>self.__next_f.push([1,"{\\"href\\":\\"${url.slice(0, at)}"])</script><script>self.__next_f.push([1,"${url.slice(at)}\\"}"])</script>`;
        expect(problems(split(`https://www.amazon.com/dp/B00YFOTWZG?tag=${TAG}`, 50))).toEqual([]);
        expect(problems(split('https://www.amazon.com/dp/B00YFOTWZG', 30))).toHaveLength(1);
    });

    it('ignores non-Amazon links and only warns on other marketplaces', () => {
        const html = `<a href="https://www.epa.gov/">x</a><a href="https://www.amazon.co.uk/dp/B00YFOTWZG">y</a>`;
        const result = scanHtml(html, 'page.html', TAG);
        expect(result.errors).toEqual([]);
        expect(result.warnings).toHaveLength(1);
    });
});

describe('scanSource', () => {
    it('flags short links and hand-written tags but accepts plain /dp/ URLs', () => {
        const md = [
            '[a](https://www.amazon.com/dp/B00YFOTWZG)',
            '[b](https://amzn.to/3abc)',
            '[c](https://www.amazon.com/dp/B00YFOTWZG?tag=someone-20)',
        ].join('\n');
        const { errors } = scanSource(md, 'x.md');
        expect(errors.map((e) => e.line)).toEqual([2, 3]);
    });
});
