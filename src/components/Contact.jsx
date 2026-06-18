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
          Open to roles in optical systems, photonic integration, and deep-tech
          product development.
        </p>
        <div className="contact-links">
          <a className="contact-link" href="mailto:ma.reza29@gmail.com">
            ✉ ma.reza29@gmail.com
          </a>
          <a className="contact-link" href="tel:+393281873926">
            📞 +39 328 1873926
          </a>
          <span className="contact-link">📍 Leuven, Belgium</span>
        </div>
      </div>
    </div>
  );
}
