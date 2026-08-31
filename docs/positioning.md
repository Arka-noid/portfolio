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

### The record, and why it is on the site

Merilight has no client roster yet. Its only evidence is Manuel's employment
record — which means the site has to carry a CV's worth of material while
selling as a firm, and that is exactly where a site of this kind goes wrong: the
buyer starts reading a consultancy and finds themselves reading a resume.

The resolution is not to hide the record. It is to **state the relationship and
then present the record as provenance**: Merilight is one engineer, so the firm's
capability *is* one person's track record, and every institution on the site is
the context that work was done in — never a job Manuel held, never a client
Merilight served, never an endorsement. The operating rules are in §7.

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

**A. A working system built from discrete parts, facing integration.**
Has something that works in fiber, free space or discrete components, and a
reason to want it smaller, cheaper or manufacturable. Does not know whether
integration is feasible, what it costs in performance, or which platform it
takes. This is the flagship buyer.
*Buys:* Integration Architecture Study.
*Language that lands:* what can move onto a chip and what cannot, hybrid vs
monolithic, which platform for which function, what integration costs you.

**B. First hardware back, and a bench that cannot be trusted.**
Has silicon and cannot make measurement agree with model. Does not know
whether the chip, the model or the setup is at fault.
*Buys:* Measurement & Characterization Enablement.
*Language that lands:* measurement that agrees with the model, a setup your
team can run, calibration you can defend.

**C. A gate: tape-out, funding milestone, or acquisition.**
Needs an outside read before committing. Values independence and the absence
of anything being sold to them.
*Buys:* Design Review & Technical Due Diligence.
*Language that lands:* independent, no product to sell you, is this real and
how far is it from a product.

### Markets we name

The three buying situations above are *what* is sold. Markets are *whose*
problem it is — the same three offers, addressed to a buyer who recognises
their own field in the headline. Four, in this order:

1. **AI infrastructure & datacenter optics** — optical interconnect, co-packaged
   optics, optical I/O, programmable and analog optical compute. Named first: it
   is where the demand is, and the building blocks are ones we have built.
2. **Space & defense** — SAR and radar payloads, EW, satellite constellations.
3. **Autonomous sensing** — FMCW LiDAR, coherent detection, beam steering.
4. **Industrial, life-science & imaging** — gas sensing, OCT, metrology.

The market is a doorway, not an offer. Every market leads to the same ladder in
§9 and, in almost every case, to Offer 01.

---

## 5.1 Symptoms, in the buyer's words

§5 describes the three buying situations from the outside — what is true of the
organisation. This section says the same three things from the inside, as the
sentence the buyer would actually say out loud. A visitor who recognises their
own sentence has self-identified, and the sentence carries them to the offer
that answers it.

**Voice.** These are quotations of the buyer, so the "we" in them is the
*client's* team, not Merilight. This is the one place on the site where "we" is
not the firm — the rule in §7 is unaffected, because the line is set as the
buyer's speech. Sentences are short and declarative, and none of them names the
cure; the offer does that.

**Traceability.** Every symptom restates a `problem`, `forWho`, `context` or
`proof` field that is already in `src/data/*`, or a "language that lands" line
from §5. No symptom introduces a figure, a platform or a capability that is not
already on the site (§6).

| # | Symptom (buyer voice) | Situation | Offer | Anchor | Traces to |
|---|---|---|---|---|---|
| 1 | "It works on the bench in fiber. We don't know what it costs to put it on a chip." | A | 01 | `integration-architecture` | §5A "language that lands"; `services.js` 01 `forWho` + `problem` ("what integrating costs you in performance") |
| 2 | "No single platform gives us every function the system needs." | A | 01 | `integration-architecture` | `projects.js` space-radar `problem`; `services.js` 01 `proof` |
| 3 | "We have a mass and power budget, and an architecture that won't fit inside it." | A | 01 | `integration-architecture` | `markets.js` space-defense `context` ("mass, power and space qualification decide the architecture"); `projects.js` space-radar `problem` ("inside its mass and bandwidth budget") |
| 4 | "The design depends on the packaging, and the packaging isn't decided yet." | A | 01 | `integration-architecture` | `stack.js` packaging layer `whatIDo` ("the interfaces where a working chip stops working") + `proof` |
| 5 | "First silicon is back and the measurements don't agree with the model." | B | 02 | `characterization` | §5B "language that lands"; `services.js` 02 `problem` |
| 6 | "Every device has to be calibrated by hand before it does anything, and it isn't repeatable." | B | 02 | `characterization` | `projects.js` biomedical-imaging `outcome` ("calibration automated rather than done by hand — the difference between a demo and something another group can actually use"); `services.js` 02 `proof` + `deliverable` |
| 7 | "Tape-out is weeks away and nobody outside the team has read the design." | C | 03 | `review-diligence` | §5C "language that lands"; `services.js` 03 `forWho` ("before a tape-out") |
| 8 | "We're asked how far this is from a product, and we have no defensible answer." | C | 03 | `review-diligence` | `projects.js` programmable-photonics `problem` ("a defensible answer to who it is for"); `services.js` 03 `problem` |

