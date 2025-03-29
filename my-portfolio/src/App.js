import React from "react";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./styles/Global.css";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
