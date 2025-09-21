// src/components/CustomCursor.jsx
import React, { useEffect, useRef, useState } from "react";
import "../styles/CustomCursor.scss";

export default function CustomCursor() {
  // Enable custom cursor only when a fine pointer exists (mouse/pen)
  const [enabled, setEnabled] = useState(false);

  // Always-on capability detector (works even if a mouse is plugged in later)
  useEffect(() => {
    const isTouchLike =
      (navigator.maxTouchPoints ?? 0) > 0 ||
      window.matchMedia("(hover: none), (pointer: coarse)").matches;

    setEnabled(!isTouchLike);

    const handlePointer = (e) => {
      if (e.pointerType === "mouse" || e.pointerType === "pen") setEnabled(true);
      else if (e.pointerType === "touch") setEnabled(false);
    };

    window.addEventListener("pointerdown", handlePointer, { passive: true });
    window.addEventListener("pointermove", handlePointer, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", handlePointer);
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  const cursorRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos   = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const needsHoverCheck = useRef(true); // forces checks while scrolling with idle pointer

  // Main cursor behavior (runs only when enabled)
  useEffect(() => {
    if (!enabled) return;

    const el = cursorRef.current;
    if (!el) return;

    const suppress = (on) => el.classList.toggle("suppress", !!on);

    const setHover = (on) => {
      const img = el.querySelector("img");
      if (on) {
        el.classList.add("hover");
        if (img) img.src = "/assets/eye.svg";
      } else {
        el.classList.remove("hover");
        if (img) img.src = "/assets/curse.svg";
      }
    };

    const checkHover = (target) => {
      let t = target;
      if (!t) t = document.elementFromPoint(mouse.current.x, mouse.current.y);

      // Hide custom cursor over real iframes (e.g., Spotify)
      const overIframe = !!(t && (t.tagName === "IFRAME" || t.closest("iframe")));
      suppress(overIframe);

      // Show "view" hover when over project thumbnails
      const overThumb = !!(t && t.closest(".project-thumbnail"));
      setHover(overThumb);
    };

    // Coalesced pointer events for smoother follow
    const onPointerMove = (e) => {
      const list = e.getCoalescedEvents?.() ?? [e];
      const last = list[list.length - 1];
      mouse.current.x = last.clientX;
      mouse.current.y = last.clientY;
      el.style.opacity = "1";
      needsHoverCheck.current = true;
      checkHover(e.target);
    };

    const onPointerEnter = () => (el.style.opacity = "1");
    const onPointerLeave = () => (el.style.opacity = "0");

    // Only hide immediately when clicking into a project card
    const onPointerDown = (e) => {
      if (e.target.closest(".project-card-link")) {
        el.style.opacity = "0"; // disappear right away for project nav
      } else {
        // keep visible for navbar etc.; tiny click feedback
        el.classList.add("click");
        setTimeout(() => el.classList.remove("click"), 120);
      }
    };
    const onPointerUp = () => {};

    // Keep hover state correct while scrolling even if pointer is idle
    const markForHoverCheck = () => { needsHoverCheck.current = true; };
    window.addEventListener("scroll",    markForHoverCheck, { passive: true });
    document.addEventListener("scroll",  markForHoverCheck, { passive: true });
    window.addEventListener("wheel",     markForHoverCheck, { passive: true });
    window.addEventListener("touchmove", markForHoverCheck, { passive: true });

    // Explicit Spotify iframe enter/leave for instant suppression
    const frames = Array.from(document.querySelectorAll(".spotify-row iframe"));
    const onFrameEnter = () => suppress(true);
    const onFrameLeave = () => suppress(false);
    frames.forEach((f) => {
      f.addEventListener("mouseenter", onFrameEnter);
      f.addEventListener("mouseleave", onFrameLeave);
    });

    // Animation loop: time-based easing + periodic idle hover checks (~30fps)
    let raf;
    let last = performance.now();
    let checkAccumulator = 0;

    const animate = (t) => {
      const dt = Math.min(48, t - last);
      last = t;

      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      const dist = Math.hypot(dx, dy);

      const base = 0.24;                          // snappier baseline
      const boost = Math.min(0.28, dist * 0.0035); // catches up on flings
      const ease  = Math.min(0.48, (base + boost) * (dt / 16.67));

      pos.current.x += dx * ease;
      pos.current.y += dy * ease;

      if (dist > 150) { // snap if very far behind
        pos.current.x = mouse.current.x;
        pos.current.y = mouse.current.y;
      }

      el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;

      checkAccumulator += dt;
      if (needsHoverCheck.current || checkAccumulator > 33) {
        needsHoverCheck.current = false;
        checkHover(); // update hover/suppress even while idle
        checkAccumulator = 0;
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // Listeners
    document.addEventListener("pointermove",  onPointerMove,  { passive: true });
    document.addEventListener("pointerenter", onPointerEnter, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave, { passive: true });
    document.addEventListener("pointerdown",  onPointerDown,  { passive: true });
    document.addEventListener("pointerup",    onPointerUp,    { passive: true });

    // Start visible to avoid flicker on route changes
    el.style.opacity = "1";

    // Cleanup
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("pointermove",  onPointerMove);
      document.removeEventListener("pointerenter", onPointerEnter);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("pointerdown",  onPointerDown);
      document.removeEventListener("pointerup",    onPointerUp);
      window.removeEventListener("scroll",    markForHoverCheck);
      document.removeEventListener("scroll",  markForHoverCheck);
      window.removeEventListener("wheel",     markForHoverCheck);
      window.removeEventListener("touchmove", markForHoverCheck);
      frames.forEach((f) => {
        f.removeEventListener("mouseenter", onFrameEnter);
        f.removeEventListener("mouseleave", onFrameLeave);
      });
    };
  }, [enabled]);

  // On touch/coarse devices render nothing
  if (!enabled) return null;

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true" role="presentation">
      <img src="/assets/curse.svg" alt="" />
    </div>
  );
}
