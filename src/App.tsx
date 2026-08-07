import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, Footer } from './components';
import {
  HomePage,
  BrandsPage,
  AboutPage,
  ContactPage,
  VisionPage,
  ImprintPage,
  PrivacyPage,
  TermsPage,
} from './pages';
import type { Page } from './types';
import { siteConfig } from './constants';

export type Language = 'en' | 'de';

// Gueltige Pfad-Segmente -> Page.
const routablePages: Page[] = [
  'brands',
  'about',
  'contact',
  'vision',
  'impressum',
  'datenschutz',
  'nutzungsbedingungen',
];

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [language, setLanguage] = useState<Language>('en');

  // Pfad -> Page. Neue Route hier ergaenzen.
  useEffect(() => {
    const handleLocationChange = () => {
      const seg = window.location.pathname.replace(/^\//, '') as Page;
      setCurrentPage(routablePages.includes(seg) ? seg : 'home');
      window.scrollTo(0, 0);
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Minimaler Title + Canonical pro Seite. Bei Bedarf erweitern.
  useEffect(() => {
    const path = currentPage === 'home' ? '/' : `/${currentPage}`;
    document.title = currentPage === 'home' ? siteConfig.name : `${currentPage} | ${siteConfig.name}`;
    const canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.href = `${siteConfig.url}${path}`;
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = useCallback((page: Page) => {
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'brands': return <BrandsPage language={language} />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'vision': return <VisionPage language={language} />;
      case 'impressum': return <ImprintPage language={language} />;
      case 'datenschutz': return <PrivacyPage language={language} />;
      case 'nutzungsbedingungen': return <TermsPage language={language} />;
      default: return <HomePage language={language} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900">
      <Navbar
        scrolled={scrolled}
        currentPage={currentPage}
        navigateTo={navigateTo}
        language={language}
        toggleLanguage={() => setLanguage((current) => (current === 'en' ? 'de' : 'en'))}
      />

      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer navigateTo={navigateTo} language={language} />
    </div>
  );
};

export default App;
