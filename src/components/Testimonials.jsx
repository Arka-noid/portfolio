import { testimonials } from "../data/testimonials";

// Renders nothing at all when there are no references yet — no empty heading,
// no placeholder. Same degrade-gracefully rule as the image slots in
// data/images.js.
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="references">
      <div className="reveal">
        <div className="section-eyebrow">References</div>
        <h2 className="section-title">What clients say</h2>
      </div>
      <div className="quote-grid">
        {testimonials.map((t, i) => (
          <figure key={i} className="quote-card reveal">
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              {t.name && <span className="quote-name">{t.name}</span>}
              <span className="quote-org">
                {[t.role, t.org].filter(Boolean).join(", ")}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
