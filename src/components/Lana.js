import React, { useEffect, useRef, useState } from "react";
import "../styles/Lana.scss";

export default function Lana() {
  const wrapRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // Only gate "ready" on letters + halo
    const criticalImgs = Array.from(
      wrap.querySelectorAll('img[data-critical="true"]')
    );

    if (criticalImgs.length === 0) {
      setReady(true);
      return;
    }

    let remaining = 0;

    const mark = () => {
      remaining -= 1;
      if (remaining <= 0) setReady(true);
    };

    criticalImgs.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) return;
      remaining += 1;
      img.addEventListener("load", mark, { once: true });
      img.addEventListener("error", mark, { once: true });
    });

    if (remaining === 0) setReady(true);
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`lana-container ${ready ? "is-ready" : ""}`}
      aria-hidden="true"
    >
      {/* Letters (WEBP) - CRITICAL */}
      <img
        data-critical="true"
        src="/assets/L@1x.webp"
        srcSet="/assets/L@1x.webp 1x, /assets/L@2x.webp 2x"
        alt=""
        className="lana-piece l-piece lana-letter"
        draggable="false"
        fetchPriority="high"
        decoding="async"
      />
      <img
        data-critical="true"
        src="/assets/A1@1x.webp"
        srcSet="/assets/A1@1x.webp 1x, /assets/A1@2x.webp 2x"
        alt=""
        className="lana-piece a1-piece lana-letter"
        draggable="false"
        fetchPriority="high"
        decoding="async"
      />
      <img
        data-critical="true"
        src="/assets/N@1x.webp"
        srcSet="/assets/N@1x.webp 1x, /assets/N@2x.webp 2x"
        alt=""
        className="lana-piece n-piece lana-letter"
        draggable="false"
        fetchPriority="high"
        decoding="async"
      />
      <img
        data-critical="true"
        src="/assets/A2@1x.webp"
        srcSet="/assets/A2@1x.webp 1x, /assets/A2@2x.webp 2x"
        alt=""
        className="lana-piece a2-piece lana-letter"
        draggable="false"
        fetchPriority="high"
        decoding="async"
      />

      {/* Halo (PNG) - CRITICAL */}
      <img
        data-critical="true"
        src="/assets/halo@1x.png"
        srcSet="/assets/halo@1x.png 1x, /assets/halo@2x.png 2x"
        alt=""
        className="lana-piece halo-piece"
        draggable="false"
        fetchPriority="high"
        decoding="async"
      />

      {/* Stars + crown (PNG) - NON-CRITICAL */}
      <img
        src="/assets/orstar1@1x.png"
        srcSet="/assets/orstar1@1x.png 1x, /assets/orstar1@2x.png 2x"
        alt=""
        className="lana-piece orstar1-piece"
        draggable="false"
        fetchPriority="low"
        decoding="async"
      />
      <img
        src="/assets/redstar1@1x.png"
        srcSet="/assets/redstar1@1x.png 1x, /assets/redstar1@2x.png 2x"
        alt=""
        className="lana-piece redstar1-piece"
        draggable="false"
        fetchPriority="low"
        decoding="async"
      />
      <img
        src="/assets/blustar3@1x.png"
        srcSet="/assets/blustar3@1x.png 1x, /assets/blustar3@2x.png 2x"
        alt=""
        className="lana-piece blustar3-piece"
        draggable="false"
        fetchPriority="low"
        decoding="async"
      />
      <img
        src="/assets/blustar2@1x.png"
        srcSet="/assets/blustar2@1x.png 1x, /assets/blustar2@2x.png 2x"
        alt=""
        className="lana-piece blustar2-piece"
        draggable="false"
        fetchPriority="low"
        decoding="async"
      />
      <img
        src="/assets/blustar1@1x.png"
        srcSet="/assets/blustar1@1x.png 1x, /assets/blustar1@2x.png 2x"
        alt=""
        className="lana-piece blustar1-piece"
        draggable="false"
        fetchPriority="low"
        decoding="async"
      />
      <img
        src="/assets/redstar2@1x.png"
        srcSet="/assets/redstar2@1x.png 1x, /assets/redstar2@2x.png 2x"
        alt=""
        className="lana-piece redstar2-piece"
        draggable="false"
        fetchPriority="low"
        decoding="async"
      />
      <img
        src="/assets/crown@1x.png"
        srcSet="/assets/crown@1x.png 1x, /assets/crown@2x.png 2x"
        alt=""
        className="lana-piece crown-piece"
        draggable="false"
        fetchPriority="low"
        decoding="async"
      />
    </div>
  );
}
