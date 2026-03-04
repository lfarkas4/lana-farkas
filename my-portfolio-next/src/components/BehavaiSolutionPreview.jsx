// src/components/BehavaiSolutionPreview.jsx
import React, { useRef, useEffect } from "react";
import useReveal from "../utils/useReveal";
import useIsMobile from "../utils/useIsMobile";

export default function BehavaiSolutionPreview() {
  const sectionRef = useReveal();
  const videoRef = useRef(null);
  const isMobile = useIsMobile();

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
      className="behavai-solution is-light"
      aria-label="BehavAI solution preview"
    >
      <div className="behavai-solution-inner reveal">
        {/* Header + spark */}
        <header className="behavai-solution-header">
          <p className="behavai-solution-eyebrow">Solution Preview</p>
          <h2 className="behavai-solution-title">
            Introducing BehavAI, an <em>AI layer</em> that transforms scattered{" "}
            <span className="behavai-solution-title-break">
              <em>session data</em> into structured, <em>shareable progress reports</em>.
            </span>
          </h2>

          <img
            src="/assets/spark-six-dark.svg"
            alt=""
            aria-hidden="true"
            className="behavai-solution-spark"
          />
        </header>

        {/* Media block */}
        <div className="behavai-solution-media">
          <video
            ref={videoRef}
            className="behavai-solution-video"
            src={isMobile ? "/assets/behavai-trailer-mobile.mp4" : "/assets/behavai-trailer@1.mp4"}
            muted
            loop
            playsInline
          />
          <p className="behavai-solution-caption">
            Here's a sneak peek of the platform!
          </p>
        </div>
      </div>
    </section>
  );
}