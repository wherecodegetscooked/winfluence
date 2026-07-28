import React from 'react';
import type { Page } from '../types';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

// Genau die vier Footer-Links (Reihenfolge wie gewuenscht).
const footerLinks: { page: Page; label: string }[] = [
  { page: 'datenschutz', label: 'Datenschutzerklärung' },
  { page: 'nutzungsbedingungen', label: 'Nutzungsbedingungen' },
  { page: 'about', label: 'Über winfluence' },
  { page: 'vision', label: 'Vision' },
];

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="relative z-10 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
        {/* Logo ganz links, klein */}
        <button onClick={() => navigateTo('home')} aria-label="Zur Startseite" className="shrink-0">
          <img src="/winfluence_logo.png" alt="winfluence" className="h-4 w-auto" />
        </button>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-zinc-500">
          {footerLinks.map(({ page, label }) => (
            <button key={page} onClick={() => navigateTo(page)} className="hover:text-zinc-900 transition-colors">
              {label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};
