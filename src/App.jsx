import React, { useState, useEffect, useRef } from "react";
import { DATA } from "./data";

import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { ProjectCard } from "./components/ProjectCard";
import { Header } from './components/Header';
import { FileText } from "lucide-react";

const SKILL_LOGOS = {
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Postman": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Vercel": "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
  "Render": "https://www.vectorlogo.zone/logos/render/render-icon.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Mongoose": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png",
  "MongoDB Atlas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "SQL": "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
  "DSA": "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-network-web-development-flatart-icons-outline-flatarticons.png",
  "OOPs": "https://img.icons8.com/ios/50/000000/object-oriented-programming.png",
  "OS": "https://img.icons8.com/ios/50/000000/operating-system.png",
  "DBMS": "https://img.icons8.com/external-isometric-pro-cyber-homonculus/68/000000/external-database-cloud-hosting-isometric-pro-cyber-homonculus.png",
  "CN": "https://img.icons8.com/ios/50/000000/computer-network.png"
};

const ALL_SKILLS = Object.values(DATA.skills).flat();

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#/blogs') return 'blogs';
    if (hash === '#/resume') return 'resume';
    return 'home';
  });

  const [currentSection, setCurrentSection] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#/blogs') return 'blogs';
    if (hash === '#/resume') return 'resume';
    return 'home';
  });

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-darkMode');
    return savedTheme !== null ? JSON.parse(savedTheme) : true;
  });
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);

  const isNavClickRef = useRef(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const currentHash = window.location.hash;

    if (currentHash && currentHash !== '#/' && currentHash !== '#/blogs' && currentHash !== '#/resume') {
      const cleanSection = currentHash.replace('#', '');
      setCurrentView('home');
      setCurrentSection(cleanSection);

      setTimeout(() => {
        const el = document.getElementById(cleanSection);
        if (el) {
          const targetOffset = el.offsetTop + 15;
          window.scrollTo({ top: targetOffset, behavior: 'smooth' });
        }
      }, 150);
    }

    const syncViewWithHash = () => {
      const hash = window.location.hash;
      
      if (hash === '#/blogs') {
        setCurrentView('blogs');
        setCurrentSection('blogs');
        window.scrollTo({ top: 0 }); 
      } else if (hash === '#/resume') {
        setCurrentView('resume');
        setCurrentSection('resume');
        window.scrollTo({ top: 0 });
      } else if (hash === '#/' || !hash) {
        setCurrentView('home');
        setCurrentSection('home');
        window.scrollTo({ top: 0 });
      } else {
        const targetSection = hash.replace('#', '');
        setCurrentView('home');
        setCurrentSection(targetSection);
        
        setTimeout(() => {
          const el = document.getElementById(targetSection);
          if (el) {
            const targetOffsetTop = el.offsetTop + 15;
            window.scrollTo({ top: targetOffsetTop });
          }
        }, 0);
      }
    };

    window.addEventListener('hashchange', syncViewWithHash);
    return () => window.removeEventListener('hashchange', syncViewWithHash);
  }, []);

  useEffect(() => {
    if (currentView !== 'home') return;

    const sectionIds = ['hero', 'about', 'projects', 'skills', 'certifications', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      if (isNavClickRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'hero') {
            setCurrentSection('home');
          } else {
            setCurrentSection(entry.target.id);
          }
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
    setCurrentSection(target);

    if (target === 'blogs') {
      const originalScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      
      setCurrentView('blogs');
      window.location.hash = '/blogs';
      window.scrollTo(0, 0);
      
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
      });
    } else if (target === 'resume') {
      const originalScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      
      setCurrentView('resume');
      window.location.hash = '/resume';
      window.scrollTo(0, 0);
      
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
      });
    } else if (target === 'home') {
      const originalScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      
      setCurrentView('home');
      window.location.hash = '/';
      window.scrollTo(0, 0);
      
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
      });
    } else if (isSection) {
      window.location.hash = target;
      isNavClickRef.current = true;

      const performScroll = () => {
        const actualTarget = target === 'home' ? 'hero' : target;
        const el = document.getElementById(actualTarget);
        if (el) {
          const targetOffsetTop = el.offsetTop + 15; 
          window.scrollTo({ top: targetOffsetTop, behavior: 'smooth' }); 
          setTimeout(() => {
            isNavClickRef.current = false;
          }, 800);
        } else {
          isNavClickRef.current = false;
        }
      };

      if (currentView !== 'home') {
        const originalScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        
        setCurrentView('home');
        window.scrollTo(0, 0);
        
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
        
        setTimeout(performScroll, 50);
      } else {
        performScroll();
      }
    }
  };
  
  const getDriveId = (url) => {
    const match = url?.match(/\/d\/(.+?)\//);
    return match ? match[1] : null;
  };
  const driveId = getDriveId(DATA.socials.resume);

  return (
    <div className="min-h-screen w-full bg-[var(--bg)] text-[var(--text)] font-sans antialiased transition-colors duration-200 flex flex-col">
      {/* GLOBAL HEADER NAV */}
      <Header
        onNavigate={handleNavigate}
        currentView={currentView}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="w-full pt-10 flex-1 flex flex-col justify-between">
        <div className="w-full max-w-5xl mx-auto px-6 md:px-12 pt-4 md:pt-12 pb-24 flex-1 min-h-[75vh]">

          {/* VIEW 1: RESUME CONTROLLER */}
          {currentView === 'resume' && (
            <div className="py-12 md:py-4 animate-in fade-in duration-300 w-full flex flex-col min-h-screen">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 w-full">
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] tracking-tight flex items-center gap-3 font-serif">
                  <FileText size={28} className="text-[var(--accent)]" /> My Resume
                </h1>
                <a
                  href={`https://drive.google.com/uc?export=download&id=${driveId}`}
                  className="flex items-center gap-2 bg-[var(--accent)] text-[var(--bg)] px-5 py-2.5 rounded-lg shadow-sm hover:opacity-90 transition-opacity font-medium text-xs font-mono uppercase tracking-wider"
                >
                  Download PDF
                </a>
              </div>
              <div className="w-full h-[65vh] md:h-[70vh] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm bg-[var(--card)]">
                {driveId ? (
                  <iframe src={`https://drive.google.com/file/d/${driveId}/preview`} className="w-full h-full border-none" title="Resume Frame Viewer"></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[var(--text-secondary)] font-mono text-xs">Attachment reference failed.</div>
                )}
              </div>
            </div>
          )}

          {/* VIEW 2: LOG ARTICLES CONTAINER */}
          {currentView === 'blogs' && (
            <div className="py-12 md:py-2 animate-in fade-in duration-300 w-full min-h-screen">
              <div className="mb-7 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-2 tracking-tight font-serif">My Articles</h1>
                <p className="text-[var(--text-secondary)] text-base md:text-lg">Thoughts, journeys, and engineering insights.</p>
              </div>
              <div className="flex flex-col items-center gap-8 w-full max-w-3xl mx-auto mt-4">
                {DATA.blogs.map((blog, idx) => (
                  <div key={idx} className="w-full bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-4 border-b border-[var(--border)] pb-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--surface)] overflow-hidden border border-[var(--border)] shrink-0">
                        <img src="/mahir.png" alt={DATA.name} className="w-full h-full object-cover object-bottom" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-[var(--text)] leading-tight">{DATA.name}</p>
                        <p className="text-sm text-[var(--accent)] mt-1 font-medium font-mono">{blog.date}</p>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4 leading-tight font-serif">{blog.title}</h2>
                    {blog.image && (
                      <div className="w-full mb-5 rounded-xl overflow-hidden bg-[var(--surface)] flex justify-center border border-[var(--border)]">
                        <img src={blog.image} alt={blog.title} className="max-w-full h-auto max-h-[400px] object-contain" />
                      </div>
                    )}
                    <div className="text-base text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap text-justify">{blog.content}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 3: CORE HOME INTERFACE DISPLAY */}
          {currentView === 'home' && (
            <div className="w-full flex flex-col animate-in fade-in duration-300 transition-all">

              <div id="hero" className="min-h-[calc(100vh-5rem)] flex items-center justify-center w-full">
                <div className="w-full py-6 md:py-12">
                  <Hero onNavigate={handleNavigate} />
                </div>
              </div>

              <div id="about" className="pt-30 w-full">
                <Section title="About Me">
                  <div className="text-[var(--text-secondary)] text-lg leading-relaxed w-full space-y-6">
                    <p className="text-justify font-sans">{DATA.about}</p>
                    <div className="border-t border-[var(--border)]/40 pt-4">
                      <ul className="space-y-2 text-sm font-sans">
                        <li className="flex items-start gap-3">
                          <span className="text-[var(--accent)] mt-1.5 font-mono text-xs">▹</span>
                          <span className="text-[var(--text-secondary)]">
                            <strong className="text-[var(--text)] font-mono uppercase text-xs tracking-wider mr-1">Coding Profiles:</strong>
                            LeetCode (300+ Solved, Max 1300+) | GeeksforGeeks (100+ Solved) | Codeforces (900+) | CodeChef (1100+)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Section>
              </div>

              <Section id="projects" title="Featured Projects" className="w-full pt-30">
                <div className="w-full flex justify-end mb-6 -mt-14">
                  <button
                    onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] hover:opacity-80 transition-opacity font-semibold cursor-pointer group"
                  >
                    {isProjectsExpanded ? "Show Less" : "See All Projects"}
                    <span className={`transition-transform duration-200 ${isProjectsExpanded ? "-rotate-90" : "group-hover:translate-x-1"}`}>→</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {DATA.projects.slice(0, isProjectsExpanded ? DATA.projects.length : 4).map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                  ))}
                </div>
              </Section>

              <Section id="skills" title="Tech Stack Capability" className="w-full pt-30">
                <div className="w-full border border-[var(--border)] bg-[var(--card)] rounded-2xl p-6 md:p-8 shadow-xs relative overflow-hidden">
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                    {ALL_SKILLS.map((skill) => {
                      let hoverStyles = "hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/40 hover:shadow-[0_0_15px_rgba(217,119,87,0.15)]";

                      switch (skill) {
                        case "React.js":
                        case "VS Code":
                        case "Vercel":
                        case "CN":
                          hoverStyles = "hover:bg-[#61dafb]/10 hover:border-[#61dafb]/40 hover:shadow-[0_0_15px_rgba(97,218,251,0.15)]";
                          break;
                        case "Node.js":
                        case "MongoDB":
                        case "MongoDB Atlas":
                          hoverStyles = "hover:bg-[#439934]/10 hover:border-[#439934]/40 hover:shadow-[0_0_15px_rgba(67,153,52,0.15)]";
                          break;
                        case "JavaScript":
                          hoverStyles = "hover:bg-[#f7df1e]/10 hover:border-[#f7df1e]/40 hover:shadow-[0_0_15px_rgba(247,223,30,0.15)]";
                          break;
                        case "C++":
                        case "Render":
                          hoverStyles = "hover:bg-[#00599c]/10 hover:border-[#00599c]/40 hover:shadow-[0_0_15px_rgba(0,89,156,0.15)]";
                          break;
                        case "C":
                          hoverStyles = "hover:bg-[#a8b9cc]/10 hover:border-[#a8b9cc]/40 hover:shadow-[0_0_15px_rgba(168,185,204,0.15)]";
                          break;
                        case "Python":
                          hoverStyles = "hover:bg-[#3776ab]/10 hover:border-[#3776ab]/40 hover:shadow-[0_0_15px_rgba(55,118,171,0.15)]";
                          break;
                        case "HTML":
                          hoverStyles = "hover:bg-[#e34c26]/10 hover:border-[#e34c26]/40 hover:shadow-[0_0_15px_rgba(227,76,38,0.15)]";
                          break;
                        case "CSS":
                          hoverStyles = "hover:bg-[#264de4]/10 hover:border-[#264de4]/40 hover:shadow-[0_0_15px_rgba(38,77,228,0.15)]";
                          break;
                        case "Tailwind CSS":
                          hoverStyles = "hover:bg-[#06b6d4]/10 hover:border-[#06b6d4]/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]";
                          break;
                        case "Git":
                          hoverStyles = "hover:bg-[#f05032]/10 hover:border-[#f05032]/40 hover:shadow-[0_0_15px_rgba(240,80,50,0.15)]";
                          break;
                        case "Postman":
                          hoverStyles = "hover:bg-[#ff6c37]/10 hover:border-[#ff6c37]/40 hover:shadow-[0_0_15px_rgba(255,108,55,0.15)]";
                          break;
                        case "Express.js":
                        case "Mongoose":
                        case "GitHub":
                          hoverStyles = darkMode
                            ? "hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            : "hover:bg-black/5 hover:border-black/30 hover:shadow-[0_0_15px_rgba(0,0,0,0.05)]";
                          break;
                        case "SQL":
                        case "DBMS":
                          hoverStyles = "hover:bg-[#00758f]/10 hover:border-[#00758f]/40 hover:shadow-[0_0_15px_rgba(0,117,143,0.15)]";
                          break;
                        case "DSA":
                        case "OOPs":
                        case "OS":
                          hoverStyles = "hover:bg-[var(--accent-blue)]/10 hover:border-[var(--accent-blue)]/40 hover:shadow-[0_0_15px_rgba(106,155,204,0.15)]";
                          break;
                      }

                      return (
                        <div
                          key={skill}
                          className={`flex flex-col items-center justify-center p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 text-center relative overflow-hidden cursor-default group transition-all duration-150 ${hoverStyles}`}
                        >
                          <div className="w-10 h-10 flex items-center justify-center mb-2.5 shrink-0">
                            {SKILL_LOGOS[skill] ? (
                              <img
                                src={SKILL_LOGOS[skill]}
                                alt={`${skill} logo`}
                                className={`w-7 h-7 object-contain transition-transform duration-150 group-hover:scale-105 ${darkMode && skill === 'Express.js' ? 'invert opacity-80' : ''}`}
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'block';
                                }}
                              />
                            ) : null}
                            <span className="hidden font-mono font-bold text-xs text-[var(--accent)]">⚙</span>
                          </div>
                          <span className="text-[11px] font-mono tracking-tight text-[var(--text-secondary)] group-hover:text-[var(--text)] transition-colors duration-150 line-clamp-1">
                            {skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Section>

              <Section id="certifications" title="Certifications" className="w-full pt-30">
                <div className="space-y-6 w-full">
                  {DATA.certifications.map((cert, idx) => (
                    <div key={idx} className="bg-[var(--card)] border border-[var(--border)] shadow-sm rounded-xl p-6 hover:border-[var(--accent)]/40 transition-all duration-300">
                      <h3 className="text-2xl font-bold text-[var(--text)] mb-1 font-serif tracking-tight">{cert.title}</h3>
                      <p className="text-[var(--accent)] font-medium text-xs mb-3 font-mono uppercase">{cert.date}</p>
                      <p className="text-[var(--text-secondary)] text-sm mb-3 leading-relaxed text-justify">{cert.desc}</p>
                      {cert.link && (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-medium text-[var(--accent)] text-sm hover:opacity-80 group font-mono text-xs uppercase tracking-wider">
                          View Certificate <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="contact" title="Get In Touch" className="w-full pt-30 pb-0">
                <div className="text-center py-12 bg-[var(--card)] rounded-2xl shadow-sm border border-[var(--border)] w-full">
                  <p className="text-[var(--text-secondary)] text-lg mb-6 max-w-xl mx-auto px-4 font-sans">
                    I am currently looking for full-time opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                  </p>
                  <p className="text-[var(--text)] text-md mb-8 font-mono text-xs uppercase tracking-wider">
                    Email: <a href={DATA.socials.email} className="text-[var(--accent)] font-medium hover:underline underline-offset-4 normal-case font-sans text-base">{DATA.emailText}</a>
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 px-4 font-mono text-xs uppercase tracking-wider">
                    {Object.entries(DATA.socials)
                      .filter(([key]) => key !== 'email' && key !== 'resume')
                      .map(([key, url]) => {
                        const displayName = key.toLowerCase() === 'twitter' ? 'X' : key;
                        let platformIcon = null;
                        const normalKey = key.toLowerCase();

                        if (normalKey === 'linkedin') {
                          platformIcon = (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)]">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          );
                        } else if (normalKey === 'github') {
                          platformIcon = (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)]">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          );
                        } else if (normalKey === 'twitter' || normalKey === 'x') {
                          platformIcon = (
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="text-[var(--accent)]" viewBox="0 0 16 16">
                              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.055-4.425 5.055H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>
                          );
                        } else if (normalKey === 'instagram') {
                          platformIcon = (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)]">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                          );
                        } else {
                          platformIcon = (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)]">
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                            </svg>
                          );
                        }

                        return (
                          <a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--surface)] text-[var(--text-secondary)] font-medium hover:text-[var(--text)] hover:bg-[var(--border)] transition-all border border-[var(--border)]"
                          >
                            {platformIcon}
                            <span>{displayName}</span>
                          </a>
                        );
                      })}
                  </div>
                </div>
              </Section>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <footer className="w-full text-center py-7 text-sm text-[var(--text-secondary)] border-t border-[var(--border)] bg-[var(--surface)]/60 px-6 md:px-12 shrink-0">
          <div className="max-w-5xl mx-auto w-full">
            <p>© {new Date().getFullYear()} {DATA.name} • Built with ❤️ and coffee.</p>
          </div>
        </footer>

      </main>
    </div>
  );
}