# Research & Experiments

Everything exploratory lives here — **not** in `content-plan-+-outline/` and **not** in `content/`.

Those two directories hold work that is finished and acted on:

- `content-plan-+-outline/` — the single current content plan
- `content/blog/` — published articles

This directory holds everything that led to those decisions but isn't a deliverable itself.

## What goes here

- SERP and competitor analysis for a topic
- Keyword research, clustering experiments, volume notes
- Audit scripts and their output (SEO checks, duplicate-content checks, link validation)
- Draft angles or outlines that were considered and rejected
- Any one-off scratch analysis worth keeping for reference

## What does not go here

- Throwaway scripts that only mattered for one command — use the session scratchpad, not the repo
- Anything superseded. Delete it rather than leaving a stale copy; git history is the archive
- Copies of the content plan. There is exactly one plan file, and it lives in `content-plan-+-outline/`

## Convention

One folder per investigation, dated, with a short `README.md` saying what the question was and what the answer turned out to be:

```
research/
  2026-09-07-batch1-serp-analysis/
    README.md          <- the question, the finding, the decision it drove
    competitors.md
    check-metadata.js
```

If an investigation produced a decision that shapes the plan, record the *conclusion* in the plan file and leave the *evidence* here. The plan should be readable without opening this directory.

## Housekeeping

Superseded research is garbage, not history. When an investigation is closed and its conclusion is in the plan, delete the folder — git keeps it if anyone ever needs it back.
