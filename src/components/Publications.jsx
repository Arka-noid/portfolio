import { useState } from "react";
import {
  publications,
  PUB_DOMAINS,
  SCHOLAR_URL,
  CITATIONS,
} from "../data/publications";
import { sharedPage } from "../data/pages/shared";

const copy = sharedPage.publications;

// How many papers each domain group shows before the expander. The six groups
// are the breadth evidence (docs/positioning.md §4), so every group stays
// visible — only the depth inside each one is capped.
const PER_DOMAIN = 3;

function PubItem({ pub }) {
  return (
    <a
      className="pub-item"
      href={pub.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="pub-title">{pub.title}</div>
      <div className="pub-item-meta">
        <span className={`pub-type pub-type--${pub.type}`}>
          {pub.type === "journal" ? copy.journalLabel : copy.conferenceLabel}
        </span>
        <span className="pub-venue">{pub.venue}</span>
        <span className="pub-year">{pub.year}</span>
        {pub.note && <span className="pub-note">{pub.note}</span>}
      </div>
    </a>
  );
}

// One domain group, capped at PER_DOMAIN with an expander for the rest.
function PubGroup({ group }) {
  const [open, setOpen] = useState(false);
  const hidden = group.items.length - PER_DOMAIN;
  const shown = open ? group.items : group.items.slice(0, PER_DOMAIN);

  return (
    <div className="pub-group reveal">
      <h4 className="pub-group-label">
        {group.label}
        <span className="pub-group-count">
          {group.items.length} {group.items.length === 1 ? copy.singularPaper : copy.pluralPapers}
        </span>
      </h4>
      <div className="pub-list">
        {shown.map((p, i) => (
          <PubItem key={i} pub={p} />
        ))}
      </div>
      {hidden > 0 && (
        <button
          className="pub-more"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open
            ? copy.collapseLabel
            : `${copy.expandPrefix} ${hidden} ${copy.expandSuffix}`}
        </button>
      )}
    </div>
  );
}

export default function Publications() {
  // Grouped by domain, not year: the spread across areas is the evidence,
  // and a reverse-chronological list buries it.
  //
  // `featured` now orders rather than duplicates — it used to drive a separate
  // "Selected publications" block. Featured papers sort to the top of their
  // group so the strongest work survives the PER_DOMAIN cap; the rest follow
  // newest first.
  const groups = PUB_DOMAINS.map((d) => ({
    ...d,
    items: publications
      .filter((p) => p.domain === d.id)
      .sort(
        (a, b) => Boolean(b.featured) - Boolean(a.featured) || b.year - a.year
      ),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="publications">
      <div className="reveal">
        <div className="section-eyebrow">{copy.eyebrow}</div>
        <h2 className="section-title">{copy.heading}</h2>
        <div className="pub-header">
          <div className="pub-metrics">
            <span className="pub-metric">
              <strong>{publications.length}</strong> {copy.publicationMetric}
            </span>
            <span className="pub-metric">
              <strong>{CITATIONS}</strong> {copy.citationMetric}
            </span>
            <span className="pub-metric">
              <strong>{groups.length}</strong> {copy.areaMetric}
            </span>
          </div>
        </div>
        <p className="pub-intro">
          {copy.intro}
        </p>
      </div>

      {groups.map((g) => (
        <PubGroup key={g.id} group={g} />
      ))}

      {/* Sits with the list rather than in the header: it is what a reader
          wants once they have scrolled the papers, not before. */}
      <div className="pub-scholar-footer reveal">
        <a
          className="pub-scholar-link"
          href={SCHOLAR_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {copy.scholarAction}
        </a>
      </div>
    </section>
  );
}
