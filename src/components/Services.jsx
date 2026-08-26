import { services, serviceProof, serviceFootnote } from "../data/services";
import { symptoms } from "../data/symptoms";
import { siteImages } from "../data/images";
import ThemedImage from "./ThemedImage";
import ServiceProofStrip from "./ServiceProofStrip";
import SymptomRouter from "./SymptomRouter";

// The primary sales page — docs/positioning.md §9.
//
// Order is the whole point: the buyer meets their own symptom, then the three
// engagements, and nothing else comes before them. The market perspective and
// the proof strip used to sit above the grid and pushed the offers roughly
// four screens down; the perspective now lives on the page beside
// MarketsStrip, and the counted proof reads as credibility after the pitch
// rather than as a preamble to it.
//
// The heading and promise line are §9's, verbatim. The thesis is stated once
// on this page, here.
export default function Services() {
  // The split is applied only when the image slot is actually set. The
  // alternative — a 1fr base promoted by :has(.themed-img) — still leaves a
  // dead column when a set image 404s, because ThemedImage hides the figure
  // with display:none and it stays in the DOM. Deciding in JS from the slot
  // handles the null case exactly, which is the one that ships today.
  const sideImage = siteImages.servicesSide;

  return (
    <section id="services">
      <div className={`svc-head-block reveal${sideImage ? " svc-split" : ""}`}>
        <div>
          <div className="section-eyebrow">Consulting</div>
          <h2 className="section-title svc-h2">
            Which layer is your problem in?
          </h2>
          <p className="svc-promise">
            Three engagements, one job: find where a photonic programme will
            actually fail, before the budget is committed to finding out.
          </p>
        </div>
        {sideImage && (
          <ThemedImage src={sideImage} variant="panel" />
        )}
      </div>

      <SymptomRouter items={symptoms} />

      <div className="svc-grid">
        {services.map((s, i) => (
          <div key={s.id} id={`offer-${s.id}`} className="svc-card reveal">
            <div className="svc-head">
              <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="svc-shape">{s.shape}</span>
            </div>
            <h3 className="svc-title">{s.title}</h3>
            <p className="svc-for">
              <span>For</span> {s.forWho}
            </p>
            <p className="svc-pitch">{s.problem}</p>
            <p className="svc-deliver">
              <span>You get</span> {s.deliverable}
            </p>
            <p className="svc-proof">
              <span>Proof</span> {s.proof}
            </p>
            {s.adjacent.length > 0 && (
              <ul className="svc-adjacent">
                {s.adjacent.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <ServiceProofStrip items={serviceProof} />
      <p className="svc-footnote reveal">{serviceFootnote}</p>
    </section>
  );
}
