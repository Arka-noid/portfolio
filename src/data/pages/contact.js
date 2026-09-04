export const contactPage = {
  eyebrow: "Get in touch",
  heading: "Let's build something.",
  description: `System integration, productization, design reviews, link budgets,
    device design, characterization setups.`,
  email: {
    label: "info@merilight.com",
    href: "mailto:info@merilight.com",
  },
  phone: {
    label: "+39 328 1873926",
    href: "tel:+393281873926",
  },
  // Rendered on /contact only — Home keeps the links alone as a closing CTA.
  // Three fields and no qualifying dropdowns: the sorting happens in the reply,
  // and every extra field costs submissions.
  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "What are you working on?",
    messagePlaceholder: `Where the hardware is now, and what has to happen next.`,
    submitLabel: "Send",
    sendingLabel: "Sending…",
    // Checked client-side before the request and again in the handler. Native
    // validation bubbles are switched off (`noValidate`) because they cannot be
    // styled into the palette, so these are what the buyer actually reads.
    requiredError: "Please fill in every field.",
    emailError: "That email address looks wrong.",
    successHeading: "Thanks — that's with me.",
    successBody: `I read every enquiry myself and reply within two working days. If it is
      urgent, the phone number below reaches me directly.`,
    errorFallback: `Something went wrong sending that. Email info@merilight.com directly and
      it will reach me just the same.`,
    // EU B2B buyer, sitting next to the NDA sentence — a plain statement of what
    // happens to what they typed, not a cookie-banner disclaimer.
    privacyNote: `What you send is used only to reply to you.`,
  },
};
