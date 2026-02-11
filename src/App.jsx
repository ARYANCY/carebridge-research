import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Research from "./pages/Research";
import Roadmap from "./pages/Roadmap";
import Impact from "./pages/Impact";

export default function App() {
  return (
    <div style={{ background: "#02060f" }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/research" element={<Research />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/impact" element={<Impact />} />
      </Routes>
    </div>
  );
}
