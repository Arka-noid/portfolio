export const SCHOLAR_URL =
  "https://scholar.google.com/citations?user=xXUzynsAAAAJ&hl=en";

// Citation count shown in the publications header — update periodically
// from the Scholar profile.
export const CITATIONS = "570+";

// Publications are grouped by domain rather than by year: the spread across
// these six areas is the breadth evidence the positioning rests on
// (docs/positioning.md §4), and a reverse-chronological list hides it.
// Order is by weight of output, heaviest first. Every entry carries a
// `domain` key from this map.
export const PUB_DOMAINS = [
  { id: "sar", label: "SAR & radar photonics" },
  { id: "lidar", label: "LiDAR & coherent sensing" },
  { id: "platform", label: "PIC platforms & integration" },
  { id: "mwp", label: "Microwave photonics & RF filtering" },
  { id: "midir", label: "Mid-infrared devices & gas sensing" },
  { id: "nonlinear", label: "Nonlinear optics & laser sources" },
];

// Fallback link for entries with no publisher URL resolved yet. A Scholar
// citation page still lands the reader on the abstract and a publisher link,
// so an unresolved entry degrades gracefully rather than breaking.
const scholarLink = (id) =>
  `https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xXUzynsAAAAJ&citation_for_view=xXUzynsAAAAJ:${id}`;

// Featured entries link straight to the publisher (DOI where one exists), since
// those are the ones a reader actually opens. The rest still use scholarLink.

