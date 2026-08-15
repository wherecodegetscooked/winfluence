import React from 'react';
import type { Language } from '../App';

const creatorSignupUrl = 'https://creator.winfluence.net/';

interface SiaPageProps {
  language: Language;
}

const content = {
  de: {
    date: 'Oktober 2026',
    title: 'Schön, dass du hier bist.',
    body: 'Wir freuen uns sehr, dass du über den Swiss Influence Award den Weg zu winfluence gefunden hast. Als Influencer:in bist du bei uns genau richtig: Entdecke passende Kampagnen, arbeite mit spannenden Brands zusammen und werde Teil unserer Creator-Community.',
    button: 'Jetzt anmelden',
  },
  en: {
    date: 'October 2026',
    title: 'Great to have you here.',
    body: 'We are delighted that the Swiss Influence Award has brought you to winfluence. As a creator, you are in exactly the right place: discover campaigns that suit you, collaborate with exciting brands and become part of our creator community.',
    button: 'Sign up now',
  },
} satisfies Record<Language, Record<string, string>>;

export const SiaPage: React.FC<SiaPageProps> = ({ language }) => {
  const copy = content[language];

  return (
    <>
      <section className="pt-16">
        <div className="relative overflow-hidden bg-zinc-950">
          <img
            src="/sia-2026.jpg"
            alt="Publikum am Swiss Influence Award"
            className="h-[58vh] min-h-[420px] max-h-[760px] w-full object-cover object-center sm:h-[68vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-10 text-white sm:pb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">{copy.date}</p>
            <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Swiss Influence Award
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2>{copy.title}</h2>
          <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-zinc-500">{copy.body}</p>
          <a
            href={creatorSignupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-14 items-center justify-center rounded-lg bg-accent px-12 text-white transition-colors hover:bg-accent-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {copy.button}
          </a>
        </div>
      </section>
    </>
  );
};
