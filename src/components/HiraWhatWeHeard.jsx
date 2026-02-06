import React from "react";
import useReveal from "../utils/useReveal";

export default function HiraWhatWeHeard() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="hira-wwh is-light"
      aria-label="Hira testing and what we heard"
    >
      <div className="hira-wwh-inner reveal">
        {/* =========================
            Block 1: Testing Our Concept
           ========================= */}
        <header className="hira-wwh-header">
          <p className="hira-wwh-eyebrow">Testing Our Concept</p>
          <h2 className="hira-wwh-title">
            We brought our early concept back to UPMC to pressure-test it with{" "}
            <em>patients</em>, <em>caregivers</em>, and <em>providers</em>.
          </h2>

          <div className="hira-wwh-body">
            <p>
              With an ambient listening tool as our starting direction, we facilitated a{" "}
              <span className="hi">co-design workshop</span> with patients, caregivers, and healthcare providers.
            We wanted to understand what support should sound like, feel like, and do across the{" "}
              <span className="hi">appointment journey</span>.
            </p>
          </div>
        </header>

        {/* Activity gallery (Aquatonomy-style) */}
        <div className="hira-wwh-activities" data-stagger-block>
          <div className="hira-wwh-activity">
            <img
              src="/assets/co-design.webp"
              alt="Co-design workshop activity with participants mapping experiences"
              className="hira-wwh-activity-image"
            />
            <div className="hira-wwh-activity-content">
              <div className="hira-wwh-activity-label">Activity #1</div>
              <h3 className="hira-wwh-activity-title">Experience Mapping</h3>
              <p className="hira-wwh-activity-text">
                Participants mapped how they felt across appointments and what they wished they could hear in those moments.
              </p>
            </div>
          </div>

          <div className="hira-wwh-activity">
            <img
              src="/assets/virtual.webp"
              alt='Cutout templates used to design an ideal "virtual caregiver"'
              className="hira-wwh-activity-image"
            />
            <div className="hira-wwh-activity-content">
              <div className="hira-wwh-activity-label">Activity #2</div>
              <h3 className="hira-wwh-activity-title">Desired Support Systems</h3>
              <p className="hira-wwh-activity-text">
                Using cutout templates, participants designed their ideal &quot;virtual caregiver&quot; with qualities they’d want during treatment.
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            Block 2: What We Heard
           ========================= */}
        <header className="hira-wwh-header hira-wwh-header--spaced">
          <p className="hira-wwh-eyebrow">What We Heard</p>
          <h2 className="hira-wwh-title">
            Everyone wanted <em>something different</em>, but one theme kept surfacing. Patients just wanted to{" "}
            <em>be heard</em>.
          </h2>

          <div className="hira-wwh-body">
            <p>
              We heard a wide range of needs, but the <span className="hi">strongest signal</span> was simpler than we expected. Patients didn’t need another voice telling them what to do. They needed to feel{" "}
              heard, understood, and <span className="hi">in control of their own experience</span>.
            </p>
          </div>
        </header>

        {/* Key insights */}
        <div className="hira-wwh-insights">

          <div className="hira-wwh-insights-grid" data-stagger-block>
            <div className="hira-wwh-insight-card">
              <div className="hira-wwh-insight-number">1</div>
              <div className="hira-wwh-insight-content">
                <div className="hira-wwh-insight-title">Pre-appointment anxiety is high.</div>
                <div className="hira-wwh-insight-text">
                  Not knowing the outcome creates stress that compounds over days.
                </div>
              </div>
            </div>

            <div className="hira-wwh-insight-card">
              <div className="hira-wwh-insight-number">2</div>
              <div className="hira-wwh-insight-content">
                <div className="hira-wwh-insight-title">It&apos;s hard to listen during appointments.</div>
                <div className="hira-wwh-insight-text">
                  Information moves fast and patients often don’t feel heard by their providers.
                </div>
              </div>
            </div>

            <div className="hira-wwh-insight-card">
              <div className="hira-wwh-insight-number">3</div>
              <div className="hira-wwh-insight-content">
                <div className="hira-wwh-insight-title">Support needs to be twofold.</div>
                <div className="hira-wwh-insight-text">
                  Patients want presence and help with sense-making, but not at the same time.
                </div>
              </div>
            </div>

            <div className="hira-wwh-insight-card">
              <div className="hira-wwh-insight-number">4</div>
              <div className="hira-wwh-insight-content">
                <div className="hira-wwh-insight-title">Timing matters.</div>
                <div className="hira-wwh-insight-text">
                  Some want to debrief in the car. Others need to get home first. The tool has to flex.
                </div>
              </div>
            </div>
          </div>

          <p className="hira-wwh-transition">
            This realization pushed us to <strong>rethink our approach</strong>. The answer wasn’t a smarter system. It was a{" "}
            <strong>simpler one</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
