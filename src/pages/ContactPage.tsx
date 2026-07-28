import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { siteConfig } from '../constants';

// Platzhalter-Kontaktseite. Kontaktdaten kommen aus src/constants.
export const ContactPage: React.FC = () => {
  return (
    <section className="pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="mb-6">
          Kontakt
        </h1>
        <p className="text-zinc-600 mb-12">
          Platzhalter-Inhalt. Kontaktdaten in src/constants/index.ts pflegen.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <a href={`mailto:${siteConfig.email}`} className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 transition-colors">
            <Mail className="w-5 h-5 text-accent" />
            <span className="text-zinc-900 font-medium">{siteConfig.email}</span>
          </a>
          <a href={siteConfig.phoneHref} className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 transition-colors">
            <Phone className="w-5 h-5 text-accent" />
            <span className="text-zinc-900 font-medium">{siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
