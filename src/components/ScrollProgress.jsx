// src/components/ScrollProgress.jsx
import React, { useState, useEffect, useRef } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const calculateProgress = () => {
      // Find the hero section and footer/next project teaser
      const hero = document.querySelector('.pd-hero');
      const meta = document.querySelector('.pd-meta');
      const footer = document.querySelector('.next-project-teaser');
      
      if (!hero || !meta) return;

      // Get scroll position from document.body (not window)
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const scrollContainer = document.body;
      
      // Get the boundaries for when to show the progress bar
      const heroBottom = hero.getBoundingClientRect().bottom + scrollTop;
      const metaBottom = meta.getBoundingClientRect().bottom + scrollTop;
      const startPoint = Math.max(heroBottom, metaBottom);
      
      const footerTop = footer 
        ? footer.getBoundingClientRect().top + scrollTop 
        : scrollContainer.scrollHeight;

      const viewportHeight = window.innerHeight;
      const scrollHeight = footerTop - startPoint;
      const scrolled = scrollTop - startPoint;

      // Show progress bar only when past hero/meta and before footer
      if (scrollTop > startPoint && scrollTop < footerTop - viewportHeight) {
        setIsVisible(true);
        const progressPercentage = Math.min(Math.max((scrolled / scrollHeight) * 100, 0), 100);
        setProgress(progressPercentage);
      } else if (scrollTop <= startPoint) {
        setIsVisible(false);
        setProgress(0);
      } else {
        setIsVisible(true);
        setProgress(100);
      }
    };

    // Initial calculation
    calculateProgress();

    // Listen to scroll on BOTH document.body AND window (for compatibility)
    const handleScroll = () => {
      calculateProgress();
    };

    document.body.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateProgress);

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateProgress);
    };
  }, []);

  return (
    <div 
      ref={progressRef}
      className={`scroll-progress ${isVisible ? 'scroll-progress--visible' : ''}`}
      aria-hidden="true"
    >
      <div className="scroll-progress__track">
        <div 
          className="scroll-progress__fill"
          style={{ height: `${progress}%` }}
        />
      </div>
    </div>
  );
}