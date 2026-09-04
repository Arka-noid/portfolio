import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSEO } from "../hooks/useSEO";
import { pageSeo } from "../data/seo";
import Contact from "../components/Contact";

export default function ContactPage() {
  useScrollReveal();
  useSEO(pageSeo.contact);

  return <Contact pageTitle form />;
}
