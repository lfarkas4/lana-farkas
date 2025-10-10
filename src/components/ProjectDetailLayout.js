import React, { useEffect } from "react";
import BackButton from "./BackButton";
import Footer from "./Footer";
import { useResetScroll } from "../utils/useResetScroll";   // ← add
import "../styles/ProjectDetail.scss";

const ProjectDetailLayout = ({ children }) => {
  useResetScroll();  // ← run it here for all project pages

  useEffect(() => {
    document.body.classList.add("no-animated-bg");
    return () => document.body.classList.remove("no-animated-bg");
  }, []);
  return (
    <div className="project-detail-page">
      <BackButton />
      <main className="project-detail-content">
        {/* anchor for “scroll to top” links */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailLayout;
