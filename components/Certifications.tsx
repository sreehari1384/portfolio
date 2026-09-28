'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cloud, Terminal, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'February 2026',
      icon: ShieldCheck,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/30',
      category: 'Cybersecurity',
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: 'May 2025',
      icon: Cloud,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      category: 'Cloud Tooling',
    },
    {
      title: 'Joy of Computing using Python',
      issuer: 'NPTEL',
      date: 'October 2025',
      icon: Terminal,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      category: 'Programming',
    },
    {
      title: 'Python Programming',
      issuer: 'CodSoft',
      date: 'September 2025',
      icon: Award,
      color: 'text-primary-400',
      bg: 'bg-primary-500/10',
      border: 'border-primary-500/30',
      category: 'Software Engineering',
    },
  ];

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/60">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Professional Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 font-sans">
            Formal technical certifications completed across cybersecurity, cloud architectures, and Python development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-6 border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-4 hover:border-slate-700 transition-all hover:translate-y-[-2px] flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl ${cert.bg} ${cert.border} border ${cert.color} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-md">
                      {cert.date}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-primary-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-sans mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" /> Verified Certificate
                  </span>
                  <span>{cert.category}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
