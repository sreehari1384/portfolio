'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Education() {
  const educationItems = [
    {
      degree: 'M.Tech — Computer Science and Engineering',
      institution: 'Amrita Vishwa Vidyapeetham',
      location: 'Ettimadai, Coimbatore',
      timeline: 'Expected Graduation: 2028',
      score: null, // NO CGPA explicitly per resume rule
      status: 'In Progress',
      highlight: 'Advanced Software Engineering, AI & Cybersecurity focus',
    },
    {
      degree: 'B.E — Computer Science and Engineering',
      institution: 'JCT College of Engineering and Technology',
      location: 'Pichanur, Coimbatore',
      timeline: 'Completed',
      score: 'CGPA: 8.2',
      status: 'Graduated',
      highlight: 'Core CS fundamentals, Web Architectures, Escrow Capstone',
    },
    {
      degree: 'Higher Secondary',
      institution: 'Vijayamatha Convent Higher Secondary School',
      location: 'Ambatpalayam, Chittur',
      timeline: 'Completed',
      score: '83.5%',
      status: 'Completed',
      highlight: 'Computer Science & Mathematics Stream',
    },
    {
      degree: 'SSLC',
      institution: 'St. Francis Central School',
      location: 'Kozhinjampara, Palakkad',
      timeline: 'Completed',
      score: '78%',
      status: 'Completed',
      highlight: 'Secondary School Certification',
    },
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Education Timeline
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 font-sans">
            Formal engineering education, undergraduate degree, and secondary schooling.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-4 hover:border-slate-700 transition-all hover:translate-y-[-2px] flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
                    {item.timeline}
                  </span>
                  {item.score && (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-xs font-mono font-bold text-emerald-400">
                      {item.score}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-100 leading-snug">
                  {item.degree}
                </h3>

                <div className="space-y-1 text-xs text-slate-300 font-sans">
                  <p className="font-semibold text-slate-200">{item.institution}</p>
                  <p className="text-slate-400 flex items-center gap-1 font-mono">
                    <MapPin className="w-3 h-3 text-primary-400 shrink-0" />
                    {item.location}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/60 text-xs font-mono text-slate-400">
                {item.highlight}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
