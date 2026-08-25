# Merilight — Manuel Reza

Multi-page consultancy site. **Merilight** is the consultancy; Manuel Reza is its named principal and the first-person voice of all copy. Lead-generation focused: services come first, career/publications support credibility rather than lead the narrative. A captivating, immersive experience — not a dry resume.

**Positioning is settled and documented in `docs/positioning.md`** — the source of truth for every word on the site. Read it before writing or editing user-facing copy. It records the positioning statement, the buyer situations, the proof-point bank, banned phrasings, and the offer ladder. Copy that cannot be justified from that file is either wrong or means the file needs updating first.

## Tech Stack

- **Framework:** Vite + React (SPA) with `react-router-dom` (`BrowserRouter`)
- **Deployment:** Vercel — `vercel.json` has a catch-all rewrite to `/index.html`, required for client-side routing to work on direct/refreshed URLs
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
vercel.json                    SPA catch-all rewrite (required for BrowserRouter on Vercel)
public/favicon.svg             Hand-drawn SVG favicon
docs/positioning.md            Message hierarchy — source of truth for all copy
src/
  main.jsx                     Entry point — wraps <App/> in <BrowserRouter>
  App.jsx                      <Routes> tree (see Routing below)
  App.css                      ALL styling, single global stylesheet
  layouts/RootLayout.jsx       Nav + <Outlet/> + Footer, shared chrome for every route
  pages/                       One component per route — thin, compose components/data
  components/                  Section-level building blocks reused by pages
    ExpertiseStack.jsx         The seven-layer stack — the site's USP artefact
    ServiceProofStrip.jsx      Counted-proof strip above the offer grid
    ThemedImage.jsx            Blends any photo into the palette (see Imagery)
    casestudy/                 Shared case-study pieces (Shell, MetricCard,
                               PhaseCard, BlockDiagramSvg, RelatedPubs)
  data/                        All content as constant arrays/objects
  hooks/                       useScrollReveal, usePrefersReducedMotion
  utils/relatedPubs.js         Keyword filter for case-study related papers
```

**Routing:** `react-router-dom` with real URLs (no hashes). `App.jsx` nests all routes under `RootLayout` (which renders the global `Nav`/`Footer` once). Route table:

| Route | Page |
|---|---|
| `/` | `pages/Home.jsx` — condensed landing (Hero → ServicesTeaser → ExpertiseStack teaser → CredibilityTeaser → Contact CTA) |
| `/services` | `pages/ServicesPage.jsx` — full offer ladder + ExpertiseStack, the primary sales page |
| `/work` | `pages/Work.jsx` — full projects timeline |
| `/work/:slug` | `pages/CaseStudy.jsx` — looks up a bespoke case-study component by slug (see below) |
| `/about` | `pages/AboutPage.jsx` — About + Experience + Competencies + Publications, as sections on one page |
| `/contact` | `pages/ContactPage.jsx` |
| `*` | `pages/NotFound.jsx` |

Each page component calls `useScrollReveal()` itself (pages mount/unmount per route, so the hook's `IntersectionObserver` needs to (re)run on every page, not once globally). `ScrollToTop.jsx` (mounted in `RootLayout`) resets scroll position on every route change.

**Case studies:** `pages/CaseStudy.jsx` reads `:slug` from the URL and renders the matching component from a small registry (`{ lidar: LidarCaseStudy, "space-radar": SpaceRadarCaseStudy }`); unknown slugs redirect to `/work`. Each story's canvas animation, custom SVG diagrams, and copy remain bespoke components (`components/LidarCaseStudy.jsx`, `components/SpaceRadarCaseStudy.jsx`) — only the *routing* is unified under `/work/:slug`, not the content, since the two stories' visuals are too distinct to templatize without regression risk. A new case study needs a new bespoke component plus one entry in the registry map; it does not need a new route.

## Design Identity

- **Palette:** Dark navy (`#0A0F1E`) background, cyan (`#00C8FF`) accents, off-white text; category accents teal/indigo/violet
- **Colour tokens:** all in `:root` in `App.css` — `--bg`, `--bg-alt`, `--surface`, `--text`, `--muted`, `--accent`, `--accent-soft`, `--accent-glow`, plus `--bg-rgb`/`--surface-rgb`/`--accent-rgb` for `rgba()` compositing. Names are semantic, not value-derived, so a palette change is a `:root` edit rather than a rename. Use the tokens; avoid new hardcoded literals. Canvas/SVG art in JSX carries its own hex values since it cannot read CSS variables.
- **Typography:** Space Grotesk for headings/UI elements, Inter for body text
- **Aesthetic:** Minimal, technical, clean — no rounded corners, uppercase labels, generous letter-spacing
- **Motion:** Canvas hero animations (waveguide, starfield, LiDAR sweep), scroll-reveal (IntersectionObserver), SMIL-animated SVG diagrams, hover transforms. All motion respects `prefers-reduced-motion` (canvases render a static frame, SMIL is omitted via the `animate` prop).
- **Imagery:** All photography is placeholder stock and decorative. It renders through `components/ThemedImage.jsx`, which desaturates the image and applies a cyan-into-navy scrim, a faint scanline, and a slow cyan sweep (dropped under `prefers-reduced-motion`) so stock photos read as part of the site. Case-study hero backdrops use `casestudy/HeroPhoto.jsx` instead. Pick images for *subject*, not colour — the treatment handles the palette.
- **Tone:** Sophisticated engineering feel — the site itself should demonstrate technical craft

