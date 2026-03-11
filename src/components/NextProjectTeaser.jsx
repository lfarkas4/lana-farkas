// src/components/NextProjectTeaser.jsx
import React from "react";
import Link from "next/link";
import { caseStudies, miniProjects } from "../data/ProjectsData";
import ScrollToTopButton from "./ScrollToTopButton";

const NextProjectTeaser = ({ currentSlug, nextSlug }) => {
  const allProjects = [...caseStudies, ...miniProjects];
  const next = allProjects.find((p) => p.slug === nextSlug);

  if (!next) return null;

  return (
    <section className="next-project-section" id="next-project">
      <div className="np-wrap">
        {/* 
          ✅ Positioned closer to RIGHT edge of screen
          Using fixed offset from right edge instead of page gutters
        */}
        <ScrollToTopButton 
          style={{ 
            position: 'absolute',
            top: '-10px',
            right: '50px',  // Fixed distance from right edge
            left: 'auto'
          }} 
          className="np-scrolltop-positioned"
        />

        <div className="np-head">
          <h3 className="section-title1">
            Explore more work<span className="cooper-symbols">⟢</span>
          </h3>
        </div>

        <Link href={next.link} className="np-card project-card-link">
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
                {next.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
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