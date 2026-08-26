import { partners } from "../data/partners";

// Full-width logo band at the foot of the home page. Logos are transparent
// PNGs rendered as flat monochrome marks (see .partner-logo in App.css) so a
// mixed set of institutional brands reads as one row rather than four
// competing colour schemes.
export default function PartnerLogos() {
  if (partners.length === 0) return null;

  return (
    <section className="partner-band">
      {/* The row mixes employing institutions and project partners, so the
          label has to be true of every mark in it and must not imply these
          organisations are clients — see docs/positioning.md §7. */}
      <p className="partner-band-label reveal">
        Institutions and partners behind this work
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
