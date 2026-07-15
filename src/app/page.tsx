"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Terminal from "@/components/Terminal";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { PERSONAL } from "@/lib/data";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Background canvas effects */}
      <Background />

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Terminal />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-10 text-center bg-slate-950/40">
        <div className="max-w-6xl mx-auto px-6 text-slate-500 text-xs leading-relaxed">
          <p>© {new Date().getFullYear()} <strong>{PERSONAL.name}</strong> • BSc (Hons) Information Systems student, Sabaragamuwa University of Sri Lanka.</p>
          <p className="mt-1 opacity-70">Built with ♥ using Next.js, React, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-11 h-11 rounded-full text-white flex items-center justify-center cursor-pointer transition-all duration-300 z-50 shadow-lg ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(135deg, #2563eb, #0ea5e9)",
          boxShadow: "0 4px 15px rgba(37, 99, 235, 0.4)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(37, 99, 235, 0.55)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(37, 99, 235, 0.4)";
        }}
        aria-label="Scroll to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
