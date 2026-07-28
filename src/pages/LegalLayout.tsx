import React from 'react';

// Gemeinsames Layout fuer die rechtlichen / Info-Seiten (Footer-Links).
export const LegalLayout: React.FC<{
  title: string;
  meta?: string;
  children: React.ReactNode;
}> = ({ title, meta, children }) => (
  <section className="pt-32 md:pt-40 pb-24">
    <div className="max-w-3xl mx-auto px-6">
      <h1>{title}</h1>
      {meta && <p className="mt-3 text-zinc-400">{meta}</p>}
      <div className="mt-10 text-zinc-600 leading-relaxed">{children}</div>
    </div>
  </section>
);

// Abschnitt mit Unterueberschrift (bewusst kleiner als die 36px-Hauptueberschrift).
export const LegalSection: React.FC<{ heading?: string; children: React.ReactNode }> = ({
  heading,
  children,
}) => (
  <div className="mt-8 first:mt-0">
    {heading && (
      <h2 className="text-[15px] font-medium text-zinc-900 mb-2">{heading}</h2>
    )}
    <div className="space-y-3">{children}</div>
  </div>
);

// Aufzaehlung.
export const LegalList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="list-disc pl-5 space-y-1 marker:text-zinc-400">
    {items.map((it) => (
      <li key={it}>{it}</li>
    ))}
  </ul>
);
