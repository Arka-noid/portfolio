import { services } from "../data/services";
import { perspectives } from "../data/perspectives";
import { siteImages } from "../data/images";
import Perspective from "./Perspective";
import ThemedImage from "./ThemedImage";

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
      <div className="svc-grid">
        {services.map((s, i) => (
          <div key={i} className="svc-card reveal">
            <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="svc-title">{s.title}</h3>
            <p className="svc-pitch">{s.pitch}</p>
            <p className="svc-proof">
              <span>Proof</span> {s.proof}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
