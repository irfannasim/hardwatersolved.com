# Diagram Guidelines

Authoritative rules for diagrams in articles. Apply them to **every new article and every article edit**.

## The rule

**Where a reader needs a diagram, draw an SVG diagram.** Do not use any of these instead:

- **ASCII or text diagrams** in code blocks, arrows typed as `──►`, `→`, box-drawing characters, and similar. They read badly, break on phones, and confuse more than they explain.
- **Metaphorical stock photos.** A "blueprint and compass" standing in for valve flow paths, a "fishing float" standing in for a brine float, or "a stack of pipes" standing in for a distributor tube. If the alt text needs "the kind of…", "similar to…", "a reminder that…" or "the equivalent of…" to connect the photo to the topic, the photo is forced. Replace it with a diagram, or delete it.
- **Prose alone**, when the text is describing a flow path, a layout, a sequence of positions, or a set of levels.

A photo that literally shows the real subject stays: an actual softener, actual scale on a faucet, actual stained laundry.

**Never convert a diagram to PNG or JPG.** Diagrams ship as `.svg` files.

## When an article needs a diagram

Draw one when the text explains any of these:

| Needs a diagram | Example |
|---|---|
| Water flow path or plumbing order | Treatment train, bypass positions, where to install, sampling points |
| Internal anatomy of a part | Mineral tank, control valve, brine well, injector, aerator stack |
| A sequence or cycle | Regeneration positions, ion exchange, iron oxidising |
| Levels and zones | Salt and water levels, sediment depth, bed expansion |
| A chain of if/then checks | Diagnostic order, decision matrix |
| A scale or range | Hardness bands, LSI, pH, where a visual scale beats a table |
| A before/after mechanism | Scale on an element, soap curd on skin, film vs etch on glass |

Do **not** draw one for anything a table already shows perfectly, for simple lists, or for decoration. Many articles need none. Mechanism-heavy articles may need several. Two near-identical diagrams in one article is one too many. Every diagram on the site must be unique; if another article covers the same idea, draw it from this article's angle.

## Accuracy

Every label, number and arrow comes from the article text. Do not invent values the article does not give. Mark illustrative charts as illustrative. If the article is ambiguous or contradicts itself, fix the text or leave that detail out. Never draw a guess.

## Files

- Location: `public/diagrams/`. All diagrams live in this folder and nowhere else.
- Filename: descriptive kebab-case, core subject first, e.g. `water-softener-control-valve-backwash-position.svg`. The filename is part of image SEO. Do not use `diagram-1.svg`.
- Hand-written SVG only. No embedded raster images (`<image>`), no `<script>`, no `<foreignObject>`, no external references, and no web fonts.
- Target size is under 15 KB. Use `<pattern>` for textures instead of hundreds of shapes.

## Required SVG structure (SEO and accessibility)

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 544" width="760" height="544"
     role="img" aria-labelledby="xyz-title xyz-desc">
<title id="xyz-title">Water softener control valve, position 2: Backwash</title>
<desc id="xyz-desc">One or two sentences saying what the diagram shows, with the main keyword used naturally.</desc>
<defs>…markers, patterns…</defs>
<rect width="760" height="544" fill="#ffffff"/>
…
</svg>
```

- `role="img"` and `aria-labelledby` pointing at both `<title>` and `<desc>`.
- Numeric `width` and `height` equal to the `viewBox` size. The renderer reads them to reserve space and avoid layout shift.
- A solid white background rect. The site has a dark mode, and diagrams stay on a light card.
- Use ids unique to the file (a short prefix), so two diagrams on one page never clash.
- All text is real `<text>`, never paths, so it stays selectable and indexable.

## Visual style

- **Canvas:** 760 px wide. Height as needed, usually 400–620. Keep a 30 px margin.
- **Font:** `font-family="Arial, Helvetica, sans-serif"` on every `<text>`.
- **Sizes:** diagram heading 20–22 bold, labels 14–15, secondary notes 13. Nothing below 12.
- **Palette:** use the site palette, and give each colour one fixed meaning across the site.

| Meaning | Colour |
|---|---|
| Ink / headings / dark parts | `#0b2f4a` |
| Muted labels | `#52697a` |
| Steel outlines | `#3a5a72` |
| Hard / untreated water | `#c2410c` |
| Soft / treated water, correct option | `#0e7490` |
| Brine | `#7c3aed` |
| To drain / waste | `#78716c` |
| Not flowing / inactive | `#cbd5e1` |
| Fault / wrong / warning | `#dc2626` |
| OK / correct tick | `#15803d` |
| Resin beads | `#e2b865` on `#f6ead2` |
| Water fill | `#dbeafe` |
| Iron / rust | `#b45309` |

- Add a small legend when colours carry meaning.
- Flow arrows are thick (5–6 px) with arrowhead markers. Leader lines to labels are thin (1–1.5 px) and muted.
- Show a series of states (positions, stages) with the **same base drawing in each**, and change only what differs. Readers compare the states that way.

## Layout rules: no overlaps, ever

- No text overlaps other text.
- No line or arrow passes through a label. Route pipes around labels, or move the labels.
- Labels sit fully inside or fully outside their box. None straddles an edge.
- Nothing is clipped by the canvas edge.
- Leave at least 8 px between a label and any line.

Mark shapes so the checker can test them:

- `class="ln"` on every pipe, arrow and leader line.
- `class="box"` on every rectangle that contains labels.

## Using a diagram in an article

The diagram goes on its own line, as its own paragraph:

```markdown
![Alt text: what the diagram shows, with the keyword, ≤160 chars](/diagrams/file-name.svg "Short caption, ≤100 chars")
```

- The **alt** describes the content for search and screen readers.
- The **title** in quotes becomes the visible `<figcaption>`. Write it as a takeaway, not a restatement of the alt.
- The renderer shows diagrams uncropped at their own aspect ratio and links them to the full-size file, so phone readers can zoom. It also adds them to the page's `ImageObject` schema.
- Update the surrounding prose. Remove phrases like "the text diagram below" or "the last line of each diagram".

## Verification (mandatory before publishing)

1. Run the checker on every new or changed diagram:

   ```
   npm run check:diagrams -- <scratch-dir> public/diagrams/<file>.svg
   ```

   It must print `OK` for each file. It fails on missing title/desc/role, text overlaps, lines through text, text crossing box edges, clipped text, and fonts under 11 px.
2. **Open every rendered PNG and look at it.** The checker cannot judge whether arrows point the right way, whether the drawing matches the text, or whether it is easy to understand. Fix anything that is cramped, ambiguous or wrong, then re-run.
3. Confirm the markdown path matches the filename, and that no leftover forced photo or ASCII block remains in that section.
