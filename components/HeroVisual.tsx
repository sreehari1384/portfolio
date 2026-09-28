'use client';

import React, { useState } from 'react';
import { Terminal as TerminalIcon, Cpu, ShieldCheck, Layers, Play } from 'lucide-react';

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState<'terminal' | 'system'>('terminal');

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto">
      {/* Glow backdrop effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/30 to-cyan-500/30 rounded-2xl blur-xl opacity-75 animate-pulse-slow"></div>

      {/* Main Container Card */}
      <div className="relative glass-card rounded-2xl overflow-hidden border border-slate-800 dark:border-slate-800 light:border-slate-300 shadow-2xl bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-900 text-slate-100">
        
        {/* Card Header with tabs & window controls */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="ml-2 font-mono text-xs text-slate-400 hidden sm:inline-block">sreehari@dev-station:~</span>
          </div>

          <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('terminal')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-all ${
                activeTab === 'terminal'
                  ? 'bg-primary-600 text-white font-medium shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TerminalIcon className="w-3 h-3" />
              <span>Terminal</span>
            </button>
            <button
              onClick={() => setActiveTab('system')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-all ${
                activeTab === 'system'
                  ? 'bg-cyan-600 text-white font-medium shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3 h-3" />
              <span>System</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: Developer Terminal */}
        {activeTab === 'terminal' ? (
          <div className="p-5 font-mono text-xs leading-relaxed space-y-4 min-h-[320px] flex flex-col justify-between">
            <div className="space-y-3">
              <div>
                <span className="text-cyan-400">$ </span>
                <span className="text-emerald-400">whoami</span>
                <div className="text-slate-200 font-semibold pl-4 mt-0.5 border-l-2 border-primary-500/50">
                  Sree Hari R
                </div>
              </div>

              <div>
                <span className="text-cyan-400">$ </span>
                <span className="text-emerald-400">specialization</span>
                <div className="text-slate-300 pl-4 mt-0.5 border-l-2 border-primary-500/50">
                  Full-Stack Development
                </div>
              </div>

              <div>
                <span className="text-cyan-400">$ </span>
                <span className="text-emerald-400">interests</span>
                <div className="text-slate-300 pl-4 mt-0.5 border-l-2 border-primary-500/50">
                  AI Tools • Cloud • Cybersecurity
                </div>
              </div>

              <div>
                <span className="text-cyan-400">$ </span>
                <span className="text-emerald-400">current_focus</span>
                <div className="text-primary-300 pl-4 mt-0.5 border-l-2 border-primary-500/50">
                  Building modern web applications
                </div>
              </div>
            </div>

            {/* Prompt input indicator */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block"></span>
                <span className="text-slate-500 italic">Ready for commands...</span>
              </div>
              <span className="text-slate-500 text-[10px]">zsh - 80x24</span>
            </div>
          </div>
        ) : (
          /* Tab Content 2: Technical System Architecture Visualization */
          <div className="p-5 text-xs font-mono min-h-[320px] flex flex-col justify-between space-y-4">
            <div className="text-slate-400 flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" /> Web Application Stack
              </span>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                Active Architecture
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center">
              {/* Frontend Node */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-primary-500/40 hover:border-primary-400 transition-colors">
                <div className="text-primary-400 font-bold mb-1">Frontend</div>
                <div className="text-slate-300 text-[11px]">Next.js 14</div>
                <div className="text-slate-400 text-[10px] mt-1">TypeScript & Tailwind</div>
              </div>

              {/* Security & Verification Node */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 transition-colors">
                <div className="text-cyan-400 font-bold mb-1 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-cyan-400" /> Security
                </div>
                <div className="text-slate-300 text-[11px]">JWT Flow</div>
                <div className="text-slate-400 text-[10px] mt-1">Dual-Key Escrow</div>
              </div>

              {/* Cloud & AI Tools Node */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/40 hover:border-emerald-400 transition-colors">
                <div className="text-emerald-400 font-bold mb-1">Cloud / Tooling</div>
                <div className="text-slate-300 text-[11px]">Vercel & Supabase</div>
                <div className="text-slate-400 text-[10px] mt-1">AI-Assisted Dev</div>
              </div>
            </div>

            {/* Architecture Flow indicator */}
            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Response Latency:</span>
              <span className="text-emerald-400 font-semibold">-25% Optimized</span>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800">
              <span>Full-Stack Engineer System</span>
              <span className="text-cyan-400 flex items-center gap-1">
                <Play className="w-3 h-3 fill-cyan-400 text-cyan-400" /> Live Demo Ready
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
