// src/components/BehavAIKickoff.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function BehavAIKickoff() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="behavai-kickoff is-light"
      aria-label="BehavAI kickoff"
    >
      <div className="behavai-kickoff-inner reveal reveal--up">
        {/* Header */}
        <header className="behavai-kickoff-header">
          <p className="behavai-kickoff-eyebrow">The Kickoff</p>
          <h2 className="behavai-kickoff-title">
          We built a <em>real startup</em> powered by <em>AI</em> at Carnegie Mellon's renowned venture studio.          </h2>
        </header>

        {/* Body */}
        <div className="behavai-kickoff-body">
          <p>
            In a world of look-alike AI products and startups,{" "}
            <span className="hi">clear purpose is hard to spot.</span> I joined
            Carnegie Mellon&apos;s AI Venture Studio to learn how to{" "}
            <span className="hi">ship something useful</span>, using AI only
            when it removes friction and adds clarity.
          </p>

          <p>
            We built a small team, chose a domain space, and started from zero.
            I scoped the problem, mapped the critical flows, and coded
            experiences for quick feedback,{" "}
            <span className="hi">
              which set the course for our startup journey.
            </span>
          </p>
        </div>

        {/* Media underneath */}
        <div className="behavai-kickoff-media">
          <video
            src="/assets/behavai-worksesh.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <p className="behavai-kickoff-caption">
            Me and my co-founder working hard ٩(•̀ᴗ•́ )و
          </p>
        </div>
      </div>
    </section>
  );
}
