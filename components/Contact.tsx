'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  Download,
  CheckCircle2,
  Sparkles,
  Info,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Set UI success state
    setSubmitted(true);

    // Fallback mailto trigger
    const mailtoLink = `mailto:sreehari1384@gmail.com?subject=Inquiry%20from%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 800);
  };

  const handleSocialClick = (platform: string) => {
    setSocialNotice(`Official ${platform} profile link available upon direct request.`);
    setTimeout(() => setSocialNotice(null), 3500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Let's Build Something Meaningful.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 font-sans">
            I'm open to opportunities in software engineering, full-stack development and related technical roles.
          </p>
        </div>

        {/* Contact Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Quick Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80 shadow-xl"
          >
            <h3 className="text-xl font-bold text-slate-100 border-b border-slate-800 pb-3">
              Direct Contact Details
            </h3>

            {/* Direct Cards */}
            <div className="space-y-4">
              <a
                href="mailto:sreehari1384@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Email Address</p>
                  <p className="text-sm font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    sreehari1384@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919400635388"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Phone Number</p>
                  <p className="text-sm font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    +91 9400635388
                  </p>
                </div>
              </a>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
                Professional Channels:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleSocialClick('LinkedIn')}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-primary-400 hover:border-primary-500/40 text-xs font-medium transition-all"
                >
                  <Linkedin className="w-4 h-4 text-primary-400" />
                  <span>LinkedIn</span>
                </button>

                <button
                  onClick={() => handleSocialClick('GitHub')}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 text-xs font-medium transition-all"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </button>
              </div>

              {socialNotice && (
                <div className="inline-flex items-center gap-2 text-xs text-amber-300 bg-amber-950/40 border border-amber-800/60 px-3 py-2 rounded-xl w-full">
                  <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{socialNotice}</span>
                </div>
              )}

              <a
                href="/Sree_Hari_R_Resume.pdf"
                download="Sree_Hari_R_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-semibold transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download PDF Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-950/80 shadow-xl"
          >
            <h3 className="text-xl font-bold text-slate-100 border-b border-slate-800 pb-3">
              Send a Message
            </h3>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-slate-900/60 rounded-2xl border border-emerald-500/40 my-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-100">Message Prepared!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Opening your email client to complete sending your message directly to <span className="text-cyan-400 font-mono">sreehari1384@gmail.com</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-mono text-slate-300 hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-4 font-sans">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager / Recruiter"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-300">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Let's discuss full-stack engineering opportunities..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm transition-all shadow-lg shadow-primary-600/30 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
