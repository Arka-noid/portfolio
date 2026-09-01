# Positioning brief — Merilight

The source of truth for every word on the site. Any copy change should be
traceable to a line in this document. If a piece of copy cannot be justified
from here, either the copy is wrong or this brief needs updating first.

Last reviewed: 2026-09

---

## 1. What this business is

**Merilight** is an independent engineering boutique in optical and photonic
systems. **Manuel Reza** is its principal, the named author of all first-person
copy, and the person a client actually hires. The site sells consulting
engagements and addresses buyers of services and nobody else.

**The record, and why it is on the site.** Merilight has no client roster yet,
so its only evidence is Manuel's employment history — a CV's worth of material
on a site that sells as a firm. The resolution is to **state the relationship
and present the record as provenance**: the firm's capability *is* one person's
track record, and every institution named is the context that work was done in
— never a job held, never a client, never an endorsement. Rules in §7.

---

## 2. Positioning statement

> Photonics rarely fails on paper. It fails in integration — where optical
> signals meet custom boards, packaging, thermal limits and control code. We
> are the single cross-domain engineer who works on both sides of every one of
> those boundaries.

**The promise, in one sentence:** resolve the multidisciplinary bottleneck that
stalls optical hardware, without the client having to hire four specialists.

**Public shorthand:** cross-domain optoelectronic system integrator.

**The friction being sold against.** Most companies staff by domain — a
photonic designer, a PCB engineer, a mechanical engineer, a software developer.
When the bottleneck lands *between* them (getting a custom PIC driven, closing a
link budget, standing up a characterization bench), each waits on another and
the programme can lose months to a problem nobody owns.

---

## 3. The competitive gap

| Competitor type | What they sell | What they cannot do |
|---|---|---|
| Simulation shops (Ansys/Lumerical/Zemax) | Running the tools you lack | Judge whether the architecture is right |
| PIC design houses | Layout and tape-out | Take responsibility past the chip boundary |
| RF/microwave consultants | Circuits and antennas | Follow the signal into the optical domain |
| Electronics/prototype shops | Boards and enclosures | Know what the optics needs from them |
| EU grant consultants | Proposals and admin | Technical credibility with the engineering team |
| Strategy firms | Market and roadmap | Read a link budget |

The defensible position nobody else occupies: **one person who has built at
every layer, and can therefore work on both sides of the boundary the problem
is sitting on.**

---

## 4. The frame: breadth as execution, not a skills list

The most important rule in the brief.

- Never present breadth as a capability list. Present it as **reach across a
  boundary** — the ability to locate a failure anywhere in the stack and then
  fix it, not a menu of adjacent services.
- **Every adjacent claim carries exactly one concrete proof point.** No proof,
  no claim. If new evidence is needed, it goes into `src/data/*` first.
- Depth in photonics is the anchor; adjacency is what makes the depth useful.
- Admit the honest limits. The depth marks in `data/stack.js` are deliberately
  not uniform — the 3 for packaging is what makes the 5s credible.

The on-site expression is the **Expertise Stack** (`components/ExpertiseStack.jsx`,
driven by `data/stack.js`): six layers, each with one proof line and a link to
the evidence. The compact teaser asks *"Which layer is your problem in?"*; the
full Services-page treatment is headed *"Evidence behind the engagements."*

---

## 5. Who we are selling to

**Ideal client profile.** An organisation with photonic or photonic-adjacent
hardware that has to become a product, and an engineering team strong in one
layer but thin across the boundaries. Typically 10–500 people, Europe-weighted,
funded by venture capital, corporate R&D budget, or an EU/space/defense
programme.

| Situation | Buys | Language that lands |
|---|---|---|
| **A.** Something works in fiber, free space or discrete parts, and has to become an integrated system; or a design is about to be committed at a gate | 01 | What moves onto a chip and what cannot; hybrid vs monolithic; which platform for which function; what integration costs you; independent, no product to sell you |
| **B.** A chip or subsystem works in isolation and has to become one piece of hardware — driven, coupled, controlled | 02 | Something to drive the chip; a demo that leaves the optical table; the seam nobody owns |
| **C.** First hardware is back and the bench cannot be trusted | 03 | Measurement that agrees with the model; a setup your team can run; calibration you can defend |

