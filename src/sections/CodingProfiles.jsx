import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function CodingProfiles() {
  const { developerProfiles } = portfolioData;

  const getProfileIcon = (id) => {
    switch (id) {
      case 'github':
        return <GithubIcon className="w-5 h-5" />;
      case 'linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'leetcode':
        return <LeetCodeIcon className="w-5 h-5" />;
      default:
        return <Terminal className="w-5 h-5" />;
    }
  };

  return (
    <section id="developer-profiles" className="py-24 lg:py-32 relative overflow-hidden bg-dark-950/60">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none" />

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
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Profiles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Where I code, build and share.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Explore my active coding repositories, professional milestones, and continuous algorithmic problem solving.
          </p>
        </motion.div>

        {/* 3 Modern Glass Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {developerProfiles.map((profile, idx) => (
            <motion.a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl bg-dark-900/80 border border-slate-800/80 hover:border-cyan-500/50 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/15 overflow-hidden select-none"
            >
              {/* Subtle dynamic background glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Platform Icon & Moniker */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-dark-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:border-cyan-500/40 transition-all duration-200">
                    {getProfileIcon(profile.id)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded-lg bg-dark-950 border border-slate-800">
                    Platform 0{idx + 1}
                  </span>
                </div>

                {/* Name & Description */}
                <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {profile.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {profile.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs sm:text-sm font-semibold text-cyan-400 group-hover:text-cyan-300">
                <span>{profile.buttonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
