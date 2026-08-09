import { useEffect } from "react";
import Footer from "../Footer";

// Shared chrome for case-study pages: fixed nav with back link,
// scroll restore on mount, back CTA, and footer.
export default function CaseStudyShell({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cs-page">
      <nav className="cs-nav">
        <a className="cs-back" href="#/">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Portfolio
        </a>
        <span className="cs-nav-label">Case Study</span>
      </nav>

      {children}

      <section className="cs-section cs-section--cta">
        <a className="cs-back-cta reveal" href="#/">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Back to Portfolio
        </a>
      </section>

      <Footer />
    </div>
  );
}
