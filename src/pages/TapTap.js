// src/pages/TapTap.js
import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import NextProjectTeaser from "../components/NextProjectTeaser";
import UnderConstructionPage from "../components/UnderConstructionPage"; // NEW
import TapTapAssignment from "../components/TapTapAssignment";
import TapTapIdea from "../components/TapTapIdea";
import TapTapRealityCheck from "../components/TapTapRealityCheck";
import TapTapChangeOfPlans from "../components/TapTapChangeOfPlans";
import TapTapBlueprint from "../components/TapTapBlueprint";
import TapTapBuildIt from "../components/TapTapBuildIt";
import ScrollProgressBar from "../components/ScrollProgressBar";
import { miniProjects } from "../data/ProjectsData";
import useReveal from "../utils/useReveal";
import "../styles/TapTap.scss";
import TapTapFinalProduct from "../components/TapTapFinalProduct";
import TapTapProductDemo from "../components/TapTapProductDemo";
import TapTapWhatILearned from "../components/TapTapWhatILearned";

const iconMap = {
  Arduino: "/assets/arduino.png",
  Fusion: "/assets/fusion.png",
};

// ═══════════════════════════════════════════════════════════════
// Toggle this to switch between the placeholder and full mini-case
// Set to `false` when you're ready to show the actual content
// ═══════════════════════════════════════════════════════════════
const SHOW_UNDER_CONSTRUCTION = false;

export default function TapTap() {
  const data = miniProjects.find((p) => p.slug === "taptap");

  // scroll-reveal scope for hero + meta — same pattern as Hira / BehavAI
  const heroScopeRef = useReveal();

  if (!data) return null;

  // ════════════════════════════════════════════════════════════
  // OPTION 1: Show the Under Construction page with mini-game
  // ════════════════════════════════════════════════════════════
  if (SHOW_UNDER_CONSTRUCTION) {
    return <UnderConstructionPage projectName="TapTap" />;
  }

  // ════════════════════════════════════════════════════════════
  // OPTION 2: Show the full mini-project detail view
  // (preserves your existing structure + meta wiring)
  // ════════════════════════════════════════════════════════════

  const splitTeam = (txt) => {
    const parts = String(txt || "").split(" — ");
    return parts.length > 1 ? (
      <>
        {parts[0]}:
        <br />
        {parts.slice(1).join(" — ")}
      </>
    ) : (
      txt
    );
  };

  const splitTimeline = (txt) => {
    const str = String(txt || "");
    const idx = str.indexOf(" (");
    return idx > -1 ? (
      <>
        {str.slice(0, idx)}
        <br />
        {str.slice(idx)}
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
        {/* Hero Section */}
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
                  <img className="pd-tool__icon" src={iconMap[tool]} alt={tool} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* ===== CASE STUDY CONTENT ===== */}
      <TapTapAssignment />
      <TapTapIdea />
      <TapTapRealityCheck />
      <TapTapChangeOfPlans />
      <TapTapBlueprint />
      <TapTapBuildIt />
      <TapTapFinalProduct />
      <TapTapProductDemo />
      <TapTapWhatILearned />

      {/* Future sections will go here */}

      <NextProjectTeaser currentSlug="taptap" nextSlug="lightthemuse" />
    </ProjectDetailLayout>
  );
}