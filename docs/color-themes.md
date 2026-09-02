# Color themes

Reference palettes explored for the site, each a full set of values for the
tokens in `:root` in `src/App.css`. **Currently active: Quiet Instrument.**

## How to switch

1. Replace the seven `--bg`/`--bg-alt`/`--surface`/`--text`/`--muted`/`--accent`/
   `--accent-rgb` values in `:root` (`src/App.css`) with a theme's values below.
   (`--bg-rgb` and `--surface-rgb` are the rgb triples of `--bg`/`--surface`.)
2. Canvas and SVG art can't read CSS custom properties, so the same hex/rgb
   values are hardcoded in a few places and need updating too — search for the
   *previous* theme's `--accent` hex (case-insensitive) across `src/` and
   replace every hit with the new one. As of the Quiet Instrument switch, the
   files carrying literals are:
   - `src/components/Hero.jsx` — waveguide canvas glow (`rgba(accent-rgb, …)`)
   - `src/components/casestudy/BlockDiagramSvg.jsx` — signal-chain diagram
   - `src/components/casestudy/HeroPhoto.jsx` — case-study hero scrim (uses `--bg-rgb`, not accent)
   - `src/components/LidarCaseStudy.jsx` — chip/diagram SVG + canvas
   - `src/components/SpaceRadarCaseStudy.jsx` — chip/diagram SVG + canvas
   - `src/data/projects.js` — `categoryMeta.device.color` (mirrors the accent for the "Device" category badge)
3. Leave category accents (`system` teal `#00A89D`, `platform` indigo `#4A6CF7`,
   `product` violet `#8B5CF6` in `src/data/projects.js`) and illustration-only
   colors (chip-surface gradients, InP/violet dual-material diagrams) alone —
   they're intentionally independent of the primary accent, not derived from it.
4. `npm run build` and spot-check the home page, a services/work page, and
   both case studies (the SVG-heaviest pages) before shipping.

## Active

### Quiet Instrument / Muted Cyan — *current*
Desaturated version of the original cyan: same structure, pulled from
saturated to a slate-teal for a calmer "instrument panel" read instead of a
neon dev-tool one.

| token | value |
|---|---|
| `--bg` | `#0d1117` |
| `--bg-rgb` | `13, 17, 23` |
| `--bg-alt` | `#141a23` |
| `--surface` | `#1c2531` |
| `--surface-rgb` | `28, 37, 49` |
| `--text` | `#e6eaf0` |
| `--muted` | `#8b96a5` |
| `--accent` | `#5fb3bf` |
| `--accent-rgb` | `95, 179, 191` |

## Rollback

### Deep Navy / Cyan — original
The palette the site shipped with before this exploration.

| token | value |
|---|---|
| `--bg` | `#0a0f1e` |
| `--bg-rgb` | `10, 15, 30` |
| `--bg-alt` | `#111827` |
| `--surface` | `#1e2a45` |
| `--surface-rgb` | `30, 42, 69` |
| `--text` | `#e8edf5` |
| `--muted` | `#8a9bb8` |
| `--accent` | `#00c8ff` |
| `--accent-rgb` | `0, 200, 255` |

## Other dark proposals (not applied)

### Graphite / Amber Signal
Benchtop-instrument warmth — the amber of a calibration rig's status LED.

| token | value |
|---|---|
| `--bg` | `#0d0d0f` |
| `--bg-alt` | `#17171a` |
| `--surface` | `#232326` |
| `--text` | `#f2efea` |
| `--muted` | `#9c968c` |
| `--accent` | `#ffb020` |
| `--accent-rgb` | `255, 176, 32` |

### Ink Indigo / Laser Green
Indigo-black ground, 532nm DPSS-green accent — "system nominal" green.

| token | value |
|---|---|
| `--bg` | `#0a0e1c` |
| `--bg-alt` | `#10152a` |
| `--surface` | `#1b2340` |
| `--text` | `#e9edf7` |
| `--muted` | `#8891ac` |
| `--accent` | `#29e0a3` |
| `--accent-rgb` | `41, 224, 163` |

### Carbon / Alignment Red
633nm HeNe alignment-laser red on near-black carbon. Most energetic option;
risks reading as a warning color if overused.

| token | value |
|---|---|
| `--bg` | `#0b0b0d` |
| `--bg-alt` | `#141416` |
| `--surface` | `#1f1f23` |
| `--text` | `#f2f1ee` |
| `--muted` | `#96938e` |
| `--accent` | `#ff5a4e` |
| `--accent-rgb` | `255, 90, 78` |

### Deep Violet / Diode Blue-Violet
405nm diode-violet on violet-black. Premium/quantum feel, but collides with
the existing `product` category violet (`#8B5CF6`) — would need consolidating.

| token | value |
|---|---|
| `--bg` | `#0c0a1a` |
| `--bg-alt` | `#14112a` |
| `--surface` | `#221c42` |
| `--text` | `#ece9f7` |
| `--muted` | `#9089b0` |
| `--accent` | `#7c5cff` |
| `--accent-rgb` | `124, 92, 255` |

### Slate / Signal White
No hue accent — near-white carries emphasis via weight/spacing instead of
color. Most restrained option, but the site currently leans on accent color
for links/CTAs/hover states, so this would touch more CSS than a token swap.

