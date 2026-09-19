import React, { useEffect, useState, useRef } from 'react';

interface StatItem {
  id: string;
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  colorClass: string;
}

const statsData: StatItem[] = [
  {
    id: 'stat-formes',
    target: 50,
    prefix: '+',
    suffix: '',
    label: 'Personnes formées',
    colorClass: 'text-[#E85D8A]'
  },
  {
    id: 'stat-fournitures',
    target: 100,
    prefix: '',
    suffix: '%',
    label: 'Fournitures incluses',
    colorClass: 'text-[#1A1A1A]'
  },
  {
    id: 'stat-jours',
    target: 7,
    prefix: '',
    suffix: ' jours',
    label: 'Pour lancer sa 1ère vente',
    colorClass: 'text-[#E85D8A]'
  },
  {
    id: 'stat-cohortes',
    target: 8,
    prefix: '',
    suffix: ' max',
    label: 'Participants par cohorte',
    colorClass: 'text-[#E85D8A]'
  }
];

export const AnimatedStatsBandeau: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1800; // 1.8s pour une animation fluide et visible
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Fonction d'atténuation cubique sortante (easeOutCubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const nextCounts = statsData.map((stat) => {
        if (progress >= 1) return stat.target;
        return Math.round(easeOut * stat.target);
      });

      setCounts(nextCounts);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [hasAnimated]);

  return (
    <div 
      ref={containerRef}
      id="chiffres-cles-bandeau"
      className="bg-white rounded-2xl sm:rounded-3xl border p-5 sm:p-7 md:p-8 max-w-4xl mx-auto shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
      style={{ borderColor: 'var(--color-border)' }}
      aria-label="Chiffres clés et indicateurs de performance de l'Académie"
    >
      {/* Légère lueur d'ambiance rose en arrière-plan */}
      <div 
        className="absolute -top-12 -right-12 w-48 h-48 bg-[#E85D8A]/5 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#E85D8A]/5 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true" 
      />

      {/* Grille responsive : 2 colonnes sur mobile, 4 colonnes sur tablette/desktop avec séparateurs verticaux */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
        {statsData.map((stat, idx) => (
          <div
            key={stat.id}
            className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl text-center transition-all duration-300 ${
              idx < 3 ? 'lg:border-r border-[#F0DDE3]' : ''
            } ${
              idx % 2 === 0 ? 'border-r sm:border-r-0 lg:border-r border-[#F0DDE3]' : ''
            }`}
          >
            {/* Chiffre animé en typographie mise en valeur */}
            <div 
              className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-none mb-1.5 tabular-nums transition-transform duration-300 ${stat.colorClass} ${
                hasAnimated ? 'scale-100' : 'scale-95 opacity-70'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span>{stat.prefix}</span>
              <span>{counts[idx]}</span>
              <span>{stat.suffix}</span>
            </div>

            {/* Label descriptif sous le chiffre */}
            <p className="text-xs sm:text-sm text-[#6B6B6B] font-medium leading-snug max-w-[160px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
