import React from 'react';
import { ImageIcon } from 'lucide-react';

interface PlaceholderProps {
  label?: string;
  className?: string;
  rounded?: string;
}

// Bild-Platzhalter. Markiert eindeutig, wo spaeter echte Assets eingesetzt
// werden. Neutrale graue Flaeche mit Icon und optionalem Label.
export const Placeholder: React.FC<PlaceholderProps> = ({
  label,
  className = '',
  rounded = 'rounded-xl',
}) => (
  <div
    className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-zinc-200/70 border border-zinc-300/60 ${rounded} ${className}`}
    role="img"
    aria-label={label ? `Platzhalter: ${label}` : 'Bild-Platzhalter'}
  >
    <ImageIcon className="w-6 h-6 text-zinc-400" strokeWidth={1.5} />
    {label && (
      <span className="px-2 text-center text-[11px] font-medium uppercase tracking-wider text-zinc-400">
        {label}
      </span>
    )}
  </div>
);
