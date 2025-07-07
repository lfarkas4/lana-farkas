import React from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.scss";

const caseStudies = [
  {
    title: "BehavAI: Smarter Support for ABA Therapy",
    tags: ["Artificial Intelligence", "Data Visualization"],
    description:
      "Co-founded an AI-powered platform to streamline and visualize behavioral data in applied behavior analysis therapy.",
    video: "/assets/dribbleshot.mp4",
    link: "/case-studies/behavai",
  },
  {
    title: "Underwater Intelligence with Aquatonomy",
    tags: ["Human-Robot Interaction", "Autonomous Systems"],
    description:
      "Designed key interactions and overall service for an autonomous underwater inspection system.",
    video: "/assets/aquamock1.mp4",
    link: "/case-studies/aquatonomy",
  },
  {
    title: "Thought Bubble: Guiding Cancer Care",
    tags: ["Healthcare", "Wearables", "Patient Experience"],
    description:
      "Conceptualized a wearable experience to support patients through cancer care at UPMC Magee-Womens Hospital.",
    image: "/assets/watchmock.svg",
    link: "/case-studies/hira",
  },
  {
    title: "Dynamic Learning with Stackbuilder",
    tags: ["Educational Tech", "Personalized Learning"],
    description:
      "Explored new learning models that empower students to shape their own educational journeys.",
    video: "/assets/bub.mp4",
    link: "/case-studies/stackbuilder",
  },
];

const miniProjects = [
  {
    title: "Moonranger x NASA",
    description:
      "Refined mission interface for lunar rover in collaboration with NASA and CMU.",
    image: "/assets/moonthumb.png",
    link: "/case-studies/moonranger",
  },
  {
    title: "Tap-Tap Revolution",
    description:
      "Developed interactive game prototype using Arduino and digital fabrication tools.",
    image: "/assets/taptap.png",
    link: "/case-studies/taptap",
  },
  {
    title: "Light the Muse",
    description:
      "Conceptualized mobile app to counter addictive technology through creative expression.",
    video: "/assets/whatsapp3.mp4",
    link: "/case-studies/lightthemuse",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="work">
      <div className="projects-wrapper">
        <h3 className="section-title">
          <img src="/assets/arrowyuh.svg" alt="Arrow" className="section-arrow" />
          case studies
        </h3>
        <div className="projects-container">
          {caseStudies.map((project, index) => (
            <Link to={project.link} className="project-card-link" key={index}>
              <div className="project-card">
                <div className="project-thumbnail">
                  {project.video ? (
                    <video
                      src={project.video}
                      className="thumbnail-media"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="thumbnail-media"
                    />
                  )}
                  <div className="thumbnail-overlay" />
                </div>
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
            </Link>
          ))}
        </div>

        <h3 className="section-title">
          <img src="/assets/arrowyuh.svg" alt="Arrow" className="section-arrow" />
          mini projects
        </h3>
        <div className="mini-projects-container">
          {miniProjects.map((mini, index) => (
            <Link to={mini.link} className="project-card-link" key={index}>
              <div className="project-card mini-project-card">
                <div className="project-thumbnail">
                  {mini.video ? (
                    <video
                      src={mini.video}
                      className="thumbnail-media"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={mini.image}
                      alt={mini.title}
                      className="thumbnail-media"
                    />
                  )}
                  <div className="thumbnail-overlay" />
                </div>
                <div className="mini-content">
                  <h4 className="mini-title">{mini.title}</h4>
                  <p className="mini-description">{mini.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
