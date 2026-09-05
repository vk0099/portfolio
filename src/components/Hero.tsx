import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Server, Activity, Github, Linkedin } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-accent-cyan/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">

          {/* Specialization Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-800/80 border border-slate-700/80 text-slate-300 text-xs font-mono mb-8 backdrop-blur shadow-inner">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span>Full-Stack Engineer & Cloud Solutions Architect</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Engineering High-Throughput <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary-400 via-indigo-300 to-accent-cyan bg-clip-text text-transparent">
              Web Apps & Resilient AWS Cloud
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            I help startups and engineering teams build real-time systems, optimize database performance, and deploy auto-scaling cloud architectures with <span className="text-slate-200 font-semibold">Node.js, React 18, PostgreSQL, Docker, and Terraform</span>.
          </p>

          {/* Primary CTA Group */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-primary-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-dark-800/90 hover:bg-dark-700 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all hover:border-slate-600 flex items-center gap-2"
            >
              <span>Explore Live Case Studies</span>
            </a>

            <div className="flex items-center gap-2 pl-2">
              <a
                href="https://github.com/vamsi"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-dark-800 hover:bg-dark-700 border border-slate-700 text-slate-400 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-dark-800 hover:bg-dark-700 border border-slate-700 text-slate-400 hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Trust Metric Badges */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="glass-panel p-4 rounded-2xl text-left border border-slate-800/80">
              <div className="flex items-center gap-2 text-primary-400 mb-1">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-mono text-slate-400 uppercase">Latency</span>
              </div>
              <div className="text-2xl font-bold text-white">&lt; 100ms</div>
              <p className="text-[11px] text-slate-400 mt-0.5">p90 API Response Time</p>
            </div>

            <div className="glass-panel p-4 rounded-2xl text-left border border-slate-800/80">
              <div className="flex items-center gap-2 text-accent-cyan mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-mono text-slate-400 uppercase">SLA Target</span>
              </div>
              <div className="text-2xl font-bold text-white">99.99%</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Cloud Uptime Reliability</p>
            </div>

            <div className="glass-panel p-4 rounded-2xl text-left border border-slate-800/80">
              <div className="flex items-center gap-2 text-accent-emerald mb-1">
                <Server className="w-4 h-4" />
                <span className="text-xs font-mono text-slate-400 uppercase">Deployment</span>
              </div>
              <div className="text-2xl font-bold text-white">Zero-Downtime</div>
              <p className="text-[11px] text-slate-400 mt-0.5">ECS Rolling & Blue/Green</p>
            </div>

            <div className="glass-panel p-4 rounded-2xl text-left border border-slate-800/80">
              <div className="flex items-center gap-2 text-accent-amber mb-1">
                <Activity className="w-4 h-4" />
                <span className="text-xs font-mono text-slate-400 uppercase">Architecture</span>
              </div>
              <div className="text-2xl font-bold text-white">OpenMetrics</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Prometheus & Grafana Ready</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
