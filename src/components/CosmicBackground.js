// src/components/CosmicBackground.jsx
import React, { useRef } from "react";
import "../styles/CosmicBackground.scss";
import CosmicFluidCursor from "./CosmicFluidCursor";

/** SVG "sparkle" stars */
const SPARKLE_STARS = [
  { left: "10%", top: "16%", size: "sm", delay: "0.0s" },
  { left: "35%", top: "13%", size: "md", delay: "2.5s" },
  { left: "58%", top: "11%", size: "sm", delay: "5.0s" },
  { left: "84%", top: "22%", size: "sm", delay: "7.5s" },
  { left: "78%", top: "37%", size: "md", delay: "3.2s" },
  { left: "93%", top: "40%", size: "md", delay: "3.2s" },
  { left: "86%", top: "55%", size: "sm", delay: "6.4s" },
  { left: "76%", top: "64%", size: "md", delay: "9.6s" },
  { left: "65%", top: "90%", size: "sm", delay: "1.9s" },
  { left: "26%", top: "86%", size: "sm", delay: "4.1s" },
  { left: "12%", top: "72%", size: "md", delay: "8.3s" },
  { left: "8%", top: "50%", size: "sm", delay: "10.0s" },
  { left: "16%", top: "36%", size: "sm", delay: "11.7s" },
];

/** Circle-dot stars */
const CIRCLE_STARS = [
  { left: "14%", top: "8%", r: 5, color: "rgba(255,255,255,.7)", delay: "0s" },
  { left: "6%", top: "30%", r: 4, color: "rgba(255,238,204,.8)", delay: "18s" },
  { left: "20%", top: "23%", r: 6, color: "rgba(170,209,255,.85)", delay: "4s" },
  { left: "26%", top: "13%", r: 5, color: "rgba(255,204,238,.7)", delay: "2s", move: true },
  { left: "31%", top: "4%", r: 4, color: "rgba(255,255,255,.85)", delay: "8s" },
  { left: "45%", top: "8%", r: 6, color: "rgba(170,209,255,.8)", delay: "10s" },
  { left: "62%", top: "7%", r: 4, color: "rgba(255,238,204,.8)", delay: "12s" },
  { left: "70%", top: "14%", r: 5, color: "rgba(255,255,255,.7)", delay: "14s" },
  { left: "80%", top: "20%", r: 4, color: "rgba(255,204,238,.8)", delay: "16s" },
  { left: "92%", top: "17%", r: 6, color: "rgba(170,209,255,.85)", delay: "2s" },
  { left: "85%", top: "35%", r: 5, color: "rgba(255,255,255,.8)", delay: "14s" },
  { left: "90%", top: "45%", r: 4, color: "rgba(255,238,204,.7)", delay: "12s" },
  { left: "95%", top: "60%", r: 6, color: "rgba(255,238,204,.8)", delay: "20s" },
  { left: "87%", top: "72%", r: 5, color: "rgba(170,209,255,.75)", delay: "18s" },
  { left: "80%", top: "78%", r: 6, color: "rgba(255,204,238,.8)", delay: "16s" },
  { left: "92%", top: "85%", r: 4, color: "rgba(255,255,255,.8)", delay: "4s" },
  { left: "88%", top: "90%", r: 5, color: "rgba(255,238,204,.8)", delay: "12s" },
  { left: "74%", top: "94%", r: 5, color: "rgba(170,209,255,.75)", delay: "12s", move: true },
  { left: "54%", top: "96%", r: 6, color: "rgba(255,204,238,.8)", delay: "8s" },
  { left: "38%", top: "92%", r: 5, color: "rgba(255,255,255,.7)", delay: "0s" },
  { left: "33%", top: "95%", r: 4, color: "rgba(255,238,204,.8)", delay: "12s" },
  { left: "20%", top: "90%", r: 6, color: "rgba(170,209,255,.8)", delay: "10s" },
  { left: "22%", top: "72%", r: 6, color: "rgba(255,204,238,.75)", delay: "22s" },
  { left: "7%", top: "86%", r: 5, color: "rgba(255,204,238,.8)", delay: "6s" },
  { left: "5%", top: "78%", r: 4, color: "rgba(255,255,255,.85)", delay: "8s" },
  { left: "14%", top: "60%", r: 4, color: "rgba(255,238,204,.7)", delay: "12s" },
  { left: "18%", top: "56%", r: 5, color: "rgba(170,209,255,.85)", delay: "18s" },
  { left: "4%", top: "47%", r: 6, color: "rgba(170,209,255,.75)", delay: "2s" },
];