## Content Structure (by page)

- **Home (`/`)** — Hero (waveguide canvas, "Your photonic demo works. Will the product?", CTA to `/contact`) → `ServicesTeaser` (offer cards, links to `/services`) → `ExpertiseStack compact` (the stack, links to `/services`) → `CredibilityTeaser` (featured case-study cards, links to `/work`) → `Contact` as a closing CTA
- **Services (`/services`)** — the full offer ladder (five productized engagements, each with who it is for, deliverable, shape and proof), a counted-proof strip, then `ExpertiseStack` — the primary sales page
- **Work (`/work`)** — projects journey timeline (device → system → platform → product), 8 cards with market tags; two cards link to `/work/:slug` case studies
- **Case study (`/work/:slug`)** — bespoke long-form page per story (challenge → approach → system design → results → related publications)
- **About (`/about`)** — bio/value-chain narrative, then Experience timeline, Competencies grid, and Publications, composed as sections on one page (career/research content is supporting credibility, not the primary nav)
- **Contact (`/contact`)** — email/phone/LinkedIn/Scholar, the conversion destination

"Market perspective" callouts (`components/Perspective.jsx`, text in `data/perspectives.js`) are woven into About, Projects, Services/ServicesTeaser, and both case studies.

## Conventions

- Functional components with React hooks
- Content is data-driven: all copy lives in `src/data/*` files, not hardcoded in JSX
- Cross-page navigation uses `<Link>`/`<NavLink>` from `react-router-dom` (see `components/Nav.jsx`); in-page anchor scroll (`href="#section"` + CSS smooth scroll + `scroll-margin-top`) is reserved for same-page jumps. Interactive elements must be keyboard-operable (`aria-expanded` on expanders, `aria-pressed` on the ExpertiseStack rows). A control that has nothing to do should not be a control — the ExpertiseStack renders plain rows in `compact` mode rather than dead buttons
- Responsive breakpoints: 900px and 600px, in `App.css` (separate blocks for main page and `.cs-*` case-study classes)
- New top-level pages: add a component under `src/pages/`, register a `<Route>` in `App.jsx`, add a `Nav.jsx` link if it belongs in primary nav
- New case studies: add a bespoke component (compose from `components/casestudy/`, keep per-story SVG/canvas art bespoke) and one entry in the slug registry in `pages/CaseStudy.jsx` — no new route needed

## Deferred / follow-up ideas

- Real lead-capture contact form (e.g. Formspree or a Vercel function) — `Contact.jsx` is currently mailto/tel/social links only
- Per-page `<title>`/meta tags (e.g. via `react-helmet-async`) now that `/services`, `/work/:slug` etc. are independently shareable/indexable URLs

## The USP, and how the site expresses it

Breadth is presented as **diagnostic capability, not a skills list** — see
`docs/positioning.md` §4. The on-site expression is `components/ExpertiseStack.jsx`,
driven by `data/stack.js`: seven layers from materials up to product, each with a
1–5 depth marker, one proof line, and a link to the evidence. **The depth marks
are deliberately not uniform** — the honest 3 for packaging is what makes the 5s
credible. Do not inflate them, and do not add a layer without real evidence in
`data/experience.js` or `data/projects.js`.

## Pending user-supplied content

- `data/about.js`: education entries, extra languages, `photoUrl`, `cvUrl`
- `data/images.js`: `lidarHero` is still unsourced (wants a night-highway long exposure). The other five slots hold **placeholder** stock imagery — fine to ship, but swap for better art when available. Sourcing guide in `public/images/README.md`; slots fail gracefully when null/broken
- `data/publications.js`: `CITATIONS` count (update periodically from Scholar)
- `index.html`: `og:image` once a production image exists
- Testimonials/client references, portrait, education entries, legal entity and VAT details, and a day-rate band — all tracked as GitHub issues (trust layer and engagement model)

## Git Guidelines

- Do not commit PDF, PPTX, or other binary reference files (`Manuel Reza CV.pdf` and the PPTX are local reference material only)
- Do not commit `.env` or credential files
- **Auto-deploy workflow:** After completing a set of changes, commit and push to `main` automatically to trigger Vercel auto-deploy — **unless** the current work involves sensitive data from reference files (CV, PPTX, credentials). In that case, stage only source code files and verify nothing sensitive is included before pushing. Feature work may land on a branch first when requested; `main` is what deploys.
