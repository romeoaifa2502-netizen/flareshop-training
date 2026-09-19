import React from 'react';
import { GraduationCap, BookOpen, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

interface AudienceTargetProps {
  onSelectTarget: (target: string) => void;
}

export const AudienceTarget: React.FC<AudienceTargetProps> = ({ onSelectTarget }) => {
  const audiences = [
    {
      id: 'jeunes-etudiants',
      icon: GraduationCap,
      category: 'Étudiants & Jeunes Diplômés',
      tagline: 'Financez vos études et construisez votre autonomie financière',
      description: 'Vous cherchez une source de revenus concrète sans dépendre de stages sous-payés ou d’emplois précaires. Les box-cadeaux vous permettent de démarrer depuis votre chambre ou salon avec un petit capital.',
      benefits: [
        'Horaires 100% flexibles adaptés à votre emploi du temps universitaire',
        'Apprentissage pratique du marketing WhatsApp et de la vente',
        'Marge rapide dès vos premiers clients pour couvrir vos besoins',
      ],
      ctaText: 'Je suis étudiant / jeune diplômé',
    },
    {
      id: 'lyceens-bacheliers',
      icon: BookOpen,
      category: 'Lycéens & Nouveaux Bacheliers',
      tagline: 'Prenez une avance décisive avant d’entrer dans la vie active',
      description: 'Profitez de votre énergie et de vos vacances pour développer un savoir-faire rare, manuel et respecté. Apprenez dès le lycée la rigueur d’une entreprise et l’indépendance par le travail bien fait.',
      benefits: [
        'Valorisation immédiate de votre créativité manuelle',
        'Fierté de générer vos premiers revenus par vous-même',
        'Encadrement bienveillant et apprentissage étape par étape',
      ],
      ctaText: 'Je suis lycéen / bachelier',
    },
    {
      id: 'professionnels-salaries',
      icon: Briefcase,
      category: 'Professionnels & Salariés',
      tagline: 'Bâtissez un revenu complémentaire solide ou une reconversion',
      description: 'Vous avez déjà un travail mais voulez sécuriser vos fins de mois, ou vous préparez une reconversion passionnante dans l’artisanat de luxe et l’événementiel haut de gamme.',
      benefits: [
        'Complément de revenu régulier pendant les week-ends et fêtes',
        'Accès direct aux techniques pour closer des commandes d’entreprises',
        'Savoir-faire patrimonial durable qui ne s’obsolétise jamais',
      ],
      ctaText: 'Je suis salarié / professionnel',
    },
  ];

  return (
    <section 
      id="pour-qui" 
      className="w-full py-16 md:py-24 bg-[#FDF6F8]"
      aria-label="Pour qui s'adresse la formation FlareShop"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B8406A] px-3 py-1 rounded-full bg-white border border-[#F0DDE3] inline-block mb-3">
            Public cible & Profils
          </span>
          <h2 
            className="text-[clamp(1.45rem,3.8vw,2.4rem)] font-semibold tracking-tight text-[#1A1A1A] leading-snug sm:leading-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Cette formation est conçue sur-mesure pour vous si :
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            Aucun prérequis en dessin ou en bricolage n’est exigé. Seules votre motivation, votre rigueur et l'envie d'apprendre comptent.
          </p>
        </div>

        {/* 3 cards : 1 col mobile, 2 cols tablette, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <div
                key={aud.id}
                className="bg-white rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'var(--color-rose-light)' }}>
                    <Icon size={24} className="text-[#E85D8A]" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#E85D8A] block mb-1">
                    {aud.category}
                  </span>

                  <h3 
                    className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-3 leading-snug"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {aud.tagline}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed mb-6">
                    {aud.description}
                  </p>

                  <div className="pt-4 border-t mb-6" style={{ borderColor: 'var(--color-border)' }}>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-3">
                      Ce que cela vous apporte :
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#6B6B6B]">
                      {aud.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-[#E85D8A] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <a
                    href="#preinscription"
                    onClick={() => onSelectTarget(aud.category)}
                    className="w-full min-h-[44px] py-3 px-4 rounded-lg font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-colors border border-[#F0DDE3] bg-[#FDF6F8] text-[#1A1A1A] hover:bg-[#E85D8A] hover:text-white hover:border-[#E85D8A]"
                  >
                    <span>{aud.ctaText}</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
