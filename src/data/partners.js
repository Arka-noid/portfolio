// The logo band at the foot of the home page.
//
// This list is curated, NOT derived from experience.js. It used to be generated
// from the employment timeline, which made the row structurally an employer
// list — and an employer list under a firm-voice "we" reads as a client roster,
// which docs/positioning.md §7 bans. The two lists are now independent:
// experience.js keeps its own `logo`/`logoTone` for the per-entry timeline mark,
// and this file decides what appears in the band.
//
// What earns a mark: an organisation the work on this site was genuinely done
// at, with, or inside — an employing institution, a research or industrial
// partner on a named project, or a programme/consortium. What it must never
// imply: that the organisation is a Merilight client or endorses the firm. The
// band's label in PartnerLogos.jsx has to stay true of every mark in the row.
//
// Before adding a commercial or defense mark, get written permission — those
// are trademarked brands, and some are attached to work described here only at
// the level an NDA allows.
//
// To add one: drop a transparent PNG in public/logos/ and add a line below.
// `tone` describes the logo's own ink, so the band can flatten the whole row to
// a single monochrome treatment — see .partner-logo in App.css.
export const partners = [
  {
    name: "imec",
    logo: "/logos/imec_white.png",
    tone: "light",
    kind: "institution",
  },
  {
    name: "Scuola Superiore Sant'Anna",
    logo: "/logos/uni-sant-anna-650x325-1.png",
    tone: "dark",
    kind: "institution",
  },
  {
    name: "University of Glasgow",
    logo: "/logos/university-of-glasgow.png",
    tone: "dark",
    kind: "institution",
  },
  {
    name: "CNIT",
    logo: "/logos/cnit_complete.png",
    tone: "dark",
    kind: "partner",
  },
];
