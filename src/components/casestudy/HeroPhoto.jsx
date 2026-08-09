// Dimmed, gradient-masked photographic backdrop for case-study heroes.
// Renders under the hero canvas; a null src renders nothing and a URL
// that fails to load simply never paints.
export default function HeroPhoto({ src }) {
  if (!src) return null;
  return (
    <div
      className="cs-hero-photo"
      aria-hidden="true"
      style={{
        backgroundImage: `linear-gradient(100deg, rgba(10, 15, 30, 0.94) 0%, rgba(10, 15, 30, 0.6) 55%, rgba(10, 15, 30, 0.85) 100%), url(${src})`,
      }}
    />
  );
}
