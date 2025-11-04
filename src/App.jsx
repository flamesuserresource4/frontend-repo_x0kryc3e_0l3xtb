import React from 'react';
import Hero from './components/Hero';
import WhyVigilhawk from './components/WhyVigilhawk';
import FeaturesPreview from './components/FeaturesPreview';
import SolutionsUseCases from './components/SolutionsUseCases';
import TrustSecurity from './components/TrustSecurity';
import ContactDemo from './components/ContactDemo';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#0A0A0F' }}>
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[#1F1F2B] backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0F]/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-block h-2 w-2 rounded-full bg-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
            <span className="text-sm font-semibold tracking-wide">Vigilhawk Labs</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            <a href="#features" className="hover:text-white">Platform</a>
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#why" className="hover:text-white">Why Vigilhawk</a>
            <a href="#trust" className="hover:text-white">Security</a>
            <a href="#contact" className="rounded-md bg-[#7C3AED] px-4 py-2 text-white hover:opacity-90">Book a Demo</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <WhyVigilhawk />
      <FeaturesPreview />
      <SolutionsUseCases />
      <TrustSecurity />
      <ContactDemo />
      <SiteFooter />
    </div>
  );
}
