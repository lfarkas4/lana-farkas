// src/components/ScrollProgressBar.jsx
import React, { useState, useEffect } from "react";
import "../styles/ScrollProgressBar.scss";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      // Use document.body since that's your scroll container (matching useResetScroll)
      const scrollTop = document.body.scrollTop;
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = document.body.clientHeight;
      
      // Calculate how much of the page can be scrolled
      const trackLength = scrollHeight - clientHeight;
      
      // Calculate progress percentage
      let progress = trackLength > 0 ? (scrollTop / trackLength) * 100 : 0;
      
      // Show bar only when NOT at the very top AND NOT at the very bottom
      // Hide when at top (scrollTop === 0) OR at bottom (progress >= 99.5)
      const atTop = scrollTop <= 2;
      const atBottom = progress >= 99;
      setIsVisible(!atTop && !atBottom);
      
      // Add a small amount when near 100% to account for rounded end
      if (progress > 98) {
        progress = Math.min(100.5, progress + 0.5);
      }
      
      // Ensure progress is between 0 and 100.5
      setScrollProgress(Math.min(100.5, Math.max(0, progress)));
    };

    // Initial calculation
    updateScrollProgress();

    // Smooth scroll handler without throttling for 60fps updates
    const scrollHandler = () => {
      requestAnimationFrame(updateScrollProgress);
    };

    // Listen to scroll events on document.body (matching your app's scroll container)
    document.body.addEventListener("scroll", scrollHandler, { passive: true });
    
    // Also update on resize
    window.addEventListener("resize", updateScrollProgress, { passive: true });
    
    // Cleanup
    return () => {
      document.body.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <div className={`scroll-progress-container ${isVisible ? 'scroll-progress-container--visible' : ''}`}>
      <div 
        className="scroll-progress-bar"
        style={{ 
          width: `${scrollProgress}%`,
          opacity: scrollProgress > 0 ? 1 : 0
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;