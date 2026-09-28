'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  CheckCircle2,
  Sparkles,
  Info,
} from 'lucide-react';
import HeroVisual from './HeroVisual';

export default function Hero() {
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const handleSocialClick = (platform: string) => {
    setSocialNotice(`Official ${platform} profile link available upon direct request.`);
    setTimeout(() => setSocialNotice(null), 3500);
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern radial-gradient-hero overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Copy Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 text-left"
        >


          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            Aspiring Computer Science Engineer{' '}
            <span className="bg-gradient-to-r from-primary-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Building Modern Full-Stack Applications
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl font-sans">
            Computer Science Engineer with hands-on experience building full-stack web applications using Next.js, AI tools and modern cloud tooling, complemented by practical cybersecurity exposure through digital investigation and threat-awareness experience.
          </p>

          {/* Call to Actions (CTAs) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Primary CTA */}
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm transition-all shadow-lg shadow-primary-600/30 active:scale-[0.98] group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA */}
            <a
              href="/Sree_Hari_R_Resume.pdf"
              download="Sree_Hari_R_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-white dark:hover:text-white light:hover:text-primary-600 font-medium text-sm border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-slate-700 transition-all shadow-sm active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>

            {/* Additional CTA */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-transparent text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-primary-600 font-medium text-sm transition-colors"
            >
              <span>Contact Me</span>
            </Link>
          </div>

          {/* Social / Direct Contact Links */}
          <div className="pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <a
              href="mailto:sreehari1384@gmail.com"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>sreehari1384@gmail.com</span>
            </a>
            
            <a
              href="tel:+919400635388"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+91 9400635388</span>
            </a>

            <div className="flex items-center gap-2 ml-auto sm:ml-0">
              <button
                onClick={() => handleSocialClick('LinkedIn')}
                aria-label="LinkedIn profile button"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-200 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:text-primary-400 transition-all text-xs font-medium"
              >
                <Linkedin className="w-3.5 h-3.5 text-primary-400" />
                <span>LinkedIn</span>
              </button>

              <button
                onClick={() => handleSocialClick('GitHub')}
                aria-label="GitHub profile button"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-200 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:text-slate-100 transition-all text-xs font-medium"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <span>GitHub</span>
              </button>
            </div>
          </div>

          {/* Tooltip notice for social links if clicked */}
          {socialNotice && (
            <div className="inline-flex items-center gap-2 text-xs text-amber-300 bg-amber-950/40 border border-amber-800/60 px-3 py-1.5 rounded-lg animate-fade-in">
              <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{socialNotice}</span>
            </div>
          )}
        </motion.div>

        {/* Right Hero Visual Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
