import { partners } from "../data/partners";

// Full-width logo band at the foot of the home page. Logos are transparent
// PNGs rendered as flat monochrome marks (see .partner-logo in App.css) so a
// mixed set of institutional brands reads as one row rather than four
// competing colour schemes.
export default function PartnerLogos() {
  if (partners.length === 0) return null;

  return (
    <section className="partner-band">
      <p className="partner-band-label reveal">
        Institutions we have worked with
      </p>
      <div className="partner-band-row reveal">
        {partners.map((p) => (
          <div key={p.name} className={`partner-logo partner-logo-${p.tone}`}>
            <img src={p.logo} alt={p.name} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
