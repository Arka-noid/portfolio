# Local Telecom Consultancy — Working Plan

Personal planning notes for a side activity: independent telecom and network
consultancy for small Italian enterprises and institutions. Not site content —
nothing in `docs/` is part of the Vite build or reaches merilight.com.

Status: exploratory. Nothing here is committed to publicly yet.

---

## 1. What this business is

Independent, vendor-neutral assessment of connectivity, telecom spend, and small
network infrastructure for organisations of roughly 10–50 people: light industry,
hospitality, clinics, agricultural consortia, small comuni, professional bodies.

The core proposition is the one thing structurally unavailable to them today:
**advice from someone with no commission riding on the answer, who measures
instead of guessing.**

## 2. Positioning decisions (already taken)

- **No installation.** Measure, specify, verify, document. Hands and ladders go
  to a partner installer. This preserves vendor neutrality, bounds the time
  commitment, avoids stock, warranty and liability exposure.
- **The billable unit** is a site visit plus a document.
- **Kept separate from the Merilight brand.** Merilight sells photonic system
  architecture in English to a deep-tech audience; this sells in Italian to SMEs.
  Mixing them dilutes the first and doesn't help the second. Separate page,
  ideally separate domain later.
- **The photonics CV is a trust signal, not content.** "PhD, built satellite
  radar receivers" earns the meeting. Nobody local wants to read about SiN PDKs.
- **Website is a proof-of-existence**, not a sales engine. Name, offer, phone,
  enough credibility to be taken seriously. Deals close in person.

## 3. Service catalogue

Ordered by how soon each can realistically be sold.

| # | Service | Deliverable | Equipment |
|---|---|---|---|
| 1 | Grants, tenders, technical annexes, perizie | Written document | None |
| 2 | Telecom bill & contract audit | Findings table + renegotiation brief | None |
| 3 | SLA / throughput dispute evidence | Measurement report + operator letter | Laptop, probe |
| 4 | Wi-Fi survey & coverage design | Heatmap, AP plan, spec | Survey licence |
| 5 | Multi-site link design (PtP / FWA / fibre) | Link budget + options with costs | Laptop |
| 6 | Redundancy & failover design | Topology + failover spec | Laptop |
| 7 | Network segmentation & hygiene | Audit + remediation plan | Lab experience |
| 8 | VoIP / centralino migration | Migration plan, project oversight | None |
| 9 | Supply-chain security questionnaires (NIS2-driven) | Completed questionnaire + gap fixes | None |

Note that #1 and #2 — the two that can be sold immediately with no new skill and
no equipment — are also among the best-paying. Sequence accordingly.

## 4. Competence map

| Service | Competence required | Current gap | Time to close |
|---|---|---|---|
| Grants / tenders / perizie | Technical writing, EU & PA process | **None** | — |
| Bill & contract audit | Telco commercial, tariff literacy | Medium | 2–3 weeks |
| SLA dispute | Measurement method, TCP/IP basics | Small | Days |
| Wi-Fi survey | RF propagation, practical Wi-Fi | Small (RF is a strength) | 3–4 weeks |
| Multi-site links | Link budget, PtP gear, routing | Small physics / medium routing | 3–4 weeks |
| Redundancy | Dual-WAN, failover behaviour | Medium | Lab work |
| Segmentation & hygiene | VLANs, firewalling, switching | **Largest** | 2–3 months |
| VoIP migration | SIP, provider landscape | Medium | 3–4 weeks |

### Existing strengths that transfer directly

- Measurement discipline — a number without stated conditions is not a result.
- Link budgets — identical arithmetic, worse components.
- Root-cause analysis across optical/electronic/software layers.
- Technical documents that survive handover; the deliverable *is* a document.
- Critically reading a vendor spec. An SLA is a spec with lawyers attached.

### Honest weakness

Never worked on live, undocumented, legacy infrastructure owned by someone else.
The measurement is not the hard part; the mess is.

## 5. Gap checklist

### Gap A — IP networking practice (largest, blocking service #7)

- [ ] Subnetting and addressing fluently, without a calculator
- [ ] VLANs and 802.1Q trunking; access vs trunk ports
- [ ] Inter-VLAN routing; static routes
- [ ] DHCP scopes, relay, exhaustion, rogue servers
- [ ] DNS resolution paths and common failure modes
- [ ] NAT, port forwarding, double-NAT diagnosis
- [ ] Firewall rule design; default-deny posture
- [ ] PoE standards and power budgeting
- [ ] Spanning tree — enough to recognise a loop
- [ ] Duplex/MTU mismatch symptoms
- [ ] Site-to-site and client VPN setup
- [ ] Reading a switch/router config cold

### Gap B — Telco commercial domain

- [ ] FTTH vs FTTC vs FWA vs radio — real delivered performance, not brochure
- [ ] Open Fiber / TIM wholesale layer and what it constrains
- [ ] Which SLA clauses bite and which are decoration
- [ ] Typical contract traps: auto-renewal, router *canone*, minimum terms
- [ ] Business tariff landscape and what is negotiable at renewal
- [ ] Read 10 real contracts end to end (own, family, friendly firms)

### Gap C — Field practice

