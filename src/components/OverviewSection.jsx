// src/components/OverviewSection.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function OverviewSection({
  videoSrc = "/assets/aqua-underwater.mp4",
  imageSrc = null,
}) {
  const scopeRef = useReveal(); // observes this section

  return (
    <section ref={scopeRef} className="overview-section" aria-label="Project overview">
      {/* One unified reveal for all overview content */}
      <div className="overview-reveal-block reveal reveal--up" style={{ "--reveal-delay": "0ms" }}>
        {/* Header */}
        <div className="overview-header">
          <div className="overview-eyebrow">Overview</div>
          <h3 className="overview-title">
            Aquatonomy turns <span className="overview-title-light">murky depths</span> into clear
            decisions for engineers in the field and at the office.
          </h3>
        </div>

        {/* Split layout */}
        <div className="overview-inner">
          {/* Media */}
          <div className="overview-media">
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="overview-video"
              />
            ) : imageSrc ? (
              <img src={imageSrc} alt="Underwater robotics" className="overview-image" />
            ) : null}
            <p className="overview-caption">Meet the hardest-working teammate — the robot!</p>
          </div>

          {/* Body */}
          <div className="overview-content">
            <div className="overview-body">
              <p>
                Aquatonomy is a robotics startup building autonomous systems for underwater
                inspection. The tech was innovative, but the <strong>operator experience</strong> still had
                gaps.
              </p>
              <p>
                I led the <strong>console review</strong> and <strong>linked field research</strong>{' '}
                to design. Interviews with divers and engineers revealed the need for
                <strong> clearer status cues</strong> and <strong>simpler processes</strong>, which I
                prototyped and tested to ensure the console worked in real inspections.
              </p>
              <p>
                And honestly? After months of thinking about deep water, freezing divers, and robots bumping around in the dark...
              </p>
              <p className="overview-closing">
                <em>I&apos;ll never look at a dam the same way again.</em>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorations fade in after the block */}
      <img
  src="/assets/spark-arrow.svg"
  alt=""
  className="overview-arrow reveal reveal--up arrow-reveal"
  aria-hidden="true"
/>
      <img src="/assets/curve.svg" alt="" className="overview-curve" aria-hidden="true" />
    </section>
  );
}