export const publications = [
  {
    title:
      "Micro-Transfer Printed Continuous-Wave and Mode-Locked Laser Integration at 800 nm on a Silicon Nitride Platform",
    authors: "M. Kiewiet, S. Cuyvers, M. Billet, K. Akritidis, V. Bonito Oliva, G. Jeevanandam et al.",
    venue: "Laser & Photonics Reviews",
    year: 2026,
    type: "journal",
    domain: "platform",
    url: scholarLink("_kc_bZDykSQC"),
  },
  {
    title:
      "Linear Spectral Analysis under Nonlinear Laser Frequency Sweeps",
    authors: "M. Prost, H. Qiu, M. Reza, G. Croes, J. Romme, B. Berteloot et al.",
    venue: "Laser & Photonics Reviews",
    year: 2025,
    type: "journal",
    domain: "lidar",
    featured: true,
    url: scholarLink("mVmsd5A6BfQC"),
  },
  {
    title:
      "Silicon Photonic FMCW LiDAR with Integrated High-Speed Line-Scan Illumination and 2D Coherent Receivers",
    authors: "M. Prost, H. Qiu, G. Croes, M. Reza, J. Romme, B. Berteloot, Z. Lin et al.",
    venue: "European Conference on Optical Communications (ECOC)",
    year: 2025,
    type: "conference",
    domain: "lidar",
    url: scholarLink("4DMP91E08xMC"),
  },
  {
    title:
      "Ultralow Loss Design Methodology for Energy-Efficient Thermo-Optic Phase Shifters",
    authors: "H. Qiu, M. Prost, D. Coenen, T.D. Kongnyuy, M. Reza, G. Croes, M. Ramezani et al.",
    venue: "ACS Photonics",
    year: 2025,
    featured: true,
    type: "journal",
    domain: "platform",
    url: "https://doi.org/10.1021/acsphotonics.4c02518",
  },
  {
    title:
      "Monolithically Integrated Silicon Photonic Biaxial FMCW LiDAR for Scalable 3D Sensing",
    authors: "M. Prost, H. Qiu, G. Croes, M. Reza, J. Romme, B. Berteloot, Z. Lin et al.",
    venue: "Optical Fiber Communication Conference (OFC)",
    year: 2025,
    type: "conference",
    domain: "lidar",
    featured: true,
    note: "Postdeadline paper",
    url: "https://opg.optica.org/abstract.cfm?uri=OFC-2025-Th4A.5",
  },
  {
    title:
      "High-Performance Silicon Optical Phase Shifter Targeting Large-Scale Programmable Photonic Circuits",
    authors: "H. Qiu, M. Prost, D. Coenen, T.D. Kongnyuy, M. Reza, G. Croes et al.",
    venue: "Optical Fiber Communication Conference (OFC)",
    year: 2025,
    type: "conference",
    domain: "platform",
    url: scholarLink("YOwf2qJgpHMC"),
  },
  {
    title:
      "Development of a Coherent-Detection LiDAR System Based on Hybrid SOI-InP Integration",
    authors: "M. Prost, H. Qiu, G. Croes, M. Reza, J. Romme, B. Berteloot et al.",
    venue: "European Conference on Integrated Optics (ECIO)",
    year: 2025,
    type: "conference",
    domain: "lidar",
    url: scholarLink("qxL8FJ1GzNcC"),
  },
  {
    title:
      "A Tunable Optical 90° Hybrid Coupler in SOI for Wavelength-Independent Coherent Receivers",
    authors: "M. Reza, H. Qiu, M. Prost, G. Croes et al.",
    venue: "European Conference on Integrated Optics (ECIO)",
    year: 2025,
    type: "conference",
    domain: "lidar",
    url: scholarLink("Zph67rFs4hoC"),
  },
  {
    title:
      "Scalable Butt-Coupled Integration of 800 nm Lasers on Silicon Nitride Using Micro-Transfer Printing",
    authors: "M. Kiewiet, S. Cuyvers, M. Billet, K. Akritidis, V. Bonito Oliva et al.",
    venue: "European Conference on Integrated Optics (ECIO)",
    year: 2025,
    type: "conference",
    domain: "platform",
    url: scholarLink("aqlVkmm33-oC"),
  },
  {
    title:
      "Photonic Integrated Filter in Silicon Nitride Technology for High-Performance Microwave Photonics Applications",
    authors: "C. Porzi, M. Reza, M. Sorel, A. Bogoni et al.",
    venue: "European Conference on Integrated Optics (ECIO)",
    year: 2025,
    type: "conference",
    domain: "mwp",
    url: scholarLink("8k81kl-MbHgC"),
  },
  {
    title:
      "Design, Fabrication, and Characterization of a Hybrid Integrated Photonic Module for a Synthetic Aperture Radar Receiver",
    authors: "A.W. Mohammad, C.G. Roeloffzen, P.W. van Dijk, L. Wevers, P. Ghelfi, M. Reza et al.",
    venue: "Journal of Lightwave Technology",
    year: 2024,
    type: "journal",
    domain: "sar",
    featured: true,
    url: "https://doi.org/10.1109/JLT.2023.3318473",
  },
  {
    title:
      "Electro-Optic Packaging of Silicon Photonics-Based RF Multiplier for Clock Signal Generation in the Millimeter-Wave Band",
    authors: "A. Malacarne, L. Roselli, M. Chiesa, A. Bigongiari, M. Reza, A. D'Errico et al.",
    venue: "Proc. ECIO",
    year: 2023,
    type: "conference",
    domain: "mwp",
    url: scholarLink("hqOjcs7Dif8C"),
  },
  {
    title:
      "Integrated Microwave Photonic Receiver for Radar Applications",
    authors: "F. Camponeschi, M. Reza, C. Porzi, F. Scotti, L. Donato, G. Greco, P. Ghelfi",
    venue: "Proc. ECIO",
    year: 2023,
    type: "conference",
    domain: "sar",
    url: scholarLink("UebtZRa9Y70C"),
  },
  {
    title:
      "Towards System-on-Chip Integration of Photonic-Based Coherent Distributed Synthetic Aperture Radar",
    authors: "L. Rinaldi, F. Camponeschi, H. Amir, S. Maresca, M. Reza, G. Pandey et al.",
    venue: "IEEE Photonics Conference (IPC)",
    year: 2023,
    type: "conference",
    domain: "sar",
    url: scholarLink("5nxA0vEk-isC"),
  },
  {
    title:
      "Photonics Integrated Circuits for Distributed Radar Systems in Space",
    authors: "G. Serafino, M. Reza, F. Camponeschi, L. Rinaldi, P. Ghelfi et al.",
    venue: "IEEE Photonics Conference (IPC)",
    year: 2023,
    type: "conference",
    domain: "sar",
    url: scholarLink("3fE2CSJIrl8C"),
  },
  {
    title:
      "Recent Progresses in Silicon Waveguide Bragg Grating Filters",
    authors: "M. Reza, C. Porzi, A. Lupi, A. Lugli, A. Lupo, A. Bogoni et al.",
    venue: "Proc. ECIO",
    year: 2023,
    type: "conference",
    domain: "platform",
    url: scholarLink("kNdYIx-mwKoC"),
  },
  {
    title:
      "Silicon-on-Insulator Microwave Photonic Filter With Widely Tunable and Reconfigurable Flat-Top Bandpass Functionality",
    authors: "C. Porzi, M. Reza, P. Ghelfi, M. Sorel, A. Bogoni",
    venue: "Journal of Lightwave Technology",
    year: 2022,
    type: "journal",
    domain: "mwp",
    url: scholarLink("eQOLeE2rZwMC"),
  },
  {
    title:
      "Multi-Static Multi-Band Synthetic Aperture Radar (SAR) Constellation Based on Integrated Photonic Circuits",
    authors: "M. Reza, M.M.H. Amir, M. Imran, G. Pandey, F. Camponeschi, S. Maresca et al.",
    venue: "Electronics",
    year: 2022,
    type: "journal",
    domain: "sar",
    featured: true,
    url: "https://doi.org/10.3390/electronics11244151",
  },
  {
    title:
      "Integrated Microwave Photonics for Radar Applications",
    authors: "G. Serafino, S. Maresca, M. Reza, C. Porzi, A. Malacarne, F. Scotti, P. Ghelfi et al.",
    venue: "Conference on Lasers and Electro-Optics Pacific Rim (CLEO-PR)",
    year: 2022,
    type: "conference",
    domain: "sar",
    url: scholarLink("roLk4NBRz8UC"),
  },
  {
    title:
      "Microwave Photonics Beamformer for Spaceborne SAR",
    authors: "T. Otto, S. Gabrielli, P. Ghelfi, G. Serafino, M. Reza, A. Mohammad et al.",
    venue: "EUSAR — 14th European Conference on Synthetic Aperture Radar",
    year: 2022,
    type: "conference",
    domain: "sar",
    url: scholarLink("ufrVoPGSRksC"),
  },
  {
    title:
      "Frequency and Bandwidth Tunable Integrated Microwave Photonic Bandpass Filter",
    authors: "C. Porzi, M. Reza, M. Sorel, A. Bogoni",
    venue: "International Workshop on Fiber Optics in Access Networks (FOAN)",
    year: 2022,
    type: "conference",
    domain: "mwp",
    url: scholarLink("WF5omc3nYNoC"),
  },
  {
    title:
      "Design and Performance Estimation of a Photonic Integrated Beamforming Receiver for Scan-On-Receive Synthetic Aperture Radar",
    authors: "M. Reza, G. Serafino, T. Otto, A. Mohammad, H. Mohammadhosseini et al.",
    venue: "Journal of Lightwave Technology",
    year: 2021,
    type: "journal",
    domain: "sar",
    featured: true,
    url: "https://doi.org/10.1109/JLT.2021.3119225",
  },
  {
    title:
      "Advancement of Photonic Integration Technology for Space Applications: A X-Band Scan-On-Receive Synthetic Aperture Radar Receiver with Electro-Photonic Beamforming",
    authors: "H. Mohammadhoseini, P. Ghelfi, B. Desoete, S. Gabrielli, T. Otto et al.",
    venue: "International Conference on Space Optics — ICSO 2020",
    year: 2021,
    type: "conference",
    domain: "sar",
    url: scholarLink("zYLM7Y9cAGgC"),
  },
  {
    title:
      "Design of an Integrated-Photonics RF Beamformer for Multi-Beam Satellite Synthetic Aperture Radar",
    authors: "M. Reza, A. Mohammad, G. Serafino, C. Roeloffzen, P. van Dijk et al.",
    venue: "International Topical Meeting on Microwave Photonics (MWP)",
    year: 2020,
    type: "conference",
    domain: "sar",
    url: scholarLink("W7OEmFMy1HYC"),
  },
  {
    title:
      "Development of AlGaInSb/GaInSb Multi-Quantum Well Light Emitting Diodes for CO₂ Detection at 4.26 μm",
    authors: "M. Reza, A. Sheridan, B. Roycroft, B.M. Corbett et al.",
    venue: "Proc. SPIE — Quantum Sensing and Nano Electronics and Photonics",
    year: 2018,
    type: "conference",
    domain: "midir",
    url: scholarLink("2osOgNQ5qMEC"),
  },
  {
    title:
      "Strain-Compensated GaInSb/AlGaInSb Type-I MQW for CO₂ Detection",
    authors: "M. Reza, A. Sheridan, B. Roycroft, B.M. Corbett et al.",
    venue: "Proc. SPIE — Photonic Instrumentation Engineering",
    year: 2017,
    type: "conference",
    domain: "midir",
    url: scholarLink("Tyk-4Ss8FVUC"),
  },
  {
    title:
      "Development of AlGaInSb Multi Quantum-Well Light Emitting Diodes in the 3–5 μm Spectral Range",
    authors: "M. Reza, A. Sheridan, B. Roycroft, B.M. Corbett et al.",
    venue: "UK Semiconductors Conference",
    year: 2017,
    type: "conference",
    domain: "midir",
    url: scholarLink("Y0pCki6q_DkC"),
  },
  {
    title:
      "Etching Process for Producing Various Sloping Sidewall of III-V Antimonide-Based Materials for LED/PD Applications",
    authors: "M. Reza, A. Sheridan, B. Roycroft, B.M. Corbett et al.",
    venue: "Compound Semiconductor Week (CSW)",
    year: 2016,
    type: "conference",
    domain: "midir",
    url: scholarLink("qjMakFHDy7sC"),
  },
  {
    title:
      "Mid-Infrared Rotated Image Singly Resonant Twisted Rectangle Optical Parametric Oscillator Based on HgGa₂S₄ Pumped at 1064 nm",
    authors: "G. Marchev, M. Reza, V. Badikov, A. Esteban-Martin, G. Stöppler et al.",
    venue: "Applied Optics",
    year: 2014,
    type: "journal",
    domain: "nonlinear",
    url: scholarLink("9yKSN-GCB0IC"),
  },
  {
    title:
      "Optical Damage Studies of Mercury Thiogallate Nonlinear Crystals for Use in 1-μm Pumped Optical Parametric Oscillators",
    authors: "V. Petrov, G. Marchev, A. Tyazhev, M. Beutler, V. Panyutin, M. Starikova et al.",
    venue: "Optical Engineering",
    year: 2013,
    type: "journal",
    domain: "nonlinear",
    url: scholarLink("u5HHmVD_uO8C"),
  },
  {
    title:
      "Optical Damage Limits in Chalcogenide Nonlinear Crystals Used in 1064 nm Pumped Nanosecond Optical Parametric Oscillators",
    authors: "V. Petrov, G. Marchev, A. Tyazhev, M. Starikova, A. Esteban-Martin et al.",
    venue: "Pacific Rim Laser Damage: Optical Materials for High Power Lasers",
    year: 2013,
    type: "conference",
    domain: "nonlinear",
    url: scholarLink("UeHWp8X0CEIC"),
  },
  {
    title:
      "HgGa₂S₄-Based RISTRA OPO Pumped at 1064 nm",
    authors: "G. Marchev, M. Reza, V. Badikov, A. Esteban-Martin, G. Stöppler et al.",
    venue: "Advanced Solid-State Lasers Congress",
    year: 2013,
    type: "conference",
    domain: "nonlinear",
    url: scholarLink("d1gkVwhDpl0C"),
  },
];
