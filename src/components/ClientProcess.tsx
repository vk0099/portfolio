import React from 'react';
import { Compass, Code, ShieldCheck, Rocket } from 'lucide-react';

export const ClientProcess: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: <Compass className="w-6 h-6 text-primary-400" />,
      title: "Discovery & Architecture Blueprint",
      description: "We align on your exact functional requirements, target throughput, data models, and cloud SLAs before writing a single line of code."
    },
    {
      step: "02",
      icon: <Code className="w-6 h-6 text-accent-cyan" />,
      title: "Agile Development & Milestone Slices",
      description: "You receive clean, type-safe code delivered in iterative vertical slices with live staging environments and transparent weekly demos."
    },
    {
      step: "03",
      icon: <ShieldCheck className="w-6 h-6 text-accent-emerald" />,
      title: "Stress-Testing & Observability",
      description: "End-to-end load testing, query optimization, Prometheus metrics instrumentation, and automated Grafana telemetry provisioning."
    },
    {
      step: "04",
      icon: <Rocket className="w-6 h-6 text-accent-amber" />,
      title: "Zero-Downtime Deploy & Handover",
      description: "Seamless launch via Terraform on AWS ECS Fargate or Docker, accompanied by comprehensive architectural documentation and team training."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-amber/10 text-accent-amber text-xs font-mono mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>HOW WE COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Predictable, Engineering-Driven Delivery
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            No guesswork, no missed deadlines. A structured 4-phase framework designed for reliability and speed.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 relative flex flex-col justify-between glow-hover">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-900 border border-slate-800 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-extrabold text-slate-700 font-mono">{s.step}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
