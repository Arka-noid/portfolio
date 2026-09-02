import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSEO } from "../hooks/useSEO";
import { pageSeo } from "../data/seo";
import About from "../components/About";
import RecordTeaser from "../components/RecordTeaser";


export default function AboutPage() {
  useScrollReveal();
  useSEO(pageSeo.about);

  return (
    <>
      <About />
      <RecordTeaser />
    </>
  );
}
