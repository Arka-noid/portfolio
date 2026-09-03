import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { sharedPage } from "../data/pages/shared";

// The route stays /work — the labels changed, not the URLs, so shared
// case-study links keep resolving. "Work" read as ambiguous and collided with
// the old "Work with us" CTA, which read as a careers link.
const { navigation } = sharedPage;

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Link className="nav-logo" to="/" aria-label={navigation.homeAriaLabel} onClick={() => setOpen(false)}>
        <img className="nav-logo-art" src="/logo-merilight.svg" alt="" />
      </Link>
      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav-menu"
        aria-label={open ? navigation.closeMenuAriaLabel : navigation.openMenuAriaLabel}
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
        {navigation.links.map((l) => (
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
            {navigation.contactAction}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
