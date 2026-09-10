import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Code2, Sparkles, Cpu } from 'lucide-react';

export default function SystemArchitectureVisual() {
  return (
    <div className="relative w-full rounded-2xl bg-dark-900/80 border border-slate-800/80 p-5 backdrop-blur-md overflow-hidden select-none">
      {/* Background grid texture */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/10 rounded-full filter blur-2xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
            System Architecture
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          SYNAPSE ACTIVE
        </div>
      </div>

      {/* Interactive System Graph Visualization */}
      <div className="relative h-52 w-full flex items-center justify-center">
        {/* Dynamic SVG Connections */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Connection Line 1: Center (AI) to DATA (Top Left) */}
          <motion.line
            x1="50%"
            y1="50%"
            x2="22%"
            y2="28%"
            stroke="url(#lineGrad1)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 16 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          />

          {/* Connection Line 2: Center (AI) to CODE (Bottom Left) */}
          <motion.line
            x1="50%"
            y1="50%"
            x2="22%"
            y2="72%"
            stroke="url(#lineGrad2)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 16 }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          />

          {/* Connection Line 3: Center (AI) to LLM (Right) */}
          <motion.line
            x1="50%"
            y1="50%"
            x2="78%"
            y2="50%"
            stroke="rgba(99, 102, 241, 0.7)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 16 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />
        </svg>

        {/* Central Node: AI */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="relative z-10 flex flex-col items-center justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl filter blur-md opacity-50 animate-pulse-slow" />
            <div className="relative w-16 h-16 rounded-2xl bg-dark-950 border-2 border-cyan-400/80 shadow-xl flex flex-col items-center justify-center p-1">
              <Brain className="w-5 h-5 text-cyan-400 mb-0.5" />
              <span className="text-xs font-mono font-bold text-white tracking-widest">
                AI
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-cyan-300 mt-1.5 font-semibold">
            CORE ENGINE
          </span>
        </motion.div>

        {/* Satellite Node 1: DATA (Top Left) */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] sm:left-[12%] top-[12%] z-10 flex flex-col items-center"
        >
          <div className="w-12 h-12 rounded-xl bg-dark-950 border border-teal-500/50 shadow-lg shadow-teal-500/10 flex flex-col items-center justify-center p-1">
            <Database className="w-4 h-4 text-teal-400 mb-0.5" />
            <span className="text-[10px] font-mono font-bold text-teal-300">
              DATA
            </span>
          </div>
        </motion.div>

        {/* Satellite Node 2: CODE (Bottom Left) */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute left-[8%] sm:left-[12%] bottom-[12%] z-10 flex flex-col items-center"
        >
          <div className="w-12 h-12 rounded-xl bg-dark-950 border border-emerald-500/50 shadow-lg shadow-emerald-500/10 flex flex-col items-center justify-center p-1">
            <Code2 className="w-4 h-4 text-emerald-400 mb-0.5" />
            <span className="text-[10px] font-mono font-bold text-emerald-300">
              CODE
            </span>
          </div>
        </motion.div>

        {/* Satellite Node 3: LLM (Right) */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-[8%] sm:right-[12%] top-[34%] z-10 flex flex-col items-center"
        >
          <div className="w-12 h-12 rounded-xl bg-dark-950 border border-indigo-500/50 shadow-lg shadow-indigo-500/10 flex flex-col items-center justify-center p-1">
            <Sparkles className="w-4 h-4 text-indigo-400 mb-0.5" />
            <span className="text-[10px] font-mono font-bold text-indigo-300">
              LLM
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Subtitle / Moniker */}
      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Connected Pipeline</span>
        <span className="text-cyan-400 font-semibold">AI + Data + Software</span>
      </div>
    </div>
  );
}
