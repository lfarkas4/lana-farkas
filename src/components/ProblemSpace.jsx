// src/components/ProblemSpace.jsx
import React from "react";
import useReveal from "../utils/useReveal"; // same hook Overview uses

export default function ProblemSpace() {
  // this sets up IntersectionObserver just like in Overview
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="problem-why-section"
      aria-label="Problem space and context"
    >
      {/* Problem Space Header */}
      <div className="pw-header reveal-block">
        <div className="pw-eyebrow">Problem Space</div>
        <h3 className="pw-title">
          Underwater inspections happen in some of the{" "}
          <span className="pw-title-light">toughest conditions</span>, and the
          complexity goes beyond the water.
        </h3>
      </div>

      {/* Icon Grid */}
      <div className="pw-icons reveal-block" data-stagger-block>
        <div className="pw-icon-item">
          <div className="pw-icon-wrapper">
            <img src="/assets/harsh.png" alt="" aria-hidden="true" />
          </div>
          <h4 className="pw-icon-title">Harsh Environments</h4>
          <p className="pw-icon-label">
            Zero visibility, freezing water, fast currents.
          </p>
        </div>

        <div className="pw-icon-item">
          <div className="pw-icon-wrapper">
            <img src="/assets/niche.png" alt="" aria-hidden="true" />
          </div>
          <h4 className="pw-icon-title">Niche Users</h4>
          <p className="pw-icon-label">
            Divers, engineers, roboticists, public safety.
          </p>
        </div>

        <div className="pw-icon-item">
          <div className="pw-icon-wrapper">
            <img src="/assets/multi.png" alt="" aria-hidden="true" />
          </div>
          <h4 className="pw-icon-title">Multi-User Workflows</h4>
          <p className="pw-icon-label">
            Field operators and clients share the same mission.
          </p>
        </div>

        <div className="pw-icon-item">
          <div className="pw-icon-wrapper">
            <img src="/assets/high.png" alt="" aria-hidden="true" />
          </div>
          <h4 className="pw-icon-title">High Stakes</h4>
          <p className="pw-icon-label">
            Failures mean safety risks and missed inspections.
          </p>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="pw-why-header reveal-block">
        <div className="pw-eyebrow">Why This Matters</div>
        <h3 className="pw-title">
          Aquatonomy isn&apos;t a tool for one person, it&apos;s a system for a{" "}
          <br />
          network of people with{" "}
          <span className="pw-title-light">
            different goals and contexts
          </span>
          .
        </h3>
      </div>

      {/* Images */}
      <div className="pw-images reveal-block" data-stagger-block>
        <div className="pw-image-item">
          <img
            src="/assets/aqpic1.webp"
            alt="Team learning how the robot works"
            className="pw-image"
          />
          <p className="pw-caption">
            Learning how the robot and operators work together.
          </p>
        </div>

        <div className="pw-image-item">
          <img
            src="/assets/aqpic2.webp"
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
        className="pw-sparkle reveal-block--decor"
        aria-hidden="true"
      />
    </section>
  );
}
