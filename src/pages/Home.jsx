import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import LightNotes from "../components/LightNotes";
import Competencies from "../components/Competencies";
import Publications from "../components/Publications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  useScrollReveal();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [hash]);

  return (
    <div className="portfolio">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <LightNotes />
      <Competencies />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}
