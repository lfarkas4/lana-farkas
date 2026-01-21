// src/pages/BehavAI.js
import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import NextProjectTeaser from "../components/NextProjectTeaser";
import BehavaiKickoff from "../components/BehavaiKickoff";
import BehavaiAboutABA from "../components/BehavaiAboutABA"; // NEW: How We Learned About ABA
import BehavaiProblemSpace from "../components/BehavaiProblemSpace";
import BehavaiSolutionPreview from "../components/BehavaiSolutionPreview";
import BehavaiResearchDiscovery from "../components/BehavaiResearchDiscovery";
// import BehavaiDesignChallenge from "../components/BehavaiDesignChallenge";
import BehavaiFinalSolution from "../components/BehavaiFinalSolution";
import BehavaiImpactAndBeyond from "../components/BehavaiImpactAndBeyond";

import { caseStudies } from "../data/ProjectsData";
import useReveal from "../utils/useReveal";
import "../styles/BehavAI.scss";

const iconMap = {
  Figma: "/assets/figma.svg",
  GitHub: "/assets/github.svg",
  React: "/assets/react.svg",
};

export default function BehavAI() {
  const data = caseStudies.find((p) => p.slug === "behavai");

  // one scope for hero + meta
  const heroScopeRef = useReveal();

  if (!data) return null;

  // Only break line before "clinical advisors"
  const splitTeam = (txt) => {
    if (!txt) return null;
    const str = String(txt);
    const plusIdx = str.indexOf(" + ");
    if (plusIdx > -1) {
      return (
        <>
          {str.slice(0, plusIdx + 3)}
          <br />
          {str.slice(plusIdx + 3)}
        </>
      );
    }
    return str;
  };

  const splitTimeline = (txt) => {
    if (!txt) return null;
    const str = String(txt);
    const idx = str.indexOf(" (");
    return idx > -1 ? (
      <>
        {str.slice(0, idx)}
        <br />
        {str.slice(idx)}
      </>
    ) : (
      str
    );
  };

  const tools = String(data.meta?.tools || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <ProjectDetailLayout>
      <div ref={heroScopeRef}>
        {/* ===== HERO ===== */}
        <section
          className="pd-hero reveal"
          aria-label="BehavAI case study hero"
        >
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

          {/* Techstars award badge (replaces NDA pill) */}
          <div className="pd-hero__award nda-banner">
  <img
    src="/assets/techstars.png" // your darker logo
    alt="Techstars Startup Weekend award"
    className="pd-hero__award-logo nda-icon"
  />
  <span className="pd-hero__award-text nda-text">
    🥇 1st Place Techstars Startup Weekend 2025
  </span>
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
            {/* CEO stays inline */}
            <div className="pd-meta__text">{data.meta?.role}</div>
          </div>

          <div className="pd-meta__item reveal">
            <div className="pd-meta__heading">Team</div>
            <div className="pd-meta__text">{splitTeam(data.meta?.team)}</div>
          </div>

          <div className="pd-meta__item reveal">
            <div className="pd-meta__heading">Timeline</div>
            <div className="pd-meta__text">
              {splitTimeline(data.meta?.timeline)}
            </div>
          </div>

          <div className="pd-meta__item reveal">
            <div className="pd-meta__heading">Tools</div>
            <ul className="pd-tools">
              {tools.map((tool) => (
                <li className="pd-tool" key={tool}>
                  <img
                    className="pd-tool__icon"
                    src={iconMap[tool] || iconMap.Figma}
                    alt={tool}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* ===== CASE STUDY CONTENT ===== */}
      <BehavaiKickoff />
      <BehavaiAboutABA />  {/* NEW: How We Learned About ABA */}
      <BehavaiProblemSpace />
      <BehavaiSolutionPreview />
      <BehavaiResearchDiscovery />
      {/* <BehavaiDesignChallenge /> */}
      <BehavaiFinalSolution />
      <BehavaiImpactAndBeyond />

      {/* Temporary while you build the rest of the sections */}
      <NextProjectTeaser currentSlug="behavai" nextSlug="aquatonomy" />
    </ProjectDetailLayout>
  );
}