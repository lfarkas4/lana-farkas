// src/components/HiraTrustOutro.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function HiraTrustOutro() {
  const scopeRef = useReveal();

  return (
    <section
      ref={scopeRef}
      className="hira-trust-outro"
      aria-label="External review and reflection"
    >
      <div className="hira-trust-outro-inner reveal">
        {/* ===============================
            Subsection 1: External Review
           =============================== */}
        <div className="hira-trust-outro-block">
          <header className="hira-trust-outro-header">
            <p className="hira-trust-outro-eyebrow">External Review</p>

            <h2 className="hira-trust-outro-title">
              A live demo and Q&amp;A helped us validate what <em>resonated</em> and
              what needed <em>tighter framing</em>.
            </h2>
          </header>

          <div className="hira-trust-outro-body">
            <p>
              In our end of year review, we shared the concept and safety boundaries
              with invited <span className="hi">health professionals</span>, and used
              their feedback to clarify Hira as a{" "}
              <span className="hi">recall-and-follow-through tool</span>.
            </p>
          </div>

          {/* Quote Cards (BehavAI-impact style structure) */}
          <div className="hira-testimonial-cards reveal">
            <div className="hira-testimonial-card">
              <p className="testimonial-quote">
                “I can see this <strong>being huge</strong>, especially for patients
                who <strong>don't have anyone</strong> to go with them to
                appointments.”
              </p>

              <div className="testimonial-author">
                <img
                  src="/assets/sarahtaylor.png"
                  alt="Dr. Sarah Taylor"
                  className="author-avatar"
                  loading="lazy"
                />
                <div className="author-info">
                  <div className="author-name">Dr. Sarah Taylor</div>
                  <div className="author-role">Gynecologic Oncology Physician</div>
                </div>
              </div>
            </div>

            <div className="hira-testimonial-card">
              <p className="testimonial-quote">
                “This is exactly what <strong>patient care</strong> needs{" "}
                <strong>right now</strong>. Plus it's helpful for doctors too. Please{" "}
                <strong>keep on building</strong>.”
              </p>

              <div className="testimonial-author">
                <img
                  src="/assets/gracecampbell.png"
                  alt="Grace Campbell"
                  className="author-avatar"
                  loading="lazy"
                />
                <div className="author-info">
                  <div className="author-name">Grace Campbell</div>
                  <div className="author-role">UPMC Family Care Center Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===============================
            Subsection 2: What I Learned
           =============================== */}
        <div className="hira-trust-outro-block hira-trust-outro-block--last">
          <header className="hira-trust-outro-header">
            <p className="hira-trust-outro-eyebrow">What I Learned</p>

            <h2 className="hira-trust-outro-title">
              Designing for cancer care was an experience that made me feel the
              weight of <em>words</em>, <em>timing</em>, and <em>trust</em>.
            </h2>
          </header>

          <div className="hira-trust-outro-body">
            <p>
              Listening to patients and caregivers reshaped how I think about
              “support” in healthcare. As a woman, their honesty made the work
              deeply personal, and it stayed with me because{" "}
              <span className="hi">trust can be fragile</span> when people are already{" "}
              <span className="hi">carrying so much</span>.
            </p>

            <p>
              I left with a deeper respect for design’s ability to{" "}
              <span className="hi">help people feel seen</span>, and I’m grateful to
              our clinical partners and teammates for bringing both care and rigor to
              every step of the journey.
            </p>
          </div>

          {/* Reuse your existing side-by-side image styling */}
          <div className="hira-heard-images">
            <div className="hira-heard-image-item">
              <img
                src="/assets/storyboard.png"
                alt="Storyboarding session"
                className="hira-heard-image"
                loading="lazy"
              />
              <p className="hira-heard-caption">
                Storyboarding our way through the hard parts...
              </p>
            </div>

            <div className="hira-heard-image-item">
              <img
                src="/assets/critique.png"
                alt="Critique session"
                className="hira-heard-image"
                loading="lazy"
              />
              <p className="hira-heard-caption">
                Designing with care, and a lot of critique!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
