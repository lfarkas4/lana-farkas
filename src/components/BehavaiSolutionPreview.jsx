// src/components/BehavaiSolutionPreview.jsx
import React, { useRef, useEffect } from "react";
import useReveal from "../utils/useReveal";

export default function BehavaiSolutionPreview() {
  const sectionRef = useReveal();
  const videoRef = useRef(null);

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
            Introducing BehavAI, an AI-powered reporting workflow{" "}
            <span className="behavai-solution-title-break">
              that turns <em>session notes</em> into <em>clear progress</em>.
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
    src="/assets/behavai-trailer.mp4"
    muted
    loop
    playsInline
    // no controls here – clean, auto-playing frame
  />
  <p className="behavai-solution-caption">
    Here’s a sneak peek of the platform!
  </p>
</div>

      </div>
    </section>
  );
}
