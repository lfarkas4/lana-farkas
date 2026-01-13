import React, { useState, useEffect, useRef } from "react";
import "../styles/LoadingScreen.scss";

const LOADING_PHRASES = [
  { text: "orbiting the", emphasis: "unknown" },
  { text: "wandering the", emphasis: "cosmos" },
  { text: "forging new", emphasis: "galaxies" },
];

// ✅ Must match .loading-screen transition in SCSS
const FADE_OUT_MS = 320;

const LoadingScreen = ({ onLoadComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isResting, setIsResting] = useState(false);

  const hasCompletedRef = useRef(false);

  const [phrase] = useState(
    () => LOADING_PHRASES[Math.floor(Math.random() * LOADING_PHRASES.length)]
  );

  // Fade-in on next paint
  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (hasCompletedRef.current) return;

    let isMounted = true;

    const criticalAssets = [
      "/assets/L@1x.png",
      "/assets/L@2x.png",
      "/assets/A1@1x.png",
      "/assets/A1@2x.png",
      "/assets/N@1x.png",
      "/assets/N@2x.png",
      "/assets/A2@1x.png",
      "/assets/A2@2x.png",
      "/assets/halo@1x.png",
      "/assets/halo@2x.png",
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

      // ✅ Tell parent immediately so hero/nav can mount BEHIND the fade-out
      // (next tick keeps this glitch-free)
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
      img.onload = onAssetLoad;
      img.onerror = () => {
        console.warn(`Failed to preload: ${src}`);
        onAssetLoad();
      };
      img.src = src;
    });

    const minDisplayTime = 1400; // ✅ shorter so the site feels snappier
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
