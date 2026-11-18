import React, { useEffect, useState } from 'react';
import { Clapperboard, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
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
    campaignBudget: 'Kampagnenbudget für alle Creators',
    creatorBarter: 'Barter für Creator',
    followerPromo: 'Promo für Follower',
    calendar: 'Kalender',
    deliveryPeriod: 'Zeitraum für den Produkterhalt',
    previousMonths: 'Vorherige Monate',
    nextMonths: 'Nächste Monate',
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
    apply: 'Bewerben',
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
    campaignBudget: 'Campaign budget for all creators',
    creatorBarter: 'Barter for creator',
    followerPromo: 'Promo for followers',
    calendar: 'Calendar',
    deliveryPeriod: 'Product delivery period',
    previousMonths: 'Previous months',
    nextMonths: 'Next months',
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
    apply: 'Apply',
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

const CampaignDetail: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="campaign-detail-field">
    <dt>{label}</dt>
    <dd>{value}</dd>
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
  const isExpired = new Date(campaign.apply_till).getTime() <= now;
  const links = campaign.link_list?.split(/[\n,]+/).map((link) => link.trim()).filter(Boolean) ?? [];
  const safeLinks = links.flatMap((link) => {
    try {
      const url = new URL(/^https?:\/\//i.test(link) ? link : `https://${link}`);
      return url.protocol === 'https:' || url.protocol === 'http:' ? [{ label: link, href: url.href }] : [];
    } catch { return []; }
  });

  return (
    <article className="campaign-detail">
      <header className="campaign-detail-header">
        <img src={campaign.brand_logo_url} alt={campaign.brand_name} className="campaign-detail-logo" />
        <p className="campaign-detail-label">{copy.campaign}</p>
        <h1>{campaign.title}</h1>
      </header>

      <div className="campaign-detail-columns">
        <div className="campaign-detail-story">
          <img src={campaign.campaign_visual_url} alt={campaign.title} className="campaign-detail-visual" />
          <dl className="campaign-detail-fields">
            <CampaignDetail label={copy.brand} value={campaign.brand_name} />
            <CampaignDetail label={copy.category} value={formatIndustry(campaign.industry, language)} />
            {safeLinks.length > 0 && <CampaignDetail label={copy.links} value={safeLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
            ))} />}
            {campaign.hashtags && <CampaignDetail label={copy.hashtags} value={campaign.hashtags} />}
            {campaign.briefing && <CampaignDetail label={copy.briefing} value={campaign.briefing} />}
            {campaign.product && <CampaignDetail label={copy.product} value={campaign.product} />}
            {campaign.key_message && <CampaignDetail label={copy.keyMessage} value={campaign.key_message} />}
            {campaign.requirements && <CampaignDetail label={copy.requirements} value={campaign.requirements} />}
          </dl>
        </div>

        <div className="campaign-detail-facts">
          <dl className="campaign-detail-fields">
            <CampaignDetail label={copy.campaignBudget} value={formatMoney(campaign.budget)} />
            <CampaignDetail label={copy.creatorBarter} value={<>{formatMoney(campaign.barter_value)}{campaign.barter_desc && <span className="campaign-detail-note">{campaign.barter_desc}</span>}</>} />
            <CampaignDetail label={copy.followerPromo} value={<span title={copy.notProvided}>–</span>} />
            <CampaignDetail label={copy.contentPiece} value={<span className="campaign-detail-content-type">{campaign.post_type?.toLowerCase() === 'reel' && <Clapperboard size={22} strokeWidth={1.5} aria-hidden="true" />}{formatContent(campaign.post_type)}</span>} />
            <CampaignDetail label={copy.targetGroup} value={campaign.targetgroup || '–'} />
            <CampaignDetail label={copy.goal} value={campaign.goal || '–'} />
          </dl>
          <CampaignCalendar key={campaign.id} campaign={campaign} language={language} />
        </div>
      </div>
      <div className="campaign-detail-action"><ApplyButton language={language} isExpired={isExpired} /></div>
    </article>
  );
};

