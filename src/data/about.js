// The firm and the person are two exports because they are two pages. /about
// speaks as Merilight and says "we"; /profile speaks as Manuel and says "I".
// Keeping both voices in one object is what let them leak into one page — see
// docs/positioning.md §7.

export const aboutPage = {
  heading: "What Merilight is",
  team: {
    eyebrow: "The team",
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
  // The site says "we" because Merilight is the firm — but a buyer who
  // *discovers* it is one person feels misled, while one who is *told* does
  // not. Stating it plainly converts the weakness into a trust signal.
  structure:
    `Merilight is Manuel Reza. The person you brief
      is the person who does the work.`,

  // Firm voice throughout: what Merilight is, why the gaps are where products
  // fail, and how it is engaged. Traces to docs/positioning.md §1–§5; no
  // figure or claim here that is not already elsewhere in src/data (§6).
  paragraphs: [
    `We are an engineering studio specialized in solving problems in optical and photonic
      systems`,

    `We help teams moving from devices and demonstrations to working systems by resolving
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
      chain — from designing and etching III-V quantum-well devices in a Glasgow cleanroom, to
      architecting microwave-photonic receivers for spaceborne radar in Pisa, to maturing
      silicon photonics platforms and products at imec in Leuven.`,
    `That breadth is the point: I speak device physics with fab engineers, link budgets with
      system architects, and roadmaps with product owners — and I translate between them. Most
      photonics projects fail in the gaps between those worlds; my job is closing them.`,
    `Today the field is moving fast — AI infrastructure is pulling optics into the compute
      path, from co-packaged interconnect to circuits that compute with light; coherent
      sensing is going solid-state; and Europe is investing seriously in photonic sovereignty.
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
  `Merilight has one engineer, so the firm's capability is one person's record. This is
    where it was built — three institutions, one stack, ten years of it.`;

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
  `We work under NDA as a matter of course, and can sign yours before the first call. Some
    of the work on this site is described only at the level its agreements allow.`;
