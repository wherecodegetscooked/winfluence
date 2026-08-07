import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import type { Page } from '../types';
import type { Language } from '../App';

interface FooterProps {
  navigateTo: (page: Page) => void;
  language: Language;
}

// Footer-Links in der gewuenschten Reihenfolge.
const footerLinks: { page: Page; label: Record<Language, string> }[] = [
  { page: 'impressum', label: { de: 'Impressum', en: 'Imprint' } },
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

        <div className="flex items-center gap-1 text-zinc-500 md:ml-auto">
          <SocialLink
            href="https://www.linkedin.com/company/winfluence-net/?viewAsMember=true"
            label="LinkedIn"
          >
            <Linkedin size={18} strokeWidth={1.75} />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/unuhmarketplace/" label="Instagram">
            <Instagram size={18} strokeWidth={1.75} />
          </SocialLink>
          <SocialLink href="https://www.facebook.com/LaraPhonisk" label="Facebook">
            <Facebook size={18} strokeWidth={1.75} />
          </SocialLink>
          <SocialLink href="https://www.tiktok.com/@unuhmarketplace" label="TikTok">
            <TikTokIcon />
          </SocialLink>
          <SocialLink href="https://www.youtube.com/@unuhmarketplace/shorts" label="YouTube">
            <Youtube size={19} strokeWidth={1.75} />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{
  href: string;
  label: string;
  children: React.ReactNode;
}> = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex h-9 w-9 items-center justify-center transition-colors hover:text-zinc-900"
  >
    {children}
  </a>
);

const TikTokIcon: React.FC = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px] fill-current"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.72-.03-.5-.04-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.45 3.99-2.14 6.17-1.73.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.03-1.36 1.74-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);
