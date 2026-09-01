import { useState } from "react";
import { Link } from "react-router-dom";
import { stackLayers, stackIntro } from "../data/stack";

// `compact` is the home-page teaser: the stack itself, without the detail
// panel, linking through to the full treatment on /services.
export default function ExpertiseStack({ compact = false }) {
  const [activeId, setActiveId] = useState(stackLayers[0].id);
  const active = stackLayers.find((l) => l.id === activeId) ?? stackLayers[0];

  return (
    <section id="stack">
      <div className="reveal">
        <div className="section-eyebrow">{compact ? "Expertise" : "Why this works"}</div>
        <h2 className="section-title">
          {compact ? "Which layer is your problem in?" : "Evidence behind the engagements."}
        </h2>
      </div>
      {!compact && <p className="stack-intro reveal">{stackIntro}</p>}

      <div className={`stack-body reveal${compact ? " stack-body--compact" : ""}`}>
        <div className="stack-col">
          <span className="stack-cap">Product</span>
          <div className="stack-rows">
            <ul>
              {stackLayers.map((l) => {
                const inner = (
                  <>
                    <span className="stack-row-main">
                      <span className="stack-row-name">{l.name}</span>
                      <span className="stack-row-domain">{l.domain}</span>
                    </span>
                  </>
                );
                // Without the detail panel there is nothing for a click to do,
                // so the teaser renders plain rows rather than dead buttons.
                return (
                  <li key={l.id}>
                    {compact ? (
                      <div className="stack-row stack-row--static">{inner}</div>
                    ) : (
                      <button
                        type="button"
                        className={`stack-row${l.id === activeId ? " stack-row--active" : ""}`}
                        aria-pressed={l.id === activeId}
                        onClick={() => setActiveId(l.id)}
                      >
                        {inner}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <span className="stack-cap">Material</span>
        </div>

        {!compact && (
          <div className="stack-detail" aria-live="polite">
            <div className="stack-detail-eyebrow">{active.depthLabel}</div>
            <h3 className="stack-detail-title">{active.name}</h3>
            <p className="stack-proof">
              <span>Proof</span> {active.proof}
            </p>
            <Link className="stack-evidence" to={active.evidence.to}>
              {active.evidence.label} →
            </Link>
          </div>
        )}
      </div>

      {compact && (
        <Link className="hero-cta teaser-cta reveal" to="/services">
          See the full stack →
        </Link>
      )}
    </section>
  );
}
