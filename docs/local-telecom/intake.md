# Intake Questionnaire

Sent before the first site visit. Purpose: arrive already knowing what to look
for, and make the client do the document-gathering rather than burning billable
hours on it.

Italian version to be written once the offer is validated — this is the working
English master.

---

## A. Organisation

- Company name, sector, number of employees on site
- Number of sites, and their addresses
- Site type: office / warehouse or capannone / production floor / hospitality /
  mixed
- Approximate floor area per site, and number of floors
- Building construction: masonry, reinforced concrete, prefab, metal structure
- Who currently handles IT? Internal person, external provider, nobody?
- Is there an existing service contract, and what does it cover?

## B. What's actually wrong

Open question first, before any prompting:

> In your own words, what is the problem you want solved?

Then prompted:

- Does the connection drop? How often, how long, at what times of day?
- Are there areas with no or poor Wi-Fi? Which ones specifically?
- Does anything stop working when the connection fails? What does that cost per
  hour of downtime?
- Are there complaints from guests, customers or staff?
- Has anyone measured anything? What did they find?
- What has been tried already, and by whom?

## C. Documents to request in advance

- [ ] Last 12 months of telecom invoices — fixed lines, mobile, internet, all
      operators
- [ ] All active contracts, including annexes and any SLA
- [ ] Any network diagram, however rough
- [ ] List of internet lines with nominal speed and technology as sold
- [ ] Photographs of the rack / cabinet / wherever the equipment lives
- [ ] Photographs of the router and switch labels (model numbers)
- [ ] Any previous quotes or assessments from other providers

## D. Existing infrastructure

- Internet lines: operator, technology as sold (FTTH / FTTC / FWA / radio),
  nominal down/up, contract end date, monthly cost
- Is there a static public IP?
- Router: make and model. Owned or rented (*canone*)?
- Switches: make, model, managed or unmanaged, PoE?
- Access points: make, model, how many, where?
- Any point-to-point wireless links between buildings?
- Cabling: category, age, who installed it, is there documentation?
- Telephony: traditional centralino, VoIP, hybrid? How many lines and extensions?
- Servers or NAS on site? What runs on them?
- Anything on the production floor that needs the network — machines, PLCs, MES,
  ERP terminals, cameras, badge readers?

## E. Constraints and context

- Budget expectation, if any
- Is a grant, tax credit or public funding involved or possible?
- Any planned expansion, new building, or machine purchase in the next 12 months?
- Any compliance pressure — customer security questionnaires, NIS2 exposure via
  the supply chain, sector-specific requirements?
- Access constraints for a site visit: hours, safety induction, who escorts?
- Is there a "do not touch" list — anything that must not be interrupted?

## F. Decision process

- Who decides? Who signs?
- Who else must be convinced?
- What is the timeline, and what is driving it?
- Is there an incumbent provider whose relationship matters politically?

---

## Site visit kit

- [ ] Laptop with USB 2.5GbE adapter
- [ ] Patch cables, several lengths
- [ ] Wi-Fi survey software, licence active
- [ ] Raspberry Pi probe + PSU (leave-behind for multi-day baseline)
- [ ] Fibre power meter, VFL, inspection scope (once acquired)
- [ ] Phone for photographs — rack, labels, cable runs, connector faces
- [ ] Floor plan, printed, for marking measurement points
- [ ] Torch, and a tape measure

## Baseline measurements to take on site

Record conditions for every measurement: time, location, client device, wired or
wireless, band, what else was running.

- [ ] Wired throughput to the router, sustained, both directions
- [ ] Wired throughput to an external reference server (`iperf3`), sustained
- [ ] Latency and jitter, continuous, minimum 15 minutes
- [ ] Packet loss over the same window
- [ ] Wi-Fi survey walk: signal, noise, SNR, channel utilisation per area
- [ ] Channel occupancy and co-channel interference, both bands
- [ ] Client count per AP at peak
- [ ] Fibre loss end-to-end, and connector inspection, where fibre is present
- [ ] PoE budget in use vs switch capacity
- [ ] Leave the probe running 7 days where the complaint is intermittent
