import { Link } from "react-router-dom";
import { recordIntro, principal } from "../data/about";

// The door on /about to the person and the record on /profile. It carries the
// provenance sentence, so the history is framed before it is opened rather
// than discovered as a resume mid-introduction (docs/positioning.md §7).
//
// "The team" for a firm of one is not a dodge: firm.structure says plainly on
// this same page that Merilight is one engineer. The strip below is the whole
// introduction — face, name, role and the way through as a single target —
// because a bare button asks the buyer to click before meeting anyone.
export default function RecordTeaser() {
  return (
    <section id="record">
      <div className="reveal">
        <div className="section-eyebrow">The team</div>
        <h2 className="section-title">The person behind Merilight</h2>
      </div>
      <p className="stack-intro reveal">{recordIntro}</p>
      <Link className="person-strip reveal" to="/profile">
        {principal.photoUrl && (
          <img
            className="person-strip-photo"
            src={principal.photoUrl}
            alt=""
            loading="lazy"
          />
        )}
        <span className="person-strip-body">
          <span className="about-card-name">{principal.name}</span>
          <span className="about-card-role">{principal.role}</span>
        </span>
        <span className="person-strip-cta">Meet the principal →</span>
      </Link>
    </section>
  );
}
