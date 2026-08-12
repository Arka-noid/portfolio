import { Link } from "react-router-dom";
import { services } from "../data/services";
import { perspectives } from "../data/perspectives";
import Perspective from "./Perspective";

export default function ServicesTeaser() {
  return (
    <section id="services">
      <div className="reveal">
        <div className="section-eyebrow">Consulting</div>
        <h2 className="section-title">How I Can Help</h2>
      </div>
      <Perspective>{perspectives.services}</Perspective>
      <div className="svc-grid">
        {services.map((s, i) => (
          <div key={i} className="svc-card reveal">
            <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="svc-title">{s.title}</h3>
            <p className="svc-pitch">{s.pitch}</p>
          </div>
        ))}
      </div>
      <Link className="hero-cta teaser-cta reveal" to="/services">
        See all services →
      </Link>
    </section>
  );
}
