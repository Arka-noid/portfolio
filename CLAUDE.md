# Merilight — Manuel Reza

Multi-page consultancy site. **Merilight** is the consultancy; Manuel Reza is its named principal. **Voice: "we" for the firm, "I" for the track record** — Home/Services/**About**/Contact/nav sell as "we"; **/profile**, /work, the case studies, ExpertiseStack and publications narrate Manuel's personal record as "I". The firm/person split is a page split: /about is the firm and contains no first-person copy, /profile is the person. See `docs/positioning.md` §7 before changing any copy's voice. **The thesis: photonics rarely fails on paper — it fails in integration, where optical signals meet custom boards, packaging, thermal limits and control code.** Merilight is the single cross-domain engineer who works on both sides of those boundaries, so a team does not have to hire four specialists to unblock one seam. Lead-generation focused: services come first, career/publications support credibility rather than lead the narrative. A captivating, immersive experience — not a dry resume.

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
    MarketsStrip.jsx           The four named markets (AI infra first) — §5
    ServiceProofStrip.jsx      Counted-proof strip above the offer grid
    PartnerLogos.jsx           Institution logo band at the foot of the home page
    Testimonials.jsx           Client references; renders nothing when empty
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
| `/` | `pages/Home.jsx` — condensed landing (Hero → ServicesTeaser → ExpertiseStack teaser → CredibilityTeaser → PartnerLogos → Contact CTA) |
| `/services` | `pages/ServicesPage.jsx` — full offer ladder + ExpertiseStack, the primary sales page |
| `/work` | `pages/Work.jsx` — client evidence, labelled **"Case studies"** in the nav (the route keeps the `/work` path so shared case-study links stay valid) |
| `/work/:slug` | `pages/CaseStudy.jsx` — looks up a bespoke case-study component by slug (see below) |
| `/about` | `pages/AboutPage.jsx` — the firm: About + RecordTeaser + Publications, as sections on one page |
| `/profile` | `pages/ProfilePage.jsx` — the person: `Principal` + the employment record (`Experience`); deliberately not in the nav |
| `/contact` | `pages/ContactPage.jsx` |
| `*` | `pages/NotFound.jsx` |

