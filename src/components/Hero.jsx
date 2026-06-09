import React from "react";
import { DATA } from "../data";
import { ArrowRight, FileText } from 'lucide-react';

export const Hero = ({ onNavigate }) => {
  return (
    <section className="relative flex items-center min-h-[60vh] w-full pt-8 pb-12">
      <style>{`
        @keyframes pulse-glow {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(217, 119, 87, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(217, 119, 87, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(217, 119, 87, 0);
          }
        }
        .animate-glow {
          animation: pulse-glow 2s infinite;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">

        {/* Left Column: Bio & Text Content */}
        <div className="md:col-span-7 space-y-6 text-left order-2 md:order-1">
          <div className="space-y-2">
            <p className="text-base font-semibold text-[var(--accent)] tracking-wide">Hi, I'm</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[var(--text)] tracking-tight whitespace-nowrap">
              {DATA.name}
            </h1>
            <p className="text-2xl md:text-3xl font-serif text-[var(--accent)] font-medium">
              Aspiring Software Engineer
            </p>
          </div>

          <p className="text-[var(--text-secondary)] text-lg max-w-xl leading-relaxed font-sans">
            {DATA.tagline || "Passionate about building scalable web applications and engineering pixel-perfect responsive digital experiences."}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--bg)] font-medium px-5 py-3 rounded-[10px] hover:brightness-110 transition-all duration-100 shadow-sm text-sm"
            >
              View My Work <ArrowRight size={16} />
            </a>

            <button
              onClick={() => onNavigate('resume', false)}
              className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--text)] bg-[var(--card)] font-medium px-5 py-3 rounded-[10px] hover:bg-[var(--surface)] hover:border-[var(--text)]/20 transition-colors duration-100 shadow-sm text-sm"
            >
              <FileText size={16} className="text-[var(--accent)]" /> Resume
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--text)] bg-[var(--card)] font-medium px-5 py-3 rounded-[10px] hover:bg-[var(--surface)] hover:border-[var(--text)]/20 transition-colors duration-100 shadow-sm text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Circular Avatar & Status Card */}
        <div className="md:col-span-5 order-1 md:order-2 flex flex-col items-center justify-center gap-6">

          <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] bg-[var(--surface)] rounded-full overflow-hidden shadow-md border-2 border-[var(--border)] flex items-end justify-center transition-transform duration-500 ease-out hover:scale-105 group cursor-pointer">
            <img
              src="/mahir.png"
              alt={DATA.name}
              className="w-[90%] h-[90%] object-cover object-bottom"
            />
          </div>

          <div className="inline-flex items-center gap-3 bg-[var(--card)] border border-[var(--border)] px-5 py-2.5 rounded-full shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping [animation-duration:1100ms] absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75 scale-[1.3]"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-xs font-semibold text-[var(--text)] tracking-wide uppercase font-sans">
              Open to opportunities
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};