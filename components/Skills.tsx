'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Layers,
  Database,
  Cloud,
  Wrench,
  ShieldCheck,
  Terminal,
  Cpu,
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'text-primary-400',
      bg: 'bg-primary-500/10',
      border: 'border-primary-500/20',
      skills: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks',
      icon: Layers,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      skills: ['Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      skills: ['MongoDB', 'Supabase'],
    },
    {
      title: 'Cloud & Deployment',
      icon: Cloud,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      skills: ['Vercel', 'Supabase Cloud'],
    },
    {
      title: 'Tools & Development',
      icon: Wrench,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      skills: [
        'Git',
        'GitHub',
        'REST APIs',
        'VS Code',
        'Cursor',
        'Gemini',
        'Antigravity',
        'ChatGPT',
        'Codex',
      ],
    },
    {
      title: 'Security',
      icon: ShieldCheck,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20',
      skills: ['Cybersecurity Fundamentals', 'Network Security'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Technologies & Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 font-sans">
            Core programming languages, modern frameworks, AI tools, cloud infrastructure, and security fundamentals.
          </p>
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-6 border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-4 hover:border-slate-700 transition-all hover:translate-y-[-2px] group"
              >
                <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
                  <div className={`p-2.5 rounded-xl ${category.bg} ${category.border} border ${category.color} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground font-sans">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-primary-500/50 hover:text-primary-400 transition-colors shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
