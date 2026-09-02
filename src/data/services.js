import { publications, CITATIONS } from "./publications";

export const servicesPage = {
  eyebrow: "Services",
  heading: "From photonic concept to working hardware.",
  promise: `Decide the architecture. Integrate the hardware. Trust the measurements.`,
  forLabel: "For",
  symptomsAriaLabel: "Client symptoms this engagement addresses",
  continuationEyebrow: "And beyond",
};

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
// it removes, the concrete deliverables inside it, and roughly how long it takes.
// Rendered by components/Services.jsx (full) and ServicesTeaser.jsx (home).
export const services = [
  {
    id: "system-architecture",
    title: "Optical System & PIC Architecture",
    forWho: `Teams moving an optical concept onto a PIC, or approaching tapeout
      without an independent system review.`,
    problem: `Decide what goes on chip, choose the right platform, and close the
      link budget before expensive decisions become fixed.`,
    items: [
      {
        label: "Pre-Tapeout & Layout Reviews",
        text: `Find packaging, thermal, and testability risks before committing
          to the foundry.`,
      },
      {
        label: "Link Budget & Performance Analysis",
        text: `Analyze performance across high-speed fiber, free-space, and
          sensing links.`,
      },
      {
        label: "Microwave Photonics",
        text: `Model RF-over-fiber links and define high-frequency
          optoelectronic schemes.`,
      },
    ],
    shape: "1–2 weeks review · 3–6 weeks full study",
    proof: `I converted fiber-based microwave photonic receivers into integrated
      architectures — including a hybrid SiN–InP SCORE-SAR receiver, where no
      single platform could supply every function the system needed. Designed and
      validated across several material platforms — SOI, SiN, InP and III-V`,
  },
  {
    id: "prototype-integration",
    title: "Optoelectronic Prototype Integration",
    forWho: `Teams turning a working chip or optical subsystem into driven,
      coupled, and controlled hardware.`,
    problem: `Turn an isolated chip or optical subsystem into integrated hardware
      your team can operate and reproduce.`,
    items: [
      {
        label: "Drive & Read-Out Electronics",
        text: `Build high-speed, low-noise electronics around the optical
          hardware.`,
      },
      {
        label: "Packaging & Thermal Interfaces",
        text: `Define coupling, alignment, thermal, and enclosure constraints.`,
      },
      {
        label: "Embedded Control",
        text: `Implement multi-channel drive, acquisition, timing, and thermal
          control.`,
      },
    ],
    shape: "4–10 weeks · on-site or remote",
    proof: `I built the electronics-to-optics chain for optical phased arrays - a
      custom multi-channel current-source PCB with a control interface -
      and, on a programmable photonic mesh at imec, the multi-channel DAC/ADC drive
      between control software and chip plus the timing and triggering that kept
      read-out synchronised to the optical event.`,
  },
  {
    id: "characterization",
    title: "Automated Test & Calibration",
    forWho: `Teams with bare hardware, but limited experience in optical
      measurements and without a repeatable way to trust the measurements.`,
    problem: `Install an optical characterization bench and replace uncertain
      measurements with a bench that runs repeatably and reliably.`,
    items: [
      {
        label: "Automated Characterization",
        text: `Build repeatable script-controlled measurement rigs.`,
      },
      {
        label: "Closed-Loop Calibration",
        text: `Automate alignment, wavelength tuning, and hardware-in-the-loop
          validation.`,
      },
    ],
    shape: "On-site · 2–8 weeks",
    proof: `Beam optimization in
      software rather than by hand, which is the difference between a demo and
      something another group can actually use — and ran electro-optical
      characterization end to end.`,
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
export const serviceScopeStages = [
  "Architecture",
  "Prototype",
  "Validation",
  "Industrial handover",
];

export const serviceFootnote = `These engagements are just part of the journey,
  but we can operate further. A review can continue into prototype bring-up, a
  bench can expose architecture changes, and a first driven prototype can run
  through validation, documentation, and industrial handover. We can support the
  journey at every stage.`;
