// src/components/SolutionImpact.jsx
import React from "react";

export default function SolutionImpact() {
  return (
    <section className="solution-impact-section" aria-label="Solution and impact">
      {/* Solution Section */}
      <div className="si-solution">
        <div className="si-eyebrow">Solution</div>
        <h3 className="si-title">
          Delivered UX workflows and strategies that <span className="si-title-light">streamlined inspections</span>, helping users <span className="si-title-light">plan, supervise</span>, and <span className="si-title-light">review</span> with confidence.
        </h3>

        <div className="si-body">
          <p>
          Our team reframed Aquatonomy as a <strong>decision-support system</strong> by <strong>simplifying workflows</strong>, adding <strong>clear signal patterns</strong> for zero-visibility confidence, and centering <strong>cross-user coordination</strong> to focus effort where robotics adds the most value!
          </p>
        </div>
      </div>

      {/* Impact Section */}
      <div className="si-impact">
        <div className="si-eyebrow">Impact</div>

        {/* Stats Grid */}
        <div className="si-stats">
          <div className="si-stat">
            <div className="si-stat-number">30%</div>
            <p className="si-stat-label">fewer steps in operator workflows</p>
          </div>

          <div className="si-stat">
            <div className="si-stat-number">12</div>
            <p className="si-stat-label">high-fidelity prototypes tested and shared</p>
          </div>

          <div className="si-stat">
            <div className="si-stat-number">20+</div>
            <p className="si-stat-label">stakeholders validated new task flows</p>
          </div>

          <div className="si-stat">
            <div className="si-stat-number">1</div>
            <p className="si-stat-label">system blueprint adopted into roadmap</p>
          </div>
        </div>

        {/* Sparkle decoration */}
        <img 
          src="/assets/spark-call.svg" 
          alt="" 
          className="si-sparkle"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}