import { useScrollReveal } from "../hooks/useScrollReveal";
import Services from "../components/Services";
import MarketsStrip from "../components/MarketsStrip";
import ExpertiseStack from "../components/ExpertiseStack";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

// The market perspective sits here rather than inside Services: its content is
// market momentum, so it belongs with MarketsStrip, and above the offers it
// was one of three restatements of the same thesis within a single scroll.
//
// Contact closes the page. Testimonials renders null until real references
// exist, which left the primary sales page ending on the ExpertiseStack with
// nothing to click; Contact is the same closing CTA the home page uses.
export default function ServicesPage() {
  useScrollReveal();

  return (
    <>
      <Services />
      {/* <MarketsStrip /> */}
      <ExpertiseStack />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
