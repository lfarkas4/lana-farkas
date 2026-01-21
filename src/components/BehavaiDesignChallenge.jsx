// src/components/BehavaiDesignChallenge.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function BehavaiDesignChallenge() {
  const sectionRef = useReveal();
  const iterationsRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="behavai-design-challenge is-dark"
      aria-label="BehavAI design challenge"
    >
      <div className="behavai-design-challenge-inner reveal">
        {/* Header */}
        <header className="behavai-design-challenge-header">
          <p className="behavai-design-challenge-eyebrow">Design Challenge</p>
          <h2 className="behavai-design-challenge-title">
            Translating <em>messy clinical workflows</em> into an interface where{" "}
            <em>AI assists without taking over</em>.
          </h2>
        </header>

        {/* The Core Challenge */}
        <div className="behavai-design-challenge-body">
          <p>
            We knew <strong>what</strong> therapists needed—faster documentation—but the{" "}
            <strong>how</strong> was much harder.{" "}
            <span className="hi">
              We had to design an AI workflow that fit into a chaotic, unpredictable process
            </span>{" "}
            where every client is different, every session brings new data, and no two reports 
            look the same.
          </p>
          <p>
            The central tension:{" "}
            <span className="hi">
              How do we give therapists AI-powered speed without removing their control, 
              voice, or clinical judgment?
            </span>
          </p>
        </div>

        {/* Key Design Decisions */}
        <div className="behavai-design-decisions">
          <h3 className="behavai-design-decisions-heading">
            Three decisions that shaped the entire experience
          </h3>

          <div className="behavai-design-decision-cards">
            {/* Decision 1 */}
            <div className="behavai-decision-card">
              <div className="behavai-decision-number">1</div>
              <h4 className="behavai-decision-heading">
                Dark UI to reduce cognitive load during long documentation sessions
              </h4>
              <p className="behavai-decision-text">
                Therapists often write reports at the end of exhausting days. A{" "}
                <strong>dark grey-blue background</strong> reduces eye strain and creates 
                a calmer, more focused workspace—especially for extended use.
              </p>
            </div>

            {/* Decision 2 */}
            <div className="behavai-decision-card">
              <div className="behavai-decision-number">2</div>
              <h4 className="behavai-decision-heading">
                Modular, editable components instead of full AI-generated drafts
              </h4>
              <p className="behavai-decision-text">
                Early on, we tested a side-by-side AI generation model where the system 
                would draft entire reports. But therapists felt{" "}
                <strong>locked into AI's structure</strong> and had to regenerate repeatedly 
                to get it right. We pivoted to <strong>modular cards</strong> that therapists 
                can drag, edit, and rearrange—keeping AI suggestive, not prescriptive.
              </p>
            </div>

            {/* Decision 3 */}
            <div className="behavai-decision-card">
              <div className="behavai-decision-number">3</div>
              <h4 className="behavai-decision-heading">
                Transparent AI insights rather than black-box recommendations
              </h4>
              <p className="behavai-decision-text">
                Instead of just saying <em>"Here's what you should write,"</em> we show{" "}
                <strong>which data points led to each AI suggestion</strong>. Therapists 
                can see the reasoning, edit freely, and maintain ownership over the final output.
              </p>
            </div>
          </div>
        </div>

        {/* Iteration Journey */}
        <div ref={iterationsRef} className="behavai-design-iterations reveal">
          <h3 className="behavai-iterations-heading">
            From rigid AI outputs to flexible, human-centered collaboration
          </h3>

          <div className="behavai-iteration-timeline">
            {/* Iteration 1 */}
            <div className="behavai-iteration-step">
              <div className="behavai-iteration-label">
                <span className="behavai-iteration-tag">Early Concept</span>
              </div>
              <div className="behavai-iteration-content">
                <img
                  src="/assets/iteration-v1-wireframe.png"
                  alt="Early side-by-side AI generation concept"
                  className="behavai-iteration-img"
                />
                <div className="behavai-iteration-text">
                  <h4>Side-by-Side AI Generation</h4>
                  <p>
                    AI generates full report drafts next to a blank editor. Therapists 
                    review and edit—but found themselves constantly regenerating when 
                    the structure didn't fit their needs.
                  </p>
                  <p className="behavai-iteration-insight">
                    <strong>Why we moved on:</strong> AI felt like it was in control, 
                    not the therapist.
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="behavai-iteration-arrow">
              <img src="/assets/down-arrow.svg" alt="" aria-hidden="true" />
            </div>

            {/* Iteration 2 */}
            <div className="behavai-iteration-step">
              <div className="behavai-iteration-label">
                <span className="behavai-iteration-tag">Refined Concept</span>
              </div>
              <div className="behavai-iteration-content">
                <img
                  src="/assets/iteration-v2-wireframe.png"
                  alt="Modular card-based interface concept"
                  className="behavai-iteration-img"
                />
                <div className="behavai-iteration-text">
                  <h4>Modular, Editable Cards</h4>
                  <p>
                    AI suggests content in <strong>discrete, movable sections</strong>—
                    charts, tables, text blocks. Therapists drag, drop, edit, and build 
                    their own narrative structure while AI fills in the gaps.
                  </p>
                  <p className="behavai-iteration-insight">
                    <strong>Why this worked:</strong> Therapists stay in the driver's seat. 
                    AI becomes a tool, not a replacement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="behavai-design-challenge-insight">
          <img 
            src="/assets/lightbulb-icon.svg" 
            alt="" 
            className="behavai-insight-icon"
            aria-hidden="true"
          />
          <p className="behavai-insight-text">
            The breakthrough wasn't about making AI smarter—it was about{" "}
            <strong>designing interactions where AI adapts to the therapist</strong>, 
            not the other way around.
          </p>
        </div>
      </div>
    </section>
  );
}