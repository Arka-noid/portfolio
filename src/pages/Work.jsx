import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSEO } from "../hooks/useSEO";
import { pageSeo } from "../data/seo";
import Projects from "../components/Projects";

export default function Work() {
  useScrollReveal();
  useSEO(pageSeo.work);

  return <Projects />;
}
