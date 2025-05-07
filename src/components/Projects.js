import React from "react";
import "../styles/Projects.css";

const caseStudies = [
  {
    title: "BehavAI: Smarter Support for ABA Therapy",
    tags: ["Artificial Intelligence", "Data Visualization"],
    description:
      "Co-founded an AI-powered platform to streamline and visualize behavioral data in applied behavior analysis therapy.",
  },
  {
    title: "Underwater Intelligence with Aquatonomy",
    tags: ["Human-Robot Interaction", "Autonomous Systems"],
    description:
      "Designed key interactions and overall service for an autonomous underwater inspection system.",
  },
  {
    title: "Thought Bubble: Guiding Cancer Care",
    tags: ["Healthcare", "Wearables", "Patient Experience"],
    description:
      "Conceptualized a wearable experience to support patients through cancer care at UPMC Magee-Womens Hospital.",
  },
  {
    title: "Designing Fluid Learning with Stackbuilder",
    tags: ["Education", "Personalized Learning"],
    description:
      "Explored new learning models that empower students to shape their own educational journeys.",
  },
];

const miniProjects = [
  {
    title: "Moonranger x NASA",
    description:
      "Developed branding and merchandise for CMU D5C Poker AI Competition.",
  },
  {
    title: "Tap-Tap Revolution",
    description:
      "Developed physical prototype of model maker for class project.",
  },
  {
    title: "Light the Muse",
    description:
      "Conceptualized mobile application that serves to combat addictive technology.",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="work">
      <div className="projects-wrapper">
        {/* Case Studies */}
        <h3 className="section-title">
          <img
            src="/assets/arrowyuh.svg"
            alt="Arrow"
            className="section-arrow"
          />
          case studies
        </h3>
        <div className="projects-container">
          {caseStudies.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-thumbnail" />
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Projects */}
        <h3 className="section-title">
          <img
            src="/assets/arrowyuh.svg"
            alt="Arrow"
            className="section-arrow"
          />
          mini projects
        </h3>
        <div className="mini-projects-container">
          {miniProjects.map((mini, index) => (
            <div className="mini-project-card" key={index}>
              <div className="project-thumbnail" />
              <div className="mini-content">
                <h4 className="mini-title">{mini.title}</h4>
                <p className="mini-description">{mini.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
