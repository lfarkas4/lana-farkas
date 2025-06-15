import React, { useEffect, useRef } from "react";
import "../styles/CustomCursor.css";

const CustomCursor = () => {
  const labelRef = useRef(null);

  useEffect(() => {
    const label = labelRef.current;

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const target = e.target.closest(".project-thumbnail, .hover-label");

      if (label) {
        if (target) {
          const labelText = target.getAttribute("data-label") || "view project ✧˖°.";
          label.innerText = labelText;
          label.style.display = "block";
          label.style.left = `${mouseX + 12}px`;
          label.style.top = `${mouseY + 10}px`;
        } else {
          label.style.display = "none";
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="cursor-label" ref={labelRef}></div>;
};

export default CustomCursor;
