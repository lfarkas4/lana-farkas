import React, { useEffect, useRef } from "react";
import "../styles/CustomCursor.scss";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const position = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const targetPosition = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const visible = useRef(true);

  const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

  const updateCursor = () => {
    if (!cursorRef.current) return;

    position.current.x = lerp(position.current.x, targetPosition.current.x, 0.15);
    position.current.y = lerp(position.current.y, targetPosition.current.y, 0.15);

    cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
    cursorRef.current.style.opacity = visible.current ? "1" : "0";

    requestAnimationFrame(updateCursor);
  };

  useEffect(() => {
    const moveCursor = (e) => {
      targetPosition.current.x = e.clientX;
      targetPosition.current.y = e.clientY;
      visible.current = true;
    };

    const hideCursor = () => {
      visible.current = false;
    };

    const showCursor = () => {
      visible.current = true;
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", showCursor);
    document.addEventListener("mouseleave", hideCursor);

    updateCursor();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", showCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      <img src="/assets/curse.svg" alt="Cursor Icon" />
    </div>
  );
};

export default CustomCursor;
