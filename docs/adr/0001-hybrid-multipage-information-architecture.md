# ADR 0001: Hybrid Multi-Page Information Architecture with Seasonal Toggle

- **Status:** Accepted
- **Date:** 2026-11-20
- **Author:** Kamil & Antigravity

## Context and Problem Statement

During the initial brainstorming session (15. 11. 2026), single-page bakery websites (`pecu-nepecu.cz`, `karawba.cz`) were considered as inspiration. However, in follow-up hand-drawn wireframes and emails (17.–18. 11. 2026), the pastry chef (Andrea) structured the site around five top-level sections (*Domů*, *O nás*, *Nabídka a ceník*, *Jak objednat a převzetí*, *Kontakt*), where *Nabídka a ceník* acts as a hub branching into three distinct product categories (*Vánoční cukroví*, *Celé dorty*, *Dezerty*), each with its own hero photo, pricing table, product gallery, and order CTA.

Additionally, *Vánoční cukroví* is seasonal: it is the primary hero and first offering before Christmas, but must be easy to hide or deprioritize after the holiday season without restructuring the entire site.

## Decision Drivers

- **Mobile-first UX:** Most visitors arrive from Instagram (`@rawtik_cz`) on mobile devices; a single page containing 9 multi-photo cakes, 5 Christmas cookies, 3 dessert slices, and all pricing tables would be overly long to scroll.
- **Direct shareability:** Andrea needs to share direct links to specific offerings (e.g. `/vanocni-cukrovi` or `/cele-dorty`) in Instagram stories and WhatsApp messages.
- **Seasonal maintainability:** Switching between Christmas season and year-round cake mode should require a single configuration change.
- **Static performance:** Astro generates zero-JS static HTML pages with minimal overhead.

## Proposed Decision

Adopt a **hybrid multi-page architecture**:

- **Landing page (`/`):** Contains the Hero (*Domů*), the 3-card *Nabídka a ceník* hub (`#nabidka`), *O nás* (`#o-nas`), *Jak objednat a převzetí* (`#jak-objednat`), and *Kontakt* (`#kontakt`).
- **Dedicated category pages:** `/vanocni-cukrovi`, `/cele-dorty`, and `/dezerty`, each following Andrea's exact section structure and linking all order CTAs back to `/#jak-objednat`.
- **Base-path safety:** All internal URLs and asset paths pass through `withBase()` in `src/data/site.ts` so routes work identically on `localhost`, GitHub Pages (`/rawtik/`), and a future custom domain (`/`).
- **Seasonal flag:** Control Christmas prominence via `SITE.christmasSeason` in `src/data/site.ts`.

## Alternatives Considered

### Alternative 1: Pure Single-Page Application (One-Page)

- **Pros:** Everything is reachable by scrolling without page loads.
- **Cons:** Very tall mobile page (~30+ product photos), harder to link directly to a specific product category from Instagram, and deviates from Andrea's 3-card category hub wireframe.

### Alternative 2: Separate Pages for Every Top-Level Section

- **Pros:** Strictly 1:1 with each paper sheet.
- **Cons:** Forces unnecessary navigation taps for short informational sections (*O nás*, *Jak objednat*, *Kontakt*), increasing friction for customers ready to order.
