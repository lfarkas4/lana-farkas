import React from "react";
import BackButton from "./BackButton";
import Footer from "./Footer";
import "../styles/ProjectDetail.scss"; // you'll create this next

const ProjectDetailLayout = ({ children }) => {
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
