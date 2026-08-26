import { useScrollReveal } from "../hooks/useScrollReveal";
import About from "../components/About";
import Experience from "../components/Experience";
import Publications from "../components/Publications";

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      <About />
      <Experience />
      <Publications />
    </>
  );
}
