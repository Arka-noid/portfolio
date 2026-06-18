# Portfolio — Manuel Reza

Personal portfolio website. A captivating, immersive experience — not a dry resume — for presenting to stakeholders, employers, and collaborators.

## Tech Stack

- **Framework:** Vite + React (SPA)
- **Deployment:** Vercel
- **Language:** JavaScript (JSX)

## Development Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build locally
```

## Design Identity

The visual language is defined in `portfolio.jsx` (the original draft):

- **Palette:** Dark navy (`#0A0F1E`) background, cyan (`#00C8FF`) accents, off-white text
- **Typography:** Space Grotesk for headings/UI elements, Inter for body text
- **Aesthetic:** Minimal, technical, clean — no rounded corners, uppercase labels, generous letter-spacing
- **Motion:** Canvas-based animated waveguide hero background, scroll-reveal (IntersectionObserver) on sections, hover transforms on cards
- **Tone:** Sophisticated engineering feel — the site itself should demonstrate technical craft

## Content Structure

1. **Hero** — animated waveguide canvas background, title "Engineering Light into Systems", key stats (years, TRL level, EU projects), CTA
2. **Experience** — vertical timeline with expandable entries (role, org, period, location, bullet points)
3. **Competencies** — responsive grid of cards (icon, title, tags) covering systems engineering, product integration, photonics, tools, fabrication, project management
4. **Publications** — list with cyan left-border accent
5. **Contact** — centered section with email, phone, location

## Conventions

- Functional components with React hooks (`useState`, `useEffect`, `useRef`)
- Content is data-driven: experience, competencies, and publications are defined as constant arrays of objects, not hardcoded in JSX
- Smooth scroll navigation between sections

## Reference Files

- `portfolio.jsx` — design draft and content reference (the source of truth for visual identity and portfolio content)
- `Manuel Reza CV.pdf`, `Manuel Reza - Work background - Public.pptx` — background reference materials only; **do not commit these to git**

## Git Guidelines

- Do not commit PDF, PPTX, or other binary reference files
- Do not commit `.env` or credential files
