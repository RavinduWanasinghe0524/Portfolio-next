"use client";
import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    type Dot = {
      x: number; y: number; r: number;
      vx: number; vy: number;
      color: string; opacity: number;
    };

    const colors = ["rgba(59,130,246,", "rgba(14,165,233,", "rgba(79,70,229,"];
    const count = Math.min(65, Math.floor((window.innerWidth * window.innerHeight) / 20000));
    const dots: Dot[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas!.width,
      y: Math.random() * canvas!.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.35 + 0.1,
    }));

    let raf: number;
    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas!.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas!.height) d.vy *= -1;
        ctx.fillStyle = d.color + d.opacity + ")";
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(59,130,246,${0.1 - dist / 1000})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else draw(); };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <>
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none" />
      {/* Animated orbs */}
      <div className="fixed inset-0 -z-15 pointer-events-none overflow-hidden" style={{ filter: "blur(90px)", opacity: 0.5 }}>
        <div style={{
          position: "absolute", borderRadius: "50%",
          width: "55vw", height: "55vw", top: "-10%", left: "-10%",
          background: "radial-gradient(circle, rgba(37,99,235,0.6) 0%, transparent 70%)",
          animation: "drift-1 28s infinite alternate ease-in-out",
        }} />
        <div style={{
          position: "absolute", borderRadius: "50%",
          width: "50vw", height: "50vw", bottom: "-10%", right: "-10%",
          background: "radial-gradient(circle, rgba(14,165,233,0.5) 0%, transparent 70%)",
          animation: "drift-2 33s infinite alternate ease-in-out",
        }} />
        <div style={{
          position: "absolute", borderRadius: "50%",
          width: "35vw", height: "35vw", top: "40%", left: "50%",
          background: "radial-gradient(circle, rgba(79,70,229,0.35) 0%, transparent 70%)",
          animation: "drift-3 22s infinite alternate ease-in-out",
        }} />
      </div>
      {/* Noise overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{
        zIndex: 44, opacity: 0.025,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />
    </>
  );
}
