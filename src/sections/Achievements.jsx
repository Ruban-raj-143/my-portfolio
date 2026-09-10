import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Flame, Users2, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;

  const achievementIcons = [
    <Award className="w-5 h-5 text-cyan-400" key="0" />,
    <Flame className="w-5 h-5 text-amber-400" key="1" />,
    <Users2 className="w-5 h-5 text-emerald-400" key="2" />,
    <Cpu className="w-5 h-5 text-indigo-400" key="3" />,
  ];

  return (
    <section id="achievements" className="py-24 lg:py-32 relative overflow-hidden bg-dark-950/60">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none" />

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
            <Trophy className="w-3.5 h-3.5" />
            <span>Achievements & Activities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Always learning. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Always building.
            </span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Beyond coursework, I learn through certifications, workshops, hackathons and hands-on projects.
          </p>
        </motion.div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Connector Line (Desktop/Tablet) */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-500/40 via-indigo-500/30 to-slate-800 pointer-events-none" />

          <div className="space-y-10 sm:space-y-12">
            {achievements.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.number}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center group"
                >
                  {/* Timeline Pulse Node (Positioned on the line) */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-4 sm:top-1/2 sm:-translate-y-1/2 z-20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-dark-950 border-2 border-cyan-400/80 shadow-lg shadow-cyan-500/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Card Container (Left for Even, Right for Odd on Desktop) */}
                  <div
                    className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${
                      isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:ml-auto'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -24 : 24, y: 16 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -3 }}
                      className="p-6 sm:p-7 rounded-2xl bg-dark-900/80 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-md relative transition-all duration-300 shadow-xl hover:shadow-cyan-500/10 text-left"
                    >
                      {/* Top Header Tag */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-dark-950 border border-slate-800 flex items-center justify-center">
                            {achievementIcons[idx % achievementIcons.length]}
                          </div>
                          <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                            {item.number}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-dark-950 border border-slate-800">
                          {item.tag}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