**Markets we name.** Whose problem it is, not what is sold — the same three
offers addressed to a buyer who recognises their own field. In order:
**AI infrastructure & datacenter optics** (optical interconnect, co-packaged
optics, optical I/O, programmable and analog optical compute — named first
because that is where the demand is); **space & defense** (SAR and radar
payloads, EW, constellations); **autonomous sensing** (FMCW LiDAR, coherent
detection, beam steering); **industrial, life-science & imaging** (gas sensing,
OCT, metrology). A market is a doorway, never an offer.

## 5.1 Symptoms, in the buyer's words

§5 describes the buying situations from the outside. These say the same things
from the inside, as the sentence the buyer would say out loud — a visitor who
recognises their own sentence has self-identified. Rendered as quoted symptoms
inside the `/services` strip for the offer that answers them.

**Voice.** These are quotations of the buyer, so the "we" in them is the
*client's* team. It is the one place on the site where "we" is not the firm, and
§7 is unaffected because the line is set as their speech. None of them names the
cure; the offer does.

**Traceability.** Every symptom restates a `problem`, `forWho`, `context` or
`proof` already in `src/data/*`, or a "language that lands" line from §5. No
symptom introduces a figure, platform or capability that is not already on the
site (§6). A symptom is never promoted into a fourth card (§9), and each one is
grouped under one of the three live service ids.

**The live list is `src/data/symptoms.js`** — the rendered buyer quotes grouped
inside the three service strips, plus one banked in a comment, so a future swap
has a spare rather than an invention. It is not duplicated here; the rules
above are what this section exists to fix.

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
| Photonic materials & device physics | 22 strain-balanced quantum wells at 4.26 µm; 9× electroluminescence improvement over bulk (Glasgow) |
| Fabrication & characterization | Novel ICP-RIE dry-etch recipe for AlGaInSb, a non-standard III-V system (Glasgow) |
| PIC design & tapeout | 16-element optical phased array on SOI, 1.7° beamwidth over 20° steering; MZMs, Bragg filters, couplers, antennas; first imec SiN platform PDK through DoE and validation benchmarks |
| Packaging & optoelectronic integration | Hybrid SiN+InP multi-chip assembly packaged for space compliance testing; micro-transfer-printed SOAs; edge and grating couplers |
| Optical & RF system architecture | Full analog link budget for a spaceborne SAR receiver in VPI; hybrid photonic beamforming network (SPACEBEAM) |
| Product integration & handover | Programmable photonic mesh chip TRL 3→6 for a deep-tech startup; system documentation for industrial technology transfer |

### By adjacent field (§8)

| Field | Proof |
|---|---|
| RF / microwave & radar | SCORE-SAR receiver architecture for Earth-observation satellites; multi-static satellite radar network; photonic ADC circuits at CNIT; multiband RF transceivers for defense programmes |
| Semiconductor process, fab & DFM | Full device lifecycle at Glasgow — material stack design, etch process development, cleanroom fabrication, electro-optical characterisation; DFT/DFM PDK work at imec |
| Product strategy & technical DD | Product positioning, user-story definition and early commercialisation work on the programmable photonic processor; industrial transfer documentation; Innovate UK commercialisation-aligned projects |

### Electronics, embedded and software (offer 02 and 03)

| Claim | Proof |
|---|---|
| Custom driver / read-out electronics | Multi-channel current-source PCB for a 16-element optical phased array, with MATLAB control interface (`projects.js` biomedical-imaging) |
| Embedded and programmable-logic control | Multi-channel DAC/ADC drive between control software and chip, plus timing, triggering and acquisition synchronised to the optical event, on the programmable photonic mesh at imec (`projects.js` programmable-photonics) |
| Test automation and closed-loop calibration | Beam-optimization algorithm and automated calibration replacing hand tuning; electro-optical characterization end to end, cleanroom to FTIR (`projects.js` biomedical-imaging, mid-ir-sensor) |
| Packaging, thermal and mechanical | *Specified and integrated only* — hybrid SiN+InP assembly packaged for space compliance; coupling, thermal and mechanical budgets (`stack.js` packaging, depth 3) |

