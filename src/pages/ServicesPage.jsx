import { useScrollReveal } from "../hooks/useScrollReveal";
import Services from "../components/Services";
import ExpertiseStack from "../components/ExpertiseStack";
import Testimonials from "../components/Testimonials";

export default function ServicesPage() {
  useScrollReveal();

  return (
    <>
      <Services />
      <ExpertiseStack />
      <Testimonials />
    </>
  );
}
