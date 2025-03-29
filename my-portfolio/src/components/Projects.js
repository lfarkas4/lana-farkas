import React from "react";
import "../styles/Projects.css";

const caseStudies = [
  {
    title: "capstone project",
    tags: ["UX / UI", "Prototyping", "Innovation"],
    description:
      "Designed a user-centered solution to address a real-world problem, from research to prototyping and testing",
  },
  {
    title: "capstone project",
    tags: ["UX / UI", "Prototyping", "Innovation"],
    description:
      "Designed a user-centered solution to address a real-world problem, from research to prototyping and testing",
  },
  {
    title: "capstone project",
    tags: ["UX / UI", "Prototyping", "Innovation"],
    description:
      "Designed a user-centered solution to address a real-world problem, from research to prototyping and testing",
  },
  {
    title: "capstone project",
    tags: ["UX / UI", "Prototyping", "Innovation"],
    description:
      "Designed a user-centered solution to address a real-world problem, from research to prototyping and testing",
  },
];

const miniProjects = [
  {
    title: "mini project 1",
    description:
      "Developed branding and merchandise for CMU D5C Poker AI Competition.",
  },
  {
    title: "mini project 2",
    description:
      "Developed physical prototype of model maker for class project.",
  },
  {
    title: "mini project 3",
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
        <img src="/assets/arrowyuh.svg" alt="Arrow" className="section-arrow" />
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
              <h4 className="project-title">
              {project.title}
              {index === 3 && (
              <img
              src="/assets/lock.svg"
              alt="Locked"
              className="project-lock-icon"
              />
              )}
              </h4>
              <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Projects */}
        <h3 className="section-title">
        <img src="/assets/arrowyuh.svg" alt="Arrow" className="section-arrow" />
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
