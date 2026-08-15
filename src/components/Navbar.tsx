import React from 'react';
import { Megaphone } from 'lucide-react';
import type { Page } from '../types';
import type { Language } from '../App';

interface NavbarProps {
  scrolled: boolean;
  currentPage: Page;
  navigateTo: (page: Page) => void;
  language: Language;
  toggleLanguage: () => void;
}

// Minimale Topbar wie im Design: rechts Sprache (DE) und App-Icon.
export const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo, language, toggleLanguage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 h-16 flex items-center justify-end gap-6">
        <button
          className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          onClick={toggleLanguage}
          aria-label="Sprache wechseln"
        >
          {language === 'en' ? 'DE' : 'EN'}
        </button>

        <button
          type="button"
          onClick={() => navigateTo('marktplatz')}
          aria-label="winfluence Marketplace"
          aria-current={currentPage === 'marktplatz' ? 'page' : undefined}
          className={`flex h-9 w-9 items-center justify-center transition-colors hover:text-zinc-900 ${currentPage === 'marktplatz' ? 'text-accent' : 'text-zinc-700'}`}
        >
          <Megaphone size={20} strokeWidth={1.75} aria-hidden="true" />
        </button>

      </div>
    </nav>
  );
};
