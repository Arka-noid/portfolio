// Client-facing evidence, not a career timeline. Each entry leads with the
// problem somebody had and closes with what came out of it — buyers scan for
// problem → what you did → result (docs/positioning.md §5).
//
// `market` groups the work the way a buyer thinks about it and drives the
// filter on /work. `category` is retained as a badge: it says which layer of
// the stack the work sat in, tying each project back to the Expertise Stack.
// `outcome` is null only where an NDA prevents stating one.
export const workPage = {
  eyebrow: "Evidence",
  heading: "Case studies",
  allFilter: "All",
  filterAriaLabel: "Filter work by market",
  problemLabel: "The problem",
  expandLabel: "What I did ↓",
  collapseLabel: "Show less ↑",
  restrictedLabel: "Restricted — outcome under NDA",
  roleLabel: "My role",
  outcomeLabel: "Outcome",
  caseStudyAction: "View case study →",
};

export const projects = [
  {
    id: "mid-ir-sensor",
    title: "Mid-Infrared Gas Sensor",
    category: "device",
    market: "Industrial & environmental sensing",
    period: "2015 – 2019",
    institution: "University of Glasgow",
    tagline: "Engineering light at the edge of visibility",
    role: `Device design, process development and characterisation — end to end`,
    problem:
      `Detecting CO₂ at 4.26 µm needs an emitter bright enough to be useful, built on a III-V
        material system nobody had a working etch process for. The material and the process had
        to be solved together, or neither was worth solving.`,
    description:
      `Developed quantum-well LEDs in the 3–5 µm spectral range for next-generation gas
        sensing. Covered the entire device lifecycle: material stack design with multivariable
        optimization, a novel dry-etch process for non-standard III-V semiconductors, cleanroom
        fabrication, and electro-optical characterization.`,
    highlights: [
      `9× electroluminescence improvement over bulk structures`,
      "Novel ICP-RIE etch recipe for AlGaInSb materials",
      `22 strain-balanced quantum wells at target 4.26 µm wavelength`,
    ],
    outcome:
      `A 9× brighter emitter than the bulk baseline, and a repeatable etch process for AlGaInSb
        that everything downstream depended on. Ran alongside a commercial sensing partner
        rather than in isolation.`,
    tags: [
      "III-V Semiconductors",
      "Quantum Wells",
      "Cleanroom Fabrication",
      "ICP-RIE",
      "FTIR",
      "Nextnano",
    ],
  },
  {
    id: "biomedical-imaging",
    title: "Chip-Scale Biomedical Imaging",
    category: "system",
    market: "Life sciences & imaging",
    period: "2020 – 2022",
    institution: "Scuola Superiore Sant’Anna",
    tagline: "Replacing mechanical scanners with photonic circuits",
    role: `PIC design, control electronics and calibration software`,
    problem:
      `Optical coherence tomography steers its beam mechanically, which caps speed and adds a
        part that wears out. Moving the scanner onto a chip means solving beam steering,
        calibration and control at once — a photonics problem, a PCB problem and a software
        problem in one.`,
    description:
      `Designed silicon photonic phased arrays to replace mechanical scanning in optical
        coherence tomography systems for biomedical imaging. Built the full chain: PIC layout,
        custom PCB for multi-channel current sources, MATLAB control interface, and a beam
        optimization algorithm.`,
    highlights: [
      "1.7° beamwidth over 20° steering range",
      "16-element optical phased array on SOI",
      "Custom PCB + GUI for automated calibration",
    ],
    outcome:
      `1.7° beamwidth across a 20° steering range from a 16-element array, with calibration
        automated rather than done by hand — the difference between a demo and something another
        group can actually use.`,
    tags: [
      "Optical Phased Arrays",
      "SOI Photonics",
      "IPKISS",
      "KiCAD",
      "MATLAB",
      "OCT",
    ],
  },
  {
    id: "space-radar",
    title: "Photonics for Space Radar",
    category: "system",
    market: "Space & defense",
    period: "2020 – 2023",
    institution: "Scuola Superiore Sant’Anna",
    tagline: "Bringing photonic processing to orbit",
    role: `Photonic architecture, link-budget modelling, component characterisation`,
    problem:
      `A satellite-borne synthetic aperture radar needed beamforming a conventional RF payload
        could not deliver inside its mass and bandwidth budget — and no single photonic platform
        offered every function the receiver required.`,
    description:
      `Designed a hybrid photonic beamforming network combining silicon nitride and indium
        phosphide platforms for a satellite-borne synthetic aperture radar. Responsibilities
        spanned photonic architecture design, system-level link-budget simulation, and component
        characterization of the packaged assembly.`,
    highlights: [
      "Hybrid SiN + InP multi-chip assembly",
      `Full analog link budget simulation with VPI Design Suite`,
      "Module packaged for space compliance testing",
    ],
    outcome:
      `A hybrid SiN + InP assembly that put each function on the platform suited to it, with
        the analog link budget validated end to end before the module went into space compliance
        testing.`,
    tags: [
      "Microwave Photonics",
      "Beamforming",
      "SiN",
      "InP",
      "SAR",
      "Space",
    ],
    caseStudySlug: "space-radar",
  },
  {
    id: "satellite-network",
    title: "Satellite Radar Network",
    category: "system",
    market: "Space & defense",
    period: "2021 – 2023",
    institution: "Scuola Superiore Sant’Anna",
    tagline: `Coherent photonic links across a satellite constellation`,
    role: `PIC design for signal generation, distribution and down-conversion`,
    problem:
      `A multi-static radar constellation only works if every satellite shares a coherent
        reference — an optical, RF and free-space problem simultaneously. The chosen SOI
        platform had no on-chip optical gain to carry it.`,
    description:
      `Designed photonic integrated circuits for a multi-static satellite radar system using
        photonic signal generation, distribution, and down-conversion. The chip, fabricated on
        an advanced SOI platform, featured micro-transfer printed optical amplifiers to boost
        on-chip carriers.`,
    highlights: [
      "Multi-project PIC on advanced SOI platform",
      `Micro-transfer printed semiconductor optical amplifiers`,
      "System spanning optical, RF, and free-space links",
    ],
    outcome:
      `Micro-transfer-printed amplifiers added the gain the platform lacked, on a multi-project
        PIC carrying generation, distribution and down-conversion on one die.`,
    tags: [
      "Silicon Photonics",
      "Micro-Transfer Printing",
      "RF Photonics",
      "Coherent Detection",
    ],
  },
  {
    id: "defense-ew",
    title: "Defense & Electronic Warfare",
    category: "system",
    market: "Space & defense",
    period: "2021 – 2023",
    institution: "Scuola Superiore Sant’Anna",
    tagline: "Photonic systems for sovereign applications",
    role: `PIC design for multiband RF transceivers and wideband signal processing`,
    problem:
      `Multiband RF transceiver and wideband signal-processing functions for defense-funded
        European programmes, delivered alongside major industry partners.`,
    description:
      `Designed photonic integrated circuits for multiband RF transceivers and wideband signal
        processing in defense-funded European programs with major industry partners.`,
    highlights: [],
    // Under NDA — stating an outcome is not possible, and the absence is
    // more credible than a vague one.
    outcome: null,
    tags: ["RF Photonics", "Electronic Warfare", "Classified"],
    classified: true,
  },
  {
    id: "lidar",
    title: "Integrated LIDAR System",
    category: "system",
    market: "Autonomous sensing",
    period: "2023 – 2024",
    institution: "imec",
    tagline: "Shaping the beam for autonomous sensing",
    role: `Photonic design of beam-steering and coherent receive building blocks`,
    problem:
      `Automotive-grade LiDAR has to be solid state, which means steering the beam on a chip.
        Phase shifters, antennas and couplers all have to work together before there is a system
        to test at all.`,
    description:
      `Contributed to the photonic design of a frequency-modulated continuous-wave LIDAR system
        for autonomous sensing. Designed optical phased arrays, phase shifters, directional
        couplers, and optical antennas — core building blocks for solid-state beam steering.`,
    highlights: [
      "Multiple device architectures designed and validated",
      "Full design pipeline from simulation to tape-out",
    ],
    outcome:
      `Multiple device architectures designed, taped out and validated, feeding the first
        functional end-to-end FMCW LiDAR demonstrator.`,
    tags: ["FMCW LIDAR", "OPA", "Phase Shifters", "Coherent Detection"],
    caseStudySlug: "lidar",
  },
  {
    id: "platform-dev",
    title: "Photonic Platform Development",
    category: "platform",
    market: "AI infrastructure & datacenter optics",
    period: "2023 – 2026",
    institution: "imec",
    tagline: "Building the foundation others design on",
    role: "Work-package lead for the base photonic platform",
    problem:
      `A photonic platform is worth nothing until other people can design on it. That means a
        PDK, validated devices, and shared workflows across a dozen organisations that had none
        in common.`,
    description:
      `Led development of a silicon nitride photonic platform for telecommunications, visible,
        and quantum applications. Coordinated cross-functional teams spanning design,
        fabrication, EDA tooling, and characterization. Established common workflows and coached
        partners on design tools and version control.`,
    highlights: [
      "Work-package lead for base photonic platform",
      "PDK with active and passive devices",
      `AWG-based wavelength multiplexing for DWDM PIC architectures`,
      `Fiber-to-chip coupling interfaces — edge and grating couplers, SOI and SiN`,
      `Coordinated 10+ partner organizations across an EU project`,
    ],
    outcome:
      `A SiN PDK with active and passive devices, DoE-validated, plus the design and
        version-control workflows that let 10+ partner organizations build on it.`,
    tags: ["SiN", "PDK", "Process Integration", "AWG / DWDM", "Fiber Coupling", "EDA"],
  },
  {
    id: "programmable-photonics",
    title: "Programmable Photonic Processor",
    category: "product",
    market: "AI infrastructure & datacenter optics",
    period: "2024 – 2026",
    institution: "imec",
    tagline: "From research prototype to product",
    role: "System integration and product definition",
    problem:
      `A research prototype had to become something a customer could buy: photonics, driver
        electronics and control software integrated into one system, with a defensible answer to
        who it is for.`,
    description:
      `Joined the system integration effort for a programmable photonic processor combining
        photonic circuits, driver electronics, and control software — a reconfigurable mesh, the
        class of circuit the industry is now pursuing for optical switching and analog optical
        compute. Worked the electronic-to-optical seam directly: multi-channel DAC and ADC drive
        between the control software and the mesh, and the timing, triggering and acquisition
        that keep the read-out synchronised to the optical event. Participated in product
        positioning, user-story definition, and early-stage commercialization discussions.`,
    highlights: [
      `Multi-channel DAC/ADC drive between control software and chip`,
      `Timing, triggering and acquisition synchronised to the optical event`,
      "Contributed to product roadmap and market assessment",
    ],
    outcome:
      `Integration across photonics, electronics and software carried end to end, through a TRL
        3→6 transition, with the documentation needed for industrial handover.`,
    tags: [
      "Programmable Photonics",
      "System Integration",
      "Embedded Control",
      "Product Development",
    ],
  },
];

export const categoryMeta = {
  device: { label: "Device", color: "#00C8FF" },
  system: { label: "System", color: "#00A89D" },
  platform: { label: "Platform", color: "#4A6CF7" },
  product: { label: "Product", color: "#8B5CF6" },
};

// Filter/grouping order on /work — lead market first, then the rest by weight
// of evidence, matching the order of `marketFocus` in data/markets.js (see
// docs/positioning.md §5). A new project must not introduce a market missing
// from this list, or the filter silently drops it.
export const markets = [
  "AI infrastructure & datacenter optics",
  "Space & defense",
  "Autonomous sensing",
  "Life sciences & imaging",
  "Industrial & environmental sensing",
];
