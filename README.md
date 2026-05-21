# Emraad Advanced Technologies
### Official Corporate Website — React + Vite

> *A Division of Emraad Investments Ltd*
> **"Engineering the Future with Intelligence"**

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Component Reference](#component-reference)
- [Design System](#design-system)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## Overview

This is the official corporate website for **Emraad Advanced Technologies**, built as a fully componentized React single-page application (SPA). The site covers:

- Hero landing with animated network visual
- About / brand story
- 5 core service areas
- Interactive "Why Us" panel
- Scrolling industries marquee
- Vision & Mission statements
- Consultation request form
- Full site footer

The project was purpose-built as a React + Vite application — **not** a converted HTML file — so every section is a clean, standalone component with its own scoped CSS file.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^18.3.1 | UI component framework |
| React DOM | ^18.3.1 | DOM rendering |
| Vite | ^5.4.2 | Build tool & dev server |
| @vitejs/plugin-react | ^4.3.1 | JSX transform (Babel) |
| Google Fonts | CDN | Syne · DM Sans · Space Mono |
| CSS Custom Properties | Native | Design token system |
| IntersectionObserver | Native | Scroll-reveal animations |
| requestAnimationFrame | Native | Custom cursor animation |

> **No external UI libraries.** No Tailwind, no MUI, no styled-components.
> Everything is hand-crafted CSS with a CSS variable token system.

---

## Project Structure

```
emraadadvancedtech/
│
├── index.html                        ← HTML shell (root mount point)
├── vite.config.js                    ← Vite configuration
├── package.json                      ← Dependencies & scripts
│
├── public/
│   └── favicon.svg                   ← Hexagonal "E" brand favicon
│
└── src/
    ├── main.jsx                      ← App entry point (ReactDOM.createRoot)
    ├── App.jsx                       ← Root component — assembles all sections
    │
    ├── styles/
    │   └── globals.css               ← CSS variables, resets, shared utilities
    │
    └── components/
        ├── useCursor.js              ← Custom cursor (hook)
        ├── Navbar.jsx  / Navbar.css
        ├── Hero.jsx    / Hero.css
        ├── About.jsx   / About.css
        ├── Services.jsx / Services.css
        ├── WhyUs.jsx   / WhyUs.css
        ├── Industries.jsx / Industries.css
        ├── Vision.jsx  / Vision.css
        ├── Contact.jsx / Contact.css
        └── Footer.jsx  / Footer.css
```

---

## Component Reference

### `App.jsx`
Root component. Mounts the custom cursor via `useCursor` hook, then renders all page sections in order. No logic lives here — it is purely compositional.

---

### `useCursor.js`
Custom React hook. Manages two DOM refs:
- `.cursor` — small teal dot that tracks mouse exactly
- `.cursor-ring` — larger ring that follows with a lag (lerp animation via `requestAnimationFrame`)

Adds `.hovered` class to the ring when hovering interactive elements, scaling it up and changing its color to teal.

---

### `Navbar.jsx`
**Features:**
- Fixed positioned, blur backdrop
- Shrinks on scroll (`scrolled` class via `useEffect`)
- Smooth-scroll to section on link click
- Mobile hamburger menu (toggle with `useState`)
- SVG hexagonal logo mark with gradient strokes
- "Consult" CTA button with gradient fill

---

### `Hero.jsx`
**Features:**
- Full-viewport height
- Staggered entrance animations (CSS `animation-delay`)
- Gradient headline text with `accent` class
- Inline SVG neural network graphic (floats on CSS animation)
- Stats row (5+ domains, AI, 360°)
- Two CTA buttons scroll to `#services` and `#contact`
- Radial gradient background + dot-grid overlay

---

### `About.jsx`
**Features:**
- `IntersectionObserver` for scroll-reveal
- Two-column grid layout
- Three brand pillar cards with hover slide effect
- Animated orbital rings (pure CSS `@keyframes spin`)
- Central "E" monogram with gradient fill

---

### `Services.jsx`
**Features:**
- Five service cards in a 2-column CSS grid
- Card 5 (Digital Transformation) spans full width (`wide` class)
- Hover state: background shift + diagonal arrow moves
- Each card click scrolls to `#contact`
- Service tags (pill chips) per card

| # | Service |
|---|---|
| 01 | Artificial Intelligence & Machine Learning |
| 02 | Blockchain & Distributed Systems |
| 03 | Enterprise Software Development |
| 04 | Cybersecurity & Cloud Infrastructure |
| 05 | Digital Transformation Consulting |

---

### `WhyUs.jsx`
**Features:**
- Interactive list — click any item to update the detail panel
- `useState` tracks active index; `animKey` forces re-animation on change
- Detail panel has CSS `fadeUp` keyframe animation on each switch
- Sticky detail panel on desktop; static on mobile

| # | Advantage |
|---|---|
| 01 | Advanced Technical Expertise |
| 02 | Enterprise-Grade Security |
| 03 | Scalable Architecture |
| 04 | Strategic Digital Transformation |
| 05 | African Market Intelligence |

---

### `Industries.jsx`
**Features:**
- Infinite horizontal marquee (CSS `@keyframes scrollX`)
- Pauses on hover (`animation-play-state: paused`)
- Chips doubled in array to create seamless loop
- 8 industry sectors

---

### `Vision.jsx`
**Features:**
- Gradient section background
- Large decorative watermark text (EMRAAD) behind cards
- Two cards: Vision Statement + Mission Statement
- Top gradient accent bar on each card
- Hover lift effect

---

### `Contact.jsx`
**Features:**
- Fully controlled React form (`useState` for each field)
- Fields: Full Name, Organization, Email, Phone, Service dropdown, Message
- On submit: replaces form with a styled success confirmation (no page reload)
- Native HTML5 validation (`required` attributes)

---

### `Footer.jsx`
**Features:**
- 4-column grid layout (brand, services, company, contact)
- Social link buttons (LinkedIn, X, WhatsApp)
- All nav links use smooth-scroll
- Responsive: collapses to 2-col at 900px, 1-col at 600px
- Bottom bar with copyright

---

## Design System

### Color Palette (`globals.css`)

| Variable | Hex | Usage |
|---|---|---|
| `--navy` | `#050d1a` | Page background |
| `--deep` | `#071428` | Section alternate background |
| `--midnight` | `#0a1f3d` | Card / element backgrounds |
| `--electric` | `#1a72f5` | Primary accent — borders, glows |
| `--teal` | `#00c9b1` | Secondary accent — tags, cursor, active states |
| `--silver` | `#a8bdd8` | Body text, subtitles |
| `--dim` | `#4a6080` | Labels, footer links, muted text |
| `--white` | `#f0f6ff` | Headings, primary text |
| `--glass` | `rgba(15,76,158,0.12)` | Card fill |
| `--glass-border` | `rgba(26,114,245,0.2)` | Card borders |

### Typography

| Font | Weights | Usage |
|---|---|---|
| **Syne** | 400, 600, 700, 800 | Headings, logo, buttons, labels |
| **DM Sans** | 300, 400, 500 | Body text, nav, paragraphs |
| **Space Mono** | 400, 700 | Tags, section labels, monospaced UI |

### Shared Utility Classes

| Class | Description |
|---|---|
| `.reveal` | Hidden by default; `.visible` triggers fade-up via IntersectionObserver |
| `.section-tag` | Small all-caps label with teal left-line |
| `.section-h2` | Large display heading; `em` children get gradient text |
| `.section-sub` | Subtitle paragraph, silver colour |
| `.btn-primary` | Solid gradient button with glow |
| `.btn-outline` | Ghost button with hover fill |
| `.tag` | Pill chip for service/feature labels |

### Animations

| Keyframe | Usage |
|---|---|
| `fadeUp` | Hero entrance stagger, why-detail panel |
| `fadeIn` | Hero SVG visual |
| `spin` | About orbital rings |
| `pulse` | Hero tag dot |
| `scrollX` | Industries infinite marquee |
| `float` | Hero SVG gentle float |

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

Check your versions:
```bash
node -v
npm -v
```

### Installation

**Step 1 — Set up the project folder**

If starting from scratch:
```bash
mkdir emraadadvancedtech
cd emraadadvancedtech
```

If using your existing Vite project, first clear the old source files:
```bash
# Delete these files if they exist:
# src/App.css
# src/index.css
# src/App.jsx  (will be replaced)
# src/main.jsx (will be replaced)
```

**Step 2 — Copy project files**

Extract the zip and copy all files into your project root, maintaining the folder structure exactly as shown in [Project Structure](#project-structure).

**Step 3 — Install dependencies**
```bash
npm install
```

**Step 4 — Start the dev server**
```bash
npm run dev
```

Open your browser at **http://localhost:5173**

---

## Available Scripts

```bash
# Start development server with hot module reload
npm run dev

# Build optimised production bundle → /dist folder
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the /dist folder to netlify.com/drop
```

### Manual (cPanel / VPS)
```bash
npm run build
# Upload the contents of /dist to your public_html or web root
```

> The site is a pure static SPA. No server-side rendering required.
> Any static host (Vercel, Netlify, GitHub Pages, Render) works perfectly.

---

## Troubleshooting

### `vite:oxc` transform error
**Cause:** Raw HTML content (e.g. `<!DOCTYPE html>`, `<style>` blocks, `<script>` tags) placed inside a `.jsx` file.
**Fix:** Ensure `App.jsx` only contains JSX component imports — never raw HTML. Each section is a separate component in `src/components/`.

### Google Fonts not loading
**Cause:** No internet connection during dev, or a content security policy blocking CDN.
**Fix:** The fonts load from `@import` in `globals.css`. Check your network. For offline use, download the font files and serve them locally from `/public/fonts/`.

### Cursor not visible
**Cause:** The custom cursor requires `cursor: none` on `body`. If another stylesheet overrides this, the custom cursor elements may conflict.
**Fix:** Ensure no other CSS file sets `cursor: auto` on `body` or `*`.

### Smooth scroll not working on mobile
**Cause:** Some mobile browsers require `scroll-behavior: smooth` on the `html` element.
**Fix:** Already set in `globals.css`. If issues persist, use a polyfill or replace smooth scroll with a JS scroll library.

### Form not submitting to a backend
**Cause:** The contact form currently uses local React state only.
**Fix:** Replace the `handleSubmit` function in `Contact.jsx` with a `fetch()` call to your API endpoint, email service (e.g. EmailJS, Formspree), or backend route.

```js
// Example: integrate with Formspree
const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  setSubmitted(true);
};
```

---

## Brand Assets

| Asset | Location | Format |
|---|---|---|
| Favicon | `/public/favicon.svg` | SVG (hexagonal E mark) |
| Logo mark | Inline SVG in `Navbar.jsx` / `Footer.jsx` | SVG with gradient defs |
| Color tokens | `src/styles/globals.css` | CSS custom properties |

---

## License

Private & Proprietary.
© 2025 Emraad Advanced Technologies — A Division of Emraad Investments Ltd.
All rights reserved.

---

*Built with React 18 + Vite 5 · Designed for enterprise-grade digital presence.*
