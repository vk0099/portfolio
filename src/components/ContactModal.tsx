import React, { useState } from 'react';
import { X, Mail, Check, Calendar, ArrowRight, MessageSquare, Clock, Loader2, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App',
    budget: '$3,000 – $6,000',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const targetEmail = 'vamsikrishnagonuguntla77@gmail.com';
  const displayEmail = 'contact@vancek.dev';

  const copyEmail = () => {
    navigator.clipboard.writeText(displayEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          _subject: `🚀 New Project Lead: ${formData.name} [${formData.projectType}]`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      } else {
        throw new Error(data.message || 'Failed to dispatch email alert.');
      }
    } catch (err: any) {
      console.error('Contact Form Submission Error:', err);
      // Fallback: Even if external service had a transient issue, prompt mailto fallback
      setErrorMessage('Unable to reach mail gateway. Click below to send via your mail client.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-dark-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-dark-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
            <p className="text-sm text-slate-400 max-w-sm mx-auto">
              Thank you for reaching out. I typically review technical briefs and respond within <span className="text-emerald-400 font-semibold">4 hours</span>.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-primary-400 text-xs font-mono mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>DIRECT INQUIRY & CONSULTATION</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Let's Discuss Your Project</h3>
            <p className="text-xs text-slate-400 mt-1 mb-6">
              Schedule a technical discovery call or submit your project scope below.
            </p>

            {/* Quick Email Copy Row */}
            <div className="p-3.5 rounded-2xl bg-dark-950 border border-slate-800/80 flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary-600/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-mono">Direct Email</div>
                  <a
                    href={`mailto:${displayEmail}`}
                    className="text-xs font-semibold text-slate-200 hover:text-primary-400 transition-colors"
                  >
                    {displayEmail}
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="px-3 py-1.5 rounded-lg bg-dark-800 hover:bg-dark-700 border border-slate-700 text-xs text-slate-300 transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : null}
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {errorMessage && (
              <div className="p-3 mb-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                  <span>{errorMessage}</span>
                </div>
                <a
                  href={`mailto:${displayEmail}?subject=${encodeURIComponent(`Project Inquiry: ${formData.name || 'Client'}`)}&body=${encodeURIComponent(
                    `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nProject Scope:\n${formData.message}`
                  )}`}
                  className="px-2.5 py-1 rounded bg-rose-500/20 hover:bg-rose-500/30 text-white text-[11px] font-semibold whitespace-nowrap"
                >
                  Send via Email App
                </a>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Chen"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-primary-500"
                  >
                    <option value="Full-Stack Web App">Full-Stack Web App (React/Node)</option>
                    <option value="AWS Cloud & DevOps">AWS Cloud & DevOps (ECS/IaC)</option>
                    <option value="Real-Time / WebSockets">Real-Time / WebSockets / Webhooks</option>
                    <option value="Observability & Performance">Observability & Performance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">Estimated Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-primary-500"
                  >
                    <option value="$2,000 – $4,000">$2,000 – $4,000</option>
                    <option value="$4,000 – $8,000">$4,000 – $8,000</option>
                    <option value="$8,000+">$8,000+</option>
                    <option value="Hourly / Retainer">Hourly / Retainer ($60–$90/hr)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Project Overview & Timeline</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your product requirements, current architecture, or target launch date..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-primary-500 resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Avg response: &lt; 4 hours</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-semibold shadow-lg shadow-primary-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Alert...</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Project Brief</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