Each page component calls `useScrollReveal()` itself (pages mount/unmount per route, so the hook's `IntersectionObserver` needs to (re)run on every page, not once globally). The hook also runs a `MutationObserver`, so `.reveal` elements rendered *after* mount — filtered lists, expanded panels — get observed too; without it they stay at `opacity: 0` permanently. `ScrollToTop.jsx` (mounted in `RootLayout`) resets scroll position on every route change.

**Case studies:** `pages/CaseStudy.jsx` reads `:slug` from the URL and renders the matching component from a small registry (`{ lidar: LidarCaseStudy, "space-radar": SpaceRadarCaseStudy }`); unknown slugs redirect to `/work`. Each story's canvas animation, custom SVG diagrams, and copy remain bespoke components (`components/LidarCaseStudy.jsx`, `components/SpaceRadarCaseStudy.jsx`) — only the *routing* is unified under `/work/:slug`, not the content, since the two stories' visuals are too distinct to templatize without regression risk. A new case study needs a new bespoke component plus one entry in the registry map; it does not need a new route.

## Design Identity

- **Palette:** Dark navy (`#0A0F1E`) background, cyan (`#00C8FF`) accents, off-white text; category accents teal/indigo/violet
- **Colour tokens:** all in `:root` in `App.css` — `--bg`, `--bg-alt`, `--surface`, `--text`, `--muted`, `--accent`, `--accent-soft`, `--accent-glow`, plus `--bg-rgb`/`--surface-rgb`/`--accent-rgb` for `rgba()` compositing. Names are semantic, not value-derived, so a palette change is a `:root` edit rather than a rename. Use the tokens; avoid new hardcoded literals. Canvas/SVG art in JSX carries its own hex values since it cannot read CSS variables.
- **Typography:** Space Grotesk for headings/UI elements, Inter for body text
- **Aesthetic:** Minimal, technical, clean — no rounded corners, uppercase labels, generous letter-spacing
- **Motion:** Canvas hero animations (waveguide, starfield, LiDAR sweep), scroll-reveal (IntersectionObserver), SMIL-animated SVG diagrams, hover transforms. All motion respects `prefers-reduced-motion` (canvases render a static frame, SMIL is omitted via the `animate` prop).
- **Imagery:** All photography is placeholder stock and decorative. It renders through `components/ThemedImage.jsx`, which desaturates the image and applies a cyan-into-navy scrim, a faint scanline, and a slow cyan sweep (dropped under `prefers-reduced-motion`) so stock photos read as part of the site. Case-study hero backdrops use `casestudy/HeroPhoto.jsx` instead. Pick images for *subject*, not colour — the treatment handles the palette.
- **Institution logos:** `public/logos/*.png`, all **transparent-background and trimmed flush to the mark** (no padding baked into the file — otherwise `max-height` caps the empty box and the logo renders tiny). They are never shown in brand colour: `.partner-logo-*` in `App.css` flattens each to one off-white tone so a mixed set reads as a single row. Because the set mixes light-ink and dark-ink art, each entry declares its own ink — `logoTone` in `data/experience.js`, `tone` in `data/partners.js` — `"light"` for white-on-transparent (imec), `"dark"` for dark-on-transparent (everything else, which gets inverted). Getting this wrong makes a logo invisible against the navy
- **Tone:** Sophisticated engineering feel — the site itself should demonstrate technical craft

## Content Structure (by page)

- **Home (`/`)** — Hero (waveguide canvas, "Your photonic demo works. Will the product?", CTA to `/contact`) → `ServicesTeaser` (offer cards, links to `/services`) → `MarketsStrip compact` (the four named markets, AI infrastructure first) → `ExpertiseStack compact` (the stack, links to `/services`) → `CredibilityTeaser` (featured case-study cards, links to `/work`) → `PartnerLogos` (institution logo band) → `Contact` as a closing CTA
- **Services (`/services`)** — the offer ladder (three productized engagements, each with who it is for, deliverable, shape and proof), a counted-proof strip, `MarketsStrip`, `ExpertiseStack`, then `Testimonials` — the primary sales page. The three are **capability domains**, ordered the way a programme runs: 01 Optical System & PIC Architecture (**the flagship**), 02 Optoelectronic Prototype Integration, 03 Automated Test & Calibration. Design review and technical due diligence are the *short form of 01*, not a fourth card; TRL maturation and PDK enablement are deliberately in the continuation band, so the three offers stay the offer. See `docs/positioning.md` §9 before adding a fourth. **Markets are not offers** — `data/markets.js` names four fields (AI infrastructure & datacenter optics first) that all funnel into the same ladder; AI infrastructure never becomes a fourth card or a stack layer, and copy there stays at component/platform level (§7)
- **Work (`/work`)** — client evidence, not a career timeline. 8 projects grouped by **market** (`markets` in `data/projects.js`) with a filter; each card leads with the problem and, once expanded, closes with the outcome. The `category` badge (device/system/platform/product) still marks which layer of the stack the work sat in, tying each project back to the ExpertiseStack. Two cards link to `/work/:slug` case studies
- **Case study (`/work/:slug`)** — bespoke long-form page per story (challenge → approach → system design → results → related publications)
- **About (`/about`)** — **the firm, and only the firm** ("The firm" / "What Merilight is"): `firm.structure` plus firm-voice copy from `data/about.js`, beside a hardware photograph (`siteImages.aboutSide`) rather than a portrait — the buyer sizing up a consultancy meets hardware, not a face. Then `RecordTeaser` — labelled **"The team"**, carrying the provenance sentence and closing with a person strip (portrait, name, role and the link to `/profile` as one clickable row) — then Publications. **No first-person copy on this page** — the portrait, the name and Manuel's own account are on `/profile`. **The record is provenance, not a resume** — it exists to explain where the firm's capability came from, since Merilight has no client roster yet and its only evidence is Manuel's employment history. So: no "Career"/"Experience"/"Skills" labels, no CV download, no competency grid, and each timeline entry leads with the organisation and period with the job title demoted underneath. **The timeline itself lives on `/profile`, not here** — a full history in the middle of the firm's introduction reads as a resume however it is labelled, so /about carries only the framing sentence and the link. Read `docs/positioning.md` §1 and §7 before touching this page; `recordIntro` in `data/about.js` is the sentence that carries the framing. Publications are grouped by **domain** (`PUB_DOMAINS` in `data/publications.js`), not by year: the spread across six research areas is the breadth evidence, and reverse-chronological order buried it
- **Profile (`/profile`)** — **the person behind the firm**: `Principal` (portrait card, name/role, Manuel's first-person account and the market-perspective callout, all from `principal` in `data/about.js`) above `Experience`, the employment timeline, with a link back to /about. This is where the site says "I". Reached from the `RecordTeaser` on /about and from the footer; kept out of the primary nav so the nav keeps selling engagements
- **Contact (`/contact`)** — email/phone/Scholar, the conversion destination

"Market perspective" callouts (`components/Perspective.jsx`, text in `data/perspectives.js`) are woven into About, Projects, Services/ServicesTeaser, and both case studies.

## Conventions

- **Unset content renders nothing.** Every optional slot degrades to absence, never to a placeholder: `siteImages` entries may be null, `about.photoUrl`/`education`/`entity` may be empty, and `Testimonials.jsx` returns `null` for an empty array. Ship components before their content exists; do not invent filler
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

Breadth is presented as **reach across a boundary, not a skills list** — the
claim is that one engineer works on both sides of the seam a problem is sitting
on, whether that seam is optics/RF, chip/board or hardware/control. See
`docs/positioning.md` §4. The on-site expression is `components/ExpertiseStack.jsx`,
driven by `data/stack.js`: six layers from materials up to product, each with a
1–5 depth marker, one proof line, and a link to the evidence. **The depth marks
are deliberately not uniform** — the honest 3 for packaging is what makes the 5s
credible. Do not inflate them, and do not add a layer without real evidence in
`data/experience.js` or `data/projects.js`.

## Pending user-supplied content

- `data/about.js`: education entries. `photoUrl` is wired to `/manuel.jpg` and rendered as the team card on /about — the shot is a casual outdoor portrait cropped square in CSS; swap for a proper headshot when one exists
- `data/images.js`: `lidarHero` is still unsourced (wants a night-highway long exposure). The other five slots hold **placeholder** stock imagery — fine to ship, but swap for better art when available. Sourcing guide in `public/images/README.md`; slots fail gracefully when null/broken
- `data/publications.js`: `CITATIONS` count (update periodically from Scholar)
- `index.html`: `og:image` once a production image exists
- `data/testimonials.js`: empty array — `Testimonials.jsx` renders nothing until real references exist. Get written permission for the wording, especially for anything touching defense work
- `data/about.js`: `entity` (name, VAT, registered address) — EU B2B buyers check an invoice can be raised before starting procurement
- A day-rate band, for the engagement-model section — tracked as a GitHub issue

## Git Guidelines

- Do not commit PDF, PPTX, or other binary reference files (`Manuel Reza CV.pdf` and the PPTX are local reference material only)
- Do not commit `.env` or credential files
- **Auto-deploy workflow:** After completing a set of changes, commit and push to `main` automatically to trigger Vercel auto-deploy — **unless** the current work involves sensitive data from reference files (CV, PPTX, credentials). In that case, stage only source code files and verify nothing sensitive is included before pushing. Feature work may land on a branch first when requested; `main` is what deploys.
