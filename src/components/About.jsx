import { firm, aboutPage } from "../data/about";
import { siteImages } from "../data/images";
import ThemedImage from "./ThemedImage";

// /about is what Merilight does and how it is engaged. The structure sentence
// leads: a buyer sizing up a supplier learns it is one engineer here, before
// anything is claimed, rather than discovering it later (positioning §7). The
// portrait and the record live on /profile.
export default function About() {
  return (
    <section id="about">
      <div className="reveal">
        {/* <div className="section-eyebrow">The firm</div> */}
        <h1 className="section-title">{aboutPage.heading}</h1>
      </div>
      <div className="about-layout">
        {/* Hardware rather than a face: the buyer is sizing up a firm here.
            The slot is decorative and fails gracefully — a null or broken
            source removes its own frame. */}
        <div className="about-photo reveal">
          <ThemedImage
            src={siteImages.aboutSide}
            variant="figure"
            caption="32×32 photonic switch — LieslHaliburton / Wikimedia Commons, CC BY-SA 4.0"
          />
        </div>
        <div className="about-body reveal">
          {firm.structure && (
            <p className="about-structure">{firm.structure}</p>
          )}
          {firm.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
