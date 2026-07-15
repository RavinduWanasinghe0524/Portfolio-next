"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PERSONAL } from "@/lib/data";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [letterIdx, setLetterIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = PERSONAL.phrases[phraseIdx];
    let timer: ReturnType<typeof setTimeout>;
    if (!deleting && letterIdx < current.length) {
      timer = setTimeout(() => {
        setTyped(current.substring(0, letterIdx + 1));
        setLetterIdx((l) => l + 1);
      }, 85);
    } else if (!deleting && letterIdx === current.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && letterIdx > 0) {
      timer = setTimeout(() => {
        setTyped(current.substring(0, letterIdx - 1));
        setLetterIdx((l) => l - 1);
      }, 40);
    } else if (deleting && letterIdx === 0) {
      timer = setTimeout(() => {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % PERSONAL.phrases.length);
      }, 0);
    }
    return () => clearTimeout(timer);
  }, [letterIdx, deleting, phraseIdx]);

  // Counter animation
  const [count, setCount] = useState(0);
  useEffect(() => {
    let c = 0;
    const iv = setInterval(() => {
      c += 1;
      setCount(c);
      if (c >= 17) clearInterval(iv);
    }, 60);
    return () => clearInterval(iv);
  }, []);

  // Scroll reveal for hero
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 70, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6"
              style={{
                background: "rgba(37,99,235,0.1)",
                border: "1px solid rgba(59,130,246,0.25)",
                color: "#93c5fd",
                fontFamily: "var(--font-geist-mono)",
                animation: "fade-up 0.6s ease forwards",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping-dot" />
              Open to Opportunities
            </div>

            {/* Typing */}
            <p className="text-sm font-medium mb-3 flex items-center gap-1"
              style={{ fontFamily: "var(--font-geist-mono)", color: "#60a5fa" }}>
              {typed}
              <span className="w-[2px] h-[1em] bg-blue-400 animate-blink inline-block ml-0.5" />
            </p>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.06] tracking-tight mb-5"
              style={{ animation: "fade-up 0.8s 0.2s ease both" }}>
              Hi, I&apos;m{" "}
              <span style={{
                background: "linear-gradient(135deg,#93c5fd 0%,#60a5fa 40%,#0ea5e9 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradient-x 4s ease infinite",
              }}>
                Ravindu
              </span>
            </h1>

            {/* Sub */}
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
              style={{ animation: "fade-up 0.8s 0.35s ease both" }}>
              {PERSONAL.bio}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3" style={{ animation: "fade-up 0.8s 0.5s ease both" }}>
              <button onClick={() => scrollTo("#projects")}
                className="px-6 py-3 rounded-full text-sm font-semibold text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.45)",
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 30px rgba(37,99,235,0.6)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.45)")}
              >
                View Projects →
              </button>
              <button onClick={() => scrollTo("#contact")}
                className="px-6 py-3 rounded-full text-sm font-semibold text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.3)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.16)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.08)"; }}
              >
                Get in Touch
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 mt-10 pt-8" style={{ borderTop: "1px solid rgba(59,130,246,0.1)" }}>
              {[
                { val: `${count}+`, label: "Repositories" },
                { val: "3+", label: "Live Projects" },
                { val: "2026", label: "Graduating" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold" style={{
                    fontFamily: "var(--font-geist-sans)",
                    background: "linear-gradient(135deg,#60a5fa,#0ea5e9)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>{s.val}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Profile */}
          <div className="flex justify-center md:justify-end">
            <div className="relative" style={{ width: 260, height: 260 }}>
              {/* Spinning ring */}
              <div className="absolute inset-[-14px] rounded-full animate-spin-slow" style={{
                background: "conic-gradient(#2563eb,#0ea5e9,#4f46e5,#60a5fa,#2563eb)",
                padding: 2,
              }}>
                <div className="w-full h-full rounded-full" style={{ background: "#020408" }} />
              </div>

              {/* Glow behind */}
              <div className="absolute inset-0 rounded-full" style={{
                background: "radial-gradient(circle,rgba(37,99,235,0.35) 0%,transparent 70%)",
                filter: "blur(20px)",
                animation: "pulse-ring 3s ease-in-out infinite",
              }} />

              {/* Avatar */}
              <div className="relative w-full h-full rounded-full overflow-hidden" style={{
                border: "3px solid rgba(255,255,255,0.08)",
                zIndex: 2,
              }}>
                <Image src="/2.jpg" alt="Ravindu Wanasinghe" fill className="object-cover" priority sizes="260px" />
              </div>

              {/* Float badges */}
              <div className="absolute animate-float" style={{
                top: "5%", right: "-38%", zIndex: 10,
                background: "rgba(6,12,24,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: 10,
                padding: "0.45rem 0.8rem",
                fontSize: "0.7rem", fontWeight: 600,
                color: "#93c5fd", whiteSpace: "nowrap",
                animationDelay: "0s",
              }}>
                💻 TypeScript
              </div>
              <div className="absolute animate-float" style={{
                bottom: "8%", left: "-38%", zIndex: 10,
                background: "rgba(6,12,24,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(14,165,233,0.2)",
                borderRadius: 10,
                padding: "0.45rem 0.8rem",
                fontSize: "0.7rem", fontWeight: 600,
                color: "#7dd3fc", whiteSpace: "nowrap",
                animationDelay: "1.5s",
              }}>
                🌐 Next.js
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50">
          <span className="text-xs text-slate-500" style={{ fontFamily: "var(--font-geist-mono)" }}>scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-blue-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}
