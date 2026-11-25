# Ismail Ferdi — AI Engineering Portfolio

Personal portfolio site for Ismail Ferdi, a 4th-year AI Engineering student specializing in NLP and Computer Vision. Built with React 19, Astryx (Meta's open-source design system, beta), and Vite 6. Pre-rendered with `vite-react-ssg` for static hosting on GitHub Pages.

## Features

- **Static site generation** — the full HTML is pre-rendered at build time; React hydrates client-side for interactivity.
- **Astryx design system** — components, semantic tokens, and a customized Matcha dark theme; no Tailwind or StyleX authoring in app source.
- **Matcha dark theme** — customized local theme built from `src/themes/portfolioTheme.ts` with Inter headings and DM Sans body text; dark body background `#12140e`.
- **AppShell frame** — owns the skip link and banner/main landmarks, with responsive mobile navigation.
- **Accessibility** — semantic landmarks, one `h1`, skip link, visible focus, AA contrast, 44px mobile touch targets, and reduced-motion support.
- **SEO** — title, meta description, OG/Twitter cards, canonical, JSON-LD, `robots.txt`, and `sitemap.xml`.
- **Image optimization** — WebP with PNG fallback via `<picture>`; the hero WebP is preloaded.
- **Privacy-friendly analytics** — Plausible (no cookie banner).
- **Responsive** — mobile-first layout.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 |
| Build | Vite 6 + `@vitejs/plugin-react` |
| Styling | Astryx core prebuilt CSS + customized Matcha theme CSS/fonts + token-based global CSS |
| SSG | `vite-react-ssg` (single-page mode) |
| Design system packages | `@astryxdesign/core`, `@astryxdesign/theme-matcha`, `@astryxdesign/cli` — all pinned to `0.7.17` |
| Icons | Lucide React (passed to Astryx `Icon`) |
| Analytics | Plausible |
| CI/CD | GitHub Actions → GitHub Pages |

## Getting Started

```bash
npm install
npm run dev        # dev server on :3000
npm run typecheck
npm run build      # vite-react-ssg build → dist/
npm run preview
```

## Project Structure

```text
.
├── index.html                   # HTML entry: SEO/meta, OG/Twitter/JSON-LD, fonts, Plausible
├── vite.config.ts               # React plugin, base '/', DISABLE_HMR toggle
├── package.json                 # Dependencies, scripts, homepage URL
├── AGENTS.md                    # Agent notes incl. managed Astryx block
├── .github/workflows/deploy.yml # CI/CD: build on push, publish dist/ to gh-pages
├── public/                      # profile/favicon WebP + PNG, robots.txt, sitemap.xml
└── src/
    ├── main.tsx                 # Imports index.css first, mounts the SSG root
    ├── App.tsx                  # Theme + AppShell/Layout composition
    ├── index.css                # Layer order, Astryx core CSS, token-based global rules
    ├── data/
    │   └── portfolio.ts         # Typed content: projects, skills, experience, certs, contacts
    ├── themes/                  # Customized portfolio Matcha theme source/build outputs
    └── components/              # Astryx-based section components
```

## Theming and CSS

The active theme is a local customization of Matcha:

```tsx
import {Theme} from '@astryxdesign/core/theme';
import {portfolioMatchaTheme} from './themes/portfolio-matcha';
import '@astryxdesign/theme-matcha/fonts.css';
import './themes/portfolio-matcha.css';

<Theme theme={portfolioMatchaTheme} mode="dark">
  <AppShell>{/* page sections */}</AppShell>
</Theme>
```

`src/index.css` declares the layer order before imports and keeps only token-based global CSS:

```css
@layer reset, astryx-base, astryx-theme;

@import "@astryxdesign/core/reset.css";
@import "@astryxdesign/core/astryx.css";
```

## Verification

```bash
npm run typecheck && npm run build
npx --no-install @astryxdesign/cli doctor
npx --no-install @astryxdesign/cli doctor --built dist
```

Manual checks: keyboard walkthrough, sticky-nav anchor offsets, console/network audit, contrast, 44px mobile targets, reduced-motion behavior, and responsive screenshots.

## Deployment

Push to `main`/`master` triggers `.github/workflows/deploy.yml`: `npm ci` → `npm run build` → `peaceiris/actions-gh-pages` publishes `dist/` to `gh-pages`.

## License

MIT
