import { publications, SCHOLAR_URL, CITATIONS } from "../data/publications";

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
        {pub.note && <span className="pub-note">{pub.note}</span>}
      </div>
      <div className="pub-title">{pub.title}</div>
      <div className="pub-authors">{pub.authors}</div>
      <div className="pub-venue">{pub.venue}</div>
    </a>
  );
}

export default function Publications() {
  const years = [...new Set(publications.map((p) => p.year))];
  const featured = publications.filter((p) => p.featured);

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
          </div>
          <a
            className="pub-scholar-link"
            href={SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Scholar &rarr;
          </a>
        </div>
      </div>

      {featured.length > 0 && (
        <div className="pub-featured reveal">
          <h3 className="pub-subheading">Selected publications</h3>
          <div className="pub-year-list">
            {featured.map((p, i) => (
              <PubItem key={i} pub={p} />
            ))}
          </div>
        </div>
      )}

      <h3 className="pub-subheading reveal">All publications</h3>
      {years.map((year) => (
        <div key={year} className="pub-year-group reveal">
          <div className="pub-year-label">{year}</div>
          <div className="pub-year-list">
            {publications
              .filter((p) => p.year === year)
              .map((p, i) => (
                <PubItem key={i} pub={p} />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
