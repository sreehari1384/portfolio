'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Bot, ShieldCheck, Sparkles, Terminal as TerminalIcon } from 'lucide-react';
import Terminal from './Terminal';

export default function About() {
  const areas = [
    {
      title: 'Full-Stack Development',
      icon: Code2,
      color: 'text-primary-400',
      bg: 'bg-primary-500/10',
      border: 'border-primary-500/30',
      description:
        'Building responsive web applications using Next.js, TypeScript, Tailwind CSS and modern web tooling.',
      highlights: ['Next.js 14 App Router', 'TypeScript & REST APIs', 'Tailwind & Modern CSS'],
    },
    {
      title: 'AI-Assisted Development',
      icon: Bot,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      description:
        'Experience using modern AI development tools including ChatGPT, Gemini, Codex and Antigravity.',
      highlights: ['Antigravity IDE & Gemini', 'Cursor & Codex Workflows', 'Prompt-Driven Engineering'],
    },
    {
      title: 'Cybersecurity',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      description:
        'Practical exposure to cybersecurity fundamentals, network security, digital evidence handling and cyber-related investigation procedures.',
      highlights: ['Police Cyber Division Exposure', 'Digital Evidence Protocols', 'Network Threat Awareness'],
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/60">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT & SPECIALIZATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Bridging Software Engineering & Security Awareness
          </h2>
          <p className="text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans">
            Aspiring Computer Science Engineer with hands-on experience building full-stack web applications using Next.js, AI tools and modern cloud tooling, complemented by practical exposure to cybersecurity through hands-on internships in digital investigation and threat awareness.
          </p>
        </div>

        {/* 3 Primary Specialization Cards & Terminal Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 3 Cards */}
          <div className="lg:col-span-7 space-y-5">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 transition-all hover:translate-y-[-2px] hover:border-slate-700/80 group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl ${area.bg} ${area.border} border ${area.color} shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary-400 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans">
                        {area.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {area.highlights.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-0.5 rounded-md bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-200 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Interactive Terminal */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 font-semibold">
                <TerminalIcon className="w-4 h-4" /> Interactive Recruiter CLI
              </span>
              <span className="text-[11px] font-mono text-slate-400">Type 'help'</span>
            </div>
            <Terminal />
          </div>
        </div>

      </div>
    </section>
  );
}
