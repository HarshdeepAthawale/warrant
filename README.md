# Warrant

Marketing landing page for **Warrant** — a compliance-risk monitoring platform for
real estate developers. _Compliance you can warrant._

This repo is the **frontend** (UI/UX). The API/server layer is intentionally not built
yet; the UI is structured so it can be wired to a backend later without markup changes.

## Stack

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS v4** with CSS-variable design tokens (light + dark)
- **next-themes** — light default, dark toggle
- **framer-motion** — subtle scroll reveals
- **lucide-react** — icons

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
src/
  app/
    layout.tsx            # fonts, metadata, ThemeProvider
    page.tsx              # section composition
    globals.css           # design tokens + base styles
  components/
    theme-provider.tsx
    theme-toggle.tsx
    site/                 # page sections (nav, hero, problem, dashboard, ...)
    ui/                   # primitives (button, container, logo, reveal, status)
  lib/
    content.ts            # all copy + mock data (swap for API responses later)
    utils.ts
```

## Design

- Off-white / deep-ink base with a single **steel** accent.
- Green / amber / red are reserved **only** for compliance status.
- Tabular numerals throughout the product mocks.

## Wiring the backend later

All rendered content lives in `src/lib/content.ts` as typed structures. Replace those
exports (or fetch them) to connect real data. The pilot request form in
`src/components/site/final-cta.tsx` has a marked submit handler ready to POST.
