import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { homePage } from "../data/pages/home";

const FEATURED_SLUGS = ["space-radar", "lidar"];

export default function CredibilityTeaser() {
  const { credibility: copy } = homePage;
  const featured = projects.filter((p) =>
    FEATURED_SLUGS.includes(p.caseStudySlug)
  );

  return (
    <section id="work-teaser">
      <div className="reveal">
        <div className="section-eyebrow">{copy.eyebrow}</div>
        <h2 className="section-title">{copy.heading}</h2>
      </div>
      <div className="teaser-grid">
        {featured.map((p) => (
          <Link
            key={p.id}
            className="teaser-card reveal"
            to={`/work/${p.caseStudySlug}`}
          >
            <span className="teaser-card-tag">{p.market}</span>
            <h3 className="teaser-card-title">{p.title}</h3>
            <p className="teaser-card-desc">{p.tagline}</p>
            <span className="teaser-card-link">{copy.cardAction}</span>
          </Link>
        ))}
      </div>
      <Link className="hero-cta teaser-cta reveal" to="/work">
        {copy.action}
      </Link>
    </section>
  );
}
