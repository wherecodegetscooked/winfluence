import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, Footer } from './components';
import {
  HomePage,
  AboutPage,
  ContactPage,
  VisionPage,
  ImprintPage,
  PrivacyPage,
  TermsPage,
} from './pages';
import type { Page } from './types';
import { siteConfig } from './constants';

// Gueltige Pfad-Segmente -> Page.
const routablePages: Page[] = [
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
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'vision': return <VisionPage />;
      case 'impressum': return <ImprintPage />;
      case 'datenschutz': return <PrivacyPage />;
      case 'nutzungsbedingungen': return <TermsPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900">
      <Navbar
        scrolled={scrolled}
        currentPage={currentPage}
        navigateTo={navigateTo}
      />

      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
