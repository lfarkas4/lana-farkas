// src/components/NextProjectTeaser.jsx
import React from "react";
import { Link } from "react-router-dom";
import { caseStudies, miniProjects } from "../data/ProjectsData";
import { FiArrowUpRight } from "react-icons/fi";
import "../styles/ProjectDetail.scss";

const NextProjectTeaser = ({ currentSlug, nextSlug }) => {
  // Combine all projects
  const allProjects = [...caseStudies, ...miniProjects];
  
  // Find next project by slug
  const next = allProjects.find(p => p.slug === nextSlug);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  if (!next) return null;

  return (
    <section className="next-project-section" id="next-project">
      <div className="np-wrap">
        <div className="np-head">
          <h3 className="section-title1">
          Explore more work <span className="cooper-symbols">⟢</span>
          </h3>
          <button 
            type="button"
            className="np-scrolltop" 
            aria-label="Scroll to top"
            onClick={handleScrollToTop}
            style={{ pointerEvents: 'auto' }}
          >
            <span className="np-scrolltop__label">scroll to top</span>
            <FiArrowUpRight className="np-scrolltop__arrow" />
          </button>
        </div>

        <Link to={next.link} className="np-card project-card-link">
          <div className="np-thumb project-thumbnail">
            {next.video ? (
              <video
                src={next.video}
                className="thumbnail-media"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={next.image}
                alt={`${next.title} thumbnail`}
                className="thumbnail-media"
              />
            )}
          </div>

          <div className="np-content">
            {next.tags && (
              <div className="np-tags project-tags">
                {next.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            )}

            <h4 className="np-title project-title">{next.title}</h4>
            <p className="np-desc project-description">{next.description}</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default NextProjectTeaser;