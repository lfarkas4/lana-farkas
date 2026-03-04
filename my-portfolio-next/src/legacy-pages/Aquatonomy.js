// src/pages/Aquatonomy.js
import React from "react";

import ProjectDetailLayout from "../components/ProjectDetailLayout";
import OverviewSection from "../components/OverviewSection";
import NDABanner from "../components/NDABanner";
import ProblemSpace from "../components/ProblemSpace";
import NextProjectTeaser from "../components/NextProjectTeaser";
import ScrollProgressBar from "../components/ScrollProgressBar";
import { caseStudies } from "../data/ProjectsData";
import SolutionImpact from "../components/SolutionImpact";
import ResearchDiscovery from "../components/ResearchDiscovery";
import DeliveredReflection from "../components/DeliveredReflection";
import useReveal from "../utils/useReveal";
import useIsMobile from "../utils/useIsMobile";

const iconMap = {
  Figma: "/assets/figma.svg",
  Notion: "/assets/notion.svg",
  Miro: "/assets/miro.svg",
};

export default function Aquatonomy() {
  const data = caseStudies.find((p) => p.slug === "aquatonomy");
  const revealRef = useReveal();
  const isMobile = useIsMobile();

  if (!data) return null;

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

  const heroVideoSrc = isMobile && data.videoMobile ? data.videoMobile : data.video;

  return (
    <ProjectDetailLayout>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* attach revealRef so .reveal / .reveal-block can animate */}
      <div ref={revealRef}>
        {/* ===== HERO ===== */}
        <section className="pd-hero reveal">
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

          <NDABanner />

          <h1 className="pd-hero__title">{data.title}</h1>
          <p className="pd-hero__subtitle">{data.description}</p>

          <div className="pd-hero__media">
            {data.video ? (
              <video src={heroVideoSrc} autoPlay muted loop playsInline />
            ) : (
              data.image && <img src={data.image} alt={data.title} />
            )}
          </div>
        </section>

        {/* ===== META ===== */}
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
                    src={iconMap[tool]}
                    alt={tool}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== CASE STUDY CONTENT ===== */}
        <OverviewSection
          videoSrc={isMobile ? "/assets/aqua-mobile.mp4" : "/assets/aqua.mp4"}
        />

        <ProblemSpace />
        <SolutionImpact />
        <ResearchDiscovery />
        <DeliveredReflection />

        <NextProjectTeaser currentSlug="aquatonomy" nextSlug="hira" />
      </div>
    </ProjectDetailLayout>
  );
}