import { Link } from "react-router-dom";
import automatedTestDiagram from "../assets/service-icons/automated-test.svg";
import prototypeIntegrationDiagram from "../assets/service-icons/prototype-integration.svg";
import systemArchitectureDiagram from "../assets/service-icons/system-architecture.svg";
import { services } from "../data/services";
import { homePage } from "../data/pages/home";

const serviceDiagrams = {
  "system-architecture": systemArchitectureDiagram,
  "prototype-integration": prototypeIntegrationDiagram,
  characterization: automatedTestDiagram,
};

export default function ServicesTeaser() {
  const { services: copy } = homePage;

  return (
    <section id="services">
      <div className="reveal">
        <div className="section-eyebrow">{copy.eyebrow}</div>
        <h2 className="section-title">{copy.heading}</h2>
      </div>
      <ol className="service-teaser-list">
        {services.map((s) => (
          <li key={s.id} className="service-teaser-item reveal">
            <img className="service-teaser-diagram" src={serviceDiagrams[s.id]} alt="" />
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
