import { about } from "../data/about";
import { perspectives } from "../data/perspectives";
import { siteImages } from "../data/images";
import Perspective from "./Perspective";
import ThemedImage from "./ThemedImage";

export default function About() {
  return (
    <section id="about">
      <div className="reveal">
        <div className="section-eyebrow">About</div>
        <h2 className="section-title">From Device Physics to Product</h2>
      </div>
      <div className="about-layout">
        {about.photoUrl && (
          <div className="about-photo reveal">
            <img src={about.photoUrl} alt="Portrait of Manuel Reza" />
          </div>
        )}
        {!about.photoUrl && (
          <div className="about-photo reveal">
            <ThemedImage src={siteImages.aboutSide} variant="figure" />
          </div>
        )}
        <div className="about-body reveal">
          {about.structure && (
            <p className="about-structure">{about.structure}</p>
          )}
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <Perspective>{perspectives.about}</Perspective>
          {(about.education.length > 0 || about.languages.length > 0) && (
            <div className="about-facts">
              {about.education.length > 0 && (
                <div className="about-fact">
                  <span className="about-fact-label">Education</span>
                  <ul>
                    {about.education.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </div>
              )}
              {about.languages.length > 0 && (
                <div className="about-fact">
                  <span className="about-fact-label">Languages</span>
                  <ul>
                    {about.languages.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          {about.cvUrl && (
            <a className="hero-cta about-cv" href={about.cvUrl}>
              Download CV ↓
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
