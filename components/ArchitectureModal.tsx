'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, UserCheck, Key, RefreshCw, CheckCircle2, Layers } from 'lucide-react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ArchitectureModal({ isOpen, onClose }: ArchitectureModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const flowNodes = [
    {
      title: 'User / Participant',
      subtitle: 'Buyer & Seller Portals',
      icon: UserCheck,
      color: 'text-primary-400',
      border: 'border-primary-500/40',
      bg: 'bg-primary-950/60',
      desc: 'Dual-portal entry point for transaction initiation and management.',
    },
    {
      title: 'Next.js 14 Application',
      subtitle: 'App Router & TypeScript',
      icon: Layers,
      color: 'text-cyan-400',
      border: 'border-cyan-500/40',
      bg: 'bg-cyan-950/60',
      desc: 'SSR & Dynamic imports reducing page load times by 30%.',
    },
    {
      title: 'Authentication / JWT Token',
      subtitle: '30-Day Token Expiry',
      icon: Key,
      color: 'text-amber-400',
      border: 'border-amber-500/40',
      bg: 'bg-amber-950/60',
      desc: 'Secure transaction token generation with automated expiration.',
    },
    {
      title: 'Transaction Verification',
      subtitle: 'Automated Checks',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-950/60',
      desc: 'Dual-key verification required prior to transaction authorization.',
    },
    {
      title: 'Escrow Workflow',
      subtitle: 'State Management',
      icon: RefreshCw,
      color: 'text-purple-400',
      border: 'border-purple-500/40',
      bg: 'bg-purple-950/60',
      desc: 'Isolated funds hold state pending dual confirmation.',
    },
    {
      title: 'Confirmation & Release',
      subtitle: 'Completion State',
      icon: CheckCircle2,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-950/60',
      desc: 'Synchronized authorization releasing escrow state.',
    },
  ];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl glass-card rounded-2xl border border-slate-800 bg-slate-950/95 text-slate-100 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-mono mb-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Technical System Architecture
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Trust-Chain Escrow Technical Flow
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Architecture Diagram Nodes */}
          <div className="space-y-6">
            <p className="text-sm text-slate-300 font-sans">
              Technical representation of the dual-key verification flow, App Router architecture, and 30-day JWT token verification system explicitly stated in the project specifications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {flowNodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <div
                    key={node.title}
                    className={`p-4 rounded-xl border ${node.border} ${node.bg} space-y-2 relative group hover:scale-[1.02] transition-transform`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400">Step 0{i + 1}</span>
                      <Icon className={`w-5 h-5 ${node.color}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-100">{node.title}</h4>
                      <p className="text-xs font-mono text-slate-400">{node.subtitle}</p>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{node.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Architecture Flow Summary */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs flex flex-wrap items-center justify-between gap-2">
              <span className="text-slate-400">Sequence Protocol:</span>
              <span className="text-cyan-400 font-semibold">
                User → Next.js App Router → JWT Auth → Dual Verification → Escrow Release
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
