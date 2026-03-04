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
    const allCached = imgs.every((img) => img.complete && img.naturalWidth > 0);
    if (allCached) { setReady(true); return; }
    const waitForImg = (img) => new Promise((resolve) => {
      const done = () => {
        if (typeof img.decode === "function") {
          const decodeTimeout = setTimeout(resolve, 400);
          img.decode().catch(() => {}).finally(() => { clearTimeout(decodeTimeout); resolve(); });
        } else { resolve(); }
      };
      if (img.complete && img.naturalWidth > 0) return done();
      const onLoad = () => { cleanup(); done(); };
      const onError = () => { cleanup(); resolve(); };
      const cleanup = () => { img.removeEventListener("load", onLoad); img.removeEventListener("error", onError); };
      img.addEventListener("load", onLoad);
      img.addEventListener("error", onError);
    });
    (async () => { await Promise.all(imgs.map(waitForImg)); if (!cancelled) setReady(true); })();
    return () => { cancelled = true; };
  }, []);

  return (
    <div ref={wrapRef} className={`lana-container ${ready ? "is-ready" : ""}`} aria-hidden="true">
      <img src="/assets/L@3x.webp" srcSet="/assets/L@1x.webp 1x, /assets/L@3x.webp 2x, /assets/L@3x.webp 3x" alt="" className="lana-piece l-piece lana-letter" draggable="false" fetchPriority="high" decoding="async" />
      <img src="/assets/A1@3x.webp" srcSet="/assets/A1@1x.webp 1x, /assets/A1@3x.webp 2x, /assets/A1@3x.webp 3x" alt="" className="lana-piece a1-piece lana-letter" draggable="false" fetchPriority="high" decoding="async" />
      <img src="/assets/N@3x.webp" srcSet="/assets/N@1x.webp 1x, /assets/N@3x.webp 2x, /assets/N@3x.webp 3x" alt="" className="lana-piece n-piece lana-letter" draggable="false" fetchPriority="high" decoding="async" />
      <img src="/assets/A2@3x.webp" srcSet="/assets/A2@1x.webp 1x, /assets/A2@3x.webp 2x, /assets/A2@3x.webp 3x" alt="" className="lana-piece a2-piece lana-letter" draggable="false" fetchPriority="high" decoding="async" />
      <img src="/assets/halo@3x.webp" srcSet="/assets/halo@1x.png 1x, /assets/halo@3x.webp 2x, /assets/halo@3x.webp 3x" alt="" className="lana-piece halo-piece" draggable="false" fetchPriority="high" decoding="async" />
      <img src="/assets/orstar1@3x.webp" srcSet="/assets/orstar1@1x.png 1x, /assets/orstar1@3x.webp 2x, /assets/orstar1@3x.webp 3x" alt="" className="lana-piece orstar1-piece" draggable="false" decoding="async" />
      <img src="/assets/redstar1@3x.webp" srcSet="/assets/redstar1@1x.png 1x, /assets/redstar1@3x.webp 2x, /assets/redstar1@3x.webp 3x" alt="" className="lana-piece redstar1-piece" draggable="false" decoding="async" />
      <img src="/assets/blustar3@3x.webp" srcSet="/assets/blustar3@1x.png 1x, /assets/blustar3@3x.webp 2x, /assets/blustar3@3x.webp 3x" alt="" className="lana-piece blustar3-piece" draggable="false" decoding="async" />
      <img src="/assets/blustar2@3x.webp" srcSet="/assets/blustar2@1x.png 1x, /assets/blustar2@3x.webp 2x, /assets/blustar2@3x.webp 3x" alt="" className="lana-piece blustar2-piece" draggable="false" decoding="async" />
      <img src="/assets/blustar1@3x.webp" srcSet="/assets/blustar1@1x.png 1x, /assets/blustar1@3x.webp 2x, /assets/blustar1@3x.webp 3x" alt="" className="lana-piece blustar1-piece" draggable="false" decoding="async" />
      <img src="/assets/redstar2@3x.webp" srcSet="/assets/redstar2@1x.png 1x, /assets/redstar2@3x.webp 2x, /assets/redstar2@3x.webp 3x" alt="" className="lana-piece redstar2-piece" draggable="false" decoding="async" />
      <img src="/assets/crown@3x.webp" srcSet="/assets/crown@1x.png 1x, /assets/crown@3x.webp 2x, /assets/crown@3x.webp 3x" alt="" className="lana-piece crown-piece" draggable="false" decoding="async" />
    </div>
  );
}
