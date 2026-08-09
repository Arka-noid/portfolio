# Portfolio — Manuel Reza

Personal portfolio website. A captivating, immersive experience — not a dry resume — presenting Manuel to consulting clients, employers, and collaborators.

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

## Project Structure

```
index.html                     SEO meta, OG/Twitter tags, JSON-LD Person schema, fonts
public/favicon.svg             Hand-drawn SVG favicon
src/
  main.jsx                     Entry point (imports App.css)
  App.jsx                      Hash router (route map) + Portfolio section composition
  App.css                      ALL styling, single global stylesheet
  components/                  One component per section + case-study pages
    casestudy/                 Shared case-study pieces (Shell, MetricCard,
                               PhaseCard, BlockDiagramSvg, RelatedPubs)
  data/                        All content as constant arrays/objects
  hooks/                       useScrollReveal, usePrefersReducedMotion
  utils/relatedPubs.js         Keyword filter for case-study related papers
```

**Routing:** hand-rolled hash router in `App.jsx` — a `routes` map from hash to page component. Case-study routes: `#/project/space-radar`, `#/project/lidar`. Any other hash renders the main portfolio.

## Design Identity

- **Palette:** Dark navy (`#0A0F1E`) background, cyan (`#00C8FF`) accents, off-white text; category accents teal/indigo/violet
- **Typography:** Space Grotesk for headings/UI elements, Inter for body text
- **Aesthetic:** Minimal, technical, clean — no rounded corners, uppercase labels, generous letter-spacing
- **Motion:** Canvas hero animations (waveguide, starfield, LiDAR sweep), scroll-reveal (IntersectionObserver), SMIL-animated SVG diagrams, hover transforms. All motion respects `prefers-reduced-motion` (canvases render a static frame, SMIL is omitted via the `animate` prop).
- **Tone:** Sophisticated engineering feel — the site itself should demonstrate technical craft

## Content Structure (main page order)

1. **Hero** — waveguide canvas, "Engineering Light into Systems", market-oriented sub-line, stats, CTA to Services
2. **About** — value-chain narrative, market perspective, languages; photo and CV-download slots render only when `data/about.js` provides `photoUrl` / `cvUrl`
3. **Experience** — vertical timeline with expandable entries
4. **Projects** — journey timeline (device → system → platform → product), 8 cards with market tags; two cards link to case-study pages
5. **Services** — "How I Can Help" consulting offer, four cards each with a proof point
6. **Competencies** — responsive card grid
7. **Publications** — metrics strip (count + citations), "Selected publications" tier, full year-grouped list, Scholar links; `note` field renders a badge (e.g. "Postdeadline paper")
8. **Contact** — dual-audience copy (consulting + roles), email/phone/LinkedIn/Scholar

"Market perspective" callouts (`components/Perspective.jsx`, text in `data/perspectives.js`) are woven into About, Projects, Services, and both case studies.

## Conventions

- Functional components with React hooks
- Content is data-driven: all copy lives in `src/data/*` files, not hardcoded in JSX
- Navigation uses real anchors (`href="#section"`) with CSS smooth scroll + `scroll-margin-top`; interactive elements must be keyboard-operable (`aria-expanded` on expanders)
- Responsive breakpoints: 900px and 600px, in `App.css` (separate blocks for main page and `.cs-*` case-study classes)
- New case-study pages: register in the `routes` map, compose from `components/casestudy/`, keep per-story SVG art bespoke

## Pending user-supplied content

- `data/about.js`: education entries, extra languages, `photoUrl`, `cvUrl`
- `data/images.js`: decorative photo slots (case-study hero backdrops, About side image) — sourcing guide in `public/images/README.md`; slots fail gracefully when null/broken
- `data/publications.js`: `CITATIONS` count (update periodically from Scholar)
- `index.html`: `og:image` and canonical URL once a production domain/image exist

## Git Guidelines

- Do not commit PDF, PPTX, or other binary reference files (`Manuel Reza CV.pdf` and the PPTX are local reference material only)
- Do not commit `.env` or credential files
- **Auto-deploy workflow:** After completing a set of changes, commit and push to `main` automatically to trigger Vercel auto-deploy — **unless** the current work involves sensitive data from reference files (CV, PPTX, credentials). In that case, stage only source code files and verify nothing sensitive is included before pushing. Feature work may land on a branch first when requested; `main` is what deploys.
