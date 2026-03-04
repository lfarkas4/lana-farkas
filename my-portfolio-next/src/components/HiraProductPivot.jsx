import React from "react";
import useReveal from "../utils/useReveal";

export default function HiraProductPivot() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="hira-pivot"
      aria-label="Hira final product pivot"
    >
      <div className="hira-pivot-inner reveal">
        <header className="hira-pivot-header">
          <p className="hira-pivot-eyebrow">Product Pivot</p>
          <h2 className="hira-pivot-title">
            We shifted from a tool that <em>responds</em> to one that <em>reflects</em>{" "}
            what patients already know.
          </h2>

          <div className="hira-pivot-body">
            <p>
              Our original concept <span className="hi">responded with suggestions</span> based on what it heard. But patients didn’t want more
              advice. They wanted their own thoughts captured and surfaced{" "}
              <span className="hi">when it mattered</span>.
            </p>
            <p>
              So we pivoted. Hira still prompts, but through questions, not assumptions. It invites reflection rather than prescribing action,
              and the meaning <span className="hi">stays yours to define</span>.
            </p>
          </div>
        </header>

        <div className="hira-pivot-compare" data-stagger-block>
          <figure className="hira-pivot-card">
            <div className="hira-pivot-tag">BEFORE</div>
            <img
              src="/assets/sket1.webp"
              alt="Before concept sketch"
              className="hira-pivot-image"
            />
            <figcaption className="hira-pivot-caption">
              Ambient tool that interprets and responds.
            </figcaption>
          </figure>

          <img
            src="/assets/arrey.png"
            alt=""
            aria-hidden="true"
            className="hira-pivot-arrow"
          />

          <figure className="hira-pivot-card">
            <div className="hira-pivot-tag">AFTER</div>
            <img
              src="/assets/skett2.webp"
              alt="After concept sketch"
              className="hira-pivot-image"
            />
            <figcaption className="hira-pivot-caption">
              Listening tool that captures and reflects.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
