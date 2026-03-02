import React, { useEffect, useRef, useState } from "react";
import "../styles/Lana.scss";

export default function Lana() {
  const wrapRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const imgs = Array.from(wrap.querySelectorAll("img"));
    let cancelled = false;

    // Fast path: if all images are already cached by the browser,
    // reveal immediately without waiting for decode() - avoids the
    // "blank Lana on nav from About" flash entirely.
    const allCached = imgs.every((img) => img.complete && img.naturalWidth > 0);
    if (allCached) {
      setReady(true);
      return;
    }

    const waitForImg = (img) =>
      new Promise((resolve) => {
        const done = () => {
          if (typeof img.decode === "function") {
            // Reduced from 1500ms - cached assets decode near-instantly,
            // long timeouts just delay the reveal on repeated visits.
            const decodeTimeout = setTimeout(resolve, 400);
            img
              .decode()
              .catch(() => {})
              .finally(() => {
                clearTimeout(decodeTimeout);
                resolve();
              });
          } else {
            resolve();
          }
        };

        if (img.complete && img.naturalWidth > 0) return done();

        const onLoad = () => { cleanup(); done(); };
        const onError = () => { cleanup(); resolve(); };
        const cleanup = () => {
          img.removeEventListener("load", onLoad);
          img.removeEventListener("error", onError);
        };

        img.addEventListener("load", onLoad);
        img.addEventListener("error", onError);
      });

    (async () => {
      await Promise.all(imgs.map(waitForImg));
      if (!cancelled) setReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`lana-container ${ready ? "is-ready" : ""}`}
      aria-hidden="true"
    >
      <img
        src="/assets/L@1x.webp"
        srcSet="/assets/L@1x.webp 1x, /assets/L@2x.webp 2x"
        alt=""
        className="lana-piece l-piece lana-letter"
        draggable="false"
        fetchPriority="high"
        decoding="async"
      />
      <img
        src="/assets/A1@1x.webp"
        srcSet="/assets/A1@1x.webp 1x, /assets/A1@2x.webp 2x"
        alt=""
        className="lana-piece a1-piece lana-letter"
        draggable="false"
        fetchPriority="high"
        decoding="async"
      />
      <img
        src="/assets/N@1x.webp"
        srcSet="/assets/N@1x.webp 1x, /assets/N@2x.webp 2x"
        alt=""
        className="lana-piece n-piece lana-letter"
        draggable="false"
        fetchPriority="high"
        decoding="async"
      />
      <img
        src="/assets/A2@1x.webp"
        srcSet="/assets/A2@1x.webp 1x, /assets/A2@2x.webp 2x"
        alt=""
        className="lana-piece a2-piece lana-letter"
        draggable="false"
        fetchPriority="high"
        decoding="async"
      />
      <img
        src="/assets/halo@1x.png"
        srcSet="/assets/halo@1x.png 1x, /assets/halo@2x.png 2x"
        alt=""
        className="lana-piece halo-piece"
        draggable="false"
        fetchPriority="high"
        decoding="async"
      />
      <img
        src="/assets/orstar1@1x.png"
        srcSet="/assets/orstar1@1x.png 1x, /assets/orstar1@2x.png 2x"
        alt=""
        className="lana-piece orstar1-piece"
        draggable="false"
        decoding="async"
      />
      <img
        src="/assets/redstar1@1x.png"
        srcSet="/assets/redstar1@1x.png 1x, /assets/redstar1@2x.png 2x"
        alt=""
        className="lana-piece redstar1-piece"
        draggable="false"
        decoding="async"
      />
      <img
        src="/assets/blustar3@1x.png"
        srcSet="/assets/blustar3@1x.png 1x, /assets/blustar3@2x.png 2x"
        alt=""
        className="lana-piece blustar3-piece"
        draggable="false"
        decoding="async"
      />
      <img
        src="/assets/blustar2@1x.png"
        srcSet="/assets/blustar2@1x.png 1x, /assets/blustar2@2x.png 2x"
        alt=""
        className="lana-piece blustar2-piece"
        draggable="false"
        decoding="async"
      />
      <img
        src="/assets/blustar1@1x.png"
        srcSet="/assets/blustar1@1x.png 1x, /assets/blustar1@2x.png 2x"
        alt=""
        className="lana-piece blustar1-piece"
        draggable="false"
        decoding="async"
      />
      <img
        src="/assets/redstar2@1x.png"
        srcSet="/assets/redstar2@1x.png 1x, /assets/redstar2@2x.png 2x"
        alt=""
        className="lana-piece redstar2-piece"
        draggable="false"
        decoding="async"
      />
      <img
        src="/assets/crown@1x.png"
        srcSet="/assets/crown@1x.png 1x, /assets/crown@2x.png 2x"
        alt=""
        className="lana-piece crown-piece"
        draggable="false"
        decoding="async"
      />
    </div>
  );
}