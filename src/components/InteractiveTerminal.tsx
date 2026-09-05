import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';

interface InteractiveTerminalProps {
  onOpenContact: () => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ onOpenContact }) => {
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([
    {
      command: 'init --welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-primary-400 font-bold">⚡ VanceK CLI v1.0.0 [Ready for Contracts]</p>
          <p className="text-slate-400">Type <span className="text-emerald-400 font-bold">help</span> to view available interactive commands, or <span className="text-accent-cyan font-bold">hire</span> to book a call.</p>
        </div>
      ),
    },
  ]);

  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-emerald-400 font-semibold">Available Commands:</p>
            <p><span className="text-accent-cyan font-mono w-24 inline-block">skills</span> List core technical competencies & architecture</p>
            <p><span className="text-accent-cyan font-mono w-24 inline-block">projects</span> Show flagship case studies (PulseOps, CloudPrune)</p>
            <p><span className="text-accent-cyan font-mono w-24 inline-block">stats</span> View system benchmarks & latency metrics</p>
            <p><span className="text-accent-cyan font-mono w-24 inline-block">hire</span> Open direct consultation calendar</p>
            <p><span className="text-accent-cyan font-mono w-24 inline-block">clear</span> Clear terminal buffer</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p><span className="text-primary-400 font-bold">Frontend:</span> React 18, Vite, TypeScript, Tailwind CSS, Recharts</p>
            <p><span className="text-accent-cyan font-bold">Backend:</span> Node.js 20, TypeScript, Express, WebSockets (ws), REST APIs</p>
            <p><span className="text-accent-emerald font-bold">Databases:</span> PostgreSQL 16, Redis 7 (In-Memory Cache & Queues)</p>
            <p><span className="text-accent-amber font-bold">DevOps:</span> Docker, AWS (ECS Fargate, ALB, RDS, VPC), Terraform IaC, GitHub Actions</p>
            <p><span className="text-rose-400 font-bold">Observability:</span> Prometheus (OpenMetrics), Grafana, Alertmanager</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-white font-bold">1. PulseOps Engine (Real-Time Synthetic Health & Observability)</p>
            <p className="text-slate-400 pl-4">Node.js, React 18, WebSockets, Prometheus, Grafana, AWS ECS Fargate, Terraform</p>
            <p className="text-white font-bold">2. CloudPrune FinOps (AWS Cost Optimization & Anomaly Engine)</p>
            <p className="text-slate-400 pl-4">CloudWatch telemetry, unattached resource pruner, z-score cost spikes</p>
          </div>
        );
        break;

      case 'stats':
        output = (
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
            <div><span className="text-slate-500">API p90 Latency:</span> &lt; 74ms</div>
            <div><span className="text-slate-500">Cloud Uptime:</span> 99.99%</div>
            <div><span className="text-slate-500">Webhook Ack:</span> 1.4ms</div>
            <div><span className="text-slate-500">Docker Deploy:</span> Zero-Downtime</div>
          </div>
        );
        break;

      case 'hire':
      case 'contact':
        output = (
          <div className="text-xs text-emerald-400">
            Opening discovery booking dialogue... Let's build something extraordinary!
          </div>
        );
        onOpenContact();
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <span className="text-rose-400 text-xs">
            Command not recognized: "{cmd}". Type <span className="underline font-bold">help</span> for valid options.
          </span>
        );
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <section id="terminal" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <div className="bg-dark-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-mono">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-dark-950/80 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 text-xs text-slate-400 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-primary-400" />
                vance@pulseops-cloud: ~
              </span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
              <span>Interactive Shell</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 text-xs max-h-80 overflow-y-auto space-y-4">
            {history.map((h, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-slate-200">{h.command}</span>
                </div>
                <div className="pl-4">{h.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Input Form */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 px-5 py-3 bg-dark-950/60 border-t border-slate-800">
            <span className="text-emerald-400 font-bold text-xs">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help', 'skills', 'projects', or 'hire'..."
              className="flex-1 bg-transparent text-xs text-slate-100 placeholder-slate-600 focus:outline-none"
            />
            <button
              type="submit"
              className="px-2.5 py-1 rounded bg-dark-800 hover:bg-dark-700 text-[10px] text-slate-300 border border-slate-700 font-mono transition-colors"
            >
              RUN
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
