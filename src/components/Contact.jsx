import { SCHOLAR_URL } from "../data/publications";
import { entity, confidentiality } from "../data/about";

export default function Contact() {
  const entityLine = [entity.name, entity.registered, entity.vat && `VAT ${entity.vat}`]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="contact-section" id="contact">
      <div className="reveal">
        <div className="section-eyebrow" style={{ justifyContent: "center" }}>
          Get in touch
        </div>
        <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
          Let's build something.
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
          Available for consulting engagements — independent design review,
          system architecture and link budgets, TRL maturation, and technical
          due diligence. Most engagements start with a fixed-scope design
          review, so you can see how we work before committing to more.
        </p>
        <div className="contact-links">
          <a className="contact-link" href="mailto:info@merilight.com">
            <span aria-hidden="true">✉</span> info@merilight.com
          </a>
          <a className="contact-link" href="tel:+393281873926">
            <span aria-hidden="true">📞</span> +39 328 1873926
          </a>
          <a
            className="contact-link"
            href={SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">🎓</span> Google Scholar
          </a>
        </div>
        {confidentiality && (
          <p className="contact-nda">{confidentiality}</p>
        )}
        {entityLine && <p className="contact-entity">{entityLine}</p>}
      </div>
    </div>
  );
}