### By market (§5)

| Market | Proof |
|---|---|
| AI infrastructure & datacenter optics | Fiber-to-chip coupling (edge and grating couplers) in SOI and SiN; micro-transfer-printed SOAs; hybrid SiN+InP multi-chip assembly; AWG-based wavelength multiplexing for DWDM PIC architectures; a programmable photonic mesh carried TRL 3→6; the first imec SiN platform PDK |
| Space & defense | SCORE-SAR hybrid SiN–InP receiver for EU SPACEBEAM; full analog link budget in VPI; multi-static satellite radar network; multiband RF transceivers for defense programmes |
| Autonomous sensing | 16-element optical phased array on SOI, 1.7° over 20°; photonic design of imec's first end-to-end FMCW LiDAR demonstrator |
| Industrial, life-science & imaging | Mid-IR gas sensor devices with Gas Sensing Solutions Ltd.; chip-scale biomedical imaging (OCT) at Sant'Anna |

The AI-infrastructure row is a **component and platform** record, not a delivery
record — see the guard in §7.

**Domains touched** (breadth evidence, not service claims): electronic warfare ·
quantum and visible photonic platforms · photonic ADC and extreme-bandwidth
acquisition.

---

## 7. Intent rules

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
- **The words FPGA and Verilog.** The capability is real at prototype level and
  is sold as *"embedded and programmable-logic control"*; naming the technology
  invites a comparison with dedicated RTL houses that this record is not meant
  to win
- **Mechanical or optomechanical design, or CAD, sold as a capability.** Thermal
  and mechanical budgets are *specified and integrated* (`stack.js` depth 3);
  fixtures are a deliverable inside a rig, never an offer
- **"Turnkey", "full-stack", or any phrasing implying a team.** §7's structure
  rule below is the reason
- A market presented as an offer. AI infrastructure in particular is a market
  (§5) and enters through Offer 01; it never becomes a fourth card, a fourth
  adjacent field, or a stack layer
- A logo row whose label implies the organisations shown are Merilight's clients
  or endorse the firm. The row may mix employers, research partners and
  programmes, but the label has to be true of every mark in it
- A claim of delivered datacenter, co-packaged-optics or transceiver **product**
  work. The record there is component and platform level — couplers, µTP SOAs,
  hybrid assembly, AWG/DWDM multiplexing, a mesh processor, a SiN PDK — and copy
  stays at that level

### Required

- **Voice: "we" for the firm, "I" for the track record.** Merilight offers,
  builds and delivers — so Home, Services, About, Contact and the nav say "we".
  The personal record is Manuel's and stays first person singular: /profile,
  /work ("my role", "what I did"), the case studies, the Expertise Stack and the
  publications. Never let "we" claim a credential only Manuel holds, and never
  let "I" describe what the business sells. **The two voices are separated by
  page, not by paragraph**: /about carries no first-person copy at all, because
  a buyer sizing up a firm should not meet a person's autobiography halfway down
  it — the person is one click away on /profile. The one exception is a symptom
  quoted in the buyer's own voice (§5.1).
- **State the structure, do not hide it.** `firm.structure` says plainly that
  Merilight is Manuel, working alone. A buyer who discovers a "we" is one person
  feels misled; one who is told does not — and "you brief the person who does
  the work" is an advantage over a firm that sells you a partner and staffs a
  junior.
- **The record is provenance, not a resume.** No section labelled "Career",
  "Experience" or "Skills"; no CV download; no competency grid (the Expertise
  Stack carries capability, and §4 bans capability lists); no entry led by a job
  title — the organisation and period lead, the title sits under them. The
  timeline lives on `/profile`, not /about: a full history in the middle of the
  firm's introduction reads as a resume however it is labelled. /about keeps
  only the provenance sentence and the link. /profile stays out of the primary
  nav; the site sells engagements first.
