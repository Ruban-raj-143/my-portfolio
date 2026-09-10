import React from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ name, idx = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: idx * 0.04 }}
      whileHover={{ scale: 1.04, y: -2 }}
      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-dark-950/80 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-dark-850 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-200 cursor-default group select-none"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-200" />
      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
}
