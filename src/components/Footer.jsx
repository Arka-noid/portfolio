import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} Merilight · Independent photonic systems
      consultancy · Manuel Reza ·{" "}
      {/* The employment record is kept out of the primary nav — the site sells
          engagements first — so the footer is its second way in, after /about. */}
      <Link className="footer-link" to="/profile">
        Profile
      </Link>
    </footer>
  );
}
