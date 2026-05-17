import React, { useState, useEffect } from "react";
import { DATA } from "./data";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Tag } from "./components/Tag";
import { ProjectCard } from "./components/ProjectCard";
import { Footer } from "./components/Footer";
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleNavigate = (target, isSection) => {
    if (target === 'blogs') {
      setCurrentView('blogs');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (target === 'home') {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (isSection) {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faff] text-slate-800 dark:bg-[#111520] dark:text-gray-200 font-sans transition-colors duration-300 selection:bg-purple-500/30">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} onNavigate={handleNavigate} />

      <main className="max-w-5xl mx-auto px-6 pt-30 pb-20 min-h-[85vh]">

        {/* =========================================
            VIEW 1: BLOGS FEED (FULL ARTICLES INLINE)
        ========================================= */}
        {currentView === 'blogs' && (
          <div className="py-12 animate-in fade-in duration-300">

            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                My Articles
              </h1>
              <p className="text-slate-600 dark:text-gray-400 text-lg">
                Thoughts.
              </p>
            </div>

            <div className="flex flex-col items-center gap-16 max-w-3xl mx-auto">
              {DATA.blogs.map((blog, idx) => (
                <div
                  key={idx}
                  className="w-full bg-white dark:bg-[#1a2035] border border-slate-200 dark:border-white/5 rounded-2xl p-6 md:p-8 shadow-sm"
                >

                  {/* Header: Profile, Name, Date */}
                  <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-white/5 pb-6">
                    <div className="w-12 h-12 rounded-full bg-purple-500 overflow-hidden border border-slate-200 dark:border-white/10 shrink-0">
                      <img src="/mahir.png" alt={DATA.name} className="w-full h-full object-cover object-bottom" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                        {DATA.name}
                      </p>
                      <p className="text-sm text-purple-600 dark:text-purple-400 mt-1 font-medium">
                        {blog.date}
                      </p>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-gray-100 mb-8 leading-tight">
                    {blog.title}
                  </h2>

                  {blog.image && (
                    <div className="w-full mb-8 rounded-xl overflow-hidden bg-slate-50 dark:bg-black/20 flex justify-center border border-slate-100 dark:border-white/5">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="max-w-full h-auto max-h-[600px] object-contain"
                      />
                    </div>
                  )}

                  {/* Full Article Content */}
                  <div className="text-lg text-slate-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {blog.content}
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================
            VIEW 2: MAIN PORTFOLIO (HOME)
        ========================================= */}
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-300">
            <Hero />

            <Section id="about" title="About Me">
              <div className="prose max-w-none text-slate-600 dark:text-gray-400">
                <p className="text-lg leading-relaxed mb-6">{DATA.about}</p>
              </div>
            </Section>

            <Section id="projects" title="Featured Projects">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DATA.projects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </Section>

            <Section id="skills" title="Technical Skills">
              <div className="space-y-6">
                <div>
                  <h3 className="text-slate-800 dark:text-gray-200 font-bold mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {DATA.skills.languages.map((s) => <Tag key={s} text={s} />)}
                  </div>
                </div>
                <div>
                  <h3 className="text-slate-800 dark:text-gray-200 font-bold mb-3">Web Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {DATA.skills.web.map((s) => <Tag key={s} text={s} />)}
                  </div>
                </div>
                <div>
                  <h3 className="text-slate-800 dark:text-gray-200 font-bold mb-3">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {DATA.skills.databases.map((s) => <Tag key={s} text={s} />)}
                  </div>
                </div>
                <div>
                  <h3 className="text-slate-800 dark:text-gray-200 font-bold mb-3">Core Subjects</h3>
                  <div className="flex flex-wrap gap-2">
                    {DATA.skills.core.map((s) => <Tag key={s} text={s} />)}
                  </div>
                </div>
                <div>
                  <h3 className="text-slate-800 dark:text-gray-200 font-bold mb-3">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {DATA.skills.tools.map((s) => <Tag key={s} text={s} />)}
                  </div>
                </div>
              </div>
            </Section>

            <Section id="certifications" title="Certifications">
              <div className="space-y-8">
                {DATA.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-[#1a2035] border border-slate-200 dark:border-white/5 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium text-sm mb-3">
                      {cert.date}
                    </p>
                    <p className="text-slate-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">
                      {cert.desc}
                    </p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-medium text-purple-600 dark:text-purple-400 text-sm hover:text-purple-700 dark:hover:text-purple-300 group"
                      >
                        View Certificate
                        <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Section>

            <div className="py-16 border-b border-slate-200 dark:border-white/10">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 flex items-center gap-2">
                Achievements
              </h2>
              <ul className="space-y-4">
                {DATA.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-gray-400 leading-relaxed">
                    <span className="text-purple-500 dark:text-purple-400 mt-1">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Section id="contact" title="Get In Touch">
              <div className="text-center py-12 bg-white dark:bg-[#1a2035] rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 transition-colors duration-300">
                <p className="text-slate-600 dark:text-gray-400 text-lg mb-6 max-w-xl mx-auto px-4">
                  I am currently looking for full-time opportunities. Whether you have a
                  question or just want to say hi, my inbox is always open.
                </p>
                <p className="text-slate-700 dark:text-gray-300 text-md mb-8">
                  Email:{" "}
                  <a target="_blank" rel="noopener noreferrer" href={DATA.socials.email} className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 hover:underline underline-offset-4 transition-colors">
                    {DATA.emailText}
                  </a>
                </p>
                <div className="flex flex-wrap justify-center gap-4 px-4">
                  <a target="_blank" rel="noopener noreferrer" href={DATA.socials.github} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                    <Github size={18} /> GitHub
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={DATA.socials.linkedin} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={DATA.socials.twitter} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                    <Twitter size={18} /> X
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={DATA.socials.instagram} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                    <Instagram size={18} /> Instagram
                  </a>
                </div>
              </div>
            </Section>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}