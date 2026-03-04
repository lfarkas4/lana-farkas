import React, { useState, useEffect, useRef } from "react";

const LOADING_PHRASES = [
  { text: "orbiting the", emphasis: "unknown" },
  { text: "wandering the", emphasis: "cosmos" },
  { text: "forging new", emphasis: "galaxies" },
];

// Must match .loading-screen transition in SCSS
const FADE_OUT_MS = 320;

const LoadingScreen = ({ onLoadComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const hasCompletedRef = useRef(false);

  const [phrase, setPhrase] = useState(LOADING_PHRASES[0]);

  // Pick random phrase client-side only to avoid SSR/client mismatch
  useEffect(() => {
    setPhrase(LOADING_PHRASES[Math.floor(Math.random() * LOADING_PHRASES.length)]);
  }, []);

  // Fade-in on next paint
  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (hasCompletedRef.current) return;

    let isMounted = true;
    let exitTimer = null;

    // 1x for non-retina fallback, @3x WebP for all retina screens (2x and above)
    const criticalAssets = [
      "/assets/L@1x.webp",
      "/assets/L@3x.webp",
      "/assets/A1@1x.webp",
      "/assets/A1@3x.webp",
      "/assets/N@1x.webp",
      "/assets/N@3x.webp",
      "/assets/A2@1x.webp",
      "/assets/A2@3x.webp",
      "/assets/halo@1x.png",
      "/assets/halo@3x.webp",
      "/assets/orstar1@1x.png",
      "/assets/orstar1@3x.webp",
      "/assets/redstar1@1x.png",
      "/assets/redstar1@3x.webp",
      "/assets/blustar3@1x.png",
      "/assets/blustar3@3x.webp",
      "/assets/blustar2@1x.png",
      "/assets/blustar2@3x.webp",
      "/assets/blustar1@1x.png",
      "/assets/blustar1@3x.webp",
      "/assets/redstar2@1x.png",
      "/assets/redstar2@3x.webp",
      "/assets/crown@1x.png",
      "/assets/crown@3x.webp",
      "/starlogolight.svg",
      "/assets/spark.svg",
    ];

    let loadedCount = 0;
    let assetsReady = false;
    let minTimeReached = false;
    const totalAssets = criticalAssets.length;

    const complete = () => {
      if (!isMounted || hasCompletedRef.current) return;

      setIsResting(false);
      setIsExiting(true);
      hasCompletedRef.current = true;

      exitTimer = setTimeout(() => {
        if (isMounted) setIsVisible(false);
      }, FADE_OUT_MS);

      setTimeout(() => {
        if (isMounted) onLoadComplete?.();
      }, 0);
    };

    const checkComplete = () => {
      if (!isMounted) return;

      if (assetsReady && minTimeReached) {
        complete();
      } else if (minTimeReached && !assetsReady) {
        setIsResting(true);
      }
    };

    const onAssetLoad = () => {
      loadedCount += 1;
      if (loadedCount >= totalAssets) {
        assetsReady = true;
        checkComplete();
      }
    };

    criticalAssets.forEach((src) => {
      const img = new Image();

      img.onload = () => {
        if (img.decode) {
          const decodeTimeout = setTimeout(onAssetLoad, 1500);
          img
            .decode()
            .catch(() => {})
            .finally(() => {
              clearTimeout(decodeTimeout);
              onAssetLoad();
            });
        } else {
          onAssetLoad();
        }
      };

      img.onerror = () => {
        console.warn(`Failed to preload: ${src}`);
        onAssetLoad();
      };

      img.src = src;
    });

    const minDisplayTime = window.innerWidth < 768 ? 2200 : 1600;
    const minTimer = setTimeout(() => {
      minTimeReached = true;
      checkComplete();
    }, minDisplayTime);

    const maxWaitTime = 8000;
    const maxTimer = setTimeout(() => {
      if (!hasCompletedRef.current && isMounted) {
        console.warn("Loading timeout reached, proceeding anyway");
        assetsReady = true;
        minTimeReached = true;
        checkComplete();
      }
    }, maxWaitTime);

    return () => {
      isMounted = false;
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, [onLoadComplete]);

  return (
    <div
      className={[
        "loading-screen",
        isVisible ? "is-visible" : "",
        isExiting ? "is-exiting" : "",
      ].join(" ")}
    >
      <div className={`line-wrapper ${isResting ? "is-resting" : ""}`}>
        <div className="line-progress" />
      </div>

      <div className="loading-text">
        <p className="loading-tagline">
          {phrase.text} <em>{phrase.emphasis}</em>
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;