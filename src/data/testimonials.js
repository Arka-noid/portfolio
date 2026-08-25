// Client references. Empty until real ones exist — components/Testimonials.jsx
// renders nothing at all for an empty array, so shipping with none is safe and
// nothing placeholder-looking ever reaches the site.
//
// Shape:
//   {
//     quote:  "…",                      // their words, not a paraphrase
//     name:   "Full Name",              // or null if they can only be anonymous
//     role:   "CTO",                    // their title at the time
//     org:    "Company",                // or a description: "a photonics startup"
//     project: "space-radar",           // optional: id from data/projects.js
//   }
//
// An anonymous reference still carries weight — "Head of Photonics at a
// European space prime" is worth more than nothing — but get written
// permission for the wording before it goes up, especially for anything
// touching defense work.
export const testimonials = [];
