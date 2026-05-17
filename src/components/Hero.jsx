import React from "react";
import { DATA } from "../data";
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';

export const Hero = () => {
  const firstName = DATA.name.split(" ")[0];
  const lastName = DATA.name.split(" ").slice(1).join(" ");

  return (
    <section className="relative flex items-center min-h-[60vh] w-full pb-15">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        <div className="order-2 md:order-1 text-left">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-gray-100 leading-[1.05] tracking-tight mb-4">
            {firstName} <br /> {lastName}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-gray-200 mb-4 tracking-wide">
            I am a Full-Stack Developer
          </h2>
          <p className="text-base text-slate-500 dark:text-gray-400 max-w-md leading-relaxed mb-8">
            {DATA.tagline}
          </p>
          <a 
            href="#projects" 
            className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium px-8 py-3.5 rounded-lg shadow-lg hover:shadow-purple-500/30 hover:opacity-90 transition-all duration-300"
          >
            My Works
          </a>
        </div>

        <div className="order-1 md:order-2 flex justify-center lg:justify-end items-center relative">
          <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] bg-[#6c48d3] rounded-full overflow-hidden flex items-end justify-center shadow-2xl">
            <img 
              src="/mahir.png" 
              alt={DATA.name} 
              className="w-[90%] h-[90%] object-cover object-bottom" 
            />
          </div>
        </div>
      </div>

      {/* Floating Panel Right Edge Panel updated with X and Instagram links */}
      <div className="hidden lg:flex flex-col gap-6 absolute -right-12 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500">
        <a href={DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 dark:hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
        <a href={DATA.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 dark:hover:text-white transition-colors">
          <Github size={20} />
        </a>
        <a href={DATA.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 dark:hover:text-white transition-colors">
          <Twitter size={20} />
        </a>
        <a href={DATA.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 dark:hover:text-white transition-colors">
          <Instagram size={20} />
        </a>
      </div>
    </section>
  );
};