// src/pages/LightTheMuse.js
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

export default function LightTheMuse() {
  const data = miniProjects.find((p) => p.slug === "lightthemuse");
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

  return (
    <ProjectDetailLayout>
      {/* Hero Section */}
      <section className="pd-hero">
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

      {/* Meta Section */}
      <section className="pd-meta">
        <div className="pd-meta__item">
          <div className="pd-meta__heading">My Role</div>
          <div className="pd-meta__text">{data.meta?.role}</div>
        </div>

        <div className="pd-meta__item">
          <div className="pd-meta__heading">Team</div>
          <div className="pd-meta__text">{splitTeam(data.meta?.team)}</div>
        </div>

        <div className="pd-meta__item">
          <div className="pd-meta__heading">Timeline</div>
          <div className="pd-meta__text">{splitTimeline(data.meta?.timeline)}</div>
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
      <NextProjectTeaser currentSlug="lightthemuse" nextSlug="moonranger" />
    </ProjectDetailLayout>
  );
}