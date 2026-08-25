import { useScrollReveal } from "../hooks/useScrollReveal";
import Hero from "../components/Hero";
import ServicesTeaser from "../components/ServicesTeaser";
import ExpertiseStack from "../components/ExpertiseStack";
import CredibilityTeaser from "../components/CredibilityTeaser";
import Contact from "../components/Contact";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <ServicesTeaser />
      <ExpertiseStack compact />
      <CredibilityTeaser />
      <Contact />
    </>
  );
}
