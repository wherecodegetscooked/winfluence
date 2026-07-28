import React from 'react';
import { LogIn } from 'lucide-react';
import type { Page } from '../types';

interface NavbarProps {
  scrolled: boolean;
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

// Minimale Topbar wie im Design: rechts Sprache (DE), App-Icon und Login.
export const Navbar: React.FC<NavbarProps> = ({ navigateTo }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 h-16 flex items-center justify-end gap-6">
        <button
          className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          aria-label="Sprache waehlen"
        >
          DE
        </button>

        <button onClick={() => navigateTo('home')} aria-label="winfluence Marketplace">
          <img src="/marketplace_logo.png" alt="winfluence Marketplace" className="h-9 w-9 rounded-lg object-contain" />
        </button>

        <button
          onClick={() => navigateTo('contact')}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-300 text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 transition-colors"
          aria-label="Login"
        >
          <LogIn size={18} />
        </button>
      </div>
    </nav>
  );
};
