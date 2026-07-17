"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PERSONAL } from "@/lib/data";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [letterIdx, setLetterIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

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

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 70, behavior: "smooth" });
  };

  return (
    <section style={{
      position: "relative",
      minHeight: "100svh",
      display: "flex",
      alignItems: "center",
      paddingTop: "5rem",
      paddingBottom: "4rem",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem", width: "100%" }}>

        {/* ── Two-column grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          alignItems: "center",
        }}
          className="hero-grid"
        >

          {/* ── Left: Text ── */}
          <div style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.4s ease" }}>

            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "0.4rem 1rem", borderRadius: 99, marginBottom: "1.5rem",
              background: "rgba(37,99,235,0.1)", border: "1px solid rgba(59,130,246,0.25)",
              color: "#93c5fd", fontFamily: "var(--font-geist-mono)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.05em",
              animation: "fade-up 0.6s ease forwards",
            }}>
              <span className="animate-ping-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#60a5fa", display: "inline-block" }} />
              Open to Opportunities
            </div>

            {/* Typing subtitle */}
            <p style={{ fontFamily: "var(--font-geist-mono)", color: "#60a5fa", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: 4 }}>
              {typed}
              <span className="animate-blink" style={{ width: 2, height: "1em", background: "#60a5fa", display: "inline-block", marginLeft: 2 }} />
            </p>

            {/* Title */}
            <h1 style={{
              fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: "1.25rem",
              animation: "fade-up 0.8s 0.2s ease both",
            }}>
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

            {/* Bio */}
            <p style={{ color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "480px", animation: "fade-up 0.8s 0.35s ease both" }}>
              {PERSONAL.bio}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", animation: "fade-up 0.8s 0.5s ease both" }}>
              <button
                onClick={() => scrollTo("#projects")}
                style={{
                  padding: "0.75rem 1.5rem", borderRadius: 99, fontSize: "0.875rem", fontWeight: 700,
                  color: "#fff", cursor: "pointer", border: "none",
                  background: "linear-gradient(135deg,#2563eb,#0ea5e9)",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.45)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(37,99,235,0.6)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.45)"; }}
              >
                View Projects →
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                style={{
                  padding: "0.75rem 1.5rem", borderRadius: 99, fontSize: "0.875rem", fontWeight: 700,
                  color: "#fff", cursor: "pointer",
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(59,130,246,0.18)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(59,130,246,0.08)"; e.currentTarget.style.transform = ""; }}
              >
                Get in Touch
              </button>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "2.5rem", marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(59,130,246,0.1)" }}>
              {[
                { val: `${count}+`, label: "Repositories" },
                { val: "3+", label: "Live Projects" },
                { val: "2026", label: "Graduating" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{
                    fontSize: "1.6rem", fontWeight: 800, lineHeight: 1,
                    background: "linear-gradient(135deg,#60a5fa,#0ea5e9)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>{s.val}</div>
                  <div style={{ fontSize: "0.7rem", color: "#475569", marginTop: "0.25rem", fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Avatar ── */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="hero-avatar-col">
            <div style={{ position: "relative", width: 280, height: 280 }}>

              {/* Spinning conic ring */}
              <div
                className="animate-spin-slow"
                style={{
                  position: "absolute",
                  inset: -16,
                  borderRadius: "50%",
                  background: "conic-gradient(#2563eb 0%, #0ea5e9 25%, #4f46e5 50%, #60a5fa 75%, #2563eb 100%)",
                  padding: 2,
                }}
              >
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#020408" }} />
              </div>

              {/* Glow */}
              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)",
                filter: "blur(24px)",
                animation: "pulse-ring 3s ease-in-out infinite",
              }} />

              {/* Avatar */}
              <div style={{
                position: "relative", width: "100%", height: "100%",
                borderRadius: "50%", overflow: "hidden",
                border: "3px solid rgba(255,255,255,0.1)",
                zIndex: 2,
              }}>
                <Image src="/2.jpg" alt="Ravindu Wanasinghe" fill className="object-cover" priority sizes="280px" />
              </div>

              {/* Tech badge — TypeScript (top-right, inside safe zone) */}
              <div
                className="animate-float"
                style={{
                  position: "absolute", top: "4%", right: "-30%", zIndex: 10,
                  background: "rgba(6,12,24,0.92)", backdropFilter: "blur(14px)",
                  border: "1px solid rgba(59,130,246,0.25)", borderRadius: 10,
                  padding: "0.4rem 0.75rem", fontSize: "0.7rem", fontWeight: 700,
                  color: "#93c5fd", whiteSpace: "nowrap", animationDelay: "0s",
                }}
              >
                💻 TypeScript
              </div>

              {/* Tech badge — Next.js (bottom-left, inside safe zone) */}
              <div
                className="animate-float"
                style={{
                  position: "absolute", bottom: "6%", left: "-28%", zIndex: 10,
                  background: "rgba(6,12,24,0.92)", backdropFilter: "blur(14px)",
                  border: "1px solid rgba(14,165,233,0.25)", borderRadius: 10,
                  padding: "0.4rem 0.75rem", fontSize: "0.7rem", fontWeight: 700,
                  color: "#7dd3fc", whiteSpace: "nowrap", animationDelay: "1.5s",
                }}
              >
                🌐 Next.js
              </div>

            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.4,
        }}>
          <span style={{ fontSize: "0.65rem", color: "#64748b", fontFamily: "var(--font-geist-mono)" }}>scroll</span>
          <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, #60a5fa, transparent)" }} />
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-avatar-col {
            justify-content: flex-end !important;
          }
        }
      `}</style>
    </section>
  );
}
