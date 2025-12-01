"use client";

import { useEffect, useRef } from "react";

/**
 * GalaxyBackgroundUltra
 * ------------------------
 * - Multi-layer stars with depth
 * - Stars twinkle naturally with subtle glow
 * - Nebula layers move & rotate slowly
 * - Random shooting stars
 */
export default function GalaxyBackgroundUltra() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // ===== Stars =====
    const starLayers = [100, 100, 100]; // small, medium, large
    const stars = starLayers.flatMap((count, layerIndex) => 
      Array.from({ length: count }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * (layerIndex + 1) * 0.8 + 0.2,
        speedY: Math.random() * 0.3 + 0.05,
        speedX: Math.random() * 0.1 - 0.05,
        opacity: Math.random() * 0.8 + 0.2,
        delta: Math.random() * 0.02 + 0.01,
        layer: layerIndex + 1
      }))
    );

    // ===== Nebula layers =====
    const nebulaLayers = [
      { color: "rgba(255, 77, 187, 0.12)", radius: 350, x: width * 0.2, y: height * 0.3, speed: 0.1, angle: 0 },
      { color: "rgba(107, 91, 255, 0.1)", radius: 450, x: width * 0.7, y: height * 0.7, speed: 0.08, angle: 0 },
      { color: "rgba(0, 245, 255, 0.08)", radius: 500, x: width * 0.5, y: height * 0.5, speed: 0.06, angle: 0 },
    ];

    // ===== Shooting stars =====
    const shootingStars: { x: number; y: number; length: number; speed: number; opacity: number }[] = [];

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

        layer.angle += 0.0005;
        layer.x += Math.sin(layer.angle) * layer.speed;
        layer.y += Math.cos(layer.angle) * layer.speed;
      });

      // ===== Draw Stars =====
      stars.forEach(star => {
        star.opacity += star.delta;
        if (star.opacity > 1 || star.opacity < 0.2) star.delta *= -1;

        star.y -= star.speedY;
        star.x += star.speedX;
        if (star.y < 0) star.y = height;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.shadowBlur = star.radius * 2;
        ctx.shadowColor = "white";
        ctx.fill();
      });

      // ===== Shooting Stars =====
      if (Math.random() < 0.005 && shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * height / 2,
          length: Math.random() * 80 + 50,
          speed: Math.random() * 5 + 6,
          opacity: 1
        });
      }

      shootingStars.forEach((star, index) => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length, star.y + star.length);
        ctx.strokeStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "white";
        ctx.stroke();

        star.x += star.speed;
        star.y += star.speed;
        star.opacity -= 0.02;
        if (star.opacity <= 0) shootingStars.splice(index, 1);
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
