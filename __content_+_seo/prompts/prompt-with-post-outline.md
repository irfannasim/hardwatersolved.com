# Prompt: Write a New Article

Use this together with `seo-constraints.md`, which is the authoritative list of SEO rules. This file only covers what that one doesn't: preconditions, research steps, and the report to hand back.

Pick the article from the plan:
`__content_+_seo/content-plan-+-outline/whole-house-water-softener-troubleshooting-first-plan.md`

Each plan entry already carries its focus keyword, meta title, slug, meta description, funnel role, and — most importantly — a **Unique angle** field naming the specific asset that article must contain. Build the outline from that angle. Do not reuse an outline structure from another article; near-duplicate structure across articles is what the plan was rebuilt to eliminate.

---

## Preconditions

0. `article-category-slug=blog` — articles live at `content/blog/<slug>.md` and publish to `/blog/<slug>/`.
1. **Verify the article doesn't already exist.** Check `content/blog/` before writing.
2. **Mark it complete in the plan file** when done, using the existing format:
   `### NNN. Title ✅ Published — YYYY-MM-DD — /blog/slug/`
3. **Internal linking: only link to articles that are actually published.** If the plan suggests a link to an article that doesn't exist yet, skip it — don't leave a dead link for the future.

---

## Before writing

1. Research the focus keyword and its cluster keywords.
2. Analyse the top 3 ranking pages for the query by actually viewing them.
3. Match their format (listicle, tutorial, guide, comparison).
4. Match their length within about 20%.
5. Cover every topic all three of them cover.
6. Add 1–2 topics they missed — this is where the plan's Unique angle comes in.
7. Answer the main question directly in the opening paragraph, for the featured snippet.
8. **FAQs from "People Also Ask"** — put them in the frontmatter `faqs:` array only. The renderer outputs them as a section plus FAQPage schema, so repeating them in the body creates duplication.
9. **2–3 external links**, each verified as live (not 404) before including. Prefer primary sources: EPA, CDC, USGS, NSF, WQA, university extension services.
10. **2–3 internal links** using `/blog/<slug>/` with a trailing slash.
11. **Money / service / quote page links** — link only where it genuinely fits the reader's next step, never forced.
    *Current status: this site has no money or service pages yet (only about, contact, author, and legal pages), so skip this step until such pages exist.*
12. No generic or repetitive paragraphs. Every section must answer a real question, solve a problem, compare options, or give an actionable step.
13. **Every image must be unique across the whole site**, including the featured image. Place inline images directly after the H2 they illustrate. Write a descriptive, SEO-useful alt text for each.

### Images

Source from Pexels and verify each URL returns 200 before using it. `npm run prebuild` caches them into `public/images/pexels/`.

*Note: the Pexels API key lived in `.env`, which was removed from the repo. Without it, source photo IDs from Pexels search pages and verify each image URL directly.*

---

## Extra SEO constraint

Beyond `seo-constraints.md`: **include a number in the SEO title where it fits naturally** (e.g. "5 Warning Signs", "3 Proven Methods").

---

## Report back

1. Confirm every precondition was met — especially #1, that the article didn't already exist.
2. Confirm every image is relevant to the content and unique site-wide, including the featured image.
3. List the primary and cluster keywords actually used.
4. Show each SEO constraint as pass/fail with the measured value (character counts, keyword placements).
5. Confirm external links were checked for 404s and internal links point at published articles.
6. Confirm the plan file was updated with the published marker.
