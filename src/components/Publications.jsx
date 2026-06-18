import { publications, SCHOLAR_URL } from "../data/publications";

export default function Publications() {
  const years = [...new Set(publications.map((p) => p.year))];

  return (
    <section id="publications">
      <div className="reveal">
        <div className="section-eyebrow">Research</div>
        <h2 className="section-title">Publications</h2>
        <div className="pub-header">
          <span className="pub-count">
            {publications.length} publications across journals &amp; conferences
          </span>
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

      {years.map((year) => (
        <div key={year} className="pub-year-group reveal">
          <div className="pub-year-label">{year}</div>
          <div className="pub-year-list">
            {publications
              .filter((p) => p.year === year)
              .map((p, i) => (
                <div key={i} className="pub-item">
                  <div className="pub-item-top">
                    <span className={`pub-type pub-type--${p.type}`}>
                      {p.type === "journal" ? "Journal" : "Conference"}
                    </span>
                  </div>
                  <div className="pub-title">{p.title}</div>
                  <div className="pub-authors">{p.authors}</div>
                  <div className="pub-venue">{p.venue}</div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
