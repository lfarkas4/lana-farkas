// src/components/HiraOurChallenge.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function HiraOurChallenge() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="hira-challenge is-light"
      aria-label="Hira Health challenge overview"
    >
      <div className="hira-challenge-inner reveal">
        {/* Header */}
        <header className="hira-challenge-header">
          <p className="hira-challenge-eyebrow">Our Challenge</p>
          <h2 className="hira-challenge-title">
            Gynecologic oncology care is clinically excellent — but it can still feel{" "}
            <em>confusing</em>, <em>isolating</em>, and <em>overwhelming</em>.
          </h2>
        </header>

        {/* Media */}
        <div className="hira-challenge-media">
          <img
            src="/assets/hira-graphic.png"
            alt="Three photo cards showing gynecologic oncology care moments with icon stickers"
            className="hira-challenge-image"
          />
        </div>

        {/* Body */}
        <div className="hira-challenge-body">
          <p>
            We partnered with <span className="hi">UPMC Magee-Womens Hospital</span> on a 15-week project exploring care coordination in{" "}
            <span className="hi">gynecologic oncology</span> across appointments, handoffs, and everything in between.
          </p>
          <p>
            Through appointment shadowing, provider observation, and co-design with patients, caregivers, and clinicians, I mapped{" "}
            <span className="hi">where support breaks down</span> and what more navigable care could look like.
          </p>
          <p>
            After hearing so many women describe spending their lives caring for others, it was clear that care should not be asking them to{" "}
            <span className="hi">stay strong in silence</span>. It should be giving them space to{" "}
            <span className="hi">speak about what is real</span>.
          </p>
        </div>
      </div>
    </section>
  );
}