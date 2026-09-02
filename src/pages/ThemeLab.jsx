import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ThemeLab.css";

const directions = [
  {
    id: "controlled",
    label: "Controlled Light",
    heading: "Manrope + Inter + IBM Plex Mono",
    note: "Current direction",
    swatches: ["#0a0f1e", "#1e2a45", "#e8edf5", "#00c8ff", "#ffbd59"],
  },
  {
    id: "precision",
    label: "Precision Instrument",
    heading: "Manrope + Source Sans 3",
    note: "Quiet and exact",
    swatches: ["#f4f2ec", "#dbe7ec", "#254d63", "#172733", "#82df68"],
  },
  {
    id: "spectral",
    label: "Spectral Field",
    heading: "Sora + DM Sans",
    note: "Research-forward",
    swatches: ["#f3f0fa", "#c9aff5", "#241052", "#6126e8", "#c8ff58"],
  },
  {
    id: "field",
    label: "Field Engineer",
    heading: "Archivo + IBM Plex Sans",
    note: "Practical and tactile",
    swatches: ["#f3f0e8", "#b8dce8", "#075b68", "#192936", "#ce6237"],
  },
];

function DirectionCard({ direction }) {
  return (
    <article className={`theme-specimen theme-specimen--${direction.id}`}>
      <header className="theme-specimen-nav">
        <span className="theme-specimen-brand">MERILIGHT</span>
        <span>Services&nbsp;&nbsp; Work&nbsp;&nbsp; About</span>
      </header>

      <div className="theme-specimen-hero">
        <div className="theme-specimen-eyebrow">{direction.label}</div>
        <h2>
          Shining <em>light</em>
          <br />
          into your products.
        </h2>
        <p>
          We connect devices, electronics, packaging and control into hardware
          that performs as one.
        </p>
        <span className="theme-specimen-cta">See our services <b>→</b></span>
      </div>

      <div className="theme-specimen-proof">
        <span>01</span>
        <div>
          <strong>Optical System &amp; PIC Architecture</strong>
          <small>From requirements to an integration-ready system.</small>
        </div>
      </div>

      <footer className="theme-specimen-footer">
        <div>
          <strong>{direction.heading}</strong>
          <small>{direction.note}</small>
        </div>
        <div className="theme-swatches" aria-label={`${direction.label} colors`}>
          {direction.swatches.map((color) => (
            <span key={color} style={{ backgroundColor: color }} title={color} />
          ))}
        </div>
      </footer>
    </article>
  );
}

export default function ThemeLab() {
  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=DM+Sans:wght@400;500&family=IBM+Plex+Sans:wght@400;500&family=Inter:wght@300;400;500&family=Sora:wght@400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(fontLink);

    return () => fontLink.remove();
  }, []);

  return (
    <main className="theme-lab">
      <header className="theme-lab-header">
        <div>
          <div className="theme-lab-kicker">Design comparison</div>
          <h1>Same website. Four visual voices.</h1>
          <p>Identical content and hierarchy, with only palette and typography changed.</p>
        </div>
        <Link to="/">Back to website</Link>
      </header>

      <section className="theme-comparison" aria-label="Theme comparisons">
        {directions.map((direction) => (
          <DirectionCard key={direction.id} direction={direction} />
        ))}
      </section>
    </main>
  );
}