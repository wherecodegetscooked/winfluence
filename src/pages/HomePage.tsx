import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { Placeholder } from '../components';
import {
  siteConfig,
  brandLogos,
  heroCollage,
  caseStudies,
} from '../constants';
import type { Language } from '../App';

const caseStudyTranslations: Record<string, string> = {
  "Levi's":
    'winfluence hat den Nachweis erbracht, dass viele Micro-Influencer mit einer hohen Engagement-Rate besser performen, als ein Makro-Influencer. Die Abwicklung war einfach und wir erreichten mit einem kleine Budget eine spektakuläre Reichweite bei der Gen-Z.',
  DillySocks:
    'DillySocks arbeitete mit einem Cluster von Lifestyle-Creators zusammen, um die saisonale Kollektion zu lancieren. Der automatisierte Briefing-Prozess verband innerhalb von 48 Stunden 24 Creators mit der Marke und lieferte authentischen Content für Instagram und TikTok.',
  'THE CAPRA':
    'THE CAPRA Saas-Fee bespielte die Wintersaison mit einer kuratierten Gruppe von Travel- und Wellness-Creators. Die Kampagne lief vom Briefing bis zur Auszahlung vollautomatisiert und lieferte fortlaufend hochwertigen alpinen Content.',
};

interface HomePageProps {
  language: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ language }) => {
  return (
    <>
      <Hero language={language} />
      <CreatorsSection language={language} />
      <BrandsSection language={language} />
      <CaseStudySection language={language} />
    </>
  );
};

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
const Hero: React.FC<{ language: Language }> = ({ language }) => (
  <section className="relative overflow-hidden pt-32 md:pt-40 pb-28 lg:min-h-[900px]">
    <div className="max-w-7xl mx-auto px-6">
      {/* Text-Spalte */}
      <div className="ml-[38px] max-w-xl lg:max-w-md">
        <img
          src="/winfluence_logo.png"
          alt="winfluence"
          className="-ml-[38px] h-7 w-auto md:h-9"
        />
        <h1 className="mt-16 md:mt-24 tracking-tight">
          Connecting
          <br />
          brands with creators
        </h1>
        <p className="mt-10 text-zinc-500 leading-relaxed max-w-md">
          {language === 'de'
            ? 'winfluence nutzt Daten, um passende Creator-Cluster zusammenzustellen, und automatisiert den Kampagnenprozess – vom Briefing bis zur erfolgreichen Zusammenarbeit.'
            : siteConfig.description}
        </p>

        <p className="mt-24 md:mt-28 text-[17px] text-zinc-500">
          {language === 'de'
            ? `Einige der ${siteConfig.brandsCount} Marken, mit denen wir arbeiten…`
            : `Some of the ${siteConfig.brandsCount} brands we work with…`}
        </p>
        <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          {/* Gleich breite Rasterzellen sorgen unabhängig vom Logoformat für exakte Abstände. */}
          <div className="grid w-full grid-cols-3 items-center gap-x-5 gap-y-6 sm:w-[649.5px] sm:shrink-0 sm:grid-cols-6 sm:gap-x-[19.5px]">
            {brandLogos.map((b) => (
              <div key={b.name} className="flex h-[72px] min-w-0 items-center justify-center">
                <img
                  src={b.src}
                  alt={b.name}
                  className="block max-h-[60px] w-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
          <a
            href="/brands"
            className="inline-flex h-12 shrink-0 items-center text-base font-light leading-relaxed text-zinc-500 transition-colors hover:text-zinc-900"
          >
            {language === 'de' ? 'alle Brands' : 'all brands'}
          </a>
        </div>
      </div>

      {/* Versetzte Bild-Collage. */}
      <HeroCollage />
    </div>
  </section>
);

// Collage rechts im Hero.
// - kleine Screens: im Fluss unter dem Text, fluide, alle sechs sichtbar.
// - grosse Screens: absolut am rechten Rand, leicht darueber hinaus
//   verschoben -> die rechten Bilder werden vom section-overflow angeschnitten.
const HeroCollage: React.FC = () => (
  <div
    className="mt-14 flex justify-center gap-2 sm:gap-3
               lg:mt-0 lg:justify-start lg:absolute lg:top-24 lg:right-0
               lg:translate-x-[16%] xl:translate-x-[9%]"
  >
    {heroCollage.map((col, ci) => (
      <div
        key={ci}
        className={`flex flex-col gap-2 sm:gap-3 w-[27vw] sm:w-32 md:w-36 lg:w-36 xl:w-40 ${col.offset}`}
      >
        {col.tiles.map((tile) => (
          <img
            key={tile.src}
            src={tile.src}
            alt={tile.alt}
            loading="lazy"
            className="w-full h-auto rounded-md shadow-sm"
          />
        ))}
      </div>
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/* Case Studies                                                        */
/* ------------------------------------------------------------------ */
const CaseStudySection: React.FC<{ language: Language }> = ({ language }) => {
  const [index, setIndex] = useState(0);
  const study = caseStudies[index];
  const next = () => setIndex((i) => (i + 1) % caseStudies.length);

  return (
    <section id="cases" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Text */}
          <div className="max-w-md">
            <p className="leading-relaxed text-zinc-700">
              {language === 'de' ? caseStudyTranslations[study.brand] : study.body}
            </p>
          </div>

          {/* Kampagnenbild */}
          {study.image ? (
            <img
              src={study.image}
              alt={`${study.brand} Kampagne`}
              className="h-auto w-full max-w-sm rounded-[4px] border border-zinc-200 lg:w-80"
            />
          ) : (
            <Placeholder
              label={`${study.brand} Kampagne`}
              className="aspect-[4/5] w-full max-w-sm lg:w-80"
              rounded="rounded-sm"
            />
          )}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={next}
            className="inline-flex items-center gap-3 leading-relaxed text-zinc-700 transition-colors hover:text-black"
          >
            <RefreshCw size={20} strokeWidth={1.75} />
            {language === 'de' ? 'Nächste Case Study' : 'Next case study'}
          </button>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Brands                                                              */
/* ------------------------------------------------------------------ */
const BrandsSection: React.FC<{ language: Language }> = ({ language }) => (
  <section id="brands" className="overflow-hidden py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      {/* Text */}
      <div className="max-w-md text-right lg:ml-auto lg:translate-x-32">
        <h2>Brands</h2>
        <p className="mt-8 leading-relaxed text-zinc-500">
          {language === 'de'
            ? 'Ein Kampagnen-Briefing zu erstellen ist so einfach wie eine Pizza zu bestellen. Unsere KI analysiert 300 Millionen Creator-Profile und stellt einen Cluster zusammen, der perfekt zu deiner Marke, deiner Zielgruppe und deinen Kampagnenzielen passt.'
            : "Creating a campaign briefing is as easy as ordering a pizza. Our AI analyzes 300 million creator profiles to assemble a cluster of creators that's perfectly tailored to your brand, your target audience, and your campaign goals."}
        </p>
        <div className="mt-10">
          <OutlineButton href="https://brand.winfluence.net">
            {language === 'de' ? 'Registrieren' : 'Sign up'}
          </OutlineButton>
        </div>
      </div>

      {/* Dashboard-Mockup */}
      <DashboardMockup />
    </div>
  </section>
);

const DashboardMockup: React.FC = () => (
  <img
    src="/brands-laptop.png"
    alt="Laptop-Ansicht der winfluence Plattform"
    className="h-auto w-full lg:translate-x-1/3"
  />
);

/* ------------------------------------------------------------------ */
/* Creators                                                            */
/* ------------------------------------------------------------------ */
const CreatorsSection: React.FC<{ language: Language }> = ({ language }) => (
  <section id="creators" className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      {/* Phone-Mockup */}
      <div className="order-2 flex justify-center lg:order-1 lg:justify-end">
        <PhoneMockup />
      </div>

      {/* Text */}
      <div className="order-1 max-w-md lg:order-2">
        <h2>Creators</h2>
        <p className="mt-8 leading-relaxed text-zinc-500">
          {language === 'de'
            ? 'Finde eine passende Callab, bewirb dich, werde ausgewählt, poste und erhalte deine Vergütung – alles vollautomatisiert.'
            : "Find a Callab that's right for you, apply, get hired, post, and get paid – all fully automated."}
        </p>
        <div className="mt-10">
          <OutlineButton href="https://creator.winfluence.net/">
            {language === 'de' ? 'Bewerben' : 'Apply'}
          </OutlineButton>
        </div>
      </div>
    </div>
  </section>
);

const PhoneMockup: React.FC = () => (
  <img
    src="/screen.png"
    alt="winfluence Marketplace in der Creator-App"
    className="h-auto w-[182px] sm:w-[210px]"
  />
);

/* ------------------------------------------------------------------ */
/* Shared                                                              */
/* ------------------------------------------------------------------ */
const OutlineButton: React.FC<{ children: React.ReactNode; href?: string }> = ({
  children,
  href,
}) => {
  const className =
    'inline-block px-12 py-4 rounded-lg border border-zinc-300 text-zinc-700 hover:border-accent hover:text-accent transition-colors';

  return href ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <button type="button" className={className}>
      {children}
    </button>
  );
};
