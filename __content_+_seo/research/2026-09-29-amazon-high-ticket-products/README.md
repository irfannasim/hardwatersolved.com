# Amazon high-ticket products for the commercial layer

**Question:** Which products for each Part 2 commercial article are sold on Amazon.com at $100 or more?

**Method (2026-09-29):** Five parallel research passes by product category. ASINs were taken only from amazon.com URLs seen in search results. Amazon product pages do not expose prices to fetch tools, and camelcamelcamel blocks them. Prices therefore come from brand stores and retailers and are marked approx, or "price unverified". The web-search budget ran out part-way through every pass, so gaps are flagged in each file.

**Findings that shaped the plan:**
- 18 planned articles covered categories that sell under $100 (salt, test kits, shower filters and heads, cleaners, bypass valves, salt monitors, install kits, loose parts, salt delivery, labs, hot tub pre-filters, point-of-use and magnetic softeners). They were replaced by Batch C9.
- Culligan, Kinetico, EcoWater (own name), RainSoft, Hague and Rheem sell no whole-house softeners on Amazon. Their pages carry "Amazon alternatives" blocks.
- Discontinued or unavailable: every GE softener (per geappliances.com), Morton MSD34C, Fleck 5810SXT, VIQUA IHS22-D4 and LeakSmart.
- Aquasure Fortitude Pro is a carbon filter, not a softener. Aquasure Signature Elite is salt-based, not salt-free. Pelican has no salt-based softener on Amazon.

**Decision:** The product blocks in the plan (`content-plan-+-outline/`) are built from these files. Before an article is written, its ASINs get a live Amazon price and stock check.

| File | Covers |
|---|---|
| `softeners-salt-based.md` | Fleck 5600/7000/9100SXT, Clack, Aquasure, SoftPro, SpringWell, AFWFilters, DuraWater |
| `cabinet-bigbox-portable.md` | Whirlpool, GE, Morton, WaterBoss, Tier1, EcoPure, portables, bundles, dealer-brand checks |
| `salt-free-descalers.md` | TAC/NAC, NuvoH2O, descalers, polyphosphate |
| `well-water-equipment.md` | Iron, sulfur, manganese, tannin, sediment, calcite, UV, chlorine injection |
| `ro-parts-shutoffs.md` | RO systems, control valves, resin, brine tanks, carbon, leak shutoffs |
