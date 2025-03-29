import React from "react";
import "../styles/Hero.css";
import Lana from "./Lana";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <h1 className="hero-title">hello, my name is</h1>
      {/* Lana SVG logo */}
      <Lana />

      {/* Tagline */}
      <p className="hero-tagline">
        ... a product designer bringing clarity to the cosmos of digital experiences.

      </p>

      {/* Info columns */}
      <div className="hero-info">
        <div className="hero-column">
          <h4>currently</h4>
          <p>
            product design intern @{" "}
            <a
              href="https://www.tutors.plus/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              plus
            </a>
          </p>
          <p>mhci @ carnegie mellon university</p>
        </div>
        <div className="hero-column">
          <h4>previously</h4>
          <p>b.a. cognitive science @ uva</p>
          <p>
            systems designer @{" "}
            <a
              href="https://www.aquatonomy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aquatomony
            </a>
          </p>
        </div>
      </div>

      {/* Scroll down arrow */}
    <div className="scroll-down">
    <img src="/assets/downarrow.svg" alt="Scroll Down Arrow" className="scroll-arrow" />
    </div> 
    </section>
  );
};

export default Hero;
