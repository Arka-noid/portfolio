import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Link className="nav-logo" to="/" aria-label="Merilight — home" onClick={() => setOpen(false)}>
        <img src="/logo-merilight-new.svg" alt="Merilight" width="106" height="36" />
      </Link>
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
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "nav-active" : undefined)}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
        <li>
          <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
            Work with me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
