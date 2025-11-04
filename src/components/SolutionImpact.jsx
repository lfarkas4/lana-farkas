// src/components/SolutionImpact.jsx
import React, { useEffect, useRef, useState } from "react";

function CountUp({ end = 0, duration = 1200, prefix = "", suffix = "", animate = true }) {
  const [value, setValue] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    // If animation is disabled or reduced-motion is set, just show final value.
    if (!animate || reduceMotion) {
      setValue(end);
      setHasRun(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
          const start = performance.now();
          const from = 0;
          const to = end;
          const dur = Math.max(200, duration); // guard

          const tick = (now) => {
            const t = Math.min(1, (now - start) / dur);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - t, 3);
            const current = Math.round(from + (to - from) * eased);
            setValue(current);

            if (t < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [animate, end, duration, hasRun]);

  return (
    <span ref={ref} className="si-stat-number" aria-label={`${prefix}${end}${suffix}`}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

export default function SolutionImpact() {
  return (
    <section className="solution-impact-section" aria-label="Solution and impact">
      {/* Solution Section */}
      <div className="si-solution">
        <div className="si-eyebrow">Solution</div>
        <h3 className="si-title">
        We reframed Aquatonomy as a <span className="si-title-light">decision-support system</span>, helping users plan, supervise, and review with confidence.
        </h3>

        <div className="si-body">
          <p>
          Our solution included <strong>streamlined workflows</strong> for fewer, faster tasks, <strong>clear signal patterns</strong> for zero-visibility moments, and <strong>cross-role coordination</strong> to focus effort where robotics adds the most value!
          </p>
        </div>
      </div>

      {/* Impact Section */}
      <div className="si-impact">
        <div className="si-eyebrow">Impact</div>

        {/* Stats Grid */}
        <div className="si-stats">
          <div className="si-stat">
            <CountUp end={30} suffix="%" duration={1200} />
            <p className="si-stat-label">fewer steps in operator workflows</p>
          </div>

          <div className="si-stat">
            <CountUp end={12} duration={1200} />
            <p className="si-stat-label">high-fidelity prototypes tested and shared</p>
          </div>

          <div className="si-stat">
            <CountUp end={20} suffix="+" duration={1200} />
            <p className="si-stat-label">stakeholders validated new task flows</p>
          </div>

          <div className="si-stat">
            {/* Per your request: do NOT animate the single blueprint metric */}
            <CountUp end={1} animate={false} />
            <p className="si-stat-label">system blueprint adopted into roadmap</p>
          </div>
        </div>

        {/* Sparkle decoration */}
        <img
          src="/assets/spark-call.svg"
          alt=""
          className="si-sparkle"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
