export default function RelatedPubs({ pubs }) {
  return (
    <div className="cs-pubs">
      {pubs.map((pub, i) => (
        <a key={i} href={pub.url} target="_blank" rel="noopener noreferrer" className="cs-pub reveal">
          <div className="cs-pub-top">
            <span className={`pub-type pub-type--${pub.type}`}>
              {pub.type === "journal" ? "Journal" : "Conference"}
            </span>
            <span className="cs-pub-year">{pub.year}</span>
          </div>
          <h4 className="cs-pub-title">{pub.title}</h4>
          <p className="cs-pub-venue">{pub.venue}</p>
        </a>
      ))}
    </div>
  );
}
