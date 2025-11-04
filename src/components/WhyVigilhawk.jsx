import React from 'react';
import { Shield, Radar, Workflow, FileCheck2 } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Unified operations',
    desc: 'Centralize policies, controls, assets, and risks across your entire stack.'
  },
  {
    icon: Radar,
    title: 'Real-time visibility',
    desc: 'Continuously monitor configurations, vendors, and anomalies with live alerts.'
  },
  {
    icon: FileCheck2,
    title: 'Audit automation',
    desc: 'Auto-collect evidence, map controls to frameworks, and stay audit-ready.'
  },
  {
    icon: Workflow,
    title: 'Threat intelligence',
    desc: 'Correlate findings with signals to prioritize remediation and reduce risk.'
  }
];

export default function WhyVigilhawk() {
  return (
    <section id="why" className="relative w-full py-20" style={{ backgroundColor: '#0A0A0F' }}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Why Vigilhawk</h2>
          <p className="mt-3 text-gray-300">
            Built for security, compliance, and IT teams that need clarity, speed, and provable trust.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-xl border border-[#1F1F2B] bg-gradient-to-b from-white/5 to-transparent p-6 shadow-inner transition hover:border-[#7C3AED]/40 hover:shadow-[0_0_24px_rgba(124,58,237,0.25)]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#7C3AED]/15 text-[#7C3AED] ring-1 ring-[#7C3AED]/30">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">{desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 blur transition duration-300 group-hover:opacity-100" style={{
                background:
                  'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(124,58,237,0.12), transparent 40%)'
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
