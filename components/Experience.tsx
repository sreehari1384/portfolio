'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Terminal, Calendar, MapPin, CheckCircle, Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Cyber Security Internship',
      organization: 'The Commissioner of Police — Coimbatore',
      period: 'March – April 2026',
      type: 'Cybersecurity Exposure',
      icon: ShieldCheck,
      iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      description:
        'Completed an in-person internship focused on the role of cybersecurity in modern policing, gaining exposure to real-time investigation procedures, legal frameworks and digital evidence handling.',
      exposures: [
        'Cyber-related complaint handling',
        'FIR/CSR registration procedures',
        'Telecom data analysis',
        'Digital evidence handling',
        'Criminal investigation procedures',
      ],
      isSecurity: true,
    },
    {
      title: 'Python Programming Internship',
      organization: 'CodSoft',
      period: 'August – September 2025',
      type: 'Software Development',
      icon: Terminal,
      iconBg: 'bg-primary-500/10 border-primary-500/30 text-primary-400',
      description:
        'Applied core Python concepts to build functional applications, improving algorithmic problem-solving, code structure, and user interaction design.',
      exposures: [
        'Built a To-Do List application',
        'Built a Password Generator',
        'Built a Basic Arithmetic Calculator',
        'Applied core Python programming concepts',
        'Improved problem-solving and code logic',
      ],
      isSecurity: false,
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/60">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Internships & Exposure Timeline
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 font-sans">
            Practical hands-on exposure in cybersecurity investigation procedures and software development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title + exp.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot Icon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1 w-10 h-10 rounded-xl border flex items-center justify-center bg-slate-950 shadow-md ${exp.iconBg}`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-4 hover:border-slate-700 transition-all">
                  
                  {/* Top Row: Title & Dates */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-semibold">
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
                      <p className="text-sm font-medium text-slate-300 flex items-center gap-1.5 mt-0.5 font-sans">
                        <MapPin className="w-3.5 h-3.5 text-primary-400" />
                        {exp.organization}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 shrink-0 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  {/* Key Exposure Items */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
                      Key Exposure & Outcomes:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {exp.exposures.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs text-slate-300 font-sans bg-slate-900/50 p-2 rounded-lg border border-slate-800/80"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
