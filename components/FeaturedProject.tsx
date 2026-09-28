'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
  Maximize2,
  Code2,
  Lock,
  Layers,
  CheckCircle,
} from 'lucide-react';
import ArchitectureModal from './ArchitectureModal';

export default function FeaturedProject() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Featured Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-6 sm:p-10 border border-primary-500/30 dark:border-primary-500/30 light:border-slate-300 relative overflow-hidden shadow-2xl bg-slate-950/80"
      >
        {/* Glowing aura background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Badges & Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-primary-500/15 border border-primary-500/40 text-primary-400 font-mono text-xs font-semibold">
              FLAGSHIP PROJECT
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs">
              Final Year Project
            </span>
          </div>

          {/* Architecture Modal Trigger */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-cyan-400 hover:text-cyan-300 font-mono text-xs font-medium transition-all shadow-sm group"
          >
            <Maximize2 className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>View Architecture Diagram</span>
          </button>
        </div>

        {/* Title & Description */}
        <div className="space-y-4 pt-6">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100">
            Trust-Chain Escrow — Dual-Key Verification System
          </h3>
          <p className="text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans max-w-3xl">
            A dual-key verification escrow system designed around secure transaction flows and separate buyer/seller portals. Built using Next.js 14 App Router and TypeScript to provide dynamic verification checks, authorization tokens, and low-latency user interfaces.
          </p>

          {/* Technology Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'App Router', 'JWT Tokens'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Case Study Subsections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-slate-800/80 mt-8">
          
          {/* Subsection 1 & 2: Problem & Interactive Solution Flow */}
          <div className="lg:col-span-7 space-y-6">
            {/* Problem */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                <Lock className="w-4 h-4 text-amber-400" /> Subsection 1: Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                Traditional escrow processes lack separate dual-portal verification workflows, leaving participants vulnerable to unauthorized release states and high transition latency during compliance updates.
              </p>
            </div>

            {/* Solution Workflow */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4 text-cyan-400" /> Subsection 2: Solution Architecture Flow
              </h4>
              
              {/* Interactive Architecture Diagram Box */}
              <div
                onClick={() => setModalOpen(true)}
                className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400/60 transition-all cursor-pointer group space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span>Interactive Verification Diagram</span>
                  <span className="text-[10px] text-slate-400 group-hover:text-cyan-300 flex items-center gap-1">
                    Click to expand <Maximize2 className="w-3 h-3" />
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-1 text-center items-center text-[10px] sm:text-xs font-mono pt-1">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">Buyer</div>
                  <div className="text-cyan-400 font-bold text-center">→</div>
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">Transaction</div>
                  <div className="text-cyan-400 font-bold text-center">→</div>
                  <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-700 font-bold">Escrow Release</div>
                </div>
                <div className="text-[11px] text-slate-400 text-center font-mono">
                  Buyer Portal → Transaction → Dual Verification → Seller Portal → Escrow Release
                </div>
              </div>
            </div>

            {/* Resume Technical Key Features */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                <Code2 className="w-4 h-4 text-primary-400" /> Subsection 3: Key Technical Implementations
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Architected a dual-portal B2B dashboard using Next.js 14 App Router and TypeScript.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Implemented secure transaction flows using 30-day expiry JWT transaction tokens.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Added automated verification checks during the escrow payment authorization process.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Optimized client-side asset delivery and responsive form layouts across devices.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Subsection 4: Verified Performance Results Metric Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 font-bold">
              <Zap className="w-4 h-4 text-emerald-400" /> Subsection 4: Verified Performance Results
            </h4>

            {/* Metric Card 1: 30% load reduction */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/30 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400 tracking-tight">
                30%
              </div>
              <div className="text-xs font-bold text-slate-200">Initial Page Load Reduction</div>
              <p className="text-[11px] text-slate-400 font-sans">
                Achieved using Next.js server-side rendering (SSR) and dynamic imports for heavy components.
              </p>
            </div>

            {/* Metric Card 2: 25% transition latency reduction */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-400 tracking-tight">
                25%
              </div>
              <div className="text-xs font-bold text-slate-200">Page Transition Latency Reduction</div>
              <p className="text-[11px] text-slate-400 font-sans">
                Optimized layout recalculation and smooth view transitions using Tailwind CSS and Framer Motion.
              </p>
            </div>

            {/* Metric Card 3: 30 Days JWT validity */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/30 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400 tracking-tight">
                30 Days
              </div>
              <div className="text-xs font-bold text-slate-200">JWT Transaction Token Expiry</div>
              <p className="text-[11px] text-slate-400 font-sans">
                Standardized token lifetime ensuring secure transaction verification windows.
              </p>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Modal Integration */}
      <ArchitectureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
