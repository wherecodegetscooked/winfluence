import React, { useEffect, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import type { Language } from '../App';

const campaignsApiUrl = 'https://rssnbsduduboxlrvpodw.supabase.co/functions/v1/public-campaigns';
const campaignDetailApiUrl = 'https://rssnbsduduboxlrvpodw.supabase.co/functions/v1/public-campaign-detail';
const applyUrl = 'https://creator.winfluence.net/';

interface Campaign {
  id: number;
  campaignVisualUrl: string;
  brandLogoUrl: string;
  brandName: string;
  title: string;
  industry: string | null;
  budget: number;
  barter: number;
  start: string;
  end: string;
  applyTill: string;
  postType?: string | null;
}

interface CampaignsResponse {
  campaigns: Campaign[];
}

interface CampaignDetailData {
  id: number;
  brand_name: string;
  brand_logo_url: string;
  campaign_visual_url: string;
  title: string;
  product: string | null;
  goal: string | null;
  targetgroup: string | null;
  key_message: string | null;
  briefing: string | null;
  hashtags: string | null;
  link_list: string | null;
  post_type: string | null;
  requirements: string | null;
  start: string;
  ende: string;
  apply_till: string;
  budget: number;
  barter_value: number;
  barter_desc: string | null;
  industry: string | null;
}

interface CampaignDetailResponse {
  campaign: CampaignDetailData;
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
    brandCampaign: 'Brand & Kampagne',
    headline: 'Headline',
    budgetContent: 'Budget & Content',
    barterPromo: 'Barter & Promo',
    schedule: 'Termine',
    allCreators: 'für alle Creators',
    contentPiece: 'Content Piece',
    forCreator: 'für Creator',
    forFollowers: 'für Follower',
    applicationPeriod: 'Zeitraum für Bewerbung',
    publicationPeriod: 'Zeitraum zum Publizieren',
    notProvided: 'Nicht angegeben',
    until: 'bis',
    title: 'Marktplatz',
    brand: 'Brand',
    campaign: 'Kampagne',
    category: 'Kategorie',
    budget: 'Budget',
    barter: 'Barter',
    dates: 'Start & Ende',
    applyUntil: 'bewerben bis',
    apply: 'bewerben',
    details: 'Details',
    overview: 'Zurück zur Übersicht',
    expired: 'abgelaufen',
    loading: 'Kampagnen werden geladen…',
    error: 'Die Kampagnen konnten nicht geladen werden.',
    retry: 'Erneut versuchen',
    empty: 'Zurzeit sind keine Kampagnen ausgeschrieben.',
    detailError: 'Die Kampagnendetails konnten nicht geladen werden.',
    product: 'Produkt',
    goal: 'Ziel',
    targetGroup: 'Zielgruppe',
    keyMessage: 'Kernbotschaft',
    briefing: 'Briefing',
    content: 'Content',
    requirements: 'Anforderungen',
    compensation: 'Vergütung',
    hashtags: 'Hashtags',
    links: 'Links',
  },
  en: {
    brandCampaign: 'Brand & Campaign',
    headline: 'Headline',
    budgetContent: 'Budget & Content',
    barterPromo: 'Barter & Promo',
    schedule: 'Dates',
    allCreators: 'for all creators',
    contentPiece: 'Content piece',
    forCreator: 'for creator',
    forFollowers: 'for followers',
    applicationPeriod: 'Application period',
    publicationPeriod: 'Publication period',
    notProvided: 'Not provided',
    until: 'until',
    title: 'Marketplace',
    brand: 'Brand',
    campaign: 'Campaign',
    category: 'Category',
    budget: 'Budget',
    barter: 'Barter',
    dates: 'Start & End',
    applyUntil: 'apply until',
    apply: 'apply',
    details: 'Details',
    overview: 'Back to overview',
    expired: 'closed',
    loading: 'Loading campaigns…',
    error: 'The campaigns could not be loaded.',
    retry: 'Try again',
    empty: 'There are currently no open campaigns.',
    detailError: 'The campaign details could not be loaded.',
    product: 'Product',
    goal: 'Goal',
    targetGroup: 'Target group',
    keyMessage: 'Key message',
    briefing: 'Briefing',
    content: 'Content',
    requirements: 'Requirements',
    compensation: 'Compensation',
    hashtags: 'Hashtags',
    links: 'Links',
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

const formatMoney = (value: number) => `CHF ${new Intl.NumberFormat('de-CH', { maximumFractionDigits: 0 }).format(value)}.–`;

const formatContent = (value?: string | null) => value
  ? value.charAt(0).toUpperCase() + value.slice(1)
  : '–';

const formatOverviewDate = (value: string) => new Intl.DateTimeFormat('de-CH', {
  day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Europe/Zurich',
}).format(new Date(value));

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

const getCampaignIdFromUrl = () => {
  const id = Number(new URLSearchParams(window.location.search).get('id'));
  return Number.isInteger(id) && id > 0 ? id : null;
};

export const MarketplacePage: React.FC<MarketplacePageProps> = ({ language }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [requestKey, setRequestKey] = useState(0);
  const [now, setNow] = useState(() => Date.now());
  const [selectedCampaignId, setSelectedCampaignId] = useState<number | null>(getCampaignIdFromUrl);
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
        const items = Array.isArray(data.campaigns) ? data.campaigns : [];
        setCampaigns(items);
        setIsLoading(false);

        // The list endpoint does not expose the content format; enrich it from
        // the existing public detail endpoint without delaying the overview.
        const details = await Promise.allSettled(items.map(async (campaign) => {
          const detailResponse = await fetch(`${campaignDetailApiUrl}?id=${encodeURIComponent(campaign.id)}`, { signal: controller.signal });
          if (!detailResponse.ok) throw new Error('Could not load content format');
          const detail: CampaignDetailResponse = await detailResponse.json();
          return { ...campaign, postType: detail.campaign.post_type };
        }));
        if (!controller.signal.aborted) {
          setCampaigns(items.map((campaign, index) => {
            const result = details[index];
            return result.status === 'fulfilled' ? result.value : campaign;
          }));
        }
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

  useEffect(() => {
    const handleLocationChange = () => setSelectedCampaignId(getCampaignIdFromUrl());
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const showCampaign = (id: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set('id', String(id));
    window.history.pushState({ marketplaceDetail: true }, '', `${url.pathname}${url.search}`);
    setSelectedCampaignId(id);
    window.scrollTo(0, 0);
  };

  const showOverview = () => {
    if (window.history.state?.marketplaceDetail) {
      window.history.back();
      return;
    }

    const url = new URL(window.location.href);
    url.searchParams.delete('id');
    window.history.replaceState({}, '', `${url.pathname}${url.search}`);
    setSelectedCampaignId(null);
    window.scrollTo(0, 0);
  };

  if (selectedCampaignId !== null) {
    return (
      <CampaignDetailPage
        campaignId={selectedCampaignId}
        language={language}
        now={now}
        onBack={showOverview}
      />
    );
  }

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
          <div className="marketplace-list">
            <div className="marketplace-guides" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>
            <div className="marketplace-headings" aria-hidden="true">
              <span>{copy.brandCampaign}</span>
              <span>{copy.headline}</span>
              <span>{copy.budgetContent}</span>
              <span>{copy.barterPromo}</span>
              <span>{copy.schedule}</span>
            </div>
            {campaigns.map((campaign) => (
              <CampaignRow key={campaign.id} campaign={campaign} language={language} onShowDetails={showCampaign} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const CampaignRow: React.FC<{ campaign: Campaign; language: Language; onShowDetails: (id: number) => void }> = ({ campaign, language, onShowDetails }) => {
  const copy = translations[language];

  return (
    <article className="marketplace-row" aria-label={`${campaign.brandName}: ${campaign.title}`}>
      <div className="marketplace-images">
        <button
          type="button"
          onClick={() => onShowDetails(campaign.id)}
          className="marketplace-brand"
          aria-label={`${copy.details}: ${campaign.title}`}
        >
          <img src={campaign.brandLogoUrl} alt={campaign.brandName} />
          <span className="marketplace-magnifier"><ZoomIn size={38} strokeWidth={1.2} /></span>
        </button>
        <button
          type="button"
          onClick={() => onShowDetails(campaign.id)}
          className="marketplace-visual"
          aria-label={`${copy.details}: ${campaign.title}`}
        >
          <img src={campaign.campaignVisualUrl} alt={campaign.title} loading="lazy" />
        </button>
      </div>
      <div className="marketplace-cell marketplace-headline">
        <span className="marketplace-mobile-label">{copy.headline}</span>
        <h2>{campaign.title}</h2>
      </div>
      <div className="marketplace-cell">
        <span className="marketplace-mobile-label">{copy.budgetContent}</span>
        <OverviewValue value={formatMoney(campaign.budget)} label={copy.allCreators} />
        <OverviewValue value={formatContent(campaign.postType)} label={copy.contentPiece} missing={!campaign.postType ? copy.notProvided : undefined} />
      </div>
      <div className="marketplace-cell">
        <span className="marketplace-mobile-label">{copy.barterPromo}</span>
        <OverviewValue value={formatMoney(campaign.barter)} label={copy.forCreator} />
        <OverviewValue value="–" label={copy.forFollowers} missing={copy.notProvided} />
      </div>
      <div className="marketplace-cell marketplace-dates">
        <span className="marketplace-mobile-label">{copy.schedule}</span>
        <OverviewValue value={`${copy.until} ${formatOverviewDate(campaign.applyTill)}`} label={copy.applicationPeriod} />
        <OverviewValue value={`${formatOverviewDate(campaign.start)}–${formatOverviewDate(campaign.end)}`} label={copy.publicationPeriod} />
      </div>
    </article>
  );
};

const OverviewValue: React.FC<{ value: string; label: string; missing?: string }> = ({ value, label, missing }) => (
  <div className="marketplace-value">
    <p aria-label={missing} title={missing}>{value}</p>
    <p className="marketplace-description">{label}</p>
  </div>
);

const CampaignDetail: React.FC<{ label: string; value: string; secondaryValue?: string }> = ({ label, value, secondaryValue }) => (
  <div>
    <dt className="text-sm text-zinc-500">{label}</dt>
    <dd className="mt-0.5 text-zinc-800">
      {value}
      {secondaryValue && <span className="block font-semibold text-zinc-950">{secondaryValue}</span>}
    </dd>
  </div>
);

const CampaignDetailPage: React.FC<{ campaignId: number; language: Language; now: number; onBack: () => void }> = ({ campaignId, language, now, onBack }) => {
  const [campaign, setCampaign] = useState<CampaignDetailData | null>(null);
  const [hasError, setHasError] = useState(false);
  const [requestKey, setRequestKey] = useState(0);
  const copy = translations[language];

  useEffect(() => {
    const controller = new AbortController();

    const loadCampaign = async () => {
      setCampaign(null);
      setHasError(false);

      try {
        const response = await fetch(`${campaignDetailApiUrl}?id=${encodeURIComponent(campaignId)}`, { signal: controller.signal });
        if (!response.ok) throw new Error(`Could not load campaign: ${response.status}`);

        const data: CampaignDetailResponse = await response.json();
        if (!data.campaign) throw new Error('Campaign missing in response');
        setCampaign(data.campaign);
      } catch (error) {
        if ((error as DOMException).name !== 'AbortError') setHasError(true);
      }
    };

    void loadCampaign();
    return () => controller.abort();
  }, [campaignId, requestKey]);

  return (
    <section className="pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <button type="button" onClick={onBack} className="text-zinc-500 transition-colors hover:text-accent">
          ← {copy.overview}
        </button>

        {!campaign && !hasError && <p className="mt-20 text-zinc-500">{copy.loading}</p>}

        {hasError && (
          <div className="mt-20 text-zinc-500" role="alert">
            <p>{copy.detailError}</p>
            <button
              type="button"
              onClick={() => setRequestKey((key) => key + 1)}
              className="mt-5 rounded-full border border-zinc-300 px-7 py-3 text-zinc-700 transition-colors hover:border-accent hover:text-accent"
            >
              {copy.retry}
            </button>
          </div>
        )}

        {campaign && <CampaignDetailContent campaign={campaign} language={language} now={now} />}
      </div>
    </section>
  );
};

const CampaignDetailContent: React.FC<{ campaign: CampaignDetailData; language: Language; now: number }> = ({ campaign, language, now }) => {
  const copy = translations[language];
  const countdown = getCountdown(campaign.apply_till, now);

  const narrativeDetails = [
    [copy.product, campaign.product],
    [copy.goal, campaign.goal],
    [copy.targetGroup, campaign.targetgroup],
    [copy.keyMessage, campaign.key_message],
    [copy.briefing, campaign.briefing],
    [copy.content, campaign.post_type],
    [copy.requirements, campaign.requirements],
  ].filter((detail): detail is [string, string] => Boolean(detail[1]));

  const links = campaign.link_list?.split(/[\n,]+/).map((link) => link.trim()).filter(Boolean) ?? [];

  return (
    <article className="mt-12">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
        <img src={campaign.campaign_visual_url} alt="" className="aspect-[4/3] w-full rounded-3xl object-cover" />

        <div>
          <div className="flex items-center gap-4">
            <img src={campaign.brand_logo_url} alt={`${campaign.brand_name} logo`} className="h-16 w-16 rounded-full object-contain" />
            <p>{campaign.brand_name}</p>
          </div>
          <h1 className="mt-7">{campaign.title}</h1>
          <p className="mt-5 text-zinc-500">{formatIndustry(campaign.industry, language)}</p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-zinc-200 py-7">
            <CampaignDetail label={copy.budget} value={formatMoney(campaign.budget)} />
            <CampaignDetail label={copy.barter} value={formatMoney(campaign.barter_value)} />
            <CampaignDetail label={copy.dates} value={formatDateRange(campaign.start, campaign.ende)} />
            <CampaignDetail label={copy.applyUntil} value={formatDate(campaign.apply_till)} secondaryValue={countdown ?? copy.expired} />
          </dl>

          {campaign.barter_desc && (
            <div className="mt-7">
              <h2 className="text-2xl">{copy.compensation}</h2>
              <p className="mt-3 whitespace-pre-line text-zinc-700">{campaign.barter_desc}</p>
            </div>
          )}

          <div className="mt-8 max-w-[220px]">
            <ApplyButton language={language} isExpired={!countdown} />
          </div>
        </div>
      </div>

      {narrativeDetails.length > 0 && (
        <div className="mt-16 grid gap-x-12 gap-y-10 border-t border-zinc-200 pt-12 md:grid-cols-2">
          {narrativeDetails.map(([label, value]) => (
            <section key={label}>
              <h2 className="text-2xl">{label}</h2>
              <p className="mt-3 whitespace-pre-line text-zinc-700">{value}</p>
            </section>
          ))}
        </div>
      )}

      {(campaign.hashtags || links.length > 0) && (
        <div className="mt-12 grid gap-x-12 gap-y-8 border-t border-zinc-200 pt-10 md:grid-cols-2">
          {campaign.hashtags && (
            <section>
              <h2 className="text-2xl">{copy.hashtags}</h2>
              <p className="mt-3 text-zinc-700">{campaign.hashtags}</p>
            </section>
          )}
          {links.length > 0 && (
            <section>
              <h2 className="text-2xl">{copy.links}</h2>
              <div className="mt-3 flex flex-col items-start gap-2">
                {links.map((link) => (
                  <a key={link} href={link} target="_blank" rel="noopener noreferrer" className="break-all text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-accent">
                    {link}
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </article>
  );
};

const ApplyButton: React.FC<{ language: Language; isExpired: boolean }> = ({ language, isExpired }) => {
  const copy = translations[language];
  const className = 'inline-flex min-h-14 w-full items-center justify-center rounded-full border px-8 transition-colors';

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
