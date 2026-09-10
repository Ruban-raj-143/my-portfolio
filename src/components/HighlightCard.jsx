import React from 'react';
import { motion } from 'framer-motion';

export default function HighlightCard({ value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
      className="p-5 sm:p-6 rounded-2xl bg-dark-900/70 border border-slate-800/80 backdrop-blur-md relative group hover:border-cyan-500/40 hover:bg-dark-850/70 transition-all duration-300 flex flex-col justify-between"
    >
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-2xl sm:text-3xl font-extrabold font-display bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
          {value}
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 transition-colors" />
      </div>
      <p className="text-xs sm:text-sm font-medium text-slate-300 leading-snug tracking-tight">
        {label}
      </p>
    </motion.div>
  );
}
