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
  // sky for the headline to sit in. Unsplash (NASA), no attribution required.
  spaceRadarHero: "/images/earth-night.jpg",

  // LiDAR case-study hero backdrop — a night-highway or city-lights
  // long exposure works best. Still unsourced. e.g. "/images/night-road.jpg"
  lidarHero: null,

  // About section side image — wafer die macro.
  // Shown only while no personal photo is set in data/about.js.
  aboutSide: "/images/wafer-dies.jpg",

  // Work/projects page banner — Cygnus cargo vehicle on the ISS robotic arm.
  // Real flight hardware rather than a render. NASA, public domain.
  workBanner: "/images/orbital-hardware.jpg",

  // Services page banner — switch faceplate with OM3 fibre jumpers seated in
  // SFP cages, the closest thing in the set to the actual subject matter.
  servicesBanner: "/images/fiber-switch.jpg",

  // Inline figure in the space-radar case study: a phase-wrapped InSAR
  // interferogram. Kept small rather than full-bleed — the rainbow phase
  // ramp is deliberately loud and only works as a contained figure.
  insarFigure: "/images/insar-interferogram.jpg",
};
