// src/components/LightTheMuseChallenge.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function LightTheMuseChallenge() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="light-challenge is-light"
      aria-label="Light the Muse Challenge"
    >
      <div className="light-challenge-inner reveal reveal--up" style={{ "--reveal-delay": "0ms" }}>

        {/* Header */}
        <header className="light-challenge-header">
          <p className="light-challenge-eyebrow">The Challenge</p>

          <h2 className="light-challenge-title">
            24 hours in Toronto to reimagine how technology could{" "}
            <em>fight addiction</em> instead of <em>feeding it</em>.
          </h2>
        </header>

        {/* Body */}
        <div className="light-challenge-body">
          <p>
            I joined a <span className="hi">hackathon in Toronto</span> focused on one of today&apos;s
            biggest design challenges:{" "}
            <span className="hi">addictive technology</span> and its impact
            on our relationships and communities.
          </p>

          <p>
            With a team of three, we had one day to explore, ideate, and
            prototype a solution for the following prompt...
          </p>

          <p className="light-challenge-closing">
            <em className="hi hi--closing">
              How might we design technology that empowers users instead of
              exploiting their attention?
            </em>
          </p>
        </div>

        {/* Side-by-side images */}
        <div className="light-challenge-images">
          <div className="light-challenge-image-item">
            <img
              src="/assets/lightpic1.webp"
              alt="Team members working together at the hackathon"
              className="light-challenge-image"
              loading="lazy"
            />
            <p className="light-challenge-caption">
              Meet the people I lost sleep with (worth it)!
            </p>
          </div>

          <div className="light-challenge-image-item">
            <img
              src="/assets/lightpic2.webp"
              alt="Whiteboard sketches and wireframes"
              className="light-challenge-image"
              loading="lazy"
            />
            <p className="light-challenge-caption">
              Proof that good ideas start messy (&#62;&#7447;&#8226; )&#65417;ﾞ
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}