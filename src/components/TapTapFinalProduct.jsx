// src/components/TapTapFinalProduct.jsx
import React, { useRef, useEffect } from "react";
import useReveal from "../utils/useReveal";

export default function TapTapFinalProduct() {
  const sectionRef = useReveal();
  const videoRef = useRef(null);

  // Auto-play / pause on scroll — same IntersectionObserver pattern
  // as BehavaiSolutionPreview, threshold 0.4
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {});
          } else {
            videoEl.pause();
            videoEl.currentTime = 0;
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="taptap-final is-light"
      aria-label="TapTap Final Product"
    >
      {/* Header */}
      <header className="taptap-final-header">
        <p className="taptap-final-eyebrow">Final Product</p>
        <h2 className="taptap-final-title">
          In the end, we brought together <em>hardware</em>,{" "}
          <em>code</em>, and <em>fabrication</em> into one playable
          experience.
        </h2>
      </header>

      {/* 1fr 1fr grid — mirrors assignment-inner exactly */}
      <div className="taptap-final-inner">
        {/* Left: looping sped-up video */}
        <div className="taptap-final-media">
          <video
            ref={videoRef}
            className="taptap-final-video"
            src="/assets/speedtap.mp4"
            muted
            loop
            playsInline
          />
          <p className="taptap-final-caption">
            Tap-Tap Revolution in action!
          </p>
        </div>

        {/* Right: body copy */}
        <div className="taptap-final-content">
          <div className="taptap-final-body">
            <p>
              Our final product featured <span className="hi">&quot;Funkytown&quot; by Lipps Inc</span>. The
              song&apos;s structure made LED-to-button syncing
              straightforward and kept the energy high throughout
              gameplay.
            </p>

            <p>
              To keep <span className="hi">gameplay fresh</span>, LEDs
              randomize which buttons light up with each playthrough.
              This adds variety and unpredictability, making every round
              feel different.
            </p>

            <p>
        Overall, we {" "}
        <span className="hi">couldn&apos;t be happier</span> with the final
        product! Was it perfect? No... But did it work? Yes!
        </p>

          </div>
        </div>
      </div>

      {/* spark-happy — visible only at XXL, mirrors spark-disco pattern */}
      <img
        src="/assets/spark-happy.png"
        alt=""
        aria-hidden="true"
        className="taptap-final-spark"
      />
    </section>
  );
}