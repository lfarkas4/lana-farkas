// src/components/OverviewSection.jsx
import React from "react";

export default function OverviewSection({
  videoSrc = "/assets/aqua-underwater.mp4",
  imageSrc = null,
}) {
  return (
    <section className="overview-section" aria-label="Project overview">
      {/* Header section - ABOVE the split layout */}
      <div className="overview-header">
        <div className="overview-eyebrow">Overview</div>
        
        <h3 className="overview-title">
          Aquatonomy turns <span className="overview-title-light">murky depths</span> into clear decisions for engineers in the field and at the office.
        </h3>
      </div>

      {/* Split layout - Media left, Body text right */}
      <div className="overview-inner">
        {/* Left side - Media */}
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
            <img
              src={imageSrc}
              alt="Underwater robotics"
              className="overview-image"
            />
          ) : null}
          
          {/* Caption below image */}
          <p className="overview-caption">
            Meet the hardest-working teammate — the robot!
          </p>
        </div>

        {/* Right side - Body text only */}
        <div className="overview-content">
          <div className="overview-body">
            <p>
              Aquatonomy is a robotics startup building autonomous systems for underwater inspection. The tech was innovative, but <strong>the operator experience still had gaps.</strong>
            </p>

            <p>
              I led the <strong>console review</strong> and <strong>linked field research</strong> to design. Interviews with divers and engineers revealed the need for <strong>clearer status cues</strong> and <strong>simpler processes</strong>, which I prototyped and tested to ensure the console worked in real inspections.
            </p>

            <p>
              And honestly? After a semester of thinking about unforgiving currents, freezing divers, snagged tethers, and robots bumping around in the dark...
            </p>

            <p className="overview-closing">
              <em>I'll never look at a dam the same way again.</em>
            </p>
          </div>
        </div>
      </div>

      {/* Floating arrow decoration */}
      <img 
        src="/assets/spark-arrow.svg" 
        alt="" 
        className="overview-arrow"
        aria-hidden="true"
      />
      <img 
        src="/assets/curve.svg" 
        alt="" 
        className="overview-curve"
        aria-hidden="true"
      />
    </section>
  );
}