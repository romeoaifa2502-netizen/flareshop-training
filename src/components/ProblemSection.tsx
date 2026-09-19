import React from 'react';
import { AlertTriangle, Banknote, HelpCircle, Video, SearchX, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onCtaClick: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onCtaClick }) => {
  const painPoints = [
    {
      icon: Banknote,
      title: "Des dizaines de milliers de FCFA perdus en fournitures gâchées",
      desc: "Boîtes qui gondolent, plis asymétriques, rubans effilochés, calages instables qui s'écroulent au premier transport... Essayer d'improviser seul coûte cher et décourage avant même de commencer.",
      badge: "Gaspillage évitable",
    },
    {
      icon: SearchX,
      title: "Le calvaire des bons fournisseurs introuvables à Cotonou",
      desc: "Courir les marchés de Dantokpa ou de Ganhi à l'aveugle, tomber sur des boîtes fragiles de mauvaise qualité, payer des prix de détail exorbitants... Sans un carnet d'adresses d'usines et grossistes fiables, vos marges sont anéanties.",
      badge: "Marges détruites",
    },
    {
      icon: HelpCircle,
      title: "Le syndrome de l'imposteur : brader son travail par peur de vendre",
      desc: "« C'est trop cher », « Je vais voir ailleurs »... Ne pas savoir justifier la valeur perçue de ses confections pousse à vendre au rabais, travaillant des heures entières pour des miettes sans jamais être rentable.",
      badge: "Rentabilité bloquée",
    },
    {
      icon: Video,
      title: "L'illusion des tutoriels YouTube et TikTok sans retour critique",
      desc: "Les vidéos de 30 secondes en accéléré ne montrent ni le geste millimétré, ni l'épaisseur du papier, ni les finitions d'orfèvre. Et surtout, aucun tutoriel ne vous explique comment trouver et closer de vrais clients sur WhatsApp.",
      badge: "Fausses promesses",
    },
  ];

  return (
    <section 
      id="probleme" 
      className="py-16 md:py-24 bg-[#FDF6F8]"
      aria-label="Pourquoi se lancer seul dans les box-cadeaux est si difficile"
    >
      <div className="container-custom">
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ 
              backgroundColor: 'white', 
              borderColor: 'var(--color-border)', 
              color: 'var(--color-rose)' 
            }}
          >
            <AlertTriangle size={14} className="text-[#E85D8A]" />
            <span>La réalité du marché sans méthode</span>
          </div>

          <h2 
            className="text-[clamp(1.45rem,3.8vw,2.4rem)] font-semibold tracking-tight text-[#1A1A1A] leading-snug sm:leading-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Pourquoi 9 créateurs de box sur 10 abandonnent avant leur 3ème client ?
          </h2>

          <p 
            className="text-sm sm:text-base md:text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Créer de jolies boîtes ne suffit pas pour bâtir une activité rentable. Sans accompagnement rigoureux, l'improvisation transforme une belle passion en gouffre financier.
          </p>
        </div>

        {/* Grille des 4 points de douleur : 1 col mobile, 2 cols tablette et desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto mb-10 sm:mb-12">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 sm:p-7 rounded-2xl border transition-all duration-300 hover:shadow-md relative flex flex-col justify-between"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'var(--color-rose-light)' }}
                    >
                      <Icon size={22} className="text-[#E85D8A]" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FDF6F8] text-[#B8406A] border border-[#F0DDE3]">
                      {point.badge}
                    </span>
                  </div>

                  <h3 
                    className="text-base sm:text-lg font-semibold text-[#1A1A1A] mb-2 leading-snug"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {point.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition vers la solution */}
        <div className="max-w-2xl mx-auto text-center bg-white p-5 sm:p-8 rounded-2xl border shadow-xs" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-sm sm:text-base font-semibold text-[#1A1A1A] mb-3 leading-snug">
            Ce n'est pas un manque de talent. C'est un manque de méthode pratique et commerciale.
          </p>
          <p className="text-xs sm:text-sm text-[#6B6B6B] mb-5 leading-relaxed">
            C'est précisément pour briser ces blocages que Tiffany Inès Akowé a conçu une immersion en 7 jours réunissant technique manuelle d'excellence et closing WhatsApp.
          </p>
          <a
            href="#formation-timeline"
            className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#E85D8A] hover:text-[#B8406A] transition-colors min-h-[44px] py-2 px-4"
          >
            <span>Découvrir le programme étape par étape</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
