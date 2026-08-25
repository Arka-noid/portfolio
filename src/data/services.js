// The offer ladder, ordered by commitment — see docs/positioning.md §9.
// Each entry is a buyable engagement, not a skill: who it is for, the problem
// it removes, what the client receives, and roughly how long it takes.
// `adjacent` names the adjacent field an offer reaches into, so breadth is
// attached to a sellable outcome rather than listed on its own.
// Rendered by components/Services.jsx (full) and ServicesTeaser.jsx (home).
export const services = [
  {
    id: "design-review",
    title: "Photonic Design Review",
    forWho: "Teams about to commit to a tape-out, a build, or a funding milestone.",
    problem:
      "An independent read on your photonic design before the expensive decision — architecture, device choices, tolerances, and the assumptions nobody has re-checked since the concept phase.",
    deliverable:
      "Written findings and a ranked risk register: what will break, where, and what it costs to fix now versus after tape-out.",
    shape: "Fixed scope · 1–2 weeks",
    proof:
      "Design and validation across four material platforms — SOI, SiN, InP and III-V antimonides — from PDK validation benchmarks at imec to space-qualified multi-chip assemblies.",
    adjacent: [],
  },
  {
    id: "architecture",
    title: "System Architecture & Link Budget",
    forWho:
      "Programs where the signal crosses domains — optical to RF, chip to module to free space.",
    problem:
      "The architecture that survives the whole chain, not just the part your team owns. Link budgets built to be argued with, and trade-offs made explicit before they become schedule.",
    deliverable:
      "System architecture, a validated link-budget model you keep and can rerun, and the trade-off analysis behind every branch of it.",
    shape: "3–8 weeks",
    proof:
      "Hybrid SiN–InP receiver architecture for the EU SPACEBEAM programme, with a full analog link budget built in VPI and validated against measured hardware rather than simulation alone.",
    adjacent: ["RF, microwave & radar"],
  },
  {
    id: "trl-maturation",
    title: "TRL Maturation & Industrial Handover",
    forWho: "Startups and R&D groups with a working demo and a product deadline.",
    problem:
      "The stretch where most photonics projects die: chip to module to system, a verification plan that means something, and documentation an industrial team can build from without you in the room.",
    deliverable:
      "Verification plan, integration roadmap, and handover documentation that survives the transfer.",
    shape: "Ongoing engagement · 3–12 months",
    proof:
      "Led the TRL 3→6 transition of a programmable photonic mesh chip for a deep-tech startup at imec, including the system documentation written for industrial technology transfer.",
    adjacent: ["Product strategy & due diligence"],
  },
  {
    id: "platform-pdk",
    title: "Platform, PDK & Design-Flow Enablement",
    forWho:
      "Foundries, platform owners and design teams whose results are not reproducible.",
    problem:
      "Making a photonic design team fast and repeatable: PDK content, DFT/DFM-aware flows, DoE-driven validation, and the version control and process discipline underneath it.",
    deliverable:
      "PDK components and documentation, a DoE validation plan, and design and version-control workflows the team keeps using after you leave.",
    shape: "Ongoing engagement",
    proof:
      "Supported the first imec SiN platform PDK through DoE and validation benchmarks; established Git and Jira workflows adopted across teams.",
    adjacent: ["Semiconductor process, fab & DFM"],
  },
  {
    id: "due-diligence",
    title: "Technical Due Diligence & Product Strategy",
    forWho:
      "Investors, acquirers and boards being told a photonics story they cannot check.",
    problem:
      "Whether the technology is real, whether it can be manufactured, and how far it actually is from a product — separated from the pitch.",
    deliverable:
      "An assessment memo: what holds up, what does not, where the technical risk sits, and what would have to be true for the roadmap to work.",
    shape: "Fixed scope · 1–2 weeks",
    proof:
      "Product positioning and early commercialisation work on a programmable photonic processor at imec, backed by 32 peer-reviewed publications across the field being assessed.",
    adjacent: ["Product strategy & due diligence"],
  },
];

// Counted proof shown above the offer grid. Every figure traces to a data file
// — see docs/positioning.md §6. `value` is split so the suffix can be accented.
export const serviceProof = [
  { value: "10", suffix: "+", label: "Years across the stack" },
  { value: "4", label: "Material platforms designed on" },
  { value: "3→6", label: "TRL transition led end to end" },
  { value: "10", suffix: "+", label: "Partner organizations coordinated" },
];

// Background credibility, deliberately not sold as a service — see
// docs/positioning.md §8.
export const serviceFootnote =
  "Engagements often sit inside EU-funded consortia. Manuel has led a Horizon work package and coordinated 10+ partner organizations, so the programme mechanics are familiar — but we are hired for the engineering, not the paperwork.";
