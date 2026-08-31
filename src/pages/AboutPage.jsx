import { useScrollReveal } from "../hooks/useScrollReveal";
import About from "../components/About";
import RecordTeaser from "../components/RecordTeaser";
import Publications from "../components/Publications";

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      <About />
      <RecordTeaser />
      <Publications />
    </>
  );
}
