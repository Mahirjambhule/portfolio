import React, { useState, useEffect } from "react";
import { DATA } from "./data";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Tag } from "./components/Tag";
import { ProjectCard } from "./components/ProjectCard";
import { Footer } from "./components/Footer";
import { Linkedin, Github, Twitter, Instagram, Download, FileText } from "lucide-react";

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setCurrentView('home');

    if (window.location.hash) {
      window.history.replaceState(null, '', ' ');
    }

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    if (currentView !== 'home') return;

    const sectionIds = ['hero', 'projects', 'skills', 'contact'];

    const observerOptions = {
      rootMargin: '-30% 0px -50% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentView]);

  const handleNavigate = (target, isSection) => {
    if (target === 'blogs') {
      setCurrentView('blogs');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (target === 'resume') {
      setCurrentView('resume');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (target === 'home') {
      setCurrentView('home');
      setActiveSection('hero');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (isSection) {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const getDriveId = (url) => {
    const match = url.match(/\/d\/(.+?)\//);
    return match ? match[1] : null;
  };
  const driveId = getDriveId(DATA.socials.resume);

  return (
<div className="min-h-screen text-[#18181B] font-sans antialiased">      <Header currentView={currentView} activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 min-h-[85vh]">

        {/* VIEW 1: RESUME VIEWER */}
        {currentView === 'resume' && (
          <div className="py-8 animate-in fade-in duration-300 h-full flex flex-col">

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#18181B] tracking-tight flex items-center gap-3 font-serif">
                  <FileText size={32} className="text-[#DC2626]" /> My Resume
                </h1>
              </div>

              <a
                href={`https://drive.google.com/uc?export=download&id=${driveId}`}
                className="flex items-center gap-2 bg-[#DC2626] text-white px-6 py-3 rounded-lg shadow-sm hover:bg-[#B91C1C] transition-colors font-medium whitespace-nowrap"
              >
                <Download size={20} /> Download PDF
              </a>
            </div>

            <div className="w-full h-[70vh] rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-white">
              {driveId ? (
                <iframe
                  src={`https://drive.google.com/file/d/${driveId}/preview`}
                  className="w-full h-full border-none"
                  allow="autoplay"
                  title="Resume Preview"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-500">
                  Resume preview not available. Please click download.
                </div>
              )}
            </div>

          </div>
        )}

        {/*VIEW 2: BLOGS FEED (Read-Only)*/}
        {currentView === 'blogs' && (
          <div className="pt-2 pb-12 animate-in fade-in duration-300">

            <div className="mb-2 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#18181B] mb-1 tracking-tight font-serif">
                My Articles
              </h1>
              <p className="text-zinc-600 text-base md:text-lg">
                Thoughts, journeys, and engineering insights.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 max-w-5xl w-full mx-auto px-4 mt-4">
              {DATA.blogs.map((blog, idx) => (
                <div key={idx} className="w-full bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm">

                  <div className="flex items-center gap-4 mb-4 border-b border-zinc-100 pb-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden border border-zinc-200 shrink-0">
                      <img src="/mahir.png" alt={DATA.name} className="w-full h-full object-cover object-bottom" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-[#18181B] leading-tight">{DATA.name}</p>
                      <p className="text-sm text-[#DC2626] mt-1 font-medium">{blog.date}</p>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-[#18181B] mb-4 leading-tight font-serif">
                    {blog.title}
                  </h2>

                  {blog.image && (
                    <div className="w-full mb-5 rounded-xl overflow-hidden bg-zinc-50 flex justify-center border border-zinc-100">
                      <img src={blog.image} alt={blog.title} className="max-w-full h-auto max-h-[500px] object-contain" />
                    </div>
                  )}

                  <div className="text-lg text-zinc-700 leading-relaxed whitespace-pre-wrap">
                    {blog.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/*VIEW 3: MAIN PORTFOLIO (HOME)*/}
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-300 space-y-24">
            <Hero onNavigate={handleNavigate} />

            <Section id="about" title="About Me">
              <div className="prose max-w-none text-zinc-600">
                <p className="text-lg leading-relaxed mb-6">{DATA.about}</p>
              </div>
            </Section>

            <Section id="projects" title="Featured Projects">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {DATA.projects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </Section>

            <Section id="skills" title="Technical Skills">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <h3 className="text-[#18181B] font-bold mb-3 font-serif">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {DATA.skills.languages.map((s) => <Tag key={s} text={s} />)}
                  </div>
                </div>

                <div>
                  <h3 className="text-[#18181B] font-bold mb-3 font-serif">Web Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {DATA.skills.web.map((s) => <Tag key={s} text={s} />)}
                  </div>
                </div>

                <div>
                  <h3 className="text-[#18181B] font-bold mb-3 font-serif">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {DATA.skills.databases.map((s) => <Tag key={s} text={s} />)}
                  </div>
                </div>

                <div>
                  <h3 className="text-[#18181B] font-bold mb-3 font-serif">Core Subjects</h3>
                  <div className="flex flex-wrap gap-2">
                    {DATA.skills.core.map((s) => <Tag key={s} text={s} />)}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-[#18181B] font-bold mb-3 font-serif">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {DATA.skills.tools.map((s) => <Tag key={s} text={s} />)}
                  </div>
                </div>
              </div>
            </Section>

            <Section id="certifications" title="Certifications">
              <div className="space-y-6">
                {DATA.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-zinc-200 shadow-sm rounded-xl p-6 hover:border-[#DC2626]/40 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-[#18181B] mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-[#DC2626] font-medium text-sm mb-3">
                      {cert.date}
                    </p>
                    <p className="text-zinc-600 text-sm mb-3 leading-relaxed">
                      {cert.desc}
                    </p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-medium text-[#DC2626] text-sm hover:text-[#B91C1C] group"
                      >
                        View Certificate
                        <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Section>

            <div className="py-6 border-t border-zinc-200">
              <h2 className="text-2xl font-bold text-[#18181B] mb-6 font-serif">
                Achievements
              </h2>
              <ul className="space-y-4">
                {DATA.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-600 leading-relaxed">
                    <span className="text-[#DC2626] mt-1">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Section id="contact" title="Get In Touch">
              <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-zinc-200 transition-colors duration-300">
                <p className="text-zinc-600 text-lg mb-6 max-w-xl mx-auto px-4">
                  I am currently looking for full-time opportunities. Whether you have a
                  question or just want to say hi, my inbox is always open.
                </p>
                <p className="text-[#18181B] text-md mb-8">
                  Email:{" "}
                  <a target="_blank" rel="noopener noreferrer" href={DATA.socials.email} className="text-[#DC2626] font-medium hover:text-[#B91C1C] hover:underline underline-offset-4 transition-colors">
                    {DATA.emailText}
                  </a>
                </p>
                <div className="flex flex-wrap justify-center gap-4 px-4">
                  <a target="_blank" rel="noopener noreferrer" href={DATA.socials.github} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-700 font-medium hover:bg-zinc-200 transition-colors">
                    <Github size={18} /> GitHub
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={DATA.socials.linkedin} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-700 font-medium hover:bg-zinc-200 transition-colors">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={DATA.socials.twitter} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-700 font-medium hover:bg-zinc-200 transition-colors">
                    <Twitter size={18} /> X
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={DATA.socials.instagram} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-700 font-medium hover:bg-zinc-200 transition-colors">
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