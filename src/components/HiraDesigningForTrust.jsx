// src/components/HiraDesigningForTrust.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function HiraDesigningForTrust() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="hira-trust is-light"
      aria-label="Designing for Trust"
    >
      <div className="hira-trust-inner reveal">
        <header className="hira-trust-header">
          <p className="hira-trust-eyebrow">Designing for Trust</p>

          <h2 className="hira-trust-title">
            Hira is a supportive capture tool, not a medical decision-maker, designed
            with <em>clear safety</em> and <em>consent boundaries</em>.
          </h2>
        </header>

        <div className="hira-trust-body">
          <p>
            In oncology care, product choices can introduce risk, so we scoped Hira
            with explicit guardrails. It{" "}
            <span className="hi">captures patient voice</span> and{" "}
            <span className="hi">organizes it for recall</span>, but it does not
            diagnose, triage, or recommend treatment.
          </p>

          <p>
            Nudges are context-based reminders, and anything that leaves the system
            is <span className="hi">user-initiated</span> and{" "}
            <span className="hi">reviewable</span>. Patients can snooze, dismiss,
            edit, or share, with privacy controls on by default.
          </p>
        </div>

        <div className="hira-trust-media" aria-label="Safety and consent diagram">
          <img
            className="hira-trust-image"
            src="/assets/hiragraphic2.png"
            alt="Diagram illustrating Hira safety and consent boundaries"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
