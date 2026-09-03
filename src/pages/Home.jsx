import { useScrollReveal } from "../hooks/useScrollReveal";
import { useSEO } from "../hooks/useSEO";
import { pageSeo } from "../data/seo";
import Hero from "../components/Hero";
import SymptomRouter from "../components/SymptomRouter";
import ServicesTeaser from "../components/ServicesTeaser";
import { symptoms } from "../data/symptoms";
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
      <section className="home-symptoms">
        <div className="reveal">
          <div className="section-eyebrow">Where is it stuck?</div>
          <h2 className="section-title">Does this sound familiar?</h2>
        </div>
        <SymptomRouter items={symptoms} destination="/services" />
      </section>
      <ServicesTeaser />
      <MarketsStrip compact />
      <ExpertiseStack compact />
      {/* <CredibilityTeaser /> */}
      {/* <PartnerLogos /> */}
      <Contact />
    </>
  );
}
