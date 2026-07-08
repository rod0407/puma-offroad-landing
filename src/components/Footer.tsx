// Footer.tsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

export const Footer = () => (
  <footer className="w-full py-12 px-6 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-12">
    <div>
      <Button variant="primary">Start a chat</Button>
    </div>
    <div className="flex gap-16 text-base text-[#051A24]">
      <div className="flex flex-col gap-4">
        <a href="#services" className="hover:opacity-70 transition">Services</a>
        <a href="#work" className="hover:opacity-70 transition">Work</a>
        <a href="#about" className="hover:opacity-70 transition">About</a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://x.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:opacity-70 transition">x.com <ArrowUpRight className="w-4 h-4" /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:opacity-70 transition">LinkedIn <ArrowUpRight className="w-4 h-4" /></a>
      </div>
    </div>
  </footer>
);

// CopyrightBar.tsx
export const CopyrightBar = () => (
  <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between text-sm text-[#051A24] border-t border-gray-100">
    <span>Vortex Studio Limited</span>
    <span>Austin, USA</span>
  </div>
);

// BottomNav.tsx
export const BottomNav = () => (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
    <div className="bg-white rounded-full px-8 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] flex items-center gap-6">
      <span className="font-mondwest text-2xl font-semibold text-[#051A24]">V</span>
      <Button variant="primary" className="py-2 px-6 text-sm">Start a chat</Button>
    </div>
  </div>
);