import { useState } from "react";
import { projects, categoryMeta } from "../data/projects";

function CategoryMarker({ category, prevCategory }) {
  if (category === prevCategory) return null;
  const meta = categoryMeta[category];
  return (
    <div className="proj-category-marker reveal">
      <span
        className="proj-category-label"
        style={{ color: meta.color, borderColor: meta.color }}
      >
        {meta.label}
      </span>
    </div>
  );
}

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
        {!isClassified && (
          <button
            className="proj-card-toggle"
            aria-expanded={isExpanded}
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
          >
            {isExpanded ? "Show less ↑" : "Show more ↓"}
          </button>
        )}
        {isClassified && (
          <div className="proj-card-classified-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Restricted
          </div>
        )}
      </div>
      {isExpanded && !isClassified && (
        <div className="proj-card-detail">
          <p className="proj-card-institution">{project.institution}</p>
          <p className="proj-card-desc">{project.description}</p>
          {project.highlights.length > 0 && (
            <ul className="proj-card-highlights">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
          <div className="proj-card-tags">
            {project.tags.map((t, i) => (
              <span key={i} className="tag">
                {t}
              </span>
            ))}
          </div>
          {project.caseStudy && (
            <a
              className="proj-case-study-link"
              href={project.caseStudy}
              onClick={(e) => e.stopPropagation()}
            >
              View case study →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState({});
  const toggle = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));

  return (
    <section id="projects">
      <div className="reveal">
        <div className="section-eyebrow">Portfolio</div>
        <h2 className="section-title">Projects</h2>
        <p className="proj-intro">
          From devices to systems to platforms — a journey across the photonics
          value chain.
        </p>
      </div>
      <div className="proj-timeline">
        {projects.map((project, i) => (
          <div key={project.id}>
            <CategoryMarker
              category={project.category}
              prevCategory={i > 0 ? projects[i - 1].category : null}
            />
            <ProjectCard
              project={project}
              isExpanded={!!expanded[project.id]}
              onToggle={() => toggle(project.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
