# AGENTS.md — Ismail Ferdi Portfolio

## Commands

| Action | Command | Notes |
|--------|---------|-------|
| Dev server | `npm run dev` | `--port=3000 --host=0.0.0.0` |
| Build | `npm run build` | Uses `vite-react-ssg build` (not `vite build`) |
| Typecheck | `npm run lint` | `tsc --noEmit` (no ESLint/Prettier in this repo) |
| Clean | `npm run clean` | `rm -rf dist` |
| Preview | `npx serve dist` | After build |
| Manual deploy | `npm run deploy` | `gh-pages -d dist` |

**CI/CD**: Push to `main`/`master` → GitHub Actions (`npm ci` → `npm run build` → publish `dist/` to `gh-pages` branch). Node 20.

## Architecture

- **Single-page SSG** — `vite-react-ssg` pre-renders HTML at build time; React hydrates client-side. No routing, no SSR server.
- **Entry**: `src/main.tsx` → `ViteReactSSG(<App />)` from `vite-react-ssg/single-page`
- **All content in one file**: `src/App.tsx` (~450 lines) — Hero, Skills, Experience, Project, Education, Contact, Footer + inline helper components (`DetailedSkillCard`, `ContactCard`, `ChurnOpsFlow`). The only separate component is `AnimatedBackground.tsx`.
- **Styling**: Tailwind v4 via `@tailwindcss/vite` plugin (no PostCSS config). Classes defined in `src/index.css` using `@theme`. Colors: `accent` (#00F5FF), `bg-dark` (#0A0A0B). Hardcoded dark theme (no toggle).
- **Animations**: pure CSS `@keyframes fade-in` with stagger delays. No motion/framer library. Respects `prefers-reduced-motion`.
- **Images**: WebP with PNG fallback via `<picture>` in `<img>`. Static assets in `public/`.

## Key Config Details

- `tsconfig.json`: `"noEmit": true`, path alias `@/*` → `./*`, `"moduleResolution": "bundler"`
- `vite.config.ts`: HMR disabled via `DISABLE_HMR` env var (for AI Studio). `GEMINI_API_KEY` injected via `Vite.define` (not actively used in source).
- Tailwind v4: `@import "tailwindcss"` (no `tailwind.config.js` — theme values in `index.css` via `@theme`).
- No test files, no test framework, no test scripts.
- `dist/` and `.env.local` in `.gitignore`.
- `CODEBASE.md` may be stale (references removed deps like `motion`, `express`, `dotenv`).

## Context Dependencies

- **`package.json`**: source of truth for scripts, deps, homepage URL.
- **`README.md`**: accurate project overview (kept up-to-date).
- **`.github/workflows/deploy.yml`**: actual CI pipeline.
