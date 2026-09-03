export const SITE_URL = "https://www.merilight.com";
export const SITE_NAME = "Merilight";
const metadata = (copy) => copy.replace(/\s+/g, " ").trim();

export const DEFAULT_OG_DESCRIPTION = metadata(
  `Your photonic demo works. Will the product? Independent design review, system
    architecture, TRL maturation and technical due diligence for photonic hardware.`
);

// One entry per indexable route. `path` doubles as the React Router path and
// the canonical/OG URL suffix. Case studies are keyed separately by slug
// since /work/:slug is one route serving several pages.
export const pageSeo = {
  home: {
    path: "/",
    title: "Merilight — Optical Systems Engineering",
    description: metadata(
      `Independent optical systems engineering that resolves integration gaps across photonics,
        electronics, packaging and control.`
    ),
  },
  services: {
    path: "/services",
    title: `Services — PIC & Optical System Co‑Design | Merilight`,
    description: metadata(
      `PIC and optical system co-design, optoelectronic prototype integration, and automated
        test and calibration for photonic hardware teams.`
    ),
  },
  work: {
    path: "/work",
    title: "Photonic Engineering Case Studies | Merilight",
    description: metadata(
      `Engineering case studies across integrated LiDAR, space radar, sensing, photonic
        platforms and optoelectronic system integration.`
    ),
  },
  about: {
    path: "/about",
    title: "About Merilight — Optical Systems Consultancy",
    description: metadata(
      `Meet Merilight, an independent optical systems consultancy built to resolve integration
        gaps across photonics, electronics and control.`
    ),
  },
  profile: {
    path: "/profile",
    title: "Manuel Reza — Optical Systems Engineer | Merilight",
    description: metadata(
      `Meet Manuel Reza, Merilight's principal, and explore his record across photonic system
        integration, LiDAR, space radar and platform development.`
    ),
  },
  contact: {
    path: "/contact",
    title: "Contact Merilight",
    description: metadata(
      `Get in touch with Merilight for photonic and optoelectronic system integration, design
        review, or technical due diligence.`
    ),
  },
};

// Keyed by CaseStudy.jsx's slug registry.
export const caseStudySeo = {
  lidar: {
    path: "/work/lidar",
    title: "Integrated LiDAR System Case Study | Merilight",
    description: metadata(
      `FMCW LiDAR case study covering optical phased arrays, phase shifters, couplers and
        antennas developed for solid-state beam steering at imec.`
    ),
  },
  "space-radar": {
    path: "/work/space-radar",
    title: "Photonics for Space Radar Case Study | Merilight",
    description: metadata(
      `Space radar case study covering a hybrid SiN-InP photonic beamforming network,
        link-budget simulation and packaged-assembly characterization.`
    ),
  },
};

export const notFoundSeo = {
  title: "Page Not Found | Merilight",
  description: metadata(`That page doesn't exist —
    it may have moved.`),
};
