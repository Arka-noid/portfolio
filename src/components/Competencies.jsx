import { competencies } from "../data/competencies";

export default function Competencies() {
  return (
    <section
      id="competencies"
      style={{ background: "var(--navy-mid)", maxWidth: "100%", padding: "7rem 3rem" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-eyebrow">Skills</div>
          <h2 className="section-title">Core Competencies</h2>
        </div>
        <div className="competencies-grid reveal">
          {competencies.map((c, i) => (
            <div key={i} className="comp-card">
              <div className="comp-icon">{c.icon}</div>
              <div className="comp-title">{c.title}</div>
              <div className="comp-tags">
                {c.tags.map((t, j) => (
                  <span key={j} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
