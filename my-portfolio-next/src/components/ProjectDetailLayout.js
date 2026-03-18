import React, { useEffect } from "react";
import BackButton from "./BackButton";
import Footer from "./Footer";
import { useResetScroll } from "../utils/useResetScroll";

const ProjectDetailLayout = ({ children }) => {
  useResetScroll();

  useEffect(() => {
    document.body.classList.add("no-animated-bg");

    return () => {
      document.body.classList.remove("no-animated-bg");
    };
  }, []);

  return (
    <div className="project-detail-page">
      <BackButton />
      <main className="project-detail-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailLayout;