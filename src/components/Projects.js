import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.scss";
import { caseStudies, miniProjects } from "../data/ProjectsData";
import useScrollAnimation from "../utils/useScrollAnimation";

/**
 * Fade-in image once it finishes decoding.
 * (Prevents pop-in/jank when the card animates but image decode lags.)
 */
const FadeInImage = ({
  src,
  alt,
  className,
  loading = "lazy",
  fetchPriority = "auto",
  fadeOnLoad = true,
}) => {
  const [loaded, setLoaded] = useState(!fadeOnLoad);

  useEffect(() => {
    if (!fadeOnLoad) return;

    let canceled = false;
    const img = new Image();
    img.src = src;

    const done = () => {
      if (!canceled) setLoaded(true);
    };

    // decode() ensures it's ready to paint (best anti-jank)
    if (img.decode) {
      img.decode().then(done).catch(done);
    } else {
      img.onload = done;
      img.onerror = done;
    }

    return () => {
      canceled = true;
    };
  }, [src, fadeOnLoad]);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${loaded ? "is-loaded" : ""}`}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      onLoad={() => {
        // fallback: if fadeOnLoad=false we still mark loaded
        if (!fadeOnLoad) setLoaded(true);
      }}
      onError={() => setLoaded(true)}
    />
  );
};

/**
 * Case studies only: lazy-load MP4 when near viewport.
 * Poster shows immediately (so the card feels “ready”).
 */
const LazyThumbVideo = ({ mp4, poster, className }) => {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // Fallback: load immediately
    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px", threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
      controls={false}
      disablePictureInPicture
      controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
    >
      {shouldLoad && mp4 ? <source src={mp4} type="video/mp4" /> : null}
    </video>
  );
};

const Projects = () => {
  const [caseStudiesRef, caseStudiesVisible] = useScrollAnimation({ threshold: 0.1 });
  const [miniProjectsRef, miniProjectsVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="projects-section" id="work">
      <div className="projects-wrapper">
        {/* Case Studies Section */}
        <div
          ref={caseStudiesRef}
          className={`case-studies-section ${caseStudiesVisible ? "is-visible" : ""}`}
        >
          <h3 className="section-title animate-section-title">
            <img src="/assets/spark.svg" alt="Arrow" className="section-arrow" />
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
                      <LazyThumbVideo
                        mp4={project.video}
                        poster={project.poster}
                        className="thumbnail-media"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="thumbnail-media"
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    )}
                  </div>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
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
        </div>

        {/* Mini Projects Section */}
        <div
          ref={miniProjectsRef}
          className={`mini-projects-section ${miniProjectsVisible ? "is-visible" : ""}`}
        >
          <h3 className="section-title animate-section-title">
            <img src="/assets/spark.svg" alt="Arrow" className="section-arrow" />
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
                    <FadeInImage
                      src={mini.image}
                      alt={mini.title}
                      className="thumbnail-media mini-thumb"
                      loading="lazy"
                      fetchPriority="low"
                      fadeOnLoad={true}
                    />
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
