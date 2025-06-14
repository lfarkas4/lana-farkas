import React, { useEffect, useRef } from "react";
import "../styles/CustomCursor.css";

const CustomCursor = () => {
  const containerRef = useRef(null);
  // const dotRef = useRef(null); // Commented out
  const labelRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    // const dot = dotRef.current;
    const label = labelRef.current;

    let mouseX = 0,
      mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const isProject = e.target.closest(".project-thumbnail");

      if (label) {
        if (isProject) {
          label.style.display = "block";
          label.style.left = `${mouseX + 12}px`;
          label.style.top = `${mouseY + 10}px`;
        } else {
          label.style.display = "none";
        }
      }

      if (container) {
        container.style.left = `${mouseX}px`;
        container.style.top = `${mouseY}px`;
      }

      // if (dot) {
      //   dot.classList.toggle("hovering", !!isClickable);
      // }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-wrapper" ref={containerRef}>
      {/* <div className="custom-cursor" ref={dotRef}></div> */}
      <div className="cursor-label" ref={labelRef}>
        view project ✧˖°.
      </div>
    </div>
  );
};

export default CustomCursor;
