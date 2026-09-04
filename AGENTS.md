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
- **Project cards pair with a flow SVG.** ChurnOps/RAGNar/Banks ETL cards are each topped by a matching diagram component (`ChurnOpsFlow`/`RAGFlow`/`ETLFlow`, same `viewBox`/stroke/text style) — a new card needs a new SVG, copying classes verbatim from the previous card. Cards have no entrance-animation classes (only the hero uses `animate-fade-in`).
- **Tailwind v4, no config file.** Theme (`--color-accent: #00F5FF`, `--color-bg-dark: #0A0A0B`, JetBrains Mono) is in `src/index.css` via `@theme`. Reusable classes: `glass-card`, `pill-badge`. Animations are pure CSS `@keyframes fade-in`; `prefers-reduced-motion` kill-switch already in `index.css`.
- **SEO/meta lives in `index.html`** (OG tags, JSON-LD, Plausible analytics, font `preconnect`). Images in `public/` served from root; keep WebP + PNG fallback via `<picture>`.

## Gotchas

- `base: '/'` in `vite.config.ts` is correct for user site `ismailferdi.github.io` — do not change to a repo-name subpath.
- `@/*` alias maps to repo root (`./*`), not `src/*`.
- Dead code — do not use or "fix": `react-router-dom` is in `package.json` but unused (no routing); `GEMINI_API_KEY` define in `vite.config.ts` is unread anywhere in `src/`; `scripts/inline-css.js` is unreferenced by any npm script (build does not inline CSS).
- `CODEBASE.md` is stale (claims `vite build`, lists removed deps `motion`/`express`/`dotenv`). Trust `package.json` + `vite.config.ts` instead.
- No tests, no test runner. Only verification is `npm run lint` + `npm run build`.
- **`node_modules/` is git-tracked** (~2900 files) despite `.gitignore` — never `git add -A`. Stage only intended files (`git add src/App.tsx …`) and drop optimizer churn with `git checkout -- node_modules`.
- **Hollow installs happen.** If `lint`/`build` fail with `TS2307` / `ERR_MODULE_NOT_FOUND` while the package dir exists, its payload never extracted — `rm -rf node_modules/<pkg>` + `npm install` again (npm wrongly reports "up to date"). The `esbuild postinstall blocked` warnings are benign.
- **Verify render via `dist/`, not dev `curl`.** In dev mode the page hydrates client-side, so `curl localhost:3000` returns only the shell — grep `dist/index.html` after `npm run build` to confirm new content actually rendered.
