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
      {/* Letters */}
      <img
        src="/assets/L@3x.webp"
        alt=""
        className="lana-piece l-piece lana-letter"
        draggable="false"
        decoding="async"
        fetchpriority="high"
      />
      <img
        src="/assets/A1@3x.webp"
        alt=""
        className="lana-piece a1-piece lana-letter"
        draggable="false"
        decoding="async"
        fetchpriority="high"
      />
      <img
        src="/assets/N@3x.webp"
        alt=""
        className="lana-piece n-piece lana-letter"
        draggable="false"
        decoding="async"
        fetchpriority="high"
      />
      <img
        src="/assets/A2@3x.webp"
        alt=""
        className="lana-piece a2-piece lana-letter"
        draggable="false"
        decoding="async"
        fetchpriority="high"
      />

      {/* Decor */}
      <img
        src="/assets/halo@3x.webp"
        alt=""
        className="lana-piece halo-piece"
        draggable="false"
        decoding="async"
      />
      <img
        src="/assets/orstar1@3x.webp"
        alt=""
        className="lana-piece orstar1-piece"
        draggable="false"
        decoding="async"
      />
      <img
        src="/assets/redstar1@3x.webp"
        alt=""
        className="lana-piece redstar1-piece"
        draggable="false"
        decoding="async"
      />
      <img
        src="/assets/blustar3@3x.webp"
        alt=""
        className="lana-piece blustar3-piece"
        draggable="false"
        decoding="async"
      />
      <img
        src="/assets/blustar2@3x.webp"
        alt=""
        className="lana-piece blustar2-piece"
        draggable="false"
        decoding="async"
      />
      <img
        src="/assets/blustar1@3x.webp"
        alt=""
        className="lana-piece blustar1-piece"
        draggable="false"
        decoding="async"
      />
      <img
        src="/assets/redstar2@3x.webp"
        alt=""
        className="lana-piece redstar2-piece"
        draggable="false"
        decoding="async"
      />
      <img
        src="/assets/crown@3x.webp"
        alt=""
        className="lana-piece crown-piece"
        draggable="false"
        decoding="async"
      />
    </div>
  );
}
