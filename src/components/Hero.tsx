import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import heroCelebrationPhoto from '../assets/images/hero_celebration_real_1789573447676.jpg';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  // Onglet sélectionné dans le dock inférieur style Finovate
  const [activeTab, setActiveTab] = useState<'formation' | 'corporate' | 'particulier'>('formation');

  const tabs = [
    { id: 'formation', label: 'PARTENAIRE CERTIFIÉ', target: '#preinscription' },
    { id: 'corporate', label: 'SOLUTIONS ENTREPRISES', target: '#footer' },
    { id: 'particulier', label: 'BOX PARTICULIERS', target: '#galerie-box' },
  ] as const;

  const handleTabClick = (tabId: 'formation' | 'corporate' | 'particulier', target: string) => {
    setActiveTab(tabId);
    if (tabId === 'formation') {
      onCtaClick();
    } else {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="hero"
      className="relative isolate w-full min-h-screen flex flex-col justify-between overflow-hidden pt-24 pb-8 md:pt-28 md:pb-12 text-white"
      aria-label="Section d'accueil FlareShop avec promotion diplômée"
    >
      {/* 1. IMAGE D'ARRIÈRE-PLAN : Directement visible en z-0 avec stacking context isolé (ne peut pas être cachée) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#111111]">
        <img
          src={heroCelebrationPhoto}
          alt="Promotion d'élèves diplômées FlareShop avec Tiffany Inès Akowé, attestations officielles et guirlande de ballons"
          className="w-full h-full object-cover object-center scale-100 filter brightness-[0.88] contrast-[1.05]"
          loading="eager"
        />
        {/* Dégradé latéral fin style Finovate pour assurer un contraste parfait sur le texte à gauche tout en laissant la photo totalement visible au centre et à droite */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" 
        />
        {/* Dégradés haut et bas pour fondre la barre de navigation et le dock inférieur */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" 
        />
      </div>

      {/* Indicateur de défilement vertical droit style Finovate */}
      <div className="hidden md:flex flex-col items-center gap-1.5 absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="w-[2px] h-20 bg-white/30 relative rounded-full overflow-hidden">
          <motion.div 
            className="w-full h-7 bg-[#E85D8A] rounded-full shadow-[0_0_12px_#E85D8A]"
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span className="text-[10px] tracking-widest text-white/70 font-semibold uppercase rotate-90 origin-center mt-6">
          SCROLL
        </span>
      </div>

      {/* 2. CORPS PRINCIPAL : TITRE & CALL TO ACTION POSITIONNÉS À GAUCHE STYLE FINOVATE */}
      <div className="container-custom relative z-10 my-auto py-10 sm:py-16">
        <div className="max-w-2xl">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {/* Titre Principal H1 en blanc pur éclatant style Finovate avec tiret rose - typographie fluide clamp() */}
              <h1 
                id="hero-title"
                className="text-[clamp(1.75rem,5.2vw,3.6rem)] font-semibold tracking-tight leading-[1.16] sm:leading-[1.12] mb-4 sm:mb-5 drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] !text-white"
                style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF' }}
              >
                {activeTab === 'formation' && (
                  <>
                    <span className="text-white" style={{ color: '#FFFFFF' }}>Votre Partenaire</span>{' '}
                    <span className="inline-block w-6 sm:w-12 h-[3px] bg-[#E85D8A] align-middle mx-1 sm:mx-1.5 rounded-full shadow-[0_0_8px_#E85D8A]" />
                    <br />
                    <span className="text-white font-bold" style={{ color: '#FFFFFF' }}>Formation & Box de Luxe</span>
                  </>
                )}
                {activeTab === 'corporate' && (
                  <>
                    <span className="text-white" style={{ color: '#FFFFFF' }}>Votre Partenaire</span>{' '}
                    <span className="inline-block w-6 sm:w-12 h-[3px] bg-[#E85D8A] align-middle mx-1 sm:mx-1.5 rounded-full shadow-[0_0_8px_#E85D8A]" />
                    <br />
                    <span className="text-white font-bold" style={{ color: '#FFFFFF' }}>Cadeaux d'Affaires & B2B</span>
                  </>
                )}
                {activeTab === 'particulier' && (
                  <>
                    <span className="text-white" style={{ color: '#FFFFFF' }}>Vos Émotions</span>{' '}
                    <span className="inline-block w-6 sm:w-12 h-[3px] bg-[#E85D8A] align-middle mx-1 sm:mx-1.5 rounded-full shadow-[0_0_8px_#E85D8A]" />
                    <br />
                    <span className="text-white font-bold" style={{ color: '#FFFFFF' }}>En Coffrets Sur-Mesure</span>
                  </>
                )}
              </h1>

              {/* Sous-titre textuel informatif */}
              <p className="text-sm sm:text-base lg:text-lg text-white/90 font-normal mb-6 sm:mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] max-w-xl">
                {activeTab === 'formation' && (
                  "Maîtrisez l'art de la confection manuelle de prestige en 7 jours et apprenez à vendre avec profit grâce à Tiffany Inès Akowé à Cotonou."
                )}
                {activeTab === 'corporate' && (
                  "Box de fin d'année, coffrets VIP et sacs shopping haute couture pour valoriser la marque de votre entreprise auprès de vos clients."
                )}
                {activeTab === 'particulier' && (
                  "Des créations romantiques, déclarations et célébrations uniques confectionnées avec soin dans notre atelier de Cotonou."
                )}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* BOUTON CTA EXACT DU DESIGN FINOVATE : Capsule rose signature + cercle avec flèche diagonale ↗ - 100% responsive */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full sm:w-auto">
            <a
              href="#preinscription"
              id="finovate-hero-cta"
              onClick={onCtaClick}
              className="group inline-flex items-center justify-between sm:justify-start gap-3 pl-5 sm:pl-6 pr-2.5 py-3 sm:py-2.5 rounded-full bg-[#E85D8A] hover:bg-[#d94877] text-white font-bold text-sm sm:text-base transition-all transform hover:scale-[1.02] shadow-[0_4px_20px_rgba(232,93,138,0.45)] min-h-[48px]"
            >
              <span>
                {activeTab === 'formation' ? 'Préinscription Gratuite' : 'Demander un Devis'}
              </span>
              
              {/* Cercle avec flèche diagonale ↗ exactement comme Finovate */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center transition-transform group-hover:rotate-45 group-hover:bg-black shrink-0">
                <ArrowUpRight size={17} className="text-[#E85D8A]" />
              </div>
            </a>

            {/* Bouton secondaire WhatsApp discret */}
            <a
              href="https://wa.me/2290157776448?text=Bonjour%20Tiffany,%20je%20souhaite%20en%20savoir%20plus%20sur%20la%20formation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-black/40 hover:bg-black/60 text-white text-xs sm:text-sm font-medium backdrop-blur-md border border-white/20 transition-colors shadow-md min-h-[44px]"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

        </div>
      </div>

      {/* 3. LE DOCK INFÉRIEUR EXACT STYLE FINOVATE (3 Onglets segmentés flottants qui s'empilent verticalement avec espacement sur mobile) */}
      <div className="container-custom relative z-10 w-full pt-4 sm:pt-6 pb-2">
        <div 
          className="mx-auto max-w-3xl p-1.5 sm:p-2 rounded-2xl md:rounded-full bg-black/60 backdrop-blur-xl border border-white/25 shadow-2xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-1.5"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id, tab.target)}
                className={`w-full sm:w-1/3 min-h-[44px] py-3 px-4 rounded-xl md:rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 text-center flex items-center justify-center ${
                  isActive
                    ? 'bg-white text-[#1A1A1A] shadow-md transform scale-[1.01]'
                    : 'bg-transparent text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
};
