import {
  publications,
  PUB_DOMAINS,
  SCHOLAR_URL,
  CITATIONS,
} from "../data/publications";

function PubItem({ pub }) {
  return (
    <a
      className="pub-item"
      href={pub.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="pub-item-top">
        <span className={`pub-type pub-type--${pub.type}`}>
          {pub.type === "journal" ? "Journal" : "Conference"}
        </span>
        <span className="pub-year">{pub.year}</span>
        {pub.note && <span className="pub-note">{pub.note}</span>}
      </div>
      <div className="pub-title">{pub.title}</div>
      <div className="pub-authors">{pub.authors}</div>
      <div className="pub-venue">{pub.venue}</div>
    </a>
  );
}

export default function Publications() {
  const featured = publications.filter((p) => p.featured);
  // Grouped by domain, not year: the spread across areas is the evidence,
  // and a reverse-chronological list buries it.
  const groups = PUB_DOMAINS.map((d) => ({
    ...d,
    items: publications
      .filter((p) => p.domain === d.id)
      .sort((a, b) => b.year - a.year),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="publications">
      <div className="reveal">
        <div className="section-eyebrow">Research</div>
        <h2 className="section-title">Publications</h2>
        <div className="pub-header">
          <div className="pub-metrics">
            <span className="pub-metric">
              <strong>{publications.length}</strong> publications
            </span>
            <span className="pub-metric">
              <strong>{CITATIONS}</strong> citations
            </span>
            <span className="pub-metric">
              <strong>{groups.length}</strong> research areas
            </span>
          </div>
        </div>
        <p className="pub-intro">
          Grouped by subject rather than by date. The spread — from III-V
          material growth through spaceborne radar to nonlinear laser sources —
          is what lets me tell you which layer a problem sits in.
        </p>
      </div>

      {featured.length > 0 && (
        <div className="pub-featured reveal">
          <h3 className="pub-subheading">Selected publications</h3>
          <div className="pub-list">
            {featured.map((p, i) => (
              <PubItem key={i} pub={p} />
            ))}
          </div>
        </div>
      )}

      <h3 className="pub-subheading reveal">All publications</h3>
      {groups.map((g) => (
        <div key={g.id} className="pub-group reveal">
          <h4 className="pub-group-label">
            {g.label}
            <span className="pub-group-count">
              {g.items.length} {g.items.length === 1 ? "paper" : "papers"}
            </span>
          </h4>
          <div className="pub-list">
            {g.items.map((p, i) => (
              <PubItem key={i} pub={p} />
            ))}
          </div>
        </div>
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
          View on Google Scholar &rarr;
        </a>
      </div>
    </section>
  );
}
