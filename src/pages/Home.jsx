import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSEO } from "../hooks/useSEO";
import { pageSeo } from "../data/seo";
import Hero from "../components/Hero";
import ServicesTeaser from "../components/ServicesTeaser";
import MarketsStrip from "../components/MarketsStrip";
import ExpertiseStack from "../components/ExpertiseStack";
import CredibilityTeaser from "../components/CredibilityTeaser";
import PartnerLogos from "../components/PartnerLogos";
import Contact from "../components/Contact";

export default function Home() {
  useScrollReveal();
  useSEO(pageSeo.home);

  return (
    <>
      <Hero />
      <ServicesTeaser />
      <MarketsStrip compact />
      <ExpertiseStack compact />
      {/* <CredibilityTeaser /> */}
      {/* <PartnerLogos /> */}
      <Contact />
    </>
  );
}
