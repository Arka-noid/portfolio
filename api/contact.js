// Lead capture for /contact.
//
// Posts to the Resend HTTP API directly rather than pulling in an SDK — it is
// one fetch, so the repo's three-package dependency list stays three packages.
//
// Mail *lands* in Fastmail; Resend only *sends*. CONTACT_FROM must therefore be
// an address on a domain verified in Resend, and that should be a dedicated
// subdomain (send.merilight.com) so the root domain's Fastmail SPF, DKIM and MX
// records are never touched. Before DNS verification exists, Resend will only
// send from onboarding@resend.dev and only to the Resend account's own address.

const RESEND_ENDPOINT = "https://api.resend.com/emails";

// Generous enough that no real enquiry hits them; tight enough that the
// function is never asked to forward a megabyte.
const LIMITS = { name: 120, email: 200, message: 5000 };

// A submission faster than this was not typed by a person.
const MIN_FILL_MS = 3000;

// Deliberately loose. Address validity is settled by the reply bouncing, not by
// a regex; this only catches the obviously malformed before we spend a send.
const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Vercel's Node runtime parses a JSON body for us, but a string or an unparsed
// stream both turn up depending on the content-type the client sent.
async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body);

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body;
  try {
    body = await readBody(req);
  } catch {
    return res.status(400).json({ error: "Malformed request." });
  }

  const name = clean(body.name, LIMITS.name);
  const email = clean(body.email, LIMITS.email);
  const message = clean(body.message, LIMITS.message);
  const honeypot = clean(body.website, 200);
  const renderedAt = Number(body.renderedAt);

  // Both bot checks report success and send nothing. A bot that learns it was
  // caught comes back with the field filled in correctly.
  if (honeypot) return res.status(200).json({ ok: true });
  if (Number.isFinite(renderedAt) && Date.now() - renderedAt < MIN_FILL_MS) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill in every field." });
  }
  if (!EMAIL_SHAPE.test(email)) {
    return res.status(400).json({ error: "That email address looks wrong." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact: RESEND_API_KEY is not set");
    return res.status(502).json({ error: "Could not send just now." });
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || "Merilight site <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO || "info@merilight.com"],
        // So that hitting Reply in the inbox answers the enquirer, not yourself.
        reply_to: email,
        subject: `New enquiry from ${name}`,
        text: [
          `Name:  ${name}`,
          `Email: ${email}`,
          "",
          message,
          "",
          "— sent from the merilight.com contact form",
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      // Logged server-side only: Resend's body can echo request detail, and
      // none of it belongs in a public response.
      console.error(
        `contact: Resend returned ${response.status}`,
        await response.text()
      );
      return res.status(502).json({ error: "Could not send just now." });
    }
  } catch (error) {
    console.error("contact: send failed", error);
    return res.status(502).json({ error: "Could not send just now." });
  }

  return res.status(200).json({ ok: true });
}
