# Positioning brief — Merilight

The source of truth for every word on the site. Any copy change should be
traceable to a line in this document. If a piece of copy cannot be justified
from here, either the copy is wrong or this brief needs updating first.

Last reviewed: 2026-08

---

## 1. What this business is

**Merilight** is an independent consultancy in photonic systems engineering.
**Manuel Reza** is its principal, named author of all first-person copy on the
site, and the person a client actually hires.

The site sells consulting engagements. It is not a job-search surface. See §7.

---

## 2. Positioning statement

> Photonic demos become products in the gaps between device physics, RF, and
> manufacturing. I have worked in all of them — so I can tell you where your
> risk actually is, before you commit budget to it.

**The promise, in one sentence:** de-risk photonic hardware in the stretch
between a working lab result and a shipping prototype.

**Public shorthand:** the lab-to-product de-risker.

---

## 3. The competitive gap

Almost every competitor in this niche is a single slice of the stack:

| Competitor type | What they sell | What they cannot do |
|---|---|---|
| Simulation shops (Ansys/Lumerical/Zemax resellers) | Running the tools you lack | Judge whether the architecture is right |
| PIC design houses | Layout and tape-out | Take responsibility past the chip boundary |
| RF/microwave consultants | Circuits and antennas | Follow the signal into the optical domain |
| EU grant consultants | Proposals and admin | Technical credibility with the engineering team |
| Strategy firms | Market and roadmap | Read a link budget |

The defensible position is the one nobody else occupies: **a single person who
has shipped at every layer, and can therefore say which layer the problem is
actually in.**

---

## 4. The frame: breadth as diagnostic capability

This is the most important rule in the brief.

Manuel's range is real and unusually wide. But **a list of adjacent skills
dilutes; a demonstrated ability to locate a failure anywhere in the stack
sells.** A buyer reading "I also do RF, and fab, and product strategy" hears
"generalist". A buyer reading "most photonics projects fail in the gaps between
device physics, RF and manufacturing — here is where I have worked in each"
hears "this person can find my problem".

**Therefore:**

- Never present breadth as a capability list. Present it as diagnostic reach.
- Every adjacent claim carries exactly one concrete proof point. No proof, no
  claim.
- Depth in photonics is the anchor; adjacency is what makes the depth useful.

The on-site expression of this rule is the **Expertise Stack** — seven layers,
each with a depth marker and one piece of evidence, headed *"Which layer is your
problem in?"*

---

## 5. Who we are selling to

### Ideal client profile

An organisation with photonic or photonic-adjacent hardware that has to become a
product, and an engineering team strong in one layer but thin across the
boundaries. Typically 10–500 people, Europe-weighted, funded by venture capital,
corporate R&D budget, or an EU/space/defense programme.

### The three buying situations

**A. Startup at a TRL gate.**
Has a demo that works on a bench. Needs to reach a prototype an investor,
customer or acquirer will accept. Fears the unknown unknowns between here and
there.
*Buys:* Design Review, then TRL Maturation.
*Language that lands:* the gap between a demo and a product, industrial
handover, what breaks at TRL 5.

**B. Corporate or institute needing an independent architecture review.**
Has an internal team with a strong opinion and needs an outside read before
committing a budget or a tape-out. Values independence and the absence of a
product to sell them.
*Buys:* Design Review, System Architecture & Link Budget.
*Language that lands:* independent, validated against measurement not
simulation, second opinion before tape-out.

**C. Investor or acquirer needing technical due diligence.**
Is being told a photonics story and cannot evaluate it. Needs someone who can
read the claims and the roadmap in a week.
*Buys:* Technical Due Diligence & Product Strategy.
*Language that lands:* is this real, is it manufacturable, how far from product.

---

## 6. Proof-point bank

Every number and claim below traces to `src/data/experience.js`,
`src/data/projects.js`, `src/data/competencies.js` or
`src/data/publications.js`. **Nothing may be used in copy that is not in these
files.** If new evidence is needed, add it to the data first.

### Countable

| Figure | Source |
|---|---|
| 10+ years across the photonic stack | `experience.js`, 2015→present |
| 32 peer-reviewed publications, 570+ citations | `publications.js` |
| 4 material platforms designed on: SOI, SiN, InP, III-V antimonides | `projects.js`, `experience.js` |
| TRL 3→6 transition led end to end | imec, `experience.js` |
| 10+ partner organisations coordinated | platform-dev, `projects.js` |
| Venues: ECIO, ECOC, OFC, JLT, Laser & Photonics Reviews, SPIE, EUSAR, MWP, ICSO | `publications.js` |

### By layer (for the Expertise Stack)

