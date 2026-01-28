// src/components/HiraSolution.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function HiraSolution() {
  const solutionSectionRef = useReveal();

  return (
    <section
      ref={solutionSectionRef}
      className="hira-solution is-dark"
      aria-label="Hira Health complete solution"
    >
      <div className="hira-solution-inner">
        
        {/* ===== HERO: MEET HIRA ===== */}
        <div className="hira-solution-hero reveal">
          <div className="hira-solution-hero-content">
            <p className="hira-solution-hero-eyebrow">Final Solution</p>
            <h2 className="hira-solution-hero-title">
              Meet Hira, A WatchOS tool designed to help patients <em>feel heard</em>, <em>stay grounded</em>, and leave appointments with <em>clarity</em>.
            </h2>
          </div>
        </div>

        {/* ===== WATCH DEMO 1: SAY IT OUT LOUD ===== */}
        <div className="hira-solution-demo reveal">
          <div className="hira-solution-demo-media">
            <video
              src="/assets/hirra4.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="hira-solution-demo-video"
            />
          </div>

          <div className="hira-solution-demo-content">
            <h3 className="hira-solution-demo-heading">
              <span className="hira-solution-demo-number">1.</span> Say it out loud to capture a moment
            </h3>
            <p className="hira-solution-demo-description">
              Record a quick thought or symptom without interrupting what you're doing.
            </p>
          </div>
        </div>

        {/* ===== WATCH DEMO 2: SURFACE PROMPTS ===== */}
        <div className="hira-solution-demo hira-solution-demo--reverse reveal">
          <div className="hira-solution-demo-content">
            <h3 className="hira-solution-demo-heading">
              <span className="hira-solution-demo-number">2.</span> Surface prompts, reminders, and recent logs
            </h3>
            <p className="hira-solution-demo-description">
              Swipe through widgets that keep priorities visible: what's next, what's new, what repeats.
            </p>
          </div>

          <div className="hira-solution-demo-media">
            <video
              src="/assets/hirrra.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="hira-solution-demo-video"
            />
          </div>
        </div>

        {/* ===== WATCH DEMO 3: REVIEW PATTERNS ===== */}
        <div className="hira-solution-demo reveal">
          <div className="hira-solution-demo-media">
            <video
              src="/assets/hirrrra3.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="hira-solution-demo-video"
            />
          </div>

          <div className="hira-solution-demo-content">
            <h3 className="hira-solution-demo-heading">
              <span className="hira-solution-demo-number">3.</span> Review your patterns to prep for what's next
            </h3>
            <p className="hira-solution-demo-description">
              Turn voice logs into themes you can revisit before appointments and significant decisions.
            </p>
          </div>
        </div>

        {/* ===== LIVE CONTEXT ===== */}
        <div className="hira-live-context reveal">
          <header className="hira-live-context-header">
            <p className="hira-live-context-eyebrow">Live Context</p>
            <h2 className="hira-live-context-title">
              Hira uses context signals to nudge at the right moments with <em>gentle reminders</em>, <em>check-ins</em>, and <em>prep</em>.
            </h2>
          </header>

          <div className="hira-live-context-visual">
          <video
      // src="/assets/nutif.mp4"
      src="/assets/hora.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="hira-live-context-image"
    />
          </div>
        </div>

        {/* ===== MOBILE COMPANION INTRO ===== */}
        <div className="hira-mobile-intro reveal">
          <p className="hira-mobile-intro-eyebrow">Mobile Companion</p>
          <h2 className="hira-mobile-intro-title">
            Hira's mobile view brings everything together, including <em>appointments</em>, <em>health signals</em>, and <em>long-term trends</em>.
          </h2>
        </div>

        {/* ===== MOBILE DEMO 1: SYNC DATA ===== */}
        <div className="hira-solution-demo hira-solution-demo--mobile reveal">
          <div className="hira-solution-demo-media">
            <video
              src="/assets/hick2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="hira-solution-demo-video hira-solution-demo-video--mobile"
            />
          </div>

          <div className="hira-solution-demo-content">
            <h3 className="hira-solution-demo-heading">
              <span className="hira-solution-demo-number">1.</span> Sync appointments and health data
            </h3>
            <p className="hira-solution-demo-description">
              Sync appointments from the hospital portal and biometrics from Apple Health for richer context.
            </p>
          </div>
        </div>

        {/* ===== MOBILE DEMO 2: TRACK PATTERNS ===== */}
        <div className="hira-solution-demo hira-solution-demo--mobile hira-solution-demo--reverse reveal">
          <div className="hira-solution-demo-content">
            <h3 className="hira-solution-demo-heading">
              <span className="hira-solution-demo-number">2.</span> Track patterns across days and weeks
            </h3>
            <p className="hira-solution-demo-description">
              Visualize symptom trends and recurring themes pulled from voice-logged notes.
            </p>
          </div>

          <div className="hira-solution-demo-media">
            <video
              src="/assets/hick_1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="hira-solution-demo-video hira-solution-demo-video--mobile"
            />
          </div>
        </div>

      </div>
    </section>
  );
}