import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    const element = document.createElement("a");
    const file = new Blob([
      `RUBAN RAJ R - RESUME
B.Tech in Artificial Intelligence and Data Science
Institution: Rathinam Technical Campus, Rathinam Global Deemed To Be University
GitHub: ${portfolioData.personal.socials.github}
LinkedIn: ${portfolioData.personal.socials.linkedin}
LeetCode: ${portfolioData.personal.socials.leetcode}

ABOUT:
B.Tech Artificial Intelligence and Data Science student with a strong interest in Artificial Intelligence, Data Engineering and Software Development. Experienced in building practical AI applications, full-stack systems, and data analytics pipelines.

SKILLS:
- Programming: Java, Python, C, JavaScript, SQL
- AI & Data: Machine Learning, Data Analysis, Pandas, Generative AI, LLM Applications
- AI Engineering: LangChain, LangGraph, RAG, Prompt Engineering, FastAPI, Streamlit
- Database & Cloud: MySQL, PostgreSQL, AWS
- Development Tools: Git, GitHub, HTML, CSS, Power BI

FEATURED PROJECTS:
- PickGuard AI: AI-powered Pick Centre Operator Assistant (LangGraph, RAG, FastAPI)
- Nila Arumbu: Integrated Early-Childhood Decision-Support Platform (React, FastAPI, PostgreSQL)
- EnterpriseSync AI: Enterprise Management & AI Risk Analytics Platform
- JML Access Engine: Joiner-Mover-Leaver Automated Access Management Solution
- Trending Content Prediction: ML Trend & Pattern Signal Forecaster
- CIS Audit: Security Configuration & CIS Controls Audit Scanner
- E-Commerce Analytics: Customer Segmentation & Data Analytics Suite

ACTIVITIES & CERTIFICATIONS:
- 20+ Coursera Certificates across technology and related areas
- Smart India Hackathon Participant (2x)
- 5+ Hackathons & Technical Competitions
- 3 IIT Madras Workshops
      `], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Ruban_Raj_R_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => setDownloaded(false), 3000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-dark-900 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-dark-850/50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-accent-cyan">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="resume-modal-title" className="text-base font-semibold text-white">
                    Ruban Raj R — Curriculum Vitae
                  </h3>
                  <p className="text-xs text-slate-400">B.Tech AI & Data Science</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Preview */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300 font-sans">
              <div className="p-4 rounded-xl bg-dark-950/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Verified Profile
                  </span>
                  <h4 className="text-lg font-bold text-white tracking-tight">{portfolioData.personal.name}</h4>
                  <p className="text-slate-400 text-xs mt-0.5">{portfolioData.personal.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-lg shadow-cyan-500/20 transition-all active:scale-95 cursor-pointer"
                  >
                    {downloaded ? <CheckCircle2 className="w-4 h-4 text-white" /> : <Download className="w-4 h-4" />}
                    {downloaded ? "Downloaded!" : "Download CV"}
                  </button>
                </div>
              </div>

              {/* Summary Block */}
              <div>
                <h5 className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-2">
                  Professional Focus
                </h5>
                <p className="text-slate-300 text-xs leading-relaxed bg-dark-850/40 p-3.5 rounded-lg border border-slate-800/50">
                  B.Tech Artificial Intelligence and Data Science student with a strong interest in Artificial Intelligence, Data Engineering and Software Development. Focused on turning ideas into practical projects and solving real-world problems.
                </p>
              </div>

              {/* Core Skill Matrix */}
              <div>
                <h5 className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-2">
                  Core Competencies
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 bg-dark-850/40 rounded-lg border border-slate-800/50">
                    <p className="text-xs font-medium text-slate-200 mb-1">Programming</p>
                    <p className="text-[11px] text-slate-400">Java, Python, C, JavaScript, SQL</p>
                  </div>
                  <div className="p-3 bg-dark-850/40 rounded-lg border border-slate-800/50">
                    <p className="text-xs font-medium text-slate-200 mb-1">AI & Data</p>
                    <p className="text-[11px] text-slate-400">Machine Learning, Data Analysis, Pandas, Generative AI, LLM Applications</p>
                  </div>
                  <div className="p-3 bg-dark-850/40 rounded-lg border border-slate-800/50">
                    <p className="text-xs font-medium text-slate-200 mb-1">AI Engineering</p>
                    <p className="text-[11px] text-slate-400">LangChain, LangGraph, RAG, Prompt Engineering, FastAPI, Streamlit</p>
                  </div>
                  <div className="p-3 bg-dark-850/40 rounded-lg border border-slate-800/50">
                    <p className="text-xs font-medium text-slate-200 mb-1">Cloud & Tools</p>
                    <p className="text-[11px] text-slate-400">MySQL, PostgreSQL, AWS, Git, GitHub, Power BI</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h5 className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-2">
                  Education Background
                </h5>
                <div className="p-3 bg-dark-850/40 rounded-lg border border-slate-800/50 flex justify-between items-start">
                  <div>
                    <p className="text-xs font-semibold text-white">B.Tech — Artificial Intelligence and Data Science</p>
                    <p className="text-[11px] text-slate-400">{portfolioData.education.institution}</p>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">
                    Currently Pursuing
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-dark-850/60">
              <span className="text-xs text-slate-400">
                Ready for AI/Data/Software engineering opportunities
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Save File
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
