import React, { useEffect, useRef, useState } from "react";

export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  variant = "up",          // "up" | "fade" | "left" | "right"
  delay = 0,               // ms
  threshold = 0.12,        // how much must be visible
  once = true,             // reveal only once
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // Respect reduced motion
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // delay without blocking layout
            const t = setTimeout(() => setVisible(true), delay);
            if (once) io.unobserve(entry.target);
            return () => clearTimeout(t);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { rootMargin: "0px 0px -5% 0px", threshold }
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, [delay, once, threshold]);

  const base = "reveal";
  const dir = `reveal--${variant}`;
  const state = visible ? "is-visible" : "is-hidden";

  return (
    <Tag
      ref={ref}
      className={`${base} ${dir} ${state} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
