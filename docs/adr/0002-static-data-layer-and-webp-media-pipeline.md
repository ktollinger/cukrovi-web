# ADR 0002: Typed Static Data Layer and Pre-Optimized WebP Media Pipeline

- **Status:** Accepted
- **Date:** 2026-11-20
- **Author:** Kamil & Antigravity

## Context and Problem Statement

Product data (9 whole cakes with multiple photos each, 5 Christmas cookies, 3 dessert slices, pricing, ingredients, and contact info) was initially embedded inline inside `src/pages/index.astro`. Meanwhile, raw photographs delivered by email total over 115 MB as full-resolution JPEGs, which would make mobile loading on GitHub Pages unacceptably slow.

We also need a single source of truth for prices, ingredients, and contact details so updates (such as confirming the 24 cm cake price or adding Christmas order deadlines) happen in one place.

## Decision Drivers

- **Single source of truth:** Prices, phone numbers, WhatsApp links, and ingredients should never be duplicated across pages.
- **Fast mobile loading (CWV / LCP):** Images served from GitHub Pages must be lightweight and modern (WebP, resized to max 1200 px).
- **Zero hosting/CMS cost:** Keep the project 100% static with no external CMS or database dependencies.
- **Type safety:** Catch missing fields or broken image paths at build time with TypeScript.

## Proposed Decision

- Store all site configuration, navigation, and contact details in [src/data/site.ts](file:///Users/kamil/repos/rawtik/src/data/site.ts).
- Store all product catalogs (Christmas cookies, whole cakes, dessert slices) with explicit TypeScript interfaces in [src/data/products.ts](file:///Users/kamil/repos/rawtik/src/data/products.ts).
- Pre-convert and resize all source photographs from `podklady/` to WebP (max 1200 px longest edge, quality 82) under `public/images/dorty/`, `public/images/dezerty/`, and `public/images/cukrovi/`. Keep original source photos in untracked `podklady/`.

## Alternatives Considered

### Alternative 1: Headless CMS (e.g. Sanity, Strapi, Directus)

- **Pros:** Non-technical editing UI for the pastry chef.
- **Cons:** Unnecessary operational overhead and complexity for a small static catalog that changes only a few times per year.

### Alternative 2: Serving Raw JPEGs Directly

- **Pros:** No conversion step.
- **Cons:** 115 MB+ payload, slow mobile loads, poor Lighthouse/LCP scores, and bloated Git repository history.
