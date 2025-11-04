import React from 'react';

export default function ContactDemo() {
  return (
    <section id="contact" className="relative w-full py-20" style={{ backgroundColor: '#0A0A0F' }}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Book a Demo</h2>
          <p className="mt-2 text-gray-300">See how Vigilhawk unifies compliance and risk in minutes.</p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#1F1F2B] bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur">
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="mb-1 text-xs text-gray-400">Name</label>
              <input
                type="text"
                placeholder="Alex Johnson"
                className="rounded-lg border border-[#1F1F2B] bg-[#0A0A0F] px-4 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:border-[#7C3AED] focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-xs text-gray-400">Email</label>
              <input
                type="email"
                placeholder="alex@company.com"
                className="rounded-lg border border-[#1F1F2B] bg-[#0A0A0F] px-4 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:border-[#7C3AED] focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-xs text-gray-400">Company</label>
              <input
                type="text"
                placeholder="Company Inc."
                className="rounded-lg border border-[#1F1F2B] bg-[#0A0A0F] px-4 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:border-[#7C3AED] focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-xs text-gray-400">Role</label>
              <input
                type="text"
                placeholder="Security Lead"
                className="rounded-lg border border-[#1F1F2B] bg-[#0A0A0F] px-4 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:border-[#7C3AED] focus:outline-none"
              />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="mb-1 text-xs text-gray-400">Preferred date & time</label>
              <input
                type="text"
                placeholder="e.g., Next Tuesday, 2–4 PM PT"
                className="rounded-lg border border-[#1F1F2B] bg-[#0A0A0F] px-4 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:border-[#7C3AED] focus:outline-none"
              />
            </div>
            <div className="md:col-span-2 mt-2 flex items-center justify-between">
              <p className="text-xs text-gray-500">We respond within one business day.</p>
              <button
                type="button"
                className="rounded-lg bg-[#7C3AED] px-5 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] transition hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]"
              >
                Request Demo
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
