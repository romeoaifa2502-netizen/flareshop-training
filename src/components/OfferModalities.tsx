import React from 'react';
import { Calendar, MapPin, Users, PackageCheck, BookOpen, ShieldCheck, CheckCircle2, ArrowDown } from 'lucide-react';

interface OfferModalitiesProps {
  onCtaClick: () => void;
}

export const OfferModalities: React.FC<OfferModalitiesProps> = ({ onCtaClick }) => {
  const modalities = [
    {
      icon: Calendar,
      title: "Durée & Format Hybride",
      desc: "7 jours intensifs au total : 3 jours consécutifs d'immersion pratique en atelier à Cotonou + 4 jours d'accompagnement terrain WhatsApp pour déclencher vos premières ventes.",
    },
    {
      icon: MapPin,
      title: "Lieu de la formation",
      desc: "Atelier privé FlareShop, Cotonou, Bénin. Environnement climatisé, tables de découpe professionnelles et matériel d'artisanat haut de gamme.",
    },
    {
      icon: Users,
      title: "Effectif ultra-réduit",
      desc: "8 à 10 participants maximum par session. Tiffany Inès Akowé supervise personnellement chaque poste de travail pour corriger vos gestes en temps réel.",
    },
    {
      icon: PackageCheck,
      title: "Matériel 100% fourni",
      desc: "Cartonnages, papiers texturés d'importation, rubans satin & gros-grain, outils de découpe et accessoires d'ornementation. Vous repartez avec toutes vos créations terminées.",
    },
    {
      icon: BookOpen,
      title: "Le Carnet Secret Fournisseurs",
      desc: "Accès exclusif à notre répertoire d'usines et grossistes fiables à Cotonou et à l'international pour commander vos contenants et rubans au meilleur coût de gros.",
    },
    {
      icon: ShieldCheck,
      title: "Attestation Officielle FlareShop",
      desc: "Remise d'une attestation de fin de formation certifiant votre maîtrise des techniques de confection de prestige et votre intégration au réseau des alumni FlareShop.",
    },
  ];

  return (
    <section 
      id="modalites" 
      className="py-16 md:py-24 bg-[#FDF6F8]"
      aria-label="Modalités pratiques de la formation"
    >
      <div className="container-custom">
        
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B8406A] px-3.5 py-1.5 rounded-full bg-white border border-[#F0DDE3] inline-block mb-3 shadow-2xs">
            Organisation Pratique
          </span>
          <h2 
            className="text-[clamp(1.5rem,3.8vw,2.5rem)] font-semibold tracking-tight text-[#1A1A1A] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Toutes les modalités de votre immersion
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            Une prise en charge complète pour vous concentrer uniquement sur la maîtrise du geste et la conquête de vos premiers clients.
          </p>
        </div>

        {/* Grille des 6 modalités : 1 col mobile, 2 col tablette, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-10 sm:mb-14">
          {modalities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border p-5 sm:p-6 flex flex-col justify-start transition-all duration-300 hover:shadow-md"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shrink-0"
                  style={{ backgroundColor: 'var(--color-rose-light)' }}
                >
                  <Icon size={22} className="text-[#E85D8A]" />
                </div>
                <h3 
                  className="text-base sm:text-lg font-bold text-[#1A1A1A] mb-2 leading-snug"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Carte de réassurance & CTA */}
        <div 
          className="max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl border p-6 sm:p-8 md:p-10 text-center shadow-sm"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF6F8] text-[#B8406A] text-xs font-semibold mb-4 border border-[#F0DDE3]">
            <CheckCircle2 size={15} />
            <span>Processus d'admission transparent</span>
          </div>

          <h3 
            className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3 leading-snug"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Prêt(e) à réserver votre place pour la prochaine session ?
          </h3>

          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed max-w-xl mx-auto mb-6">
            Pour maintenir une qualité d'enseignement irréprochable, les places sont attribuées après un court échange avec notre équipe pour valider l'adéquation de votre profil.
          </p>

          <a
            href="#preinscription"
            onClick={onCtaClick}
            className="btn-cta-primary text-xs sm:text-sm md:text-base py-3.5 px-7 sm:px-8 inline-flex items-center gap-2 justify-center shadow-md w-full sm:w-auto min-h-[48px]"
          >
            <span>Faire ma demande de préinscription</span>
            <ArrowDown size={18} />
          </a>

          <p className="text-xs text-[#6B6B6B] mt-3">
            Réponse et prise de contact sous 24h ouvrées par un conseiller FlareShop.
          </p>
        </div>

      </div>
    </section>
  );
};
