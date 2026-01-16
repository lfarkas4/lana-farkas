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
        {/* =========================================================
            Subsection 1: Concept Iterations
           ========================================================= */}
        <div className="hira-trust-block">
          <header className="hira-trust-header">
            <p className="hira-trust-eyebrow">Concept Iterations</p>

            <h2 className="hira-trust-title">
              Early concepts gave Hira more “authority,” but feedback showed patients
              wanted <em>less assumption</em> and <em>more control</em>.
            </h2>
          </header>

          <div className="hira-trust-body">
            <p>
              We explored {" "}<span className="hi">interpretation-first</span> drafts that inferred meaning from
              symptoms, then narrowed Hira to capture and organization that
              surfaces patterns without assigning meaning. 
              </p>
              <p>
              The shift was quite simple. We found that the less Hira assumed, the{" "}
              <span className="hi">more patients trusted it</span>.
            </p>
          </div>

          <div
            className="trust-iterations-grid"
            aria-label="Concept sketches comparison"
          >
            {/* Left (Explored) */}
            <div className="trust-sketch trust-sketch--blue">
              <div className="trust-pill trust-pill--blue">Explored Direction</div>
              <img
                className="trust-sketch-image"
                src="/assets/hirasket1.png"
                alt="Early Hira sketch exploring interpretation-first meaning"
                loading="lazy"
              />
            </div>

            {/* Arrow */}
            <div className="trust-iterations-arrow" aria-hidden="true">
  <img src="/assets/arrey.png" alt="" loading="lazy" />
</div>

            {/* Right (Final) */}
            <div className="trust-sketch trust-sketch--green">
              <div className="trust-pill trust-pill--green">Final Direction</div>
              <img
                className="trust-sketch-image"
                src="/assets/hirasket2.png"
                alt="Final Hira sketch focused on capture and organization"
                loading="lazy"
              />
            </div>

            {/* Callouts */}
            <div className="trust-callout trust-callout--blue">
              <img
                className="trust-callout-icon"
                src="/assets/warn.png"
                alt=""
                loading="lazy"
              />
              <p className="trust-callout-text">
                Suggests medical meaning and can steer decisions without clinical
                context.
              </p>
            </div>

            <div className="trust-callout trust-callout--green">
              <img
                className="trust-callout-icon"
                src="/assets/lovee.png"
                alt=""
                loading="lazy"
              />
              <p className="trust-callout-text">
                Supports recall and prep without telling the patient what it “means.”
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            Subsection 2: Where Hira Fits
           ========================================================= */}
        <div className="hira-trust-block">
          <header className="hira-trust-header">
            <p className="hira-trust-eyebrow">Where Hira Fits</p>

            <h2 className="hira-trust-title">
              Hira strengthens <em>continuity of care</em> between visits while staying
              outside <em>medical judgment</em>.
            </h2>
          </header>

          <div className="hira-trust-body hira-trust-body--tight">
            <p>
              In oncology care, the wrong kind of “help” can{" "}
              <span className="hi">create risk</span>, so Hira does not diagnose,
              triage, or recommend treatment. Instead, it keeps patients’
              observations organized and ready for{" "}
              <span className="hi">care conversations</span>.
            </p>
          </div>

          <div
            className="hira-trust-media hira-trust-media--where"
            aria-label="Where Hira fits graphic"
          >
            <img
              className="hira-trust-image hira-trust-image--where"
              src="/assets/hiragraph3.png"
              alt="Graphic showing where Hira fits in continuity of care"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
