import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function ServicesTeaser() {
  return (
    <section id="services">
      <div className="reveal">
        <div className="section-eyebrow">Services</div>
        <h2 className="section-title">Three ways to move the hardware forward.</h2>
      </div>
      <ol className="service-teaser-list">
        {services.map((s, i) => (
          <li key={s.id} className="service-teaser-item reveal">
            <span className="service-teaser-num">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{s.title}</h3>
            <p>{s.problem}</p>
          </li>
        ))}
      </ol>
      <Link className="hero-cta teaser-cta reveal" to="/services">
        Explore the engagements →
      </Link>
    </section>
  );
}
