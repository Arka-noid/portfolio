import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const ThemeLab = import.meta.env.DEV
  ? lazy(() => import("./pages/ThemeLab"))
  : null;

export default function App() {
  return (
    <Routes>
      {ThemeLab && (
        <Route
          path="theme-lab"
          element={
            <Suspense fallback={null}>
              <ThemeLab />
            </Suspense>
          }
        />
      )}
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<CaseStudy />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
