import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export const ProjectCard = ({ project }) => (
    <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between group">
        <div>
            {project.image && (
                <div className="w-full aspect-video bg-zinc-50 mb-4 rounded-lg overflow-hidden border border-zinc-100">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
            )}

            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-[#18181B] font-serif group-hover:text-[#DC2626] transition-colors">
                    {project.title}
                </h3>
                <div className="flex gap-3 text-zinc-400">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#18181B] transition-colors">
                            <Github size={18} />
                        </a>
                    )}
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-[#18181B] transition-colors">
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>
            <p className="text-zinc-600 mb-6 text-sm leading-relaxed">{project.desc}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
                <span key={tech} className="text-[11px] font-medium text-zinc-600 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded">
                    {tech}
                </span>
            ))}
        </div>
    </div>
);