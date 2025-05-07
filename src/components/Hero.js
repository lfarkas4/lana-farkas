import React from "react";
import "../styles/Hero.css";
import useShootingStar from "../utils/shootingstar";
import Lana from "./Lana";

const Hero = () => {
useShootingStar();
  return (
    <section className="hero" id="home">
      <h1 className="hero-title">hello, my name is</h1>
      {/* Lana SVG logo */}
      <Lana />

      {/* Tagline */}
      <p className="hero-tagline">
        ... a product designer bringing <span className="italic">clarity</span> to the <span className="italic">cosmos</span> of digital experiences.

      </p>

      {/* Info columns */}
      <div className="hero-info">
        <div className="hero-column">
          <h4>currently</h4>
          <p>
            product design intern @{" "}
            <a
              href="https://www.tutors.plus/"
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
          <p>b.a. cogsci @ university of virginia</p>
          <p>
            product experience designer @{" "}
            <a
              href="https://www.aquatonomy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aquatonomy
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
