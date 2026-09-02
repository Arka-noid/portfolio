// The markets we name — see docs/positioning.md §5 "Markets we name".
//
// A market is a doorway, not an offer. The three engagements in services.js are
// what gets sold; these are how a buyer recognises their own field before they
// read the ladder. Ordered by demand, not by evidence weight: AI infrastructure
// leads because that is where the work is going.
//
// `proof` stays at component and platform level — see the second guard in §7.
// Every item traces to experience.js or projects.js.
//
// Named `marketFocus`, not `markets`: projects.js already exports a `markets`
// string array for the /work filter, and the two must not collide on import.
//
// Voice: this renders on Home and /services, which are firm surfaces — "we".
//
// `image` is the card's own photographic backdrop: a path under /images, or
// null for no photo (the card then renders on flat --surface, as before).
// It sits in this file rather than in data/images.js because it belongs to the
// market, not to a page slot — but the same rules apply, see
// public/images/README.md: real hardware over CGI, chosen for subject and not
// for colour, since the card treatment desaturates and tints whatever is here.
export const marketFocus = [
  {
    id: "ai-infrastructure",
    label: "AI infrastructure & datacenter",
    image: "/images/datacenter-racks.jpg",
    context:
      `Optical interconnect, co-packaged optics and optical I/O as link budgets push past
        1.6Tb/s per lane`,
    proof:
      `Fiber-to-chip coupling in SOI and SiN, micro-transfer-printed SOAs, hybrid SiN–InP
        multi-chip assembly, AWG-based wavelength multiplexing for DWDM architectures, and a
        programmable photonic mesh carried from TRL 3 to TRL 6.`,
    evidence: { label: "See the platform and mesh work", to: "/work" },
  },
  {
    id: "space-defense",
    label: "Space & defense",
    image: "/images/earth-night.jpg",
    context:
      "Photonic payloads for Earth observation and radars",
    proof:
      `The SCORE-SAR hybrid SiN–InP receiver, a full analog link budget
        modelled, and a multi-static satellite radar network study.`,
    evidence: { label: "Read the space radar case study", to: "/work/space-radar" },
  },
  {
    id: "autonomous-sensing",
    label: "Autonomous sensing",
    image: "/images/lidar-point-cloud.png",
    context:
      "Coherent FMCW LiDAR and solid-state beam steering",
    proof:
      `A 128-element optical phased array and a Focal Plane array system, and the
        photonic design behind a first end-to-end FMCW LiDAR demonstrator.`,
    evidence: { label: "Read the LiDAR case study", to: "/work/lidar" },
  },
  {
    id: "sensing-imaging",
    label: "Industrial, life-science & imaging",
    image: "/images/pulse-oximeter.jpg",
    context:
      `Gas sensing, computer vision, biomedical sensors with microfluidics, optical coherence
        tomography`,
    proof:
      `Mid-infrared gas sensor devices developed with an industrial partner from epitaxy
        through to characterization, and chip-scale biomedical imaging architectures at
        Sant'Anna.`,
    evidence: { label: "See the sensing projects", to: "/work" },
  },
];

// Renders on /services and, via MarketsStrip compact, on the home page. It no
// longer restates the "the hard part is the systems engineering in between"
// thesis: on /services that line belongs to the page promise (positioning §9),
// and three restatements of it used to land within one scroll.
export const marketIntro =
  `The same three engagements, addressed to four fields. Photonics is being pulled out of
    the lab in all of them at once — what changes between them is which constraint decides
    the architecture first.`;
