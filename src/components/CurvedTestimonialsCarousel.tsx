import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCheck, 
  MessageCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

export interface WhatsAppCaptureTestimonial {
  id: string;
  student: string;
  context: string;
  image: string;
  badge: string;
  quoteKey: string;
  fullQuote: string;
  verifiedOutcome: string;
  timing: string;
}

const whatsappCaptures: WhatsAppCaptureTestimonial[] = [
  {
    id: 'deux-box',
    student: 'Élève Académie FlareShop',
    context: 'Briefing matériel & sourcing Cotonou',
    image: '/images/whatsapp-capture-deux-box.svg',
    badge: '2 box déjà commandées !',
    quoteKey: '« Finalement j\'ai deux box à réaliser 🤣 »',
    fullQuote: '« Je disais que ma copine veut pour elle aussi 🥰 Finalement j\'ai deux box à réaliser 🤣 J\'ai même dis que je ne maîtrisais pas encore elle veut ça comme ça »',
    verifiedOutcome: '2 commandes fermes décrochées avant même la fin de la formation',
    timing: '14:54 • En direct de l\'atelier'
  },
  {
    id: 'deja-commande',
    student: 'Élève Promotion Cotonou',
    context: 'Annonce du call fournisseurs',
    image: '/images/whatsapp-capture-deja-commande.svg',
    badge: '1ère commande immédiate',
    quoteKey: '« Ah 😹 , j\'ai Deja une commande »',
    fullQuote: 'Dès que Tiffany annonce le call sur les grossistes à Cotonou : « Ah 😹 , j\'ai Deja une commande — 😂 je n\'aime ça 😂 »',
    verifiedOutcome: 'Première vente spontanée dès le lancement du programme',
    timing: '23:59 • Nuit après briefing'
  },
  {
    id: 'aime-formation',
    student: 'Élève rentrée de cours',
    context: 'Retour du 1er jour d\'atelier pratique',
    image: '/images/whatsapp-capture-aime-formation.svg',
    badge: '100% satisfaite de l\'atelier',
    quoteKey: '« Je suis bien rentrée , j\'ai vraiment aimé la formation »',
    fullQuote: '« Je suis bien rentrée , j\'ai vraiment aimé la formation. J\'ai bien envie d\'apprendre pour les box simples et sac shopping »',
    verifiedOutcome: 'Compétence technique acquise dès J1 & envie de maîtriser tous les formats',
    timing: '23:15 • Fin de session J1'
  },
  {
    id: 'belle-experience',
    student: 'Participante Promo Octobre',
    context: 'Réaction au statut vidéo de formation',
    image: '/images/whatsapp-capture-belle-experience.svg',
    badge: 'Très belle expérience ❤️',
    quoteKey: '« Très belle expérience ❤️🤗 »',
    fullQuote: 'En réaction à la vidéo statut de transmission : « Très belle expérience ❤️🤗 » — Réponse de Tiffany : « Ravi ma chérie 🔥 » avec réaction ❤️',
    verifiedOutcome: 'Accompagnement bienveillant et confiance retrouvée',
    timing: '23:21 • Échange privé'
  },
  {
    id: 'vraiment-top',
    student: 'Diplômée Académie FlareShop',
    context: 'Journée transmission & créativité',
    image: '/images/whatsapp-capture-vraiment-top.svg',
    badge: 'C\'était vraiment top 👌🏾',
    quoteKey: '« C\'était vraiment top 👌🏾 »',
    fullQuote: 'Après une journée intensive de confection de coffrets cadeaux et boîtes rigides : « C\'était vraiment top 👌🏾 »',
    verifiedOutcome: 'Techniques d\'artisanat d\'art validées à 100%',
    timing: '00:17 • Soirée post-atelier'
  }
];

