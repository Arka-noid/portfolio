import { experience } from "./experience";

// Institutions & partners strip on /about. The three employers with a usable
// logo come straight from the Experience timeline so the two can't drift;
// CNIT is appended since it's a named partner in Sant'Anna's record but has
// no standalone timeline entry of its own (see experience.js).
export const partners = [
  ...experience
    .filter((e) => e.logo)
    .map((e) => ({ name: e.org, logo: e.logo, bg: e.logoBg })),
  { name: "CNIT", logo: "/logos/cnit_complete.png", bg: "light" },
];
