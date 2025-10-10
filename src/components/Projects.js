// src/pages/Projects.js
import { Link } from "react-router-dom";
import "../styles/Projects.scss";
import { caseStudies, miniProjects } from "../data/ProjectsData";
import useScrollAnimation from "../utils/useScrollAnimation";

const Projects = () => {
  const [caseStudiesRef, caseStudiesVisible] = useScrollAnimation({ threshold: 0.1 });
  const [miniProjectsRef, miniProjectsVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="projects-section" id="work">
      <div className="projects-wrapper">
        {/* Case Studies Section */}
        <div ref={caseStudiesRef} className={`case-studies-section ${caseStudiesVisible ? 'is-visible' : ''}`}>
          <h3 className="section-title animate-section-title">
            <img src="/assets/arrowyuh.svg" alt="Arrow" className="section-arrow" />
            case studies
          </h3>

          <div className="projects-container">
            {caseStudies.map((project, index) => (
              <Link 
                to={project.link} 
                className="project-card-link animate-project-card" 
                key={project.slug}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
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
                        controls={false}
                        disablePictureInPicture
                        controlsList="nodownload noplaybackrate"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="thumbnail-media"
                      />
                    )}
                  </div>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
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
        </div>

        {/* Mini Projects Section */}
        <div ref={miniProjectsRef} className={`mini-projects-section ${miniProjectsVisible ? 'is-visible' : ''}`}>
          <h3 className="section-title animate-section-title">
            <img src="/assets/arrowyuh.svg" alt="Arrow" className="section-arrow" />
            mini projects
          </h3>

          <div className="mini-projects-container">
            {miniProjects.map((mini, index) => (
              <Link 
                to={mini.link} 
                className="project-card-link animate-project-card" 
                key={mini.slug}
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
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
                        controls={false}
                        disablePictureInPicture
                        controlsList="nodownload noplaybackrate"
                      />
                    ) : (
                      <img
                        src={mini.image}
                        alt={mini.title}
                        className="thumbnail-media"
                      />
                    )}
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
      </div>
    </section>
  );
};

export default Projects;