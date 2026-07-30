import React from 'react';
import type { Language } from '../App';
import { allBrandLogos } from '../constants';

interface BrandsPageProps {
  language: Language;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ language }) => (
  <section className="pb-24 pt-32 md:pt-40">
    <div className="mx-auto max-w-6xl px-6">
      <h1>{language === 'de' ? 'Alle Brands' : 'All brands'}</h1>
      <div className="mt-10 grid grid-cols-2 border-l border-t border-zinc-200 sm:grid-cols-3 lg:grid-cols-5">
        {allBrandLogos.map((brand) => (
          <div
            key={brand.name}
            className="flex aspect-square min-w-0 items-center justify-center overflow-hidden border-b border-r border-zinc-200 p-6"
          >
            <img
              src={brand.src}
              alt={brand.name}
              className={`${brand.sizeClassName ?? 'max-h-[50%] max-w-[75%]'} object-contain`}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
