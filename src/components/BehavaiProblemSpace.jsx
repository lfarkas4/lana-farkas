// src/components/BehavaiProblemSpace.jsx
import React, { useRef, useEffect, useState } from "react";
import useReveal from "../utils/useReveal";

export default function BehavaiProblemSpace() {
  const sectionRef = useReveal();
  const [svgLines, setSvgLines] = useState("");
  const nodesRef = useRef([]);
  const svgRef = useRef(null);

  useEffect(() => {
    const updateLines = () => {
      if (nodesRef.current.length === 5 && svgRef.current) {
        const svg = svgRef.current;
        const svgRect = svg.getBoundingClientRect();

        const positions = nodesRef.current
          .map((node) => {
            if (!node) return null;
            const circle = node.querySelector(".behavai-node-circle");
            if (!circle) return null;

            const rect = circle.getBoundingClientRect();
            const centerX = rect.left - svgRect.left + rect.width / 2;
            const centerY = rect.top - svgRect.top + rect.height / 2;

            const svgX = (centerX / svgRect.width) * 600;
            const svgY = (centerY / svgRect.height) * 360;

            return `${svgX},${svgY}`;
          })
          .filter(Boolean);
          
        if (positions.length === 5) {
          const pathString = positions.join(" ") + " " + positions[0];
          setSvgLines(pathString);
        }
      }
    };

    // Initial update
    updateLines();

    // Update on animation frame for smooth lines
    let animationId;
    const animate = () => {
      updateLines();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Node data for reuse
  const nodes = [
    { icon: "/assets/time.png", label: "In-Session Time", className: "top-left" },
    { icon: "/assets/ehr.png", label: "EHR Systems", className: "left" },
    { icon: "/assets/paper.png", label: "Paper Notes", className: "bottom" },
    { icon: "/assets/client.png", label: "Client Insights", className: "right" },
    { icon: "/assets/handoffs.png", label: "Team Handoffs", className: "top-right" },
  ];

  return (
    <section
      ref={sectionRef}
      className="behavai-problem is-light"
      aria-label="BehavAI problem space"
    >
      <div className="behavai-problem-inner reveal">
        {/* Header */}
        <header className="behavai-problem-header">
          <p className="behavai-problem-eyebrow">The Core Problem</p>
          <h2 className="behavai-problem-title">
          The tools meant to <em>track progress</em> have become the <em>biggest obstacle</em> to delivering care.
          </h2>
        </header>

        {/* Body copy */}
        <div className="behavai-problem-body">
          <p>
            {/* <span className="hi">Applied Behavior Analysis (ABA)</span> is a
            widely used, evidence-based therapy for autism and related
            conditions. Each session generates hours of documentation, yet the{" "}
            <span className="hi">tools haven't kept pace for decades</span> — even
            though documentation is still how teams track goals and prove
            outcomes for their clients. */}
            ABA therapy requires detailed session-by-session data collection to <span className="hi">track client progress</span>, yet 
            the tools haven't evolved in decades. Providers face constant <span className="hi">context switching</span> that makes even simple tasks unnecessarily complex.
          </p>
        </div>

        {/* Web view for desktop (MD and up) */}
        <div className="behavai-problem-web">
          <div className="behavai-problem-web-inner">
            {/* Dynamic connecting lines */}
            <svg
              ref={svgRef}
              className="behavai-problem-web-lines"
              viewBox="0 0 600 360"
              aria-hidden="true"
            >
              <polyline
                points={svgLines}
                fill="none"
                stroke="#d6d6d6"
                strokeWidth="0.75"
              />
            </svg>

            {/* Center phrase */}
            <p className="behavai-problem-web-center">
              In a maze of disconnected touchpoints, it's time for something that{" "}
              <em>truly connects care</em>.
            </p>

            {/* Nodes with refs for tracking */}
            {nodes.map((node, index) => (
              <div
                key={index}
                ref={(el) => (nodesRef.current[index] = el)}
                className={`behavai-node behavai-node--${node.className}`}
              >
                <div className="behavai-node-circle">
                  <img src={node.icon} alt="" />
                </div>
                <p className="behavai-node-label">{node.label}</p>
              </div>
            ))}

            {/* Stars */}
            <img
              src="/assets/sparkkle.png"
              alt=""
              className="behavai-problem-star behavai-problem-star--one"
              aria-hidden="true"
            />
            <img
              src="/assets/sparkkle.png"
              alt=""
              className="behavai-problem-star behavai-problem-star--two"
              aria-hidden="true"
            />
            <img
              src="/assets/sparkkle.png"
              alt=""
              className="behavai-problem-star behavai-problem-star--three"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Linear view for mobile (MD and below) */}
        <div className="behavai-problem-linear">
          <p className="behavai-linear-center">
            In a maze of disconnected tools, it's time for something that{" "}
            <em>truly connects care</em>.
          </p>

          <div className="behavai-linear-nodes">
            {nodes.map((node, index) => (
              <div key={index} className="behavai-linear-node">
                <div className="behavai-linear-node-circle">
                  <img src={node.icon} alt="" />
                </div>
                <p className="behavai-linear-node-label">{node.label}</p>
              </div>
            ))}
          </div>

          <div className="behavai-linear-stars">
            <img
              src="/assets/sparkkle.png"
              alt=""
              className="behavai-linear-star behavai-linear-star--one"
              aria-hidden="true"
            />
            <img
              src="/assets/sparkkle.png"
              alt=""
              className="behavai-linear-star behavai-linear-star--two"
              aria-hidden="true"
            />
            <img
              src="/assets/sparkkle.png"
              alt=""
              className="behavai-linear-star behavai-linear-star--three"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}