import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navigation from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Home from "./pages/Home";
import BehavAI from "./pages/BehavAI";
import Aquatonomy from "./pages/Aquatonomy";
import Hira from "./pages/Hira";
import Stackbuilder from "./pages/Stackbuilder";
import Moonranger from "./pages/Moonranger";
import TapTap from "./pages/TapTap";
import LightTheMuse from "./pages/LightTheMuse";

import "./styles/Global.css";
import CosmicBackground from "./components/CosmicBackground";

function AppContent() {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith("/case-studies/");

  return (
    <>
      <CosmicBackground />
      {!isDetailPage && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies/behavai" element={<BehavAI />} />
        <Route path="/case-studies/aquatonomy" element={<Aquatonomy />} />
        <Route path="/case-studies/hira" element={<Hira />} />
        <Route path="/case-studies/stackbuilder" element={<Stackbuilder />} />
        <Route path="/case-studies/moonranger" element={<Moonranger />} />
        <Route path="/case-studies/taptap" element={<TapTap />} />
        <Route path="/case-studies/lightthemuse" element={<LightTheMuse />} />
      </Routes>
      {!isDetailPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
