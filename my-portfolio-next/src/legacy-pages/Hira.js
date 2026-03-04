// src/pages/Hira.js
import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import NextProjectTeaser from "../components/NextProjectTeaser";
import ScrollProgressBar from "../components/ScrollProgressBar";
import HiraOurChallenge from "../components/HiraOurChallenge";
import HiraPatientJourney from "../components/HiraPatientJourney";
import HiraTheConcept from "../components/HiraTheConcept";
import HiraSolution from "../components/HiraSolution";
import HiraTrustOutro from "../components/HiraTrustOutro";
import UnderConstructionPage from "../components/UnderConstructionPage";
import HiraWhatWeHeard from "../components/HiraWhatWeHeard";
import HiraProductPivot from "../components/HiraProductPivot";

import { caseStudies } from "../data/ProjectsData";
import useReveal from "../utils/useReveal";

const iconMap = {
  Figma: "/assets/figma.svg",
  Swift: "/assets/swift.svg"
};

// ═══════════════════════════════════════════════════════════════
// Toggle this to switch between the placeholder and full case study
// Set to `false` when you're ready to show the actual content
// ═══════════════════════════════════════════════════════════════
const SHOW_UNDER_CONSTRUCTION = false;

export default function Hira() {
  // Set up scroll-reveal for hero + meta - MUST be at the top before any returns
  const heroScopeRef = useReveal();
  
  const data = caseStudies.find((p) => p.slug === "hira");
  if (!data) return null;

  // ════════════════════════════════════════════════════════════
  // OPTION 1: Show the Under Construction page with mini-game
  // ════════════════════════════════════════════════════════════
  if (SHOW_UNDER_CONSTRUCTION) {
    return <UnderConstructionPage projectName="Hira" />;
  }
  // ════════════════════════════════════════════════════════════

  const splitTeam = (txt) => {
    const parts = String(txt).split(" — ");
    return parts.length > 1 ? (
      <>
        {parts[0]}:<br />
        {parts.slice(1).join(" — ")}
      </>
    ) : (
      txt
    );
  };

  const splitTimeline = (txt) => {
    const idx = String(txt).indexOf(" (");
    return idx > -1 ? (
      <>
        {txt.slice(0, idx)}
        <br />
        {txt.slice(idx)}
      </>
    ) : (
      txt
    );
  };

  const tools = String(data.meta?.tools || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <ProjectDetailLayout>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      <div ref={heroScopeRef}>
        {/* ===== HERO ===== */}
        <section className="pd-hero reveal" aria-label="Hira Health case study hero">
          <div className="pd-hero__eyebrow">
            {data.brandMark && (
              <img
                className="pd-hero__brand"
                src={data.brandMark}
                alt=""
                style={{ "--brand-h": data.brandMarkH || "18px" }}
              />
            )}
          </div>

          <h1 className="pd-hero__title">{data.title}</h1>
          <p className="pd-hero__subtitle">{data.description}</p>

          <div className="pd-hero__media">
            {data.video ? (
              <video src={data.video} autoPlay muted loop playsInline />
            ) : (
              data.image && <img src={data.image} alt={data.title} />
            )}
          </div>
        </section>

        {/* ===== META STRIP ===== */}
        <section className="pd-meta">
          <div className="pd-meta__item reveal">
            <div className="pd-meta__heading">My Role</div>
            <div className="pd-meta__text">{data.meta?.role}</div>
          </div>

          <div className="pd-meta__item reveal">
            <div className="pd-meta__heading">Team</div>
            <div className="pd-meta__text">{splitTeam(data.meta?.team)}</div>
          </div>

          <div className="pd-meta__item reveal">
            <div className="pd-meta__heading">Timeline</div>
            <div className="pd-meta__text">{splitTimeline(data.meta?.timeline)}</div>
          </div>

          <div className="pd-meta__item reveal">
            <div className="pd-meta__heading">Tools</div>
            <ul className="pd-tools">
              {tools.map((tool) => (
                <li className="pd-tool" key={tool}>
                  <img
                    className="pd-tool__icon"
                    src={iconMap[tool]}
                    alt={tool}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* ===== CASE STUDY CONTENT ===== */}
<HiraOurChallenge />
<HiraPatientJourney />
<HiraTheConcept />
<HiraWhatWeHeard />
<HiraProductPivot />
<HiraSolution />
<HiraTrustOutro />

      

      {/* Future sections will go here */}

      <NextProjectTeaser currentSlug="hira" nextSlug="stackbuilder" />
    </ProjectDetailLayout>
  );
}