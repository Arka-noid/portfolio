import { services, serviceProof, serviceFootnote } from "../data/services";
import { perspectives } from "../data/perspectives";
import { siteImages } from "../data/images";
import Perspective from "./Perspective";
import ThemedImage from "./ThemedImage";
import ServiceProofStrip from "./ServiceProofStrip";

export default function Services() {
  return (
    <section id="services">
      <div className="reveal">
        <div className="section-eyebrow">Consulting</div>
        <h2 className="section-title">How I Can Help</h2>
      </div>
      <div className="reveal">
        <ThemedImage
          src={siteImages.servicesBanner}
          variant="panel"
          caption="Optical transceivers seated in a switch faceplate — where device physics meets deployed volume"
        />
      </div>
      <Perspective>{perspectives.services}</Perspective>
      <ServiceProofStrip items={serviceProof} />
      <div className="svc-grid">
        {services.map((s, i) => (
          <div key={s.id} className="svc-card reveal">
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
      <p className="svc-footnote reveal">{serviceFootnote}</p>
    </section>
  );
}