| token | value |
|---|---|
| `--bg` | `#0a0a0c` |
| `--bg-alt` | `#131316` |
| `--surface` | `#1d1d21` |
| `--text` | `#f5f5f3` |
| `--muted` | `#8f8f94` |
| `--accent` | `#f5f5f3` |
| `--accent-rgb` | `245, 245, 243` |

### Signal Blue / Beacon Orange
Colorblind-safe two-accent system: blue (`#3e8ede`) carries the primary role
everywhere cyan does today; orange (`#ff8a3d`) is reserved for one emphasis
point per screen (e.g. the CTA). Needs a new `--highlight` token rather than
a straight `--accent` swap, and per-component discipline about which accent
applies where.

| token | value |
|---|---|
| `--bg` | `#0a0e18` |
| `--bg-alt` | `#111a2a` |
| `--surface` | `#1a2740` |
| `--text` | `#e8edf7` |
| `--muted` | `#8993ac` |
| `--accent` | `#3e8ede` |
| `--accent-rgb` | `62, 142, 222` |
| `--highlight` (new) | `#ff8a3d` |

### Charcoal / Copper Mount
Not a light-source color — copper, the color of an optical bench's
kinematic mounts and SMA connectors. Lower-chroma than the others; needs
slightly more weight (not just color) to stay visible as a link/focus ring.

| token | value |
|---|---|
| `--bg` | `#0d0c0b` |
| `--bg-alt` | `#171513` |
| `--surface` | `#231f1b` |
| `--text` | `#f1ece5` |
| `--muted` | `#9c948a` |
| `--accent` | `#c97a4a` |
| `--accent-rgb` | `201, 122, 74` |

## Light-mode proposals (not applied)

A light theme is a bigger change than swapping tokens — the canvas hero
animations, `ThemedImage`'s scrim, and case-study SVGs all assume a dark
ground and would need their own pass, on top of the token swap below.

### Blueprint Paper / Cyan Ink
The current site's cyan, darkened until it holds as text/fill on paper
instead of glowing on navy. Closest in spirit to today's site.

| token | value |
|---|---|
| `--bg` | `#f2f5f8` |
| `--bg-alt` | `#e9eef3` |
| `--surface` | `#ffffff` |
| `--text` | `#0b1220` |
| `--muted` | `#5b6b82` |
| `--accent` | `#0091b8` |
| `--accent-rgb` | `0, 145, 184` |

### Cleanroom / Amber Signal
Warm off-white with the amber signal darkened to a burnt-honey ink.

| token | value |
|---|---|
| `--bg` | `#f6f3ec` |
| `--bg-alt` | `#efe9dc` |
| `--surface` | `#ffffff` |
| `--text` | `#1a1613` |
| `--muted` | `#7a7267` |
| `--accent` | `#a66609` |
| `--accent-rgb` | `166, 102, 9` |

### Optical Bench / Laser Green
Cool green-grey paper, DPSS-green darkened for text contrast.

| token | value |
|---|---|
| `--bg` | `#f0f5f1` |
| `--bg-alt` | `#e5ede7` |
| `--surface` | `#ffffff` |
| `--text` | `#10201a` |
| `--muted` | `#5e7268` |
| `--accent` | `#0a8a5c` |
| `--accent-rgb` | `10, 138, 92` |

### Drafting Paper / Alignment Red
Warm ivory stock, HeNe red darkened to a brick-red ink. Most alert-feeling
of the light set — strong for a single CTA, risky if repeated per screen.

| token | value |
|---|---|
| `--bg` | `#f7f1ef` |
| `--bg-alt` | `#efe4e1` |
| `--surface` | `#ffffff` |
| `--text` | `#211613` |
| `--muted` | `#7c6d68` |
| `--accent` | `#b8362b` |
| `--accent-rgb` | `184, 54, 43` |

### Vellum / Diode Violet
Violet-grey paper, 405nm violet darkened to deep plum. Same category-accent
collision risk as its dark counterpart above.

| token | value |
|---|---|
| `--bg` | `#f3f1f7` |
| `--bg-alt` | `#e9e5f0` |
| `--surface` | `#ffffff` |
| `--text` | `#17131f` |
| `--muted` | `#6e677e` |
| `--accent` | `#6a3fd9` |
| `--accent-rgb` | `106, 63, 217` |

## Selection criteria

What made these worth including or ruling out, roughly in priority order:

1. **Contrast.** Text-on-background and text-on-accent should clear WCAG AA
   (~4.5:1 body text, ~3:1 large text/UI). The light-set accents are all
   darkened versions of their dark-set counterparts for exactly this reason.
2. **One accent, spent deliberately.** A single consistent accent (links,
   CTAs, borders, focus states) reads as a system; competing hues read as
   noise. The Signal Blue / Beacon Orange proposal is the one deliberate
   exception, and it's flagged as needing more design-system discipline.
3. **Restraint (60/30/10-ish).** Neutral ground dominates, text is second,
   accent is a minority color used for emphasis only.
4. **Colorblind safety.** Relevant if two hues must stay distinguishable
   (e.g. status states) — blue/orange is the most robust pairing.
5. **Fit to the subject.** Preferred real lab/instrument colors (HeNe red,
   DPSS green, benchtop amber, diode violet, copper hardware) over arbitrary
   hues, so the palette says something true about photonics rather than
   reading as generic dark-mode SaaS.
6. **Judged in situ.** Every option above was checked as a live nav/hero/card
   mockup at the site's real type scale, not as an isolated swatch.
