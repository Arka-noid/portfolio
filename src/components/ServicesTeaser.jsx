import { Link } from "react-router-dom";
import { services, serviceProof } from "../data/services";
import { perspectives } from "../data/perspectives";
import Perspective from "./Perspective";
import ServiceProofStrip from "./ServiceProofStrip";

export default function ServicesTeaser() {
  return (
    <section id="services">
      <div className="reveal">
        <div className="section-eyebrow">Consulting</div>
        <h2 className="section-title">How We Can Help</h2>
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
          </div>
        ))}
      </div>
      <Link className="hero-cta teaser-cta reveal" to="/services">
        See all services →
      </Link>
    </section>
  );
}
