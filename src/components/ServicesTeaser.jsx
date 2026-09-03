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
        <rect {...commonProps} x="8" y="7" width="56" height="30" />
        <circle cx="14" cy="13" r="2" {...commonProps} />
        <circle cx="58" cy="13" r="2" {...commonProps} />
        <circle cx="14" cy="31" r="2" {...commonProps} />
        <circle cx="58" cy="31" r="2" {...commonProps} />
        <path {...commonProps} d="M2 19h20m-20 5h20" />
        <circle cx="14" cy="21.5" r="2.5" {...commonProps} />
        <rect {...commonProps} x="27" y="15" width="17" height="13" />
        <path {...commonProps} d="M27 21h11" />
        <path {...commonProps} d="M29 15c0-4 5-4 5 0m2 0c0-4 5-4 5 0" />
        <path {...commonProps} d="M29 28c0 4 5 4 5 0m2 0c0 4 5 4 5 0" />
        <path {...commonProps} d="M44 17h12m-12 5h12m-12 5h12" />
        <path {...commonProps} d="M56 15v14" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 72 44" aria-hidden="true">
      <path {...commonProps} d="M12 7h48" />
      <path {...commonProps} d="M22 7l7 14m7-14v14m14-14-7 14" />
      <path {...commonProps} d="M29 21l1.5 3m5.5-3v3m7.5-3-1.5 3" />
      <ellipse {...commonProps} cx="36" cy="29" rx="18" ry="7" />
      <path {...commonProps} d="M18 29v7h36v-7" />
      <path {...commonProps} d="M26 29h20" />
      <circle cx="30.5" cy="29" r="1.2" fill="currentColor" />
      <circle cx="36" cy="29" r="1.2" fill="currentColor" />
      <circle cx="41.5" cy="29" r="1.2" fill="currentColor" />
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
