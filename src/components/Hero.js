import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Hero.scss";
import useShootingStar from "../utils/shootingstar";
import Lana from "./Lana";

const Hero = () => {
  useShootingStar();
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Check if we should skip hero animations (e.g., when scrolling to work section)
    const skipHeroAnimation = location.state?.skipHeroAnimation;
    
    if (skipHeroAnimation) {
      // Skip hero animations, show content immediately
      setShouldAnimate(false);
      setIsLoaded(true);
      
      // Clear the navigation state to prevent issues on refresh
      window.history.replaceState({}, document.title);
    } else {
      // Play full entrance animations
      setShouldAnimate(true);
      setIsLoaded(true);
    }
  }, [location.state]);

  return (
    <section className={`hero ${isLoaded ? 'hero-loaded' : ''}`} id="home">
      <div className="hero-inner-wrapper">
        <h1 
          className={`hero-title ${shouldAnimate ? 'animate-fade-in' : 'no-animation'}`} 
          style={shouldAnimate ? { animationDelay: '0.1s' } : {}}
        >
          <span className="font-cooper-italic-hello">hello</span>, my name is
        </h1>
        
        {/* Lana SVG logo - always animates */}
        <div 
          className={`${shouldAnimate ? 'animate-fade-in' : 'no-animation'}`}
          style={shouldAnimate ? { animationDelay: '0.2s' } : {}}
        >
          <Lana />
        </div>

        {/* Tagline */}
        <p 
          className={`hero-tagline ${shouldAnimate ? 'animate-fade-in' : 'no-animation'}`}
          style={shouldAnimate ? { animationDelay: '0.3s' } : {}}
        >
          {/* > XS (keeps your single <br /> before "cosmos") */}
          <span className="tagline-gtxs">
            … a product futurist bringing <span className="font-cooper-italic-tag">clarity</span> to the{" "}
            <br />
            <span className="font-cooper-italic-tag">cosmos</span> of digital experiences.
          </span>

          {/* XS only (3 exact lines) */}
          <span className="tagline-xs">
            <span className="line">… a product futurist bringing</span>
            <span className="line">
              <span className="font-cooper-italic-tag">clarity</span> to the{" "}
              <span className="font-cooper-italic-tag">cosmos</span> of
            </span>
            <span className="line">digital experiences.</span>
          </span>
        </p>

        {/* Info columns */}
        <div 
          className={`hero-info ${shouldAnimate ? 'animate-fade-in' : 'no-animation'}`}
          style={shouldAnimate ? { animationDelay: '0.4s' } : {}}
        >
          <div className="hero-column">
            <h4 className="font-cooper-italic">currently learning</h4>
            <p>mhci @ carnegie mellon university</p>
          </div>
          <div className="hero-column">
            <h4 className="font-cooper-italic">currently building</h4>
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
        <div 
          className={`scroll-cue ${shouldAnimate ? 'animate-fade-in' : 'no-animation'}`}
          style={shouldAnimate ? { animationDelay: '0.5s' } : {}}
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