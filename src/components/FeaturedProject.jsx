import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectVisual from './ProjectVisuals';

export default function FeaturedProject({ project, onSelect, isFullWidth = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative rounded-2xl bg-dark-900/80 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden ${
        isFullWidth ? 'w-full' : ''
      }`}
    >
      {/* Ambient background glow on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/10 via-transparent to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Header Bar */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
              {project.number}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              {project.category}
            </span>
          </div>

          {project.badge && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wide bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border border-cyan-500/30">
              {project.badge}
            </span>
          )}
        </div>

        {/* Visual Domain Element */}
        <div className="mb-6 cursor-pointer" onClick={() => onSelect(project)}>
          <ProjectVisual type={project.visualType} isLarge={isFullWidth} />
        </div>

        {/* Title & Description */}
        <h3
          onClick={() => onSelect(project)}
          className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors cursor-pointer mb-3"
        >
          {project.title}
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-slate-800/80">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-dark-950 text-slate-300 text-xs font-mono border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors p-1 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-400"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-white" />
            <span>GitHub</span>
          </a>

          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
          >
            <span>View Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