// Compare calendar days in the campaign's Swiss timezone, independently of the viewer's timezone.
const calendarDay = (value: string) => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Europe/Zurich',
  }).formatToParts(new Date(value));
  const part = (type: string) => Number(parts.find((item) => item.type === type)?.value);
  return Date.UTC(part('year'), part('month') - 1, part('day'));
};

const CampaignCalendar: React.FC<{ campaign: CampaignDetailData; language: Language }> = ({ campaign, language }) => {
  const copy = translations[language];
  const deadline = calendarDay(campaign.apply_till);
  const start = calendarDay(campaign.start);
  const end = calendarDay(campaign.ende);
  const [offset, setOffset] = useState(0);
  const initialMonth = new Date(Math.min(deadline, start));
  const locale = language === 'de' ? 'de-CH' : 'en-GB';
  const weekdays = language === 'de' ? ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'] : ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const fullDate = (day: number) => new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(day);
  const month = (index: number) => {
    const first = new Date(Date.UTC(initialMonth.getUTCFullYear(), initialMonth.getUTCMonth() + offset + index, 1));
    const leading = (first.getUTCDay() + 6) % 7;
    const days = new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + 1, 0)).getUTCDate();
    const title = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(first);
    const cells = Array.from({ length: Math.ceil((leading + days) / 7) * 7 }, (_, i) => {
      const day = i - leading + 1;
      if (day < 1 || day > days) return <td key={i} />;
      const date = Date.UTC(first.getUTCFullYear(), first.getUTCMonth(), day);
      const phases = [date === deadline ? copy.applyUntil : '', date >= start && date <= end ? copy.publicationPeriod : ''].filter(Boolean);
      return <td key={i}><span className={`${date >= start && date <= end ? 'campaign-day-publication' : ''} ${date === deadline ? 'campaign-day-application' : ''}`} title={[fullDate(date), ...phases].join(' · ')} aria-label={[fullDate(date), ...phases].join(' · ')}>{day}</span></td>;
    });
    return <table key={title} className="campaign-calendar-month">
      <caption>{title}</caption>
      <thead><tr>{weekdays.map((day) => <th key={day} scope="col">{day}</th>)}</tr></thead>
      <tbody>{Array.from({ length: cells.length / 7 }, (_, week) => <tr key={week}>{cells.slice(week * 7, week * 7 + 7)}</tr>)}</tbody>
    </table>;
  };
  return (
    <section className="campaign-calendar" aria-label={copy.calendar}>
      <div className="campaign-calendar-heading">
        <h2>{copy.calendar}</h2>
        <div className="campaign-calendar-controls">
          <button type="button" onClick={() => setOffset((value) => value - 1)} aria-label={copy.previousMonths}><ChevronLeft size={18} /></button>
          <button type="button" onClick={() => setOffset((value) => value + 1)} aria-label={copy.nextMonths}><ChevronRight size={18} /></button>
        </div>
      </div>
      <div className="campaign-calendar-months" aria-live="polite">{month(0)}{month(1)}</div>
      <ul className="campaign-calendar-legend">
        <li><span className="campaign-day-application" />{copy.applyUntil}: {fullDate(deadline)}</li>
        <li><span className="campaign-day-delivery" />{copy.deliveryPeriod}: {copy.notProvided}</li>
        <li><span className="campaign-day-publication" />{copy.publicationPeriod}: {fullDate(start)} – {fullDate(end)}</li>
      </ul>
    </section>
  );
};

const ApplyButton: React.FC<{ language: Language; isExpired: boolean }> = ({ language, isExpired }) => {
  const copy = translations[language];
  if (isExpired) {
    return <span className="campaign-apply campaign-apply-expired" aria-disabled="true">{copy.expired}</span>;
  }
  return <a href={applyUrl} target="_blank" rel="noopener noreferrer" className="campaign-apply">{copy.apply}</a>;
};
