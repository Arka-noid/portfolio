import { useScrollReveal } from "../hooks/useScrollReveal";
import About from "../components/About";
import RecordTeaser from "../components/RecordTeaser";


export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      <About />
      <RecordTeaser />
    </>
  );
}
