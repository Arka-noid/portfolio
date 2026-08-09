import { SCHOLAR_URL } from "../data/publications";

export default function Contact() {
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
          Available for consulting engagements and senior roles — photonic
          system architecture, TRL maturation, and EU project leadership.
        </p>
        <div className="contact-links">
          <a className="contact-link" href="mailto:ma.reza29@gmail.com">
            <span aria-hidden="true">✉</span> ma.reza29@gmail.com
          </a>
          <a className="contact-link" href="tel:+393281873926">
            <span aria-hidden="true">📞</span> +39 328 1873926
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/manuel-reza-50991384"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">🔗</span> LinkedIn
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
      </div>
    </div>
  );
}
