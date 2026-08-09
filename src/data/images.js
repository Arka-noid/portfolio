// Decorative photography slots. Every slot is optional and fails
// gracefully: a null slot renders nothing, and a URL that doesn't load
// simply never paints — the canvas/gradient design underneath remains.
//
// Prefer locally hosted, compressed copies in public/images/ (see
// public/images/README.md for curated free-license sources, target
// filenames, and compression guidance), e.g. "/images/earth.jpg".
export const siteImages = {
  // Space-radar case-study hero backdrop.
  // NASA "Blue Marble 2014" (PIA18033) — public domain, no attribution
  // required. Swap for a local copy when convenient: "/images/earth.jpg".
  spaceRadarHero:
    "https://images-assets.nasa.gov/image/PIA18033/PIA18033~large.jpg",

  // LiDAR case-study hero backdrop — a night-highway or city-lights
  // long exposure works best. e.g. "/images/night-road.jpg"
  lidarHero: null,

  // About section side image — fiber-optic or photonic-chip macro.
  // Shown only while no personal photo is set in data/about.js.
  // e.g. "/images/chip-macro.jpg"
  aboutSide: null,
};
