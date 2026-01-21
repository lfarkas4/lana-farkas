// src/components/BehavaiImpactAndBeyond.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function BehavaiImpactAndBeyond() {
  const impactRef = useReveal();
  const statusRef = useReveal();
  const reflectionRef = useReveal();

  const progressSteps = [
    {
      number: "1",
      label: "Concept & Research",
      icon: "/assets/conceptresearch.png",
      status: "Complete!",
      statusClass: "complete"
    },
    {
      number: "2",
      label: "Prototype & Validation",
      icon: "/assets/prototypevalidation.png",
      status: "Complete!",
      statusClass: "complete"
    },
    {
      number: "3",
      label: "MVP with Clinics",
      icon: "/assets/mvp.png",
      status: "In Progress",
      statusClass: "progress"
    },
    {
      number: "4",
      label: "Pilot & Outcomes",
      icon: "/assets/pilot.png",
      status: "Next Step",
      statusClass: "next"
    }
  ];

  return (
    <>
      {/* ===== IMPACT & TRACTION SECTION ===== */}
      <section
        ref={impactRef}
        className="behavai-impact is-light"
        aria-label="BehavAI impact and traction"
      >
        <div className="behavai-impact-inner reveal">
          {/* Header */}
          <header className="behavai-impact-header">
            <p className="behavai-impact-eyebrow">Impact & Traction</p>
            <h2 className="behavai-impact-title">
              From a classroom idea to <em>real traction</em> in the ABA community.
            </h2>
          </header>
          {/* Body */}
          <div className="behavai-impact-body">
            <p>
              BehavAI gained momentum quickly — winning{" "}
              <span className="hi">1st Place at Techstars Startup Weekend Pittsburgh</span>{" "}
              out of 30+ competing teams, and being selected to demo at{" "}
              <span className="hi">Carnegie Mellon's AI Venture Studio Demo Day</span>{" "}.
            </p>
            <p>
              More importantly, early conversations with clinicians showed strong demand for a tool that reduces
              documentation load and clarifies progress across teams.
            </p>
          </div>

          {/* Techstars Badge - no white background */}
          <div className="behavai-techstars-badge reveal">
            <img src="/assets/techstars-dark.png" alt="Techstars" className="techstars-logo" />
            <span className="techstars-text">🥇 1st Place Techstars Startup Weekend 2025</span>
          </div>

          {/* Quote Cards */}
          <div className="behavai-testimonial-cards reveal">
            {/* Card 1 */}
            <div className="behavai-testimonial-card">
              <p className="testimonial-quote">
                “BehavAI can turn the data we already collect into regulation-ready reports (…) <strong>freeing more time for clients</strong>.”
              </p>
              <div className="testimonial-author">
                <img src="/assets/pfp1.png" alt="Laura Cwynar" className="author-avatar" />
                <div className="author-info">
                  <div className="author-name">Laura Cwynar</div>
                  <div className="author-role">Founder & Executive Director, <br></br>Allegheny Behavior Analysis Services</div>
                </div>
              </div>
            </div>

            {/* Card 2 (duplicate for now) */}
            <div className="behavai-testimonial-card">
              <p className="testimonial-quote">
              “BehavAI could <strong>transform how we monitor client progress</strong> (…) and help us catch issues much earlier across centers.”
              </p>
              <div className="testimonial-author">
                <img src="/assets/pfp2.png" alt="Laura Cwynar" className="author-avatar" />
                <div className="author-info">
                  <div className="author-name">Andrea Lavigne</div>
                  <div className="author-role">Chief of Service Delivery,<br></br> Autism Care Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CURRENT STATUS SECTION ===== */}
      <section
        ref={statusRef}
        className="behavai-status is-light"
        aria-label="BehavAI current status"
      >
        <div className="behavai-status-inner reveal">
          {/* Header */}
          <header className="behavai-status-header">
            <p className="behavai-status-eyebrow">Current Status</p>
            <h2 className="behavai-status-title">
              We've moved from a validated concept to a <em>clinic-ready MVP</em>{" "}
              with pilot testing on the horizon.
            </h2>
          </header>

          {/* Body */}
          <div className="behavai-status-body">
            <p>
              We've built a clinic-ready, HIPAA-compliant MVP, validated the core reporting workflows with therapists, and
              are now <span className="hi">partnering with clinics for a closed beta</span>. Next, we'll run live pilots to measure time saved per report and improvements in documentation quality.
            </p>
          </div>

          {/* Progress Timeline */}
          <div className="behavai-progress-timeline reveal">
            <div className="progress-line"></div>
            {progressSteps.map((step, index) => (
              <div key={index} className={`progress-step progress-step--${step.statusClass}`}>
                <div className="progress-label">{step.label}</div>
                <img src={step.icon} alt="" className="progress-icon" />
                <div className="progress-number-wrapper">
                  <span className="progress-number">{step.number}</span>
                </div>
                <div className={`progress-status`}>
                  {step.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REFLECTION SECTION ===== */}
      <section
        ref={reflectionRef}
        className="behavai-reflection is-light"
        aria-label="BehavAI reflection"
      >
        <div className="behavai-reflection-inner reveal">
          {/* Header */}
          <header className="behavai-reflection-header">
            <p className="behavai-reflection-eyebrow">Reflection</p>
            <h2 className="behavai-reflection-title">
              What this 0→1 journey taught me about <em>designing for care work</em>{" "}
              with artificial intelligence.
            </h2>
          </header>

          {/* Content Grid */}
          <div className="behavai-reflection-content">
            {/* Left: Media */}
            <div className="behavai-reflection-media">
              <img
                src="/assets/demopitch.png"
                alt="BehavAI team pitching at Demo Day"
                className="reflection-image"
              />
              <p className="reflection-caption">Us pitching BehavAI live at Demo Day!</p>
            </div>

            {/* Right: Text */}
            <div className="behavai-reflection-body">
              <p>
                Building BehavAI taught me how to design AI tools for a field where trust, accuracy, and empathy{" "}
                <span className="hi">matter more than speed</span>.
              </p>
              <p>
                I learned how to work across ML, product, and clinical roles, how to{" "}
                <span className="hi">turn messy workflows into clear interactions</span>, and how to test with
                practitioners who carry real responsibility for real people.
              </p>
              <p>
                More than anything, it reinforced that good healthcare design means listening closely and
                creating technology that{" "}
                <span className="hi">supports human judgment instead of replacing it</span>!
              </p>
            </div>
          </div>
        </div>
        
        {/* Spark wand for XXL screens */}
        <img 
          src="/assets/spark-wand.png" 
          alt="" 
          className="behavai-reflection-spark" 
          aria-hidden="true"
        />
      </section>
    </>
  );
}