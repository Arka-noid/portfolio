import { useScrollReveal } from "./hooks/useScrollReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Competencies from "./components/Competencies";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useScrollReveal();

  return (
    <div className="portfolio">
      <Nav />
      <Hero />
      <Experience />
      <Competencies />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}
