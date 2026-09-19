import React from 'react';
import { Scissors, ShoppingBag, CheckCircle2, ArrowRight, BookOpen, MessageSquare, Target, Trophy } from 'lucide-react';

interface TrainingTimelineProps {
  onCtaClick: () => void;
}

export const TrainingTimeline: React.FC<TrainingTimelineProps> = ({ onCtaClick }) => {
  const phase1Steps = [
    {
      day: "Jour 1",
      title: "Anatomie de la box de luxe & découpe millimétrée",
      points: [
        "Sélection des cartons rigides, grammages et textures nobles",
        "Techniques de pliage sans bavure et angles à 90° parfaits",
        "Introduction aux types de rubans (satin lourd, gros-grain, organza) et nœuds signature FlareShop",
      ]
    },
    {
      day: "Jour 2",
      title: "Calage d'orfèvre, agencement & personnalisation sur-mesure",
      points: [
        "Création de calages sur-mesure anti-chute (bouteilles, cosmétiques, gourmandises)",
        "Harmonie des couleurs et contrastes visuels qui déclenchent le coup de cœur",
        "Lettrages dorés, messages gravés et finitions haut de gamme",
      ]
    },
    {
      day: "Jour 3",
      title: "Thématiques commerciales & calcul chirurgical des marges",
      points: [
        "Conception de box événements (Anniversaires, Amour, Naissance, Entreprises)",
        "Fiche de calcul de rentabilité : coût de revient unitaire, emballage, main-d'œuvre et marge nette",
        "Remise de votre kit complet et du répertoire secret des fournisseurs fiables",
      ]
    }
  ];

  const phase2Steps = [
    {
      day: "Jour 4",
      title: "Catalogue WhatsApp Business & Shooting pro au smartphone",
      points: [
        "Mise en scène de vos créations sous lumière naturelle pour faire saliver vos prospects",
        "Configuration professionnelle de votre profil et catalogue WhatsApp Business",
        "Rédaction de descriptions persuasives mettant en avant la valeur perçue",
      ]
    },
    {
      day: "Jour 5",
      title: "Scripts de vente & gestion impitoyable des objections",
      points: [
        "Les messages exacts pour répondre à « C'est combien ? » sans faire fuir le prospect",
        "Techniques de closing douces pour transformer les curieux en acheteurs payants",
        "Comment justifier des tarifs 3x plus élevés que les emballages ordinaires",
      ]
    },
    {
      day: "Jour 6",
      title: "Lancement de votre première offre & activation du réseau",
      points: [
        "Plan de diffusion stratégique sans passer pour un vendeur agressif",
        "Mobilisation de votre premier cercle et partenariats locaux de proximité",
        "Coaching direct et revue en direct de vos conversations WhatsApp par Tiffany",
      ]
    },
    {
      day: "Jour 7",
      title: "Closing de votre première vente & feuille de route long terme",
      points: [
        "Encaissement de vos premiers acomptes ou commandes fermes",
        "Plan d'action sur 90 jours pour fidéliser vos clients et décrocher des commandes d'entreprises",
        "Intégration à la communauté fermée des alumni FlareShop pour entraide continue",
      ]
    }
  ];

  return (
    <section 
      id="formation-timeline" 
      className="py-16 md:py-24 bg-white"
      aria-label="Programme détaillé de la formation 7 jours"
    >
      <div className="container-custom">
        {/* En-tête */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ 
              backgroundColor: 'var(--color-rose-light)', 
              borderColor: 'var(--color-border)', 
              color: 'var(--color-rose)' 
            }}
          >
            <CheckCircle2 size={14} className="text-[#E85D8A]" />
            <span>Un programme complet en 2 phases indissociables</span>
          </div>

          <h2 
            className="text-[clamp(1.45rem,3.8vw,2.4rem)] font-semibold tracking-tight text-[#1A1A1A] leading-snug sm:leading-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            La Méthode FlareShop : 7 jours pour maîtriser l'art et déclencher vos premières commandes
          </h2>

          <p 
            className="text-sm sm:text-base md:text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Nous ne formons pas de simples amateurs de loisirs créatifs. Nous forgeons des artisans-entrepreneurs capables de concevoir des pièces de prestige et de les vendre avec fierté.
          </p>
        </div>

        {/* Phase 1 : 3 jours atelier (1 col mobile, 2 cols tablette, 3 cols desktop) */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 mb-6 sm:mb-8 border-b border-[#F0DDE3]/60 sm:border-b-0">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white font-bold shrink-0"
                style={{ backgroundColor: 'var(--color-rose)' }}
              >
                <Scissors size={20} />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#B8406A] block">Phase 1 • Présentiel à Cotonou</span>
                <h3 className="text-lg sm:text-2xl font-bold text-[#1A1A1A] leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                  3 jours intensifs de Confection & Savoir-Faire Luxe
                </h3>
              </div>
            </div>
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#FDF6F8] text-[#1A1A1A] border border-[#F0DDE3] self-start sm:self-auto shrink-0">
              100% pratique en atelier privé
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {phase1Steps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-[#FDF6F8] p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:bg-white hover:shadow-md flex flex-col justify-between"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div>
                  <span className="inline-block text-xs font-bold text-white px-2.5 py-1 rounded-md mb-3" style={{ backgroundColor: 'var(--color-rose)' }}>
                    {step.day}
                  </span>
                  <h4 className="text-base font-bold text-[#1A1A1A] mb-3 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                    {step.title}
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#6B6B6B]">
                    {step.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#E85D8A] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2 : 4 jours closing & vente (1 col mobile, 2 cols tablette, 4 cols desktop) */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 mb-6 sm:mb-8 border-b border-[#F0DDE3]/60 sm:border-b-0">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white font-bold shrink-0"
                style={{ backgroundColor: '#E85D8A' }}
              >
                <ShoppingBag size={20} />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#E85D8A] block">Phase 2 • Accompagnement terrain</span>
                <h3 className="text-lg sm:text-2xl font-bold text-[#1A1A1A] leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                  4 jours d'Accompagnement Première Vente (WhatsApp & Réseau)
                </h3>
              </div>
            </div>
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#FDF2F5] text-[#E85D8A] border border-[#F9D2DE] self-start sm:self-auto shrink-0">
              Objectif : Encaisser votre 1er acompte
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {phase2Steps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-[#FDF6F8] p-5 rounded-2xl border transition-all duration-300 hover:bg-white hover:shadow-md flex flex-col justify-between"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div>
                  <span className="inline-block text-xs font-bold text-white px-2.5 py-1 rounded-md mb-3" style={{ backgroundColor: '#E85D8A' }}>
                    {step.day}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-[#1A1A1A] mb-2.5 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                    {step.title}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#6B6B6B]">
                    {step.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-[#E85D8A] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner de fin de timeline */}
        <div className="text-center pt-2">
          <a
            href="#preinscription"
            onClick={onCtaClick}
            className="btn-cta-primary text-sm sm:text-base py-3.5 px-7 sm:px-8 inline-flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto"
          >
            <span>Faire ma demande de préinscription</span>
            <ArrowRight size={18} />
          </a>
          <p className="text-xs text-[#6B6B6B] mt-2.5">
            Sessions limitées à 8 participants pour garantir un suivi individuel à chaque table.
          </p>
        </div>

      </div>
    </section>
  );
};