export const CurvedTestimonialsCarousel: React.FC = () => {
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [selectedCapture, setSelectedCapture] = useState<WhatsAppCaptureTestimonial | null>(null);
  
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const currentTranslateRef = useRef<number>(0);

  // Largeur d'une carte + espacement
  const cardWidth = 320;
  const cardGap = 24;
  const totalSingleCycleWidth = whatsappCaptures.length * (cardWidth + cardGap);

  // Vitesse de défilement continu doux
  const scrollSpeed = 0.04; // px par ms

  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== null && !isHovered && !isDraggingRef.current) {
        const delta = time - lastTimeRef.current;
        setScrollOffset((prev) => (prev + delta * scrollSpeed) % totalSingleCycleWidth);
      }
      lastTimeRef.current = time;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, totalSingleCycleWidth]);

  // Commandes manuelles Précédent / Suivant
  const handlePrev = () => {
    setScrollOffset((prev) => {
      const next = prev - (cardWidth + cardGap);
      return next < 0 ? next + totalSingleCycleWidth : next;
    });
  };

  const handleNext = () => {
    setScrollOffset((prev) => (prev + (cardWidth + cardGap)) % totalSingleCycleWidth);
  };

  // Support tactile & souris (drag / swipe)
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    isDraggingRef.current = true;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    startXRef.current = clientX;
    currentTranslateRef.current = scrollOffset;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = startXRef.current - clientX;
    const newOffset = (currentTranslateRef.current + diff + totalSingleCycleWidth * 10) % totalSingleCycleWidth;
    setScrollOffset(newOffset);
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  // Répétition des 5 captures authentiques pour un défilement infini sans fin
  const displayItems = [
    ...whatsappCaptures, 
    ...whatsappCaptures, 
    ...whatsappCaptures,
    ...whatsappCaptures
  ];

  return (
    <div className="w-full relative overflow-hidden py-4 md:py-8 select-none">
      
      {/* 1. EN-TÊTE ÉPURÉ DE LA SECTION */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-8 md:mb-12">
        
        {/* Badge supérieur */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F0DDE3] text-[#E85D8A] text-xs font-bold mb-4 shadow-2xs">
          <MessageCircle size={14} className="text-[#E85D8A]" />
          <span>Preuves réelles en direct de WhatsApp</span>
        </div>

        {/* Titre monumental - typographie fluide clamp() */}
        <h2 
          className="text-[clamp(1.65rem,4.2vw,3rem)] font-extrabold text-[#111111] tracking-tight leading-[1.16] mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Ce que disent nos élèves,<br className="hidden sm:inline" />
          <span className="italic font-normal text-[#E85D8A]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            en direct
          </span> de WhatsApp
        </h2>

        {/* Sous-titre */}
        <p className="text-sm sm:text-base text-[#555555] max-w-2xl mx-auto mb-6 leading-relaxed">
          Aucun faux avis. Des messages spontanés reçus par Tiffany Akowé pendant et juste après les sessions d'apprentissage à Cotonou.
        </p>

        {/* Boutons flèches discrets pour naviguer manuellement - touch targets min 44px */}
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Capture précédente"
            className="w-11 h-11 rounded-full bg-white hover:bg-neutral-100 text-[#111111] border border-neutral-200 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer touch-target-min"
          >
            <ChevronLeft size={20} />
          </button>
          
          <span className="text-xs text-neutral-500 font-medium px-2">
            Glissez ou survolez pour faire défiler
          </span>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Capture suivante"
            className="w-11 h-11 rounded-full bg-white hover:bg-neutral-100 text-[#111111] border border-neutral-200 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer touch-target-min"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* 2. DÉFILEMENT CONTINU DES CAPTURES WHATSAPP */}
      <div 
        ref={containerRef}
        className="w-full relative py-4 overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleTouchEnd();
        }}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Piste des captures */}
        <div 
          className="flex items-stretch gap-6 px-6 transition-transform duration-75 ease-linear"
          style={{
            transform: `translateX(-${scrollOffset}px)`,
            width: `${displayItems.length * (cardWidth + cardGap)}px`
          }}
        >
          {displayItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => setSelectedCapture(item)}
              className="w-[300px] sm:w-[320px] rounded-2xl bg-[#0B141A] border border-[#2A3942] hover:border-[#E85D8A] shadow-xl overflow-hidden shrink-0 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer group relative"
            >
              {/* En-tête carte avec badge de résultat */}
              <div className="p-3.5 bg-[#182229] border-b border-[#2A3942] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#E85D8A] flex items-center justify-center text-[10px] font-bold text-white">
                    FS
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white leading-tight">
                      {item.student}
                    </p>
                    <p className="text-[10px] text-neutral-400">
                      {item.context}
                    </p>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E85D8A] text-white flex items-center gap-1 shadow-xs">
                  <CheckCheck size={11} />
                  {item.badge}
                </span>
              </div>

              {/* Visuel exact de la capture WhatsApp */}
              <div className="relative w-full aspect-[400/440] bg-[#0B141A] overflow-hidden flex items-center justify-center p-2">
                <img 
                  src={item.image} 
                  alt={item.badge}
                  className="w-full h-full object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                  draggable={false}
                />

                {/* Bouton loupe au survol */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#111111] text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <ExternalLink size={13} className="text-[#E85D8A]" />
                    Agrandir l'échange
                  </span>
                </div>
              </div>

              {/* Pied de carte avec extrait textuel */}
              <div className="p-3.5 bg-[#121B22] border-t border-[#2A3942] text-left mt-auto">
                <p className="text-xs font-bold text-[#E85D8A] mb-1 line-clamp-1">
                  {item.quoteKey}
                </p>
                <div className="flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Preuve authentifiée
                  </span>
                  <span>{item.timing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bouton d'action après les preuves */}
      <div className="mt-8 text-center">
        <a
          href="#preinscription"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <span>Rejoindre la prochaine promotion d'élèves</span>
          <ArrowRight size={14} className="text-[#E85D8A]" />
        </a>
      </div>

      {/* 3. MODAL DE ZOOM SUR LA CAPTURE SÉLECTIONNÉE */}
      {selectedCapture && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedCapture(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-[#0B141A] rounded-2xl overflow-hidden shadow-2xl border border-[#2A3942] text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barre d'en-tête du modal */}
            <div className="p-4 bg-[#182229] border-b border-[#2A3942] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#E85D8A] flex items-center justify-center text-xs font-bold text-white">
                  FS
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {selectedCapture.student}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    {selectedCapture.context} • {selectedCapture.timing}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCapture(null)}
                className="w-8 h-8 rounded-full bg-[#202C33] hover:bg-[#2A3942] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Corps : Affichage haute définition de la capture */}
            <div className="p-4 bg-[#0B141A] flex flex-col items-center">
              <div className="w-full max-h-[55vh] flex items-center justify-center overflow-auto rounded-xl border border-[#202C33]">
                <img 
                  src={selectedCapture.image} 
                  alt={selectedCapture.badge}
                  className="w-full h-auto object-contain max-h-[55vh]"
                />
              </div>

              {/* Détails du retour d'expérience */}
              <div className="w-full mt-4 p-3.5 rounded-xl bg-[#182229] border border-[#2A3942] text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E85D8A] text-white">
                    {selectedCapture.badge}
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    ✓ Échange WhatsApp réel
                  </span>
                </div>

                <p className="text-sm text-neutral-200 italic mb-2">
                  {selectedCapture.fullQuote}
                </p>

                <div className="pt-2 border-t border-[#2A3942] text-xs text-neutral-300">
                  <strong className="text-[#E85D8A]">Résultat concret : </strong>
                  {selectedCapture.verifiedOutcome}
                </div>
              </div>
            </div>

            {/* Bouton de fermeture */}
            <div className="p-3 bg-[#121B22] border-t border-[#2A3942] flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedCapture(null)}
                className="px-5 py-2 rounded-full text-xs font-bold bg-white text-[#111111] hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
