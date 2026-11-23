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
- `content/blog/` &mdash; Markdown source for every published guide (frontmatter + body), grouped into `money-pages/` (commercial) and `info-pages/` (informational). The folders are internal only: every post publishes at `/blog/<filename>/`.
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

## Amazon Affiliate Links

Amazon Associates (US marketplace) tagging is centralized:

- **The tag lives in one place:** `NEXT_PUBLIC_AMAZON_TAG` (see `.env.example`; copy it to `.env.local` for
  local work). It is not a secret.
- **`NEXT_PUBLIC_` variables are inlined at build time.** Production (Vercel: Project Settings &rarr;
  Environment Variables, for Production *and* Preview) must have the variable set, and the site must be
  **rebuilt/redeployed** after setting or changing it &mdash; restarting the server is not enough.
- A production build **fails** if the variable is missing, so an untagged site cannot ship.
- Content keeps plain `https://www.amazon.com/dp/ASIN` URLs. Never hand-write `?tag=` into articles: links are
  tagged at render time by `withAffiliateTag()` / `<AffiliateLink>` (`app/_utils/amazon.ts`,
  `app/_components/AffiliateLink.tsx`), which also add `rel="sponsored nofollow noopener noreferrer"`.
- Short links (`amzn.to`, `a.co`) cannot be tagged: use the full `/dp/ASIN` URL instead.
- `npm run check:affiliate` scans the build output and source for untagged links, short links and missing
  `rel="sponsored"`. It runs automatically after `npm run build` (in `postbuild`) and fails the build on any problem.

```bash
npm test                 # unit tests (vitest)
npm run typecheck        # tsc --noEmit
npm run check:affiliate  # affiliate link safety net (after a build)
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
