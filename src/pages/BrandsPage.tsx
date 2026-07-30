import React, { useEffect, useState } from 'react';
import type { Language } from '../App';

const brandLogosApiUrl = 'https://rssnbsduduboxlrvpodw.supabase.co/functions/v1/public-brand-logos';

interface BrandLogo {
  name: string;
  logoUrl: string;
}

interface BrandLogosResponse {
  logos: BrandLogo[];
}

interface BrandsPageProps {
  language: Language;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ language }) => {
  const [brands, setBrands] = useState<BrandLogo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const loadBrands = async () => {
      try {
        const response = await fetch(brandLogosApiUrl, { signal: controller.signal });
        if (!response.ok) throw new Error(`Could not load brands: ${response.status}`);

        const data: BrandLogosResponse = await response.json();
        setBrands(Array.isArray(data.logos) ? data.logos : []);
      } catch (error) {
        if ((error as DOMException).name !== 'AbortError') setHasError(true);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    void loadBrands();
    return () => controller.abort();
  }, []);

  return (
    <section className="pb-24 pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl px-6">
        <h1>{language === 'de' ? 'Alle Brands' : 'All brands'}</h1>
        {isLoading ? (
          <p className="mt-10 text-zinc-500">{language === 'de' ? 'Marken werden geladen…' : 'Loading brands…'}</p>
        ) : hasError ? (
          <p className="mt-10 text-zinc-500">{language === 'de' ? 'Marken konnten nicht geladen werden.' : 'Brands could not be loaded.'}</p>
        ) : (
          <div className="mt-10 grid grid-cols-2 border-l border-t border-zinc-200 sm:grid-cols-3 lg:grid-cols-5">
            {brands.map((brand) => (
              <div
                key={`${brand.name}-${brand.logoUrl}`}
                className="flex aspect-square min-w-0 items-center justify-center overflow-hidden border-b border-r border-zinc-200 p-6"
              >
                <img src={brand.logoUrl} alt={brand.name} className="max-h-[50%] max-w-[75%] object-contain" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
