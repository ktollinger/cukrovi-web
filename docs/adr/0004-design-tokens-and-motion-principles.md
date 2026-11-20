# ADR 0004: Design Tokens, Single Primary Action, and Progressive Motion Principles

- **Status:** Accepted
- **Date:** 2026-11-20
- **Author:** Kamil & Antigravity

## Context and Problem Statement

The initial Rawtík prototype suffered from visual clutter typical of early drafts: ~200 hardcoded Tailwind arbitrary hex colors (`bg-[#8B2635]`), competing high-contrast CTAs on every screen (bright green WhatsApp next to burgundy "Objednat"), decorative multi-stop gradients, and zero navigational or state transitions.

To look and feel like a polished modern brand application without sacrificing simplicity or loading speed, we need clear, enforceable design and motion rules.

## Decision Drivers

- **Calm visual hierarchy:** One clear primary action (`Objednat`) per section; secondary contact channels (phone, WhatsApp, email) share a unified, restrained brand style.
- **Zero external font CDN dependencies:** Self-host variable fonts via `@fontsource-variable/*` for faster rendering and GDPR cleanliness.
- **Maintainable styling:** Centralize colors, typography, radii, and easing curves in Tailwind v4 `@theme` tokens inside [src/styles/global.css](file:///Users/kamil/repos/rawtik/src/styles/global.css).
- **Accessible, progressive motion:** Transitions and scroll-driven reveals must never delay LCP, must run on compositor-friendly properties (`opacity`, `translate`), and must disable completely under `prefers-reduced-motion: reduce`.

## Proposed Decision

1. **Design Tokens:** Define semantic tokens (`--color-cream`, `--color-sand`, `--color-ink`, `--color-ink-soft`, `--color-ink-muted`, `--color-brand`, `--color-ginger`, `--color-cinnamon`, `--color-line`, `--font-sans`, `--font-display`, `--radius-card`, `--ease-out-soft`) in [src/styles/global.css](file:///Users/kamil/repos/rawtik/src/styles/global.css) and ban arbitrary hex classes in components/pages.
2. **UI Primitives:** Extract shared [Button.astro](file:///Users/kamil/repos/rawtik/src/components/ui/Button.astro), [PhotoPlaceholder.astro](file:///Users/kamil/repos/rawtik/src/components/ui/PhotoPlaceholder.astro), [PageHero.astro](file:///Users/kamil/repos/rawtik/src/components/PageHero.astro), [Breadcrumbs.astro](file:///Users/kamil/repos/rawtik/src/components/Breadcrumbs.astro), [OrderCta.astro](file:///Users/kamil/repos/rawtik/src/components/OrderCta.astro), and [CakeCard.astro](file:///Users/kamil/repos/rawtik/src/components/CakeCard.astro).
3. **Motion Budget (150–300 ms, progressive enhancement):**
   - Cross-document View Transitions (`@view-transition { navigation: auto; }`) with shared `view-transition-name` on category cards (`cat-*`) and subpage heroes.
   - Subtle scroll-driven entry reveal (`.reveal`, `14px` upward translate + opacity) gated behind `@supports ((animation-timeline: view()) and (animation-range: entry))`, never applied to hero/LCP elements.
   - State-aware sticky header via `container-type: scroll-state` (`@container site-header scroll-state(stuck: top)`).
   - All motion wrapped in `@media (prefers-reduced-motion: no-preference)`.

## Alternatives Considered

### Alternative 1: JS Animation Libraries (GSAP / Framer Motion)

- **Pros:** Identical animations across all browsers including older Firefox/Safari.
- **Cons:** Adds substantial client-side JS weight for purely decorative effects on a static bakery showcase.

### Alternative 2: Keeping Google Fonts CDN

- **Pros:** Zero npm font packages.
- **Cons:** Extra DNS/TLS round-trips, render blocking, and third-party IP logging in the EU.
