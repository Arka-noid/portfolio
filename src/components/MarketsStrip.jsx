import { Link } from "react-router-dom";
import { marketFocus, marketIntro } from "../data/markets";
import { siteImages } from "../data/images";
import SectionBackdrop from "./SectionBackdrop";

// The markets we name — docs/positioning.md §5. A doorway, not an offer: each
// entry leads back to the same ladder in services.js.
//
// `compact` is the home-page teaser — label and context only. There is nothing
// to click there beyond the section CTA, so no per-item control is rendered.
// The section-wide backdrop is guarded behind !compact: the home page already
// carries the hero canvas and the logo band, and a third full-width
// photographic layer there is noise. The per-card backdrops below are not —
// they are dim, card-sized and carry the market's subject, so they run in both
// modes; a market with no `image` simply keeps the flat surface.
export default function MarketsStrip({ compact = false }) {
  return (
    <section id="markets" className={compact ? undefined : "section--backdrop"}>
      {!compact && <SectionBackdrop src={siteImages.marketsBackdrop} />}
      <div className="markets-body">
        <div className="reveal">
          <div className="section-eyebrow">Markets</div>
          <h2 className="section-title">Application domains</h2>
        </div>
        

        <ul className={`markets-grid${compact ? " markets-grid--compact" : ""}`}>
          {marketFocus.map((m, i) => (
            <li key={m.id} className="market-card reveal">
              {m.image && (
                <span className="market-card-bg" aria-hidden="true">
                  <span
                    className="market-card-photo"
                    style={{ backgroundImage: `url(${m.image})` }}
                  />
                </span>
              )}
              <div className="market-card-body">
                <h3 className="market-label">{m.label}</h3>
                <p className="market-context">{m.context}</p>
                {!compact && (
                  <>
                    <p className="market-proof">
                      <span>Proof</span> {m.proof}
                    </p>
                    <Link className="market-evidence" to={m.evidence.to}>
                      {m.evidence.label} →
                    </Link>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>

        {compact && (
          <Link className="hero-cta teaser-cta reveal" to="/services">
            See how we work in them →
          </Link>
        )}
      </div>
    </section>
  );
}
