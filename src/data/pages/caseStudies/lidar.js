export const lidarCaseStudy = {
  relatedKeywords: ["LiDAR", "FMCW", "Phase Shifter", "Hybrid Coupler", "Frequency Sweep"],
  hero: {
    eyebrow: "Case Study · Autonomous Sensing",
    title: {
      firstLineBeforeAccent: "Solid-State ",
      accent: "FMCW LiDAR",
      secondLine: "on a Chip",
    },
    description:
      `Designing the photonic building blocks of a coherent LiDAR system — replacing spinning
        scanners with silicon circuits that steer light, and measure distance and velocity in a
        single shot.`,
    meta: [
      { label: "Program", value: "imec R&D" },
      { label: "Duration", value: "2023 – 2024" },
      { label: "Role", value: "Photonic Designer" },
    ],
  },
  challenge: {
    eyebrow: "01 — The Challenge",
    heading: "Why Solid-State Coherent LiDAR?",
    paragraphs: [
      `Autonomous vehicles, robots, and industrial systems need to perceive the world in 3D —
        reliably, at range, in any lighting. LiDAR is the sensor of choice, but most systems
        still rely on mechanically rotating optics and pulsed time-of-flight detection.`,
      `Mechanical scanners wear out, cost too much, and don't survive automotive qualification
        easily. Pulsed direct detection struggles with sunlight and interference from other
        LiDARs, and says nothing about how fast a target is moving.`,
      `The alternative: frequency-modulated continuous-wave (FMCW) operation with coherent
        detection, built on silicon photonics — no moving parts, velocity in every pixel, and
        wafer-scale manufacturability.`,
    ],
    cards: [
      {
        title: "No Moving Parts",
        description:
          `Mechanical scanning limits lifetime and cost — optical phased arrays steer the beam
            electronically, on-chip.`,
      },
      {
        title: "Interference Immunity",
        description:
          `Coherent detection only amplifies light that matches the local oscillator — sunlight and
            other LiDARs are rejected by physics.`,
      },
      {
        title: "Velocity Per Pixel",
        description:
          `FMCW measures the Doppler shift directly — every point in the cloud carries its own
            speed, not just position.`,
      },
    ],
  },
  approach: {
    eyebrow: "02 — The Approach",
    heading: "Ranging with Frequency, Steering with Phase",
    lead:
      `An FMCW LiDAR sweeps the laser frequency and mixes the returning echo with a copy of the
        transmitted light. The delay shows up as a beat frequency — distance becomes a spectral
        measurement, and Doppler shift reveals velocity.`,
    platforms: [
      {
        tag: "FMCW + Coherent Detection",
        color: "#00C8FF",
        description:
          `The receive chain mixes echo and local oscillator in an optical hybrid, extracting range
            and velocity from the beat spectrum.`,
        points: [
          "Distance and Doppler in a single measurement",
          "Heterodyne gain lifts weak echoes above noise",
          "Wavelength-independent 90° hybrid couplers",
        ],
      },
      {
        tag: "Solid-State Beam Steering",
        color: "#8B5CF6",
        description:
          `Optical phased arrays replace the spinning mirror: phase shifters set the wavefront
            tilt, optical antennas launch the beam.`,
        points: [
          "Optical phased arrays with dense emitter pitch",
          "Energy-efficient thermo-optic phase shifters",
          "Directional couplers and optical antennas",
        ],
      },
    ],
  },
  system: {
    eyebrow: "03 — System Design",
    heading: "End-to-End Signal Chain",
    lead:
      `A chirped laser feeds the transmitter; a tapped copy becomes the local oscillator. The
        optical phased array launches the beam, and the echo is mixed coherently on-chip before
        digital processing turns beat spectra into a 3D point cloud.`,
    domain: { x: -2, width: 564, label: "OPTICAL DOMAIN" },
    blocks: [
      { x: 0, label: "TUNABLE\nLASER", sub: "FMCW chirp", color: "#00C8FF", w: 100 },
      { x: 120, label: "SPLITTER", sub: "LO tap", color: "#00C8FF", w: 90 },
      { x: 230, label: "OPA\nTRANSMITTER", sub: "Beam steering", color: "#00C8FF", w: 100 },
      { x: 350, label: "TARGET", sub: "Reflection", color: "#e8edf5", w: 80 },
      { x: 450, label: "COHERENT\nRECEIVER", sub: "90° hybrid + BPD", color: "#00C8FF", w: 110 },
      { x: 580, label: "DIGITAL\nBACK-END", sub: "FFT: range + velocity", color: "#e8edf5", w: 90 },
    ],
    contributionsHeading: "My Contributions",
    contributions: [
      {
        number: "01",
        title: "Device Architectures",
        description:
          `Designed core building blocks — optical phased arrays, phase shifters, directional
            couplers, and optical antennas — across multiple architecture variants.`,
      },
      {
        number: "02",
        title: "Coherent Receive Path",
        description:
          `Contributed to the coherent-detection chain, including tunable 90° hybrid couplers for
            wavelength-independent receivers.`,
      },
      {
        number: "03",
        title: "Simulation to Tape-Out",
        description:
          `Owned the full design pipeline: photonic simulation, layout, and verification through to
            fabrication-ready tape-out.`,
      },
      {
        number: "04",
        title: "Demonstrator Support",
        description:
          `Supported bring-up and validation of the first functional end-to-end FMCW LiDAR
            prototype.`,
      },
    ],
  },
  buildingBlocks: {
    eyebrow: "04 — Building Blocks",
    heading: "From Component Library to System",
    lead:
      `Solid-state LiDAR lives or dies on its components: every dB of loss in a phase shifter,
        every degree of beam divergence in an antenna, multiplies across hundreds of channels.
        The work progressed from a validated component library to an integrated system.`,
    phases: [
      {
        phase: "I",
        title: "Validated Component Library",
        period: "2023",
        description:
          `Device-level design and validation of the beam-steering toolkit — phased arrays, phase
            shifters, couplers, and antennas — proven in silicon.`,
        points: [
          "Multiple device architectures designed and validated",
          `Ultralow-loss, energy-efficient thermo-optic phase shifters`,
          "Tunable 90° hybrid couplers for coherent receivers",
        ],
      },
      {
        phase: "II",
        title: "Integrated LiDAR Demonstrator",
        period: "2023 – 2024",
        description:
          `Components assembled into a working coherent LiDAR system — combining silicon photonics
            with InP gain elements for a complete transmit-receive chain.`,
        points: [
          "First functional end-to-end FMCW prototype",
          "Hybrid SOI-InP integration for on-chip gain",
          "System results published at OFC and ECOC",
        ],
      },
    ],
  },
  results: {
    eyebrow: "05 — Results",
    heading: "Key Outcomes",
    metrics: [
      { value: "4", unit: "+", label: "Device architectures designed" },
      { value: "2", unit: "", label: "Platforms combined (SOI + InP)" },
      { value: "1", unit: "st", label: "End-to-end FMCW demonstrator" },
    ],
    relatedPublicationsLabel: "Related publications",
    outcomes: [
      `Beam-steering component library designed and validated in silicon`,
      `Coherent-detection LiDAR results published at OFC (postdeadline) and ECOC`,
      `Hybrid SOI-InP integration demonstrated for the receive chain`,
      `Full design pipeline established from simulation through tape-out`,
    ],
  },
  publications: {
    eyebrow: "06 — Publications",
    heading: "Related Research",
  },
  diagrams: {
    chirpAriaLabel:
      `Frequency versus time plot of FMCW LiDAR: a transmitted chirp ramps up in frequency, the
        received echo is a time-delayed copy, and their constant difference — the beat frequency
        — encodes target distance.`,
    chirp: {
      timeAxis: "TIME",
      frequencyAxis: "FREQ",
      delay: "τ = 2R/c",
      beat: "f_beat ∝ distance",
      transmitted: "TRANSMITTED",
      received: "RECEIVED",
    },
    opaAriaLabel:
      `Diagram of an optical phased array: laser light is split into channels, each channel
        passes a phase shifter, and an array of optical antennas emits a combined wavefront
        steered off-axis.`,
    opa: {
      title: "SILICON PHOTONIC OPA",
      input: "IN",
      antennaArray: "ANTENNA ARRAY",
      steeredBeam: "STEERED BEAM",
    },
  },
};
