// Decorative photography slots. Every slot is optional and fails
// gracefully: a null slot renders nothing, and a URL that doesn't load
// simply never paints — the canvas/gradient design underneath remains.
//
// ALL CURRENT IMAGES ARE PLACEHOLDERS. They are free-licence stock chosen
// for visual impact and topical fit, not final art; swap any of them freely.
// Rendering goes through components/ThemedImage.jsx (or HeroPhoto for case
// study heroes), which desaturates and tints whatever is here into the
// navy/cyan palette — so a replacement does not need to match the site's
// colours, only its subject.
//
// See public/images/README.md for sources, licences and compression targets.
export const siteImages = {
  // Space-radar case-study hero backdrop.
  // Earth at night from orbit — dark ground, warm city lights, wide empty
  // sky for the headline to sit in. NASA ID iss042e037793; photographed by
  // ESA astronaut Samantha Cristoforetti aboard the ISS, 13 December 2014.
  spaceRadarHero: "/images/earth-night.jpg",

  // LiDAR case-study hero backdrop — a night-highway or city-lights
  // long exposure works best. Still unsourced. e.g. "/images/night-road.jpg"
  lidarHero: null,

  // /about side image — wafer die macro. Permanent now that /about is the
  // firm and the portrait has moved to /profile: the buyer sizing up a
  // consultancy should meet hardware here, not a face. Placeholder — an
  // assembled/packaged photonic module would say "product" more directly than
  // bare dies do. Also the fallback if principal.photoUrl is ever unset.
  aboutSide: "/images/wafer-dies.jpg",

  // Work/projects page banner — Cygnus cargo vehicle on the ISS robotic arm.
  // Real flight hardware rather than a render. NASA, public domain.
  workBanner: "/images/orbital-hardware.jpg",

  // Backdrop behind the markets section — switch faceplate with OM3 fibre
  // jumpers seated in SFP cages. Repointed here from the retired
  // `servicesBanner` slot: markets lead with AI infrastructure & datacenter
  // optics, so the subject fits better behind them than above the offers.
  marketsBackdrop: "/images/fiber-switch.jpg",

  // Services page side image, beside the heading and promise line. Still
  // unsourced — wants a probe needle landing on a photonic die, or a fibre
  // array butt-coupled to a chip edge. Macro, real hardware, no CGI. Until it
  // exists the heading block runs full width with no dead column.
  servicesSide: null,

  // Inline figure in the space-radar case study: a phase-wrapped InSAR
  // interferogram. Kept small rather than full-bleed — the rainbow phase
  // ramp is deliberately loud and only works as a contained figure.
  insarFigure: "/images/insar-interferogram.jpg",
};

// Published as nonvisual data attributes on each photographic surface. These
// records keep attribution attached to an image when it is reused, while the
// fuller provenance audit remains in public/images/README.md.
export const imageAttributions = {
  "/images/earth-night.jpg": {
    id: "NASA iss042e037793",
    credit: "NASA / ESA - Samantha Cristoforetti",
    source: "https://images.nasa.gov/details/iss042e037793",
    license: "NASA Images and Media Usage Guidelines",
  },
  "/images/wafer-dies.jpg": {
    credit: "Maxence Pira",
    source: "https://unsplash.com/photos/a-close-up-of-a-pattern-of-small-squares-7hR3FrFs4Q0",
    license: "Unsplash License",
  },
  "/images/orbital-hardware.jpg": {
    credit: "NASA",
    source: "https://images.nasa.gov",
    license: "NASA Images and Media Usage Guidelines",
    status: "Exact NASA asset page not yet verified",
  },
  "/images/fiber-switch.jpg": {
    status: "Creator, source, and license unresolved",
  },
  "/images/insar-interferogram.jpg": {
    id: "NASA PIA02713",
    credit: "NASA/JPL/NIMA",
    source: "https://images.nasa.gov/details/PIA02713",
    license: "NASA Images and Media Usage Guidelines",
  },
  "/images/datacenter-racks.jpg": {
    status: "Creator, source, and license unresolved",
  },
  "/images/optical-communications-1.jpg": {
    credit: "Creator unresolved",
    source: "https://www.phocuswire.com/Top-of-the-tech-pops-Blockchain-voice-bots-and-virtual-reality-finds-their-way",
    status: "Historical FreeImages stock; license unresolved",
  },
  "/images/lidar-point-cloud.png": {
    credit: "Daniel L. Lu",
    source: "https://commons.wikimedia.org/wiki/File:Ouster_OS1-64_lidar_point_cloud_of_intersection_of_Folsom_and_Dore_St,_San_Francisco.png",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    modifications: "Resized, cropped, tinted, and overlaid by Merilight",
  },
  "/images/oil-gas.webp": {
    credit: "W.carter",
    source: "https://commons.wikimedia.org/wiki/File:Gas_flare_on_top_of_a_flare_stack_at_Preemraff_Lysekil_4.jpg",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    modifications: "Cropped, mirrored, tinted, and overlaid by Merilight",
  },
  "/images/pulse-oximeter.jpg": {
    credit: "Engin Akyurt",
    source: "https://pixabay.com/es/photos/paciente-masculino-cuidado-8687775/",
    license: "Pixabay Content License",
  },
};

export function getImageAttributionProps(src) {
  const attribution = imageAttributions[src];
  if (!attribution) return {};

  return {
    "data-image-id": attribution.id,
    "data-image-credit": attribution.credit,
    "data-image-source": attribution.source,
    "data-image-license": attribution.license,
    "data-image-license-url": attribution.licenseUrl,
    "data-image-modifications": attribution.modifications,
    "data-image-provenance-status": attribution.status,
  };
}
