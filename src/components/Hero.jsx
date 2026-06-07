import React from "react";
import { DATA } from "../data";
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative flex items-center min-h-[60vh] w-full pt-8 pb-12">
      {/* CSS Animation style injected inline for the pulsing glow effect */}
      <style>{`
        @keyframes pulse-glow {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(220, 38, 38, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(220, 38, 38, 0);
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
            <p className="text-base font-semibold text-[#DC2626] tracking-wide">Hi, I'm</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#18181B] tracking-tight whitespace-nowrap">
              {DATA.name}
            </h1>
            <p className="text-2xl md:text-3xl font-serif text-[#DC2626] font-medium">
              Aspiring Software Engineer
            </p>
          </div>
          
          <p className="text-zinc-600 text-lg max-w-xl leading-relaxed font-sans">
            {DATA.tagline || "Passionate about building scalable web applications and engineering pixel-perfect responsive digital experiences."}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white font-medium px-6 py-3 rounded-md hover:bg-[#B91C1C] transition-colors shadow-sm text-sm"
            >
              View My Work <ArrowRight size={16} />
            </a>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 border border-zinc-300 text-[#18181B] bg-white font-medium px-6 py-3 rounded-md hover:bg-zinc-50 transition-colors shadow-sm text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Circular Avatar & Glowing Status Card */}
        <div className="md:col-span-5 order-1 md:order-2 flex flex-col items-center justify-center gap-6">
          
          {/* Circular Image Frame with smooth scale-up transition on hover */}
          <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] bg-zinc-100 rounded-full overflow-hidden shadow-md border-2 border-zinc-200 flex items-end justify-center transition-transform duration-500 ease-out hover:scale-105 group cursor-pointer">
            <img 
              src="/mahir.png" 
              alt={DATA.name} 
              className="w-[90%] h-[90%] object-cover object-bottom" 
            />
          </div>

          {/* Badge: Open to Opportunity with Real Pulsing Red Glow */}
          <div className="inline-flex items-center gap-3 bg-white border border-zinc-200 px-5 py-2.5 rounded-full shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              {/* Outer pulsing glow wave */}
              <span className="animate-glow absolute inline-flex h-full w-full rounded-full bg-[#DC2626] opacity-75"></span>
              {/* Solid core indicator */}
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DC2626]"></span>
            </span>
            <span className="text-xs font-semibold text-[#18181B] tracking-wide uppercase font-sans">
              Open to opportunities
            </span>
          </div>

        </div>
        
      </div>
    </section>
  );
};