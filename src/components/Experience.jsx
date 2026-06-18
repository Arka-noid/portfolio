import { useState } from "react";
import { experience } from "../data/experience";

export default function Experience() {
  const [expanded, setExpanded] = useState({});
  const toggle = (i) => setExpanded((p) => ({ ...p, [i]: !p[i] }));

  return (
    <section id="experience">
      <div className="reveal">
        <div className="section-eyebrow">Career</div>
        <h2 className="section-title">Experience</h2>
      </div>
      <div className="timeline">
        {experience.map((item, i) => (
          <div key={i} className="timeline-item reveal">
            <div className="timeline-meta">
              <span className="timeline-role">{item.role}</span>
              <span className="timeline-org">{item.org}</span>
              <span className="timeline-period">{item.period}</span>
            </div>
            <div className="timeline-loc">📍 {item.loc}</div>
            <ul className="timeline-bullets">
              {item.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
              {expanded[i] &&
                item.extra.map((b, j) => <li key={"e" + j}>{b}</li>)}
            </ul>
            {item.extra.length > 0 && (
              <button className="timeline-expand" onClick={() => toggle(i)}>
                {expanded[i] ? "Show less ↑" : "Show more ↓"}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
