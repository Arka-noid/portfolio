import { entity, confidentiality } from "../data/about";

// `pageTitle` renders the heading as an h1 for /contact, where this is the
// only content on the page; Home and Services already have their own h1 and
// get the default h2.
export default function Contact({ pageTitle = false }) {
  const entityLine = [entity.name, entity.registered, entity.vat && `VAT ${entity.vat}`]
    .filter(Boolean)
    .join(" · ");
  const Heading = pageTitle ? "h1" : "h2";

  return (
    <div className="contact-section" id="contact">
      <div className="reveal">
        <div className="section-eyebrow" style={{ justifyContent: "center" }}>
          Get in touch
        </div>
        <Heading className="section-title" style={{ marginBottom: "0.5rem" }}>
          Let's build something.
        </Heading>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
          System integration, productization, design reviews, link budgets, device design,
          characterization setups.
        </p>
        <div className="contact-links">
          <a className="contact-link" href="mailto:info@merilight.com">
            <span aria-hidden="true">✉</span> info@merilight.com
          </a>
          <a className="contact-link" href="tel:+393281873926">
            <span aria-hidden="true">📞</span> +39 328 1873926
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
