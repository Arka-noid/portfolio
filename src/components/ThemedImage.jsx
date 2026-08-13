import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

// Blends a photograph into the navy/cyan identity so stock imagery reads as
// part of the site rather than pasted onto it. Three stacked layers:
// the desaturated photo, a cyan-to-navy tint scrim, and a slow cyan sweep
// echoing the LiDAR sweep and hero waveguide.
//
// Every image slot is optional and fails gracefully: a null src renders
// nothing, and a file that fails to load removes its own frame.
export default function ThemedImage({
  src,
  alt = "",
  caption,
  variant = "figure",
  className = "",
}) {
  const reduced = usePrefersReducedMotion();

  if (!src) return null;

  const decorative = alt === "";

  return (
    <figure className={`themed-img themed-img--${variant} ${className}`.trim()}>
      <div className="themed-img-frame">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          aria-hidden={decorative || undefined}
          onError={(e) => {
            const fig = e.currentTarget.closest(".themed-img");
            if (fig) fig.style.display = "none";
          }}
        />
        <span className="themed-img-tint" aria-hidden="true" />
        {!reduced && <span className="themed-img-sweep" aria-hidden="true" />}
      </div>
      {caption && <figcaption className="themed-img-caption">{caption}</figcaption>}
    </figure>
  );
}
