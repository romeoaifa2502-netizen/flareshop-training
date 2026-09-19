import React from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Sparkles, Users, CheckCircle2 } from 'lucide-react';

interface TrainingProps {
  onSelectTraining: () => void;
}

export const Training: React.FC<TrainingProps> = ({ onSelectTraining }) => {
  const programme = [
    {
      step: '01',
      title: '« De l\'idée à l\'objet »',
      description: 'Choix des matériaux, assemblage, calligraphie, rubans, finitions haut de gamme.',
    },
    {
      step: '02',
      title: '« Vendre avant de produire »',
      description: 'Trouver ses premiers clients, fixer ses prix, communiquer sur les réseaux.',
    },
    {
      step: '03',
      title: '« L\'épreuve du réel »',
      description: 'Vente accompagnée pendant la formation, premières commandes concrètes.',
    },
  ];

  return (
    <section 
      id="formation" 
      className="section section-bg-main"
      aria-labelledby="training-title"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 id="training-title">
            Apprenez un métier. Repartez avec votre première vente.
          </h2>
          <div className="prose">
            <p>
              Une formation présentielle immersive de 7 jours, dispensée directement par Tiffany Inès Akowé.
            </p>
          </div>
        </div>

        {/* Profils ciblés */}
        <div 
          className="p-5 sm:p-6 rounded-xl border mb-10 max-w-[880px] flex items-start gap-4"
          style={{ 
            backgroundColor: 'var(--color-surface-alt)',
            borderColor: 'var(--color-border)'
          }}
        >
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
            style={{ backgroundColor: 'var(--color-rose-100)', color: 'var(--color-rose-700)' }}
          >
            <Users size={20} />
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-ink-900)' }}>
              Profils ciblés
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-600)' }}>
              Lycéens, étudiants, professionnels en reconversion ou en quête d'un revenu complémentaire : cette formation s'adresse à toute personne qui veut créer de ses mains et construire une activité rentable.
            </p>
          </div>
        </div>

        {/* La promesse centrale (mise en valeur typographique) */}
        <div 
          className="p-6 sm:p-8 rounded-2xl border mb-12 max-w-[880px] relative overflow-hidden"
          style={{ 
            backgroundColor: 'var(--color-rose-50)',
            borderColor: 'var(--color-border-strong)',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={18} style={{ color: 'var(--color-rose-600)' }} />
            <span 
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--color-rose-700)', fontFamily: 'var(--font-heading)' }}
            >
              La promesse centrale
            </span>
          </div>
          <blockquote 
            className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-ink-900)'
            }}
          >
            « En 7 jours, vous ne repartez pas avec une simple attestation. Vous repartez avec les compétences, les outils et un accompagnement pour réaliser votre toute première vente. »
          </blockquote>
        </div>

        {/* Programme en 3 blocs & Preuve visuelle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Programme en 3 blocs (séquence numérotée) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--color-ink-900)' }}>
              Programme en 3 blocs
            </h3>

            {programme.map((item) => (
              <div 
                key={item.step}
                className="card-on-main p-6 flex items-start gap-5"
              >
                <div 
                  className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-base font-bold"
                  style={{ 
                    backgroundColor: 'var(--color-surface-alt)', 
                    color: 'var(--color-rose-700)',
                    border: '1px solid var(--color-border)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h4 
                    className="text-base font-semibold mb-1.5"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink-900)' }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-600)' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visuel d'immersion & Mention format */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--color-ink-900)' }}>
              En immersion avec Tiffany
            </h3>

            <div className="card-on-main p-4">
              <ImagePlaceholder
                src="/images/hero-atelier-formation.jpg"
                alt="Atelier pratique de formation en immersion chez FlareShop"
                label="Atelier de formation en immersion"
                sublabel="Pratique manuelle & transmission directe"
                aspectRatio="aspect-[4/3]"
                badge="Formation présentielle"
              />
              <div className="pt-4 px-1">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} style={{ color: 'var(--color-rose-600)' }} />
                  <span className="text-sm font-semibold" style={{ color: 'var(--color-ink-900)' }}>
                    Accompagnement terrain personnalisé
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-ink-600)' }}>
                  Chaque participant manipule les textures, réalise ses propres créations et apprend à démarcher ses premiers clients sous le regard attentif de Tiffany Inès Akowé.
                </p>
              </div>
            </div>

            {/* Mention format */}
            <div 
              className="p-4 rounded-xl border text-center font-medium text-xs sm:text-sm"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-rose-700)',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Présentiel · Petit groupe · Places limitées par session
            </div>
          </div>

        </div>

        {/* CTA : Postuler à la prochaine session */}
        <div>
          <a
            href="#contact"
            id="training-cta"
            className="btn-primary"
            onClick={onSelectTraining}
          >
            Postuler à la prochaine session
          </a>
        </div>

      </div>
    </section>
  );
};
