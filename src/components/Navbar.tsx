"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const NAV = [
  { label: "About",     href: "#about" },
  { label: "Skills",    href: "#skills" },
  { label: "Projects",  href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(total > 0 ? (y / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 70;
      window.scrollTo({ top: (el as HTMLElement).offsetTop - offset, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[9999] transition-all"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #2563eb, #0ea5e9, #4f46e5)",
        }}
      />

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          background: scrolled ? "rgba(2,4,8,0.92)" : "rgba(2,4,8,0.6)",
          borderBottom: scrolled
            ? "1px solid rgba(59,130,246,0.2)"
            : "1px solid rgba(59,130,246,0.06)",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Ravindu
            <span style={{ background: "linear-gradient(135deg,#60a5fa,#0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              .dev
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button
                key={n.label}
                onClick={() => handleNav(n.href)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 relative group"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "linear-gradient(90deg,#60a5fa,#0ea5e9)" }}
                />
              </button>
            ))}
          </nav>

          {/* GitHub button */}
          <a
            href="https://github.com/RavinduWanasinghe0524"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-sm font-semibold px-4 py-1.5 rounded-full text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.35)",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.2)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 18px rgba(59,130,246,0.3)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.1)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open
                ? <path d="M18 6L6 18M6 6l12 12" />
                : <path d="M3 12h18M3 6h18M3 18h18" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t px-6 py-4 space-y-1" style={{ borderColor: "rgba(59,130,246,0.15)", background: "rgba(2,4,8,0.96)" }}>
            {NAV.map((n) => (
              <button key={n.label} onClick={() => handleNav(n.href)}
                className="block w-full text-left text-slate-300 hover:text-white py-2.5 text-sm font-medium border-b transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                {n.label}
              </button>
            ))}
            <a href="https://github.com/RavinduWanasinghe0524" target="_blank" rel="noopener noreferrer"
              className="block text-blue-400 font-semibold py-2.5 text-sm" onClick={() => setOpen(false)}>
              GitHub ↗
            </a>
          </div>
        )}
      </header>
    </>
  );
}
