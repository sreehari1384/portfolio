'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  Github,
  PieChart as PieIcon,
  Filter,
  Sparkles,
  Lock,
} from 'lucide-react';
import FeaturedProject from './FeaturedProject';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

// Interactive Recharts mock data for Expense Tracker preview
const chartData = [
  { month: 'Jan', spending: 2400, budget: 3000 },
  { month: 'Feb', spending: 1398, budget: 3000 },
  { month: 'Mar', spending: 2800, budget: 3000 },
  { month: 'Apr', spending: 1890, budget: 3000 },
  { month: 'May', spending: 2390, budget: 3000 },
  { month: 'Jun', spending: 1650, budget: 3000 },
];

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Security' | 'Data Visualization'>('All');

  const filterOptions = [
    { label: 'All', id: 'All' },
    { label: 'Full-Stack', id: 'Full-Stack' },
    { label: 'Security', id: 'Security' },
    { label: 'Data Visualization', id: 'Data Visualization' },
  ];

  // Logic to check project visibility based on filter
  const showFeatured = filter === 'All' || filter === 'Full-Stack' || filter === 'Security';
  const showExpenseTracker = filter === 'All' || filter === 'Full-Stack' || filter === 'Data Visualization';

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-mono">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PROJECT PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Featured Engineering Work
            </h2>
            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-xl font-sans">
              Production-level full-stack applications, secure escrow frameworks, and interactive fintech visualization tools.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-md">
            <span className="text-xs font-mono text-slate-400 px-2 flex items-center gap-1">
              <Filter className="w-3 h-3 text-cyan-400" /> Filter:
            </span>
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  filter === opt.id
                    ? 'bg-primary-600 text-white font-semibold shadow-md shadow-primary-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Display Container */}
        <div className="space-y-12">
          
          {/* Flagship Project Card (Trust-Chain Escrow) */}
          <AnimatePresence mode="wait">
            {showFeatured && (
              <motion.div
                key="featured-project"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <FeaturedProject />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Other Project: Expense Tracker */}
          <AnimatePresence mode="wait">
            {showExpenseTracker && (
              <motion.div
                key="expense-tracker-project"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                  Additional Project Showcase
                </div>

                <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-950/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
                  
                  {/* Left: Info Column */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
                        Full-Stack / Fintech
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 font-mono text-xs">
                        Data Visualization
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-100">
                      Expense Tracker
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      A responsive fintech-style expense tracking dashboard featuring interactive charts, complex UI patterns and cross-device usability.
                    </p>

                    <div className="space-y-2 text-xs text-slate-300 font-sans">
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        Built using Next.js App Router and server-side rendering.
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        Utilized Recharts library for interactive spending breakdown visualization.
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        Designed responsive layouts for seamless cross-device mobile and desktop usability.
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons (Disabled / Coming Soon as required) */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                      <button
                        disabled
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-500 font-medium text-xs cursor-not-allowed"
                        title="Live demo link unavailable in resume"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View Project (Coming Soon)</span>
                      </button>

                      <button
                        disabled
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-500 font-medium text-xs cursor-not-allowed"
                        title="Repository link unavailable in resume"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code (Coming Soon)</span>
                      </button>
                    </div>
                  </div>

                  {/* Right: Recharts Interactive Graphic */}
                  <div className="lg:col-span-6 glass-card rounded-2xl p-4 bg-slate-900/90 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                        <PieIcon className="w-4 h-4" /> Interactive Chart Preview
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">Recharts Engine</span>
                    </div>

                    <div className="h-56 w-full pt-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4} />
                              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                          <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
                          <YAxis stroke="#64748b" fontSize={11} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#0f1420',
                              borderColor: '#1e293b',
                              borderRadius: '8px',
                              fontSize: '11px',
                              color: '#f8fafc',
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="spending"
                            stroke="#22d3ee"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorSpend)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                      <span>Monthly Spend Tracking</span>
                      <span className="text-emerald-400 font-semibold">Interactive Recharts UI</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
