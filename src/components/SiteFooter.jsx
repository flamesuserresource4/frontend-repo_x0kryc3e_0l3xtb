import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-[#1F1F2B]" style={{ backgroundColor: '#0A0A0F' }}>
      <div className="mx-auto max-w-7xl px-6 py-12 text-gray-300">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck size={20} className="text-[#7C3AED]" />
              <span className="text-lg font-semibold">Vigilhawk Labs</span>
            </div>
            <p className="text-sm text-gray-400">
              Secure, intelligent, and scalable cybersecurity automation for modern teams.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><a href="#features" className="hover:text-white">Platform</a></li>
              <li><a href="#why" className="hover:text-white">Why Vigilhawk</a></li>
              <li><a href="#" className="hover:text-white">Frameworks</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Mail size={16} className="text-[#7C3AED]" /> contact@vigilhawk.io</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-[#7C3AED]" /> +1 (555) 123-9876</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-[#7C3AED]" /> Remote • Global</li>
            </ul>
            <div className="mt-4 flex items-center gap-3 text-gray-400">
              <a href="#" aria-label="Twitter" className="rounded-md border border-[#1F1F2B] p-2 hover:border-[#7C3AED]/40 hover:text-white"><Twitter size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="rounded-md border border-[#1F1F2B] p-2 hover:border-[#7C3AED]/40 hover:text-white"><Linkedin size={16} /></a>
              <a href="#" aria-label="GitHub" className="rounded-md border border-[#1F1F2B] p-2 hover:border-[#7C3AED]/40 hover:text-white"><Github size={16} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#1F1F2B] pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Vigilhawk Labs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
