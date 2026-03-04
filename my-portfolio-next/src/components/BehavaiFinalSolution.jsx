// src/components/BehavaiFinalSolution.jsx
import React from "react";
import useReveal from "../utils/useReveal";
import useIsMobile from "../utils/useIsMobile";

export default function BehavaiFinalSolution() {
  const sectionRef = useReveal();
  const stepsRef = useReveal();
  const isMobile = useIsMobile();

  const solutionSteps = [
    {
      number: "1",
      heading: "Start from client data to draft a report",
      description: "Client information and session notes are uploaded to generate a structured draft based on patterns across sessions.",
      media: "/assets/solution1@1.mp4",
      mediaMobile: "/assets/solution1-mobile.mp4",
    },
    {
      number: "2",
      heading: "Shape the report layout to match the story",
      description: "Drag-and-drop sections adapt to each client's progress, emphasizing breakthroughs or ongoing areas of growth.",
      media: "/assets/solution2@1.mp4",
      mediaMobile: "/assets/solution2-mobile.mp4",
    },
    {
      number: "3",
      heading: "Analyze content with integrated AI assist",
      description: "AI Insights surface trends across weeks of data to inform clinical judgment and support intervention strategies.",
      media: "/assets/solution3@1.mp4",
      mediaMobile: "/assets/solution3-mobile.mp4",
    },
    {
      number: "4",
      heading: "Share, review, and act on reports together",
      description: "Reports can be previewed, annotated, and exported in formats suitable for families or clinical supervisors.",
      media: "/assets/solution4@1.mp4",
      mediaMobile: "/assets/solution4-mobile.mp4",
    },
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
            Take a closer look at how the platform turns{" "}
            <em>raw session data</em> into{" "}
            <em>decision-ready reports</em>.
          </h2>
        </header>

        {/* Solution Steps */}
        <div ref={stepsRef} className="behavai-final-solution-steps">
          {solutionSteps.map((step, index) => (
            <div
              key={index}
              className="behavai-solution-step reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
                  src={isMobile ? step.mediaMobile : step.media}
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