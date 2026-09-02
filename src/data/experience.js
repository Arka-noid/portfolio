export const experienceSection = {
  eyebrow: "Track record",
  heading: "Where this capability was built",
  expandLabel: "Show more ↓",
  collapseLabel: "Show less ↑",
};

export const experience = [
  {
    role: "Photonic Designer / System Integrator",
    org: "imec",
    // logoTone describes the logo's own ink: "light" ships white-on-transparent
    // and needs no treatment, "dark" is dark-on-transparent and gets inverted
    // so it reads on the navy background. See .partner-logo-* in App.css.
    logo: "/logos/imec_white.png",
    logoTone: "light",
    period: "2023–2026",
    loc: "Leuven, Belgium",
    bullets: [
      `Led system-level transition of a programmable photonic mesh chip from TRL 3 to TRL 6 for
        a deep-tech startup.`,
      `Designed fiber-to-chip coupling interfaces (edge couplers, grating couplers) in SOI and
        SiN platforms.`,
      `Led photonic design of an FMCW LiDAR demonstrator — first functional end-to-end
        prototype.`,
      `WP Leader on EU project VISSION: coordinated design, characterization, partner
        alignment.`,
      `Authored system documentation and technical guidelines for industrial technology
        transfer.`,
    ],
    extra: [
      `Designed AWG-based wavelength multiplexing components for DWDM PIC architectures.`,
      `Supported DFT/DFM-aware photonic PDK development through DoE and validation benchmarks
        for the first imec SiN platform PDK.`,
      `Established Git workflows and Jira processes, measurably improving development
        efficiency.`,
    ],
  },
  {
    role: "Assistant Professor",
    org: "Scuola Superiore Sant'Anna",
    logo: "/logos/uni-sant-anna-650x325-1.png",
    logoTone: "dark",
    period: "2020–2023",
    loc: "Pisa, Italy",
    bullets: [
      `Developed hybrid SiN-InP photonic receiver architectures for SCORE-SAR targeting Earth
        observation satellites (EU SPACEBEAM).`,
      `Built link-budget and system-level simulation models for microwave photonic receivers,
        combining optical/RF analysis with signal processing.`,
      `Led SiPh layout design and experimental validation of photonic devices — MZMs, Bragg
        grating optical filters.`,
      `Contributed to testing/validation of an industrial photonic transceiver prototype with
        Leonardo & Thales.`,
    ],
    extra: [
      `Satellite constellation studies for Earth observation (COSMOS project, Italian Space
        Agency).`,
      `Designed system architectures for microwave photonic sensing and multi-antenna remote
        sensing platforms (CNIT, Elettronica S.p.A.).`,
      `Designed high-bandwidth circuits for photonic ADC applications and contributed to
        feasibility studies for extreme-bandwidth signal acquisition systems (CNIT).`,
    ],
  },
  {
    role: "Post-doctoral Research Associate",
    org: "University of Glasgow",
    logo: "/logos/university-of-glasgow.png",
    logoTone: "dark",
    period: "2015–2019",
    loc: "Glasgow, UK",
    bullets: [
      `Collaborated with Gas Sensing Solutions Ltd. on photonic gas sensor development.`,
      `Covered fabrication, process development, and experimental validation end-to-end.`,
      `Supported Innovate UK projects aligned with commercialization goals.`,
    ],
    extra: [],
  },
];
