import React, { useEffect } from "react";
import BackButton from "./BackButton";
import Footer from "./Footer";
import { useResetScroll } from "../utils/useResetScroll";   // ← add

const ProjectDetailLayout = ({ children }) => {
  useResetScroll();  // ← run it here for all project pages

  useEffect(() => {
    document.body.classList.add("no-animated-bg");
    // Global.scss: html:not(.cursor-native) * { cursor: none !important }
    // Without this class on <html>, ALL cursors are hidden including the pointer hand.
    document.documentElement.classList.add("cursor-native");
    return () => {
      document.body.classList.remove("no-animated-bg");
      document.documentElement.classList.remove("cursor-native");
    };
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