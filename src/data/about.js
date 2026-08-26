export const about = {
  // TODO(user): drop a portrait into public/ (e.g. "/portrait.jpg") and set
  // the path here to show the photo. Leave null to hide the slot.
  photoUrl: null,

  // TODO(user): to enable the CV button, either place a *sanitized, public*
  // cv.pdf in public/ and set "/cv.pdf", or point at an external link
  // (e.g. a Drive share). Per repo rules, binary reference files are not
  // committed casually — add the PDF in a deliberate commit if self-hosting.
  cvUrl: null,

  // The site says "we" because Merilight is the firm — but a buyer who
  // *discovers* it is one person feels misled, while one who is *told* does
  // not. Stating it plainly converts the weakness into a trust signal.
  // Rendered at the top of /about.
  structure:
    "Merilight is Manuel Reza — an independent engineer, not an agency. The person you brief is the person who does the work.",

  paragraphs: [
    "I'm an optical systems engineer who has worked at every altitude of the photonics value chain — from designing and etching III-V quantum-well devices in a Glasgow cleanroom, to architecting microwave-photonic receivers for spaceborne radar in Pisa, to maturing silicon photonics platforms and products at imec in Leuven.",
    "That breadth is the point: I speak device physics with fab engineers, link budgets with system architects, and roadmaps with product owners — and I translate between them. Most photonics projects fail in the gaps between those worlds; my job is closing them.",
    "Today the field is moving fast — AI infrastructure is pulling optics into the compute path, from co-packaged interconnect to circuits that compute with light; coherent sensing is going solid-state; and Europe is investing seriously in photonic sovereignty. The couplers, hybrid assemblies, multiplexers and mesh processors those roadmaps are built from are the things I have spent the last decade designing, integrating and measuring. I help teams turn that momentum into working hardware.",
  ],

  // TODO(user): confirm degree titles, institutions, and years before
  // publishing — left empty so nothing unverified renders.
  education: [],
};

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
  "We work under NDA as a matter of course, and can sign yours before the first call. Some of the work on this site is described only at the level its agreements allow.";
