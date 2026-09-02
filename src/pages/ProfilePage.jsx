import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSEO } from "../hooks/useSEO";
import { pageSeo } from "../data/seo";
import Principal from "../components/Principal";
import Experience from "../components/Experience";
import Publications from "../components/Publications";

// The person and the record they built, on their own route. Deliberately
// absent from the primary nav — the site sells engagements first — so it
// closes with a way back rather than leaving the reader on a page the nav does
// not acknowledge.
export default function ProfilePage() {
  useScrollReveal();
  useSEO(pageSeo.profile);

  return (
    <>
      <Principal />
      <Experience />
      <Publications />
      <div className="profile-back reveal">
        <Link className="hero-cta" to="/about">
          ← About Merilight
        </Link>
      </div>
    </>
  );
}
