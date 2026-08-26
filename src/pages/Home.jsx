import { useScrollReveal } from "../hooks/useScrollReveal";
import Hero from "../components/Hero";
import ServicesTeaser from "../components/ServicesTeaser";
import MarketsStrip from "../components/MarketsStrip";
import ExpertiseStack from "../components/ExpertiseStack";
import CredibilityTeaser from "../components/CredibilityTeaser";
import PartnerLogos from "../components/PartnerLogos";
import Contact from "../components/Contact";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <ServicesTeaser />
      <MarketsStrip compact />
      <ExpertiseStack compact />
      <CredibilityTeaser />
      <PartnerLogos />
      <Contact />
    </>
  );
}
