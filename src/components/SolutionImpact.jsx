import React, { useEffect, useRef, useState } from "react";

function CountUp({ end = 0, duration = 1200, prefix = "", suffix = "", animate = true }) {
  const [value, setValue] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (!animate || reduceMotion) {
      setValue(end);
      setHasRun(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasRun) {
        setHasRun(true);
        const start = performance.now();
        const dur = Math.max(200, duration);
        const tick = now => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(0 + (end - 0) * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.35 });

    io.observe(el);
    return () => io.disconnect();
  }, [animate, end, duration, hasRun]);

  return (
    <span ref={ref} className="si-stat-number" aria-label={`${prefix}${end}${suffix}`}>
      {prefix}{value}{suffix}
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
          We turned a promising robot into a <span className="si-title-light">mission-ready console</span> built for clarity under pressure.
        </h3>

        <div className="si-body">
          <p>
            On day one, <strong className="hi">operators showed us where the console failed them</strong> 
            — unclear modes, too many clicks, no single place to act. Our approach was to{" "}
            <strong className="hi">cut ambiguity at every step</strong>: we centered decisions, made
            state obvious, and kept a simple history so teams never lose
            the thread!
          </p>
        </div>
      </div> {/* ← this was missing */}

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
            <CountUp end={1} animate={false} />
            <p className="si-stat-label">system blueprint adopted into roadmap</p>
          </div>
        </div>

        <img src="/assets/spark-call.svg" alt="" className="si-sparkle" aria-hidden="true" />
      </div>
    </section>
  );
}
