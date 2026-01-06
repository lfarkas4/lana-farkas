// src/components/ScrollToTopButton.jsx
import React from "react";
import { FiArrowUp } from "react-icons/fi";

const RING_TEXT = "SCROLL TO TOP ✦ SCROLL TO TOP ✦";

const ScrollToTopButton = ({ style, className = "" }) => {
  const handleClick = () => {
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      className={`np-scrolltop np-scrolltop--disc ${className}`.trim()}
      aria-label="Scroll to top"
      onClick={handleClick}
      style={style}
    >
      {/* Rotating ring text */}
      <svg
        className="np-scrolltop__ring"
        viewBox="0 0 200 200"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <path
            id="np-scrolltop-path"
            d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
          />
        </defs>

        <text className="np-scrolltop__text">
          <textPath
            href="#np-scrolltop-path"
            startOffset="50%"
            textAnchor="middle"
          >
            {RING_TEXT}
          </textPath>
        </text>
      </svg>

      {/* Center arrow */}
      <span className="np-scrolltop__center" aria-hidden="true">
        <FiArrowUp className="np-scrolltop__arrow" />
      </span>
    </button>
  );
};

export default ScrollToTopButton;