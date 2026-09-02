export const spaceRadarCaseStudy = {
  relatedKeywords: ["Radar", "Aperture", "Satellite", "Spaceborne", "Beamform"],
  hero: {
    eyebrow: "Case Study · Aerospace",
    title: {
      firstLine: "Photonic Beamforming",
      secondLineBeforeAccent: "for ",
      accent: "Space Radar",
    },
    description:
      `Designing light-based signal processing for next-generation Earth observation from orbit
        — replacing bulky electronics with a chip-scale photonic receiver.`,
    meta: [
      { label: "Program", value: "EU Space Program" },
      { label: "Duration", value: "3 Years" },
      { label: "Role", value: "Photonic Architect" },
    ],
  },
  challenge: {
    eyebrow: "01 — The Challenge",
    heading: "Why Photonics in Space?",
    paragraphs: [
      `Synthetic aperture radar satellites are workhorses of Earth observation — mapping
        terrain, monitoring climate, and tracking changes across the planet with all-weather,
        day-and-night imaging.`,
      `But as missions demand higher resolution and wider swath coverage, conventional
        electronic receivers hit a fundamental wall: bulky RF distribution networks,
        power-hungry analog-to-digital conversion, and bandwidth limitations that constrain the
        number of simultaneous beams.`,
      `The question driving this project: could integrated photonics — processing radar signals
        with light instead of electrons — unlock a new class of lightweight, wideband spaceborne
        receivers?`,
    ],
    cards: [
      {
        title: "Size & Weight",
        description:
          `Traditional RF beamformers scale poorly — every added beam means more hardware, more
            mass, more power.`,
      },
      {
        title: "Bandwidth",
        description:
          `Electronic systems struggle above a few GHz of instantaneous bandwidth — photonic links
            handle tens of GHz natively.`,
      },
      {
        title: "Multi-Beam",
        description:
          `Scan-on-receive architectures need simultaneous beam steering — photonic true-time
            delays enable this without squint.`,
      },
    ],
    figureCaption:
      `Interferometric SAR — each colour fringe is one wavelength of range change. Receiver
        phase fidelity is what makes this measurable.`,
  },
  approach: {
    eyebrow: "02 — The Approach",
    heading: "Hybrid Photonic Architecture",
    lead:
      `The core innovation was a multi-chip photonic module combining two complementary
        integrated photonics platforms — each bringing strengths the other lacked.`,
    platforms: [
      {
        tag: "Silicon Nitride",
        color: "#00C8FF",
        description:
          `Ultra-low optical losses for passive signal routing, splitting, and delay lines. The
            backbone of the beamforming network.`,
        points: [
          "Propagation loss < 0.1 dB/cm",
          "Wideband optical transparency",
          "Phase shifters for beam control",
        ],
      },
      {
        tag: "Indium Phosphide",
        color: "#8B5CF6",
        description:
          `Active photonic functions: modulation, amplification, and detection. The engine that
            drives the signal chain.`,
        points: [
          "High-speed Mach-Zehnder modulators",
          "Semiconductor optical amplifiers",
          "Balanced photodetectors",
        ],
      },
    ],
  },
  system: {
    eyebrow: "03 — System Design",
    heading: "End-to-End Signal Chain",
    lead:
      `Radar returns captured by the antenna array are converted to optical signals, processed
        through the photonic beamforming network, and converted back to the electrical domain
        for digital processing.`,
    domain: { x: 218, width: 340, label: "PHOTONIC DOMAIN" },
    blocks: [
      { x: 0, label: "ANTENNA\nARRAY", sub: "X-band", color: "#e8edf5", w: 90 },
      { x: 110, label: "RF\nFRONT-END", sub: "LNA + Filter", color: "#e8edf5", w: 90 },
      { x: 220, label: "E/O\nCONVERSION", sub: "MZM", color: "#00C8FF", w: 90 },
      { x: 330, label: "PHOTONIC\nBEAMFORMER", sub: "SiN + InP", color: "#00C8FF", w: 110 },
      { x: 460, label: "O/E\nDETECTION", sub: "Balanced PD", color: "#00C8FF", w: 90 },
      { x: 570, label: "DIGITAL\nBACK-END", sub: "ADC + DSP", color: "#e8edf5", w: 90 },
    ],
    contributionsHeading: "My Contributions",
    contributions: [
      {
        number: "01",
        title: "Architecture Design",
        description:
          `Defined the photonic receiver architecture from first principles, selecting components
            and topology for a scan-on-receive SAR.`,
      },
      {
        number: "02",
        title: "Link Budget Simulation",
        description:
          `Built full analog link-budget models combining optical, RF, and noise analysis to
            validate system performance before fabrication.`,
      },
      {
        number: "03",
        title: "Component Characterization",
        description:
          `Measured and validated individual photonic components — modulators, filters, amplifiers
            — against simulation targets.`,
      },
      {
        number: "04",
        title: "Module Integration",
        description:
          `Guided the multi-chip assembly from die-level bonding through to a packaged module ready
            for space-compliance testing.`,
      },
    ],
  },
  scaling: {
    eyebrow: "04 — Scaling Up",
    heading: "From One Satellite to a Constellation",
    lead:
      `Building on the single-satellite beamformer, the research expanded to a multi-static
        radar system — multiple satellites working coherently as a distributed synthetic
        aperture, with photonics enabling the precision signal distribution that makes it
        possible.`,
    phases: [
      {
        phase: "I",
        title: "Single-Satellite Photonic Receiver",
        period: "2020 – 2022",
        description:
          `A hybrid SiN-InP beamforming module for scan-on-receive SAR. The foundation — proving
            photonics could handle the signal chain in a space-qualified package.`,
        points: [
          "Hybrid multi-chip assembly validated",
          "Full analog link budget simulation framework",
          "Module packaged for space compliance testing",
        ],
      },
      {
        phase: "II",
        title: "Coherent Multi-Satellite Network",
        period: "2021 – 2023",
        description:
          `Photonic integrated circuits for signal generation, distribution, and down-conversion
            across a satellite constellation — enabling coherent radar imaging from multiple orbital
            positions.`,
        points: [
          `Advanced SOI platform with micro-transfer printed amplifiers`,
          "System spanning optical, RF, and free-space links",
          "Multi-band operation for enhanced imaging capability",
        ],
      },
    ],
  },
  results: {
    eyebrow: "05 — Results",
    heading: "Key Outcomes",
    metrics: [
      { value: "3", unit: "", label: "Photonic platforms integrated" },
      { value: "X", unit: "-band", label: "Operating frequency" },
      { value: "2", unit: "", label: "Chip architectures designed" },
      { value: "8", unit: "+", label: "Peer-reviewed publications" },
    ],
    outcomes: [
      `Hybrid module fabricated and packaged for space compliance`,
      "Simulation framework validated against measured data",
      `Results published in top-tier photonics and radar venues`,
      `Collaboration with major European aerospace industry partners`,
    ],
  },
  publications: {
    eyebrow: "06 — Publications",
    heading: "Related Research",
  },
  diagrams: {
    chipAriaLabel:
      `Diagram of a hybrid photonic module: RF inputs enter a silicon nitride chip through
        phase shifters into a combiner, then cross a bond interface into an indium phosphide
        chip with modulator, amplifier, and photodetector stages.`,
    chip: {
      siliconNitride: "SILICON NITRIDE",
      indiumPhosphide: "INDIUM PHOSPHIDE",
      output: "OUT",
      bond: "BOND",
      activeStages: ["MOD", "SOA", "PD"],
    },
  },
};
