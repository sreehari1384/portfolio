'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Github, Info, Terminal } from 'lucide-react';

export default function Footer() {
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const handleSocialClick = (platform: string) => {
    setSocialNotice(`Official ${platform} profile link available upon direct request.`);
    setTimeout(() => setSocialNotice(null), 3500);
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Role */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link href="#home" className="flex items-center gap-2">
            <span className="font-sans font-bold text-lg text-slate-100 tracking-tight">
              SREE HARI R
            </span>
          </Link>
          <span className="text-xs font-mono text-cyan-400">
            Computer Science Engineer
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs font-mono">
          <a
            href="mailto:sreehari1384@gmail.com"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" /> Email
          </a>
          <button
            onClick={() => handleSocialClick('LinkedIn')}
            className="hover:text-primary-400 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5 text-primary-400" /> LinkedIn
          </button>
          <button
            onClick={() => handleSocialClick('GitHub')}
            className="hover:text-slate-200 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5 text-slate-300" /> GitHub
          </button>
        </div>

        {/* Copyright & Stack */}
        <div className="text-xs font-mono text-slate-500 text-center md:text-right space-y-1">
          <p>© 2026 Sree Hari R. All rights reserved.</p>
          <p className="text-slate-400">Built with Next.js + TypeScript</p>
        </div>

      </div>

      {socialNotice && (
        <div className="max-w-md mx-auto mt-4 text-center text-xs text-amber-300 bg-amber-950/60 border border-amber-800/80 px-3 py-1.5 rounded-lg">
          {socialNotice}
        </div>
      )}
    </footer>
  );
}
