import React, { useEffect, useState } from 'react';
import type { Language } from '../App';

const campaignsApiUrl = 'https://rssnbsduduboxlrvpodw.supabase.co/functions/v1/public-campaigns';
const applyUrl = 'https://creator.winfluence.net/';

interface Campaign {
  campaignVisualUrl: string;
  brandName: string;
  title: string;
  industry: string | null;
  budget: number;
  barter: number;
  start: string;
  end: string;
  applyTill: string;
}

interface CampaignsResponse {
  campaigns: Campaign[];
}

interface MarketplacePageProps {
  language: Language;
}

const industryLabels: Record<string, Record<Language, string>> = {
  beauty_cosmetics: { de: 'Beauty & Kosmetik', en: 'Beauty & Cosmetics' },
  fashion: { de: 'Mode', en: 'Fashion' },
  food_beverage: { de: 'Essen & Getränke', en: 'Food & Beverages' },
  health_fitness: { de: 'Gesundheit & Fitness', en: 'Health & Fitness' },
  travel: { de: 'Reisen', en: 'Travel' },
};

const translations = {
  de: {
    title: 'Marktplatz',
    brand: 'Brand',
    campaign: 'Kampagne',
    category: 'Kategorie',
    budget: 'Budget',
    barter: 'Barter',
    dates: 'Start & Ende',
    applyUntil: 'bewerben bis',
    apply: 'bewerben',
    expired: 'abgelaufen',
    loading: 'Kampagnen werden geladen…',
    error: 'Die Kampagnen konnten nicht geladen werden.',
    retry: 'Erneut versuchen',
    empty: 'Zurzeit sind keine Kampagnen ausgeschrieben.',
  },
  en: {
    title: 'Marketplace',
    brand: 'Brand',
    campaign: 'Campaign',
    category: 'Category',
    budget: 'Budget',
    barter: 'Barter',
    dates: 'Start & End',
    applyUntil: 'apply until',
    apply: 'apply',
    expired: 'closed',
    loading: 'Loading campaigns…',
    error: 'The campaigns could not be loaded.',
    retry: 'Try again',
    empty: 'There are currently no open campaigns.',
  },
} satisfies Record<Language, Record<string, string>>;

const dateParts = (value: string) => {
  const parts = new Intl.DateTimeFormat('de-CH', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    timeZone: 'Europe/Zurich',
  }).formatToParts(new Date(value));

  return Object.fromEntries(parts.map(({ type, value: partValue }) => [type, partValue]));
};

const formatDate = (value: string) => {
  const parts = dateParts(value);
  return `${parts.day}.${parts.month}.${parts.year}`;
};

const formatDateRange = (start: string, end: string) => {
  const startParts = dateParts(start);
  const endParts = dateParts(end);

  if (startParts.year === endParts.year) {
    return `${startParts.day}.${startParts.month}.–${endParts.day}.${endParts.month}.${endParts.year}`;
  }

  return `${startParts.day}.${startParts.month}.${startParts.year}–${endParts.day}.${endParts.month}.${endParts.year}`;
};

const formatMoney = (value: number) => `CHF ${Math.round(value)}.–`;

const formatIndustry = (industry: string | null, language: Language) => {
  if (!industry) return '–';
  if (industryLabels[industry]) return industryLabels[industry][language];

  return industry
    .split('_')
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ');
};

