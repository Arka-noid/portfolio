import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { homePage } from "../data/pages/home";

function ServiceDiagram({ serviceId }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
  };

  if (serviceId === "system-architecture") {
    return (
      <svg viewBox="0 0 72 44" aria-hidden="true">
        <path {...commonProps} d="M4 22h24c10 0 10-13 20-13h20" />
        <path {...commonProps} d="M28 22c10 0 10 13 20 13h20" />
        <circle cx="4" cy="22" r="2.5" fill="currentColor" />
        <circle cx="68" cy="9" r="2.5" fill="currentColor" />
        <circle cx="68" cy="35" r="2.5" fill="currentColor" />
      </svg>
    );
  }

  if (serviceId === "prototype-integration") {
    return (
      <svg viewBox="0 0 72 44" aria-hidden="true">
        <rect {...commonProps} x="4" y="12" width="21" height="20" />
        <rect {...commonProps} x="47" y="7" width="21" height="30" />
        <path {...commonProps} d="M25 17h11v-5h11M25 27h11v5h11" />
        <circle cx="14.5" cy="22" r="3" {...commonProps} />
        <circle cx="57.5" cy="16" r="2" fill="currentColor" />
        <circle cx="57.5" cy="28" r="2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 72 44" aria-hidden="true">
      <path {...commonProps} d="M7 31c8-1 9-18 18-18 8 0 9 18 18 18 7 0 9-10 15-15" />
      <path {...commonProps} d="M58 16h8v8" />
      <path {...commonProps} d="M66 24c-8 12-21 14-32 9" />
      <path {...commonProps} d="M34 33l4-4m-4 4 5 2" />
      <circle cx="7" cy="31" r="2.5" fill="currentColor" />
    </svg>
  );
}

export default function ServicesTeaser() {
  const { services: copy } = homePage;
  const [treatment, setTreatment] = useState("number");

  return (
    <section id="services">
      <div className="reveal">
        <div className="section-eyebrow">{copy.eyebrow}</div>
        <h2 className="section-title">{copy.heading}</h2>
      </div>
      <div className="service-teaser-treatment reveal" aria-label="Service teaser treatment">
        <button
          type="button"
          className={treatment === "number" ? "is-active" : ""}
          aria-pressed={treatment === "number"}
          onClick={() => setTreatment("number")}
        >
          Numbers
        </button>
        <button
          type="button"
          className={treatment === "diagram" ? "is-active" : ""}
          aria-pressed={treatment === "diagram"}
          onClick={() => setTreatment("diagram")}
        >
          Diagrams
        </button>
      </div>
      <ol className="service-teaser-list">
        {services.map((s, i) => (
          <li key={s.id} className="service-teaser-item reveal">
            {treatment === "number" ? (
              <span className="service-teaser-num">{String(i + 1).padStart(2, "0")}</span>
            ) : (
              <span className="service-teaser-diagram">
                <ServiceDiagram serviceId={s.id} />
              </span>
            )}
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
