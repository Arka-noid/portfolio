export default function PhaseCard({ phase, title, period, description, points }) {
  return (
    <div className="cs-phase reveal">
      <div className="cs-phase-marker">
        <span className="cs-phase-num">{phase}</span>
        <div className="cs-phase-line" />
      </div>
      <div className="cs-phase-content">
        <div className="cs-phase-period">{period}</div>
        <h3 className="cs-phase-title">{title}</h3>
        <p className="cs-phase-desc">{description}</p>
        <ul className="cs-phase-points">
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    </div>
  );
}
