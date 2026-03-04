import { useEffect, useRef } from "react";

const CosmicFluidCursor = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const sparklesRef = useRef([]);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const currentColorRef = useRef({ r: 18, g: 0, b: 50 });
  const colorChangeTimerRef = useRef(0);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    // Only run on non-touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // ✅ Retina crispness: size canvas with DPR, draw in CSS pixels
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Enhanced config with layered effects
    const config = {
      opacity: 0.14,
      baseRadius: 24,
      expansion: 2.2,
      curl: 70,
      dissipation: 0.9425,
      velocityDissipation: 0.89,
      particleDensity: 86,
      // New: depth layers
      foregroundScale: 0.7,
      backgroundScale: 1.4,
      sparkleChance: 0.0005, // 2% chance to spawn sparkle (very subtle)
    };

    // Enhanced color palette with depth variations
    const colors = [
      { r: 5, g: 18, b: 60 },
      { r: 12, g: 15, b: 60 },
      { r: 18, g: 0, b: 50 },
      { r: 22, g: 1, b: 48 },
      { r: 25, g: 2, b: 45 },
      { r: 32, g: 3, b: 40 },
    ];

    // Sparkle colors - subtle, muted tones
    const sparkleColors = [
      { r: 140, g: 160, b: 200 }, // Muted cool blue
      { r: 150, g: 140, b: 180 }, // Muted lavender
      { r: 130, g: 150, b: 190 }, // Muted ice blue
    ];

    // Enhanced smoke particle with depth layer
    class SmokeParticle {
      constructor(x, y, vx, vy, color, layer = 'mid') {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.layer = layer;
        
        // Scale based on layer for depth
        const layerScale = 
          layer === 'background' ? config.backgroundScale :
          layer === 'foreground' ? config.foregroundScale : 1;
        
        this.radius = config.baseRadius * layerScale;
        this.baseRadius = this.radius;
        this.color = color;
        this.life = 1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05 * (2 - layerScale);
        this.expansion = config.expansion * layerScale;
        this.curlStrength = (Math.random() - 0.5) * config.curl * (1 / layerScale);
        
        // Depth-based speed multiplier
        this.depthSpeed = 
          layer === 'background' ? 0.7 :
          layer === 'foreground' ? 1.3 : 1;
      }

      update() {
        const curlForce = this.curlStrength * this.life;
        const perpX = -this.vy * curlForce * 0.015;
        const perpY = this.vx * curlForce * 0.015;

        this.vx += perpX;
        this.vy += perpY;

        this.x += this.vx * this.depthSpeed;
        this.y += this.vy * this.depthSpeed;

        this.vx *= config.velocityDissipation;
        this.vy *= config.velocityDissipation;
        this.life *= config.dissipation;

        this.rotation += this.rotationSpeed;
        this.radius += this.expansion;
      }

      draw(ctx) {
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Enhanced gradient with more color stops for depth
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
        const alpha = this.life * config.opacity;
        
        // Color shifts slightly cooler as particle ages (more blue)
        const ageShift = (1 - this.life) * 5;
        const r = Math.max(0, this.color.r - ageShift);
        const g = Math.max(0, this.color.g - ageShift);
        const b = Math.min(255, this.color.b + ageShift * 2);

        // Inner glow (brighter center)
        gradient.addColorStop(0, `rgba(${r + 15}, ${g + 15}, ${b + 20}, ${alpha * 1.2})`);
        gradient.addColorStop(0.15, `rgba(${r + 8}, ${g + 8}, ${b + 12}, ${alpha})`);
        gradient.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, ${alpha * 0.75})`);
        gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${alpha * 0.4})`);
        gradient.addColorStop(0.8, `rgba(${r}, ${g}, ${b}, ${alpha * 0.15})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(-this.radius, -this.radius, this.radius * 2, this.radius * 2);

        ctx.restore();
      }
    }

    // New: Sparkle particle class
    class SparkleParticle {
      constructor(x, y, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.vx = vx * 0.3;
        this.vy = vy * 0.3;
        this.color = color;
        this.life = 1;
        this.radius = 1.4 + Math.random() * 1.4; // Smaller sparkles
        this.twinkleSpeed = 0.05 + Math.random() * 0.05;
        this.twinkleOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95;
        this.vy *= 0.95;
        this.life *= 0.975;
        this.twinkleOffset += this.twinkleSpeed;
      }

      draw(ctx) {
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        
        // Twinkling effect - much more subtle
        const twinkle = (Math.sin(this.twinkleOffset) + 1) / 2;
        const alpha = this.life * (0.12 + twinkle * 0.28);
        
        // Draw sparkle with glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`;
        ctx.fill();
        
        // Outer glow - much subtler
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2); // Smaller glow radius
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 2
        );
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 0.2})`); // Less intense glow
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.restore();
      }
    }

    const handleMouseMove = (e) => {
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 0.5) {
        const color = currentColorRef.current;
        const numParticles = Math.min(Math.ceil(speed / 5), config.particleDensity);

        for (let i = 0; i < numParticles; i++) {
          const angle = Math.random() * Math.PI * 2;
          const spread = Math.random() * 32;
          const offsetX = Math.cos(angle) * spread;
          const offsetY = Math.sin(angle) * spread;
          
          // Determine layer (most are mid, some are foreground/background for depth)
          const layerRoll = Math.random();
          const layer = 
            layerRoll < 0.15 ? 'foreground' :
            layerRoll > 0.85 ? 'background' : 'mid';

          particlesRef.current.push(
            new SmokeParticle(
              e.clientX + offsetX,
              e.clientY + offsetY,
              dx * 0.15 + (Math.random() - 0.5) * 1,
              dy * 0.15 + (Math.random() - 0.5) * 1,
              color,
              layer
            )
          );
          
          // Occasionally spawn sparkle particle (more likely at high speed)
          const sparkleChanceBoost = Math.min(speed / 150, 0.08); // Less boost from speed
          if (Math.random() < (config.sparkleChance + sparkleChanceBoost)) {
            const sparkleColor = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
            sparklesRef.current.push(
              new SparkleParticle(
                e.clientX + offsetX * 0.5,
                e.clientY + offsetY * 0.5,
                dx * 0.2 + (Math.random() - 0.5) * 2,
                dy * 0.2 + (Math.random() - 0.5) * 2,
                sparkleColor
              )
            );
          }
        }

        // Manage particle count
        if (particlesRef.current.length > 250) {
          particlesRef.current.shift();
        }
        if (sparklesRef.current.length > 20) {
          sparklesRef.current.shift();
        }
      }

      lastPosRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Color cycling
      colorChangeTimerRef.current++;
      if (colorChangeTimerRef.current > 120) {
        colorChangeTimerRef.current = 0;
        currentColorRef.current = colors[Math.floor(Math.random() * colors.length)];
      }

      // Draw particles back-to-front for proper depth
      // 1. Background layer
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];
        if (particle.layer === 'background') {
          particle.update();
          particle.draw(ctx);
          if (particle.life < 0.01) {
            particlesRef.current.splice(i, 1);
          }
        }
      }
      
      // 2. Mid layer
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];
        if (particle.layer === 'mid') {
          particle.update();
          particle.draw(ctx);
          if (particle.life < 0.01) {
            particlesRef.current.splice(i, 1);
          }
        }
      }
      
      // 3. Foreground layer
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];
        if (particle.layer === 'foreground') {
          particle.update();
          particle.draw(ctx);
          if (particle.life < 0.01) {
            particlesRef.current.splice(i, 1);
          }
        }
      }

      // 4. Sparkles on top
      for (let i = sparklesRef.current.length - 1; i >= 0; i--) {
        const sparkle = sparklesRef.current[i];
        sparkle.update();
        sparkle.draw(ctx);
        if (sparkle.life < 0.01) {
          sparklesRef.current.splice(i, 1);
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -9,
      }}
    />
  );
};

export default CosmicFluidCursor;