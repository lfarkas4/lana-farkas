import React, { useEffect, useRef, useState } from "react";
import "../styles/Lana.scss";

export default function Lana() {
  const wrapRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const imgs = Array.from(wrap.querySelectorAll("img"));
    let remaining = 0;

    const mark = () => {
      remaining -= 1;
      if (remaining <= 0) setReady(true);
    };

    imgs.forEach((img) => {
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
      {/* Letters (richer shadow via CSS only) */}
      <img
        src="/assets/L@1x.png"
        srcSet="/assets/L@1x.png 1x, /assets/L@2x.png 2x, /assets/L@3x.png 3x"
        alt=""
        className="lana-piece l-piece lana-letter"
        draggable="false"
      />
      <img
        src="/assets/A1@1x.png"
        srcSet="/assets/A1@1x.png 1x, /assets/A1@2x.png 2x, /assets/A1@3x.png 3x"
        alt=""
        className="lana-piece a1-piece lana-letter"
        draggable="false"
      />
      <img
        src="/assets/N@1x.png"
        srcSet="/assets/N@1x.png 1x, /assets/N@2x.png 2x, /assets/N@3x.png 3x"
        alt=""
        className="lana-piece n-piece lana-letter"
        draggable="false"
      />
      <img
        src="/assets/A2@1x.png"
        srcSet="/assets/A2@1x.png 1x, /assets/A2@2x.png 2x, /assets/A2@3x.png 3x"
        alt=""
        className="lana-piece a2-piece lana-letter"
        draggable="false"
      />

      {/* Decor */}
      <img
        src="/assets/halo@1x.png"
        srcSet="/assets/halo@1x.png 1x, /assets/halo@2x.png 2x, /assets/halo@3x.png 3x"
        alt=""
        className="lana-piece halo-piece"
        draggable="false"
      />
      <img
        src="/assets/orstar1@1x.png"
        srcSet="/assets/orstar1@1x.png 1x, /assets/orstar1@2x.png 2x, /assets/orstar1@3x.png 3x"
        alt=""
        className="lana-piece orstar1-piece"
        draggable="false"
      />
      <img
        src="/assets/redstar1@1x.png"
        srcSet="/assets/redstar1@1x.png 1x, /assets/redstar1@2x.png 2x, /assets/redstar1@3x.png 3x"
        alt=""
        className="lana-piece redstar1-piece"
        draggable="false"
      />
      <img
        src="/assets/blustar3@1x.png"
        srcSet="/assets/blustar3@1x.png 1x, /assets/blustar3@2x.png 2x, /assets/blustar3@3x.png 3x"
        alt=""
        className="lana-piece blustar3-piece"
        draggable="false"
      />
      <img
        src="/assets/blustar2@1x.png"
        srcSet="/assets/blustar2@1x.png 1x, /assets/blustar2@2x.png 2x, /assets/blustar2@3x.png 3x"
        alt=""
        className="lana-piece blustar2-piece"
        draggable="false"
      />
      <img
        src="/assets/blustar1@1x.png"
        srcSet="/assets/blustar1@1x.png 1x, /assets/blustar1@2x.png 2x, /assets/blustar1@3x.png 3x"
        alt=""
        className="lana-piece blustar1-piece"
        draggable="false"
      />
      <img
        src="/assets/redstar2@1x.png"
        srcSet="/assets/redstar2@1x.png 1x, /assets/redstar2@2x.png 2x, /assets/redstar2@3x.png 3x"
        alt=""
        className="lana-piece redstar2-piece"
        draggable="false"
      />
      <img
        src="/assets/crown@1x.png"
        srcSet="/assets/crown@1x.png 1x, /assets/crown@2x.png 2x, /assets/crown@3x.png 3x"
        alt=""
        className="lana-piece crown-piece"
        draggable="false"
      />
    </div>
  );
}