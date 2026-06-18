import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BeamSteering from "./pages/lightnotes/BeamSteering";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/light-notes/beam-steering" element={<BeamSteering />} />
      </Routes>
    </BrowserRouter>
  );
}
