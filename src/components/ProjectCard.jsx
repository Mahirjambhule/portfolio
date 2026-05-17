import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export const ProjectCard = ({ project }) => (
    <div className="bg-white dark:bg-[#1a2035] border border-slate-200 dark:border-white/5 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100">{project.title}</h3>
            <div className="flex gap-3 text-slate-400 dark:text-gray-500">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    <Github size={20} />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    <ExternalLink size={20} />
                </a>
            </div>
        </div>
        <p className="text-slate-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
                <span key={tech} className="text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 px-3 py-1 rounded-full">
                    {tech}
                </span>
            ))}
        </div>
    </div>
);