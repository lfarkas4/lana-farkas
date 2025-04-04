// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About"; // 👈 your new About page

import "./styles/Global.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
