import { Link } from "react-router-dom";
import { sharedPage } from "../data/pages/shared";

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} {sharedPage.footer.description}{" "}
      {/* The employment record is kept out of the primary nav — the site sells
          engagements first — so the footer is its second way in, after /about. */}
      <Link className="footer-link" to="/profile">
        {sharedPage.footer.profileAction}
      </Link>
    </footer>
  );
}
