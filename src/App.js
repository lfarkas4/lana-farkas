// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

// Pages
import About from "./pages/About";
import Home from "./pages/Home";

// Styles
import "./styles/Global.css";
import CosmicBackground from "./components/CosmicBackground"; // ✅ Import the background component

function App() {
  return (
    <Router>
      <CosmicBackground /> {/* ✅ Persistent animated background */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
