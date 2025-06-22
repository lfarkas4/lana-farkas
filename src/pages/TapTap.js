import React from "react";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import { useResetScroll } from "../utils/useResetScroll";

const SomeProject = () => {
  useResetScroll();
  return (
    <ProjectDetailLayout>
      <h1>BehavAI: Smarter Support for ABA Therapy</h1>
      <p>
        Co-founded an AI-powered platform to streamline and visualize behavioral data in ABA therapy.
      </p>
      <video src="/assets/dribbleshot.mp4" autoPlay loop muted playsInline style={{ width: "100%", borderRadius: "12px", margin: "30px 0" }} />
      {/* Add more custom sections here */}
    </ProjectDetailLayout>
  );
};

export default SomeProject;
