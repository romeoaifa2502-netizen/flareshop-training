import React, { useState } from 'react';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  label: string;
  sublabel?: string;
  aspectRatio?: string; // e.g. 'aspect-[4/3]', 'aspect-[1/1]', 'aspect-[16/10]', 'aspect-[4/5]'
  className?: string;
  objectFit?: 'cover' | 'contain';
  badge?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  label,
  sublabel,
  aspectRatio = 'aspect-[4/3]',
  className = '',
  objectFit = 'cover',
  badge,
}) => {
  const [hasError, setHasError] = useState(false);

  // If real image source is provided and hasn't errored
  if (src && !hasError) {
    return (
      <div 
        className={`relative overflow-hidden ${aspectRatio} rounded-xl border group ${className}`}
        style={{ 
          borderColor: 'var(--color-border)', 
          backgroundColor: 'var(--color-surface-alt)',
          boxShadow: 'var(--shadow-subtle)'
        }}
      >
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          className={`w-full h-full ${objectFit === 'contain' ? 'object-contain p-2' : 'object-cover'} transition-transform duration-700 ease-out group-hover:scale-105`}
          onError={() => setHasError(true)}
        />

        {/* Optional small discreet badge */}
        {badge && (
          <div className="absolute top-3 left-3 z-10">
            <span 
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                color: 'var(--color-ink-900)',
                border: '1px solid rgba(0, 0, 0, 0.08)'
              }}
            >
              {badge}
            </span>
          </div>
        )}
      </div>
    );
  }

  // Graceful neutral fallback placeholder per design spec:
  // Fond --color-rose-50, uni, aucune illustration ni image de substitution inventée
  return (
    <div
      role="img"
      aria-label={alt}
      className={`image-placeholder ${aspectRatio} rounded-xl p-6 text-center transition-all flex flex-col items-center justify-center ${className}`}
      style={{ 
        backgroundColor: 'var(--color-rose-50)', 
        borderColor: 'var(--color-border)',
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[280px]">
        <span 
          className="text-xs font-semibold px-2.5 py-1 rounded-md mb-2"
          style={{ 
            backgroundColor: 'var(--color-surface)', 
            color: 'var(--color-rose-700)',
            border: '1px solid var(--color-border)'
          }}
        >
          Visuel attendu
        </span>
        <p className="text-sm font-medium leading-snug" style={{ color: 'var(--color-ink-900)' }}>
          {label}
        </p>
        {sublabel && (
          <p className="text-xs mt-1.5 leading-normal" style={{ color: 'var(--color-ink-400)' }}>
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
};
