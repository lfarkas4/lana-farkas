// src/utils/useScrollAnimation.js
import { useEffect, useRef, useState } from 'react';

export default function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once !== false) observer.disconnect();
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        root: null,                           // ← viewport
        threshold: options.threshold ?? 0.15, // a bit of the element must be in view
        rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
}
