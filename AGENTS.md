# Agent notes

## Commands

- `npm run dev` — Vite dev server on port 3000, host `0.0.0.0`.
- `npm run typecheck` — `tsc --noEmit`.
- `npm run build` — `vite-react-ssg build`; must stay this way (SSG is the whole point of the project).
- `npm run preview` — preview `dist/`.
- There are **no test, lint or format scripts**. Verify with typecheck + build, then inspect `dist/index.html` — dev-server `curl` only returns the shell because hydration is client-side.
- CI runs Node 20 + `npm ci` + `npm run build` on push to `main`/`master` and publishes `dist/` to `gh-pages`. Never push or deploy by hand.

## Stack (post-redesign)

- React 19 + Vite 6 + `vite-react-ssg/single-page`. `base: '/'` is correct for the user Pages site; the `DISABLE_HMR` toggle in `vite.config.ts` is marked "Do not modify".
- Astryx design system (Meta, beta): `@astryxdesign/core`, `@astryxdesign/theme-matcha`, `@astryxdesign/cli` are all pinned to **exactly 0.7.17**. `@stylexjs/stylex` is the core peer dependency. Pin every `@astryxdesign/*` package to the same exact version.
- Theme: **Matcha**, dark-first, customized locally. `src/themes/portfolioTheme.ts` extends Matcha and is built to `src/themes/portfolio-matcha.{ts,css,d.ts,js}`; `App.tsx` wraps the app in `<Theme theme={portfolioMatchaTheme} mode="dark">` and imports the built theme CSS and Matcha fonts.
- `AppShell` is the outermost frame: it owns the skip link, banner landmark and `main` landmark. Do not add a second skip link, `<header>` or `<main>`.
- `src/index.css` declares the cascade layer order before any import, then loads `@astryxdesign/core/reset.css` and `@astryxdesign/core/astryx.css`. It also contains token-based global rules: body background/text, reduced-motion, `.section-anchor` scroll offset, and project flow-diagram SVG styling. Keep `main.tsx` importing `./index.css` first; `App.tsx` imports theme CSS/fonts after.
- Tailwind has been removed. Do not re-add Tailwind utilities or `@apply`; use Astryx components and `var(--color-*|--spacing-*|--radius-*|--font-*)` tokens.
- SVG icons come from `lucide-react`; Astryx `Icon` accepts an SVG component directly. The three project flow SVGs are kept and must be painted with `var(--color-*)` tokens, never hardcoded colors.

## Content and metadata rules

- All copy, links and facts live in `src/data/portfolio.ts`. Restructure for scannability but never rewrite copy or invent metrics.
- `index.html` owns title, description, OG/Twitter cards, canonical, JSON-LD, Plausible and the preloaded WebP. Keep them intact. `theme-color` must match the active theme's dark body background (`#12140e` for Matcha dark).
- Keep accessibility: skip link, one `h1`, visible focus, AA contrast, 44px touch targets, `prefers-reduced-motion`. Prefer Astryx `Dialog`/`BottomSheet` over hand-rolled focus traps.
- Astryx CLI: `npx --no-install @astryxdesign/cli …` (scoped package; an unscoped `npx astryx` is not this project's CLI). Useful: `component <Name>`, `docs <topic>`, `theme list`, `doctor [--built dist]`, `search`.

## Config quirks and gotchas

- `@/*` maps to the repo **root**, not `src/`; all source imports are relative.
- `process.env.GEMINI_API_KEY`, `scripts/inline-css.js`, `theme.template.ts` and the `tsx` devDependency are leftover scaffold — leave them alone.
- `node_modules/` was removed from git tracking but the removal is staged, not committed. **Never `git add -A`**; stage only intended files by explicit path.
- Hollow installs happen: if typecheck/build fail with `TS2307` / `ERR_MODULE_NOT_FOUND` while the package directory exists, `rm -rf node_modules/<pkg>` then `npm install` again. The esbuild postinstall warnings are benign.

## Deploy

Push to `main`/`master` triggers `.github/workflows/deploy.yml`: `npm ci` → `npm run build` → `peaceiris/actions-gh-pages` publishes `dist/` to `gh-pages`.

<!-- ASTRYX:START -->
Astryx v0.7.17 · 174 components
CLI: run every command as `npx astryx <cmd>` (shown below as `astryx ...`).

SETUP (once, in app entry e.g. main.tsx) — without these, components render unstyled:
  import "@astryxdesign/core/reset.css";
  import "@astryxdesign/core/astryx.css";

WORKFLOW — start every page from a template, never from scratch:
1. `astryx build "<idea>"` — names the template to scaffold from and the parts it lacks.
2. `astryx template <name> <path>` — scaffold it; keep its frame, gap and padding; replace the content.
3. `astryx component <Name>` to read props before using one; `astryx template <Block>` prints a block example to read for a part it lacks. Astryx names differ from other libraries: buttons, badges, tokens and tabs take their text in `label` (Text, Heading and Link take children), booleans start with `is` or `has` (`isOpen`, `isDisabled`), and every input takes `value` and `onChange`.
Changing an existing page? Keep it: skip step 2 and add components inside its sections; read a block example when it helps.
Before you deliver a build, run `astryx doctor --built <dir>`; don't deliver it if it fails.

RULES:
- No <div> — components handle all layout and spacing.
- Read `astryx docs layout` before changing a template's frame.
- Dense data = rows (Table, List/Item), not Card-wrapped lists. Badge = counts only.
- Style with component props first, then Tailwind utilities backed by tokens. No raw hex/px.
- THEMES: palettes and custom colors go through the theme, never :root overrides; so does a denser or roomier app (`editor set <name> spacing tight`), never gap and padding changes page by page. A change to one kind of part (the sidebar, its selected item, the gaps in a form) is a theme change too, not props on one page: `editor how "<ask>"` names the `set … --on <part>` line. No app yet: `astryx experimental theme preview app <dir>` makes a starter app that shows the theme. To make or change a theme (colors, fonts, corners, spacing, a look from a picture), prefer the experimental theme editor over hand-written theme files: `astryx experimental theme editor new <name> --like neutral`, then `editor set <name> <thing> <value>` or `editor how "<what you want>"`; wire it with `astryx theme add <name>`; after each change look at it with `astryx experimental theme editor show <name> --png` (takes pictures of real components) and open the PNGs it writes; a theme change is not done until you have looked at the pictures. In code, extend an imported theme to customize it; `theme eject <slug>` only forks source. See `astryx docs theme`.
- SELF-CHECK: re-read the file; replace any style={{…}}, raw <div>/<span>, imported .css/@apply, or hardcoded/arbitrary value (bg-[#fff], p-[13px]) with the component or a token-backed utility.

`astryx help` lists every command. Key ones beyond the workflow:
  search "<query>"   find any component / hook / doc / template
  discover <words>   integrations you could add
  docs <topic>       getting-started, principles, tokens, theme … (`astryx docs` lists all)
  docs cli           commands and API reference
  docs authoring     build an integration package, and every field it holds
  upgrade --from <old version> --apply   run after a dependency bump
To remove this block, run `astryx init --remove-agents`, which removes it from the agent files at the project root and in the folder you run it in; from any other file it leaves, delete everything from ASTRYX:START to ASTRYX:END.
<!-- ASTRYX:END -->
