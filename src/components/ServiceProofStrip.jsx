// Counted proof above the offer grid. Every tile comes from the array it is
// handed — `serviceProof` in data/services.js, which derives the publication
// figures from data/publications.js so they cannot drift out of sync.
export default function ServiceProofStrip({ items }) {
  return (
    <ul className="proof-strip reveal">
      {items.map((it) => (
        <li key={it.label}>
          <span className="proof-num">
            {it.value}
            {it.suffix && <span>{it.suffix}</span>}
          </span>
          <span className="proof-label">{it.label}</span>
        </li>
      ))}
    </ul>
  );
}
