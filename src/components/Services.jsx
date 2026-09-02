import {
  services,
  serviceProof,
  serviceFootnote,
  serviceScopeStages,
  servicesPage,
} from "../data/services";
import { symptoms } from "../data/symptoms";
import { siteImages } from "../data/images";
import ThemedImage from "./ThemedImage";
import ServiceProofStrip from "./ServiceProofStrip";

const symptomsByOffer = symptoms.reduce((groups, symptom) => {
  if (!groups.has(symptom.offer)) groups.set(symptom.offer, []);
  groups.get(symptom.offer).push(symptom);
  return groups;
}, new Map());

// The primary sales page — docs/positioning.md §9.
//
// Order is the whole point: the buyer meets the three engagements first, and
// their own symptoms are quoted inside the strip that answers them. The market
// perspective and the proof strip used to sit above the grid and pushed the
// offers roughly four screens down; the perspective now lives on the page
// beside MarketsStrip, and the counted proof reads as credibility after the
// pitch rather than as a preamble to it.
//
// The heading and promise line are §9's, verbatim. The thesis is stated once
// on this page, here: the failure is at the seams between domains, and the
// three engagements are the three sides of that seam.
export default function Services() {
  // The split is applied only when the image slot is actually set. The
  // alternative — a 1fr base promoted by :has(.themed-img) — still leaves a
  // dead column when a set image 404s, because ThemedImage hides the figure
  // with display:none and it stays in the DOM. Deciding in JS from the slot
  // handles the null case exactly, which is the one that ships today.
  const sideImage = siteImages.servicesSide;
  const copy = servicesPage;

  return (
    <section id="services">
      <div className={`svc-head-block reveal${sideImage ? " svc-split" : ""}`}>
        <div>
          <div className="section-eyebrow">{copy.eyebrow}</div>
          <h1 className="section-title svc-h2">
            {copy.heading}
          </h1>
          <p className="svc-promise">
            {copy.promise}
          </p>
        </div>
        {sideImage && (
          <ThemedImage src={sideImage} variant="panel" />
        )}
      </div>

        {/* Full-width strips rather than the two-up card grid the home-page
          teaser uses. Each offer's copy is long — buyer symptoms and a
          deliverable list — and in a half-width card that ran to a dozen short
          lines. The strip splits it: identity (number, title, shape, who it is
          for) on the left rail, the argument on the right, so the three
          engagements read as a ladder down the page instead of a 2×2 block with
          one card orphaned across the bottom row. */}
      <div className="svc-strips">
        {services.map((s) => {
          const serviceSymptoms = (symptomsByOffer.get(s.id) || []).slice(0, 2);

          return (
            <article key={s.id} id={`offer-${s.id}`} className="svc-strip reveal">
              <div className="svc-strip-aside">
                {/* <span className="svc-num">{String(i + 1).padStart(2, "0")}</span> */}
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-shape">{s.shape}</p>
                <p className="svc-for">
                  <span>{copy.forLabel}</span> {s.forWho}
                </p>
              </div>
              <div className="svc-strip-main">
                {serviceSymptoms.length > 0 && (
                  <ul className="svc-quotes" aria-label={copy.symptomsAriaLabel}>
                    {serviceSymptoms.map((symptom) => (
                      <li key={symptom.id}>
                        <blockquote>{symptom.text}</blockquote>
                      </li>
                    ))}
                  </ul>
                )}
                <ul className="svc-items">
                  {s.items.map((item) => (
                    <li key={item.label}>
                      <span className="svc-item-label">{item.label}:</span> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      <div className="svc-continuation reveal">
        <div className="section-eyebrow">{copy.continuationEyebrow}</div>
        <ol className="svc-continuation-track">
          {serviceScopeStages.map((stage) => (
            <li key={stage}>{stage}</li>
          ))}
        </ol>
        <p>{serviceFootnote}</p>
      </div>

      {/* <ServiceProofStrip items={serviceProof} />  */}
    </section>
  );
}
