// The photonic stack, bottom (atoms) to top (product). This is the site's
// answer to "how do I show breadth without diluting the photonics anchor" —
// see docs/positioning.md §4. Breadth is presented as diagnostic reach: the
// claim is not "I also do RF and fab", it is "I have worked at every layer, so
// I can tell you which one your problem is in".
//
// `depth` is 1–5 and is deliberately not uniform. The honest lower marks are
// what make the high ones credible; do not inflate them.
// Rendered by components/ExpertiseStack.jsx.
export const stackLayers = [
  {
    id: "product",
    name: "Product integration & handover",
    domain: "Product integration · electronics · software · documentation",
    depth: 4,
    depthLabel: "Led a TRL 3→6 transition",
    whatIDo:
      "Take a demonstrator through the gates that turn it into a product: verification planning, integration across photonics, electronics and software, and documentation an industrial team can build from without me.",
    proof:
      "Led the system-level transition of a programmable photonic mesh chip from TRL 3 to TRL 6 for a deep-tech startup at imec, and wrote the technical guidelines for the industrial handover.",
    evidence: { label: "Programmable photonic processor", to: "/work" },
  },
  {
    id: "packaging",
    name: "Packaging & optoelectronic integration",
    domain: "Fibre-to-chip · multi-chip assembly · µ-transfer printing",
    depth: 3,
    depthLabel: "Specified and integrated",
    whatIDo:
      "The interfaces where a working chip stops working: coupling losses, thermal and mechanical budgets, and what a multi-chip assembly does that neither chip did alone.",
    proof:
      "Hybrid SiN + InP multi-chip assembly packaged for space compliance testing; edge and grating coupler design in SOI and SiN; micro-transfer-printed SOAs on an advanced SOI platform.",
    evidence: { label: "Satellite radar network", to: "/work" },
  },
  {
    id: "rf-system",
    name: "Optical & RF system architecture",
    domain: "Link budgets · beamforming · coherent detection · SAR",
    depth: 5,
    depthLabel: "Architected and modelled end to end",
    whatIDo:
      "Follow the signal across the optical/RF boundary, where most photonic systems actually fail. Architecture, link budgets built to be argued with, and trade-offs made explicit before they become schedule.",
    proof:
      "Full analog link budget for a spaceborne SAR receiver in VPI Design Suite, behind a hybrid photonic beamforming network for the EU SPACEBEAM programme — validated against measured hardware.",
    evidence: { label: "Photonics for space radar", to: "/work/space-radar" },
  },
  // {
  //   id: "platform",
  //   name: "PIC platform & PDK",
  //   domain: "SOI · SiN · InP · DFT/DFM · EDA flows",
  //   depth: 5,
  //   depthLabel: "Built and validated a platform PDK",
  //   whatIDo:
  //     "Make a design team reproducible: PDK content, design-for-test and design-for-manufacture rules, DoE-driven validation, and the version control underneath it all.",
  //   proof:
  //     "Supported the first imec SiN platform PDK through DoE and validation benchmarks, and led development of the SiN platform for telecom, visible and quantum applications across 10+ partner organizations.",
  //   evidence: { label: "Photonic platform development", to: "/work" },
  // },
  {
    id: "device",
    name: "PIC design & tapeout",
    domain: "EDA flows · modulators · filters · couplers · antennas",
    depth: 5,
    depthLabel: "Designed, taped out, measured",
    whatIDo:
      "The building blocks themselves — simulated, laid out, fabricated and then measured, so the model and the hardware are reconciled rather than assumed to agree.",
    proof:
      "16-element optical phased array on SOI reaching 1.7° beamwidth over a 20° steering range; MZMs, Bragg grating filters, phase shifters, directional couplers and optical antennas across multiple tape-outs; the first imec SiN platform PDK supported through DoE and validation benchmarks.",
    evidence: { label: "Integrated LiDAR system", to: "/work/lidar" },
  },
  {
    id: "process",
    name: "Fabrication & characterization",
    domain: "Cleanroom · dry etch · metrology · characterisation",
    depth: 5,
    depthLabel: "Developed the process myself",
    whatIDo:
      "What the fab can actually make, and why your yield is not what the simulation promised. Process development, etch, and the metrology that tells you which of the two is lying.",
    proof:
      "Developed a novel ICP-RIE dry-etch recipe for AlGaInSb, a non-standard III-V system, and ran the full device lifecycle from material stack through cleanroom fabrication to electro-optical characterisation.",
    evidence: { label: "Mid-infrared gas sensor", to: "/work" },
  },
  {
    id: "materials",
    name: "Photonic materials & device physics",
    domain: "III-V · quantum wells · band structure",
    depth: 4,
    depthLabel: "Designed and characterised",
    whatIDo:
      "Where the physics sets the ceiling. Material stack design and multivariable optimisation, so the rest of the stack is not fighting a limit that was fixed before layout began.",
    proof:
      "22 strain-balanced quantum wells targeting 4.26 µm, delivering a 9× electroluminescence improvement over bulk structures.",
    evidence: { label: "Mid-infrared gas sensor", to: "/work" },
  },
];

export const stackIntro =
  "Most photonics projects do not fail inside a layer. They fail in the gaps between them — a device that meets spec but cannot be coupled, a link budget that assumed a yield the fab was never going to hit, a demo that works because one person knows which knob to turn. I have worked at every layer below, which is what lets me find the gap rather than guess at it.";

export const stackTeaserIntro =
  "The value is not six separate capabilities. It is being able to follow a failure from one layer into the next.";
