import { publications, CITATIONS } from "../data/publications";

// Counted proof above the offer grid. Publication figures come straight from
// the publications data so they cannot drift out of sync with the list.
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
      <li>
        <span className="proof-num">{publications.length}</span>
        <span className="proof-label">
          Publications · {CITATIONS} citations
        </span>
      </li>
    </ul>
  );
}
