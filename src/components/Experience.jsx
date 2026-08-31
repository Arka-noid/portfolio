import { useState } from "react";
import { experience } from "../data/experience";

// The employment record, framed as provenance rather than as a CV — see
// docs/positioning.md §7. The organisation and period lead each entry; the job
// title stays visible underneath them, because hiding it would be evasive, but
// it is not the headline.
//
// Rendered on its own route (/profile), not on /about: a full history in the
// middle of the firm's introduction reads as a resume. /about carries the
// provenance sentence and a link here instead — see components/RecordTeaser.jsx.
export default function Experience() {
  const [expanded, setExpanded] = useState({});
  const toggle = (i) => setExpanded((p) => ({ ...p, [i]: !p[i] }));

  return (
    <section id="experience">
      <div className="reveal">
        <div className="section-eyebrow">Track record</div>
        <h2 className="section-title">Where this capability was built</h2>
      </div>
      <div className="timeline">
        {experience.map((item, i) => (
          <div key={i} className="timeline-item reveal">
            <div className="timeline-body">
              <div className="timeline-meta">
                <span className="timeline-org">{item.org}</span>
                <span className="timeline-period">{item.period}</span>
              </div>
              <div className="timeline-loc">
                <span className="timeline-role">{item.role}</span>
                <span aria-hidden="true"> · </span>
                {item.loc}
              </div>
              <ul className="timeline-bullets">
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
                {expanded[i] &&
                  item.extra.map((b, j) => <li key={"e" + j}>{b}</li>)}
              </ul>
              {item.extra.length > 0 && (
                <button
                  className="timeline-expand"
                  aria-expanded={!!expanded[i]}
                  onClick={() => toggle(i)}
                >
                  {expanded[i] ? "Show less ↑" : "Show more ↓"}
                </button>
              )}
            </div>
            {item.logo && (
              <div
                className={`timeline-logo partner-logo partner-logo-${item.logoTone}`}
              >
                <img src={item.logo} alt={item.org} loading="lazy" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
