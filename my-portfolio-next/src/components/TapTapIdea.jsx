// src/components/TapTapIdea.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function TapTapIdea() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="taptap-idea is-light"
      aria-label="TapTap Our Big Idea"
    >
      <div className="taptap-idea-inner reveal reveal--up">
        {/* Header */}
        <header className="taptap-idea-header">
          <p className="taptap-idea-eyebrow">Our Big Idea</p>
          <h2 className="taptap-idea-title">
            What better way to relive childhood nostalgia than bringing{" "}
            <em>Dance Dance Revolution</em> to your fingertips?
          </h2>
        </header>

        {/* Media — full-width video, sits above body */}
        <div className="taptap-idea-media">
          <video
            src="/assets/ddr.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="taptap-idea-video"
          />
        </div>

        {/* Body */}
        <div className="taptap-idea-body">
          <p>
            We wanted to <span className="hi">recreate the magic of DDR</span>:
            the lights, the rhythm, the rush of hitting every beat. But instead
            of a full-body dance mat, we&apos;d shrink it down to a{" "}
            <span className="hi">finger-sized game</span> you could play
            anywhere.
          </p>

          <p>
            We called it <span className="hi">Tap-Tap Revolution (TTR)</span>, a
            miniature rhythm game that brought the addictive gameplay of DDR to a
            tabletop scale without needing an arcade cabinet.
          </p>
        </div>
      </div>
    </section>
  );
}