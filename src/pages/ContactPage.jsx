import { useScrollReveal } from "../hooks/useScrollReveal";
import Contact from "../components/Contact";

export default function ContactPage() {
  useScrollReveal();

  return <Contact />;
}
