import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

// Tracks the user's reduced-motion preference so canvas loops, SMIL
// animations, and parallax effects can render a static alternative.
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
