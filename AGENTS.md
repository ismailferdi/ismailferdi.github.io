# AGENTS.md — Ismail Ferdi Portfolio

## Commands

| Action | Command | Notes |
|--------|---------|-------|
| Dev | `npm run dev` | Already sets `--port=3000 --host=0.0.0.0`; don't add flags |
| Build | `npm run build` | Must be `vite-react-ssg build`, never plain `vite build` |
| Typecheck | `npm run lint` | This is `tsc --noEmit` — no ESLint/Prettier exists |
| Preview build | `npm run preview` | `vite preview`; alt: `npx serve dist` |
| Clean | `npm run clean` | `rm -rf dist` |
| Manual deploy | `npm run deploy` | `predeploy` auto-rebuilds; normally just push |

**CI** (`.github/workflows/deploy.yml`): push to `main`/`master` → Node 20, `npm ci` → `npm run build` → `peaceiris/actions-gh-pages` publishes `dist/`. CI does not run `lint`; run it yourself before pushing.

## Architecture

- **Single-page SSG, no routing.** Entry `src/main.tsx` → `ViteReactSSG(<App />)` from `vite-react-ssg/single-page`. All sections (Hero, Skills, Experience, Projects, Education, Contact, Footer) live in `src/App.tsx` (~650 lines); only other component is `src/components/AnimatedBackground.tsx` (canvas grid + particles).
- **Project cards pair with a flow SVG.** ChurnOps/RAGNar/Banks ETL cards are each topped by a matching diagram component (`ChurnOpsFlow`/`RAGFlow`/`ETLFlow`, same `viewBox`/stroke/text style, strokes in mint `rgba(127,224,169,…)`) — a new card needs a new SVG, copying colors verbatim from the previous card. Cards have no entrance-animation classes (only the hero uses `animate-fade-in`).
- **Tailwind v4, no config file.** Design tokens live in `src/index.css` via `@theme`, generated from `DESIGN-django.md` — that file is the source of truth for every color/spacing/radius decision; read it before any visual change. Key tokens: `--color-primary: #7FE0A9` (mint CTAs/badges, always with dark text, never white), `--color-accent: #2CB77E` (teal — inline links only, keeps links distinct from buttons), `--color-bg-dark: #0C1116` (canvas). Reusable classes: `glass-card` (= `feature-card`: surface-card + hairline border + `rounded-lg`), `pill-badge`, `badge-brand`, `text-link`, `btn-primary`. Rounded/spacing scales override Tailwind defaults (`rounded-lg` is 12px, `rounded-xl` 16px; named spacing like `p-xl`, `py-section` exists). Fonts: JetBrains Mono (`--font-sans`) for all UI/body; Cormorant Garamond (`font-serif`) for display headings only — hero H1 and CTA-band H2. Animations are pure CSS `@keyframes fade-in`; `prefers-reduced-motion` kill-switch already in `index.css`.
- **SEO/meta lives in `index.html`** (OG tags, JSON-LD, Plausible analytics, font `preconnect`). Images in `public/` served from root; keep WebP + PNG fallback via `<picture>`. Keep the `theme-color` meta in sync with `--color-bg-dark`.

## Gotchas

- `base: '/'` in `vite.config.ts` is correct for user site `ismailferdi.github.io` — do not change to a repo-name subpath.
- `@/*` alias maps to repo root (`./*`), not `src/*`.
- **Pale-mint `bg-surface-promo` appears exactly once** (the contact CTA band) — never add a second light surface; the spec reserves it as a rare interruption.
- **Footer uses `text-on-dark`, not the spec's `on-dark-soft`.** Deliberate: `on-dark-soft` on the elevated-green footer is 2.95:1 and fails AA; `on-dark` passes at 6.07:1.
- Dead code — do not use or "fix": `react-router-dom` is in `package.json` but unused (no routing); `GEMINI_API_KEY` define in `vite.config.ts` is unread anywhere in `src/`; `scripts/inline-css.js` is unreferenced by any npm script (build does not inline CSS).
- `CODEBASE.md` is stale (claims `vite build`, lists removed deps `motion`/`express`/`dotenv`). Trust `package.json` + `vite.config.ts` instead.
- No tests, no test runner. Only verification is `npm run lint` + `npm run build`.
- **`node_modules/` is git-tracked** (~2900 files) despite `.gitignore` — never `git add -A`. Stage only intended files (`git add src/App.tsx …`) and drop optimizer churn with `git checkout -- node_modules`.
- **Hollow installs happen.** If `lint`/`build` fail with `TS2307` / `ERR_MODULE_NOT_FOUND` while the package dir exists, its payload never extracted — `rm -rf node_modules/<pkg>` + `npm install` again (npm wrongly reports "up to date"). The `esbuild postinstall blocked` warnings are benign.
- **Verify render via `dist/`, not dev `curl`.** In dev mode the page hydrates client-side, so `curl localhost:3000` returns only the shell — grep `dist/index.html` after `npm run build` to confirm new content actually rendered.
