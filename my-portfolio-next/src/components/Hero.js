import React, { useState, useEffect } from "react";
import useShootingStar from "../utils/shootingstar";
import Lana from "./Lana";

const Hero = ({ isLoading = false }) => {
  useShootingStar();
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // True on first visit this session, false on page-to-page navigation
  const isReturn = typeof window !== "undefined" && sessionStorage.getItem("heroSeen");

  // Delays: full on first visit, snappier on return navigation
  const delays = isReturn
    ? { title: "0s", lana: "0.05s", tagline: "0.1s", info: "0.15s", scroll: "0.2s" }
    : { title: "0.1s", lana: "0.2s", tagline: "0.3s", info: "0.4s", scroll: "0.5s" };

  const skipHeroAnimation = false;
  useEffect(() => {
    if (skipHeroAnimation) {
      setShouldAnimate(false);
      window.history.replaceState({}, document.title);
    } else {
      setShouldAnimate(true);
    }

    // Mark that the hero has been seen this session
    sessionStorage.setItem("heroSeen", "true");
  }, []);

  return (
    <section
      className={`hero ${isLoading ? "hero-loading" : "hero-loaded"}`}
      id="home"
    >
      <div className="hero-inner-wrapper">
        <h1
          className={`hero-title ${shouldAnimate ? "animate-fade-in" : "no-animation"}`}
          style={shouldAnimate ? { animationDelay: delays.title } : {}}
        >
          <span className="font-cooper-italic-hello">hello</span>, my name is
        </h1>

        {/* Lana logo */}
        <div
          className={`${shouldAnimate ? "animate-fade-in" : "no-animation"}`}
          style={shouldAnimate ? { animationDelay: delays.lana } : {}}
        >
          <Lana />
        </div>

        {/* Tagline */}
        <p
          className={`hero-tagline ${shouldAnimate ? "animate-fade-in" : "no-animation"}`}
          style={shouldAnimate ? { animationDelay: delays.tagline } : {}}
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
          style={shouldAnimate ? { animationDelay: delays.info } : {}}
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
          style={shouldAnimate ? { animationDelay: delays.scroll } : {}}
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