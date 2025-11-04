import React from 'react';
import { Activity, Lock, Server, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Compliance',
    desc: 'Map controls to SOC 2, ISO 27001, GDPR, HIPAA, and more with automated evidence.'
  },
  {
    icon: Server,
    title: 'Vendor Risk',
    desc: '360° assessments, questionnaires, and continuous monitoring for third-parties.'
  },
  {
    icon: Activity,
    title: 'Incident Management',
    desc: 'Intake, triage, and track incidents with workflows that align to your runbooks.'
  },
  {
    icon: BarChart3,
    title: 'Dashboards',
    desc: 'Unified analytics across controls, assets, risks, and audit-readiness.'
  }
];

export default function FeaturesPreview() {
  return (
    <section id="features" className="relative w-full py-20" style={{ backgroundColor: '#0A0A0F' }}>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Platform Modules</h2>
            <p className="mt-2 max-w-2xl text-gray-300">
              Explore the core modules that power Vigilhawk’s automation and real-time visibility.
            </p>
          </div>
          <a href="#contact" className="hidden rounded-md border border-[#1F1F2B] bg-white/5 px-4 py-2 text-sm text-gray-200 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 md:inline-block">
            Book a Demo
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <a
              key={title}
              href="#"
              className="group relative overflow-hidden rounded-xl border border-[#1F1F2B] bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-[#7C3AED]/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#7C3AED]/15 text-[#7C3AED] ring-1 ring-[#7C3AED]/30">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-medium text-white">{title}</h3>
              </div>
              <p className="text-sm text-gray-300">{desc}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#7C3AED]/20 blur-2xl transition group-hover:scale-125" />
            </a>
          ))}
        </div>

        {/* Certifications strip */}
        <div className="mt-12 grid grid-cols-2 items-center gap-4 rounded-xl border border-[#1F1F2B] bg-white/5 p-4 text-gray-300 sm:grid-cols-4">
          {['Jira', 'Slack', 'AWS', 'GitHub'].map((item) => (
            <div key={item} className="flex items-center justify-center rounded-md border border-transparent px-3 py-2 text-sm text-gray-400">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
