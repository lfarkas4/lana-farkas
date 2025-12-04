// src/components/BehavaiFinalSolution.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function BehavaiFinalSolution() {
  const sectionRef = useReveal();
  const stepsRef = useReveal(); // Separate ref for better loading

  const solutionSteps = [
    {
      number: "1",
      heading: "Start from client data to draft a report",
      description: "Select a client, upload key documents, and add a few details to generate a structured draft report or dashboard.",
      media: "/assets/behavai-trailer.mp4"
    },
    {
      number: "2",
      heading: "Shape the report layout to match your story",
      description: "Drag, drop, and edit sections, charts, and tables to customize the outline so it matches a client's progress.",
      media: "/assets/behavai-trailer.mp4"
    },
    {
      number: "3",
      heading: "Refine content with integrated AI assist",
      description: "Highlight a section or card to clean up language, clarify details, or surface key insights with AI.",
      media: "/assets/behavai-trailer.mp4"
    },
    {
      number: "4",
      heading: "Share, review, and act on reports together",
      description: "Preview the report, invite collaborators to comment, and export or share with families and supervisors.",
      media: "/assets/behavai-trailer.mp4"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="behavai-final-solution is-light"
      aria-label="BehavAI final solution"
    >
      <div className="behavai-final-solution-inner reveal">
        {/* Header */}
        <header className="behavai-final-solution-header">
          <p className="behavai-final-solution-eyebrow">Final Solution</p>
          <h2 className="behavai-final-solution-title">
            Take a closer look at how our platform turns{" "}
            <em>raw session data</em> into{" "}
            <em>decision-ready reports</em>.
          </h2>
        </header>

        {/* Solution Steps */}
        <div ref={stepsRef} className="behavai-final-solution-steps">
          {solutionSteps.map((step, index) => (
            <div key={index} className="behavai-solution-step reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="behavai-solution-step-content">
                <h3 className="behavai-solution-step-heading">
                  <span className="behavai-solution-step-number">{step.number}.</span>
                  {" "}{step.heading}
                </h3>
                <p className="behavai-solution-step-description">
                  {step.description}
                </p>
              </div>
              <div className="behavai-solution-step-media">
                <video
                  className="behavai-solution-step-video"
                  src={step.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}