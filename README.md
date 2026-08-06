# Hard Water Solved

An independent, research-backed content site about hard water, whole-house water softeners, and water
treatment &mdash; built with [Next.js](https://nextjs.org) and deployed on [Vercel](https://vercel.com).

The goal is simple: answer one homeowner question at a time, in plain English, grounded in primary sources
(EPA, CDC, NSF, USGS, university extension programs) instead of sales copy.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` &mdash; Next.js App Router pages, layouts, and shared components (`_components`, `_lib`, `_utils`).
- `content/blog/` &mdash; Markdown source for every published guide (frontmatter + body).
- `public/` &mdash; Static assets, including cached Pexels images used in blog posts.
- `__content_+_seo/` &mdash; Editorial planning docs: the article outline plan and the per-article writing workflow.

## Content Workflow

New guides are written one at a time using the outline plan and prompt in `__content_+_seo/`, not generated
in bulk. Each article is checked off in the plan file once published.

## Build & Deploy

```bash
npm run build            # next build, then postbuild generates sitemap.xml/robots.txt into public/
npm start                # serve the production build locally on :3000 to sanity-check it
npm run download:images  # cache external Pexels images referenced in content/app into public/images/pexels
```

Deployed on Vercel. Every page here is prerenderable at build time (no per-request dynamic data), so
Vercel serves the whole site statically/via CDN even though the project no longer sets
`output: 'export'` &mdash; that flag was dropped because it disabled `next/image` optimization and
`next.config.ts`'s `headers()` (security headers, caching), both of which Vercel's Next.js runtime
supports natively.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
