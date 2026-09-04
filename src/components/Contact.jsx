import { entity, confidentiality } from "../data/about";
import { contactPage } from "../data/pages/contact";
import ContactForm from "./ContactForm";

// `pageTitle` renders the heading as an h1 for /contact, where this is the
// only content on the page; Home and Services already have their own h1 and
// get the default h2.
//
// `form` adds the lead-capture form. It is opt-in rather than always-on
// because this component is also the closing CTA on Home and Services, where a
// full form would outweigh the section it is closing — there, the links alone
// are the CTA and the page's own hero button already points at /contact.
export default function Contact({ pageTitle = false, form = false }) {
  const entityLine = [entity.name, entity.registered, entity.vat && `VAT ${entity.vat}`]
    .filter(Boolean)
    .join(" · ");
  const Heading = pageTitle ? "h1" : "h2";

  return (
    <div className="contact-section" id="contact">
      <div className="reveal">
        <div className="section-eyebrow" style={{ justifyContent: "center" }}>
          {contactPage.eyebrow}
        </div>
        <Heading className="section-title" style={{ marginBottom: "0.5rem" }}>
          {contactPage.heading}
        </Heading>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
          {contactPage.description}
        </p>
        {form && <ContactForm />}
        <div className="contact-links">
          <a className="contact-link" href={contactPage.email.href}>
            <span aria-hidden="true">✉</span> {contactPage.email.label}
          </a>
          <a className="contact-link" href={contactPage.phone.href}>
            <span aria-hidden="true">📞</span> {contactPage.phone.label}
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
