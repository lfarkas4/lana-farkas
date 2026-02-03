// src/components/TapTapAssignment.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function TapTapAssignment() {
  const scopeRef = useReveal();

  return (
    <section ref={scopeRef} className="taptap-assignment" aria-label="TapTap The Assignment">
      <div className="taptap-assignment-reveal reveal reveal--up" style={{ "--reveal-delay": "0ms" }}>
        {/* Header */}
        <div className="taptap-assignment-header">
          <div className="taptap-assignment-eyebrow">The Assignment</div>
          <h3 className="taptap-assignment-title">
            Turning <em>classroom skills</em> into a <em>working device</em> with just seven weeks and a $40 budget.
          </h3>
        </div>

        {/* Split layout: media left, body right */}
        <div className="taptap-assignment-inner">
          {/* Left: Media */}
          <div className="taptap-assignment-media">
            <img
              src="/assets/cmumaker.png"
              alt="CMU's largest maker space"
              className="taptap-assignment-image"
            />
            <p className="taptap-assignment-caption">Welcome to CMU's largest maker space!</p>
          </div>

          {/* Right: Body */}
          <div className="taptap-assignment-content">
            <div className="taptap-assignment-body">
              <p>
                I enrolled in TechSpark: Modern Making, one of Carnegie Mellon's hands-on mini courses focused on{" "}
                <span className="hi">physical prototyping</span>. Over the course of the class, we covered Arduino programming, 3D modeling, and laser cutting.
              </p>
              <p>
                The final challenge was to combine all three into one working device with a{" "}
                <span className="hi">tight budget</span> and <span className="hi">timeline</span>.
              </p>
              <p>
                Those constraints forced us to work scrappy and fast, but here's a little spoiler alert:{" "}
                <span className="hi">we actually pulled it off</span>!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decoration — mirrors spark-boat.png in Aquatonomy */}
      <img
        src="/assets/spark-gear.png"
        alt=""
        className="taptap-assignment-spark reveal reveal--up"
        aria-hidden="true"
      />
    </section>
  );
}