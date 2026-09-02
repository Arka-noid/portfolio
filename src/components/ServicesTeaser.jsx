import { Link } from "react-router-dom";
import { services } from "../data/services";
import { homePage } from "../data/pages/home";

export default function ServicesTeaser() {
  const { services: copy } = homePage;

  return (
    <section id="services">
      <div className="reveal">
        <div className="section-eyebrow">{copy.eyebrow}</div>
        <h2 className="section-title">{copy.heading}</h2>
      </div>
      <ol className="service-teaser-list">
        {services.map((s, i) => (
          <li key={s.id} className="service-teaser-item reveal">
            
            <h3>{s.title}</h3>
            <p>{s.problem}</p>
          </li>
        ))}
      </ol>
      <Link className="hero-cta teaser-cta reveal" to="/services">
        {copy.action}
      </Link>
    </section>
  );
}
