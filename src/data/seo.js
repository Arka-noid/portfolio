export const SITE_URL = "https://www.merilight.com";
export const SITE_NAME = "Merilight";
export const DEFAULT_OG_DESCRIPTION =
  "Your photonic demo works. Will the product? Independent design review, system architecture, TRL maturation and technical due diligence for photonic hardware.";

// One entry per indexable route. `path` doubles as the React Router path and
// the canonical/OG URL suffix. Case studies are keyed separately by slug
// since /work/:slug is one route serving several pages.
export const pageSeo = {
  home: {
    path: "/",
    title: "Merilight — Optical Systems Engineering",
    description:
      "Studio for optical and photonic system engineering between lab result and shipping prototype — for AI infrastructure and datacenter, space and defense, and quantum sensing. Integration architecture and link budgets, optical interconnect and co-packaged optics, measurement enablement, PDK and TRL maturation, system integration — led by Manuel Reza.",
  },
  services: {
    path: "/services",
    title: "Services — Optical System & PIC Architecture | Merilight",
    description:
      "Three productized engagements: optical system & PIC architecture, optoelectronic prototype integration, and automated test & calibration — for photonic hardware teams moving from lab result to shipping product.",
  },
  work: {
    path: "/work",
    title: "Case Studies — Client Evidence | Merilight",
    description:
      "Eight photonic and optoelectronic systems shipped across AI infrastructure, space and defense, and autonomous sensing — from architecture through packaged, tested hardware.",
  },
  about: {
    path: "/about",
    title: "About Merilight — Optical Systems Consultancy",
    description:
      "Merilight is a consultancy for photonic and optoelectronic system integration, built on a record of shipped hardware spanning silicon photonics, LiDAR, space radar and datacenter optics.",
  },
  profile: {
    path: "/profile",
    title: "Manuel Reza — Optical Systems Engineer | Merilight",
    description:
      "Manuel Reza's employment record: photonic and optoelectronic system integration across imec, Scuola Superiore Sant'Anna and industry programmes in AI infrastructure, space and defense.",
  },
  contact: {
    path: "/contact",
    title: "Contact Merilight",
    description:
      "Get in touch with Merilight for photonic and optoelectronic system integration, design review, or technical due diligence.",
  },
};

// Keyed by CaseStudy.jsx's slug registry.
export const caseStudySeo = {
  lidar: {
    path: "/work/lidar",
    title: "Integrated LiDAR System Case Study | Merilight",
    description:
      "Photonic design of a frequency-modulated continuous-wave LiDAR system for autonomous sensing — optical phased arrays, phase shifters, directional couplers and antennas for solid-state beam steering, at imec.",
  },
  "space-radar": {
    path: "/work/space-radar",
    title: "Photonics for Space Radar Case Study | Merilight",
    description:
      "A hybrid silicon nitride and indium phosphide photonic beamforming network for a satellite-borne synthetic aperture radar — architecture, link-budget simulation and packaged-assembly characterization.",
  },
};

export const notFoundSeo = {
  title: "Page Not Found | Merilight",
  description: "That page doesn't exist — it may have moved.",
};
