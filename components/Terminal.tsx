'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Send, RefreshCw } from 'lucide-react';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-slate-300">
          Welcome to Sree Hari R's interactive CLI. Type <span className="text-cyan-400 font-semibold font-mono">help</span> to view all available commands.
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let outputContent: React.ReactNode;

    switch (trimmed) {
      case 'help':
        outputContent = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold">Available commands:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 pl-2 text-[11px] font-mono">
              <div><span className="text-emerald-400">skills</span> - Technical skills overview</div>
              <div><span className="text-emerald-400">projects</span> - Flagship & featured projects</div>
              <div><span className="text-emerald-400">experience</span> - Internships & cybersecurity work</div>
              <div><span className="text-emerald-400">education</span> - Degrees & certifications</div>
              <div><span className="text-emerald-400">contact</span> - Email & phone direct info</div>
              <div><span className="text-emerald-400">clear</span> - Clear terminal buffer</div>
            </div>
          </div>
        );
        break;

      case 'skills':
        outputContent = (
          <div className="space-y-1.5 text-slate-300">
            <p className="text-cyan-400 font-semibold">Technical Skills:</p>
            <p><span className="text-slate-400">Languages:</span> Python, Java, JavaScript, HTML, CSS</p>
            <p><span className="text-slate-400">Frameworks & Tools:</span> Next.js, Tailwind CSS, MongoDB, Supabase, Vercel</p>
            <p><span className="text-slate-400">AI Tooling:</span> Cursor, Gemini, Antigravity, ChatGPT, Codex</p>
            <p><span className="text-slate-400">Security:</span> Cybersecurity Fundamentals, Network Security</p>
          </div>
        );
        break;

      case 'projects':
        outputContent = (
          <div className="space-y-2 text-slate-300">
            <div>
              <span className="text-primary-400 font-semibold font-mono">1. Trust-Chain Escrow - Dual-Key Verification System</span>
              <p className="text-slate-400 text-[11px] pl-3">Tech: Next.js 14, TypeScript, Tailwind CSS, Framer Motion</p>
              <p className="text-emerald-400 text-[11px] pl-3">Metrics: -30% load time, -25% latency, 30-day JWT validity</p>
            </div>
            <div>
              <span className="text-primary-400 font-semibold font-mono">2. Expense Tracker</span>
              <p className="text-slate-400 text-[11px] pl-3">Tech: Next.js, TypeScript, Tailwind CSS, Recharts</p>
              <p className="text-slate-400 text-[11px] pl-3">Fintech-style expense tracking dashboard with interactive charts</p>
            </div>
          </div>
        );
        break;

      case 'experience':
        outputContent = (
          <div className="space-y-2 text-slate-300">
            <div>
              <p className="text-cyan-400 font-semibold">Cyber Security Internship - The Commissioner of Police, Coimbatore</p>
              <p className="text-slate-400 text-[11px]">March – April 2026</p>
              <p className="text-slate-300 text-[11px] pl-2 border-l border-cyan-500/40">Digital evidence handling, FIR/CSR procedures, telecom data & investigation.</p>
            </div>
            <div>
              <p className="text-cyan-400 font-semibold">Python Programming Internship - CodSoft</p>
              <p className="text-slate-400 text-[11px]">August – September 2025</p>
              <p className="text-slate-300 text-[11px] pl-2 border-l border-cyan-500/40">Built To-Do List, Password Generator, Arithmetic Calculator.</p>
            </div>
          </div>
        );
        break;

      case 'education':
        outputContent = (
          <div className="space-y-1 text-slate-300 text-[11px]">
            <p><span className="text-emerald-400 font-semibold">M.Tech CSE:</span> Amrita Vishwa Vidyapeetham, Ettimadai (Expected 2028)</p>
            <p><span className="text-emerald-400 font-semibold">B.E CSE:</span> JCT College of Engineering and Technology (CGPA: 8.2)</p>
            <p><span className="text-emerald-400 font-semibold">Higher Secondary:</span> Vijayamatha Convent Higher Secondary School (83.5%)</p>
            <p><span className="text-emerald-400 font-semibold">SSLC:</span> St. Francis Central School (78%)</p>
          </div>
        );
        break;

      case 'contact':
        outputContent = (
          <div className="space-y-1 text-slate-300 text-[11px]">
            <p><span className="text-cyan-400 font-semibold">Email:</span> sreehari1384@gmail.com</p>
            <p><span className="text-cyan-400 font-semibold">Phone:</span> +91 9400635388</p>
            <p><span className="text-cyan-400 font-semibold">Location:</span> Coimbatore / Palakkad, India</p>
          </div>
        );
        break;

      default:
        outputContent = (
          <div className="text-rose-400">
            Command not recognized: <span className="font-mono">{cmd}</span>. Type <span className="text-cyan-400 font-mono font-semibold">help</span> for commands list.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: outputContent }]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden border border-slate-800 dark:border-slate-800 light:border-slate-300 shadow-xl bg-slate-950/95 text-slate-100 font-mono text-xs">
      {/* Terminal Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-cyan-400" />
          <span className="text-slate-300 text-xs font-semibold">Recruiter CLI Shell</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setHistory([])}
            title="Reset Terminal"
            className="p-1 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 space-y-3 max-h-72 overflow-y-auto min-h-[200px]">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.command !== 'welcome' && (
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-cyan-400 font-bold">$</span>
                <span className="text-slate-200">{item.command}</span>
              </div>
            )}
            <div className="pl-2">{item.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/80 border-t border-slate-800">
        <span className="text-cyan-400 font-bold">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Try commands: help, skills, projects..."
          className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-xs"
        />
        <button
          type="submit"
          className="p-1 text-cyan-400 hover:text-cyan-300 transition-colors"
          aria-label="Submit command"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
