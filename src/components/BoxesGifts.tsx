import React from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface BoxesGiftsProps {
  onSelectIndividual: () => void;
}

export const BoxesGifts: React.FC<BoxesGiftsProps> = ({ onSelectIndividual }) => {
  const boxExamples = [
    {
      id: 'box-declarations-amour',
      title: '« Mon Bébé », « All The Best my Man », « Joyeux Anniversaire »',
      caption: 'pour dire son amour ou marquer une occasion, sans un mot de plus.',
      alt: "Box personnalisées pour déclarations d'amour et anniversaires, FlareShop",
      label: "Box déclarations d'amour & anniversaires",
      sublabel: 'Fichier : box-declarations-amour.jpg',
      src: '/images/box-declarations-amour.jpg',
      badge: "Déclaration & Célébration",
    },
    {
      id: 'box-collection-variee',
      title: '« Pour Toi », « Amour Éternel », « Ma Douceur »',
      caption: 'une palette de formats et de finitions pour chaque intention.',
      alt: 'Collection de box personnalisées aux formats variés, FlareShop',
      label: 'Collection variée aux formats multiples',
      sublabel: 'Fichier : box-collection-variee.jpg',
      src: '/images/box-collection-variee.jpg',
      badge: 'Palette de finitions',
    },
    {
      id: 'box-collection-premium',
      title: '« For Someone Special », « Une Petite Attention »',
      caption: 'la version la plus haut de gamme de la collection, formats géométriques et matières nobles (velours, kraft, bois).',
      alt: 'Collection premium de box cadeaux personnalisées, FlareShop',
      label: 'Collection Premium & Matières nobles',
      sublabel: 'Fichier : box-collection-premium.jpg',
      src: '/images/box-collection-premium.jpg',
      badge: 'Gamme prestige',
    },
  ];

  return (
    <section 
      id="box-cadeaux" 
      className="section section-bg-main"
      aria-labelledby="boxes-gifts-title"
    >
      <div className="container">
        {/* Section Header strictly aligned in container */}
        <div className="section-header">
          <h2 id="boxes-gifts-title">
            Des box qui disent ce que les mots ne suffisent pas à dire
          </h2>
          <div className="prose">
            <p>
              Anniversaire, déclaration, remerciement, réconciliation, naissance... Chaque box FlareShop est pensée pour porter une émotion précise, pas juste un objet.
            </p>
          </div>
        </div>
      </div>

      {/* Exception d'alignement #2 validée par la cliente :
          La galerie photo des box déborde légèrement du container sur desktop uniquement (pleine largeur étendue),
          pour donner plus de présence visuelle aux photos. */}
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boxExamples.map((box) => (
            <div 
              key={box.id}
              id={box.id}
              className="card-on-main overflow-hidden flex flex-col p-4"
            >
              <ImagePlaceholder
                src={box.src}
                badge={box.badge}
                alt={box.alt}
                label={box.label}
                sublabel={box.sublabel}
                aspectRatio="aspect-[4/3]"
                className="w-full"
              />
              <div className="pt-4 pb-2 px-2 flex flex-col flex-grow justify-between">
                <div>
                  <h3 
                    className="text-lg font-semibold mb-1" 
                    style={{ color: 'var(--color-ink-900)' }}
                  >
                    {box.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-600)' }}>
                    {box.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Re-aligned container for CTA and tariff note */}
      <div className="container mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <a
            href="#contact"
            id="boxes-cta"
            className="btn-primary"
            onClick={onSelectIndividual}
          >
            Créer ma box
          </a>
        </div>
        <p className="text-sm font-medium" style={{ color: 'var(--color-ink-400)' }}>
          Sur devis, selon personnalisation
        </p>
      </div>
    </section>
  );
};
