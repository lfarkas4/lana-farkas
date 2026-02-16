import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Hero.scss";
import useShootingStar from "../utils/shootingstar";
import Lana from "./Lana";

const Hero = ({ isLoading = false }) => {
  useShootingStar();
  const location = useLocation();
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Check if we should skip hero animations (e.g., when scrolling to work section)
    const skipHeroAnimation = location.state?.skipHeroAnimation;

    if (skipHeroAnimation) {
      // Skip hero animations, show content immediately
      setShouldAnimate(false);

      // Clear the navigation state to prevent issues on refresh
      window.history.replaceState({}, document.title);
    } else {
      // Play full entrance animations
      setShouldAnimate(true);
    }
  }, [location.state]);

  return (
    <section
      className={`hero ${isLoading ? "hero-loading" : "hero-loaded"}`}
      id="home"
    >
      <div className="hero-inner-wrapper">
        <h1
          className={`hero-title ${shouldAnimate ? "animate-fade-in" : "no-animation"}`}
          style={shouldAnimate ? { animationDelay: "0.1s" } : {}}
        >
          <span className="font-cooper-italic-hello">hello</span>, my name is
        </h1>

        {/* Lana logo */}
        <div
          className={`${shouldAnimate ? "animate-fade-in" : "no-animation"}`}
          style={shouldAnimate ? { animationDelay: "0.2s" } : {}}
        >
          <Lana />
        </div>

        {/* Tagline */}
        <p
          className={`hero-tagline ${shouldAnimate ? "animate-fade-in" : "no-animation"}`}
          style={shouldAnimate ? { animationDelay: "0.3s" } : {}}
        >
          <span className="tagline-gtxs">
            … a product designer translating{" "}
            <span className="font-cooper-italic-tag">insights</span>
            <br />
            into <span className="font-cooper-italic-tag">interfaces</span> ready for
            launch.
          </span>

          {/* XS only */}
          <span className="tagline-xs">
            <span className="line">… a product designer translating</span>
            <span className="line">insights into interfaces</span>
            <span className="line">ready for launch.</span>
          </span>
        </p>

        {/* Info columns */}
        <div
          className={`hero-info ${shouldAnimate ? "animate-fade-in" : "no-animation"}`}
          style={shouldAnimate ? { animationDelay: "0.4s" } : {}}
        >
          <div className="hero-column">
            <h4 className="font-cooper-italic">previously learned</h4>
            <p>mhci @ carnegie mellon university</p>
          </div>

          <div className="hero-column">
            <h4 className="font-cooper-italic">currently building</h4>
            <p>
              digital design systems @{" "}
              <a href="https://www.tutors.plus/" target="_blank" rel="noopener noreferrer">
                plus
              </a>
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className={`scroll-cue ${shouldAnimate ? "animate-fade-in" : "no-animation"}`}
          style={shouldAnimate ? { animationDelay: "0.5s" } : {}}
        >
          <div className="scroll-mouse">
            <div className="scroll-dot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;