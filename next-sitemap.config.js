module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://hardwatersolved.com/',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    // No static export anymore (deployed on Vercel) — write into public/ so
    // Next.js serves sitemap.xml/robots.txt as normal static files.
    outDir: 'public',
    // Keep thin/utility pages out of the sitemap: paginated blog lists
    // (/blog/page/2, ...) stay crawlable, they just aren't suggested for indexing.
    exclude: [
        '/blog/page/*',
    ],
};
