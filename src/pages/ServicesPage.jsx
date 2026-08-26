import { useScrollReveal } from "../hooks/useScrollReveal";
import Services from "../components/Services";
import MarketsStrip from "../components/MarketsStrip";
import ExpertiseStack from "../components/ExpertiseStack";
import Testimonials from "../components/Testimonials";

export default function ServicesPage() {
  useScrollReveal();

  return (
    <>
      <Services />
      <MarketsStrip />
      <ExpertiseStack />
      <Testimonials />
    </>
  );
}
