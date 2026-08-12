import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout() {
  return (
    <div className="portfolio">
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
