import { useState } from "react";
import { Link } from "react-router-dom";
import { stackLayers, stackIntro } from "../data/stack";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const DEPTH_SCALE = [1, 2, 3, 4, 5];

// The stack rail: a vertical axis with a slow scan travelling down it. Purely
// decorative, so it is hidden from assistive tech and the scan is dropped
// under prefers-reduced-motion, matching the canvas and SMIL art elsewhere.
function StackRail({ animate }) {
  return (
    <svg
      className="stack-rail"
      viewBox="0 0 4 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="2" y1="0" x2="2" y2="100" stroke="#00C8FF" strokeWidth="0.5" opacity="0.25" />
      {animate && (
        <rect x="0.5" y="-10" width="3" height="10" fill="#00C8FF" opacity="0.55">
          <animate attributeName="y" values="-10;100" dur="7s" repeatCount="indefinite" />
        </rect>
      )}
    </svg>
  );
}

// `compact` is the home-page teaser: the stack itself, without the detail
// panel, linking through to the full treatment on /services.
export default function ExpertiseStack({ compact = false }) {
  const reduced = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState(stackLayers[0].id);
  const active = stackLayers.find((l) => l.id === activeId) ?? stackLayers[0];

  return (
    <section id="stack">
      <div className="reveal">
        <div className="section-eyebrow">Expertise</div>
        <h2 className="section-title">Which layer is your problem in?</h2>
      </div>
      <p className="stack-intro reveal">{stackIntro}</p>

      <div className={`stack-body reveal${compact ? " stack-body--compact" : ""}`}>
        <div className="stack-col">
          <span className="stack-cap">Product</span>
          <div className="stack-rows">
            <StackRail animate={!reduced} />
            <ul>
              {stackLayers.map((l) => {
                const inner = (
                  <>
                    <span className="stack-row-main">
                      <span className="stack-row-name">{l.name}</span>
                      <span className="stack-row-domain">{l.domain}</span>
                    </span>
                    <span
                      className="stack-depth"
                      role="img"
                      aria-label={`Depth ${l.depth} of 5 — ${l.depthLabel}`}
                    >
                      {DEPTH_SCALE.map((n) => (
                        <span key={n} className={n <= l.depth ? "on" : undefined} />
                      ))}
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
          <span className="stack-cap">Atoms</span>
        </div>

        {!compact && (
          <div className="stack-detail" aria-live="polite">
            <div className="stack-detail-eyebrow">{active.depthLabel}</div>
            <h3 className="stack-detail-title">{active.name}</h3>
            <p className="stack-what">{active.whatIDo}</p>
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
          What I do at each layer →
        </Link>
      )}
    </section>
  );
}
