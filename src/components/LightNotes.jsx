import { Link } from "react-router-dom";
import { lightNotes } from "../data/lightNotes";

export default function LightNotes() {
  return (
    <section id="lightnotes">
      <div className="reveal">
        <div className="section-eyebrow">Writing</div>
        <h2 className="section-title">Light Notes</h2>
        <p className="proj-intro">
          Short, visual explorations of ideas behind the work — interactive
          essays on how light can be shaped, steered, and put to work.
        </p>
      </div>
      <div className="ln-grid reveal">
        {lightNotes.map((note) => (
          <Link key={note.id} to={note.path} className="ln-card">
            <div className="ln-card-meta">
              <span className="ln-card-time">{note.readingTime} read</span>
            </div>
            <h3 className="ln-card-title">{note.title}</h3>
            <p className="ln-card-blurb">{note.blurb}</p>
            <div className="ln-card-tags">
              {note.tags.map((t, i) => (
                <span key={i} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <span className="ln-card-cta">Read exploration →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
