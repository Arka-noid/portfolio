// The offer ladder — see docs/positioning.md §9.
//
// Three offers, not five. With no client references yet, a long menu dilutes;
// a firm is bought for one thing first. They are ordered by where they sit in
// a client's programme: decide the architecture, then trust the measurements,
// then get an independent verdict at the gate.
//
// Each entry is a buyable engagement, not a skill: who it is for, the problem
// it removes, what the client receives, and roughly how long it takes.
// `adjacent` names the adjacent field an offer reaches into, so breadth is
// attached to a sellable outcome rather than listed on its own.
// Rendered by components/Services.jsx (full) and ServicesTeaser.jsx (home).
export const services = [
  {
    id: "integration-architecture",
    title: "Integration Architecture Study",
    forWho:
      "Teams with something working in fiber, free space or discrete components, facing the question of whether it should become a chip.",
    problem:
      "Whether to integrate is the most expensive decision in a photonics programme and the hardest one to reverse. It has to be answered before the budget is committed: what can move onto a chip, what has to stay off it, which platform — or which combination of platforms — it takes, and what integrating costs you in performance.",
    deliverable:
      "A system architecture and a written integration assessment: the signal chain, platform selection with the reasoning behind it, a component inventory checked against real PDKs, the read-out and control definition, a link-budget model you keep and can rerun, and a ranked list of where the integration will hurt.",
    shape: "3–6 weeks",
    proof:
      "Converted fiber-based microwave photonic receivers into integrated architectures at Scuola Superiore Sant'Anna — including the hybrid SiN–InP SCORE-SAR receiver for EU SPACEBEAM, where no single platform could supply every function the system needed.",
    adjacent: ["RF, microwave & radar"],
  },
  {
    id: "characterization",
    title: "Measurement & Characterization Enablement",
    forWho:
      "Teams whose first hardware is back from the foundry and whose bench cannot yet tell them the truth about it.",
    problem:
      "When measurement and model disagree, the answer is usually not the chip. It is the bench — alignment, thermal drift, a sweep that is not doing what you think it is doing. Until the setup is trustworthy, every decision downstream of it is guesswork.",
    deliverable:
      "A working characterization setup: optical path, control electronics, automation and a calibration procedure — plus the documentation that lets your team run it without me.",
    shape: "On-site · 2–8 weeks",
    proof:
      "Built the full measurement chain for a 16-element optical phased array — a custom multi-channel current-source PCB, MATLAB control and an automated calibration routine — and ran electro-optical characterization end to end, from cleanroom to FTIR, at Glasgow.",
    adjacent: ["Semiconductor process, fab & DFM"],
  },
  {
    id: "review-diligence",
    title: "Design Review & Technical Due Diligence",
    forWho:
      "Engineering teams before a tape-out, and investors or acquirers before a term sheet.",
    problem:
      "An independent read from someone with no product to sell you: whether the design holds up, whether it can actually be manufactured, and how far it really is from being a product.",
    deliverable:
      "Written findings and a ranked risk register — what will break, where, and what it costs to fix now rather than after tape-out. For diligence, an assessment memo on what holds up, what does not, and what would have to be true for the roadmap to work.",
    shape: "Fixed scope · 1–2 weeks",
    proof:
      "Design and validation across four material platforms — SOI, SiN, InP and III-V antimonides — backed by 32 peer-reviewed publications across the areas being assessed.",
    adjacent: ["Product strategy & due diligence"],
  },
];

// Counted proof shown above the offer grid. Every figure traces to a data file
// — see docs/positioning.md §6. `value` is split so the suffix can be accented.
export const serviceProof = [
  { value: "10", suffix: "+", label: "Years across the stack" },
  { value: "4", label: "Material platforms designed on" },
  { value: "3", label: "Systems taken from discrete to integrated" },
  { value: "10", suffix: "+", label: "Partner organizations coordinated" },
];

// Where the work leads, and the background that supports it — kept as prose
// rather than as further cards, so the three offers above stay the offer.
export const serviceFootnote =
  "A study often continues into the build. I led the TRL 3→6 transition of a programmable photonic mesh chip for a deep-tech startup at imec, and took a silicon nitride platform PDK through DoE validation with 10+ partner organizations — so an engagement can run from the architecture decision through to industrial handover. Work frequently sits inside EU-funded consortia; the programme mechanics are familiar, but we are hired for the engineering, not the paperwork. The same is true across markets: an optical interconnect or optical-I/O programme is assembled from fiber-to-chip coupling, micro-transfer-printed lasers, hybrid multi-chip assembly and wavelength multiplexing — the blocks we have designed, integrated and measured for other systems.";
