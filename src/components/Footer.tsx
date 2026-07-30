import React from 'react';
import type { Page } from '../types';
import type { Language } from '../App';

interface FooterProps {
  navigateTo: (page: Page) => void;
  language: Language;
}

// Genau die vier Footer-Links (Reihenfolge wie gewuenscht).
const footerLinks: { page: Page; label: Record<Language, string> }[] = [
  { page: 'datenschutz', label: { de: 'Datenschutzerklärung', en: 'Privacy Policy' } },
  { page: 'nutzungsbedingungen', label: { de: 'Nutzungsbedingungen', en: 'Terms of Use' } },
  { page: 'about', label: { de: 'Über winfluence', en: 'About winfluence' } },
  { page: 'vision', label: { de: 'Vision', en: 'Vision' } },
];

export const Footer: React.FC<FooterProps> = ({ navigateTo, language }) => {
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
              {label[language]}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};
