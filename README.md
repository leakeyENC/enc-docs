# Encryptus Docs

A Next.js (App Router) + TypeScript + Tailwind v4 port of the Encryptus documentation
site. The original single-file build is preserved at [`reference/index.html`](reference/index.html)
as the visual source of truth — the app is meant to render pixel-identically to it.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export of all guide/API/error routes
npm run lint
```

Copy `.env.local.example` → `.env.local` to point the "Try It" console at a live API.

## Theme system: tokens → Tailwind

The full light/dark design system lives as CSS custom properties in
[`src/app/globals.css`](src/app/globals.css), ported verbatim from the reference:

- Light tokens are defined on `:root`; dark tokens on `:root[data-theme="dark"]`.
- Theme switching is driven by a **`data-theme` attribute** (not Tailwind's `dark:`
  variant), managed by [`next-themes`](src/components/ThemeProvider.tsx) with
  `attribute="data-theme"`, `storageKey="ed-theme"`, and `defaultTheme="light"`.
  `next-themes` writes the attribute on `<html>` before hydration, so there is no
  flash of the wrong theme. The original `ed-theme` localStorage key is preserved.
- A Tailwind v4 `@theme inline` block maps the most-used tokens to utility colors
  (e.g. `--color-accent → var(--c-accent)`, so `text-accent`/`bg-surface` work).
  Most components reference `var(--c-*)` directly in inline styles to guarantee fidelity.

Two intentional differences from the reference:

1. **Per-route stubs** — every guide and endpoint has its own URL, SEO metadata, and
   (for API) per-endpoint header, but the article body / request-response tables are
   the shared onboarding example. Data modules carry optional fields so real
   per-endpoint bodies can be added later without refactoring.
2. **Themed guide/error bodies** — the reference hardcodes light hex in the guide and
   error-codes bodies (they stay light in dark mode). Those values were ported to
   `--c-*` tokens (plus a few new ones: `--c-guide-bg`, `--c-tip-*`,
   `--c-service-chip-bg`, `--c-codeblock-*`, `--c-cta-band-*`) so both bodies follow
   the theme.

## Routing map

| Route | Source view | Generation |
|---|---|---|
| `/` | Home | static |
| `/guides` | — | redirects to `/guides/overview` |
| `/guides/[slug]` | Guide article | SSG (`generateStaticParams` over `GUIDE_NODES` incl. KYC children) |
| `/api` | — | redirects to `/api/partners/partners-onboarding` |
| `/api/[group]/[endpoint]` | API reference | SSG (`generateStaticParams` over `API_GROUPS`) |
| `/errors` | Error codes | static |

Guide and API pages each define `generateMetadata` for per-page `<title>` + description.

## Server Components vs client islands

Everything is a Server Component by default. The only client islands (`"use client"`):

- [`ThemeProvider`](src/components/ThemeProvider.tsx) — next-themes wrapper
- [`Header`](src/components/Header.tsx) — owns search/mobile state, theme toggle, ⌘K
- [`ThemeToggle`] is inlined in the Header
- [`SearchOverlay`](src/components/SearchOverlay.tsx) — ⌘K command palette
- [`MobileDrawer`](src/components/MobileDrawer.tsx) — responsive nav drawer
- [`GuideSidebar`](src/components/GuideSidebar.tsx) / [`ApiSidebar`](src/components/ApiSidebar.tsx) — collapsible groups + active state from the route
- [`TryItConsole`](src/components/TryItConsole.tsx) — editable cURL/TS, auth token, live `fetch` (or stubbed response when `NEXT_PUBLIC_API_BASE_URL` is unset)

Server Components: `Footer`, `TableOfContents`, `GuideArticle`, `CodeBlock`,
`MethodBadge`, and all four route pages.

## Data

All content lives in typed modules under [`src/data/`](src/data): `api.ts`, `guides.ts`,
`errors.ts`, `site.ts` — ported verbatim from the reference, including the `tsSnippet()`
code-sample generator and the shared onboarding request/response examples.
