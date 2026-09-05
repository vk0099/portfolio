import React from 'react';
import { Layers, Zap, Cloud, Cpu, ArrowRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const services = [
    {
      icon: <Layers className="w-6 h-6 text-primary-400" />,
      title: "Full-Stack Web App Development",
      badge: "Most Popular",
      price: "$3,500 – $8,000",
      description: "From architecture design to production release. Clean, maintainable Node.js/TypeScript backends and high-converting React 18 frontends.",
      deliverables: [
        "React 18 + Vite + Tailwind UI Dashboard",
        "TypeScript REST & WebSocket Backend APIs",
        "PostgreSQL schema modeling & migrations",
        "Redis caching for sub-100ms response SLAs",
        "Comprehensive automated tests & API docs"
      ]
    },
    {
      icon: <Cloud className="w-6 h-6 text-accent-cyan" />,
      title: "AWS Cloud & DevOps Automation",
      badge: "High ROI",
      price: "$2,500 – $6,000",
      description: "Eliminate manual deploys and single points of failure. Modernize your infrastructure with Docker and Terraform Infrastructure as Code.",
      deliverables: [
        "AWS Multi-AZ VPC, ALB & ECS Fargate",
        "Terraform Infrastructure as Code (IaC)",
        "GitHub Actions CI/CD automated test & deploy",
        "Docker multi-stage container optimization",
        "RDS automated backup & recovery policies"
      ]
    },
    {
      icon: <Zap className="w-6 h-6 text-accent-emerald" />,
      title: "Real-Time Systems & Webhooks",
      badge: "Specialized",
      price: "$2,000 – $5,000",
      description: "Build low-latency bidirectional communication pipelines and decoupled event-driven webhook ingestion systems.",
      deliverables: [
        "Full-duplex WebSocket servers & clients",
        "Sub-2ms non-blocking webhook ingestion",
        "In-memory replay buffers & dead-letter queues",
        "Rate-limiting & DDoS protection middleware",
        "Signature verification (Stripe, GitHub, Shopify)"
      ]
    },
    {
      icon: <Cpu className="w-6 h-6 text-accent-amber" />,
      title: "Observability & Performance Tuning",
      badge: "Mission Critical",
      price: "$2,000 – $4,500",
      description: "Stop flying blind. Implement end-to-end metrics, p50/p90/p99 latency tracking, and automated alerting before users report bugs.",
      deliverables: [
        "Prometheus OpenMetrics exporter integration",
        "Grafana real-time operational dashboards",
        "PromQL alerting rules & Slack/PagerDuty routing",
        "PostgreSQL query indexing & connection pooling",
        "Synthetic health check probing pipelines"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 text-accent-cyan text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>SOLUTIONS & PACKAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Can Help Your Team Ship Faster
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Available for fixed-scope milestone deliverables, contract engineering, and fractional technical advisory.
          </p>
        </div>

        {/* 4-Card Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-3xl border border-slate-800 glow-hover flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-dark-900 border border-slate-800 flex items-center justify-center shadow-inner">
                    {s.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-mono font-medium">
                    {s.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{s.description}</p>

                <div className="space-y-2.5 pb-6 border-b border-slate-800/80">
                  {s.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between pt-2">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Typical Investment</span>
                  <span className="text-base font-bold text-white">{s.price}</span>
                </div>
                <button
                  onClick={onOpenContact}
                  className="px-4 py-2 rounded-xl bg-dark-800 hover:bg-dark-700 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-colors"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
