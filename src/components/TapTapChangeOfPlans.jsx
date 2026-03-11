// src/components/TapTapChangeOfPlans.jsx
import React from "react";
import useReveal from "../utils/useReveal";

const pivotCards = [
  {
    number: "1",
    title: "Prioritize Physical Simplicity",
    text: "Keep the interface tangible and direct rather than screen-dependent.",
  },
  {
    number: "2",
    title: "Preload Select Songs",
    text: "Focus on one track done well rather than multiple songs done poorly.",
  },
  {
    number: "3",
    title: "Design for Rhythm",
    text: "Match timing and musicality over fast reflexes and complex patterns.",
  },
  {
    number: "4",
    title: "Keep It Playful",
    text: "Scale back ambition without sacrificing what makes rhythm games fun.",
  },
];

export default function TapTapChangeOfPlans() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="taptap-plans is-light"
      aria-label="TapTap Change of Plans"
    >
      <div className="taptap-plans-inner reveal reveal--up">
        {/* Header */}
        <header className="taptap-plans-header">
          <p className="taptap-plans-eyebrow">Change of Plans</p>
          <h2 className="taptap-plans-title">
            Instead of giving up, we pivoted to a <em>simpler rhythm game</em>{" "}
            concept we knew <em>we could build</em>.
          </h2>
        </header>

        {/* Split grid: media left | body right — mirrors overview-inner */}
        <div className="taptap-plans-grid">
          {/* Left: Media */}
          <div className="taptap-plans-media">
            <img
              src="/assets/hsm3.webp"
              alt="High School Musical 3 dance mat"
              className="taptap-plans-image"
            />
            <p className="taptap-plans-caption">
              Meet the unlikely hero of our pivot!
            </p>
          </div>

          {/* Right: Body */}
          <div className="taptap-plans-content">
            <div className="taptap-plans-body">
              <p>
                Remember the{" "}
                <span className="hi">High School Musical 3 dance mat</span>?
                Probably not, but I definitely owned one as a kid!
              </p>

              <p>
                It was a more accessible, lower-tech version of DDR with
                preloaded songs, light-up buttons on the console, and{" "}
                <span className="hi">no fancy display required</span>. You just
                followed the lights and tapped the foot pads in rhythm.
              </p>

              <p>
                By focusing on <span className="hi">physical indicators</span>{" "}
                rather than screen-based gameplay, we could build something
                simpler but <span className="hi">just as engaging</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Pivot insight cards — mirrors hira-wwh-insights-grid */}
        <div className="taptap-plans-insights">
          <div className="taptap-plans-insights-grid" data-stagger-block>
            {pivotCards.map((card) => (
              <div key={card.number} className="taptap-plans-insight-card">
                <div className="taptap-plans-insight-number">{card.number}</div>
                <div className="taptap-plans-insight-content">
                  <div className="taptap-plans-insight-title">{card.title}</div>
                  <div className="taptap-plans-insight-text">{card.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* spark-disco — absolute bottom-right, visible only at XXL via CSS */}
      <img
        src="/assets/spark-disco.png"
        alt=""
        className="taptap-plans-spark"
      />
    </section>
  );
}