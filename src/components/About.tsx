import React from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const About: React.FC = () => {
  return (
    <section 
      id="a-propos" 
      className="section section-bg-alt"
      aria-labelledby="about-title"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 id="about-title">
            L'histoire derrière FlareShop
          </h2>

          {/* Bloc .prose — Placeholder storytelling personnel modifiable */}
          <div className="prose mt-4">
            <div 
              className="p-6 rounded-lg border my-4"
              style={{ 
                backgroundColor: 'var(--color-surface)', 
                borderColor: 'var(--color-border)',
                color: 'var(--color-ink-600)'
              }}
            >
              <p className="font-medium text-sm mb-2" style={{ color: 'var(--color-rose-900)' }}>
                [PLACEHOLDER storytelling personnel de Tiffany — bloc de texte modifiable]
              </p>
              <p className="mb-3">
                « Tout est parti d'une conviction simple : offrir un cadeau ne devrait jamais être un geste mécanique, mais une véritable passerelle émotionnelle. Depuis le Bénin, j'ai imaginé FlareShop pour redonner au geste du cadeau sa noblesse artisanale et son impact humain. »
              </p>
              <p>
                « De la sélection minutieuse de chaque élément jusqu'au nœud final du ruban, chaque box est pensée comme une œuvre sur-mesure. Cet artisanat de l'émotion, je le partage aujourd'hui avec nos clients particuliers, nos partenaires entreprises et la nouvelle génération de créateurs que nous formons. »
              </p>
            </div>
          </div>
        </div>

        {/* Visual Showcase: Portrait studio principal + photo événementielle */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-12">
          <div className="md:col-span-5">
            <ImagePlaceholder
              src="/images/portrait-studio-1.jpg"
              alt="Portrait de Tiffany Inès Akowé, fondatrice de FlareShop"
              label="Portrait officiel — Tiffany Inès Akowé"
              sublabel="Fondatrice et directrice créative de FlareShop"
              aspectRatio="aspect-[4/5]"
              badge="Fondatrice & Créatrice"
            />
          </div>
          <div className="md:col-span-7 flex flex-col justify-between h-full gap-6">
            <ImagePlaceholder
              src="/images/portrait-evenement.jpg"
              alt="Tiffany Inès Akowé lors d'un événement entrepreneurial"
              label="Tiffany Inès Akowé — Événement entrepreneurial"
              sublabel="Intervenante & entrepreneure créative reconnue"
              aspectRatio="aspect-[16/11]"
              badge="Crédibilité & Événement"
            />

            {/* Note d'authenticité */}
            <div 
              className="p-6 rounded-xl border"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)'
              }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-ink-900)' }}>
                Tiffany Inès Akowé
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-600)' }}>
                Fondatrice et directrice créative de FlareShop. Confectionneuse passionnée et formatrice en entrepreneuriat créatif au Bénin et en Afrique de l'Ouest.
              </p>
            </div>
          </div>
        </div>

        {/* Bandeau chiffré & de confiance */}
        <div 
          className="rounded-xl border p-6 md:p-8"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:divide-x divide-y md:divide-y-0" style={{ borderColor: 'var(--color-border)' }}>
            
            {/* Chiffre 1 */}
            <div className="md:pr-6 flex flex-col justify-center">
              <span 
                className="text-3xl font-bold tracking-tight block mb-1"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-rose-600)' }}
              >
                +50
              </span>
              <span className="text-base font-medium" style={{ color: 'var(--color-ink-900)' }}>
                personnes accompagnées
              </span>
              <p className="text-xs mt-1" style={{ color: 'var(--color-ink-400)' }}>
                Particuliers et porteurs de projets formés
              </p>
            </div>

            {/* Confiance */}
            <div className="pt-6 md:pt-0 md:px-6 flex flex-col justify-center">
              <span className="text-sm font-semibold mb-2" style={{ color: 'var(--color-ink-900)' }}>
                Ils nous font confiance :
              </span>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-600)' }}>
                Gozem · Supermarché Erevan · Le Ruisseau · Eden Food · Moov Africa
              </p>
            </div>

            {/* Chiffre 3 */}
            <div className="pt-6 md:pt-0 md:pl-6 flex flex-col justify-center">
              <span 
                className="text-lg font-bold block mb-1"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-rose-700)' }}
              >
                Formation présentielle certifiante
              </span>
              <p className="text-sm" style={{ color: 'var(--color-ink-600)' }}>
                Programme intensif d'une semaine de la confection à la première vente
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