/** Floating particles that drift upward */
const FLOATING_PARTICLES = [
  { left: "8%", size: 5, dur: 16, delay: 0, variant: "" },
  { left: "15%", size: 7, dur: 20, delay: 3, variant: "warm" },
  { left: "22%", size: 4, dur: 18, delay: 7, variant: "purple" },
  { left: "32%", size: 6, dur: 22, delay: 2, variant: "" },
  { left: "42%", size: 7, dur: 17, delay: 9, variant: "warm" },
  { left: "52%", size: 4, dur: 19, delay: 4, variant: "" },
  { left: "62%", size: 5, dur: 21, delay: 11, variant: "purple" },
  { left: "72%", size: 7, dur: 16, delay: 6, variant: "" },
  { left: "80%", size: 4, dur: 23, delay: 1, variant: "warm" },
  { left: "88%", size: 6, dur: 18, delay: 8, variant: "" },
  { left: "95%", size: 7, dur: 20, delay: 5, variant: "purple" },
  { left: "5%", size: 5, dur: 19, delay: 13, variant: "warm" },
];

/** Map radius → brightness "layer" */
function layerFor(r) {
  if (r >= 6) {
    return { minO: 0.36, maxO: 0.84, haloMin: "1px", haloMax: "12px" };
  } else if (r === 5) {
    return { minO: 0.22, maxO: 0.7, haloMin: "1px", haloMax: "10px" };
  }
  return { minO: 0.1, maxO: 0.44, haloMin: "0px", haloMax: "8px" };
}

function pctToPx(pctString, basePx) {
  // "16%" -> 0.16 * basePx
  const n = parseFloat(String(pctString).replace("%", ""));
  if (Number.isNaN(n)) return pctString; // safe fallback
  return `${(n / 100) * basePx}px`;
}

export default function CosmicBackground({ showFluidCursor = false }) {
  // Freeze vertical star placement based on the viewport height at mount time.
  // Horizontal (left: "%") stays responsive; vertical (top) becomes fixed px.
  const baseHeightRef = useRef(
    typeof window !== "undefined" ? window.innerHeight : 900
  );

  return (
    <>
      <div className="cosmic-background" aria-hidden>
        {/* Background textures */}
        <div className="grain-layer" />
        <div className="nebula-layer" />

        {/* Readability overlays */}
        <div className="star-dimmer" />
        <div className="center-orb3" />

        {/* Circle dot stars */}
        <div className="circle-stars stars-enter">
          {CIRCLE_STARS.map((s, i) => {
            const { minO, maxO, haloMin, haloMax } = layerFor(s.r);
            const glowDur = `${7 + ((i * 37) % 80) / 10}s`;
            const glowDelay = `calc(${s.delay || "0s"} + ${(i % 5) * 110}ms)`;

            const hue =
              i % 6 === 0
                ? 120
                : i % 5 === 0
                ? 195
                : i % 4 === 0
                ? 305
                : i % 3 === 0
                ? 48
                : 0;

            return (
              <span
                key={`dot-${i}`}
                className={`circle-star${s.move ? " mover" : ""}`}
                style={{
                  left: s.left, // keep horizontal responsive
                  top: pctToPx(s.top, baseHeightRef.current), // freeze vertical
                  width: `${s.r}px`,
                  height: `${s.r}px`,
                  backgroundColor: s.color,
                  "--minO": String(minO),
                  "--maxO": String(maxO),
                  "--haloMin": haloMin,
                  "--haloMax": haloMax,
                  "--glowDur": glowDur,
                  "--glowDelay": glowDelay,
                  "--dotHue": hue,
                  "--ampX": s.move ? "10px" : "0px",
                  "--ampY": s.move ? "8px" : "0px",
                  "--pathDur": s.move ? `${18 + (i % 5) * 3}s` : "0s",
                  "--pathDelay": s.move ? `${(i % 7) * 0.7}s` : "0s",
                }}
              />
            );
          })}
        </div>

        {/* SVG sparkle stars */}
        <div className="manual-stars stars-enter">
          {SPARKLE_STARS.map((s, i) => (
            <img
              key={`spark-${i}`}
              className={`manual-star s-${s.size || "md"}`}
              src="/assets/star-plain.svg"
              alt=""
              aria-hidden="true"
              style={{
                left: s.left, // keep horizontal responsive
                top: pctToPx(s.top, baseHeightRef.current), // freeze vertical
                animationDelay: s.delay || `${(i * 3.2) % 12}s`,
              }}
            />
          ))}
        </div>

        {/* Floating particles (drift upward) */}
        <div className="floating-particles stars-enter">
          {FLOATING_PARTICLES.map((p, i) => (
            <span
              key={`float-${i}`}
              className={`floating-particle${
                p.variant ? ` floating-particle--${p.variant}` : ""
              }`}
              style={{
                left: p.left,
                bottom: "0",
                width: `${p.size}px`,
                height: `${p.size}px`,
                "--float-dur": `${p.dur}s`,
                "--drift-x": `${
                  (i % 2 === 0 ? 1 : -1) * (10 + ((i * 3) % 15))
                }px`,
                "--max-opacity": 0.4 + p.size / 10,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Blobs */}
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="blob blob3" />
        <div className="blob blob4" />
        <div className="blob blob5" />
        <div className="blob blob6" />
      </div>

      {/* Conditionally render fluid cursor */}
      {showFluidCursor && <CosmicFluidCursor />}
    </>
  );
}