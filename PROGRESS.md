# Project Progress — Encryptus Docs (Next.js port)

A living log for tracking work on the Next.js refactor of the Encryptus docs site.
Newest entries at the top.

---

## 2026-06-25 — Initial refactor complete ✅

Refactored the single-file `index.html` into a Next.js 16 (App Router) + TypeScript +
Tailwind v4 app. `reference/index.html` retained as the visual source of truth.

### Environment
- **Project relocated `C:` → `D:\workwestie\enc-docs`** because the C: drive was full
  (0 bytes free). npm cache also redirected to D:. Work out of D: going forward.
- Stack: Next.js 16.2.9, React 19, Tailwind v4, `next-themes`. Node 22 / npm 10.
- `.git` history moved with the project.

### Done
- [x] Scaffold Next.js app; move `index.html` → `reference/index.html`
- [x] Theme tokens ported verbatim → `globals.css` (`:root` / `:root[data-theme="dark"]`)
- [x] `next-themes` (attribute `data-theme`, storageKey `ed-theme`, SSR-safe, no flash)
- [x] Fonts via `next/font` (Oswald + IBM Plex Sans) — no Google `<link>`
- [x] Data modules extracted & typed in `src/data/` (api, guides, errors, site) + `tsSnippet()`
- [x] Routes: `/`, `/guides/[slug]`, `/api/[group]/[endpoint]`, `/errors` (SSG +
      `generateMetadata`); `/guides` & `/api` redirect to first child
- [x] Components: Header, Footer, GuideSidebar, ApiSidebar, TableOfContents,
      SearchOverlay (⌘K), MobileDrawer, MethodBadge, CodeBlock, GuideArticle
- [x] TryItConsole client island (editable cURL/TS, auth token, live fetch + stub fallback)
- [x] `data-hover` pattern replaced with CSS hover classes
- [x] README + `.env.local.example`
- [x] Verified: `tsc`, `eslint`, `next build` all pass; 37 routes prerendered
- [x] Visual diff vs reference (Home/API/Guide/Errors/Search, light + dark)
- [x] Project memory kept in the auto-memory folder (so it auto-loads each session),
      not in the repo

### Confirmed divergences from the reference (intentional, user-approved)
1. **Per-route stubs** — each route has its own URL + metadata; bodies share the
   onboarding example, data shaped for later per-endpoint fill-in.
2. **Themed guide/error bodies** — hardcoded-light bodies now follow dark mode.

### Open / next steps
- [ ] Fill in real per-guide and per-endpoint body content (structure is ready)
- [ ] Wire `NEXT_PUBLIC_API_BASE_URL` to a live/sandbox API for the Try It console
- [ ] Decide git workflow & commit (not yet committed; repo still on `main` with only
      the original `index.html` committed)
- [ ] Security: the `leakeyENC-github.md` memory holds a plaintext GitHub token; it
      lives in the auto-memory folder (outside the repo) — keep it that way

### How to run
```bash
cd /d/workwestie/enc-docs
npm install      # if node_modules missing
npm run dev      # http://localhost:3000
npm run build
npm run lint
```
