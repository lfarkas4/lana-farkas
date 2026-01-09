import { useEffect, useRef } from "react";

const CosmicFluidCursor = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
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
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap for perf
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS px
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Config - BIGGER, WAY darker/subtle, more smokey and fluid
    const config = {
      opacity: 0.16,
      baseRadius: 26,
      expansion: 2.2,
      curl: 70,
      dissipation: 0.9425,
      velocityDissipation: 0.89,
      particleDensity: 86,
    };

    // ULTRA DARK palette
    const colors = [
      { r: 5, g: 18, b: 60 },
      { r: 12, g: 15, b: 60 },
      { r: 18, g: 0, b: 50 },
      { r: 22, g: 1, b: 48 },
      { r: 25, g: 2, b: 45 },
      { r: 32, g: 3, b: 40 },
    ];

    class SmokeParticle {
      constructor(x, y, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = config.baseRadius;
        this.color = color;
        this.life = 1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
        this.expansion = config.expansion;
        this.curlStrength = (Math.random() - 0.5) * config.curl;
      }

      update() {
        const curlForce = this.curlStrength * this.life;
        const perpX = -this.vy * curlForce * 0.015;
        const perpY = this.vx * curlForce * 0.015;

        this.vx += perpX;
        this.vy += perpY;

        this.x += this.vx;
        this.y += this.vy;

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

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
        const alpha = this.life * config.opacity;

        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`);
        gradient.addColorStop(0.35, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 0.65})`);
        gradient.addColorStop(0.65, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 0.25})`);
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(-this.radius, -this.radius, this.radius * 2, this.radius * 2);

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
          const spread = Math.random() * 40;
          const offsetX = Math.cos(angle) * spread;
          const offsetY = Math.sin(angle) * spread;

          particlesRef.current.push(
            new SmokeParticle(
              e.clientX + offsetX,
              e.clientY + offsetY,
              dx * 0.15 + (Math.random() - 0.5) * 1,
              dy * 0.15 + (Math.random() - 0.5) * 1,
              color
            )
          );
        }

        if (particlesRef.current.length > 200) {
          particlesRef.current.shift();
        }
      }

      lastPosRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Clear canvas (still transparent)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Color cycling
      colorChangeTimerRef.current++;
      if (colorChangeTimerRef.current > 120) {
        colorChangeTimerRef.current = 0;
        currentColorRef.current = colors[Math.floor(Math.random() * colors.length)];
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];
        particle.update();
        particle.draw(ctx);

        if (particle.life < 0.01) {
          particlesRef.current.splice(i, 1);
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
