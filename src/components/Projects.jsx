import { useState } from "react";
import { Link } from "react-router-dom";
import { projects, categoryMeta, markets } from "../data/projects";
import { perspectives } from "../data/perspectives";
import { siteImages } from "../data/images";
import Perspective from "./Perspective";
import ThemedImage from "./ThemedImage";

const ALL = "All";

function ProjectCard({ project, isExpanded, onToggle }) {
  const meta = categoryMeta[project.category];
  const isClassified = project.classified;

  return (
    <div
      className={`proj-card reveal${isClassified ? " proj-card--classified" : ""}`}
      style={{ borderLeftColor: meta.color }}
    >
      <div className="proj-card-header" onClick={isClassified ? undefined : onToggle}>
        <div className="proj-card-top">
          <span
            className="proj-card-badge"
            style={{ background: meta.color + "1A", color: meta.color }}
          >
            {isClassified ? "Classified" : meta.label}
          </span>
          <span className="proj-card-period">{project.period}</span>
        </div>
        <h3 className="proj-card-title">{project.title}</h3>
        <p className="proj-card-tagline">{project.tagline}</p>
        <p className="proj-card-problem">
          <span>The problem</span> {project.problem}
        </p>
        {!isClassified && (
          <button
            className="proj-card-toggle"
            aria-expanded={isExpanded}
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
          >
            {isExpanded ? "Show less ↑" : "What I did ↓"}
          </button>
        )}
        {isClassified && (
          <div className="proj-card-classified-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Restricted — outcome under NDA
          </div>
        )}
      </div>
      {isExpanded && !isClassified && (
        <div className="proj-card-detail">
          <p className="proj-card-role">
            <span>My role</span> {project.role}
          </p>
          <p className="proj-card-desc">{project.description}</p>
          {project.highlights.length > 0 && (
            <ul className="proj-card-highlights">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
          {project.outcome && (
            <p className="proj-card-outcome">
              <span>Outcome</span> {project.outcome}
            </p>
          )}
          <div className="proj-card-tags">
            {project.tags.map((t, i) => (
              <span key={i} className="tag">
                {t}
              </span>
            ))}
          </div>
          <p className="proj-card-institution">{project.institution}</p>
          {project.caseStudySlug && (
            <Link
              className="proj-case-study-link"
              to={`/work/${project.caseStudySlug}`}
              onClick={(e) => e.stopPropagation()}
            >
              View case study →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState({});
  const [filter, setFilter] = useState(ALL);
  const toggle = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));

  const shown = markets
    .filter((m) => filter === ALL || m === filter)
    .map((m) => ({ market: m, items: projects.filter((p) => p.market === m) }))
    .filter((g) => g.items.length > 0);

  return (
    <section id="projects">
      <div className="reveal">
        <div className="section-eyebrow">Evidence</div>
        <h2 className="section-title">Case studies</h2>
        {/* <p className="proj-intro">
          Eight projects, grouped by the market that paid for them. Each one
          started as somebody's hard problem.
        </p> */}
      </div>
      <div className="reveal">
        <ThemedImage
          src={siteImages.workBanner}
          variant="panel"
          // caption="Flight hardware on orbit — the environment that sets the requirements upstream"
        />
      </div>
      <Perspective>{perspectives.projects}</Perspective>

      <div className="proj-filters reveal" role="group" aria-label="Filter work by market">
        {[ALL, ...markets].map((m) => (
          <button
            key={m}
            type="button"
            className={`proj-filter${filter === m ? " proj-filter--active" : ""}`}
            aria-pressed={filter === m}
            onClick={() => setFilter(m)}
          >
            {m}
            <span className="proj-filter-count">
              {m === ALL
                ? projects.length
                : projects.filter((p) => p.market === m).length}
            </span>
          </button>
        ))}
      </div>

      <div className="proj-markets">
        {shown.map((g) => (
          <div key={g.market} className="proj-market-group">
            <h3 className="proj-market-heading reveal">{g.market}</h3>
            {g.items.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isExpanded={!!expanded[project.id]}
                onToggle={() => toggle(project.id)}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