const getCountdown = (deadline: string, now: number) => {
  const difference = new Date(deadline).getTime() - now;
  if (difference <= 0) return null;

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days}d:${String(hours).padStart(2, '0')}h:${String(minutes).padStart(2, '0')}m:${String(seconds).padStart(2, '0')}`;
};

export const MarketplacePage: React.FC<MarketplacePageProps> = ({ language }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [requestKey, setRequestKey] = useState(0);
  const [now, setNow] = useState(() => Date.now());
  const copy = translations[language];

  useEffect(() => {
    const controller = new AbortController();

    const loadCampaigns = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const response = await fetch(campaignsApiUrl, { signal: controller.signal });
        if (!response.ok) throw new Error(`Could not load campaigns: ${response.status}`);

        const data: CampaignsResponse = await response.json();
        setCampaigns(Array.isArray(data.campaigns) ? data.campaigns : []);
      } catch (error) {
        if ((error as DOMException).name !== 'AbortError') setHasError(true);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    void loadCampaigns();
    return () => controller.abort();
  }, [requestKey]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
        <h1>{copy.title}</h1>

        {isLoading ? (
          <p className="mt-20 text-zinc-500">{copy.loading}</p>
        ) : hasError ? (
          <div className="mt-20 text-zinc-500" role="alert">
            <p>{copy.error}</p>
            <button
              type="button"
              onClick={() => setRequestKey((key) => key + 1)}
              className="mt-5 rounded-full border border-zinc-300 px-7 py-3 text-zinc-700 transition-colors hover:border-accent hover:text-accent"
            >
              {copy.retry}
            </button>
          </div>
        ) : campaigns.length === 0 ? (
          <p className="mt-20 text-zinc-500">{copy.empty}</p>
        ) : (
          <>
            <div className="mt-20 hidden xl:mt-24 xl:block">
              <div className="grid grid-cols-[1.5fr_1.35fr_1.05fr_.8fr_.65fr_1.15fr_1fr_160px] gap-x-6 border-b border-zinc-200 pb-4 text-[17px] font-medium text-zinc-500">
                <span>{copy.brand}</span>
                <span>{copy.campaign}</span>
                <span>{copy.category}</span>
                <span>{copy.budget}</span>
                <span>{copy.barter}</span>
                <span>{copy.dates}</span>
                <span>{copy.applyUntil}</span>
                <span aria-hidden="true" />
              </div>

              {campaigns.map((campaign) => (
                <CampaignRow key={`${campaign.brandName}-${campaign.title}-${campaign.applyTill}`} campaign={campaign} language={language} now={now} />
              ))}
            </div>

            <div className="mt-14 divide-y divide-zinc-200 border-y border-zinc-200 xl:hidden">
              {campaigns.map((campaign) => (
                <CampaignCard key={`${campaign.brandName}-${campaign.title}-${campaign.applyTill}`} campaign={campaign} language={language} now={now} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const CampaignRow: React.FC<{ campaign: Campaign; language: Language; now: number }> = ({ campaign, language, now }) => {
  const copy = translations[language];
  const countdown = getCountdown(campaign.applyTill, now);

  return (
    <article className="grid min-h-[138px] grid-cols-[1.5fr_1.35fr_1.05fr_.8fr_.65fr_1.15fr_1fr_160px] items-center gap-x-6 border-b border-zinc-200 py-7 text-[18px]">
      <div className="flex min-w-0 items-center gap-5">
        <img src={campaign.campaignVisualUrl} alt="" className="h-14 w-14 shrink-0 rounded-full object-cover" />
        <span className="whitespace-nowrap font-normal">{campaign.brandName}</span>
      </div>
      <p className="truncate font-normal" title={campaign.title}>{campaign.title}</p>
      <p>{formatIndustry(campaign.industry, language)}</p>
      <p className="whitespace-nowrap">{formatMoney(campaign.budget)}</p>
      <p className="whitespace-nowrap">{formatMoney(campaign.barter)}</p>
      <p className="whitespace-nowrap">{formatDateRange(campaign.start, campaign.end)}</p>
      <div>
        <p>{formatDate(campaign.applyTill)}</p>
        <p className="mt-0.5 whitespace-nowrap font-semibold text-zinc-950">{countdown ?? copy.expired}</p>
      </div>
      <ApplyButton language={language} isExpired={!countdown} />
    </article>
  );
};

const CampaignCard: React.FC<{ campaign: Campaign; language: Language; now: number }> = ({ campaign, language, now }) => {
  const copy = translations[language];
  const countdown = getCountdown(campaign.applyTill, now);

  return (
    <article className="py-8">
      <div className="flex items-center gap-4">
        <img src={campaign.campaignVisualUrl} alt="" className="h-16 w-16 shrink-0 rounded-full object-cover" />
        <div className="min-w-0">
          <p className="text-sm text-zinc-500">{copy.brand}</p>
          <p className="whitespace-nowrap text-lg font-normal">{campaign.brandName}</p>
        </div>
      </div>

      <h2 className="mt-6 text-2xl font-normal leading-snug">{campaign.title}</h2>

      <dl className="mt-6 grid grid-cols-2 gap-x-5 gap-y-5">
        <CampaignDetail label={copy.category} value={formatIndustry(campaign.industry, language)} />
        <CampaignDetail label={copy.dates} value={formatDateRange(campaign.start, campaign.end)} />
        <CampaignDetail label={copy.budget} value={formatMoney(campaign.budget)} />
        <CampaignDetail label={copy.barter} value={formatMoney(campaign.barter)} />
        <CampaignDetail
          label={copy.applyUntil}
          value={formatDate(campaign.applyTill)}
          secondaryValue={countdown ?? copy.expired}
        />
      </dl>

      <div className="mt-7">
        <ApplyButton language={language} isExpired={!countdown} />
      </div>
    </article>
  );
};

const CampaignDetail: React.FC<{ label: string; value: string; secondaryValue?: string }> = ({ label, value, secondaryValue }) => (
  <div>
    <dt className="text-sm text-zinc-500">{label}</dt>
    <dd className="mt-0.5 text-zinc-800">
      {value}
      {secondaryValue && <span className="block font-semibold text-zinc-950">{secondaryValue}</span>}
    </dd>
  </div>
);

const ApplyButton: React.FC<{ language: Language; isExpired: boolean }> = ({ language, isExpired }) => {
  const copy = translations[language];
  const className = 'inline-flex min-h-14 w-full items-center justify-center rounded-full border px-8 text-lg font-normal transition-colors';

  if (isExpired) {
    return (
      <span className={`${className} cursor-not-allowed border-zinc-200 text-zinc-400`} aria-disabled="true">
        {copy.expired}
      </span>
    );
  }

  return (
    <a
      href={applyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} border-zinc-300 text-zinc-800 hover:border-accent hover:text-accent`}
    >
      {copy.apply}
    </a>
  );
};
