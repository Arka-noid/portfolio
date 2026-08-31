import { Link } from "react-router-dom";
import { recordIntro } from "../data/about";

// The door on /about to the person and the record on /profile. It carries the
// provenance sentence, so the history is framed before it is opened rather
// than discovered as a resume mid-introduction. The title matches the heading
// of the page it opens. See docs/positioning.md §7.
export default function RecordTeaser() {
  return (
    <section id="record">
      <div className="reveal">
        <div className="section-eyebrow">Track record</div>
        <h2 className="section-title">The person behind Merilight</h2>
      </div>
      <p className="stack-intro reveal">{recordIntro}</p>
      <Link className="hero-cta teaser-cta reveal" to="/profile">
        Meet the principal →
      </Link>
    </section>
  );
}