| Layer | Proof |
|---|---|
| Materials & epitaxy | 22 strain-balanced quantum wells at 4.26 µm; 9× electroluminescence improvement over bulk (Glasgow) |
| Process & fabrication | Novel ICP-RIE dry-etch recipe for AlGaInSb, a non-standard III-V system (Glasgow) |
| Device design | 16-element optical phased array on SOI, 1.7° beamwidth over 20° steering; MZMs, Bragg filters, couplers, antennas |
| PIC platform & PDK | First imec SiN platform PDK supported through DoE and validation benchmarks; DFT/DFM-aware flows |
| Packaging & module | Hybrid SiN+InP multi-chip assembly packaged for space compliance testing; micro-transfer-printed SOAs; edge and grating couplers |
| RF & system | Full analog link budget for a spaceborne SAR receiver in VPI; hybrid photonic beamforming network (SPACEBEAM) |
| Product & program | Programmable photonic mesh chip TRL 3→6 for a deep-tech startup; system documentation for industrial technology transfer |

### By adjacent field (§8)

| Field | Proof |
|---|---|
| RF / microwave & radar | SCORE-SAR receiver architecture for Earth-observation satellites; multi-static satellite radar network; photonic ADC circuits at CNIT; multiband RF transceivers for defense programmes |
| Semiconductor process, fab & DFM | Full device lifecycle at Glasgow — material stack design, etch process development, cleanroom fabrication, electro-optical characterisation; DFT/DFM PDK work at imec |
| Product strategy & technical DD | Product positioning, user-story definition and early commercialisation work on the programmable photonic processor; industrial transfer documentation; Innovate UK commercialisation-aligned projects |

### Domains touched (breadth evidence, not service claims)

Space radar and SAR · electronic warfare · automotive FMCW LiDAR · datacenter
optics and CPO · biomedical imaging (OCT) · mid-IR gas sensing · quantum and
visible photonic platforms.

---

## 7. Intent rules

The business is **full freelance / consultancy**. The site addresses buyers of
services and nobody else.

### Banned phrasings

Never use, anywhere on the site:

- "available for … senior roles", "open to opportunities", "seeking a position",
  or any variant that reads as job-seeking
- A current or former employer's name positioned as an endorsement, or
  structured data asserting current employment (`worksFor`)
- Superlatives without a proof point: "world-leading", "cutting-edge",
  "best-in-class"
- Capability lists offered in place of outcomes
- Any figure not present in `src/data/*`

### Required

- First person singular. Manuel is speaking, not a company voice.
- Client outcome before personal capability, in every headline.
- Every service states who it is for, what the client receives, and roughly how
  long it takes.
- Confidentiality is a selling point, not a limitation — defense and
  pre-competitive work is described at the level the NDA allows and the
  redaction is visible.

---

## 8. Adjacent fields — what we actively sell

Three, decided deliberately. Each gets a proof point and its own evidence on the
site.

1. **RF / microwave & radar systems** — link budgets, beamforming, SAR payloads,
   EW. The rarest of the three: very few people are genuinely credible in both
   optics and RF.
2. **Semiconductor process, fab & DFM** — III-V processing, etch development,
   PDK, DFT/DFM, metrology.
3. **Product strategy & technical due diligence** — roadmaps, TRL gate reviews,
   build-vs-buy, investor and acquirer technical DD.

**Deliberately demoted: EU funding and consortium leadership.** The VISSION
work-package lead and the 10+ partner coordination remain on the site as
*background credibility* — they prove Manuel can run a complex multi-party
technical programme. They are not sold as a service, and no headline offer
mentions grant writing or proposals.

---

## 9. The offer ladder

Ordered by commitment. The first rung exists so a buyer can purchase Manuel once
without a procurement process.

| # | Offer | For | Deliverable | Shape |
|---|---|---|---|---|
| 01 | Photonic Design Review | A, B | Written findings and risk register | Fixed scope, 1–2 weeks |
| 02 | System Architecture & Link Budget | B | Architecture and validated budget model | 3–8 weeks |
| 03 | TRL Maturation & Industrial Handover | A | Verification plan, handover documentation | Ongoing engagement |
| 04 | Platform, PDK & Design-Flow Enablement | B | PDK, DoE plan, team workflows | Ongoing engagement |
| 05 | Technical Due Diligence & Product Strategy | C | Assessment memo | Fixed scope, 1–2 weeks |

The hero CTA sells rung 01. Everything else is reached from there.

---

## 10. Voice

Sophisticated engineering, no marketing gloss. The site itself is part of the
argument — a consultant who claims technical craft has to demonstrate it in the
artefact the client sees first.

- Concrete over abstract. "22 strain-balanced quantum wells at 4.26 µm" beats
  "advanced device design".
- Admit the hard parts. "Most photonics projects fail in the gaps between those
  worlds" is more persuasive than a claim of universal competence.
- Short declaratives. No stacked adjectives.
- Never oversell the redacted work. The absence of detail is itself credible.
