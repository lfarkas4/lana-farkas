// src/components/ResearchDiscovery.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function ResearchDiscovery() {
  // observe this whole section for scroll-in
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
          To understand what actually happens in underwater inspections, we
          combined <em>field research</em>, <em>operator interviews</em>, and{" "}
          <em>scrappy prototype demos</em>.
        </p>
      </div>

      {/* ========================
         Subsection 1: Evaluating the Existing Console
      ========================= */}
      <div className="research-subsection reveal-block">
        {/* left/media */}
        <div className="research-media reveal-block">
          <img
            src="/assets/aqpic3.jpg"
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
            <h3 className="research-subtitle">
              Evaluating the Existing Console
            </h3>

            {/* little spark decoration */}
            <img
              src="/assets/spark-right.svg"
              alt=""
              className="research-spark reveal-block--decor"
              aria-hidden="true"
            />
          </div>

          <p className="research-text">
            Heuristic reviews and expert analyses revealed missing feedback
            loops, inconsistent labels, and task flows that demanded too many
            clicks.
          </p>

          <div className="research-callout reveal-block">
            <p>
              In mission-critical contexts, <strong>clarity</strong> of{" "}
              <strong>operator interactions</strong> became a top priority.
            </p>
          </div>
        </div>
      </div>

      {/* ========================
         Subsection 2: Learning from the Field
      ========================= */}
      <div className="research-subsection reverse reveal-block">
        {/* left/media */}
        <div className="research-media reveal-block">
          <img
            src="/assets/aqpic4.jpg"
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
            {/* spark on the left for this one */}
            <img
              src="/assets/spark-left.svg"
              alt=""
              className="research-spark reveal-block--decor"
              aria-hidden="true"
            />
            <h3 className="research-subtitle">Learning from the Field</h3>
          </div>

          <p className="research-text">
            We shadowed commercial divers and public safety officials to see
            inspections unfold both in the water and onshore.
          </p>

          <div className="research-callout reveal-block">
            <p>
              Fieldwork revealed how the console must support the{" "}
              <strong>broader service</strong> workflow.
            </p>
          </div>
        </div>
      </div>

      {/* ========================
         Subsection 3: Co-Design & Usability Testing
      ========================= */}
      <div className="research-subsection reveal-block">
        {/* left/media */}
        <div className="research-media reveal-block">
          <img
            src="/assets/aqpic5.jpg"
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
            <h3 className="research-subtitle">
              Co-Design &amp; Usability Testing
            </h3>
            <img
              src="/assets/spark-right.svg"
              alt=""
              className="research-spark reveal-block--decor"
              aria-hidden="true"
            />
          </div>

          <p className="research-text">
            We co-designed with operators and engineers through bodystorming
            workshops and tested prototypes, refining scenarios step by step.
          </p>

          <div className="research-callout reveal-block">
            <p>
              Designing with users kept solutions aligned to{" "}
              <strong>real inspection tasks</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* ========================
         Key Insights (staggered cards)
      ========================= */}
      <div className="research-insights reveal-block">
        <div className="insights-header reveal-block">
          <div className="insights-label">Key Insights</div>

          <h3 className="insights-title">
            <span>
              Through discovery and testing, we uncovered insights that{" "}
              <em>guided our iterative design process</em>...
            </span>
            <img
              src="/assets/spark-check.svg"
              alt=""
              className="insights-spark reveal-block--decor"
              aria-hidden="true"
            />
          </h3>
        </div>

        {/* stagger each insight like meta row timing */}
        <div className="insights-list" data-stagger-block>
          <div className="insight-item">
            <div className="insight-number">Insight #1</div>
            <p className="insight-text">
              Operators need <strong>clear status signals</strong> to act
              decisively in zero-visibility environments.
            </p>
          </div>

          <div className="insight-item">
            <div className="insight-number">Insight #2</div>
            <p className="insight-text">
              Operations must <strong>support multiple roles</strong> so
              operators can coordinate through one shared system.
            </p>
          </div>

          <div className="insight-item">
            <div className="insight-number">Insight #3</div>
            <p className="insight-text">
              Setup should take minutes, not hours. Delays at the surface{" "}
              <strong>waste time</strong> and <strong>add risk</strong>.
            </p>
          </div>

          <div className="insight-item">
            <div className="insight-number">Insight #4</div>
            <p className="insight-text">
              Usability must <strong>extend beyond experts</strong> to open
              broader markets like public safety and emergency response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
