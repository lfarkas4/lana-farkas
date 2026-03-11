// src/components/TapTapRealityCheck.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function TapTapRealityCheck() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="taptap-reality is-light"
      aria-label="TapTap Reality Check"
    >
      {/* SVG curve — absolute background, same as hira-hmw-curve */}
      <img
        src="/assets/bluecurve.svg"
        alt=""
        className="taptap-reality-curve"
        aria-hidden="true"
      />

      <div className="taptap-reality-inner reveal reveal--up">
        {/* Header */}
        <header className="taptap-reality-header">
          <p className="taptap-reality-eyebrow">Reality Check</p>

          <h2 className="taptap-reality-title">
            <span>
              Unfortunately, we quickly learned that our{" "}
              <em>original vision</em> was a little <em>too ambitious</em> for this project...
            </span>

            {/* Spark decoration — mirrors hira-hmw-spark placement inside title */}
            <img
              src="/assets/spark-silly.png"
              alt=""
              className="taptap-reality-spark"
              aria-hidden="true"
            />
          </h2>
        </header>

        {/* Body */}
        <div className="taptap-reality-body">
          <p>
            Syncing our game with existing DDR songs{" "}
            <span className="hi">required technology</span> and{" "}
            <span className="hi">infrastructure</span> we didn&apos;t have
            access to. We needed to <span className="hi">pivot fast</span> while
            keeping what made the concept fun in the first place!
          </p>
        </div>
      </div>
    </section>
  );
}