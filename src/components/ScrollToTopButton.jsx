import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      type="button"
      className="np-scrolltop" 
      aria-label="Scroll to top"
      onClick={handleClick}
    >
      <span className="np-scrolltop__label">scroll to top</span>
      <FiArrowUpRight className="np-scrolltop__arrow" />
    </button>
  );
};

export default ScrollToTopButton;