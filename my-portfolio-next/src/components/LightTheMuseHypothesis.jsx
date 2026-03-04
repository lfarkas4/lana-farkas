// src/components/LightTheMuseHypothesis.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function LightTheMuseHypothesis() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="light-hypothesis is-light"
      aria-label="Light the Muse Hypothesis"
    >
      <div className="light-hypothesis-inner reveal reveal--up" style={{ "--reveal-delay": "0ms" }}>

        {/* Header */}
        <header className="light-hypothesis-header">
          <p className="light-hypothesis-eyebrow">Our Hypothesis</p>

          <h2 className="light-hypothesis-title">
            Popular platforms prioritize <em>mindless consumption</em>, but{" "}
            <em>intentional creation</em> could fill that void.
          </h2>
        </header>

        {/* Content Grid — media left + body right */}
        <div className="light-hypothesis-content">
          {/* Left: Media */}
          <div className="light-hypothesis-media">
            <img
              src="/assets/scrollmedia.webp"
              alt="Person scrolling on phone with overlay icons"
              className="hypothesis-image"
            />
          </div>

          {/* Right: Body Text */}
          <div className="light-hypothesis-body">
            <p>
              We started by analyzing how people interact with addictive
              technology and found a <span className="hi">troubling pattern</span>:
              platforms like TikTok and Instagram are designed to keep us scrolling, but <span className="hi">why is it so
              effective</span>?
            </p>

            <p>
              The answer is that passive consumption{" "}
              requires no thought, no energy, no commitment.{" "}
              <span className="hi">But creation does!</span>
            </p>

            <p>
              We believed that by encouraging people to make instead of consume,
              we could <span className="hi">redirect attention</span> toward
              something more fulfilling.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}