import { useState } from "react";
import { Link } from "react-router-dom";
import { stackLayers, stackIntro, stackTeaserIntro, stackSection } from "../data/stack";

// `compact` is the home-page teaser: the stack itself, without the detail
// panel, linking through to the full treatment on /services.
export default function ExpertiseStack({ compact = false }) {
  const [activeId, setActiveId] = useState(stackLayers[0].id);
  const active = stackLayers.find((l) => l.id === activeId) ?? stackLayers[0];
  const copy = stackSection;

  return (
    <section id="stack">
      <div className="reveal">
        <div className="section-eyebrow">{compact ? copy.compactEyebrow : copy.fullEyebrow}</div>
        <h2 className="section-title">
          {compact ? copy.compactHeading : copy.fullHeading}
        </h2>
      </div>
      {compact ? (
        <>
          <p className="stack-teaser-intro reveal">{stackTeaserIntro}</p>
          <div className="stack-teaser reveal">
            <ol className="stack-teaser-layers">
              {[...stackLayers].reverse().map((layer) => (
                <li key={layer.id}>{layer.name}</li>
              ))}
            </ol>
          </div>
          <Link className="hero-cta teaser-cta reveal" to="/services">
            {copy.compactAction}
          </Link>
        </>
      ) : (
        <>
          <p className="stack-intro reveal">{stackIntro}</p>

          <div className="stack-body reveal">
            <div className="stack-col">
              <span className="stack-cap">{copy.topLabel}</span>
              <div className="stack-rows">
                <ul>
                  {stackLayers.map((l) => (
                    <li key={l.id}>
                      <button
                        type="button"
                        className={`stack-row${l.id === activeId ? " stack-row--active" : ""}`}
                        aria-pressed={l.id === activeId}
                        onClick={() => setActiveId(l.id)}
                      >
                        <span className="stack-row-main">
                          <span className="stack-row-name">{l.name}</span>
                          <span className="stack-row-domain">{l.domain}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="stack-cap">{copy.bottomLabel}</span>
            </div>

            <div className="stack-detail" aria-live="polite">
              <div className="stack-detail-eyebrow">{active.depthLabel}</div>
              <h3 className="stack-detail-title">{active.name}</h3>
              <p className="stack-proof">
                <span>{copy.proofLabel}</span> {active.proof}
              </p>
              <Link className="stack-evidence" to={active.evidence.to}>
                {active.evidence.label} →
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
