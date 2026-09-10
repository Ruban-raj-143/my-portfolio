import React from 'react';
import { motion } from 'framer-motion';
import { projectFilterTabs } from '../data/projects';

export default function ProjectFilter({ activeFilter, onSelectFilter }) {
  return (
    <div className="w-full flex items-center justify-start sm:justify-center mb-12 overflow-x-auto no-scrollbar py-2">
      <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-dark-900/90 border border-slate-800/80 backdrop-blur-md shadow-lg shadow-black/20">
        {projectFilterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectFilter(tab.id)}
              className={`relative px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-colors whitespace-nowrap cursor-pointer select-none ${
                isActive ? 'text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl shadow-md shadow-cyan-500/20"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
