// Buyer symptoms — see docs/positioning.md §5.1.
//
// A symptom is a doorway, not an offer. §5 describes the three buying
// situations from the outside; these are the same three said from the inside,
// as the sentence a buyer would actually say out loud. A visitor who
// recognises their own sentence has self-identified, and `offer` carries them
// to the engagement that answers it.
//
// Like markets, they never become offers (§9): every symptom belongs inside one
// of the three engagements in services.js and nothing else. Do not add a
// symptom that has no offer, and do not promote one into a fourth card.
//
// Voice: these are quotations of the buyer, so the "we" inside them is the
// client's team, not Merilight — the one exception to §7, and only because the
// line is set as their speech. None of them names the cure; the offer does.
//
// Every entry restates a `problem`, `forWho`, `context` or `proof` already in
// src/data/*, or a "language that lands" line from §5. Nothing here introduces
// a figure or a claim that is not already on the site (§6).
//
// `offer` values are services[].id, and group the quotes inside the matching
// /services strip. Change an offer id here and in services.js together.
export const symptomRouter = {
  lead: `If any of these problems resonates,
    start here.`,
};

export const symptoms = [
  {
    id: "on-chip-boundary",
    text: "What components belong on the chip, and what stays discrete?",
    offer: "system-architecture",
  },
  {
    id: "tapeout-packaging-risk",
    text: "Will this architecture survive tapeout and packaging?",
    offer: "system-architecture",
  },
  {
    id: "mass-power-budget",
    text: `We have a SWaP budget, and an architecture that won't fit inside it.`,
    offer: "system-architecture",
  },
  // {
  //   id: "unreviewed-tapeout",
  //   text: "Tape-out is weeks away and nobody outside the team has read the design.",
  //   offer: "system-architecture",
  // },
  {
    id: "no-driver",
    text: "We have a chip, but we don't know how to drive it.",
    offer: "prototype-integration",
  },
  {
    id: "optical-table-demo",
    text: `The demo still depends on an optical table, delicate alignment and one operator.`,
    offer: "prototype-integration",
  },
  {
    id: "packaging-undecided",
    text: `The design depends on packaging that is not decided yet.`,
    offer: "prototype-integration",
  },
  {
    id: "model-mismatch",
    text: "The measurements do not agree with the model.",
    offer: "characterization",
  },
  {
    id: "hand-calibration",
    text: "Calibration is manual, slow, and difficult to repeat.",
    offer: "characterization",
  },
  // Banked, not rendered — nine rows above is already the length a router can
  // carry, and this sentence is answered by the due-diligence short form of
  // offer 01. Kept here so a future swap has a spare rather than an invention.
  // {
  //   id: "distance-to-product",
  //   text: "We're asked how far this is from a product, and we have no defensible answer.",
  //   offer: "system-architecture",
  // },
];
