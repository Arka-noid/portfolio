// The firm and the person are two exports because they are two pages, not
// because they are two voices — the whole site says "I" (docs/positioning.md
// §7). /about is what Merilight does and how it is engaged; /profile is the
// record that account rests on.

export const aboutPage = {
  heading: "What Merilight is",
  team: {
    // Not "The team" — Merilight is one engineer, and a label that implies
    // otherwise is the exact thing §7 bans. The key stays `team` so
    // RecordTeaser.jsx does not churn; only the words are the claim.
    eyebrow: "Who you work with",
    heading: "The person behind Merilight",
  },
};

export const profilePage = {
  principal: {
    eyebrow: "The principal",
    heading: "The person behind Merilight",
    educationLabel: "Education",
    portraitAltPrefix: "Portrait of",
  },
  backAction: "← About Merilight",
};

// Rendered on /about, beside the hardware photograph.
export const firm = {
  // A buyer who *discovers* Merilight is one person feels misled; one who is
  // *told* does not. Stating it first converts the weakness into a trust
  // signal — the contrast is a firm that sells you a partner and staffs a
  // junior. This must render, not merely exist here (§7).
  structure:
    `Merilight is my independent practice. The engineer
      you brief is the engineer who does the work.`,

  // First person throughout (§7). What Merilight does, why the gaps are where
  // products fail, and how it is engaged. Traces to docs/positioning.md §1–§5;
  // no figure or claim here that is not already elsewhere in src/data (§6).
  paragraphs: [
    `I am an optical systems engineer. My work sits between photonics and everything it has
      to connect to.`,

    `I help teams moving from devices and demonstrations to working systems by resolving
      problems across optical architecture, packaging, electronics, control software, and test
      especially when performance is uncertain, timelines are tight, and an in-house team
      needs specialist support to make a critical decision.`,

    `That work covers optical-system and PIC architecture, fiber and free-space link budgets,
      coherent and microwave-photonic systems, tape-out and design reviews, prototype
      integration — driver electronics, embedded control, packaging and thermal budgets — and
      automated characterization benches.`,

    `Merilight exists for the moments when a photonic project cannot afford another blind
      iteration.`,

    // "",
  ],
};

// Rendered on /profile, above the employment record. First person throughout —
// this is Manuel's own account, and it is the reason the firm can make the
// claims above.
export const principal = {
  // The portrait card. Merilight is one person, so the card is one person —
  // presenting the principal the way a firm presents its team.
  photoUrl: "/manuel.jpg",
  name: "Manuel Reza",
  role: "Principal · Photonic systems engineer",

  paragraphs: [
    `I'm an optical systems engineer who has worked at every altitude of the photonics value
      chain — from designing and etching III-V quantum-well devices, to
      architecting microwave-photonic receivers for spaceborne radar, to maturing
      silicon photonics platforms and products.`,
    `That breadth is the point: I speak device physics with design engineers, link budgets with
      system architects, and roadmaps with product owners, and I translate between them. Most
      photonics projects fail in the gaps between those worlds; my job is closing them.`,
    `Today the field is moving fast. AI infrastructure is pulling optics into the equation, 
    from co-packaged interconnects to circuits that compute with light; coherent
      sensing is going solid-state; and many companies are investing seriously in photonic.
      The couplers, hybrid assemblies, multiplexers and mesh processors those roadmaps are
      built from are the things I have spent the last decade designing, integrating and
      measuring. I help teams turn that momentum into working hardware.`,
  ],

  // TODO(user): confirm degree titles, institutions, and years before
  // publishing — left empty so nothing unverified renders.
  education: [],
};

// Read on /about, under the teaser that points at /profile. This one sentence
// is what keeps the employment record from reading as a CV: it states why a
// firm is showing one person's history at all, and frames what the reader is
// about to open as provenance rather than as a job history. It sits on /about
// deliberately — the framing has to be read before the record is.
// See docs/positioning.md §1 and §7.
export const recordIntro =
  `Merilight has one engineer, so the capability is one person's record.`;

// Trading details shown on /contact. EU B2B buyers check that an invoice can
// actually be raised before they start a procurement conversation, so this is
// a conversion detail, not boilerplate. Every field is optional — a null field
// renders nothing, and if all are null the whole block is omitted.
// TODO(user): fill in once the entity is registered.
export const entity = {
  name: null, // e.g. "Merilight BV"
  vat: null, // e.g. "BE 0123.456.789"
  registered: null, // e.g. "Leuven, Belgium"
};

// Shown next to the contact details. Defense- and pre-competitive work makes
// this a selling point rather than a disclaimer — see docs/positioning.md §7.
export const confidentiality =
  `I work under NDA as a matter of course, and can sign yours before the first call. Some
    of the work on this site is described only at the level its agreements allow.`;
