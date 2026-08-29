import { Link } from "react-router-dom";
import { marketFocus, marketIntro } from "../data/markets";
import { siteImages } from "../data/images";
import SectionBackdrop from "./SectionBackdrop";

// The markets we name — docs/positioning.md §5. A doorway, not an offer: each
// entry leads back to the same ladder in services.js.
//
// `compact` is the home-page teaser — label and context only. There is nothing
// to click there beyond the section CTA, so no per-item control is rendered.
// The backdrop is guarded behind !compact for the same reason: the home page
// already carries the hero canvas and the logo band, and a third photographic
// layer there is noise.
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
