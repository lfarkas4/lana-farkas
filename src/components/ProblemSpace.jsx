// src/components/ProblemSpace.jsx
import React from "react";

export default function ProblemSpace() {
  return (
    <section className="problem-why-section" aria-label="Problem space and context">
      {/* Problem Space Header - FULL WIDTH like Overview */}
      <div className="pw-header">
        <div className="pw-eyebrow">Problem Space</div>
        <h3 className="pw-title">
          Underwater inspections happen in some of the <span className="pw-title-light">toughest conditions</span>, and the complexity goes beyond the water itself.
        </h3>
      </div>

      {/* Icon Grid - 4 columns */}
      <div className="pw-icons">
        <div className="pw-icon-item">
          <div className="pw-icon-wrapper">
            <img src="/assets/harsh.svg" alt="" aria-hidden="true" />
          </div>
          <h4 className="pw-icon-title">Harsh Environments</h4>
          <p className="pw-icon-label">
            Zero visibility, freezing water, fast currents.
          </p>
        </div>

        <div className="pw-icon-item">
          <div className="pw-icon-wrapper">
            <img src="/assets/niche.svg" alt="" aria-hidden="true" />
          </div>
          <h4 className="pw-icon-title">Niche Users</h4>
          <p className="pw-icon-label">
            Civil engineers, divers, roboticists, public safety.
          </p>
        </div>

        <div className="pw-icon-item">
          <div className="pw-icon-wrapper">
            <img src="/assets/multi.svg" alt="" aria-hidden="true" />
          </div>
          <h4 className="pw-icon-title">Multi-User Workflows</h4>
          <p className="pw-icon-label">
            Field operators, engineers in the office, clients reviewing data.
          </p>
        </div>

        <div className="pw-icon-item">
          <div className="pw-icon-wrapper">
            <img src="/assets/high.svg" alt="" aria-hidden="true" />
          </div>
          <h4 className="pw-icon-title">High Stakes</h4>
          <p className="pw-icon-label">
            Failures mean safety risks and missed inspections.
          </p>
        </div>
      </div>

      {/* Why This Matters - FULL WIDTH like Overview */}
      <div className="pw-why-header">
        <div className="pw-eyebrow">Why This Matters</div>
        <h3 className="pw-title">
          Aquatonomy isn't a tool for one person, it's a system for a <br></br>network of people with <span className="pw-title-light">different goals and contexts</span>.
        </h3>
      </div>

      {/* Images with captions */}
      <div className="pw-images">
        <div className="pw-image-item">
          <img 
            src="/assets/aqpic1.jpg" 
            alt="Team learning how the robot works" 
            className="pw-image"
          />
          <p className="pw-caption">
            Learning how the robot and operators work together.
          </p>
        </div>

        <div className="pw-image-item">
          <img 
            src="/assets/aqpic2.jpg" 
            alt="Field testing deployment" 
            className="pw-image"
          />
          <p className="pw-caption">
            Deployment and field testing on the Allegheny River.
          </p>
        </div>
      </div>

      {/* Sparkle decoration */}
      <img 
        src="/assets/spark-six.svg" 
        alt="" 
        className="pw-sparkle"
        aria-hidden="true"
      />
    </section>
  );
}