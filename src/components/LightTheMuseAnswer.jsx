// src/components/LightTheMuseAnswer.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function LightTheMuseAnswer() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="light-answer is-dark"
      aria-label="Light the Muse Our Answer"
    >
      <div className="light-answer-inner">

        {/* ===== OUR ANSWER HERO ===== */}
        <div className="light-answer-hero reveal">
          <div className="light-answer-hero-content">
            <p className="light-answer-hero-eyebrow">Our Answer</p>
            <h2 className="light-answer-hero-title">
              We created Light the Muse, an app that <em>sparks creative action</em> across any medium.
            </h2>
            <p className="light-answer-hero-body">
              The name is a playful twist on "light the fuse", capturing that initial push that sets <strong>creativity in motion</strong>!
            </p>
          </div>

          <div className="light-answer-hero-media">
            <img
              src="/assets/mocklight.webp"
              alt="Light the Muse app mockup"
              className="light-answer-hero-image"
            />
            <img
              src="/assets/spark-right.svg"
              alt=""
              className="light-answer-hero-spark"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* ===== HOW IT WORKS ===== */}
        <div className="light-howitworks reveal">
          <header className="light-howitworks-header">
            <p className="light-howitworks-eyebrow">How It Works</p>
            <h2 className="light-howitworks-title">
              One prompt can inspire <em>infinite interpretations</em> depending on the <em>creative voice</em> behind it.
            </h2>
          </header>

          {/* Visual — full-width doodle map */}
          <div className="light-howitworks-media">
            <img
              src="/assets/stormmap.png"
              alt="Storm prompt branching into infinite creative interpretations"
              className="light-howitworks-image"
            />
          </div>

          {/* Body */}
          <div className="light-howitworks-body">
            <p>
              The concept is <strong>intentionally simple</strong>: users receive a <strong>one-word prompt</strong> and interpret it however they want. No instructions on medium, style, or approach.
            </p>
            <p>
              The openness is the point; it provides direction <strong>without constraint</strong>, leaving space for <strong>personal expression</strong> and creative risk-taking.
            </p>
          </div>

          {/* ===== WHAT INSPIRED THIS (Subsection Box) ===== */}
          <div className="light-inspired-box">
            <div className="light-inspired-content">
              <h3 className="light-inspired-subheading">What Inspired This?</h3>
              <div className="light-inspired-body">
                <p>
                  Inktober is an annual internet challenge where artists create daily ink drawings from one-word prompts.
                </p>
                <p>
                  Thousands of people participate for the community, the commitment, and the chance to share their creative voice.
                </p>
              </div>
            </div>

            <div className="light-inspired-media">
              <img
                src="/assets/inktober.png"
                alt="Inktober 2022 official prompt list"
                className="light-inspired-image"
              />
              {/* Stars */}
              <img
                src="/assets/sparkkle-light.png"
                alt=""
                className="light-inspired-star light-inspired-star--one"
                aria-hidden="true"
              />
              <img
                src="/assets/sparkkle-light.png"
                alt=""
                className="light-inspired-star light-inspired-star--two"
                aria-hidden="true"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}