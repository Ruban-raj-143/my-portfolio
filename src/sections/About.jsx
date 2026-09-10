import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Target, BookOpen, Hammer } from 'lucide-react';
import HighlightCard from '../components/HighlightCard';
import SystemArchitectureVisual from '../components/SystemArchitectureVisual';

export default function About() {
  const highlights = [
    { value: "20+", label: "Learning Certificates" },
    { value: "8+", label: "Hackathons & Major Events" },
    { value: "3", label: "IIT Madras Workshops" },
    { value: "AI × DATA", label: "Core Focus" },
  ];

  const infoFields = [
    {
      label: "Currently",
      value: "B.Tech — Artificial Intelligence & Data Science",
      icon: <GraduationCap className="w-4 h-4 text-cyan-400" />,
    },
    {
      label: "Focus",
      value: "AI • Data • Software",
      icon: <Target className="w-4 h-4 text-indigo-400" />,
    },
    {
      label: "Learning",
      value: "Data Engineering • Generative AI • LLM Applications",
      icon: <BookOpen className="w-4 h-4 text-emerald-400" />,
    },
    {
      label: "Building",
      value: "Real-world AI-powered projects",
      icon: <Hammer className="w-4 h-4 text-amber-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Building with curiosity. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Learning with purpose.
            </span>
          </h2>
        </motion.div>

        {/* Two-Column Layout (Desktop) / Single-Column (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: About Narrative & Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-slate-800/80 backdrop-blur-md relative space-y-5">
              <div className="inline-block px-3 py-1 rounded-lg bg-dark-950 border border-slate-800 text-xs font-mono text-cyan-400">
                // Introduction & Background
              </div>

              {/* Broken down into readable, elegant paragraphs preserving the exact text */}
              <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed">
                I'm Ruban Raj R, a B.Tech Artificial Intelligence and Data Science student with a strong interest in Artificial Intelligence, Data Engineering and Software Development.
              </p>

              <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/30 via-slate-800 to-transparent" />

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                I enjoy turning ideas into practical projects and exploring how AI and data can be used to solve real-world problems.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                I'm continuously improving my programming, problem-solving and system-building skills through projects, hackathons and hands-on learning.
              </p>

              <div className="pt-3 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-dark-950 border border-slate-800/80 text-xs font-mono text-slate-400">
                  #ArtificialIntelligence
                </span>
                <span className="px-3 py-1 rounded-lg bg-dark-950 border border-slate-800/80 text-xs font-mono text-slate-400">
                  #DataEngineering
                </span>
                <span className="px-3 py-1 rounded-lg bg-dark-950 border border-slate-800/80 text-xs font-mono text-slate-400">
                  #SoftwareDevelopment
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Information Card & Abstract Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Information Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-dark-900/80 border border-slate-800/80 backdrop-blur-md relative">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Current Status & Trajectory
              </h3>

              <div className="space-y-4">
                {infoFields.map((field, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-dark-950/70 border border-slate-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 shrink-0">
                      {field.icon}
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        {field.label}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 text-left sm:text-right">
                      {field.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Abstract Visual Card */}
            <SystemArchitectureVisual />
          </motion.div>
        </div>

        {/* Personal Highlights Row */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Key Highlights
            </span>
            <div className="h-[1px] flex-grow bg-slate-800/80" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, idx) => (
              <HighlightCard
                key={idx}
                value={item.value}
                label={item.label}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
