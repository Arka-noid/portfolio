import { useState } from "react";

const sections = ["about", "experience", "projects", "services", "publications", "contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <a className="nav-logo" href="#/" aria-label="Home">MR</a>
      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18" />
          )}
        </svg>
      </button>
      <ul id="nav-menu" className={`nav-links${open ? " nav-links--open" : ""}`}>
        {sections.map((s) => (
          <li key={s}>
            <a href={`#${s}`} onClick={() => setOpen(false)}>{s}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
