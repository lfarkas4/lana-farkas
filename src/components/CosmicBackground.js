import React, { useEffect, useRef } from "react";
import "../styles/CosmicBackground.scss";
import starLayout from "../assets/starLayout.json";

const CosmicBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const prevSize = useRef({ width: window.innerWidth, height: window.innerHeight });

  // Generate additional stars to fill gaps in corners/edges
  const generateGapFillerStars = (baseWidth, baseHeight, scaleX, scaleY) => {
    const centerX = baseWidth / 2;
    const centerY = baseHeight / 2;
    const gapStars = [];
    
    // Generate stars in 8 radial sections to fill rotation gaps
    const sections = 8;
    const starsPerSection = 15;
    const minRadius = Math.min(baseWidth, baseHeight) * 0.3; // Avoid center
    const maxRadius = Math.max(baseWidth, baseHeight) * 0.6;
    
    for (let section = 0; section < sections; section++) {
      const baseAngle = (section / sections) * Math.PI * 2;
      const angleSpread = (Math.PI * 2) / sections;
      
      for (let i = 0; i < starsPerSection; i++) {
        const angle = baseAngle + (Math.random() - 0.5) * angleSpread;
        const radius = minRadius + Math.random() * (maxRadius - minRadius);
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        // Random color palette
        const colors = [
          [255, 255, 255],      // white
          [255, 238, 204],      // warm white
          [255, 204, 238],      // pink
          [170, 209, 255],      // light blue
          [221, 255, 204],      // light green
        ];
        const baseColor = colors[Math.floor(Math.random() * colors.length)];
        
        gapStars.push({
          x: x * scaleX,
          y: y * scaleY,
          baseRadius: 2.5 + Math.random() * 0.8,
          radius: (2.5 + Math.random() * 0.8) * Math.min(scaleX, scaleY),
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.0015 + 0.001,
          fadeDirection: Math.random() > 0.5 ? 1 : -1,
          baseColor,
          minOpacity: 0.1 + Math.random() * 0.2,
          maxOpacity: 0.2 + Math.random() * 0.2,
        });
      }
    }
    
    return gapStars;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const newWidth = window.innerWidth * dpr;
      const newHeight = window.innerHeight * dpr;
    
      canvas.width = newWidth;
      canvas.height = newHeight;
    
      const baseWidth = 2880;
      const baseHeight = 1800;
      const scaleX = newWidth / baseWidth;
      const scaleY = newHeight / baseHeight;
      const minScale = 0.6;
    
      // Load original stars
      const originalStars = starLayout.map((star) => {
        const baseRadius = star.radius;
        return {
          ...star,
          x: star.x * scaleX,
          y: star.y * scaleY,
          baseRadius,
          radius: Math.max(baseRadius * Math.min(scaleX, scaleY), baseRadius * minScale),
          opacity: star.opacity || Math.random(),
          twinkleSpeed: star.twinkleSpeed || Math.random() * 0.001 + 0.001,
          fadeDirection: star.fadeDirection || (Math.random() > 0.5 ? 1 : -1),
          minOpacity: star.minOpacity || 0.1 + Math.random() * 0.2,
          maxOpacity: star.maxOpacity || 0.2 + Math.random() * 0.2,
        };
      });
      
      // Generate gap filler stars
      const gapFillers = generateGapFillerStars(baseWidth, baseHeight, scaleX, scaleY);
      
      // Combine both sets
      starsRef.current = [...originalStars, ...gapFillers];
    
      prevSize.current = { width: window.innerWidth, height: window.innerHeight };
    };

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
      <canvas ref={canvasRef} className="star-canvas" />
      <div className="color-layer" />
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