- [ ] Structured cabling categories and norms
- [ ] Patch panel and rack conventions
- [ ] Connector types, fibre and copper, and their failure modes
- [ ] The dumb-fault catalogue: dirty ferrule, kinked cable, cheap unmanaged
      switch, printer answering DHCP, half-duplex negotiation
- [ ] Three site visits completed (free or near-free) with written reports

## 6. Lab build list

Target ~€300–400, used gear is fine. Purpose is to break things deliberately.

- [ ] Mini-PC running OPNsense (or a MikroTik router) — €80–150
- [ ] Managed PoE switch, 8-port — €60–120
- [ ] Two access points, Ubiquiti or MikroTik — €80–160
- [ ] USB 2.5GbE adapter — €25
- [ ] Assorted patch cables, a PoE injector — €30
- [ ] Raspberry Pi as a leave-behind measurement probe — €80

### Lab exercises (treat as a DoE — record conditions and results)

- [ ] Build three VLANs; route two, deliberately isolate the third
- [ ] Break inter-VLAN routing and diagnose it from symptoms alone
- [ ] Exhaust a DHCP scope; observe client behaviour
- [ ] Introduce a rogue DHCP server; detect it
- [ ] Configure dual-WAN failover; measure actual failover time
- [ ] Force a duplex mismatch; characterise the throughput signature
- [ ] Build a PtP wireless link across the building; predict then measure
- [ ] Run a scheduled `iperf3` + latency probe for 7 days; produce the graph
- [ ] Capture and read a Wireshark trace of a slow file transfer

## 7. Learning path

- [ ] **CCNA syllabus** — study the material, exam optional. The content is
      precisely Gap A. Credibility doesn't come from the certificate.
- [ ] **CWNA** — worth actually sitting. Vendor-neutral RF and Wi-Fi, leans on an
      existing strength, easy given the background, and genuinely recognised in
      the one niche where out-engineering everyone local is realistic.
- [ ] Read 10 real telecom contracts (Gap B).
- [ ] Two or three free/cheap jobs on friendly sites — own premises, family
      business, a friend's firm. Purpose is the protocol and before/after data,
      not the fee.

## 8. Field equipment — buy triggers

**Buy nothing before the first paid engagement.** Services #1, #2, #3 and #5 need
only a laptop, `iperf3`, Wireshark and a Wi-Fi analyser app.

After the first paid job (~€400–800 total):

- [ ] Fibre power meter + VFL — €150–250. End-to-end loss, in or out of spec.
- [ ] Fibre inspection scope — €200–350. Dirty connectors are the most common
      fibre fault, and showing a filthy ferrule on screen is the single most
      persuasive demonstration available.
- [ ] Wi-Fi survey software licence, NetSpot-class — ~€150.
- [ ] Spare AP for testing — €60.

**Do not buy:**

- OTDR (€3–8k) — rent it, or subcontract fibre certification.
- Ekahau (€4k+) — that's for full-time Wi-Fi professionals.
- RF spectrum analyser — an RTL-SDR at €30 answers most questions at this scale.

## 9. Standard methodology

One repeatable protocol per service. This is V&V, already familiar.

1. **Intake** — fixed questionnaire; bills, contracts and topology requested in
   advance. See `intake.md`.
2. **Baseline** — measure before touching anything. Wired and wireless, over
   time rather than once, with conditions recorded.
3. **Analysis** — findings ranked by cost impact, each tied to evidence.
4. **Recommendation** — options with trade-offs and prices, vendor-neutral.
5. **Verification** — if they act, re-measure and prove the delta.

Step 5 is the differentiator and is a direct import from existing practice.

## 10. Suggested sequencing

**Months 1–2.** Sell services #1 and #2 only — no new skill, no equipment. Read
10 contracts. Build the lab. Start the CCNA syllabus.

**Months 3–4.** Add #3 and #5. Do the free site visits. Sit CWNA. Buy the fibre
meter and inspection scope out of the first fees.

**Months 5–6.** Add #4 and #6. Take #7 only once the lab has stopped producing
surprises.

**Ongoing.** #8 and #9 as they come; both are mostly project management and
writing.

## 11. Open questions to resolve

- [ ] **Geography** — Italy (Pisa/Tuscany) or Belgium? Decides language, funding
      regime, and professional-registration route. Assumed Italy throughout.
- [ ] **Ordine degli Ingegneri** — currently iscritto, or eligible? Determines
      whether *perizie asseverate* are available. If yes, that becomes the
      headline service rather than a footnote.
- [ ] **Transizione 4.0 / 5.0** — verify current status of the scheme, the
      spending thresholds requiring a sworn appraisal, and the insurance and PEC
      requirements. Do not design an offer around a regime mid-revision.
- [ ] **RC professionale insurance** — cost and cover. Needed before advising on
      decisions clients act on; also a credibility signal.
- [ ] **Partner installer** — identify one or two local firms willing to take the
      hands-on work on referral.
- [ ] **Pricing** — day rate vs fixed-price packages vs share-of-savings for the
      bill audit. Likely fixed-price for #2–#6, value-priced for #1.
- [ ] **Legal form** — partita IVA regime, and whether the side activity conflicts
      with the current employment contract.
