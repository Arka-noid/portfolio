import { partners } from "../data/partners";

export default function PartnerLogos() {
  if (partners.length === 0) return null;

  return (
    <div className="partner-logos reveal">
      <span className="about-fact-label">Institutions & Partners</span>
      <div className="partner-logos-row">
        {partners.map((p) => (
          <div key={p.name} className={`partner-logo partner-logo-${p.bg}`}>
            <img src={p.logo} alt={p.name} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
