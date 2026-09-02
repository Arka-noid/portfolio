import { services } from "../data/services";
import { symptomRouter } from "../data/symptoms";

// The symptom router — see docs/positioning.md §5.1.
//
// The page's first job is to let a visitor recognise themselves. §5 describes
// the three buying situations from the outside; these rows say the same three
// from the inside, in the sentence the buyer would actually use, and carry
// them straight to the engagement that answers it.
//
// A symptom is a doorway, never an offer (§9). Every row lands on one of the
// three cards in the grid below, and the offer number is the affordance that
// says so before the click.
//
// Rows are real anchors, not click handlers on divs: in-page anchor scroll is
// the convention for same-page jumps (CLAUDE.md → Conventions), and a real
// link gets keyboard activation, middle-click and open-in-new-tab for free.

// services is static, so the id → {number, title} lookup is built once.
const offers = new Map(
  services.map((s, i) => [
    s.id,
    { number: String(i + 1).padStart(2, "0"), title: s.title },
  ]),
);

export default function SymptomRouter({ items }) {
  // A symptom pointing at an offer that no longer exists renders nothing
  // rather than a dead row — unset content degrades to absence.
  const rows = items.filter((s) => offers.has(s.offer));
  if (rows.length === 0) return null;

  return (
    <div className="symptom-router">
      <p className="symptom-lead reveal">
        {symptomRouter.lead}
      </p>
      <ul className="symptom-list">
        {rows.map((s) => {
          const offer = offers.get(s.offer);
          return (
            <li key={s.id} className="reveal">
              <a
                className="symptom-row"
                href={`#offer-${s.offer}`}
                aria-label={`${s.text} — ${offer.title}`}
              >
                <span className="symptom-text">{s.text}</span>
                <span className="symptom-offer">{offer.number}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
