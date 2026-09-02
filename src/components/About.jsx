import { firm } from "../data/about";
import { siteImages } from "../data/images";
import ThemedImage from "./ThemedImage";

// /about is the firm, and only the firm — it speaks as "we" throughout. The
// principal, his portrait and his first-person account live on /profile, which
// is what keeps the two voices from mixing on one page (positioning §7).
export default function About() {
  return (
    <section id="about">
      <div className="reveal">
        {/* <div className="section-eyebrow">The firm</div> */}
        <h1 className="section-title">What Merilight is</h1>
      </div>
      <div className="about-layout">
        {/* Hardware rather than a face: the buyer is sizing up a firm here.
            The slot is decorative and fails gracefully — a null or broken
            source removes its own frame. */}
        <div className="about-photo reveal">
          <ThemedImage src={siteImages.aboutSide} variant="figure" />
        </div>
        <div className="about-body reveal">
          {/* {firm.structure && (
            <p className="about-structure">{firm.structure}</p>
          )} */}
          {firm.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