### Two things this table is not

**Symptom 4 is a trigger, not a claim of packaging mastery.** `stack.js` declares
depth 3 for packaging and §4 forbids inflating it. The symptom is admissible
because packaging being undecided is a reason the *architecture* cannot be
settled — which is Offer 01's question, answered at the layer where the depth
is genuinely 5. Word it as the thing that blocks the design, never as an offer
to do the packaging. If a future edit makes symptom 4 read as "we package
modules", it is wrong.

**Two corrections against the original draft, made for traceability.** Symptom 3
originally read "mass, power and volume"; volume appears in no data file, so it
is out. Symptom 6 was attributed to `projects.js` lidar, which does not mention
calibration — the hand-calibration evidence is in `biomedical-imaging`, and that
is the anchor.

### How they are used

Six to eight of these render as a compact router near the top of `/services`,
above the offer grid, each linking to `#offer-<id>` on the same page. Eight are
banked here so a future edit can drop one without inventing a replacement.

The router's lead line is **"If one of these is your sentence, start there."**
It is the instruction this section describes and nothing more: it makes no
claim, names no figure, and does not restate the thesis — which is the whole
point of putting the router above the offers rather than another paragraph.

---

## 6. Proof-point bank

Every number and claim below traces to `src/data/experience.js`,
`src/data/projects.js` or `src/data/publications.js`. **Nothing may be used in
copy that is not in these files.** If new evidence is needed, add it to the data
first.

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

### By market (§5)

| Market | Proof |
|---|---|
| AI infrastructure & datacenter optics | Fiber-to-chip coupling (edge and grating couplers) in SOI and SiN; micro-transfer-printed SOAs; hybrid SiN+InP multi-chip assembly; AWG-based wavelength multiplexing for DWDM PIC architectures; a programmable photonic mesh carried TRL 3→6; the first imec SiN platform PDK |
| Space & defense | SCORE-SAR hybrid SiN–InP receiver for EU SPACEBEAM; full analog link budget in VPI; multi-static satellite radar network; multiband RF transceivers for defense programmes |
| Autonomous sensing | 16-element optical phased array on SOI, 1.7° over 20°; photonic design of imec's first end-to-end FMCW LiDAR demonstrator |
| Industrial, life-science & imaging | Mid-IR gas sensor devices with Gas Sensing Solutions Ltd.; chip-scale biomedical imaging (OCT) at Sant'Anna |

The AI-infrastructure row is a **component and platform** record, not a delivery
record — see the second guard in §7. It is stated at that level and is not
qualified further on the site.

### Domains touched (breadth evidence, not service claims)

Electronic warfare · quantum and visible photonic platforms · photonic ADC and
extreme-bandwidth acquisition.

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
- A market presented as an offer. AI infrastructure in particular is a market
  (§5) and enters through Offer 01; it never becomes a fourth card, a fourth
  adjacent field, or a stack layer
- A logo row whose label implies the organisations shown are Merilight's clients
  or endorse the firm. The row may mix employers, research partners and
  programmes, but the label has to be true of every mark in it
- A claim of delivered datacenter, co-packaged-optics or transceiver **product**
  work. The record there is component and platform level — couplers, µTP SOAs,
  hybrid assembly, AWG/DWDM multiplexing, a mesh processor, a SiN PDK — and copy
  stays at that level, each item traceable to `src/data/*`

### Required

- **Voice: "we" for the firm, "I" for the track record.** Merilight offers,
  reviews and delivers — so Home, Services, Contact and the nav say "we". The
  personal record is Manuel's and stays first person singular: /about, /work
  ("my role", "what I did"), the case studies, the Expertise Stack and the
  publications. Never let "we" claim a credential only Manuel holds, and never
  let "I" describe what the business sells. The one exception is a symptom
  quoted in the buyer's own voice (§5.1), where the "we" is the client's team;
  it is set as their speech and never as Merilight's.
