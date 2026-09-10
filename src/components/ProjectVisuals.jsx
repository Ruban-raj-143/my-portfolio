import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  FileSearch, 
  UserCheck, 
  Activity, 
  ShieldCheck, 
  Lock, 
  BarChart3, 
  TrendingUp, 
  Layers, 
  Building2, 
  Users, 
  Workflow
} from 'lucide-react';

export default function ProjectVisual({ type, isLarge = false }) {
  switch (type) {
    case 'agent-workflow':
      return (
        <div className={`relative w-full ${isLarge ? 'h-52 sm:h-64' : 'h-40'} rounded-xl bg-dark-950/80 border border-slate-800/80 p-4 flex items-center justify-between overflow-hidden select-none`}>
          <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/10 rounded-full filter blur-2xl pointer-events-none" />

          {/* SVG Animated Connector Path */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 50,60 Q 150,20 260,60 T 450,60"
              fill="none"
              stroke="rgba(6, 182, 212, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            />
          </svg>

          {/* Node 1: Operator / Exception Input */}
          <div className="relative z-10 flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-dark-900 border border-cyan-500/40 shadow-lg shadow-cyan-500/10 flex items-center justify-center text-cyan-400">
              <FileSearch className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono text-slate-400">Pick Exception</span>
          </div>

          {/* Node 2: LangGraph / RAG Orchestrator */}
          <div className="relative z-10 flex flex-col items-center gap-1.5">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl filter blur-sm opacity-50 animate-pulse-slow" />
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-dark-950 border-2 border-cyan-400 flex flex-col items-center justify-center text-white">
                <Bot className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <span className="text-[10px] font-mono font-semibold text-cyan-300">LangGraph Agent</span>
          </div>

          {/* Node 3: Human in the loop validation */}
          <div className="relative z-10 flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-dark-900 border border-emerald-500/40 shadow-lg shadow-emerald-500/10 flex items-center justify-center text-emerald-400">
              <UserCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono text-slate-400">HITL Decision</span>
          </div>
        </div>
      );

    case 'child-risk':
      return (
        <div className={`relative w-full ${isLarge ? 'h-48 sm:h-56' : 'h-36'} rounded-xl bg-dark-950/80 border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden select-none`}>
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800/80 pb-2">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>Developmental Screening</span>
            </div>
            <span className="text-teal-400">Decision Engine</span>
          </div>

          <div className="grid grid-cols-3 gap-2 py-2">
            <div className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-center">
              <p className="text-[10px] font-mono text-slate-400">Milestone</p>
              <p className="text-xs font-semibold text-slate-200 mt-0.5">Tracking</p>
            </div>
            <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-center">
              <p className="text-[10px] font-mono text-teal-400">Risk Level</p>
              <p className="text-xs font-semibold text-teal-300 mt-0.5">Stratified</p>
            </div>
            <div className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-center">
              <p className="text-[10px] font-mono text-slate-400">Referral</p>
              <p className="text-xs font-semibold text-slate-200 mt-0.5">Routed</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
            <span>Workflow Status</span>
            <span className="text-emerald-400 font-mono">Synchronized</span>
          </div>
        </div>
      );

    case 'enterprise-sync':
      return (
        <div className={`relative w-full ${isLarge ? 'h-48 sm:h-56' : 'h-36'} rounded-xl bg-dark-950/80 border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden select-none`}>
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800/80 pb-2">
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Enterprise Hub</span>
            </div>
            <span className="text-indigo-400 font-mono">AI Risk Predictor</span>
          </div>

          <div className="flex items-center justify-around py-3">
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-lg bg-dark-900 border border-slate-700 flex items-center justify-center text-slate-300">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-mono text-slate-400">Employees</span>
            </div>
            <div className="w-6 h-[1px] bg-slate-700" />
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-md">
                <Workflow className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono text-indigo-300 font-semibold">Sync Engine</span>
            </div>
            <div className="w-6 h-[1px] bg-slate-700" />
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-lg bg-dark-900 border border-slate-700 flex items-center justify-center text-slate-300">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-mono text-slate-400">Projects</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
            <span>Governance</span>
            <span className="text-indigo-400">RBAC Enabled</span>
          </div>
        </div>
      );

    case 'iam-governance':
      return (
        <div className="relative w-full h-36 rounded-xl bg-dark-950/80 border border-slate-800/80 p-3.5 flex flex-col justify-between overflow-hidden select-none">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800/80 pb-1.5">
            <div className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Identity Lifecycle</span>
            </div>
            <span className="text-[10px] text-cyan-400">JML Engine</span>
          </div>
          <div className="flex items-center justify-between px-2 text-center">
            <div className="px-2 py-1 rounded bg-dark-900 border border-slate-800 text-[10px] font-mono text-slate-300">
              Joiner
            </div>
            <span className="text-slate-600 text-xs">→</span>
            <div className="px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-semibold">
              Mover
            </div>
            <span className="text-slate-600 text-xs">→</span>
            <div className="px-2 py-1 rounded bg-dark-900 border border-slate-800 text-[10px] font-mono text-slate-300">
              Leaver
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1.5 border-t border-slate-800/80">
            <span>Access Control</span>
            <span className="text-emerald-400">Automated</span>
          </div>
        </div>
      );

    case 'trend-graph':
      return (
        <div className="relative w-full h-36 rounded-xl bg-dark-950/80 border border-slate-800/80 p-3.5 flex flex-col justify-between overflow-hidden select-none">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800/80 pb-1.5">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
              <span>Trend Forecaster</span>
            </div>
            <span className="text-[10px] text-indigo-400">ML Regressor</span>
          </div>

          {/* SVG Trend Wave */}
          <div className="relative h-12 w-full flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 160 40" preserveAspectRatio="none">
              <path
                d="M 0,35 Q 40,5 80,25 T 160,8"
                fill="none"
                stroke="#6366F1"
                strokeWidth="2"
              />
              <circle cx="80" cy="25" r="3" fill="#6366F1" />
              <circle cx="160" cy="8" r="3" fill="#06B6D4" />
            </svg>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1.5 border-t border-slate-800/80">
            <span>Prediction Model</span>
            <span className="text-indigo-300">Pattern Signal</span>
          </div>
        </div>
      );

    case 'security-audit':
      return (
        <div className="relative w-full h-36 rounded-xl bg-dark-950/80 border border-slate-800/80 p-3.5 flex flex-col justify-between overflow-hidden select-none">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800/80 pb-1.5">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Security Benchmarks</span>
            </div>
            <span className="text-[10px] text-emerald-400">CIS Hardening</span>
          </div>

          <div className="flex items-center justify-around py-1">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Controls Audited</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Gaps Evaluated</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1.5 border-t border-slate-800/80">
            <span>Compliance Scope</span>
            <span className="text-emerald-400">Verified CIS</span>
          </div>
        </div>
      );

    case 'ecommerce-data':
      return (
        <div className="relative w-full h-36 rounded-xl bg-dark-950/80 border border-slate-800/80 p-3.5 flex flex-col justify-between overflow-hidden select-none">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800/80 pb-1.5">
            <div className="flex items-center gap-1">
              <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
              <span>Customer Segmentation</span>
            </div>
            <span className="text-[10px] text-amber-400">Analytics Suite</span>
          </div>

          <div className="flex items-end justify-around h-12 px-4 py-1">
            <div className="w-4 bg-slate-800 rounded-t h-4" />
            <div className="w-4 bg-slate-700 rounded-t h-7" />
            <div className="w-4 bg-cyan-500/70 rounded-t h-10" />
            <div className="w-4 bg-indigo-500/80 rounded-t h-8" />
            <div className="w-4 bg-amber-500 rounded-t h-11" />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1.5 border-t border-slate-800/80">
            <span>Data Pipeline</span>
            <span className="text-amber-300">EDA + Clustering</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
