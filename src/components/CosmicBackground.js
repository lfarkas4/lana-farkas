import React, { useEffect, useRef } from "react";
import "../styles/CosmicBackground.scss";
import starLayout from "../assets/starLayout.json";

const CosmicBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const prevSize = useRef({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const newWidth = window.innerWidth * dpr;
      const newHeight = window.innerHeight * dpr;
    
      canvas.width = newWidth;
      canvas.height = newHeight;
    
      const centerX = newWidth / 2;
      const centerY = newHeight / 2;
    
      const baseWidth = 2880; // The original design width
      const baseHeight = 1800; // Or whatever your JSON was based on
      const scaleX = newWidth / baseWidth;
      const scaleY = newHeight / baseHeight;
      const minScale = 0.6;
    
      starsRef.current = starLayout.map((star) => {
        const baseRadius = star.radius;
        return {
          ...star,
          x: star.x * scaleX,
          y: star.y * scaleY,
          baseRadius,
          radius: Math.max(baseRadius * Math.min(scaleX, scaleY), baseRadius * minScale),
          opacity: Math.random(),
          twinkleSpeed: Math.random() * 0.001 + 0.001,
          fadeDirection: Math.random() > 0.5 ? 1 : -1,
          minOpacity: 0.1 + Math.random() * 0.2,
          maxOpacity: 0.2 + Math.random() * 0.2,
        };
      });
    
      prevSize.current = { width: window.innerWidth, height: window.innerHeight };
    };    

    // Initialize stars from JSON and supplement missing fields
    starsRef.current = starLayout.map(star => {
      const baseRadius = star.radius;
      return {
        ...star,
        baseRadius,
        radius: baseRadius,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.001 + 0.001,
        fadeDirection: Math.random() > 0.5 ? 1 : -1,
        minOpacity: 0.1 + Math.random() * 0.2,
        maxOpacity: 0.2 + Math.random() * 0.2,
      };
    });

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of starsRef.current) {
        star.opacity += star.twinkleSpeed * star.fadeDirection;
        if (star.opacity <= star.minOpacity) {
          star.fadeDirection = 1;
          star.opacity = star.minOpacity;
        } else if (star.opacity >= star.maxOpacity) {
          star.fadeDirection = -1;
          star.opacity = star.maxOpacity;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.baseColor[0]}, ${star.baseColor[1]}, ${star.baseColor[2]}, ${star.opacity})`;
        ctx.fill();
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="cosmic-background">
      <div className="star-dimmer" />
      <canvas ref={canvasRef} className="star-canvas" />
      <div className="center-orb3" />
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />
      <div className="blob blob4" />
      <div className="blob blob5" />
      <div className="blob blob6" />
    </div>
  );
};

export default CosmicBackground;
