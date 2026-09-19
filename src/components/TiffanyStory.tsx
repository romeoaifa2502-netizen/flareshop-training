import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TiffanyStoryProps {
  onCtaClick: () => void;
}

export const TiffanyStory: React.FC<TiffanyStoryProps> = ({ onCtaClick }) => {
  return (
    <section 
      id="storytelling" 
      className="py-16 md:py-24 bg-[#EAE4DC] text-[#1A1A1A] relative overflow-hidden"
      aria-label="À propos de la marque et de Tiffany Inès Akowé"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Colonne Gauche : Récit éditorial style Haute Maroquinerie (Design inspiré de la maquette "ABOUT THE BRAND") */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            
            {/* Titre "ABOUT THE BRAND" en typographie Serif d'orfèvrerie - fluide clamp() */}
            <h2 
              className="text-[clamp(1.65rem,4.2vw,3rem)] font-medium tracking-wide uppercase text-[#1A1A1A] leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              ABOUT THE BRAND
            </h2>

            {/* Ligne de séparation fine typique du design */}
            <div className="w-20 sm:w-28 h-[1.5px] bg-[#B0A696] mt-3 sm:mt-4 mb-5 sm:mb-6" />

            {/* Paragraphe d'accroche introductif */}
            <p className="text-sm sm:text-base md:text-lg text-[#2C2825] font-medium leading-relaxed mb-4 sm:mb-5 max-w-xl">
              L'histoire de FlareShop est née d'une conviction inébranlable : transformer le coffret cadeau en une œuvre d'artisanat mémorable, alliant haute précision et émotion pure.
            </p>

            {/* Corps du texte narratif */}
            <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm md:text-base text-[#524B45] leading-relaxed mb-6 sm:mb-8 max-w-xl font-normal">
              <p>
                Lorsque j’ai débuté FlareShop à Cotonou, l'emballage cadeau était trop souvent réduit à un simple carton jetable. J’ai refusé cette fatalité. J'ai choisi l'obsession du millimètre : la justesse d'ajustement d'un couvercle sur-mesure, la noblesse du satin lourd d'importation et la finesse des finitions cousues main.
              </p>
              <p>
                Cette exigence sans concession a rapidement conquis les particuliers les plus raffinés, avant d'attirer les grandes institutions telles que <strong>Gozem</strong>, <strong>Moov Africa</strong> ou le <strong>Supermarché Erevan</strong> pour leurs box de prestige et campagnes événementielles.
              </p>
              <p>
                À travers l'<strong>Académie FlareShop</strong>, j'ouvre désormais les portes de mon atelier pour former une nouvelle génération de créatrices et d'artisans d'élite, capables de maîtriser à la fois la confection manuelle de luxe et la rentabilité commerciale immédiate.
              </p>
            </div>

            {/* Signature & Citation discrète */}
            <div className="mb-6 sm:mb-8 pt-4 border-t border-[#D6CEC4] w-full max-w-xl flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Tiffany Inès Akowé
                </p>
                <p className="text-xs text-[#756C64]">
                  Fondatrice & Directrice Artistique • FlareShop
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E85D8A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85D8A]" /> Maison FlareShop Cotonou
              </span>
            </div>

            {/* Bouton d'action */}
            <div className="w-full sm:w-auto">
              <a
                href="#preinscription"
                onClick={onCtaClick}
                className="btn-cta-primary text-xs sm:text-sm py-3.5 px-7 text-center justify-center font-bold shadow-md uppercase tracking-wider min-h-[48px] w-full sm:w-auto inline-flex items-center gap-2"
              >
                <span>Rejoindre la formation d'élite</span>
                <ArrowRight size={16} />
              </a>
            </div>

          </div>

          {/* Colonne Droite : Portrait studio épuré de Tiffany */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center w-full">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Cadre photo épuré et élégant */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#DCD5CB] border border-[#D1C9BD]">
                <img 
                  src="/images/tiffany-portrait.jpg" 
                  alt="Tiffany Inès Akowé, Fondatrice et Directrice Artistique de FlareShop"
                  className="w-full h-[340px] sm:h-[460px] lg:h-[560px] object-cover object-top"
                  loading="lazy"
                />
                
                {/* Voile subtil en bas pour l'harmonie */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                
                {/* Légende discrète incrustée en bas */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p 
                    className="text-lg font-bold tracking-wide uppercase"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Tiffany Inès Akowé
                  </p>
                  <p className="text-xs text-[#F2ECE4] font-medium">
                    Atelier de Maroquinerie & Box de Luxe
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
