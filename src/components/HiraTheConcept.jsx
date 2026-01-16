// src/components/HiraTheConcept.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function HiraTheConcept() {
  const sectionRef = useReveal();

  const conceptCards = [
    {
      title: "Why a Wearable?",
      icon: "/assets/wearable.png",
      description: (
        <>
          <strong>Biometrics</strong>, <strong>time</strong>, and <strong>location</strong> add signal to symptoms and patterns across appointments.
        </>
      )
    },
    {
      title: "Why Voice?",
      icon: "/assets/voice.png",
      description: (
        <>
          Speaking preserves <strong>emotion</strong> and <strong>nuance</strong> that gets lost in typed notes when energy is limited.
        </>
      )
    },
    {
      title: "Why Recording?",
      icon: "/assets/record.png",
      description: (
        <>
          Creates a <strong>reviewable history</strong> for talking points and next steps without relying on memory.
        </>
      )
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="hira-concept is-light"
      aria-label="Hira Health concept"
    >
      <div className="hira-concept-inner reveal">
        {/* Header */}
        <header className="hira-concept-header">
          <p className="hira-concept-eyebrow">The Concept</p>
          <h2 className="hira-concept-title">
            A <em>listening-first</em> wearable that helps patients <em>capture</em> what <em>matters</em> without adding friction.
          </h2>
        </header>

{/* Body */}
<div className="hira-concept-body">
  <p>
    We explored different ways to embed support into cancer care, and ultimately landed on{" "}
    <span className="hi">voice recording</span> as <span className="hi">lightweight capture</span> that adds{" "}
    richer context patients can use <span className="hi">in the moment</span> and
    revisit later.
  </p>
</div>

        {/* Concept Cards */}
        <div className="hira-concept-cards">
          {conceptCards.map((card, index) => (
            <div key={index} className="concept-card">
              <div className="concept-card-header">
                <h3 className="concept-card-title">{card.title}</h3>
                <img src={card.icon} alt="" className="concept-card-icon" />
              </div>
              <p className="concept-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}