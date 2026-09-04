# Portfolio Codebase — Complete Breakdown

## 1. Framework

**React 19 + TypeScript + Vite 6** (`package.json:22-25`):

- `react@^19.0.0`
- `react-dom@^19.0.0`
- `vite@^6.2.0`

---

## 2. Complete File Structure

| File | Purpose |
|---|---|
| `index.html` | Entry HTML with meta tags, favicon, root div |
| `vite.config.ts` | Vite config: React plugin, Tailwind plugin, `@` alias, Gemini API key injection, HMR toggle |
| `tsconfig.json` | TypeScript config: ES2022 target, JSX react-jsx, bundler module resolution |
| `package.json` | Dependencies, scripts, homepage URL |
| `.gitignore` | Ignores `node_modules`, `dist`, `.env.local` |
| `metadata.json` | Metadata for AI Studio (name, description) |
| `README.md` | Empty |
| `src/main.tsx` | React entry point — renders `<App />` into `#root` |
| `src/App.tsx` | **The entire site** — Hero, Skills, Experience, Projects, Education, Contact, Footer |
| `src/index.css` | Tailwind v4 import + custom theme (JetBrains Mono, cyan accent, dark background) |
| `src/components/AnimatedBackground.tsx` | Canvas-based animated grid + particle background |
| `public/profile-removebg-preview.png` | Profile photo (transparent background) |
| `public/logo.png` | General logo |
| `public/logo-removebg-preview.png` | Logo used as favicon |
| `.github/workflows/deploy.yml` | GitHub Actions: build + deploy to GitHub Pages |
| `dist/` | Built output (generated) |

---

## 3. Build & Deploy

**Build command:** `npm run build` → runs `vite build` → outputs to `dist/`

**Deploy** — two methods:

1. **GitHub Actions** (`.github/workflows/deploy.yml:24-27`) — on push to `main`/`master`, runs `npm ci && npm run build`, then uses `peaceiris/actions-gh-pages` to publish `./dist` to GitHub Pages.
2. **Manual** via `npm run deploy` → runs `gh-pages -d dist`

The `base` path is `'/'` in `vite.config.ts:9`.

---

## 4. Where Each Section Is Defined

Everything is in **`src/App.tsx`** — a single-component SPA (no routing):

| Section | App.tsx Line | Element |
|---|---|---|
| **Hero** | 132–219 | `<section id="hero">` inside `<header>` — name, tagline, bio, contact links, profile image |
| **Skills** | 224–322 | `<section id="skills">` — 8 `DetailedSkillCard` in a 3-column grid |
| **Experience** | 325–357 | `<section id="experience">` — single internship entry (ENIE) |
| **Projects** | 360–503 | `<section id="projects">` — 3 project cards |
| **Education** | 506–569 | `<section id="education">` — education + certifications tables |
| **Connect/Contact** | 572–608 | `<section id="contact">` — 4 `ContactCard` components |
| **Footer** | 611–615 | `<footer>` — copyright |

Inline SVG components (`PipelineFlow`, `RAGFlow`, `KernelGrid`) are helper functions in the same file.

---

## 5. Styling

**Tailwind CSS v4** with a custom theme in `index.css:4-8`:

```css
@theme {
  --font-sans: "StyreneB", "Inter", -apple-system, sans-serif;
  --font-display: "Copernicus", "Tiempos Headline", "Cormorant Garamond", Georgia, serif;
  --color-accent-teal: #2CB77E;
  --color-canvas: #0C1116;
}
```

- Font: Inter (sans) for UI/body, Cormorant Garamond fallback in `--font-display` for headings, JetBrains Mono for code
- Accent: Teal `#2CB77E` (inline links); Mint `#7FE0A9` (primary CTAs)
- Background: `#0C1116` (canvas)
- Utility class `.glass-card` for glassmorphism
- No CSS modules or styled-components — all Tailwind classes inline

---

## 6. Component Organization

Minimal — only **one** reusable file:

- `src/components/AnimatedBackground.tsx` — canvas particle animation

All other components (`DetailedSkillCard`, `ContactCard`, `PipelineFlow`, `RAGFlow`, `KernelGrid`) are inline inside `App.tsx`.

---

## 7. Dependencies (`package.json`)

**Runtime:**

| Package | Version | Purpose |
|---|---|---|
| `react` | ^19.0.0 | UI framework |
| `react-dom` | ^19.0.0 | React DOM renderer |
| `vite` | ^6.2.0 | Build tool |
| `@vitejs/plugin-react` | ^5.0.4 | React Fast Refresh |
| `motion` | ^12.23.24 | Framer Motion animations |
| `lucide-react` | ^0.546.0 | Icons (Mail, Phone, Github, Linkedin, etc.) |
| `@google/genai` | ^1.29.0 | Google Generative AI SDK (not currently used) |
| `express` | ^4.21.2 | Server |
| `dotenv` | ^17.2.3 | Env variable loading |

**Dev:**

| Package | Version | Purpose |
|---|---|---|
| `tailwindcss` | ^4.2.2 | Tailwind CSS v4 |
| `@tailwindcss/vite` | ^4.2.2 | Tailwind Vite plugin |
| `typescript` | ~5.8.2 | TypeScript compiler |
| `gh-pages` | ^6.3.0 | Deploy to GitHub Pages |
| `@types/react` | ^19.2.14 | React type definitions |
| `@types/react-dom` | ^19.2.3 | ReactDOM type definitions |
| `@types/express` | ^4.17.21 | Express type definitions |
| `@types/node` | ^22.14.0 | Node type definitions |
| `autoprefixer` | ^10.4.21 | PostCSS prefixer |
| `tsx` | ^4.21.0 | TypeScript execution |

---

## 8. Dark Theme

**Hardcoded — not toggleable.** No theme switcher, no `prefers-color-scheme` media query, no CSS class toggling. The background is always `#0C1116`, text is always light.

---

## 9. Meta Tags in HTML/head

All in `index.html:3-23`:

- `<title>` — "Ismail Ferdi — AI Engineering Student | NLP & Computer Vision"
- `<meta charset>`, `<meta viewport>` — standard
- `<link rel="icon">` — `/logo-removebg-preview.png` at 192x192, 512x512, apple-touch-icon
- `<meta name="description">` — SEO description
- `<meta name="keywords">` — SEO keywords
- `<meta name="author">` — Ismail Ferdi
- `<meta name="robots">` — index, follow
- `<meta property="og:*">` — Open Graph for social sharing
- `<meta name="twitter:*">` — Twitter card

---

## 10. Profile Image

Referenced in `App.tsx:210`:

```tsx
<img
  src="/profile-removebg-preview.png"
  alt="Ismail Ferdi — AI Engineering Student"
  className="w-full h-full object-cover"
/>
```

File at `public/profile-removebg-preview.png`. Served at `/profile-removebg-preview.png` (Vite serves `public/` from root). Displayed in a 120x120px (mobile) / 180x180px (desktop) circular container with an accent border and hover scale effect.
