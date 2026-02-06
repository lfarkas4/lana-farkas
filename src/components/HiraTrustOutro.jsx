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

          {/* Quote Cards */}
          <div className="hira-testimonial-cards reveal">
            <div className="hira-testimonial-card">
              <p className="testimonial-quote">
                "I can see this <strong>being huge</strong>, especially for patients
                who <strong>don't have anyone</strong> to go with them to
                appointments."
              </p>

              <div className="testimonial-author">
                <img
                  src="/assets/sarahtaylor.webp"
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
                "This is exactly what <strong>patient care</strong> needs{" "}
                <strong>right now</strong>. Plus it's helpful for doctors too. Please{" "}
                <strong>keep on building</strong>."
              </p>

              <div className="testimonial-author">
                <img
                  src="/assets/gracecampbell.webp"
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
      </div>

      {/* ===============================
          Subsection 2: Perceived Impact
          (#FAFAFE background)
         =============================== */}
      <div className="hira-impact">
        <div className="hira-impact-inner reveal">
          <header className="hira-impact-header">
            <p className="hira-impact-eyebrow">Perceived Impact</p>

            <h2 className="hira-impact-title">
              Tools like Hira matter because <em>support systems</em> aren't always
              there when <em>they should be</em>.
            </h2>
          </header>

          <div className="hira-impact-body">
            <p>
              When support systems fall short, <span className="hi">small moments</span>{" "}
              can carry a <span className="hi">lot of weight</span>. Throughout our
              research, we heard about patients managing treatment alone and caregivers
              doing everything they can.
            </p>
            <p>
              Hira can't replace human connection, but it can{" "}
              hold space when <span className="hi">no one else is around</span>.
            </p>
          </div>

          {/* Stat Callout (Recommended Structure: kicker + lede + stats + source) */}
          <aside
            className="hira-impact-callout"
            role="note"
            aria-label="Supporting statistic"
          >
            <div className="callout-meta">
              <span className="callout-kicker">Did you know?</span>

              {/* Replace href + label with your real citation */}
              <a
  className="callout-source"
  href="https://pubmed.ncbi.nlm.nih.gov/19645027/"
  target="_blank"
  rel="noreferrer"
>
  Source: Glantz et al., Cancer (2009)
</a>

            </div>

            <div className="callout-stats">
              <div className="callout-stat-item">
                <span className="callout-number">20%</span>
                <span className="callout-label">
                  of women with cancer experience divorce during treatment
                </span>
              </div>

              <div className="callout-stat-item">
                <span className="callout-number">3%</span>
                <span className="callout-label">
                  of men with cancer experience divorce during treatment
                </span>
              </div>
            </div>

            <p className="callout-context">
            <strong>Serious illness can change relationship support during treatment</strong>. 
            </p>
          </aside>

          <div className="hira-impact-body">
            <p>
              We can't solve systemic inequities with a product, but we can build
              something that meets people <span className="hi">where they are</span>{" "}
              and gives them <span className="hi">one less thing to carry alone</span>.
            </p>
          </div>
        </div>
      </div>

      {/* ===============================
          Subsection 3: What I Learned
         =============================== */}
      <div className="hira-trust-outro hira-trust-outro--continued">
        <div className="hira-trust-outro-inner reveal">
          <div className="hira-trust-outro-block hira-trust-outro-block--last">
            <header className="hira-trust-outro-header">
              <p className="hira-trust-outro-eyebrow">What I Learned</p>

              <h2 className="hira-trust-outro-title">
                The <em>hard conversations</em> were the ones that <em>mattered most</em>,
                and they shaped everything we built.
              </h2>
            </header>

            <div className="hira-trust-outro-body">
              <p>
                Designing for cancer care meant sitting with discomfort and asking
                questions that{" "}
                <span className="hi">didn't have easy answers</span>. Those
                conversations were heavy, but they were also the reason we arrived at
                something real.
              </p>

              <p>
                Sometimes the answer to a complex problem is a{" "}
                <span className="hi">simple solution that adapts</span>. Not every
                moment needs a response.{" "}
                <span className="hi">Some just need to be held</span>, and I’ll carry
                that lesson forward as I keep designing with more intention.
              </p>
            </div>

            {/* Side-by-side images */}
            <div className="hira-heard-images">
              <div className="hira-heard-image-item">
                <img
                  src="/assets/storyboard.webp"
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
                  src="/assets/critique.webp"
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
      </div>
    </section>
  );
}
