// src/pages/Moonranger.js
import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import ComingSoonBanner from "../components/ComingSoonBanner";
import NextProjectTeaser from "../components/NextProjectTeaser";
import { miniProjects } from "../data/ProjectsData";

const iconMap = {
  Figma: "/assets/figma.svg",
  Notion: "/assets/notion.svg",
  Miro: "/assets/miro.svg",
};

export default function Moonranger() {
  const data = miniProjects.find((p) => p.slug === "moonranger");
  if (!data) return null;

  // Default meta for mini projects
  const defaultMeta = {
    role: "Product Design & Research",
    team: "6 collaborators — Design, Research, Strategy",
    timeline: "Aug – Dec 2024 (14 weeks)",
    tools: "Figma, Notion, Miro",
  };

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

  const tools = String(defaultMeta.tools)
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <ProjectDetailLayout>
      {/* Hero Section */}
      <section className="pd-hero">
        <div className="pd-hero__eyebrow"></div>

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

      {/* Meta Section */}
      <section className="pd-meta">
        <div className="pd-meta__item">
          <div className="pd-meta__heading">My Role</div>
          <div className="pd-meta__text">{defaultMeta.role}</div>
        </div>

        <div className="pd-meta__item">
          <div className="pd-meta__heading">Team</div>
          <div className="pd-meta__text">{splitTeam(defaultMeta.team)}</div>
        </div>

        <div className="pd-meta__item">
          <div className="pd-meta__heading">Timeline</div>
          <div className="pd-meta__text">{splitTimeline(defaultMeta.timeline)}</div>
        </div>

        <div className="pd-meta__item">
          <div className="pd-meta__heading">Tools</div>
          <ul className="pd-tools">
            {tools.map((tool) => (
              <li className="pd-tool" key={tool}>
                <img className="pd-tool__icon" src={iconMap[tool]} alt={tool} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ComingSoonBanner />
      <NextProjectTeaser currentSlug="moonranger" nextSlug="taptap" />
    </ProjectDetailLayout>
  );
}