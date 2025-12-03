import React from 'react';
import { Github, ExternalLink } from 'lucide-react';


export const ProjectCard = ({ project }) => (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
    <div className="flex justify-between items-start mb-4">
    <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
    <div className="flex gap-3 text-gray-400">
    <a href={project.github} target="_blank" className="hover:text-white"><Github size={20} /></a>
    <a href={project.live} target="_blank" className="hover:text-white"><ExternalLink size={20} /></a>
    </div>
    </div>
    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.desc}</p>
    <div className="flex flex-wrap gap-2">
    {project.stack.map((tech) => (
    <span key={tech} className="text-xs font-mono text-blue-300 bg-blue-900/20 px-2 py-1 rounded">{tech}</span>
    ))}
    </div>
    </div>
);