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
        if (!fadeOnLoad) setLoaded(true);
      }}
      onError={() => setLoaded(true)}
    />
  );
};

/**
 * Case studies only: lazy-load MP4 when near viewport.
 * Poster shows immediately (so the card feels “ready”).
 * Also: play/pause based on visibility to save CPU/GPU.
 */
const LazyThumbVideo = ({ mp4, poster, className, priority = false }) => {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [isVisible, setIsVisible] = useState(priority);

  // Preload poster for priority cards (first 1–2 feel instant)
  useEffect(() => {
    if (!priority || !poster) return;
    const img = new Image();
    img.src = poster;
  }, [priority, poster]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        const vis = entry.isIntersecting;
        setIsVisible(vis);
        if (vis) setShouldLoad(true);
      },
      { rootMargin: "250px", threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isVisible) {
      const p = el.play?.();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } else {
      el.pause?.();
    }
  }, [isVisible]);

  return (
    <video
      ref={videoRef}
      className={className}
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
            {caseStudies.map((project, index) => {
              const isPriority = index < 2; // top case studies

              return (
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
                          priority={isPriority}
                        />
                      ) : (
                        <FadeInImage
                          src={project.image}
                          alt={project.title}
                          className="thumbnail-media thumb-fade"
                          loading={isPriority ? "eager" : "lazy"}
                          fetchPriority={isPriority ? "high" : "auto"}
                          fadeOnLoad={true}
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
              );
            })}
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