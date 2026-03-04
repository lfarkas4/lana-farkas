// src/components/LightTheMuseFeatures.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function LightTheMuseFeatures() {
  const featuresSectionRef = useReveal();

  return (
    <section
      ref={featuresSectionRef}
      className="light-features"
      aria-label="Light the Muse core features"
    >
      <div className="light-features-inner">

        {/* ===== HEADER ===== */}
        <header className="light-features-header reveal">
          <p className="light-features-eyebrow">Core Features</p>
          <h2 className="light-features-title">
            Light the Muse adapts to your <em>creative rhythm</em> while keeping the <em>focus on making</em>, not consuming.
          </h2>
        </header>

        {/* ===== FEATURE 1: PERSONALIZED PROMPTS ===== */}
        <div className="light-features-demo reveal">
          <div className="light-features-demo-media">
            <video
              src="/assets/muse1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="light-features-demo-video"
            />
          </div>

          <div className="light-features-demo-content">
            <h3 className="light-features-demo-heading">
              <span className="light-features-demo-number">1.</span> Personalized prompts tailored to your practice
            </h3>
            <p className="light-features-demo-description">
              Customize how often you receive prompts and choose how specific or open-ended you want the inspiration to be.
            </p>
          </div>
        </div>

        {/* ===== FEATURE 2: FOCUS MODE ===== */}
        <div className="light-features-demo light-features-demo--reverse reveal">
          <div className="light-features-demo-content">
            <h3 className="light-features-demo-heading">
              <span className="light-features-demo-number">2.</span> Use a Focus Mode timer to lock out distractions
            </h3>
            <p className="light-features-demo-description">
              A Pomodoro-style timer keeps your screen locked and notifications silent, with space to document your progress after each session.
            </p>
          </div>

          <div className="light-features-demo-media">
            <video
              src="/assets/muse2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="light-features-demo-video"
            />
          </div>
        </div>

        {/* ===== FEATURE 3: COMMUNITY CHALLENGES ===== */}
        <div className="light-features-demo reveal">
          <div className="light-features-demo-media">
            <video
              src="/assets/musee3.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="light-features-demo-video"
            />
          </div>

          <div className="light-features-demo-content">
            <h3 className="light-features-demo-heading">
              <span className="light-features-demo-number">3.</span> Community challenges to inspire and connect
            </h3>
            <p className="light-features-demo-description">
              Browse themed challenges created by other users, explore mood boards of shared work, and explore other creations for inspiration.
            </p>
          </div>
        </div>

        {/* ===== FEATURE 4: PROGRESS TRACKING ===== */}
        <div className="light-features-demo light-features-demo--reverse reveal">
          <div className="light-features-demo-content">
            <h3 className="light-features-demo-heading">
              <span className="light-features-demo-number">4.</span> Progress tracking to celebrate your journey
            </h3>
            <p className="light-features-demo-description">
            A visual timeline organizes your creations with the moods and moments that shaped them, so you can track your progress at a glance.
            </p>
          </div>

          <div className="light-features-demo-media">
            <video
              src="/assets/muse4.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="light-features-demo-video"
            />
          </div>
        </div>

      </div>
    </section>
  );
}