import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Terminal, Cpu, Database, Code2, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/skills';
import SkillCard from '../components/SkillCard';

export default function Skills() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming':
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 'ai-data':
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 'ai-engineering':
        return <Sparkles className="w-4 h-4 text-teal-400" />;
      case 'database-cloud':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'dev-tools':
        return <Wrench className="w-4 h-4 text-blue-400" />;
      default:
        return <Code2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden bg-dark-950/60">
      {/* Subtle floating background elements */}
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-600/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Floating subtle data/code ambient dots */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-1/4 w-32 h-32 rounded-full border border-cyan-500/20 pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-24 left-1/3 w-40 h-40 rounded-full border border-indigo-500/20 pointer-events-none"
      />

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
            <Wrench className="w-3.5 h-3.5" />
            <span>Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Tools I use to turn ideas into reality.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Technologies, frameworks, and engineering tools I work with across AI pipelines, software development, and data workflows.
          </p>
        </motion.div>

        {/* Multi-Column Category Cards on Desktop / Single-Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`p-6 sm:p-7 rounded-2xl bg-dark-900/80 border border-slate-800/80 backdrop-blur-md relative flex flex-col justify-between group hover:border-slate-700 transition-all duration-300 ${
                catIdx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-dark-950 border border-slate-800 flex items-center justify-center">
                      {getCategoryIcon(category.id)}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {category.skills.length} tools
                  </span>
                </div>

                {/* Short Descriptive Line */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6 pt-1">
                  {category.description}
                </p>

                {/* Interactive Skill Cards */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <SkillCard
                      key={skill}
                      name={skill}
                      idx={sIdx}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Domain</span>
                <span className="text-cyan-400/80 font-mono">Verified Stack</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
