# Ismail Ferdi — AI Engineering Portfolio

Personal portfolio site for Ismail Ferdi, a 4th-year AI Engineering student specializing in NLP and Computer Vision. Built with React 19, Tailwind CSS v4, and Vite. Pre-rendered via `vite-react-ssg` for static hosting on GitHub Pages.

## Features

- **Static site generation** — full HTML pre-rendered at build time (no server required), React hydrates client-side for interactivity
- **Tailwind CSS v4** — utility-first atomic CSS with custom theme (`#00F5FF` accent, `#0A0A0B` background)
- **CSS-only animations** — entrance animations via `@keyframes fade-in` with staggered delays (no animation library dependency)
- **Animated background** — Canvas-based grid wave animation with glow particles; respects `prefers-reduced-motion`
- **Accessibility** — semantic HTML, `aria-hidden` on decorative elements, focus-visible outlines
- **SEO** — meta tags, JSON-LD structured data, `robots.txt`, `sitemap.xml`
- **Font optimization** — Google Fonts via `<link>` with `preconnect` hints
- **Image optimization** — WebP with PNG fallback via `<picture>`
- **Privacy-friendly analytics** — Plausible (self-hosted, no cookie banner)
- **Dark theme** — JetBrains Mono monospace aesthetic throughout
- **Responsive** — mobile-first layout
- **Reduced motion support** — `prefers-reduced-motion: reduce` kills animations

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 |
| Build | Vite 6 + `@vitejs/plugin-react` |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| SSG | `vite-react-ssg` (single-page mode) |
| Icons | Lucide React |
| Font | JetBrains Mono (Google Fonts) |
| Analytics | Plausible |
| CI/CD | GitHub Actions → GitHub Pages |
| Image tools | ImageMagick |

## Getting Started

```bash
# Install dependencies
npm install

# Development server (HMR)
npm run dev

# Production build (static HTML to dist/)
npm run build

# Preview the build locally
npx serve dist
```

## Project Structure

```
.
├── index.html                  # HTML entry: meta tags, OG/Twitter cards, JSON-LD, fonts, Plausible
├── vite.config.ts              # Vite config: React + Tailwind plugins, path alias, HMR toggle
├── package.json                # Dependencies, scripts, homepage URL
├── AGENTS.md                   # Instructions for AI coding agents
├── .github/workflows/deploy.yml # CI/CD: build on push to main, deploy dist/ to gh-pages
├── public/
│   ├── profile-removebg-preview.webp  # Hero profile image (WebP)
│   ├── profile-removebg-preview.png   # Fallback (PNG)
│   ├── logo-removebg-preview.webp     # Favicon (WebP)
│   ├── logo-removebg-preview.png      # Favicon fallback (PNG)
│   ├── robots.txt                     # Crawler permissions
│   └── sitemap.xml                    # Single-page sitemap
├── src/
│   ├── main.tsx                # Entry point: imports CSS, mounts SSG root
│   ├── App.tsx                 # Hero, Skills, Experience, Project, Education, Contact, Footer
│   ├── index.css               # Tailwind v4 config, custom theme, @keyframes, components
│   └── components/
│       └── AnimatedBackground.tsx  # Canvas grid wave + particles
└── dist/                       # Built output (gitignored)
```

## Key Implementation Details

### Static Site Generation

`vite-react-ssg` pre-renders the entire React tree to static HTML at build time. The output HTML contains the fully rendered page content (hero text, skills grid, project cards, etc.) plus a CSS link and JS bundle references. On page load, React hydrates the DOM to make interactive elements functional. This means the page is immediately visible even before JavaScript loads.

### Tailwind v4 Theme

Custom theme values defined in `src/index.css`:

```css
@theme {
  --font-sans: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  --color-accent: #00F5FF;
  --color-bg-dark: #0A0A0B;
}
```

### CSS Animations (No JS Library)

The `motion` library was removed (~80KB savings). All entrance animations use pure CSS:

```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
.animate-delay-1 { animation-delay: 0.1s; }
.animate-delay-2 { animation-delay: 0.2s; }
.animate-delay-3 { animation-delay: 0.3s; }
```

## Deployment

Push to `main`/`master` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which:

1. Checks out the repository
2. Installs dependencies (`npm ci`)
3. Builds the static site (`npm run build` → `vite-react-ssg build`)
4. Publishes `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`

## License

MIT
