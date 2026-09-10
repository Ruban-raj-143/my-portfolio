import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';
import HeroVisual from '../components/HeroVisual';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      const navOffset = 80;
      const elementPosition = projectsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background Matrix & Radial Glow */}
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-vignette opacity-80 pointer-events-none filter blur-3xl" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-cyan-600/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Hierarchy & Call-to-Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-emerald-500/30 backdrop-blur-md badge-glow">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-medium text-emerald-400 tracking-wide">
                  {personal.statusBadge}
                </span>
              </div>
            </motion.div>

            {/* Name & Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-sm tracking-widest uppercase">
                <Terminal className="w-4 h-4 text-accent-cyan" />
                <span>Hello, World! I am</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
                <span className="block text-slate-100">{personal.name}</span>
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  AI & Data Science Student
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 mt-2 font-sans tracking-normal">
                  Building Intelligent Digital Solutions.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {personal.supportingText}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-slate-950" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-dark-900/90 hover:bg-dark-850 text-slate-200 border border-slate-700/80 hover:border-slate-500 font-semibold text-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Download className="w-4 h-4 text-accent-cyan" />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Social Links & Quick Connect */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                {personal.email && (
                  <a
                    href={`mailto:${personal.email}`}
                    className="p-2.5 rounded-xl bg-dark-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-200"
                    aria-label="Send Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Original AI + Data Visual Element */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
        onClick={handleScrollToProjects}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-cyan-400/80" />
      </motion.div>
    </section>
  );
}
