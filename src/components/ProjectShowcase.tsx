import React, { useState } from 'react';
import { Activity, ExternalLink, Github, CheckCircle2, Cpu, Database, Cloud, Terminal, RefreshCw, BarChart2 } from 'lucide-react';

export const ProjectShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'stack' | 'metrics'>('overview');

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-500/10 text-primary-400 text-xs font-mono mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>PRODUCTION-GRADE CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Flagship Projects
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-400 max-w-md">
            Built with production architectural standards: containerization, automated testing, cloud IaC, and full-stack observability.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* Project 1: PulseOps */}
        {/* ========================================================================= */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 relative overflow-hidden glow-hover mb-12">
          {/* Top Badge & Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-600 to-accent-cyan flex items-center justify-center text-white shadow-lg shadow-primary-500/20">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">PulseOps Engine</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
                    v1.0 Production Ready
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">Distributed Synthetic Health & Real-Time Observability Engine</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/vk0099/pulseops"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-dark-800 hover:bg-dark-700 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
              <a
                href={typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.hostname}:3000` : 'http://vancek.duckdns.org:3000'}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-500 text-xs font-semibold text-white shadow-md shadow-primary-600/30 flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          {/* Interactive Case Study Tabs */}
          <div className="flex items-center gap-2 mt-6 mb-8 border-b border-slate-800/60 pb-3 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'overview' ? 'bg-primary-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Overview & Features
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'architecture' ? 'bg-primary-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
            >
              System Architecture
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'stack' ? 'bg-primary-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Tech Stack & IaC
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'metrics' ? 'bg-primary-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Observability & SLAs
            </button>
          </div>

          {/* Tab Content Display */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  Engineered to solve API downtime and blind spots in microservice architectures. PulseOps orchestrates high-frequency synthetic probes across global targets, ingests webhook streams with sub-millisecond latencies, and provides real-time telemetry over WebSockets and Prometheus OpenMetrics standards.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Full-Duplex WebSockets</h4>
                      <p className="text-[11px] text-slate-400">Live streaming latency percentiles & probe logs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Sub-2ms Webhook Ingestion</h4>
                      <p className="text-[11px] text-slate-400">Non-blocking decoupled payload buffer</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Prometheus & Grafana</h4>
                      <p className="text-[11px] text-slate-400">Auto-provisioned dashboards & PromQL alerts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-amber mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">AWS ECS Fargate & Terraform</h4>
                      <p className="text-[11px] text-slate-400">Auto-scaling 2-10 tasks with Multi-AZ ALB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Mock Terminal Preview */}
              <div className="lg:col-span-5 bg-dark-900 rounded-2xl p-4 border border-slate-800 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[10px] text-slate-400">pulseops-engine (docker-compose)</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">LIVE WS</span>
                </div>
                <div className="py-3 space-y-1.5 text-[11px] text-slate-300">
                  <p className="text-emerald-400">&gt; PROBE [GET] https://api.stripe.com/health</p>
                  <p className="text-slate-400">  HTTP 200 OK | DNS: 4ms | TLS: 12ms | TTFB: 32ms</p>
                  <p className="text-primary-400">&gt; WEBHOOK [POST] /webhook/stripe_live</p>
                  <p className="text-slate-400">  Ack 202 Accepted in 1.4ms (async queued)</p>
                  <p className="text-accent-cyan">&gt; METRICS /metrics scraped by Prometheus</p>
                  <p className="text-slate-400">  p50: 38ms | p90: 74ms | p99: 142ms</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="bg-dark-900 rounded-2xl p-5 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
              <pre className="text-[11px] leading-relaxed text-slate-300">
{`[ Client Traffic / Webhooks ] ──► [ AWS Application Load Balancer (ALB) ]
                                            │
               ┌────────────────────────────┴────────────────────────────┐
               │ (HTTP / Frontend Static)                                │ (REST API, WS, Webhooks, /metrics)
               ▼                                                         ▼
  ┌─────────────────────────┐                               ┌─────────────────────────┐
  │  React 18 + Vite (Nginx)│                               │  Node.js 20 TypeScript  │
  │  Multi-Stage Alpine     │                               │  Microservice Container │
  └─────────────────────────┘                               └────────────┬────────────┘
                                                                         │
                        ┌────────────────────────┬───────────────────────┼────────────────────────┐
                        ▼                        ▼                       ▼                        ▼
           ┌────────────────────────┐ ┌──────────────────────┐ ┌───────────────────┐ ┌────────────────────────┐
           │ PostgreSQL 16 RDS      │ │ Redis 7 In-Memory    │ │ Prometheus TSDB   │ │ Grafana Dashboard      │
           │ Synthetic History & DB │ │ Cache & State Store  │ │ /metrics Scraper  │ │ Real-Time Telemetry    │
           └────────────────────────┘ └──────────────────────┘ └───────────────────┘ └────────────────────────┘`}
              </pre>
            </div>
          )}

          {activeTab === 'stack' && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-dark-900/90 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-mono text-primary-400 font-bold mb-1">Backend & API</div>
                <p className="text-xs text-slate-300">Node.js 20, TypeScript, Express, WebSockets (ws), Prom-Client</p>
              </div>
              <div className="bg-dark-900/90 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-mono text-accent-cyan font-bold mb-1">Frontend UI</div>
                <p className="text-xs text-slate-300">React 18, Vite, Tailwind CSS, Recharts, Lucide, Custom Hooks</p>
              </div>
              <div className="bg-dark-900/90 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-mono text-accent-emerald font-bold mb-1">Data & State</div>
                <p className="text-xs text-slate-300">PostgreSQL 16, Redis 7 (In-Memory Throttle & Event Caching)</p>
              </div>
              <div className="bg-dark-900/90 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-mono text-accent-amber font-bold mb-1">Cloud & IaC</div>
                <p className="text-xs text-slate-300">AWS ECS Fargate, ALB, RDS, VPC, Terraform 1.7+, Docker Compose</p>
              </div>
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-dark-900 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <BarChart2 className="w-4 h-4" />
                  <span className="text-xs font-mono">LATENCY REDUCTION</span>
                </div>
                <div className="text-xl font-bold text-white">68% Lower P99</div>
                <p className="text-xs text-slate-400 mt-1">Achieved via Redis caching layers and connection pool reuse.</p>
              </div>
              <div className="bg-dark-900 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-primary-400 mb-1">
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-xs font-mono">PROBE ACCURACY</span>
                </div>
                <div className="text-xl font-bold text-white">Sub-Second Detection</div>
                <p className="text-xs text-slate-400 mt-1">Immediate failover alerting triggered within 2 missed intervals.</p>
              </div>
              <div className="bg-dark-900 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-accent-cyan mb-1">
                  <Terminal className="w-4 h-4" />
                  <span className="text-xs font-mono">DOCKER PROVISIONING</span>
                </div>
                <div className="text-xl font-bold text-white">&lt; 60s Cold Start</div>
                <p className="text-xs text-slate-400 mt-1">Multi-stage alpine containers orchestrated with one command.</p>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* Project 2: CloudCost FinOps Engine */}
        {/* ========================================================================= */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 relative overflow-hidden glow-hover">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-accent-cyan to-accent-emerald flex items-center justify-center text-white shadow-lg shadow-accent-cyan/20">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">CloudPrune FinOps</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-[11px] font-mono">
                    Cloud Cost Optimization
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">AWS Anomaly Detection, Unattached Resource Pruner & Waste Engine</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/vk0099/cloudprune"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-dark-800 hover:bg-dark-700 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
              <a
                href={typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.hostname}:3005` : 'http://vancek.duckdns.org:3005'}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-accent-cyan hover:bg-accent-cyan/80 text-xs font-semibold text-dark-950 shadow-md shadow-accent-cyan/30 flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-accent-cyan text-xs font-mono font-bold">
                <Cpu className="w-4 h-4" />
                <span>IDLE RESOURCE AUDITING</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Scans AWS accounts for unattached EBS volumes, idle RDS instances, stale Elastic IPs, and orphaned NAT Gateways to instantly claw back 25–40% of cloud spend.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-accent-emerald text-xs font-mono font-bold">
                <BarChart2 className="w-4 h-4" />
                <span>ANOMALY DETECTION</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Calculates rolling 7-day cost baselines using linear regression and z-score thresholds to catch runaway Lambda loops and unthrottled S3 transfers before billing surprises.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary-400 text-xs font-mono font-bold">
                <Database className="w-4 h-4" />
                <span>AUTOMATED POLICY PRUNING</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Provides one-click automated Slack/Discord notification hooks and dry-run cleanup scripts generated via Terraform state reconciliation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
