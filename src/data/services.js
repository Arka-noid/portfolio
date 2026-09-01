import { publications, CITATIONS } from "./publications";

// The offer ladder — see docs/positioning.md §9.
//
// Three offers, not five. With no client references yet, a long menu dilutes;
// a firm is bought for one thing first. They are ordered the way a programme
// runs: settle the architecture, build the hardware that proves it, then make
// the bench tell you the truth about what you built.
//
// The three are capability domains, not buying situations — the thesis is
// cross-domain execution, so each card is a side of the seam where optics meets
// boards, packaging, control and test. Design review and technical due
// diligence are the short form of 01, not a fourth card.
//
// Each entry is a buyable engagement, not a skill: who it is for, the problem
// it removes, what the client receives, and roughly how long it takes.
// `adjacent` names the adjacent field an offer reaches into, so breadth is
// attached to a sellable outcome rather than listed on its own.
// Rendered by components/Services.jsx (full) and ServicesTeaser.jsx (home).
export const services = [
  {
    id: "system-architecture",
    title: "Optical System & PIC Architecture",
    forWho:
      "Teams with something working in fiber, free space or discrete components, facing the question of what the integrated system should actually be — and teams weeks from a tape-out that nobody outside the group has read.",
    problem:
      "Architecture is the most expensive decision in a photonics programme and the hardest one to reverse. It has to be answered before the budget is committed: what moves onto a chip, what stays off it, which platform — or which combination of platforms — it takes, how the link budget closes, and what integrating costs you in performance.",
    deliverable:
      "A system architecture and a written assessment: the signal chain, platform selection with the reasoning behind it, a component inventory checked against real PDKs, the read-out and control definition, a link-budget model you keep and can rerun, and a ranked list of where the integration will hurt. As a short engagement, the same read applied to an existing design — a pre-tape-out layout review, or a technical due-diligence memo for an investor or acquirer.",
    shape: "1–2 weeks review · 3–6 weeks full study",
    proof:
      "I converted fiber-based microwave photonic receivers into integrated architectures at Scuola Superiore Sant'Anna — including the hybrid SiN–InP SCORE-SAR receiver for EU SPACEBEAM, where no single platform could supply every function the system needed, with the full analog link budget modelled in VPI and validated against measured hardware. Designed and validated across four material platforms — SOI, SiN, InP and III-V antimonides — behind 32 peer-reviewed publications.",
    adjacent: ["RF, microwave & radar", "Product strategy"],
  },
  {
    id: "prototype-integration",
    title: "Optoelectronic Prototyping & Integration",
    forWho:
      "Teams whose chip or optical subsystem works in isolation and now has to become one piece of hardware — driven, coupled, controlled and repeatable.",
    problem:
      "This is where optical programmes stall, and it is rarely for want of a specialist. It is the seam between them: a PIC with no board to drive it, coupling and thermal budgets that belong to nobody, control code living as a script on one laptop. Each domain is waiting on another, and the schedule goes with it.",
    deliverable:
      "A working integrated prototype: custom driver, current-source and read-out electronics built for your optical components; embedded and programmable-logic control for multi-channel drive, timing and acquisition; coupling and packaging interfaces specified with the thermal and mechanical budgets that go with them; control software; and documentation your team can rebuild it from.",
    shape: "4–10 weeks · on-site or remote",
    proof:
      "I built the electronics-to-optics chain for a 16-element optical phased array — a custom multi-channel current-source PCB with a MATLAB control interface — and, on a programmable photonic mesh at imec, the multi-channel DAC/ADC drive between control software and chip plus the timing and triggering that kept read-out synchronised to the optical event. Hybrid SiN + InP multi-chip assembly packaged for space compliance testing.",
    adjacent: ["Semiconductor process, fab & DFM"],
  },
  {
    id: "characterization",
    title: "Automated Characterization & Bench Enablement",
    forWho:
      "Teams whose first hardware is back from the foundry and whose bench cannot yet tell them the truth about it.",
    problem:
      "When measurement and model disagree, the fault is usually not the chip — it is the bench: alignment, thermal drift, a sweep that is not doing what you think it is doing, a calibration one person does by hand and nobody else can repeat. Until the setup can be trusted, every decision downstream of it is guesswork.",
    deliverable:
      "A characterization rig that runs unattended: optical path, control electronics, instrument automation and a closed-loop calibration procedure that holds without someone tuning it — plus the documentation that lets your team run it without us.",
    shape: "On-site · 2–8 weeks",
    proof:
      "I automated the calibration of a 16-element phased array — beam optimization in software rather than by hand, which is the difference between a demo and something another group can actually use — and ran electro-optical characterization end to end, from cleanroom to FTIR, at Glasgow.",
    adjacent: ["Semiconductor process, fab & DFM"],
  },
];

// Counted proof shown above the offer grid. Every figure traces to a data file
// — see docs/positioning.md §6. `value` is split so the suffix can be accented.
//
// The publication tile is derived from publications.js rather than written out,
// so the count cannot drift out of sync with the list. It lives here rather
// than in ServiceProofStrip.jsx: the strip renders whatever array it is handed,
// and a hardcoded tile made a four-item array render five.
export const serviceProof = [
  { value: "10", suffix: "+", label: "Years across the stack" },
  // { value: "4", label: "Material platforms designed on" },
  // { value: "3", label: "Systems taken from discrete to integrated" },
  { value: "10", suffix: "+", label: "Partner organizations coordinated" },
  {
    value: publications.length,
    label: `Publications · ${CITATIONS} citations`,
  },
];

// Where the work leads, and the background that supports it — kept as prose
// rather than as further cards, so the three offers above stay the offer.
export const serviceFootnote =
  "A prototype often continues into a product. I led the TRL 3→6 transition of a programmable photonic mesh chip for a deep-tech startup at imec, and took a silicon nitride platform PDK through DoE validation with 10+ partner organizations — so an engagement can run from the first driven prototype through to industrial handover. Work frequently sits inside EU-funded consortia; the programme mechanics are familiar, but we are hired for the engineering, not the paperwork. The same is true across markets: an optical interconnect or optical-I/O programme is assembled from fiber-to-chip coupling, micro-transfer-printed lasers, hybrid multi-chip assembly and wavelength multiplexing — the blocks I have designed, integrated and measured for other systems.";
