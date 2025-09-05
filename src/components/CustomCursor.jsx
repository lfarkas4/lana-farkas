import React, { useEffect, useRef } from "react";
import "../styles/CustomCursor.scss";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Initialize
    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    cursorPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Animation loop (smooth follow)
    const animate = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;
      cursor.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      requestAnimationFrame(animate);
    };

    const checkHover = () => {
      const el = document.elementFromPoint(mousePos.current.x, mousePos.current.y);
      const isOverThumbnail = el?.closest(".project-thumbnail");
      const cursorImg = cursor.querySelector("img");

      if (isOverThumbnail && !cursor.classList.contains("hover")) {
        cursor.classList.add("hover");
        if (cursorImg) cursorImg.src = "/assets/eye.svg";
      } else if (!isOverThumbnail && cursor.classList.contains("hover")) {
        cursor.classList.remove("hover");
        if (cursorImg) cursorImg.src = "/assets/curse.svg";
      }
    };

    // Move + show
    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      cursor.style.opacity = "1";
      checkHover();
    };

    // Scroll-based hover checks
    let scrollTimer = null;
    const handleScroll = () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      checkHover();
      scrollTimer = setTimeout(() => {
        checkHover();
        scrollTimer = null;
      }, 50);
    };

    const handleMouseEnter = () => (cursor.style.opacity = "1");
    const handleMouseLeave = () => (cursor.style.opacity = "0");

    // --- CLICK PULSE (default + hover “view” state) ---
    const handleMouseDown = () => {
      // Always pulse; SCSS decides which animation to run
      cursor.classList.add("click");
    };

    const handleMouseUp = () => {
      // Let the animation play; remove shortly after (match ~240–260ms in CSS)
      setTimeout(() => cursor.classList.remove("click"), 260);
    };

    // Extra safety: remove .click when any click animation ends on the img
    const img = cursor.querySelector("img");
    const handleAnimationEnd = (e) => {
      // Any of the click animations (default or hover) will include "click" in their names
      if (e.animationName && e.animationName.includes("click")) {
        cursor.classList.remove("click");
      }
    };
    if (img) img.addEventListener("animationend", handleAnimationEnd);

    // Start + listeners
    animate();
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Cleanup
    return () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);

      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      if (img) img.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      <img src="/assets/curse.svg" alt="Cursor Icon" />
    </div>
  );
};

export default CustomCursor;
