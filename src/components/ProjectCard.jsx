import React from 'react';

export const ProjectCard = ({ project }) => (
  <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[var(--accent)]/40 transition-all duration-300 flex flex-col justify-between group">
    <div>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-[var(--text)] font-serif group-hover:text-[var(--accent)] transition-colors leading-tight tracking-tight">
          {project.title}
        </h3>
        <div className="flex gap-3 text-[var(--text-secondary)] pl-2 shrink-0">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[var(--text)] transition-colors p-1 rounded-md hover:bg-[var(--surface)]"
              aria-label="GitHub Repository"
            >
              {/* Native Self-Contained GitHub SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          )}
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[var(--text)] transition-colors p-1 rounded-md hover:bg-[var(--surface)]"
              aria-label="Live Demo"
            >
              {/* Native Self-Contained External Link SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          )}
        </div>
      </div>
      <p className="text-[var(--text-secondary)] mb-6 text-sm leading-relaxed text-justify font-sans">{project.desc}</p>
    </div>

    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)]/40">
      {project.stack.map((tech) => (
        <span key={tech} className="text-[10px] font-mono uppercase tracking-tight text-[var(--text-secondary)] bg-[var(--surface)] border border-[var(--border)] px-2 py-0.5 rounded">
          {tech}
        </span>
      ))}
    </div>
  </div>
);