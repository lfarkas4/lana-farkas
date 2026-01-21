// src/components/BehavaiAboutABA.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function BehavaiAboutABA() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="behavai-about-aba is-light"
      aria-label="Choosing our domain"
    >
      <div className="behavai-about-aba-inner reveal">
        {/* Header */}
        <header className="behavai-about-aba-header">
          <p className="behavai-about-aba-eyebrow">Choosing Our Domain</p>
          <h2 className="behavai-about-aba-title">
            We chose behavioral healthcare, a field where therapists face{" "}
            <em>relentless burnout</em> and <em>systemic stress</em>.
          </h2>
        </header>

        {/* Content Grid */}
        <div className="behavai-about-aba-content">
          {/* Left: Media */}
          <div className="behavai-about-aba-media">
            <img
              src="/assets/abagraphic.png"
              alt="ABA therapy illustration"
              className="about-aba-image"
            />
          </div>

          {/* Right: Text */}
          <div className="behavai-about-aba-body">
            <p>
              After exploring several healthcare domains, we discovered{" "}
              <span className="hi">Applied Behavior Analysis (ABA)</span>, a widely 
              used, evidence-based therapy for autism and related conditions.
            </p>
            <p>
              But the field is plagued by <span className="hi">high burnout rates</span>,
              minimal public recognition, and
              chaotic work environments.
            </p>
            <p>
              We saw an opportunity to <span className="hi">address these challenges</span>{" "}
              through better tooling, giving therapists more time to focus on{" "}
              <span className="hi">what matters most</span>— their clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}