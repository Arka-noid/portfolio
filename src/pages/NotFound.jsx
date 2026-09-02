import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { notFoundSeo } from "../data/seo";
import { notFoundPage } from "../data/pages/notFound";

export default function NotFound() {
  useSEO({ ...notFoundSeo, noindex: true });

  return (
    <section id="not-found" style={{ textAlign: "center", padding: "10rem 1.5rem" }}>
      <div className="section-eyebrow" style={{ justifyContent: "center" }}>
        {notFoundPage.eyebrow}
      </div>
      <h1 className="section-title">{notFoundPage.heading}</h1>
      <p style={{ color: "var(--muted)", marginBottom: "2.5rem" }}>
        {notFoundPage.description}
      </p>
      <Link className="hero-cta" to="/">
        {notFoundPage.action}
      </Link>
    </section>
  );
}
