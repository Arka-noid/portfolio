import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { notFoundSeo } from "../data/seo";

export default function NotFound() {
  useSEO({ ...notFoundSeo, noindex: true });

  return (
    <section id="not-found" style={{ textAlign: "center", padding: "10rem 1.5rem" }}>
      <div className="section-eyebrow" style={{ justifyContent: "center" }}>
        404
      </div>
      <h1 className="section-title">Page not found</h1>
      <p style={{ color: "var(--muted)", marginBottom: "2.5rem" }}>
        That page doesn't exist — it may have moved.
      </p>
      <Link className="hero-cta" to="/">
        Back to home →
      </Link>
    </section>
  );
}
