# Assessment Report — Template

The deliverable. Structure is deliberately conservative: an SME owner should be
able to read section 1 alone and know what to do, while a technical reader can
verify every claim from the evidence in the appendix.

Length target: 6–12 pages. Longer is not better and signals padding.

---

```
[Client name]
Independent assessment of telecom and network infrastructure
[Site address]
Site visit: [date]   Report: [date]
Prepared by: [name, qualification, Ordine registration if applicable]
```

## 1. Executive summary

Half a page, non-technical, no jargon. Three parts:

- **What was found** — three to five sentences.
- **What it costs today** — in euros per month, or hours of downtime, or both.
- **What is recommended** — ranked, with total cost and expected payback.

Written last. If a section-1-only reader can't make a decision from it, rewrite.

## 2. Scope and method

- What was assessed, and explicitly what was not.
- Dates, duration, and who was present.
- Instruments and software used, with versions.
- Measurement conditions: normal working hours or not, production running or not.
- Limitations and any access that was denied.

State assumptions explicitly. Never present an estimate as a measurement.

## 3. Current state

### 3.1 Contracts and spend

| Line / service | Operator | Technology | Nominal | Monthly cost | Contract end |
|---|---|---|---|---|---|

Total current monthly telecom spend: € ___

### 3.2 Infrastructure

Topology diagram — hand-drawn and redrawn cleanly is fine. Then an inventory
table of routers, switches, APs, links, with make, model, age and ownership.

### 3.3 Measured performance

Every entry gets: value, units, conditions, and method.

| Measurement | Result | Conditions | Method |
|---|---|---|---|

Where a measurement contradicts what is being paid for, say so here plainly and
carry it into section 4.

## 4. Findings

One numbered subsection per finding, ranked by annual cost impact. Each one:

- **Finding** — one sentence, stated as fact.
- **Evidence** — the measurement or document reference, pointing to the appendix.
- **Impact** — euros per year, or downtime hours per year, or a stated risk.
- **Confidence** — high / medium / low, with the reason if not high.

Findings are separated from recommendations on purpose. A finding is what is
true; a recommendation is a judgement about what to do. Keeping them apart is
what makes the report defensible when a vendor disputes it.

## 5. Recommendations

One subsection per recommendation, cross-referenced to findings.

- **Recommendation** and which finding it addresses.
- **Options** — normally two or three, with trade-offs stated honestly.
- **Indicative cost** — capital and recurring, separately.
- **Expected outcome**, stated as a measurable target so it can be verified later.
- **Effort and disruption** — who does the work, how long, what stops.
- **Priority** — immediate / short term / when convenient.

Rules:

- No brand is recommended without stating why, and an alternative is always
  named. No commission is taken from any supplier, and the report says so.
- "Do nothing" is a legitimate option and appears wherever it's defensible.
- Costs are indicative and labelled as such unless a quote is attached.

## 6. Proposed verification

State up front how success will be measured after implementation, and when the
re-measurement happens. This is the step nobody else in this market offers and
it should be visible in the document, not just performed.

| Target | Current value | Target value | How verified | When |
|---|---|---|---|---|

## 7. Appendix — evidence

- Raw measurement logs and graphs.
- Wi-Fi heatmaps per band.
- Photographs, captioned.
- Relevant contract clauses, quoted with reference to page and paragraph.
- Instrument list with serial numbers where certification matters.

---

## Standing declarations to include

- **Independence.** No commercial relationship with any operator, vendor or
  installer named in this report; no commission or referral fee is received.
- **Validity.** Measurements reflect conditions on the stated dates. Network
  behaviour varies with load and external factors.
- **Scope of liability.** Per the engagement letter.

## Notes on writing

- Findings first, always. Never bury the number.
- Every number carries units and conditions. A throughput figure without
  "sustained, wired, TCP, single stream" is not a result.
- Photographs beat prose for physical faults. A picture of a dirty ferrule or a
  rack full of unlabelled cable does the argument on its own.
- The client's language, not the network's. "The connection stops during the
  afternoon shift" is better than "elevated retransmission rates at peak load" —
  keep the technical statement in the evidence.
- Never criticise the incumbent provider personally. State what was measured and
  what was contracted, and let the gap speak.
