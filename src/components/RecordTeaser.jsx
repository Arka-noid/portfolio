import { Link } from "react-router-dom";
import { recordIntro } from "../data/about";

// What stands on /about where the employment timeline used to be. The full
// record lives at /profile; this keeps the provenance sentence on the page a
// buyer actually reads, so the history is framed before it is opened rather
// than discovered as a resume mid-introduction. See docs/positioning.md §7.
export default function RecordTeaser() {
  return (
    <section id="record">
      <div className="reveal">
        <div className="section-eyebrow">Track record</div>
        <h2 className="section-title">Where this capability was built</h2>
      </div>
      <p className="stack-intro reveal">{recordIntro}</p>
      <Link className="hero-cta teaser-cta reveal" to="/profile">
        See the full record →
      </Link>
    </section>
  );
}
