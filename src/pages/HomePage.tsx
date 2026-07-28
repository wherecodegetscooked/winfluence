import React, { useState } from 'react';
import { RefreshCw, ChevronDown } from 'lucide-react';
import { Placeholder } from '../components';
import {
  siteConfig,
  brandLogos,
  heroCollage,
  caseStudies,
  dashboardTalents,
} from '../constants';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <CreatorsSection />
      <BrandsSection />
      <CaseStudySection />
    </>
  );
};

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
const Hero: React.FC = () => (
  <section className="relative overflow-hidden pt-32 md:pt-40 pb-28 lg:min-h-[900px]">
    <div className="max-w-7xl mx-auto px-6">
      {/* Text-Spalte */}
      <div className="ml-[38px] max-w-xl lg:max-w-md">
        <img src="/winfluence_logo.png" alt="winfluence" className="h-7 md:h-9 w-auto" />
        <h1 className="mt-16 md:mt-24 tracking-tight">
          Connecting
          <br />
          brands with creators
        </h1>
        <p className="mt-10 text-zinc-500 leading-relaxed max-w-md">
          {siteConfig.description}
        </p>

        <p className="mt-24 md:mt-28 text-[17px] text-zinc-500">
          Some of the {siteConfig.brandsCount} brands we work with…
        </p>
        {/* Gemeinsame Unterkante hält die unterschiedlich proportionierten Logos optisch auf einer Höhe. */}
        <div className="mt-8 flex flex-wrap items-end gap-x-4 gap-y-5">
          {brandLogos.map((b) => (
            <div key={b.name} className="h-9 sm:h-11 flex items-end shrink-0">
              <img
                src={b.src}
                alt={b.name}
                className="max-h-full w-auto max-w-[7rem] object-contain"
              />
            </div>
          ))}
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
const CaseStudySection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const study = caseStudies[index];
  const next = () => setIndex((i) => (i + 1) % caseStudies.length);

  return (
    <section id="cases" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_auto_auto] gap-8 lg:gap-10 items-center">
          {/* Logo + Text */}
          <div className="max-w-md">
            <Placeholder label={`${study.brand} Logo`} className="h-16 w-32" rounded="rounded-md" />
            <p className="mt-8 leading-relaxed text-zinc-700">
              {study.body}
            </p>
          </div>

          {/* Zentrales Bild */}
          <Placeholder
            label={`${study.brand} Kampagne`}
            className="w-full max-w-sm aspect-[4/5] lg:w-80"
            rounded="rounded-sm"
          />

          {/* Statistiken */}
          <div className="flex flex-row lg:flex-col gap-4">
            <StatTile value={study.stats[0].value} label={study.stats[0].label} tone="neutral" />
            <StatTile value={study.stats[1].value} label={study.stats[1].label} tone="accent" />
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={next}
            className="inline-flex items-center gap-3 text-zinc-700 hover:text-black transition-colors font-medium"
          >
            <RefreshCw size={20} strokeWidth={1.75} />
            Next case study
          </button>
        </div>
      </div>
    </section>
  );
};

const StatTile: React.FC<{ value: string; label: string; tone: 'neutral' | 'accent' }> = ({
  value,
  label,
  tone,
}) => (
  <div
    className={`flex flex-col justify-center items-start px-8 py-8 w-40 h-40 ${
      tone === 'accent' ? 'bg-[#f9e3da]' : 'bg-zinc-100'
    }`}
  >
    <span className="text-3xl md:text-4xl font-medium text-zinc-900 whitespace-nowrap">{value}</span>
    <span className="mt-2 text-sm text-zinc-500">{label}</span>
  </div>
);

/* ------------------------------------------------------------------ */
/* Brands                                                              */
/* ------------------------------------------------------------------ */
const BrandsSection: React.FC = () => (
  <section id="brands" className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      {/* Text */}
      <div className="max-w-md lg:pl-8">
        <h2>Brands</h2>
        <p className="mt-8 leading-relaxed text-zinc-500">
          Creating a campaign briefing is as easy as ordering a pizza. Our AI analyzes 300 million
          creator profiles to assemble a cluster of creators that's perfectly tailored to your brand,
          your target audience, and your campaign goals.
        </p>
        <div className="mt-10">
          <OutlineButton>Sign up</OutlineButton>
        </div>
      </div>

      {/* Dashboard-Mockup */}
      <DashboardMockup />
    </div>
  </section>
);

const DashboardMockup: React.FC = () => (
  <div className="relative">
    <div className="rounded-2xl bg-white border border-zinc-200 shadow-2xl shadow-zinc-900/10 overflow-hidden">
      {/* Topbar */}
      <div className="flex items-center gap-6 px-5 py-3 border-b border-zinc-100 text-xs">
        <span className="font-black text-accent text-sm">F</span>
        <span className="text-zinc-400">Campaigns</span>
        <span className="text-zinc-400">Marketplace</span>
        <span className="font-semibold text-zinc-900">Talent</span>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-3">
          <span className="font-semibold">49,337 Talents</span>
          <span className="flex items-center gap-1">
            Sort by reach high to low <ChevronDown size={12} />
          </span>
        </div>

        {/* Filter */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {['All channels', 'All categories', 'Any gender', 'All countries'].map((f) => (
            <div
              key={f}
              className="flex items-center justify-between px-3 py-2 rounded-md border border-zinc-200 text-[11px] text-zinc-500"
            >
              {f} <ChevronDown size={12} />
            </div>
          ))}
        </div>

        {/* Talent-Liste */}
        <div className="space-y-2">
          {dashboardTalents.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-3 p-2 rounded-lg border border-zinc-100"
            >
              <Placeholder label="" className="w-12 h-12 shrink-0" rounded="rounded-md" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-zinc-900 truncate">{t.name}</p>
                <p className="text-[10px] text-zinc-500 truncate">
                  {t.category} · {t.country}
                </p>
                <span className="mt-1 inline-block text-[10px] font-semibold text-accent">Invite</span>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-bold text-zinc-900">{t.reach}</p>
                <p className="text-[9px] text-zinc-400">potential reach</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Creators                                                            */
/* ------------------------------------------------------------------ */
const CreatorsSection: React.FC = () => (
  <section id="creators" className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      {/* Phone-Mockup */}
      <div className="flex justify-center lg:justify-start">
        <PhoneMockup />
      </div>

      {/* Text */}
      <div className="max-w-md">
        <h2>Creators</h2>
        <p className="mt-8 leading-relaxed text-zinc-500">
          Find a Callab that's right for you, apply, get hired, post, and get paid – all fully
          automated.
        </p>
        <div className="mt-10">
          <OutlineButton>Apply</OutlineButton>
        </div>
      </div>
    </div>
  </section>
);

const PhoneMockup: React.FC = () => (
  <img
    src="/screen.png"
    alt="winfluence Marketplace in der Creator-App"
    className="w-[260px] sm:w-[300px] h-auto shadow-2xl shadow-zinc-900/30"
  />
);

/* ------------------------------------------------------------------ */
/* Shared                                                              */
/* ------------------------------------------------------------------ */
const OutlineButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="px-12 py-4 rounded-lg border border-zinc-300 text-zinc-700 hover:border-accent hover:text-accent transition-colors">
    {children}
  </button>
);
