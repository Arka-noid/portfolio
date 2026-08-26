import { experience } from "./experience";

// The logo band at the foot of the home page. Employers with a usable logo
// come straight from the Experience timeline so the two can't drift; CNIT is
// appended since it's a named partner in Sant'Anna's record but has no
// standalone timeline entry of its own (see experience.js).
// `tone` describes the logo's own ink — see logoTone in experience.js.
export const partners = [
  ...experience
    .filter((e) => e.logo)
    .map((e) => ({ name: e.org, logo: e.logo, tone: e.logoTone })),
  { name: "CNIT", logo: "/logos/cnit_complete.png", tone: "dark" },
];
