// src/pages/BehavAI.js
import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import ComingSoonBanner from "../components/ComingSoonBanner";
import NextProjectTeaser from "../components/NextProjectTeaser";
import { caseStudies } from "../data/ProjectsData";
import useReveal from "../utils/useReveal";

const iconMap = {
  Figma: "/assets/figma.svg",
  GitHub: "/assets/github.svg",
  React: "/assets/react.svg",
};

export default function BehavAI() {
  const data = caseStudies.find((p) => p.slug === "behavai");

  // Hooks always before any early return
  const revealRef = useReveal();

  if (!data) return null;

  // Only add a line break before "clinical advisors"
  const splitTeam = (txt) => {
    if (!txt) return null;
    const str = String(txt);

    // General “ + …” split (gives you `2 co-founders +` / `clinical advisors`)
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

    // Fallback: no special formatting
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
      <div ref={revealRef}>
        {/* ===== HERO ===== */}
        <section className="pd-hero reveal" aria-label="BehavAI case study hero">
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
          <div className="pd-hero__award">
            <img
              src="/assets/tech-light.png"
              alt="Techstars"
              className="pd-hero__award-logo"
            />
            <span className="pd-hero__award-text">
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
            {/* CEO stays inline here */}
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

        {/* Placeholder until we build the BehavAI sections */}
        <ComingSoonBanner />
        <NextProjectTeaser currentSlug="behavai" nextSlug="aquatonomy" />
      </div>
    </ProjectDetailLayout>
  );
}
