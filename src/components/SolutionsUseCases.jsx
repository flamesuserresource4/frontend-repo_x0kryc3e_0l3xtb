import React from 'react';
import { Shield, Lock, Server, Activity } from 'lucide-react';

const solutions = [
  {
    icon: Shield,
    title: 'Startup to SOC 2',
    desc: 'Stand up policies, controls, and automated evidence to reach SOC 2 Type II faster.'
  },
  {
    icon: Lock,
    title: 'Enterprise Governance',
    desc: 'Map controls across ISO 27001, NIST, HIPAA, and GDPR with unified oversight.'
  },
  {
    icon: Server,
    title: 'Cloud Security',
    desc: 'Continuously verify AWS hardening, identity hygiene, and drift against best practices.'
  },
  {
    icon: Activity,
    title: 'IR & Resilience',
    desc: 'Prepare, detect, and respond with streamlined incident workflows and evidence trails.'
  }
];

export default function SolutionsUseCases() {
  return (
    <section id="solutions" className="relative w-full py-20" style={{ backgroundColor: '#0A0A0F' }}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Solutions & Use Cases</h2>
          <p className="mt-2 text-gray-300">Tailored outcomes for security, compliance, and platform teams.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl border border-[#1F1F2B] bg-white/5 p-6 transition hover:border-[#7C3AED]/40 hover:shadow-[0_0_24px_rgba(124,58,237,0.25)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#7C3AED]/15 text-[#7C3AED] ring-1 ring-[#7C3AED]/30">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">{desc}</p>
              <a href="#contact" className="mt-4 inline-block text-sm text-[#A78BFA] hover:text-white">Discuss this use case →</a>
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
