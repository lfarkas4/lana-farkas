import React, { useState, useEffect, useRef } from "react";
import "../styles/LoadingScreen.scss";

const LOADING_PHRASES = [
  { text: "orbiting the", emphasis: "unknown" },
  { text: "wandering the", emphasis: "cosmos" },
  { text: "forging new", emphasis: "galaxies" },
];

const FADE_OUT_MS = 320;

const LoadingScreen = ({ onLoadComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const hasCompletedRef = useRef(false);

  const [phrase] = useState(
    () => LOADING_PHRASES[Math.floor(Math.random() * LOADING_PHRASES.length)]
  );

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (hasCompletedRef.current) return;

    let isMounted = true;
    let exitTimer = null;

    // ✅ Critical = letters (webp) + halo (png) + logo
    const criticalAssets = [
      "/assets/L@1x.webp",
      "/assets/L@2x.webp",
      "/assets/A1@1x.webp",
      "/assets/A1@2x.webp",
      "/assets/N@1x.webp",
      "/assets/N@2x.webp",
      "/assets/A2@1x.webp",
      "/assets/A2@2x.webp",
      "/assets/halo@1x.png",
      "/assets/halo@2x.png",
      "/starlogolight.svg",
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
      img.onload = onAssetLoad;
      img.onerror = () => {
        console.warn(`Failed to preload: ${src}`);
        onAssetLoad();
      };
      img.src = src;
    });

    // ✅ Faster min time (still feels intentional)
    const minDisplayTime = 1600;
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