- **State the structure, do not hide it.** `about.structure` says plainly that
  Merilight is Manuel, working alone. A buyer who discovers a "we" is one
  person feels misled; one who is told does not — and "you brief the person
  who does the work" is an advantage over a firm that sells you a partner and
  staffs a junior.
- **The record is provenance, not a resume.** The employment history is on the
  site to explain where the firm's capability came from, so it is framed that
  way and never as a job history. Concretely: no section labelled "Career",
  "Experience" or "Skills"; no CV or resume download; no competency or skills
  grid (the Expertise Stack carries capability, and §4 bans capability lists);
  and no entry led by a job title — the organisation and the period lead, the
  title sits under them. Employers are named as the context work was done in,
  the way §6's proof sentences already do it. The record also sits on its own
  page (`/profile`) rather than inside /about: a full history in the middle of
  the firm's introduction reads as a resume however it is labelled. /about
  keeps the provenance sentence and a link, so the framing is read before the
  history is opened, and /profile stays out of the primary nav — the site sells
  engagements first.
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

Three offers, not five. With no client references yet, a long menu dilutes —
a firm gets bought for one thing first, and the others follow. Ordered by
where they sit in a client's programme rather than by commitment.

| # | Offer | For | Deliverable | Shape |
|---|---|---|---|---|
| 01 | **Integration Architecture Study** *(flagship)* | A | Architecture, platform selection, component inventory, read-out definition, a link-budget model they keep | 3–6 weeks |
| 02 | Measurement & Characterization Enablement | B | A working, documented characterization setup | On-site, 2–8 weeks |
| 03 | Design Review & Technical Due Diligence | C | Findings and a ranked risk register; assessment memo | Fixed scope, 1–2 weeks |

### The `/services` page promise line

The line under the page heading, and the source for the JSX in [5.4]. Firm
surface, so the voice is "we" (§7):

- **Eyebrow:** Consulting
- **Heading:** Which layer is your problem in?
- **Promise line:** "Three engagements, one job: find where a photonic programme
  will actually fail, before the budget is committed to finding out."

It restates §2's promise ("de-risk photonic hardware in the stretch between a
working lab result and a shipping prototype") in the diagnostic frame §4
requires, and it names the number three so the offer grid below reads as the
whole menu rather than a sample of one. It claims no figure, so §6 does not
apply to it. The heading deliberately echoes the Expertise Stack's own question
— the stack sits further down the same page and answers it layer by layer.

**Why integration architecture leads.** It is the highest-leverage and least
reversible decision in a photonics programme, so a buyer will pay for
judgment on it. Very few people can answer the multi-platform question —
whether a system needs SiN *and* InP, whether it can be monolithic or must be
hybrid — because answering it requires knowing what every platform can
actually do. It is also the single best-evidenced thing Manuel has done:
three separate discrete-to-integrated conversions, two of them turning on
exactly that platform question.

**Deliberately not cards.** TRL maturation and industrial handover, and
platform/PDK enablement, are real and well-evidenced — they appear in the
footnote as where an engagement leads, not as separate offers. Splitting them
out is what produced a five-item menu. **Markets are not cards either** — AI
infrastructure, space, autonomous sensing and imaging are how a buyer recognises
themselves (§5), and each one arrives at this same ladder. **Symptoms are not
cards either** — the eight lines in §5.1 are the same doorway worn the other way
round: a market is the field a buyer is in, a symptom is the sentence they would
say, and both route into these three engagements and nothing else. A symptom never becomes a
fourth offer, a service card, or a stack layer, and the router that renders them
links only to the three anchors already on this page.

**Sold as deliverables, never as products:** PoC GDS and layout (competing
with design houses on capacity is a fight a solo consultant loses), circuit
simulation (commodity — every Lumerical shop sells it), 3D CAD (fixtures for
a rig), microcontroller work (beginner level — fine inside a bench, not as a
named capability). **Never sold at all:** FPGA. There is no FPGA evidence in
the data.

**Software.** Python, C, MATLAB, LabVIEW, plus Git/Jira discipline and EDA
tooling — genuine scientific and instrumentation software, not product
software engineering. Its value is that it turns deliverables from documents
into things a client keeps and reruns: the link-budget model in 01, the
automation and calibration in 02. Frame it that way; never sell "software
engineering", which invites comparison with people who do only that.

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
