// src/components/HiraPatientJourney.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function HiraPatientJourney() {
  const journeySectionRef = useReveal();
  const heardSectionRef = useReveal();

  const journeyColumns = [
    {
      icon: "/assets/waiting.png",
      title: "Pre Appt.",
      subtitle: "The Waiting Room",
      color: "pre", // Will map to box color #ECF1FF
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
      color: "during", // Will map to box color #D7E1FF
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
      color: "post", // Will map to box color #CCD9FF
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
              Care spans <em>before</em>, <em>during</em>, and <em>after</em> appointments, and each phase asks patients to remember something different.
            </h2>
          </header>

          {/* Body */}
          <div className="hira-journey-body">
            <p>
              After observing appointments and provider charting firsthand at UPMC Magee-Womens Hospital, we mapped the moments where care feels{" "}
              <span className="hi">hardest to keep track of</span>.
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

      {/* ===== WHAT WE HEARD SECTION ===== */}
      <section
        ref={heardSectionRef}
        className="hira-heard is-light"
        aria-label="Hira Health co-design insights"
      >
        <div className="hira-heard-inner reveal">
          {/* Header */}
          <header className="hira-heard-header">
            <p className="hira-heard-eyebrow">What We Heard</p>
            <h2 className="hira-heard-title">
              We asked patients at UPMC Magee-Womens Hospital to design their <em>"dream"</em> support for their <em>treatment experience</em>.
            </h2>
          </header>

          {/* Body */}
          <div className="hira-heard-body">
            <p>
              During co-design, patients mapped how support should show up before, during, and after appointments, then{" "}
              <span className="hi">built concepts</span> for a <span className="hi">virtual caregiver</span>. We looked for repeat themes across timing, tone, and desired behaviors.
            </p>
          </div>

          {/* Insight callout */}
          <div className="hira-insight">
            <img src="/assets/nda.svg" alt="" className="hira-insight-icon" />
            <p className="hira-insight-text">
              <strong>Insight:</strong> Not every moment needs a response. Patients want to be heard first, then supported to act.
            </p>
          </div>

          {/* Images */}
          <div className="hira-heard-images">
            <div className="hira-heard-image-item">
              <img
                src="/assets/co-design.png"
                alt="Co-design session with patients and caregivers"
                className="hira-heard-image"
              />
              <p className="hira-heard-caption">Co-design with patients and caregivers.</p>
            </div>

            <div className="hira-heard-image-item">
              <img
                src="/assets/virtual.png"
                alt="Participant-created virtual caregiver concepts"
                className="hira-heard-image"
              />
              <p className="hira-heard-caption">Participant-created "virtual caregiver" concepts.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}