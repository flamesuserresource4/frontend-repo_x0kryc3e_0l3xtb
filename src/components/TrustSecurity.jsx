import React from 'react';
import { ShieldCheck, FileCheck2, Lock, Key } from 'lucide-react';

const commitments = [
  { icon: ShieldCheck, title: 'Defense-in-Depth', desc: 'Layered security across infrastructure, application, and data.' },
  { icon: FileCheck2, title: 'Compliance Posture', desc: 'Controls aligned to SOC 2 and ISO 27001 with continuous evidence.' },
  { icon: Lock, title: 'Data Protection', desc: 'Encryption in transit & at rest, strict access controls, and audit logs.' },
  { icon: Key, title: 'SSO & RBAC', desc: 'SAML/SSO providers with role-based permissions and least privilege.' },
];

export default function TrustSecurity() {
  return (
    <section id="trust" className="relative w-full py-20" style={{ backgroundColor: '#0A0A0F' }}>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Trust & Security</h2>
            <p className="mt-2 max-w-2xl text-gray-300">Security is fundamental to how we build, operate, and support Vigilhawk.</p>
          </div>
          <a href="#contact" className="rounded-md border border-[#1F1F2B] bg-white/5 px-4 py-2 text-sm text-gray-200 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10">Request security packet</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-[#1F1F2B] bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#7C3AED]/15 text-[#7C3AED] ring-1 ring-[#7C3AED]/30">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-[#1F1F2B] bg-white/5 p-4 text-sm text-gray-300">
          <p>
            Availability & DR: Multi-AZ deployment with automated backups and tested recovery procedures.
          </p>
        </div>
      </div>
    </section>
  );
}
