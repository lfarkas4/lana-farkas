// src/components/TapTapWhatILearned.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function TapTapWhatILearned() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="taptap-learned is-light"
      aria-label="TapTap What I Learned"
    >
      <div className="taptap-learned-inner reveal">

        {/* Header */}
        <header className="taptap-learned-header">
          <p className="taptap-learned-eyebrow">What I Learned</p>

          <h2 className="taptap-learned-title">
            Designing for hardware forced me to rethink what &quot;good
            design&quot; means when the <em>constraints are physical</em>.
          </h2>
        </header>

        {/* Body */}
        <div className="taptap-learned-body">
          <p>
            Working with engineers on a physical product was different
            from my typical design work. Faulty equipment, tight
            timelines, and the need to{" "}
            <span className="hi">understand different roles</span> meant
            the strategy had to <span className="hi">constantly adapt</span>.
          </p>

          <p>
            The goal was never a polished outcome,{" "}
            <span className="hi">just a functional one</span>, and being
            able to pivot and experiment is what got us there. At the end
            of the day, this project reminded me why I design in the first
            place: <span className="hi">for the fun of it</span>!
          </p>
        </div>

        {/* Side-by-side images — mirrors .hira-heard-images exactly */}
        <div className="taptap-learned-images">
          <div className="taptap-learned-image-item">
            <img
              src="/assets/tappic5.webp"
              alt="Team working together in the lab"
              className="taptap-learned-image"
              loading="lazy"
            />
            <p className="taptap-learned-caption">
              Thanks to the coolest engineers I know!
            </p>
          </div>

          <div className="taptap-learned-image-item">
            <img
              src="/assets/tappic6.webp"
              alt="Completed TapTap game prototype"
              className="taptap-learned-image"
              loading="lazy"
            />
            <p className="taptap-learned-caption">
              Our baby finally being born &lt;3
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}