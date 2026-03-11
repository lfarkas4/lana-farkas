// src/utils/useReveal.js
import { useEffect, useRef } from "react";

export default function useReveal() {
  const scopeRef = useRef(null);

  useEffect(() => {
    const rootEl = scopeRef.current;
    if (!rootEl) return;

    // grab ANYTHING that should animate in
    const targets = rootEl.querySelectorAll(
      ".reveal, .reveal-stagger, .reveal-block, [data-stagger-block], .reveal-block--decor"
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // once it has animated in, we don't need to watch it anymore
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,        // viewport
        threshold: 0.15,   // when ~15% of it is in view
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return scopeRef;
}
