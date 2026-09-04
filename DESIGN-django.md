---
version: alpha
name: Claude-design-analysis
description: A dark, code-forward editorial interface for Anthropic's Claude product, recolored to Django's palette. The system anchors on a near-black canvas with a signature forest-green brand band, mint-green CTAs, and a pale-mint promo surface for contrast. Brand voltage comes from the near-black/mint-green pairing — grounded and technical where the original ran warm cream + coral. Type voice stays a slab-serif display for h1/h2 and a humanist sans for body. The signature Anthropic black-radial-spike mark anchors the wordmark.

colors:
  primary: "#7FE0A9"
  primary-active: "#5BC98C"
  primary-disabled: "#33443C"
  ink: "#0B1F16"
  body: "#C9D6CE"
  body-strong: "#EAF3EE"
  muted: "#8FA098"
  muted-soft: "#66766D"
  hairline: "#223229"
  hairline-soft: "#1A2620"
  canvas: "#0C1116"
  surface-soft: "#12181A"
  surface-card: "#0F3D2A"
  surface-cream-strong: "#A6E8C4"
  surface-dark: "#0C4B33"
  surface-dark-elevated: "#146B44"
  surface-dark-soft: "#081C13"
  on-primary: "#0B1F16"
  on-dark: "#F2F8F4"
  on-dark-soft: "#9FB3A9"
  accent-teal: "#2CB77E"
  accent-amber: "#D9A441"
  success: "#3ECF8E"
  warning: "#D9A441"
  error: "#D14343"

