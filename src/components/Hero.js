import React from "react";
import "../styles/Hero.scss";
import useShootingStar from "../utils/shootingstar";
import Lana from "./Lana";

const Hero = () => {
useShootingStar();
  return (
    <section className="hero" id="home">
      <div className="hero-inner-wrapper">
      <h1 className="hero-title">
      <span className="font-cooper-italic-hello">hello</span>, my name is
      </h1>
        {/* Lana SVG logo */}
        <Lana />

        {/* Tagline */}
        <p className="hero-tagline">
  ... a product futurist bringing <span className="font-cooper-italic-tag">clarity</span> to the <br />
  <span className="font-cooper-italic-tag">cosmos</span> of digital experiences.
</p>

        {/* Info columns */}
        <div className="hero-info">
          <div className="hero-column">
          <h4 className="font-cooper-italic">currently learning</h4>
            <p>mhci @ carnegie mellon university</p>
          </div>
          <div className="hero-column">
          <h4 className="font-cooper-italic">currently building
                    </h4>
            <p>
            product design systems @{" "}
              <a
                href="https://www.tutors.plus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                plus
              </a>
              </p>
          </div>
        </div>

          {/* Scroll down arrow */}
        <div className="scroll-cue">
        <div className="scroll-mouse">
        <div className="scroll-dot" />
        </div>
        </div> 
      </div>
    </section>
  );
};

export default Hero;
