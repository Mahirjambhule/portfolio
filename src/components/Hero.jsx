import React from "react";
import { DATA } from "../data";
import { Linkedin, Github, Twitter, Instagram, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative flex items-center min-h-[60vh] w-full pt-8 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">

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

        <div className="md:col-span-5 order-1 md:order-2 flex flex-col items-center justify-center gap-6">

          <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] bg-zinc-100 rounded-full overflow-hidden shadow-md border-2 border-zinc-200 flex items-end justify-center transition-transform duration-300 hover:scale-105">
            <img
              src="/mahir.png"
              alt="Mahir Jambhule"
              className="w-full h-full object-cover object-bottom"
            />
          </div>

          <div className="flex items-center gap-6 text-zinc-500 bg-zinc-100/50 border border-zinc-200/60 px-5 py-2.5 rounded-full shadow-sm">
            <a href={DATA.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors">
              <Github size={18} />
            </a>
            <a href={DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={DATA.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors">
              <Twitter size={18} />
            </a>
            <a href={DATA.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors">
              <Instagram size={18} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};