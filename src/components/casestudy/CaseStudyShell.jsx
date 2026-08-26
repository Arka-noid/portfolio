import { Link } from "react-router-dom";

// Shared chrome for case-study pages: back CTA below the content.
// The global site Nav (rendered by RootLayout) already provides
// top-level navigation, so this shell only adds page-local framing.
export default function CaseStudyShell({ children }) {
  return (
    <div className="cs-page">
      {children}

      <section className="cs-section cs-section--cta">
        <Link className="cs-back-cta reveal" to="/work">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Back to all case studies
        </Link>
      </section>
    </div>
  );
}
