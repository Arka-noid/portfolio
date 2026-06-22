export const projects = [
  {
    id: "mid-ir-sensor",
    title: "Mid-Infrared Gas Sensor",
    category: "device",
    period: "2015 – 2019",
    institution: "University of Glasgow",
    tagline: "Engineering light at the edge of visibility",
    description:
      "Developed quantum-well LEDs in the 3–5 µm spectral range for next-generation gas sensing. Covered the entire device lifecycle: material stack design with multivariable optimization, a novel dry-etch process for non-standard III-V semiconductors, cleanroom fabrication, and electro-optical characterization.",
    highlights: [
      "9× electroluminescence improvement over bulk structures",
      "Novel ICP-RIE etch recipe for AlGaInSb materials",
      "22 strain-balanced quantum wells at target 4.26 µm wavelength",
    ],
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
    period: "2020 – 2022",
    institution: "Scuola Superiore Sant’Anna",
    tagline: "Replacing mechanical scanners with photonic circuits",
    description:
      "Designed silicon photonic phased arrays to replace mechanical scanning in optical coherence tomography systems for biomedical imaging. Built the full chain: PIC layout, custom PCB for multi-channel current sources, MATLAB control interface, and a beam optimization algorithm.",
    highlights: [
      "1.7° beamwidth over 20° steering range",
      "16-element optical phased array on SOI",
      "Custom PCB + GUI for automated calibration",
    ],
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
    period: "2020 – 2023",
    institution: "Scuola Superiore Sant’Anna",
    tagline: "Bringing photonic processing to orbit",
    description:
      "Designed a hybrid photonic beamforming network combining silicon nitride and indium phosphide platforms for a satellite-borne synthetic aperture radar. Responsibilities spanned photonic architecture design, system-level link-budget simulation, and component characterization of the packaged assembly.",
    highlights: [
      "Hybrid SiN + InP multi-chip assembly",
      "Full analog link budget simulation with VPI Design Suite",
      "Module packaged for space compliance testing",
    ],
    tags: [
      "Microwave Photonics",
      "Beamforming",
      "SiN",
      "InP",
      "SAR",
      "Space",
    ],
    caseStudy: "#/project/space-radar",
  },
  {
    id: "satellite-network",
    title: "Satellite Radar Network",
    category: "system",
    period: "2021 – 2023",
    institution: "Scuola Superiore Sant’Anna",
    tagline: "Coherent photonic links across a satellite constellation",
    description:
      "Designed photonic integrated circuits for a multi-static satellite radar system using photonic signal generation, distribution, and down-conversion. The chip, fabricated on an advanced SOI platform, featured micro-transfer printed optical amplifiers to boost on-chip carriers.",
    highlights: [
      "Multi-project PIC on advanced SOI platform",
      "Micro-transfer printed semiconductor optical amplifiers",
      "System spanning optical, RF, and free-space links",
    ],
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
    period: "2021 – 2023",
    institution: "Scuola Superiore Sant’Anna",
    tagline: "Photonic systems for sovereign applications",
    description:
      "Designed photonic integrated circuits for multiband RF transceivers and wideband signal processing in defense-funded European programs with major industry partners.",
    highlights: [],
    tags: ["RF Photonics", "Electronic Warfare", "Classified"],
    classified: true,
  },
  {
    id: "lidar",
    title: "Integrated LIDAR System",
    category: "system",
    period: "2023 – 2024",
    institution: "imec",
    tagline: "Shaping the beam for autonomous sensing",
    description:
      "Contributed to the photonic design of a frequency-modulated continuous-wave LIDAR system for autonomous sensing. Designed optical phased arrays, phase shifters, directional couplers, and optical antennas — core building blocks for solid-state beam steering.",
    highlights: [
      "Multiple device architectures designed and validated",
      "Full design pipeline from simulation to tape-out",
    ],
    tags: ["FMCW LIDAR", "OPA", "Phase Shifters", "Coherent Detection"],
  },
  {
    id: "platform-dev",
    title: "Photonic Platform Development",
    category: "platform",
    period: "2023 – Present",
    institution: "imec",
    tagline: "Building the foundation others design on",
    description:
      "Led development of a silicon nitride photonic platform for telecommunications, visible, and quantum applications. Coordinated cross-functional teams spanning design, fabrication, EDA tooling, and characterization. Established common workflows and coached partners on design tools and version control.",
    highlights: [
      "Work-package lead for base photonic platform",
      "PDK with active and passive devices",
      "Coordinated 10+ partner organizations across an EU project",
    ],
    tags: ["SiN", "PDK", "Process Integration", "EDA"],
  },
  {
    id: "programmable-photonics",
    title: "Programmable Photonic Processor",
    category: "product",
    period: "2024 – Present",
    institution: "imec",
    tagline: "From research prototype to product",
    description:
      "Joined the system integration effort for a programmable photonic processor combining photonic circuits, driver electronics, and control software. Participated in product positioning, user-story definition, and early-stage commercialization discussions.",
    highlights: [
      "Full-stack integration: photonics + electronics + software",
      "Contributed to product roadmap and market assessment",
    ],
    tags: [
      "Programmable Photonics",
      "System Integration",
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
