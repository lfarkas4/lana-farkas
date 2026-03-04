// src/components/ResearchDiscovery.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function ResearchDiscovery() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="research-section reveal-block"
      aria-label="Research and discovery process"
    >
      {/* ========================
         Header
      ========================= */}
      <div className="research-header reveal-block">
        <div className="research-eyebrow">Research &amp; Discovery</div>

        <p className="research-intro">
          We mixed <em>field research</em>, <em>operator interviews</em>, and{" "}
          <em>fast prototypes</em> to learn what really happens in underwater inspections.
        </p>
      </div>

      {/* ========================
         Subsection 1: Evaluating the Existing Console
      ========================= */}
      <div className="research-subsection reveal-block">
        {/* left/media */}
        <div className="research-media reveal-block">
          <img
            src="/assets/aqpic3.webp"
            alt="Team reviewing console workflows on wall"
            className="research-image"
          />
          <p className="research-caption">
            Annotating current console workflows to identify pain points.
          </p>
        </div>

        {/* right/content */}
        <div className="research-content reveal-block">
          <div className="research-subtitle-wrapper">
            <h3 className="research-subtitle">Evaluating the Existing Console</h3>
            {/* spark removed per request */}
          </div>

          <p className="research-text">
            Heuristic reviews and expert reads exposed weak feedback, inconsistent labels,
            and click-heavy flows.
          </p>

          {/* callout replaced with PNG #1 */}
          <img
            src="/assets/callout1.png"
            alt="Finding #1: In mission-critical contexts, clarity of operator interactions became a top priority."
            className="research-callout-img"
          />
        </div>
      </div>

      {/* ========================
         Subsection 2: Learning from the Field
      ========================= */}
      <div className="research-subsection reverse reveal-block">
        {/* left/media */}
        <div className="research-media reveal-block">
          <img
            src="/assets/aqpic4.webp"
            alt="Team observing field operations"
            className="research-image"
          />
          <p className="research-caption">
            Exploring how teams prepare for water rescue missions.
          </p>
        </div>

        {/* right/content */}
        <div className="research-content reveal-block">
          <div className="research-subtitle-wrapper">
            {/* spark removed per request */}
            <h3 className="research-subtitle">Learning from the Field</h3>
          </div>

          <p className="research-text">
            We shadowed commercial divers and public safety officials to see inspections
            unfold both in the water and onshore.
          </p>

          {/* callout replaced with PNG #2 */}
          <img
            src="/assets/callout2.png"
            alt="Finding #2: Fieldwork revealed how the console must support the broader service workflow."
            className="research-callout-img"
          />
        </div>
      </div>

      {/* ========================
         Subsection 3: Co-Design & Usability Testing
      ========================= */}
      <div className="research-subsection reveal-block">
        {/* left/media */}
        <div className="research-media reveal-block">
          <img
            src="/assets/aqpic5.webp"
            alt="Physical prototype for bodystorming"
            className="research-image"
          />
          <p className="research-caption">
            Physical prototype for bodystorming in workshops.
          </p>
        </div>

        {/* right/content */}
        <div className="research-content reveal-block">
          <div className="research-subtitle-wrapper">
            <h3 className="research-subtitle">Co-Design &amp; Usability Testing</h3>
            {/* spark removed per request */}
          </div>

          <p className="research-text">
            Bodystorming and usability sessions with operators and engineers helped us
            refine scenarios step by step.
          </p>

          {/* callout replaced with PNG #3 */}
          <img
            src="/assets/callout3.png"
            alt="Finding #3: Designing with users kept solutions aligned to real inspection tasks."
            className="research-callout-img"
          />
        </div>
      </div>

      {/* ========================
         Key Insights
      ========================= */}
      <div className="research-insights reveal-block">
        <div className="insights-header reveal-block">
          <div className="insights-label">Key Insights</div>

          <h3 className="insights-title">
            <span>
              Through discovery and testing, we uncovered insights that{" "}
              <em>guided our iterative design process</em>...
            </span>
            {/* swap spark-check → spark-right */}
            <img
              src="/assets/spark-right.svg"
              alt=""
              className="insights-spark reveal-block--decor"
              aria-hidden="true"
            />
          </h3>
        </div>

        <div className="insights-list" data-stagger-block>
          <div className="insight-item">
            <img src="/assets/01.png" alt="01" className="insight-number-img" />
            <p className="insight-text">
              Operators need <strong>clear status signals</strong> to act decisively when they can’t see.
            </p>
          </div>

          <div className="insight-item">
            <img src="/assets/02.png" alt="02" className="insight-number-img" />
            <p className="insight-text">
              The system must <strong>support multiple roles</strong> on a unified platform.
            </p>
          </div>

          <div className="insight-item">
            <img src="/assets/03.png" alt="03" className="insight-number-img" />
            <p className="insight-text">
              Setup should take minutes, not hours. Delays <strong>waste time</strong> and{" "}
              <strong>add risk</strong>.
            </p>
          </div>

          <div className="insight-item">
            <img src="/assets/04.png" alt="04" className="insight-number-img" />
            <p className="insight-text">
              Usability must <strong>extend beyond experts</strong> to open broader markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