typography:
  display-xl:
    fontFamily: "Copernicus, Tiempos Headline, serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "Copernicus, Tiempos Headline, serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -1px
  display-md:
    fontFamily: "Copernicus, Tiempos Headline, serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.5px
  display-sm:
    fontFamily: "Copernicus, Tiempos Headline, serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.3px
  title-lg:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  caption-uppercase:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 1.5px
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  button:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "StyreneB, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-secondary-on-dark:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
  button-icon-circular:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
    size: 36px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.accent-teal}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 64px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 96px
  hero-illustration-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.xl}"
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  product-mockup-card-dark:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  code-window-card:
    backgroundColor: "{colors.surface-dark-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 24px
  model-comparison-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-card-featured:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  callout-card-brand:
    backgroundColor: "{colors.surface-cream-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  connector-tile:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.lg}"
    padding: 20px
  text-input:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 14px
    height: 40px
  text-input-focused:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
  cookie-consent-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 24px
  category-tab:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.nav-link}"
    padding: 8px 14px
    rounded: "{rounded.md}"
  category-tab-active:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.md}"
  badge-pill:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  badge-brand:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  cta-band-brand:
    backgroundColor: "{colors.surface-cream-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.lg}"
    padding: 64px
  cta-band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.lg}"
    padding: 64px
  footer:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Recolored to Django's palette, this system swaps the original's warm-cream editorial atmosphere for a **near-black, code-forward canvas** (`{colors.canvas}` — #0c1116) — grounded and technical, the way a documentation-heavy open-source project reads rather than a consumer AI product. Headlines still run a **slab-serif display** ("Copernicus" / Tiempos Headline) at weight 400 with negative letter-spacing, paired with **StyreneB / Inter** body sans — that literary pairing survives the recolor untouched.

Brand voltage now comes from the **near-black + mint-green pairing** — a soft mint (`{colors.primary}` — #7fe0a9) is the signature accent, used on every primary CTA and on badges, while a deeper **forest green** (`{colors.surface-dark}` — #0c4b33) carries the top nav, footer, and any band that needs to read as "branded" rather than "neutral dark." A single **pale-mint band** (`{colors.surface-cream-strong}` — #a6e8c4) is reserved for the one or two promotional moments per page that need to interrupt the dark rhythm — exactly how Django's own homepage uses its light-mint sponsor band against an otherwise dark, green-accented layout.

The system keeps three surface modes that alternate page-by-page:
1. **Near-black canvas** (`{colors.canvas}`) — default body floor
2. **Deep-green cards** (`{colors.surface-card}`) — feature cards, community/product tiles
3. **Branded forest-green bands** (`{colors.surface-dark}`) — top nav, footer, pre-footer CTA

The pale-mint promo surface (`{colors.surface-cream-strong}`) is the outlier — the only light surface in the system, and it's used sparingly, the way Django uses it for its sponsor callout. The near-black-to-forest-green contrast is the page's pacing rhythm; the pale mint is a rare, deliberate interruption.

**Key Characteristics:**
- Near-black canvas (`{colors.canvas}` — #0c1116) with light, slightly warm-gray body text (`{colors.body}` — #c9d6ce). The defining shift from the original's cream-and-ink pairing.
- Mint-green primary CTA (`{colors.primary}` — #7fe0a9), always paired with dark text (`{colors.on-primary}` — #0b1f16), never white. Used on every button, sparingly elsewhere.
- Slab-serif display headlines via Copernicus / Tiempos Headline at weight 400 with negative letter-spacing — unchanged from the original; only the surrounding palette shifted.
- Forest-green branded bands (`{colors.surface-dark}` — #0c4b33) carry the top nav and footer — the one hue in the system that reads unmistakably "Django," the way coral once read unmistakably "Anthropic."
- Deep-green feature/product cards (`{colors.surface-card}` — #0f3d2a) — one step lighter than canvas, used for content cards and community tiles.
- A single pale-mint promo band (`{colors.surface-cream-strong}` — #a6e8c4) with dark ink text — the only light surface in the system, reserved for sponsor/promo callouts.
- Anthropic radial-spike mark — a small glyph — still appears as the brand wordmark prefix and as a content marker; render it in `{colors.on-dark}` rather than black now that the canvas is dark.
- Border radius is unchanged and still hierarchical: `{rounded.md}` (8px) for buttons + inputs, `{rounded.lg}` (12px) for content + product cards, `{rounded.xl}` (16px) for the hero illustration container, `{rounded.pill}` for badges.
- Section rhythm `{spacing.section}` (96px) — unchanged. Internal card padding stays generous at `{spacing.xl}` (32px).

## Colors

### Brand & Accent
- **Mint / Primary** (`{colors.primary}` — #7fe0a9): The signature CTA mint. Used on every primary button background, on brand badges, and anywhere the system needs its strongest call-to-action signal. Always paired with dark text, not white — this is the palette's most important departure from a typical light-on-dark button.
- **Mint Active** (`{colors.primary-active}` — #5bc98c): The press / hover-darker variant.
- **Mint Disabled** (`{colors.primary-disabled}` — #33443c): A desaturated, low-contrast disabled state that reads as "off" against the dark canvas.
- **Accent Teal** (`{colors.accent-teal}` — #2cb77e): The inline link and "read more" color — a slightly deeper, more saturated green than the primary mint so links stay legible against dark text blocks without competing with buttons.
- **Accent Amber** (`{colors.accent-amber}` — #d9a441): A small warm companion tone, held over from the original system, used on category badges and inline highlights that need to stand apart from the green family.

### Surface
- **Canvas** (`{colors.canvas}` — #0c1116): The default page floor. Near-black, slightly blue-green — the dominant surface across the whole site now, a full inversion of the original's light cream floor.
- **Surface Soft** (`{colors.surface-soft}` — #12181a): Section dividers, very-soft band backgrounds, input fills.
- **Surface Card** (`{colors.surface-card}` — #0f3d2a): Feature cards, community tiles (Forum, Discord). A distinct deep forest green — one step lighter than canvas but still fully dark.
- **Surface Cream Strong** (`{colors.surface-cream-strong}` — #a6e8c4): The pale-mint promo band. The system's only light surface — reserved, not a default.
- **Surface Dark** (`{colors.surface-dark}` — #0c4b33): Top nav and pre-footer CTA. The branded forest green — the color most closely associated with the site itself.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #146b44): A brighter mid-green used for the footer's link-column band, one step up from the darkest surfaces.
- **Surface Dark Soft** (`{colors.surface-dark-soft}` — #081c13): The deepest surface — code block backgrounds and the footer's bottom copyright strip.
- **Hairline** (`{colors.hairline}` — #223229): The 1px border tone on dark surfaces. A muted green-gray rather than a near-black line, so borders stay visible without adding harsh contrast.
- **Hairline Soft** (`{colors.hairline-soft}` — #1a2620): Barely-visible divider used inside the same band.

### Text
- **Ink** (`{colors.ink}` — #0b1f16): Text on the light promo band only — deep, near-black green so it stays legible against the pale mint.
- **Body Strong** (`{colors.body-strong}` — #eaf3ee): Emphasized paragraphs, lead text, on the dark canvas.
- **Body** (`{colors.body}` — #c9d6ce): Default running-text color on the dark canvas — a soft, slightly green-tinted light gray, not pure white.
- **Muted** (`{colors.muted}` — #8fa098): Sub-headings, breadcrumbs, secondary labels.
- **Muted Soft** (`{colors.muted-soft}` — #66766d): Captions, fine-print, copyright lines.
- **On Primary** (`{colors.on-primary}` — #0b1f16): Dark text on mint buttons — the palette's signature reversal from the original's white-on-coral.
- **On Dark** (`{colors.on-dark}` — #f2f8f4): Near-white, faintly mint-tinted text used across all dark surfaces — nav, footer, cards.
- **On Dark Soft** (`{colors.on-dark-soft}` — #9fb3a9): Footer link text, secondary labels inside branded green bands.

### Semantic
- **Success** (`{colors.success}` — #3ecf8e): Green status dots, "available" indicators — close enough to the primary mint that it reads as part of the same family, which is intentional in a green-forward palette.
- **Warning** (`{colors.warning}` — #d9a441): Warning callouts (rare on marketing surfaces).
- **Error** (`{colors.error}` — #d14343): Validation errors — kept warm-red so it still contrasts clearly against an otherwise all-green system.

## Typography

### Font Family
Unchanged from the original: **Copernicus** (or **Tiempos Headline**) for display headlines, **StyreneB** (or **Inter**) for body/navigation/UI labels, **JetBrains Mono** for code. The fallback stack walks `Tiempos Headline, Garamond, "Times New Roman", serif` for display and `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` for body.

The display/body split is still editorial:
- Copernicus serif (weight 400, negative tracking) → h1, h2, h3, hero display
- StyreneB sans (weight 400-500) → body, navigation, buttons, captions, labels
- JetBrains Mono → all code blocks and terminal text

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 400 | 1.05 | -1.5px | Homepage h1 — Copernicus serif |
| `{typography.display-lg}` | 48px | 400 | 1.1 | -1px | Section heads — Copernicus |
| `{typography.display-md}` | 36px | 400 | 1.15 | -0.5px | Sub-section heads, model names — Copernicus |
| `{typography.display-sm}` | 28px | 400 | 1.2 | -0.3px | Pricing tier names, callout headlines — Copernicus |
| `{typography.title-lg}` | 22px | 500 | 1.3 | 0 | Pricing plan size labels — StyreneB |
| `{typography.title-md}` | 18px | 500 | 1.4 | 0 | Feature card titles, intro paragraphs |
| `{typography.title-sm}` | 16px | 500 | 1.4 | 0 | Connector tile titles, list labels |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Default running-text — StyreneB |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | Footer body, fine-print |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions |
| `{typography.caption-uppercase}` | 12px | 500 | 1.4 | 1.5px | Category tags, "NEW" badges |
| `{typography.code}` | 14px | 400 | 1.6 | 0 | Code blocks — JetBrains Mono |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | Standard button labels |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items |

### Principles
Display sizes use weight 400 (regular), never bold — unchanged. Negative letter-spacing (-0.3 to -1.5px) is still essential. Against a dark canvas, the serif's lighter weight now needs to carry more contrast on its own, since it no longer has heavy ink-on-cream weight to lean on — keep display text at full `{colors.on-dark}` (#f2f8f4), never at `{colors.body}`, so headlines stay crisp.

Body type stays at weight 400 for paragraphs, weight 500 for labels and emphasized phrases. The sans body is humanist (StyreneB) — never geometric.

### Note on Font Substitutes
If Copernicus / Tiempos Headline is unavailable, **Cormorant Garamond** at weight 500 with -0.02em letter-spacing is the closest open-source approximation. **EB Garamond** is a fallback. For StyreneB, **Inter** is the closest match. **Söhne** is another close alternative if licensed.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px).
- **Card internal padding:** `{spacing.xl}` (32px) for feature cards, pricing tier cards, model comparison cards; `{spacing.lg}` (24px) for code-window cards and connector tiles.
- **Callout / CTA bands:** `{spacing.xxl}` (48px) inside the pale-mint callout card; 64px inside the larger dark CTA band.

### Grid & Container
- **Max content width:** ~1200px centered.
- **Editorial body:** Single 12-column grid; hero often uses 6/6 split (h1 left, illustration right).
- **Feature card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Connector tile grids:** 4-up or 6-up at desktop, 2-up at tablet, 1-up at mobile.
- **Pricing grid:** 3-up at desktop, 1-up at mobile.

### Whitespace Philosophy
The dark canvas + serif display + generous internal padding still create an editorial pacing, but the mood reads more like a technical documentation site than a magazine column — closer to Django's own aesthetic. Whitespace between bands stays uniform at 96px; whitespace inside cards is generous (32px), letting type breathe against the dark ground.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero bands |
| Soft hairline | 1px `{colors.hairline}` border | Inputs, sub-nav, occasionally on cards |
| Deep-green card | `{colors.surface-card}` background — no shadow | Feature cards, community tiles |
| Branded band | `{colors.surface-dark}` background — no shadow | Top nav, footer, pre-footer CTA |
| Subtle glow | Faint mint-tinted shadow at low alpha | Hover-elevated states (the system uses `0 1px 3px rgba(127,224,169,0.12)` rarely) |

The elevation philosophy is still **color-block first, shadow rare**. Most depth now comes from the canvas-vs-branded-green surface contrast rather than light-vs-dark. Shadows, where used at all, pick up a faint mint tint instead of neutral black, since black-on-black shadows disappear against the near-black canvas.

### Decorative Depth
- The Anthropic spike-mark glyph appears as a small light mark (`{colors.on-dark}`) in the brand wordmark and inline as a content marker — inverted from the original's black-on-cream treatment.
- Code editor mockups carry their own internal depth: syntax-highlighted text in muted greens / ambers / grays, line numbers in `{colors.muted-soft}`, status bars at the bottom in `{colors.surface-dark-elevated}`.
- Hero illustrations use simple line-art with mint and forest-green strokes on the near-black canvas — minimal, never photorealistic.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Reserved for badge accents and tiny dropdowns |
| `{rounded.sm}` | 6px | Small inline buttons, dropdown items |
| `{rounded.md}` | 8px | Standard CTA buttons, text inputs, category tabs |
| `{rounded.lg}` | 12px | Content cards (feature, pricing, code-window, model-comparison) |
| `{rounded.xl}` | 16px | Hero illustration container, the larger marquee components |
| `{rounded.pill}` | 9999px | Badge pills, "NEW" tags |
| `{rounded.full}` | 9999px / 50% | Avatar substitutes, icon buttons |

### Photography & Illustrations
The hero still rarely uses photography. Instead it uses:
- Simple line-art illustrations with mint + forest-green strokes on the near-black canvas
- Code editor mockups (the dominant "hero" treatment on developer-focused pages)
- Terminal output mockups with monospace text on dark
- Model comparison cards with abstract geometric thumbnails, colored in the mint/forest-green family

When photography is used (rare — mostly testimonials), avatars crop to perfect circles at 40px diameter.

## Components

### Top Navigation

**`top-nav`** — Forest-green nav bar (`{colors.surface-dark}` — #0c4b33) pinned to the top of every page, 64px tall — the branded band, distinct from the near-black canvas below it. Carries the Anthropic spike-mark + "Claude" wordmark at left in `{colors.on-dark}`, primary horizontal menu center-left, right-side cluster with "Sign in" text-link, "Try Claude" `{component.button-primary}` (mint). Menu items in `{typography.nav-link}` (StyreneB 14px / 500).

### Buttons

**`button-primary`** — The signature mint CTA. Background `{colors.primary}` (#7fe0a9), text `{colors.on-primary}` (#0b1f16 — dark, never white), type `{typography.button}`, padding 12px × 20px, height 40px, rounded `{rounded.md}` (8px). Active state `button-primary-active` darkens to `{colors.primary-active}` (#5bc98c).

**`button-secondary`** — Canvas-colored button with a hairline outline. Background `{colors.canvas}`, text `{colors.on-dark}`, 1px hairline border, same padding + height + radius as primary.

**`button-secondary-on-dark`** — Used over `{colors.surface-card}` cards. Background `{colors.surface-dark-elevated}` (#146b44), text `{colors.on-dark}`.

**`button-text-link`** — Inline text button, no background. Used for "Sign in" in the top nav and inline CTA links.

**`button-icon-circular`** — 36px circular icon button. Background `{colors.surface-soft}`, hairline border, `{colors.on-dark}` icon.

**`text-link`** — Inline body links in `{colors.accent-teal}` (#2cb77e) — a deeper, more legible green than the primary mint, so links read clearly inside paragraphs of light body text.

### Cards & Containers

**`hero-band`** — Near-black canvas hero with a 6-6 grid: h1 + sub-headline + button row on the left, hero illustration card or product mockup card on the right. Vertical padding `{spacing.section}` (96px).

**`hero-illustration-card`** — A larger card holding the hero's right-side artifact. Background `{colors.canvas}` or `{colors.surface-card}` depending on context, rounded `{rounded.xl}` (16px).

**`feature-card`** — Used in 3-up feature grids. Background `{colors.surface-card}` (#0f3d2a — deep forest green), rounded `{rounded.lg}` (12px), internal padding `{spacing.xl}` (32px). Carries a small mint-circle icon at top, an `{typography.title-md}` headline, and a body description in `{typography.body-md}`.

**`product-mockup-card-dark`** — Deep-green card showing actual Claude product chrome (chat interface, code editor, agent controls). Background `{colors.surface-card}`, rounded `{rounded.lg}`, internal padding `{spacing.xl}` (32px). Carries text labels in `{colors.on-dark}` and product UI fragments below.

**`code-window-card`** — A specialized card showing a code editor with line numbers, syntax-highlighted code in `{typography.code}` (JetBrains Mono), and sometimes a "Run" button or terminal output panel below. Background `{colors.surface-dark-soft}` (the deepest surface in the system), rounded `{rounded.lg}`, padding `{spacing.lg}` (24px).

**`model-comparison-card`** — Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, internal padding `{spacing.xl}` (32px). Carries the model name, a short capability blurb, and a `{component.text-link}` to learn more.

**`pricing-tier-card`** — Standard tier card. Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). Carries the plan name in `{typography.title-lg}`, price in `{typography.display-sm}` (Copernicus serif), feature checklist in `{typography.body-md}`, and a `{component.button-primary}` at the bottom.

**`pricing-tier-card-featured`** — The featured tier. Background flips to `{colors.surface-dark}` (the branded forest green), text stays `{colors.on-dark}`. The branded-green surface IS the featured-tier signal, in place of the original's plain-dark-vs-cream contrast.

**`callout-card-brand`** — A full-bleed pale-mint card carrying a major call-to-action — the system's one light surface, used the way Django uses its own sponsor band. Background `{colors.surface-cream-strong}` (#a6e8c4), text `{colors.ink}` (#0b1f16, dark), rounded `{rounded.lg}`, padding `{spacing.xxl}` (48px). Because this is the only light surface in the system, use it rarely and only for one high-priority callout per page.

**`connector-tile`** — Background `{colors.surface-soft}` with hairline border, rounded `{rounded.lg}`, padding 20px. Each tile carries a logo at top, a `{typography.title-sm}` connector name, and a short description.

### Inputs & Forms

**`text-input`** — Standard text input. Background `{colors.surface-soft}`, text `{colors.on-dark}`, type `{typography.body-md}`, rounded `{rounded.md}` (8px), padding 10px × 14px, height 40px. 1px hairline border in `{colors.hairline}`.

**`text-input-focused`** — Focus state. Border thickens or shifts to `{colors.primary}` (mint) for emphasis. Carries a 3px mint-at-15%-alpha outer ring.

**`cookie-consent-card`** — Bottom-right floating dark cookie banner. Background `{colors.surface-dark}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px).

### Tags / Badges

**`badge-pill`** — Small pill label used for category tags. Background `{colors.surface-card}`, text `{colors.on-dark}`, type `{typography.caption}` (13px / 500), rounded `{rounded.pill}`, padding 4px × 12px.

**`badge-brand`** — Mint-fill badge for "NEW", "BETA", featured highlights. Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.caption-uppercase}` (12px / 500 / 1.5px tracking), rounded `{rounded.pill}`, padding 4px × 12px.

### Tab / Filter

**`category-tab`** + **`category-tab-active`** — Used in sub-nav rows. Inactive: transparent background, `{colors.muted}` text. Active: `{colors.surface-card}` background, `{colors.on-dark}` text. Padding 8px × 14px, rounded `{rounded.md}`.

### CTA / Footer

**`cta-band-brand`** — A pre-footer "Try Claude" CTA card. Full-width pale-mint fill, dark ink type, rounded `{rounded.lg}`, padding 64px. Carries an h2 in `{typography.display-sm}` (still serif), a sub-line, and a dark-canvas-colored button CTA — the inverse of every other button in the system, since this is the one light surface.

**`cta-band-dark`** — Alternative pre-footer band on developer-focused pages. Background `{colors.surface-dark}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding 64px. Often pairs with a code-window card.

**`footer`** — The forest-green footer that closes every page. Background `{colors.surface-dark-elevated}` (#146b44 — a brighter, more "link column" green than the nav), text `{colors.on-dark-soft}`. 4-column link list at desktop. Vertical padding 64px. The Anthropic spike-mark + wordmark sits at the top in `{colors.on-dark}`. A darker strip in `{colors.surface-dark-soft}` closes out the very bottom copyright line — the deepest surface in the whole system.

## Do's and Don'ts

### Do
- Anchor every page on the near-black canvas. This is now the brand differentiator, the way cream once was — don't drift toward neutral slate or pure black.
- Use Copernicus serif for every display headline. Pair with StyreneB sans body. Negative letter-spacing on display sizes is still non-negotiable.
- Reserve `{colors.primary}` (mint) for primary CTAs and badges. Reserve `{colors.surface-dark}` (forest green) for the nav, footer, and pre-footer band — these are two different jobs and shouldn't be swapped.
- Always pair `{colors.primary}` mint buttons with dark text (`{colors.on-primary}`), never white — white-on-mint reads washed out and breaks the palette's signature contrast.
- Use `{component.callout-card-brand}` (the pale-mint band) sparingly — once per page at most. It's powerful specifically because it's rare against an otherwise all-dark system.
- Pair `{component.feature-card}` (deep green) with `{component.product-mockup-card-dark}` in alternating bands against the near-black canvas for pacing.
- Apply `{spacing.section}` (96px) between major bands.

### Don't
- Don't use neutral grays or pure black for canvas — the near-black `{colors.canvas}` carries a deliberate green undertone; flattening it to true black loses the brand.
- Don't bold serif display weight. Copernicus at 700 reads as bombastic; the system stays at 400.
- Don't use blue or cyan as a brand accent — the mint-and-forest-green family is the whole story now.
- Don't put the pale-mint promo surface everywhere. It's scarce by design; overusing it collapses the dark-canvas rhythm that gives the palette its identity.
- Don't use Inter for display headlines. The serif character is still the brand voice.
- Don't repeat the same surface mode in two consecutive bands. The pacing alternates: canvas → deep-green-card → branded-forest-green → canvas → pale-mint-callout → branded-footer.
- Don't add hover state styling beyond what the system already encodes — primary darkens on press; nothing else changes.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 64→32px; hero-illustration-card stacks below content; feature grids 1-up; connector tiles 2-up; pricing 1-up; footer 4 cols → 1 |
| Tablet | 768–1024px | Top nav stays horizontal but tightens; feature cards 2-up; connector tiles 3-up; pricing 2-up |
| Desktop | 1024–1440px | Full top-nav with all menu items; 3-up feature cards; 4-up or 6-up connector tiles; 3-up pricing tiers |
| Wide | > 1440px | Same as desktop with more outer breathing room; max content width caps at 1200px |

### Touch Targets
- `{component.button-primary}` at minimum 40 × 40px.
- `{component.button-icon-circular}` at exactly 36 × 36 — slightly under WCAG 44 but visually centered.
- `{component.text-input}` height is 40px.
- Connector tile entire card area is tappable; effective tap area >> 44px.

### Collapsing Strategy
- Top nav collapses to hamburger at < 768px; menu opens as a full-screen forest-green sheet.
- Hero band's 6-6 grid collapses to single-column on mobile — h1 + sub-head + buttons first, then the illustration / mockup card below.
- Feature grids reduce columns rather than scaling cards down.
- Pricing tier cards collapse 4 → 2 → 1; featured-tier branded-green surface stays visually distinct at every breakpoint.
- Code-window cards retain code legibility at every breakpoint by allowing horizontal scroll within the card rather than wrapping code lines.

### Image Behavior
- Code blocks inside dark mockups stay at fixed font-size; horizontal scroll on mobile rather than wrapping.
- Hero illustrations scale proportionally; line-art strokes thin slightly on mobile.
- Avatar photos in testimonials crop to circles at every breakpoint.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key (`{component.feature-card}`, `{component.code-window-card}`).
2. Variants of an existing component (`-active`, `-disabled`, `-focused`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay Copernicus serif 400 with negative tracking. Body stays StyreneB / Inter 400. The split is unbreakable.
6. Near-black canvas + mint + forest-green is the trinity, with pale-mint reserved as a rare fourth accent. Don't introduce a fifth surface tone (no purple cards, no unrelated blue sections).
7. When in doubt about emphasis: bigger Copernicus serif before bolder weight.

## Known Gaps

- Copernicus and StyreneB are licensed Anthropic typefaces and not available as public web fonts. Substitutes (Tiempos Headline / Cormorant Garamond / EB Garamond for serif; Inter / Söhne for sans) are documented in the typography section.
- The Anthropic radial-spike-mark is a brand glyph rendered as inline SVG; it's not formalized as a system token here. Treat it as a logo asset, and render it in `{colors.on-dark}` against the now-dark canvas.
- Animation and transition timings (chat message reveal, code block typewriter effect on the homepage, agentic-flow diagram animations) are not in scope.
- Form validation states beyond `{component.text-input-focused}` are not extracted — error / success states would need a sign-up or feedback flow to confirm.
- The actual Claude product surface (claude.ai chat interface) shares some tokens with the marketing site but adds many product-specific components (chat bubbles, message tools, file upload chips, conversation history sidebar) that are out of scope for this marketing-surface document.
- The exact hex values for `{colors.primary}`, `{colors.surface-dark}`, and `{colors.surface-cream-strong}` were estimated from a visual reference of djangoproject.com rather than an official brand asset file — treat them as a close approximation and verify against Django's brand guidelines if pixel-exact accuracy is required.
