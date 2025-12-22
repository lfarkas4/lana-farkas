import React from "react";
import useReveal from "../utils/useReveal";

export default function DeliveredReflection() {
  const sectionRef = useReveal();

  return (
    <>
      <section
        ref={sectionRef}
        className="delivered-reflection-section"
        aria-label="What we delivered and reflection"
      >
        {/* flipped curve sits ON the light background */}
        <img
          src="/assets/curve.svg"
          alt=""
          className="delivered-curve"
          aria-hidden="true"
        />

        {/* ===== WHAT WE DELIVERED ===== */}
        <div className="delivered-section">
          {/* Block 1: NDA + heading + body all animate together */}
          <div className="delivered-head reveal-block">
            {/* NDA pill (still visually in the corner) */}
            <div className="delivered-nda">
              <img
                src="/assets/nda.svg"
                alt=""
                className="nda-icon"
                aria-hidden="true"
              />
              <span className="nda-text">
                Select work is NDA protected. Contact for details.
              </span>
            </div>

            {/* Eyebrow, title, paragraph */}
            <div className="delivered-intro">
              <div className="delivered-eyebrow">What We Delivered</div>

              <h3 className="delivered-title">
                We delivered operational refinements, validated features, and a
                blueprint for <em>future growth.</em>
              </h3>

              <p className="delivered-body">
                We presented high-fidelity prototypes for handoff; these
                materials are <strong className="hi">under NDA — please contact me for additional details</strong>.
                Improvements are documented in the task flows and supporting artifacts,
                summarized in two key product features:
              </p>
            </div>
          </div>

          {/* Block 2: Deliverables gallery — images row, descriptions below */}
          <div className="deliverables-gallery" data-stagger-block>
            <div className="deliverables-gallery-item">
              <img
                src="/assets/hri.png"
                alt="Operator Console interface showing mission control patterns"
                className="deliverables-gallery-image"
              />
              <div className="deliverables-gallery-content">
                <div className="deliverable-label">Deliverable #1</div>
                <h4 className="deliverable-title">Operator Console Updates</h4>
                <p className="deliverable-text">
                  Mission control patterns that improved situational awareness and enabled shared route planning.
                </p>
              </div>
            </div>

            <div className="deliverables-gallery-item">
              <img
                src="/assets/3danalysis.png"
                alt="3D Analysis Tools interface for reviewing scans and inspections"
                className="deliverables-gallery-image"
              />
              <div className="deliverables-gallery-content">
                <div className="deliverable-label">Deliverable #2</div>
                <h4 className="deliverable-title">3D Analysis Tools</h4>
                <p className="deliverable-text">
                  Prototypes of new tools for reviewing scans, spotting defects, and verifying inspection data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== REFLECTION & TAKEAWAYS ===== */}
        <div className="reflection-section">
          <div className="reflection-intro reveal-block">
            <div className="reflection-eyebrow">Reflection &amp; Takeaways</div>

            <h3 className="reflection-title">
              Robotics taught me that <em>clarity beats complexity</em>, and research bridges <em>chaos</em> and <em>strategy</em>.

              <img
                src="/assets/bulb.png"
                alt=""
                className="reflection-spark"
                aria-hidden="true"
              />
            </h3>

            <p className="reflection-body">
              While this project felt overwhelming at first, I learned{" "}
              <strong className="hi">design lives at the interface, not in the machine</strong>. My role wasn't
              to master algorithms, but to <strong className="hi">build trust for operators</strong>. This shift
              left me with three lessons to carry forward...
            </p>
          </div>

          <div className="takeaways-list" data-stagger-block>
            <div className="takeaway-item">
              <div className="takeaway-number">1</div>
              <div className="takeaway-content">
                <h4 className="takeaway-title">
                  Failure as a Design Input
                </h4>
                <p className="takeaway-text">
                  Reliability starts by designing for what goes wrong, not what should go right.
                </p>
              </div>
            </div>

            <div className="takeaway-item">
              <div className="takeaway-number">2</div>
              <div className="takeaway-content">
                <h4 className="takeaway-title">
                  Strategy in Real Contexts
                </h4>
                <p className="takeaway-text">
                  When process follows real people and contexts, decisions serve real needs.
                </p>
              </div>
            </div>

            <div className="takeaway-item">
              <div className="takeaway-number">3</div>
              <div className="takeaway-content">
                <h4 className="takeaway-title">
                  Fast Prototypes, Big Impact
                </h4>
                <p className="takeaway-text">
                  Quick, low-fidelity tests revealed the patterns that drove our final workflows and strategy.
                </p>
              </div>
            </div>
          </div>

          <div className="reflection-images" data-stagger-block>
            <div className="reflection-image-item">
              <img
                src="/assets/aqpic6.jpg"
                alt="Designer working on foam core prototype"
                className="reflection-image"
              />
              <p className="reflection-caption">
                Me vs. foam core and hot glue, round one!
              </p>
            </div>

            <div className="reflection-image-item">
              <img
                src="/assets/aqpic7.jpg"
                alt="Aquatonomy robot in natural habitat"
                className="reflection-image"
              />
              <p className="reflection-caption">
                The Aquatonomy robot in its natural habitat...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}