- Client outcome before personal capability, in every headline.
- Every service states who it is for, what the client receives, and roughly how
  long it takes.
- Confidentiality is a selling point, not a limitation — defense and
  pre-competitive work is described at the level the NDA allows and the
  redaction is visible.

---

## 8. Adjacent fields — what we actively sell

Three, each with its own proof point and evidence on the site:
**RF / microwave & radar systems** (link budgets, beamforming, SAR payloads, EW
— the rarest of the three; very few people are credible in both optics and RF);
**semiconductor process, fab & DFM** (III-V processing, etch development, PDK,
DFT/DFM, metrology); **product strategy & technical due diligence** (roadmaps,
TRL gate reviews, build-vs-buy, investor and acquirer DD).

**Deliberately demoted: EU funding and consortium leadership.** The VISSION
work-package lead and the 10+ partner coordination stay on the site as
background credibility — they prove Manuel can run a complex multi-party
technical programme. They are not sold as a service, and no headline offer
mentions grant writing or proposals.

---

## 9. The offer ladder

Three offers, not five. With no client references yet, a long menu dilutes — a
firm gets bought for one thing first. They are **capability domains**, ordered
the way a programme runs: settle the architecture, build the hardware that
proves it, then make the bench tell you the truth about what you built.

| # | Offer | For | Deliverable | Shape |
|---|---|---|---|---|
| 01 | **Optical System & PIC Architecture** *(flagship)* | A | Architecture, platform selection, component inventory, read-out definition, a link-budget model they keep, ranked integration risks. Short form: pre-tape-out layout review or technical DD memo | 1–2 weeks review · 3–6 weeks full study |
| 02 | Optoelectronic Prototyping & Integration | B | A driven, coupled, controlled prototype: driver and read-out electronics, embedded and programmable-logic control, packaging/thermal budgets, control software, rebuild documentation | 4–10 weeks, on-site or remote |
| 03 | Automated Characterization & Bench Enablement | C | A characterization rig that runs unattended, with closed-loop calibration and documentation | On-site · 2–8 weeks |

### The `/services` page promise line

Firm surface, so the voice is "we" (§7):

- **Eyebrow:** Consulting
- **Heading:** From photonic concept to working hardware.
- **Promise:** "Photonics rarely fails on paper. It fails where optics meets
  boards, packaging, control and test. Three engagements, one job: get your
  hardware across that gap."

It restates §2 and names the number three, so the grid below reads as the whole
menu rather than a sample. It claims no figure, so §6 does not apply to it.

**Why architecture leads.** It is the highest-leverage and least reversible
decision in a photonics programme, so a buyer will pay for judgment on it — and
very few people can answer the multi-platform question (SiN *and* InP?
monolithic or hybrid?), because answering it requires knowing what every
platform can actually do. It is also the best-evidenced thing Manuel has done:
three discrete-to-integrated conversions, two turning on exactly that question.

**Deliberately not cards.** Design review and technical DD are the short form of
01, not a fourth offer — splitting them out is what produced a five-item menu.
TRL maturation, industrial handover and platform/PDK enablement live in the
footnote as where an engagement leads. Markets (§5) and symptoms (§5.1) are
doorways into these three engagements and nothing else.

**Sold as deliverables inside an engagement, never as standalone products:** PoC
GDS and layout (competing with design houses on capacity is a fight a solo
consultant loses); circuit simulation (commodity — every Lumerical shop sells
it); 3D CAD and fixtures for a rig; a driver board or a controller, which are
means to a working prototype rather than a board-design service.

**Software.** Python, C, MATLAB, LabVIEW, Go, plus Git/Jira discipline and EDA
tooling — genuine scientific and instrumentation software, not product software
engineering. Its value is that it turns deliverables from documents into things
a client keeps and reruns: the link-budget model in 01, the control layer in 02,
the automation and calibration in 03. Frame it that way; never sell "software
engineering", which invites comparison with people who do only that.

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
