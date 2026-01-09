import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";

import About from "./pages/About";
import Home from "./pages/Home";
import BehavAI from "./pages/BehavAI";
import Aquatonomy from "./pages/Aquatonomy";
import Hira from "./pages/Hira";
import Stackbuilder from "./pages/Stackbuilder";
import Moonranger from "./pages/Moonranger";
import TapTap from "./pages/TapTap";
import LightTheMuse from "./pages/LightTheMuse";

import "./styles/Global.scss";
import CosmicBackground from "./components/CosmicBackground";

// --- GA helpers (no extra files needed) ---
const gaEvent = (name, params = {}) => {
  if (!window.gtag) return;
  window.gtag("event", name, params);
};

const gaPageview = (path) => {
  if (!window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};

function AppContent() {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith("/case-studies/");
  const isHomePage = location.pathname === "/";

  // ✅ Cosmic is ONLY on these pages
  const isCosmicPage =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname.startsWith("/under-construction") ||
    location.pathname.startsWith("/case-studies/"); // Include case study pages (for under construction)

  // Loading states
  const [contentReady, setContentReady] = useState(!isHomePage);
  const [loadingMounted, setLoadingMounted] = useState(isHomePage);

  const handleLoadComplete = () => {
    sessionStorage.setItem("portfolio-loaded", "true");
    setContentReady(true);

    setTimeout(() => {
      setLoadingMounted(false);
    }, 400);
  };

  // Track SPA pageviews on route changes
  useEffect(() => {
    gaPageview(location.pathname + location.search);
  }, [location]);

  // Track clicks on any case study link (project clicks) via event delegation
  useEffect(() => {
    const handleDocClick = (e) => {
      const anchor = e.target?.closest?.("a");
      if (!anchor) return;

      const hrefAttr = anchor.getAttribute("href");
      if (!hrefAttr) return;

      let path = hrefAttr;
      try {
        if (hrefAttr.startsWith("http")) {
          path = new URL(hrefAttr).pathname;
        }
      } catch (_) {}

      if (!path.startsWith("/case-studies/")) return;

      const projectSlug = path.split("/").filter(Boolean).pop() || path;

      gaEvent("project_click", {
        project: projectSlug,
        destination: path,
        link_text: (anchor.textContent || "").trim().slice(0, 80),
      });
    };

    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);

  // Determine if we should show nav/footer
  const showNavFooter = !isDetailPage && contentReady;

  return (
    <>
      {/* ✅ Only mount your cursor tracker + cosmic background on cosmic pages */}
      {isCosmicPage && (
        <CosmicBackground showFluidCursor={true} />
      )}

      {/* ✅ If your "CustomCursor" is also a tracker, gate it the same way */}
      {isCosmicPage && <CustomCursor />}

      {/* Loading Screen */}
      {loadingMounted && isHomePage && (
        <LoadingScreen onLoadComplete={handleLoadComplete} />
      )}

      {/* Navigation */}
      {showNavFooter && <Navigation />}

      <Routes>
        <Route path="/" element={<Home isLoading={!contentReady} />} />
        <Route path="/about" element={<About />} />

        <Route path="/case-studies/behavai" element={<BehavAI />} />
        <Route path="/case-studies/aquatonomy" element={<Aquatonomy />} />
        <Route path="/case-studies/hira" element={<Hira />} />
        <Route path="/case-studies/stackbuilder" element={<Stackbuilder />} />
        <Route path="/case-studies/moonranger" element={<Moonranger />} />
        <Route path="/case-studies/taptap" element={<TapTap />} />
        <Route path="/case-studies/lightthemuse" element={<LightTheMuse />} />
      </Routes>

      {/* Footer */}
      {showNavFooter && <Footer />}
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