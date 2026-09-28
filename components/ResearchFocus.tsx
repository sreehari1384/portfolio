'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Clock, Sparkles } from 'lucide-react';

export default function ResearchFocus() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/60">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-4"
        >
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-slate-100">
                Research & Current Focus
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/60 text-amber-300 font-mono text-xs">
              <Clock className="w-3 h-3 text-amber-400" /> Research details coming soon
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Currently pursuing an M.Tech in Computer Science and Engineering at Amrita Vishwa Vidyapeetham, with interests spanning software engineering, modern web technologies, AI-assisted development and cybersecurity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
