import React from 'react';
import { LegalLayout } from './LegalLayout';
import type { Language } from '../App';

interface VisionPageProps {
  language: Language;
}

export const VisionPage: React.FC<VisionPageProps> = ({ language }) => (
  <LegalLayout title="Vision">
    <p>
      {language === 'de'
        ? 'winfluence matched Brands mit 200 Millionen Influencer-Profilen zu einem hoch effizienten Cluster. Weil viele kleine Influencer eine höhere Engagement-Rate als ein grosser erreichen. Ohne Agenturhonorar und durchgängig Automatisiert.'
        : 'winfluence matches brands with 200 million influencer profiles to create a highly efficient cluster. That’s because many small influencers achieve a higher engagement rate than a single large one. No agency fees and fully automated.'}
    </p>
  </LegalLayout>
);
