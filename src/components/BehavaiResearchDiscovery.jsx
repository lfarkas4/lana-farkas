// src/components/BehavaiResearchDiscovery.jsx
import React from "react";
import useReveal from "../utils/useReveal";

export default function BehavaiResearchDiscovery() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="behavai-research-section is-dark"
      aria-label="BehavAI research and discovery"
    >
      {/* ========================
         User Discovery Subsection
      ========================= */}
      <div className="behavai-research-subsection reveal">
        <div className="behavai-research-header">
          <p className="behavai-research-eyebrow">User Discovery</p>
          <h3 className="behavai-research-intro">
            We studied ABA end-to-end so the product fits the work,{" "}
            <em>not the other way around</em>.
          </h3>
        </div>

        <div className="behavai-research-body">
          <p className="behavai-research-text">
            <strong>We shadowed an ABA practice</strong>, surveyed{" "}
            <strong>150+ therapists</strong>, and conducted{" "}
            <strong>15+ in-depth interviews</strong> with BCBAs and RBTs to map 
            how therapy data moves across sessions → supervisors → insurers.
          </p>
        </div>

        <div className="behavai-discovery-visual">
          <div className="behavai-discovery-circles">
            {/* Circle 1 */}
            <div className="behavai-discovery-item">
              <div className="behavai-discovery-circle">
                <img src="/assets/paperwork.png" alt="" />
              </div>
              <div className="behavai-discovery-stat">40%</div>
              <div className="behavai-discovery-label">
                of the workday spent on client paperwork
              </div>
            </div>

            {/* Arrow 1 */}
            <img 
              src="/assets/drawarrow1.png" 
              alt="" 
              className="behavai-discovery-arrow"
              aria-hidden="true"
            />

            {/* Circle 2 */}
            <div className="behavai-discovery-item">
              <div className="behavai-discovery-circle">
                <img src="/assets/systems.png" alt="" />
              </div>
              <div className="behavai-discovery-stat">~3</div>
              <div className="behavai-discovery-label">
                different systems used per client
              </div>
            </div>

            {/* Arrow 2 */}
            <img 
              src="/assets/drawarrow2.png" 
              alt="" 
              className="behavai-discovery-arrow"
              aria-hidden="true"
            />

            {/* Circle 3 */}
            <div className="behavai-discovery-item">
              <div className="behavai-discovery-circle">
                <img src="/assets/rewrites.png" alt="" />
              </div>
              <div className="behavai-discovery-stat">2+</div>
              <div className="behavai-discovery-label">
                rewrites before a report is final
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================
         Landscape Analysis Subsection
      ========================= */}
      <div className="behavai-research-subsection reveal">
        <div className="behavai-research-header">
          <p className="behavai-research-eyebrow">Landscape Analysis</p>
          <h3 className="behavai-research-intro">
            Legacy systems were built for compliance, but they can't{" "}
            <em>evolve fast enough</em>.
          </h3>
        </div>

        <div className="behavai-research-body">
          <p className="behavai-research-text">
            We saw BehavAI not as a replacement, but as a{" "}
            <strong>layer of intelligence</strong> — an add-on that fits 
            seamlessly into <strong>existing systems</strong> while 
            modernizing the documentation process.
          </p>
        </div>

        <div className="behavai-landscape-visual">
          <table className="behavai-landscape-table">
            <thead>
              <tr>
                <th className="behavai-table-feature">
                  {/* Empty corner cell */}
                </th>
                <th className="behavai-table-brand">
                  <img src="/assets/centralreach.png" alt="CentralReach" />
                </th>
                <th className="behavai-table-brand">
                  <img src="/assets/rethinkbh.png" alt="RethinkBH" />
                </th>
                <th className="behavai-table-brand">
                  <img src="/assets/chatgpt.png" alt="ChatGPT" />
                </th>
                <th className="behavai-table-brand behavai-table-brand--ours">
                  <img src="/assets/behavaii.png" alt="BehavAI" />
                </th>
              </tr>
            </thead>
            <tbody>
  {/* 1. ABA-specific documentation structure */}
  <tr>
    <td className="behavai-table-feature">
      ABA-specific documentation structure
    </td>
    {/* CentralReach */}
    <td className="behavai-table-cell">
      <img src="/assets/checkk.png" alt="Yes" className="behavai-table-icon" />
    </td>
    {/* RethinkBH */}
    <td className="behavai-table-cell">
      <img src="/assets/checkk.png" alt="Yes" className="behavai-table-icon" />
    </td>
    {/* ChatGPT */}
    <td className="behavai-table-cell">
      <img src="/assets/ex.png" alt="No" className="behavai-table-icon" />
    </td>
    {/* BehavAI */}
    <td className="behavai-table-cell">
      <img src="/assets/checkk.png" alt="Yes" className="behavai-table-icon" />
    </td>
  </tr>

  {/* 2. AI assistance tailored to ABA reports */}
  <tr>
    <td className="behavai-table-feature">
      AI assistance tailored to ABA reports
    </td>
    <td className="behavai-table-cell">
      <img src="/assets/ex.png" alt="No" className="behavai-table-icon" />
    </td>
    <td className="behavai-table-cell">
      <img src="/assets/ex.png" alt="No" className="behavai-table-icon" />
    </td>
    <td className="behavai-table-cell">
      <img src="/assets/checkk.png" alt="Yes" className="behavai-table-icon" />
    </td>
    <td className="behavai-table-cell">
      <img src="/assets/checkk.png" alt="Yes" className="behavai-table-icon" />
    </td>
  </tr>

  {/* 3. PHI-safe, HIPAA-aligned AI workflow */}
  <tr>
    <td className="behavai-table-feature">
      PHI-safe, HIPAA-aligned AI workflow
    </td>
    <td className="behavai-table-cell">
      <img src="/assets/checkk.png" alt="Yes" className="behavai-table-icon" />
    </td>
    <td className="behavai-table-cell">
      <img src="/assets/checkk.png" alt="Yes" className="behavai-table-icon" />
    </td>
    <td className="behavai-table-cell">
      <img src="/assets/ex.png" alt="No" className="behavai-table-icon" />
    </td>
    <td className="behavai-table-cell">
      <img src="/assets/checkk.png" alt="Yes" className="behavai-table-icon" />
    </td>
  </tr>

  {/* 4. Works on top of existing systems */}
  <tr>
    <td className="behavai-table-feature">
      Works on top of existing systems
    </td>
    <td className="behavai-table-cell">
      <img src="/assets/ex.png" alt="No" className="behavai-table-icon" />
    </td>
    <td className="behavai-table-cell">
      <img src="/assets/ex.png" alt="No" className="behavai-table-icon" />
    </td>
    <td className="behavai-table-cell">
      <img src="/assets/checkk.png" alt="Yes" className="behavai-table-icon" />
    </td>
    <td className="behavai-table-cell">
      <img src="/assets/checkk.png" alt="Yes" className="behavai-table-icon" />
    </td>
  </tr>

  {/* 5. AI layer for practice-management & billing tools */}
  <tr>
    <td className="behavai-table-feature">
      AI layer for practice-management &amp; billing tools
    </td>
    {/* CentralReach */}
    <td className="behavai-table-cell">
      <img src="/assets/ex.png" alt="No" className="behavai-table-icon" />
    </td>
    {/* RethinkBH */}
    <td className="behavai-table-cell">
      <img src="/assets/ex.png" alt="No" className="behavai-table-icon" />
    </td>
    {/* ChatGPT */}
    <td className="behavai-table-cell">
      <img src="/assets/ex.png" alt="No" className="behavai-table-icon" />
    </td>
    {/* BehavAI */}
    <td className="behavai-table-cell">
      <img
        src="/assets/checkk.png"
        alt="Yes"
        className="behavai-table-icon"
      />
    </td>
  </tr>
