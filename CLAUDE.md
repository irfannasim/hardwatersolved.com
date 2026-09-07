@AGENTS.md

# Content & SEO working conventions

`__content_+_seo/` is organised so that finished work and exploratory work never mix:

| Directory | Holds | Rule |
|---|---|---|
| `content-plan-+-outline/` | The content plan | **Exactly one plan file.** Superseding it means deleting the old one, not keeping both |
| `prompts/` | Reusable prompt and constraint files | `seo-constraints.md` is authoritative for SEO rules |
| `research/` | SERP analysis, keyword research, audit scripts, rejected drafts | One dated folder per investigation — see `research/README.md` |
| `content/blog/` | Published articles (`.md`) | One file per article; slug = filename |

Rules that apply to every content task here:

- **Put experiments and research in `__content_+_seo/research/`**, never loose in the repo root or alongside the plan. Throwaway scripts belong in the session scratchpad instead.
- **Delete superseded files rather than leaving them.** Git history is the archive. Stale plans and duplicate outlines get followed by mistake.
- **Never generate articles from a templated outline.** A plan that reuses one outline structure across many articles produces near-duplicate pages and is the thing this plan was rebuilt to fix. Each article carries its own angle.
- Article frontmatter fields the site actually reads: `title`, `seoTitle`, `seoDescription`, `excerpt`, `date`, `updatedDate`, `author`, `category`, `featuredImage`, `ogImageAlt`, `canonical`, `faqs`.
- **FAQs go in frontmatter only** (`faqs:`), never repeated in the body — the renderer emits them as a section plus FAQPage schema.
- Body content starts at `##`; the `<h1>` comes from `title`.
- Internal links use `/blog/<slug>/` with a trailing slash (`trailingSlash: true`).
- Images: Pexels URLs in markdown, cached to `public/images/pexels/` by `npm run prebuild`. Every image on the site must be unique, with descriptive alt text.
