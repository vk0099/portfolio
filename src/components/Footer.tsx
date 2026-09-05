import React from 'react';
import { Terminal, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-dark-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary-600/20 border border-primary-500/30 flex items-center justify-center text-primary-400 font-mono text-sm font-bold">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">Vance .dev</div>
            <div className="text-[10px] text-slate-500 font-mono">Full-Stack & Cloud Engineer</div>
          </div>
        </div>

        {/* Center Tag */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span>Engineered with TypeScript, React 18 &</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://github.com/vk0099"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:contact@vancek.dev"
            className="hover:text-white transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};
