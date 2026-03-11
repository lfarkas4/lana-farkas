// src/components/TapTapProductDemo.jsx
import React from "react";
import useReveal from "../utils/useReveal";
import useIsMobile from "../utils/useIsMobile";

export default function TapTapProductDemo() {
  const sectionRef = useReveal();
  const isMobile = useIsMobile();

  return (
    <section
      ref={sectionRef}
      className="taptap-demo is-light"
      aria-label="TapTap Product Demo"
    >
      <div className="taptap-demo-inner reveal">
        {/* Header */}
        <header className="taptap-demo-header">
          <p className="taptap-demo-eyebrow">Product Demo</p>
          <h2 className="taptap-demo-title">
            Now please enjoy a full gameplay demo of <em>Tap-Tap Revolution</em>!
          </h2>
        </header>

        {/* Full-width video block with native controls + audio */}
        <div className="taptap-demo-media">
          <video
            className="taptap-demo-video"
            src={isMobile ? "/assets/finaltap-mobile.mp4" : "/assets/finaltap.mp4"}
            controls
            playsInline
          />
          <p className="taptap-demo-caption">
            Unfortunately, I&apos;m not the best at playing it (ᵕ•_•)
          </p>
        </div>
      </div>
    </section>
  );
}