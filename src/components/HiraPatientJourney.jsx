// src/components/HiraPatientJourney.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function HiraPatientJourney() {
  const journeySectionRef = useReveal();
  const hmwSectionRef = useReveal();
  const directionsSectionRef = useReveal();

  const journeyColumns = [
    {
      icon: "/assets/waiting.png",
      title: "Pre Appt.",
      subtitle: "The Waiting Room",
      color: "pre",
      boxes: [
        { tag: "PAIN", text: "Anxiety builds before the visit" },
        { tag: "TASK", text: "Remember questions and symptoms" },
        { tag: "NEED", text: "A place to prepare without pressure" }
      ]
    },
    {
      icon: "/assets/exam.png",
      title: "During Appt.",
      subtitle: "Inside the Exam Room",
      color: "during",
      boxes: [
        { tag: "PAIN", text: "Information moves too fast" },
        { tag: "TASK", text: "Ask the right questions in the moment" },
        { tag: "NEED", text: "Capture what matters quietly" }
      ]
    },
    {
      icon: "/assets/visit.png",
      title: "Post Appt.",
      subtitle: "Leaving the Visit",
      color: "post",
      boxes: [
        { tag: "PAIN", text: "Details blur after the visit" },
        { tag: "TASK", text: "Make sense of next steps and updates" },
        { tag: "NEED", text: "Clear talking points to revisit" }
      ]
    }
  ];

  return (
    <>
      {/* ===== THE PATIENT JOURNEY SECTION ===== */}
      <section
        ref={journeySectionRef}
        className="hira-journey is-light"
        aria-label="Hira Health patient journey"
      >
        <div className="hira-journey-inner reveal">
          {/* Header */}
          <header className="hira-journey-header">
            <p className="hira-journey-eyebrow">The Patient Journey</p>
            <h2 className="hira-journey-title">
              Observing appointments firsthand showed us exactly where <em>support breaks down</em> and <em>anxiety builds</em>.
            </h2>
          </header>

          {/* Body */}
          <div className="hira-journey-body">
            <p>
              To find where support could have the greatest impact, we shadowed appointments, observed 
              provider charting, and sat in waiting rooms at UPMC. What emerged was a{" "}
              <span className="hi">critical inflection point</span>: the appointment itself.
            </p>

            <p>
              This is where knowledge transfers, treatment paths shift, and understanding can change in minutes. 
              Patients walk in with <span className="hi">questions they've rehearsed for days</span>. 
              They walk out <span className="hi">struggling to recall the answers</span>.
            </p>
          </div>

          {/* Journey Map */}
          <div className="hira-journey-map">
            {/* Top connecting line with arrow */}
            <div className="journey-line-wrapper">
              <div className="journey-line"></div>
              <div className="journey-arrow">→</div>
            </div>

            {/* Three columns */}
            <div className="journey-columns">
              {journeyColumns.map((column, index) => (
                <div key={index} className="journey-column">
                  {/* Icon circle */}
                  <div className="journey-icon-wrapper">
                    <img src={column.icon} alt="" className="journey-icon" />
                  </div>

                  {/* Title */}
                  <h3 className="journey-column-title">{column.title}</h3>

                  {/* Subtitle */}
                  <p className="journey-column-subtitle">{column.subtitle}</p>

                  {/* Boxes with dotted line */}
                  <div className="journey-boxes">
                    {/* Vertical dotted line */}
                    <div className="journey-dotted-line"></div>

                    {column.boxes.map((box, boxIndex) => (
                      <div key={boxIndex} className={`journey-box journey-box--${column.color}`}>
                        <span className="journey-box-tag">{box.tag}</span>
                        <p className="journey-box-text">{box.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW MIGHT WE SECTION (with SVG curve) ===== */}
      <section
        ref={hmwSectionRef}
        className="hira-hmw is-light"
        aria-label="How Might We framing"
      >
        {/* SVG Curve - placed on top */}
        <img
          src="/assets/bluecurve.svg"
          alt=""
          className="hira-hmw-curve"
          aria-hidden="true"
        />

        <div className="hira-hmw-inner reveal">
          {/* Header */}
          <header className="hira-hmw-header">
            <p className="hira-hmw-eyebrow">Framing the Opportunity</p>
            
            <h2 className="hira-hmw-title">
              <span>
                How might we help patients <em>capture</em>, <em>organize</em>, and <em>revisit</em> what 
                matters before, during, and after appointments?
              </span>
              <img
  src="/assets/spark-dark.svg"
  alt=""
  className="hira-hmw-spark"
  aria-hidden="true"
/>
            </h2>
          </header>

          {/* Body */}
          <div className="hira-hmw-body">
            <p>
              The problem wasn't a lack of care, it was a <span className="hi">lack of continuity</span>. 
              Patients needed a way to hold onto fleeting moments and carry them into the next conversation.
            </p>
          </div>

          {/* Visual: Simple flow showing capture → organize → revisit */}
          <div className="hira-hmw-flow" aria-label="Design direction flow">
            <div className="hmw-flow-item">
              <div className="hmw-flow-icon">
                <img src="/assets/capture.png" alt="" />
              </div>
              <span className="hmw-flow-label">Capture</span>
            </div>

            <div className="hmw-flow-arrow" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#085FDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="hmw-flow-item">
              <div className="hmw-flow-icon">
                <img src="/assets/organize.png" alt="" />
              </div>
              <span className="hmw-flow-label">Organize</span>
            </div>

            <div className="hmw-flow-arrow" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#085FDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="hmw-flow-item">
              <div className="hmw-flow-icon">
                <img src="/assets/revisit.png" alt="" />
              </div>
              <span className="hmw-flow-label">Revisit</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPLORED DIRECTIONS SECTION ===== */}
      <section
        ref={directionsSectionRef}
        className="hira-directions is-light"
        aria-label="Explored directions"
      >
        <div className="hira-directions-inner reveal">
          {/* Header */}
          <header className="hira-directions-header">
            <p className="hira-directions-eyebrow">Explored Directions</p>
            <h2 className="hira-directions-title">
              We mapped out possible directions, weighing tradeoffs across <em>patient effort</em> and <em>contextual fit</em>.
            </h2>
          </header>

          {/* Body */}
          <div className="hira-directions-body">
            <p>
              We ran several activities that helped us <span className="hi">find trends in our research</span> and 
              pinpoint a solution where we could help patients capture, organize, and revisit what matters.
            </p>

            <p>
              After brainstorming themes, we organized a <span className="hi">rough mind map</span> to see 
              the potential of different ideas and discussed the <span className="hi">pros and cons</span> of 
              each direction based on our findings.
            </p>
          </div>
          
          {/* Mind Map Image */}
          <div className="hira-directions-media">
            <img
              src="/assets/mindmap.png"
              alt="Mind mapping activity showing different concept directions"
              className="hira-directions-image"
            />
            <p className="hira-directions-caption">Finding clarity through a brain dump!</p>
          </div>
        </div>
      </section>
    </>
  );
}