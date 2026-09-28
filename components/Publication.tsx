'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

export default function Publication() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>RESEARCH & PUBLICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            IEEE Publication
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 font-sans">
            Peer-reviewed research publication documenting the Trust-Chain Escrow Dual-Key Verification architecture.
          </p>
        </div>

        {/* Publication Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-8 border border-primary-500/30 bg-slate-950/80 shadow-xl space-y-6 relative overflow-hidden"
        >
          {/* Subtle background gradient aura */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800/80 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> IEEE Xplore Digital Library
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                Trust-Chain Escrow - Dual-Key Verification System
              </h3>
            </div>

            {/* CTA Button */}
            <a
              href="https://ieeexplore.ieee.org/document/11597641"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-xs transition-all shadow-md shadow-primary-600/30 shrink-0 active:scale-[0.98] group"
            >
              <span>View Publication</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            Published research paper covering the design, implementation, and empirical performance gains of the Trust-Chain Escrow system, focusing on dual-key authentication mechanics, load latency reduction, and 30-day token validation.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs font-mono text-slate-400">
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Next.js
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                TypeScript
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Tailwind CSS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Framer Motion
              </span>
            </div>

            <span className="text-primary-400">Document ID: 11597641</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
