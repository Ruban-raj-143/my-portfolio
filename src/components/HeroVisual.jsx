import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Code2, Network, Zap, Activity, CheckCircle2, Terminal } from 'lucide-react';

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('neural');
  const [metricValue, setMetricValue] = useState(98.4);

  // Subtle real-time metric jitter to create a live system feel
  useEffect(() => {
    const interval = setInterval(() => {
      setMetricValue((prev) => {
        const delta = (Math.random() - 0.5) * 0.4;
        return Number(Math.min(99.8, Math.max(97.5, prev + delta)).toFixed(2));
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center select-none">
      {/* Ambient background glow layers */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-emerald-500/15 rounded-3xl filter blur-2xl -z-10 opacity-70 animate-pulse-slow pointer-events-none" />

      {/* Main Glassmorphism Telemetry Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-dark-900/85 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle top light bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

        {/* Window Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[11px] font-mono text-slate-400 ml-2 tracking-wide">
              system://ai-core.telemetry
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            INFERENCE ACTIVE
          </div>
        </div>

        {/* Visual Domain Pills */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          <button
            onClick={() => setActiveTab('neural')}
            className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'neural'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/20'
                : 'bg-dark-850/60 text-slate-400 border border-slate-800/60 hover:text-slate-200'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>AI / ML</span>
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'data'
                ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 shadow-sm shadow-indigo-500/20'
                : 'bg-dark-850/60 text-slate-400 border border-slate-800/60 hover:text-slate-200'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Data</span>
          </button>
          <button
            onClick={() => setActiveTab('dev')}
            className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'dev'
                ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm shadow-emerald-500/20'
                : 'bg-dark-850/60 text-slate-400 border border-slate-800/60 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Software</span>
          </button>
        </div>

        {/* Dynamic Graphic Center Canvas */}
        <div className="relative h-56 bg-dark-950/80 rounded-xl border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden">
          {/* Animated Matrix Background Grid */}
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

          {/* SVG Neural Layer Network Graphic */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="neuralGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="neuralGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Neural Synapse Connections */}
            <motion.path
              d="M 50,40 Q 150,20 250,50 T 380,35"
              fill="none"
              stroke="url(#neuralGrad1)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 40 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
            <motion.path
              d="M 50,110 Q 180,140 260,90 T 380,110"
              fill="none"
              stroke="url(#neuralGrad2)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: 50 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
            <motion.path
              d="M 50,180 Q 160,110 270,170 T 380,175"
              fill="none"
              stroke="rgba(99, 102, 241, 0.4)"
              strokeWidth="1.5"
            />
          </svg>

          {/* Foreground Dynamic Telemetry Layer */}
          <div className="relative z-10 flex justify-between items-start">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                Pipeline Architecture
              </span>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-semibold text-white">
                  {activeTab === 'neural' && 'Multi-Layer Perceptron & Vision'}
                  {activeTab === 'data' && 'Feature Tensor ETL & Analytics'}
                  {activeTab === 'dev' && 'Fullstack Async Microservices'}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Accuracy Rate</span>
              <div className="text-sm font-mono font-bold text-cyan-400 flex items-center justify-end gap-1">
                <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>{metricValue}%</span>
              </div>
            </div>
          </div>

          {/* Interactive Node Graph Simulator */}
          <div className="relative z-10 py-3 flex items-center justify-around px-2">
            {/* Layer 1: Input */}
            <div className="flex flex-col items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="w-8 h-8 rounded-lg bg-dark-900 border border-cyan-500/60 shadow-lg shadow-cyan-500/20 flex items-center justify-center text-cyan-400 text-[10px] font-mono font-bold"
              >
                x₁
              </motion.div>
              <span className="text-[9px] font-mono text-slate-400">Input X</span>
            </div>

            {/* Hidden Layers */}
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 rounded-full border border-dashed border-indigo-500/70 p-1 flex items-center justify-center"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold shadow-md">
                  ΣW
                </div>
              </motion.div>
              <span className="text-[9px] font-mono text-slate-400">Weights</span>
            </div>

            {/* Layer 3: Output */}
            <div className="flex flex-col items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="w-8 h-8 rounded-lg bg-dark-900 border border-emerald-500/60 shadow-lg shadow-emerald-500/20 flex items-center justify-center text-emerald-400 text-[10px] font-mono font-bold"
              >
                ŷ
              </motion.div>
              <span className="text-[9px] font-mono text-slate-400">Prediction</span>
            </div>
          </div>

          {/* Real-time Code / Stream Bar */}
          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-300">
            <div className="flex items-center gap-1.5 truncate">
              <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="text-slate-400 truncate">
                {activeTab === 'neural' && 'model.fit(X_train, y_train, epochs=50)'}
                {activeTab === 'data' && 'df.groupby(["intent"]).agg({"confidence": "mean"})'}
                {activeTab === 'dev' && 'uvicorn.run("main:app", host="0.0.0.0", port=8000)'}
              </span>
            </div>
            <span className="text-[10px] text-cyan-400 font-mono ml-2 shrink-0">8.2 ms</span>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
          <div className="p-2.5 rounded-xl bg-dark-950/60 border border-slate-800/70">
            <p className="text-[10px] font-mono text-slate-400 uppercase">Framework</p>
            <p className="text-xs font-semibold text-slate-200 mt-0.5">PyTorch / TF</p>
          </div>
          <div className="p-2.5 rounded-xl bg-dark-950/60 border border-slate-800/70">
            <p className="text-[10px] font-mono text-slate-400 uppercase">Processing</p>
            <p className="text-xs font-semibold text-cyan-400 mt-0.5">Real-Time</p>
          </div>
          <div className="p-2.5 rounded-xl bg-dark-950/60 border border-slate-800/70">
            <p className="text-[10px] font-mono text-slate-400 uppercase">Stack</p>
            <p className="text-xs font-semibold text-indigo-300 mt-0.5">React + Python</p>
          </div>
          <div className="p-2.5 rounded-xl bg-dark-950/60 border border-slate-800/70">
            <p className="text-[10px] font-mono text-slate-400 uppercase">Validation</p>
            <p className="text-xs font-semibold text-emerald-400 mt-0.5 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Passing
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating Accent Capsule - Top Right */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-dark-900/90 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-500/10 text-xs font-mono text-cyan-300 z-20"
      >
        <Zap className="w-3.5 h-3.5 text-cyan-400" />
        <span>Loss: 0.0128</span>
      </motion.div>

      {/* Floating Accent Capsule - Bottom Left */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-4 -left-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-dark-900/90 border border-emerald-500/30 backdrop-blur-md shadow-lg shadow-emerald-500/10 text-xs font-mono text-emerald-300 z-20"
      >
        <Database className="w-3.5 h-3.5 text-emerald-400" />
        <span>128-dim Tensors</span>
      </motion.div>
    </div>
  );
}
