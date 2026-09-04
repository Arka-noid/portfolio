import { useId, useRef, useState } from "react";
import { contactPage } from "../data/pages/contact";

const { form: copy } = contactPage;

const EMPTY = { name: "", email: "", message: "" };

// Matches the handler's check. Deliberately loose — an address is proved by the
// reply landing, not by a regex; this only catches the obviously malformed.
const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate({ name, email, message }) {
  if (!name.trim() || !email.trim() || !message.trim()) return copy.requiredError;
  if (!EMAIL_SHAPE.test(email.trim())) return copy.emailError;
  return "";
}

// The lead-capture form on /contact. Posts to the /api/contact serverless
// function (see api/contact.js), which is what actually sends the mail.
//
// The mailto/tel links stay beside this in Contact.jsx — the form is an
// addition, never a replacement, because a corporate desktop that swallows a
// mailto is exactly the case this exists for and the reverse case exists too.
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  // Posted with the body so the function can reject anything filled in faster
  // than a person could type it.
  const renderedAt = useRef(Date.now());
  const fieldId = useId();

  const update = (field) => (event) =>
    setValues((current) => ({ ...current, [field]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;

    // Caught here rather than on the server, so an empty submit answers
    // instantly instead of spending a round trip to say the same thing.
    const invalid = validate(values);
    if (invalid) {
      setError(invalid);
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          website: event.target.website.value,
          renderedAt: renderedAt.current,
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        // A 400 knows what is wrong with the input and says so; anything else
        // is ours, and the buyer gets the address instead of the reason.
        setError(
          response.status === 400 && body.error ? body.error : copy.errorFallback
        );
        setStatus("error");
        return;
      }

      setStatus("sent");
      setValues(EMPTY);
    } catch {
      setStatus("error");
      setError(copy.errorFallback);
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-form-sent" role="status" aria-live="polite">
        <p className="contact-form-sent-heading">{copy.successHeading}</p>
        <p className="contact-form-sent-body">{copy.successBody}</p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-field">
        <label className="contact-field-label" htmlFor={`${fieldId}-name`}>
          {copy.nameLabel}
        </label>
        <input
          id={`${fieldId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          value={values.name}
          onChange={update("name")}
          disabled={sending}
        />
      </div>

      <div className="contact-field">
        <label className="contact-field-label" htmlFor={`${fieldId}-email`}>
          {copy.emailLabel}
        </label>
        <input
          id={`${fieldId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          value={values.email}
          onChange={update("email")}
          disabled={sending}
        />
      </div>

      <div className="contact-field">
        <label className="contact-field-label" htmlFor={`${fieldId}-message`}>
          {copy.messageLabel}
        </label>
        <textarea
          id={`${fieldId}-message`}
          name="message"
          rows={5}
          required
          maxLength={5000}
          placeholder={copy.messagePlaceholder}
          value={values.message}
          onChange={update("message")}
          disabled={sending}
        />
      </div>

      {/* Honeypot. Off-screen rather than display:none, and taken out of the tab
          order and the accessibility tree, so no keyboard or screen-reader user
          ever meets it. A bot filling it gets a success response and no mail. */}
      <div className="contact-form-hp" aria-hidden="true">
        <label htmlFor={`${fieldId}-website`}>Website</label>
        <input
          id={`${fieldId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button type="submit" className="hero-cta contact-form-submit" disabled={sending}>
        {sending ? copy.sendingLabel : copy.submitLabel}
      </button>

      <p className="contact-form-status" role="status" aria-live="polite">
        {status === "error" ? error : ""}
      </p>

      <p className="contact-form-privacy">{copy.privacyNote}</p>
    </form>
  );
}
