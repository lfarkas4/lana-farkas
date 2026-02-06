// src/components/LightTheMuseReflection.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function LightTheMuseReflection() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="light-reflection-section"
      aria-label="Reflection and takeaways"
    >
      <div className="light-reflection-inner">

        {/* ===== HEADER ===== */}
        <div className="light-reflection-intro reveal">
          <p className="light-reflection-eyebrow">Reflection &amp; Takeaways</p>

          <h3 className="light-reflection-title">
            This sprint proved that chasing <em>unconventional ideas</em> may reveal <em>stronger solutions</em> than playing it safe.

            <img
              src="/assets/magichat.png"
              alt=""
              className="light-reflection-spark"
              aria-hidden="true"
            />
          </h3>

          <p className="light-reflection-body">
            Working with my team taught me the value of <span className="hi">moving fast with conviction</span>. When you only have one day, you learn to explore bold ideas, test assumptions quickly, and let the process <span className="hi">guide you to clarity</span>.
          </p>
        </div>

        {/* ===== TAKEAWAYS LIST ===== */}
        <div className="light-takeaways-list reveal">
          <div className="light-takeaway-item">
            <div className="light-takeaway-number">1</div>
            <div className="light-takeaway-content">
              <h4 className="light-takeaway-title">Start with Why, Not How</h4>
              <p className="light-takeaway-text">
                Understanding the root problem helped us focus on impact over features.
              </p>
            </div>
          </div>

          <div className="light-takeaway-item">
            <div className="light-takeaway-number">2</div>
            <div className="light-takeaway-content">
              <h4 className="light-takeaway-title">Experimentation Over Perfection</h4>
              <p className="light-takeaway-text">
                Exploring ideas quickly reveals what actually works faster than endless planning.
              </p>
            </div>
          </div>

          <div className="light-takeaway-item">
            <div className="light-takeaway-number">3</div>
            <div className="light-takeaway-content">
              <h4 className="light-takeaway-title">Just Trust the Process</h4>
              <p className="light-takeaway-text">
                Limited time teaches you to let go and trust where the work takes you.
              </p>
            </div>
          </div>
        </div>

        {/* ===== REFLECTION IMAGES ===== */}
        <div className="light-reflection-images reveal">
          <div className="light-reflection-image-item">
            <img
              src="/assets/nametag.png"
              alt="Team nametags from the design sprint"
              className="light-reflection-image"
            />
            <p className="light-reflection-caption">
              Saying goodbye to the dream team...
            </p>
          </div>

          <div className="light-reflection-image-item">
            <img
              src="/assets/canada.png"
              alt="Toronto skyline memories"
              className="light-reflection-image"
            />
            <p className="light-reflection-caption">
              Thanks for the memories, Toronto!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}