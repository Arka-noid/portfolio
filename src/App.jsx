import { useState, useEffect } from "react";
import { useScrollReveal } from "./hooks/useScrollReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Competencies from "./components/Competencies";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SpaceRadarCaseStudy from "./components/SpaceRadarCaseStudy";
import LidarCaseStudy from "./components/LidarCaseStudy";

const routes = {
  "#/project/space-radar": SpaceRadarCaseStudy,
  "#/project/lidar": LidarCaseStudy,
};

function Portfolio() {
  useScrollReveal();

  return (
    <div className="portfolio">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
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

  const Page = routes[route];
  if (Page) {
    return <Page />;
  }

  return <Portfolio />;
}
