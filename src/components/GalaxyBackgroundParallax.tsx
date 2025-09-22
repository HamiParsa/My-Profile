"use client";

import { useEffect, useRef } from "react";

/**
 * GalaxyBackgroundAuto
 * ------------------------
 * - Stars twinkle naturally
 * - Nebula layers move automatically
 * - No mouse parallax
 */
export default function GalaxyBackgroundAuto() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // ===== Stars =====
    const stars = Array.from({ length: 300 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.3 + 0.05,
      opacity: Math.random() * 0.8 + 0.2,
      delta: Math.random() * 0.02 + 0.01,
      layer: Math.random() * 2 + 1 // for depth effect
    }));

    // ===== Nebula layers =====
    const nebulaLayers = [
      { color: "rgba(255, 77, 187, 0.15)", radius: 300, x: width * 0.3, y: height * 0.3, speed: 0.2 },
      { color: "rgba(107, 91, 255, 0.12)", radius: 400, x: width * 0.7, y: height * 0.7, speed: 0.15 },
      { color: "rgba(0, 245, 255, 0.1)", radius: 500, x: width * 0.5, y: height * 0.5, speed: 0.1 },
    ];

    let animationId: number;

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // ===== Draw Nebula =====
      nebulaLayers.forEach(layer => {
        const grad = ctx.createRadialGradient(layer.x, layer.y, 0, layer.x, layer.y, layer.radius);
        grad.addColorStop(0, layer.color);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        // subtle automatic movement
        layer.x += Math.sin(Date.now() * 0.00005) * 0.1;
        layer.y += Math.cos(Date.now() * 0.00005) * 0.1;
      });

      // ===== Draw Stars =====
      stars.forEach(star => {
        // twinkle effect
        star.opacity += star.delta;
        if (star.opacity > 1 || star.opacity < 0.2) star.delta *= -1;

        // vertical movement
        star.y -= star.speed;
        if (star.y < 0) star.y = height;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    // ===== Handle Resize =====
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-20" />;
}
