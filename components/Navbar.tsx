'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Download, Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-primary-600 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform">
              SH
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold tracking-tight text-base sm:text-lg text-foreground group-hover:text-primary-400 transition-colors">
                SREE HARI R
              </span>
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-400 flex items-center gap-1">
                <Terminal className="w-2.5 h-2.5 text-cyan-400" /> CSE Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 dark:bg-slate-900/60 light:bg-slate-100/80 p-1.5 rounded-full border border-slate-800/80 dark:border-slate-800 light:border-slate-200 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-sm shadow-primary-600/30'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-slate-200/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
              className="p-2 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-primary-400 dark:hover:text-primary-400 light:hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Download Resume CTA */}
            <a
              href="/Sree_Hari_R_Resume.pdf"
              download="Sree_Hari_R_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-200 hover:bg-primary-600 dark:hover:bg-primary-600 light:hover:bg-primary-600 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-white dark:hover:text-white light:hover:text-white text-xs font-semibold border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 transition-all shadow-sm active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light theme"
              className="p-2 rounded-lg bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-200 dark:text-slate-200 light:text-slate-800" />
              ) : (
                <Menu className="w-5 h-5 text-slate-200 dark:text-slate-200 light:text-slate-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-slate-950/95 dark:bg-slate-950/95 light:bg-slate-50/95 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'bg-primary-600/20 text-primary-400 font-semibold border border-primary-500/30'
                    : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col gap-2">
              <a
                href="/Sree_Hari_R_Resume.pdf"
                download="Sree_Hari_R_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm transition-all shadow-md shadow-primary-600/30"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
