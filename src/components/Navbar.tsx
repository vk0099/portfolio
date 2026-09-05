import React, { useState, useEffect } from 'react';
import { Terminal, Code2, Cpu, Layers, Mail, ArrowUpRight, Menu, X, Check } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('vamsikrishnagonuguntla77@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-accent-cyan flex items-center justify-center text-white font-mono font-bold shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white group-hover:text-primary-400 transition-colors">
              Vamsi <span className="text-primary-500">.dev</span>
            </span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Full-Stack & Cloud</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#projects" className="hover:text-white flex items-center gap-1.5 transition-colors">
            <Code2 className="w-4 h-4 text-primary-400" />
            Projects
          </a>
          <a href="#services" className="hover:text-white flex items-center gap-1.5 transition-colors">
            <Layers className="w-4 h-4 text-accent-cyan" />
            Services
          </a>
          <a href="#stack" className="hover:text-white flex items-center gap-1.5 transition-colors">
            <Cpu className="w-4 h-4 text-accent-emerald" />
            Architecture
          </a>
          <a href="#terminal" className="hover:text-white font-mono text-xs text-slate-400 hover:text-primary-400 transition-colors">
            &gt;_ Terminal
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Availability Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
            <span>Available for Contracts</span>
          </div>

          <button
            onClick={copyEmail}
            title="Quick Copy Email"
            className="px-3 py-2 rounded-lg bg-dark-800 border border-slate-700 hover:border-slate-600 text-xs text-slate-300 flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-slate-400" />}
            {copied ? 'Copied!' : 'Copy Email'}
          </button>

          <button
            onClick={onOpenContact}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white text-xs font-semibold shadow-lg shadow-primary-500/25 flex items-center gap-1.5 transition-all hover:scale-105"
          >
            <span>Book Discovery Call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-dark-800 text-slate-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-6 py-5 mt-3 space-y-4">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium"
          >
            Featured Projects
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium"
          >
            Services & Pricing
          </a>
          <a
            href="#stack"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium"
          >
            Tech Stack & Infrastructure
          </a>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-lg bg-primary-600 text-white font-semibold text-center text-sm shadow-lg shadow-primary-600/30"
            >
              Get in Touch / Book Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
