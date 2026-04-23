# EVO.MA — Frontend

> **"We Make Collaboration Better"**  
> Official website for EVO Technologies — Microsoft Teams integration & enterprise communication solutions in Morocco.

---

## Table of contents

- [Overview](#overview)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Routing](#routing)
- [i18n — translations](#i18n--translations)
- [Design system](#design-system)
- [Adding a product page](#adding-a-product-page)
- [Environment variables](#environment-variables)
- [Deploy to Netlify](#deploy-to-netlify)
- [Backend (coming soon)](#backend-coming-soon)
- [Brand](#brand)

---

## Overview

Single-page React application for [evo.ma](https://evo.ma). Covers:

- **Homepage** — hero, animated stats, ECHO featured card, product grid, AI showcase, deployment steps
- **Solutions** — ECHO (flagship product page) + ECHO Bayling (coming soon)
- **Produits** — 8 telephony product pages + 4 AI product pages, each with a custom animated hero card
- **Supporting pages** — Pricing, Contact, 4-step Demo booking wizard, About, Blog, Partners, Case studies, Legal

---

## Tech stack

| Layer        | Technology                          | Notes                              |
|--------------|-------------------------------------|------------------------------------|
| Framework    | React 18 + Vite 5                   | `npm run dev` on port 5173         |
| Styling      | Tailwind CSS 3                      | Custom EVO design tokens           |
| Animation    | Framer Motion 11                    | Page transitions + scroll reveals  |
| Routing      | React Router v6                     | SPA — all redirects via netlify.toml |
| i18n         | i18next + react-i18next             | FR / EN / AR with RTL support      |
| Icons        | Lucide React 0.454                  |                                    |
| Fonts        | DM Sans (Google Fonts)              | Display + body                     |
| Deploy       | Netlify                             | Static — no SSR                    |
| Backend      | Node.js + Express (separate repo)   | See `evo-ma-backend/`              |

---

## Getting started

**Prerequisites:** Node.js 20+, npm 9+

```bash
# 1. Clone and install
git clone https://github.com/your-org/evo-ma.git
cd evo-ma
npm install

# 2. Set up environment
cp .env.example .env
# Edit .env if you have a local backend running

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

```bash
# Other commands
npm run build      # Production build → dist/
npm run preview    # Preview the production build locally
npm run lint       # ESLint
```

---

## Project structure

```
evo-ma/
├── public/
│   ├── logo.avif            # EVO Technologies logo (primary)
│   ├── logo.png             # Fallback logo
│   ├── sitemap.xml          # All 22 routes
│   └── robots.txt
│
├── src/
│   ├── App.jsx              # Root — BrowserRouter + i18n init
│   ├── AppRouter.jsx        # All route definitions
│   ├── main.jsx             # Entry point
│   ├── index.css            # Tailwind directives + global design system
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx        # Root wrapper: Navbar + page transitions + Footer
│   │   │   ├── Navbar.jsx        # Responsive navbar with mega menus + lang switcher
│   │   │   └── Footer.jsx        # 6-column footer with all links
│   │   │
│   │   ├── sections/             # Homepage sections (used only in Home.jsx)
│   │   │   ├── Hero.jsx          # Hero with animated live dashboard card
│   │   │   ├── StatsStrip.jsx    # Scroll-triggered animated counters
│   │   │   ├── SolutionsGrid.jsx # 8 telephony product cards grid
│   │   │   ├── AIShowcase.jsx    # AI products with sticky left copy
│   │   │   ├── WhyEVO.jsx        # 6 differentiator cards
│   │   │   ├── DeploymentSteps.jsx # 3-step deploy + hosting options
│   │   │   └── CTABanner.jsx     # Reusable CTA block (bottom of every page)
│   │   │
│   │   └── ui/
│   │       ├── ProductPage.jsx   # Generic template for all 12 product pages
│   │       ├── HeroCards.jsx     # 8 animated mock-UI hero cards (one per product)
│   │       └── FadeIn.jsx        # FadeIn / FadeInStagger / FadeInItem components
│   │
│   ├── pages/
│   │   ├── Home.jsx              # Assembles all homepage sections
│   │   ├── ECHOPage.jsx          # ECHO solution full page
│   │   ├── BaylingAndECHOCard.jsx # BaylingPage + ECHOCard homepage section
│   │   ├── ProductPages.jsx      # All 12 product pages (wrappers over ProductPage)
│   │   ├── Pricing.jsx           # 3-tier pricing
│   │   ├── Contact.jsx           # Contact form (demo / quote toggle)
│   │   ├── Demo.jsx              # 4-step demo booking wizard
│   │   └── About.jsx             # About + Blog, Partners, Cases, Legal, 404
│   │
│   ├── hooks/
│   │   ├── useStars.js           # Canvas star field with shooting stars
│   │   └── useSEO.js             # Per-page title, meta, OG tags, canonical
│   │
│   ├── i18n/
│   │   └── index.js              # All translations: FR / EN / AR
│   │
│   └── lib/
│       └── utils.js              # cn() + TELEPHONY, AI_PRODUCTS, SOLUTIONS_EVO
│
├── .env.example
├── .gitignore
├── index.html
├── netlify.toml
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## Routing

| Path | Page | Notes |
|------|------|-------|
| `/` | Homepage | |
| `/solutions` | Solutions index | |
| `/solutions/echo` | ECHO product page | Flagship solution |
| `/solutions/bayling` | ECHO Bayling | Coming soon |
| `/produits` | Produits index | Téléphonie + IA |
| `/produits/contact-center` | Contact Center | |
| `/produits/auto-attendant` | Auto Attendant | |
| `/produits/attendant-console` | Attendant Console | |
| `/produits/call-recording` | Call Recording | |
| `/produits/screen-recording` | Screen Recording | |
| `/produits/contact-manager` | Contact Manager | |
| `/produits/digital-fax` | Digital FAX | |
| `/produits/call-analytics` | Call Analytics | |
| `/produits/ai/voice-agent` | AI Voice Agent | |
| `/produits/ai/digital-agent` | AI Digital Agent | |
| `/produits/ai/receptionist` | AI Virtual Receptionist | |
| `/produits/ai/analytics` | AI Call Analytics | |
| `/pricing` | Pricing | 3 tiers |
| `/contact` | Contact | |
| `/demo` | Demo booking | 4-step wizard |
| `/about` | About | |
| `/blog` | Blog | Placeholder |
| `/partners` | Partners | Placeholder |
| `/cases` | Case studies | Placeholder |
| `/legal` | Legal | Placeholder |

> Old `/solutions/*` and `/ai/*` paths are kept as legacy redirects in `AppRouter.jsx` so existing links don't break.

---

## i18n — translations

All strings live in `src/i18n/index.js`, organised by namespace:

```
nav.*            Navigation labels
home.*           Homepage copy
solutions.*      Telephony product names + descriptions (8 products)
ai.*             AI product names + descriptions (4 products)
evo_solutions.*  ECHO + Bayling names + descriptions
common.*         Shared UI strings (buttons, labels, contact info)
```

**Adding a new language:**

1. Add a new entry in the `resources` object in `src/i18n/index.js`
2. Add `{ code, label, name, dir }` to `LANGUAGES` in `src/lib/utils.js`

**Switching language at runtime:**

```js
import { useTranslation } from 'react-i18next'
const { i18n } = useTranslation()
i18n.changeLanguage('ar') // 'fr' | 'en' | 'ar'
```

---

## Design system

Defined in `src/index.css` (Tailwind `@layer components`) and `tailwind.config.js`.

### Brand colors

| Token | Hex | Tailwind class | Usage |
|-------|-----|----------------|-------|
| Orange | `#f7931e` | `bg-orange`, `text-orange` | Primary accent, CTAs, hover states |
| Navy | `#1e3a6e` | `bg-navy`, `text-navy` | Trust, secondary elements |
| Dark | `#030712` | `bg-dark` | Page background |
| Dark card | `#0d1424` | `bg-dark-card` | Card backgrounds |

### Component classes

```css
.btn-primary        /* Orange filled button */
.btn-secondary      /* Ghost button with border */
.btn-ghost          /* Text-only link button */
.card               /* Dark card with subtle border */
.card-hover         /* card + lift + orange border on hover */
.section            /* Section with responsive vertical padding */
.container-xl       /* max-w-7xl centered */
.container-lg       /* max-w-6xl centered */
.section-tag        /* Orange eyebrow label with leading line */
.text-gradient      /* Orange → yellow gradient text */
.badge              /* Pill badge with dot */
.feat-icon          /* Orange icon container for feature cards */
```

### Fonts

- **DM Sans** — display headings (`font-display`) and body text
- **JetBrains Mono** — monospace, used for code/numbers (`font-mono`)

---

## Adding a product page

1. **Register the route** in `src/lib/utils.js`:
```js
// Add to TELEPHONY or AI_PRODUCTS
{ key: 'my_product', path: '/produits/my-product', icon: 'IconName' }
```

2. **Add translations** in `src/i18n/index.js` for `fr`, `en`, `ar`:
```js
solutions: {
  my_product: {
    name:  'Mon Produit',
    desc:  'Description longue',
    short: 'Tagline courte.',
  }
}
```

3. **Create the page** in `src/pages/ProductPages.jsx`:
```jsx
export function MyProductPage() {
  return (
    <ProductPage
      nameKey="solutions.my_product.name"
      descKey="solutions.my_product.desc"
      shortKey="solutions.my_product.short"
      icon={MyIcon}
      backTo="/produits"
      backLabel="Produits"
      accentColor="orange"   // 'orange' | 'violet' | 'sky' | 'emerald'
      features={[ ... ]}
      useCases={[ ... ]}
    />
  )
}
```

4. **Add the route** in `src/AppRouter.jsx`:
```jsx
<Route path="produits/my-product" element={<MyProductPage />} />
```

---

## Environment variables

Copy `.env.example` to `.env` before running:

```bash
cp .env.example .env
```

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_API_URL` | `http://localhost:3001/api` | Backend API base URL |

For production, set `VITE_API_URL` in **Netlify → Site settings → Environment variables**.

---

## Deploy to Netlify

### Option A — Drag & drop (quickest)

```bash
npm run build
# Drag the dist/ folder onto app.netlify.com
```

### Option B — Connected to GitHub (recommended)

1. Push to GitHub
2. **Netlify → Add new site → Import from Git**
3. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy

The `netlify.toml` at the project root handles SPA routing automatically — all routes serve `index.html` with a 200 status so React Router works on page refresh.

---

## Backend (coming soon)

The contact form (`src/pages/Contact.jsx`) and demo booking form (`src/pages/Demo.jsx`) currently use a mock `setSent(true)`. The Node.js + Express backend lives in the separate `evo-ma-backend/` repository.

**To wire it up when ready:**

1. Set `VITE_API_URL` in your `.env` to point at the backend
2. In `Contact.jsx`, replace `setSent(true)` with:
```js
const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
const data = await res.json()
if (data.ok) setSent(true)
```
3. Same pattern for `Demo.jsx` pointing to `/demo`

**Backend endpoints:**
- `POST /api/contact` — contact form (name, email, company, message, type)
- `POST /api/demo` — demo booking (name, email, company, size, products, day, time)
- `GET /api/health` — uptime check

---

## Brand

| | |
|---|---|
| **Company** | EVO Technologies |
| **Slogan** | We Make Collaboration Better |
| **Location** | Casablanca, Maroc |
| **Phone** | +212 520 999 721 |
| **Email** | contact@evo.ma |
| **Logo** | `/public/logo.avif` (AVIF + PNG fallback) |
