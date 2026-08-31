import { principal } from "../data/about";
import { perspectives } from "../data/perspectives";
import { siteImages } from "../data/images";
import Perspective from "./Perspective";
import ThemedImage from "./ThemedImage";

// The person, at the top of /profile and above the employment record. First
// person throughout — this is Manuel's own account, and /about carries none of
// it. Reuses the .about-* layout classes: the block is the same shape the firm
// section used to be, with a portrait in the column instead of hardware.
export default function Principal() {
  return (
    <section id="principal">
      <div className="reveal">
        <div className="section-eyebrow">The principal</div>
        <h2 className="section-title">The person behind Merilight</h2>
      </div>
      <div className="about-layout">
        {/* Falls back to the decorative image when no portrait is set, so the
            column never renders empty. */}
        {principal.photoUrl ? (
          <figure className="about-photo about-card reveal">
            <img
              src={principal.photoUrl}
              alt={`Portrait of ${principal.name}`}
            />
            <figcaption>
              <span className="about-card-name">{principal.name}</span>
              <span className="about-card-role">{principal.role}</span>
            </figcaption>
          </figure>
        ) : (
          <div className="about-photo reveal">
            <ThemedImage src={siteImages.aboutSide} variant="figure" />
          </div>
        )}
        <div className="about-body reveal">
          {principal.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <Perspective>{perspectives.about}</Perspective>
          {principal.education.length > 0 && (
            <div className="about-facts">
              <div className="about-fact">
                <span className="about-fact-label">Education</span>
                <ul>
                  {principal.education.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
