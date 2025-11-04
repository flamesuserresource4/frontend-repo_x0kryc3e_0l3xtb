import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden" style={{ backgroundColor: '#0A0A0F' }}>
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-[#0A0A0F]/60 to-[#0A0A0F]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center text-[#E5E7EB]">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#1F1F2B] bg-white/5 px-4 py-1 text-xs tracking-wide text-gray-300 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#7C3AED]" />
          Vigilhawk Labs — Cybersecurity Automation Platform
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Unify your security stack. Automate compliance and risk management.
        </h1>
        <p className="mt-4 max-w-3xl text-base text-gray-300 md:text-lg">
          A unified cybersecurity platform for continuous compliance, risk visibility, and audit-readiness.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-[#7C3AED] px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] transition hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/60"
          >
            Book a Demo
          </a>
          <a
            href="#features"
            className="rounded-lg border border-[#1F1F2B] bg-white/5 px-6 py-3 text-sm font-medium text-gray-200 backdrop-blur transition hover:border-[#7C3AED]/60 hover:bg-[#7C3AED]/10"
          >
            Explore Platform
          </a>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="relative z-10 mx-auto mt-16 max-w-6xl px-6 pb-12">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA', 'NIST', 'CSA'].map((label) => (
            <div key={label} className="flex items-center justify-center rounded-md border border-[#1F1F2B] bg-white/5 px-3 py-2 text-xs text-gray-400">
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
