import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Layers, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-indigo-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Where I'm building my foundation.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Foundational coursework and technical immersion shaping my approach to artificial intelligence, systems, and engineering.
          </p>
        </motion.div>

        {/* Education Primary Card & Academic Timeline Visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-10 rounded-2xl bg-dark-900/80 border border-slate-800/80 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-2xl"
        >
          {/* Subtle Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-dark-950 border border-slate-800 text-xs font-mono text-cyan-400">
                <Building2 className="w-3.5 h-3.5" />
                <span>Undergraduate Degree</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                  {education.degree}
                </h3>
                <p className="text-sm sm:text-base font-medium text-slate-300 mt-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>{education.institution}</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
                {education.description}
              </p>

              {/* Core Academic Focus Pillars */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Academic Focus Areas:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {education.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-dark-950/70 border border-slate-800/70 flex items-center gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Academic Timeline Diagram */}
            <div className="lg:col-span-5 w-full">
              <div className="p-6 rounded-2xl bg-dark-950/80 border border-slate-800/80 relative overflow-hidden select-none">
                <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800/80 pb-3 mb-5">
                  <span>Academic Trajectory</span>
                  <span className="text-cyan-400 font-semibold">Active Enrollment</span>
                </div>

                {/* Stepped Academic Pipeline */}
                <div className="space-y-4 relative">
                  {/* Step 1: Degree Focus */}
                  <div className="p-3.5 rounded-xl bg-dark-900 border border-cyan-500/40 shadow-lg shadow-cyan-500/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-display font-bold text-sm shrink-0">
                      B.Tech
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400 uppercase">Specialization</p>
                      <p className="text-xs sm:text-sm font-bold text-white">AI & Data Science</p>
                    </div>
                  </div>

                  {/* Arrow Connector */}
                  <div className="flex justify-center text-slate-600 text-xs font-mono">
                    ↓ Systems • Data • ML
                  </div>

                  {/* Step 2: Practical Applied Engineering */}
                  <div className="p-3.5 rounded-xl bg-dark-900 border border-indigo-500/40 shadow-lg shadow-indigo-500/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400 uppercase">Core Discipline</p>
                      <p className="text-xs sm:text-sm font-bold text-white">Software & Intelligent Systems</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Campus Foundation</span>
                  <span className="text-emerald-400 font-mono">Verified Curriculum</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