</tbody>

          </table>
        </div>
      </div>

      {/* ========================
         Design Foundation Subsection
      ========================= */}
      <div className="behavai-research-subsection behavai-research-subsection--last reveal">
        <div className="behavai-research-header">
          <p className="behavai-research-eyebrow">Design Foundation</p>
          <h3 className="behavai-research-intro">
            Therapists needed support, <em>not automation</em> — so that's 
            what we designed for.
          </h3>
        </div>

        <div className="behavai-research-body">
          <p className="behavai-research-text">
            We learned therapists don't want AI to take over,{" "}
            <strong>they want it to stay out of the way</strong>.
          </p>
          <p className="behavai-research-text">
            Every design choice focused on transparency and trust: clear 
            structure, editable summaries, and straightforward tools that keep the 
            therapist's <strong>voice front and center</strong>.
          </p>
        </div>

        <div className="behavai-design-visual">
          {/* Spark decoration at top */}
          <img 
            src="/assets/spark-right.svg" 
            alt="" 
            className="behavai-design-spark"
            aria-hidden="true"
          />

          <div className="behavai-quote-cards">
            {/* Quote Card 1 */}
            <div className="behavai-quote-card">
              <div className="behavai-quote-icon">
                <img src="/assets/moneybag.png" alt="" />
              </div>
              <p className="behavai-quote-text">
                <em>
                  "I want an AI for notes because <strong>documentation NEVER ends</strong>. If someone makes 
                  robust tools for that,{" "}
                  <strong>I'll 100% pay a ransom for it</strong>."
                </em>
              </p>
            </div>

            {/* Quote Card 2 */}
            <div className="behavai-quote-card">
              <div className="behavai-quote-icon">
                <img src="/assets/editing.png" alt="" />
              </div>
              <p className="behavai-quote-text">
                <em>
                  "I use <strong>ChatGPT all the time</strong>, but not for 
                  writing notes (...) you end up{" "}
                  <strong>editing so much</strong> that it is not worth the time."
                </em>
              </p>
            </div>

            {/* Quote Card 3 */}
            <div className="behavai-quote-card">
              <div className="behavai-quote-icon">
                <img src="/assets/magnify.png" alt="" />
              </div>
              <p className="behavai-quote-text">
                <em>
                  "AI is helpful for session notes (…) but I always have to{" "}
                  <strong>remove identifying info first</strong>, which adds 
                  an extra step every time."
                </em>
              </p>
            </div>
          </div>

          {/* Bottom caption with decorative lines */}
          <div className="behavai-design-caption">
            <img src="/assets/line-mark.png" alt="" aria-hidden="true" />
            <span><em>What we heard from therapists!</em></span>
            <img src="/assets/line-mark.png" alt="" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}