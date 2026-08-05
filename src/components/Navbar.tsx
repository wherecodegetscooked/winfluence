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
export const Navbar: React.FC<NavbarProps> = ({ language, toggleLanguage }) => {
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

        <a
          href="https://marketplace.winfluence.net"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="winfluence Marketplace"
          className="flex h-9 w-9 items-center justify-center text-zinc-700 transition-colors hover:text-zinc-900"
        >
          <Megaphone size={20} strokeWidth={1.75} aria-hidden="true" />
        </a>

      </div>
    </nav>
  );
};
