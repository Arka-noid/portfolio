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
