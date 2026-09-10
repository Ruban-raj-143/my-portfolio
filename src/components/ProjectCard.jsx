import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectVisual from './ProjectVisuals';

export default function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl bg-dark-900/80 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 overflow-hidden"
    >
      {/* Subtle hover backlight */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
            {project.number}
          </span>
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 truncate">
            {project.category}
          </span>
        </div>

        {/* Compact Visual */}
        <div className="mb-4 cursor-pointer" onClick={() => onSelect(project)}>
          <ProjectVisual type={project.visualType} />
        </div>

        {/* Title & Description */}
        <h3
          onClick={() => onSelect(project)}
          className="text-lg font-bold font-display text-white group-hover:text-cyan-400 transition-colors cursor-pointer mb-2"
        >
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/80">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-dark-950 text-slate-300 text-[11px] font-mono border border-slate-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1.5 py-0.5 rounded bg-dark-950 text-slate-400 text-[10px] font-mono border border-slate-800">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
            <span>GitHub</span>
          </a>

          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
          >
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
