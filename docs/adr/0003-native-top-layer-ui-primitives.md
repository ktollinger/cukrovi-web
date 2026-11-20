# ADR 0003: Native Top-Layer UI Primitives for Navigation Drawer and Product Modals

- **Status:** Accepted
- **Date:** 2026-11-20
- **Author:** Kamil & Antigravity

## Context and Problem Statement

The website requires two interactive overlay patterns on mobile and desktop:
1. A slide-in navigation drawer triggered from the fixed top header's hamburger menu (containing top-level links and an expandable *Nabídka a ceník* submenu).
2. A cake detail modal that displays all photographs of a selected cake (whole cake, slice, decorated variants) alongside its full ingredients and ordering CTA.

Introducing a frontend JS framework (React/Vue) solely for a drawer and a modal would bloat the bundle and add hydration overhead to an otherwise static Astro site.

## Decision Drivers

- **Zero framework overhead:** Ship minimal vanilla JS with native browser top-layer APIs.
- **Accessibility by default:** Focus trapping, `inert` background, `Esc` dismissal, and focus restoration handled natively by `<dialog>` + `showModal()`.
- **Native mobile feel:** Swipe-to-dismiss drawer using CSS scroll-snap (`100svh` to prevent iOS address bar jumps) and scroll-driven backdrop fade.
- **Scroll hygiene:** Prevent background page scroll under open modals via CSS `overscroll-behavior: contain` without mutating `<body>` overflow.

## Proposed Decision

- Implement the mobile navigation drawer in [src/components/HeaderDrawer.astro](file:///Users/kamil/repos/rawtik/src/components/HeaderDrawer.astro) using a modal `<dialog>` with CSS scroll-snap, `@supports (animation-timeline: scroll())` backdrop fade, `IntersectionObserver` state sync, and progressive fallbacks for Safari/Firefox (`scroll-initial-target` and scroll-listener backdrop fallback). On desktop (`>= 1024 px`), use a native `popover="auto"` dropdown for the *Nabídka a ceník* submenu.
- Implement the cake gallery modal in [src/components/CakeDetailModal.astro](file:///Users/kamil/repos/rawtik/src/components/CakeDetailModal.astro) using `<dialog closedby="any">` (presented as a bottom sheet on mobile and centered modal on desktop with `@starting-style` + `allow-discrete` entry/exit transitions), a horizontal CSS scroll-snap swipe gallery synced with `IntersectionObserver` dots and desktop prev/next buttons, a JS backdrop-click fallback for browsers without `closedBy` support (Safari), and CSS `overscroll-behavior: contain` on both `dialog:modal` and `dialog::backdrop` (`overflow: hidden`).

## Alternatives Considered

### Alternative 1: Adding React/Vue Islands with a UI Component Library

- **Pros:** Pre-built drawer and modal components.
- **Cons:** Adds tens of kilobytes of client-side JS and build complexity for two simple overlays.

### Alternative 2: Custom `div` Overlays with `z-index` and `body { overflow: hidden }`

- **Pros:** Familiar legacy pattern.
- **Cons:** Prone to stacking-context bugs, manual focus-trap edge cases, layout shifts when hiding root scrollbars, and broken `position: sticky` headers.
