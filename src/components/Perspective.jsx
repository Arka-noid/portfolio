import { sharedPage } from "../data/pages/shared";

// Market-context callout: one italic line with a cyan accent, used to tie
// a section's content to where the industry is heading.
export default function Perspective({ children }) {
  return (
    <div className="perspective reveal">
      <span className="perspective-label">{sharedPage.perspectiveLabel}</span>
      <p>{children}</p>
    </div>
  );
}
