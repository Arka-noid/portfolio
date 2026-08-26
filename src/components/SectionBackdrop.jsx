// Dimmed, gradient-masked photographic backdrop for a full section — the
// "images on the background or on the side" half of the imagery brief, as
// opposed to a full-bleed banner interrupting the content.
//
// Modelled on casestudy/HeroPhoto.jsx with one deliberate difference: the
// gradient composites with var(--bg-rgb) rather than a hardcoded navy, so a
// palette change in :root carries through (CLAUDE.md → Colour tokens).
//
// A null src renders nothing and a URL that fails to load simply never paints.
// The layer is decorative and inert: aria-hidden, pointer-events: none, and no
// animation of its own, so prefers-reduced-motion needs no special case.
//
// The parent section needs `position: relative` and its content a
// `position: relative; z-index: 1` to sit above this.
export default function SectionBackdrop({ src }) {
  if (!src) return null;
  return (
    <div
      className="section-backdrop"
      aria-hidden="true"
      style={{
        backgroundImage: `linear-gradient(160deg, rgba(var(--bg-rgb), 0.97) 0%, rgba(var(--bg-rgb), 0.82) 45%, rgba(var(--bg-rgb), 0.97) 100%), url(${src})`,
      }}
    />
  );
}
