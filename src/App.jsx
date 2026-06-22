import { useState, useEffect } from "react";
import { useScrollReveal } from "./hooks/useScrollReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Competencies from "./components/Competencies";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SpaceRadarCaseStudy from "./components/SpaceRadarCaseStudy";

function Portfolio() {
  useScrollReveal();

  return (
    <div className="portfolio">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Competencies />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (route === "#/project/space-radar") {
    return <SpaceRadarCaseStudy />;
  }

  return <Portfolio />;
}
