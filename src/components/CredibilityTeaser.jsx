import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const FEATURED_SLUGS = ["space-radar", "lidar"];

export default function CredibilityTeaser() {
  const featured = projects.filter((p) =>
    FEATURED_SLUGS.includes(p.caseStudySlug)
  );

  return (
    <section id="work-teaser">
      <div className="reveal">
        <div className="section-eyebrow">Proof of Work</div>
        <h2 className="section-title">Systems Shipped, Not Just Studied</h2>
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
            <span className="teaser-card-link">Read the case study →</span>
          </Link>
        ))}
      </div>
      <Link className="hero-cta teaser-cta reveal" to="/work">
        See all case studies →
      </Link>
    </section>
  );
}
