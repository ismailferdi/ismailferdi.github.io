# Ismail Ferdi — AI Engineering Portfolio

Personal portfolio site for Ismail Ferdi, a 4th-year AI Engineering student specializing in NLP and Computer Vision. Built with React 19, Tailwind CSS v4, and Vite. Pre-rendered via `vite-react-ssg` for static hosting on GitHub Pages.

## Features

- **Static site generation** — full HTML pre-rendered at build time (no server required), React hydrates client-side for interactivity
- **Tailwind CSS v4** — utility-first atomic CSS with custom theme (`#00F5FF` accent, `#0A0A0B` background)
- **CSS-only animations** — entrance animations via `@keyframes fade-in` with staggered delays (no animation library dependency)
- **Animated background** — Canvas-based grid wave animation with glow particles; respects `prefers-reduced-motion`
- **Accessibility** — semantic HTML (`<h1>` → `<h2>` → `<h3>`), `aria-hidden` on decorative icons, focus-visible outlines, `aria-label` where needed
- **SEO** — meta tags (description, keywords, Open Graph, Twitter Card), JSON-LD structured data (Person schema), `robots.txt`, `sitemap.xml`
- **Font optimization** — Google Fonts loaded via `<link>` with `preconnect` hints (no render-blocking `@import`)
- **Image optimization** — WebP with PNG fallback via `<picture>`, explicit dimensions for CLS prevention, `fetchPriority="high"` on hero image
- **Privacy-friendly analytics** — Plausible (self-hosted, no cookie banner required)
- **Dark theme** — monospace-driven aesthetic with JetBrains Mono throughout
- **Responsive** — mobile-first layout with `md:` and `lg:` breakpoints
- **Reduced motion support** — `@media (prefers-reduced-motion: reduce)` kills all animations/transitions; Canvas background draws a static grid instead of animating

## Lighthouse Targets

| Category | Target | Current |
|---|---|---|
| Performance | >= 90 | ~82 (blocked by 240KB JS hydrating client-side) |
| Accessibility | 100 | ~93 (touch targets addressed via `py-5`, needs verification) |
| Best Practices | >= 90 | ~96 (image aspect ratio fixed via square crop, needs verification) |
| SEO | >= 95 | ~100 |

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
| Image tools | ImageMagick (for cropping/converting to WebP) |

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
├── vite.config.ts              # Vite config: React + Tailwind plugins, path alias
├── package.json                # Dependencies and scripts
├── .github/workflows/deploy.yml # CI/CD: build on push to main, deploy dist/ to gh-pages
├── public/
│   ├── profile-removebg-preview.webp  # Hero profile image (WebP, 457×457, 13KB)
│   ├── profile-removebg-preview.png   # Fallback (PNG, 457×457, 202KB)
│   ├── logo-removebg-preview.webp     # Favicon (WebP, 4.6KB)
│   ├── logo-removebg-preview.png      # Favicon fallback (PNG)
│   ├── robots.txt                     # Crawler permissions
│   └── sitemap.xml                    # Single-page sitemap
├── src/
│   ├── main.tsx                # Entry point: imports CSS, mounts SSG root
│   ├── App.tsx                 # All page sections: Hero, Skills, Experience, Projects, Education, Contact, Footer
│   ├── index.css               # Tailwind v4 config, custom theme, @keyframes, @layer components, reduced-motion
│   └── components/
│       └── AnimatedBackground.tsx  # Canvas grid wave + particles (respects reduced-motion)
└── dist/                       # Built output (auto-generated, not tracked by git)
    ├── index.html              # Pre-rendered HTML (~43KB) with inlined content
    ├── assets/app-*.css        # Tailwind CSS (~27KB)
    ├── assets/app-*.js         # App JS bundle (~59KB)
    ├── assets/client-*.js      # React runtime bundle (~181KB)
    └── profile*, logo*, robots.txt, sitemap.xml
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

### Performance Optimization History

- Removed unused dependencies (`express`, `dotenv`, `@google/genai`, `autoprefixer`, `@types/express`) — node_modules reduced from 280MB to 166MB
- Converted PNG images to WebP (profile: 280KB → 37KB, logo: 12KB → 4.6KB)
- Cropped profile image to square (457×546 → 457×457) — fixes Lighthouse `image-aspect-ratio`
- Removed `motion` dependency (~80KB), replaced with CSS `@keyframes fade-in`
- Moved Google Fonts from CSS `@import` to HTML `<link>` with `preconnect` — eliminates render-blocking
- Added `<link rel="preload">` for hero image

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which:

1. Checks out the repository
2. Installs dependencies (`npm ci`)
3. Builds the static site (`vite-react-ssg build`)
4. Publishes `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`

The site is live at `https://ismailferdi.github.io`.

## License

MIT
