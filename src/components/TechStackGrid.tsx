import React from 'react';
import { Cpu, Server, Database, Cloud, Activity, GitBranch } from 'lucide-react';

export const TechStackGrid: React.FC = () => {
  const categories = [
    {
      title: "Backend & Systems",
      icon: <Server className="w-5 h-5 text-primary-400" />,
      skills: ["Node.js 20", "TypeScript", "Express.js", "WebSockets (ws)", "RESTful APIs", "Microservices"]
    },
    {
      title: "Frontend Engineering",
      icon: <Cpu className="w-5 h-5 text-accent-cyan" />,
      skills: ["React 18", "Vite", "TypeScript", "Tailwind CSS", "Recharts", "State Management"]
    },
    {
      title: "Databases & Caching",
      icon: <Database className="w-5 h-5 text-accent-emerald" />,
      skills: ["PostgreSQL 16", "Redis 7", "Prisma ORM", "Connection Pooling", "Query Indexing"]
    },
    {
      title: "AWS Cloud & DevOps",
      icon: <Cloud className="w-5 h-5 text-accent-amber" />,
      skills: ["AWS ECS Fargate", "Application Load Balancer", "RDS Aurora", "VPC & NAT", "Terraform IaC"]
    },
    {
      title: "Containerization & CI/CD",
      icon: <GitBranch className="w-5 h-5 text-indigo-400" />,
      skills: ["Docker Multi-Stage", "Docker Compose", "Nginx Reverse Proxy", "GitHub Actions", "Buildx"]
    },
    {
      title: "Observability & Telemetry",
      icon: <Activity className="w-5 h-5 text-rose-400" />,
      skills: ["Prometheus TSDB", "OpenMetrics Standard", "Grafana Dashboards", "Alertmanager PromQL", "Synthetic Probes"]
    }
  ];

  return (
    <section id="stack" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-emerald/10 text-accent-emerald text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production-Tested Technology Stack
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Carefully selected tools optimized for high throughput, type safety, low latency, and zero-downtime reliability.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 glow-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-dark-900 border border-slate-800 flex items-center justify-center shadow-inner">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-white text-base">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg bg-dark-900/90 border border-slate-800 text-slate-300 text-xs font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
