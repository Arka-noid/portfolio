import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Experience from "../components/Experience";

// The employment record on its own route. Deliberately absent from the primary
// nav — the site sells engagements first — so it closes with a way back rather
// than leaving the reader on a page the nav does not acknowledge.
export default function ProfilePage() {
  useScrollReveal();

  return (
    <>
      <Experience />
      <div className="profile-back reveal">
        <Link className="hero-cta" to="/about">
          ← About Merilight
        </Link>
      </div>
    </>
  );
}
