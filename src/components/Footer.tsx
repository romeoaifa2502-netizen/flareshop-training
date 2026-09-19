import React from 'react';
import { Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer 
      className="w-full relative overflow-hidden pt-16 pb-8 border-t"
      style={{ 
        backgroundColor: 'var(--color-ink-900)', 
        borderColor: 'rgba(255, 255, 255, 0.1)',
        color: 'var(--color-ink-400)'
      }}
    >
      <div className="container relative z-10">
        {/* Ligne supérieure de navigation / contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}>
          
          {/* Marque & Zone d'intervention */}
          <div className="md:col-span-5">
            <a 
              href="#" 
              id="footer-brand-logo"
              className="text-2xl font-bold tracking-tight text-white block mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              FlareShop
            </a>
            <p className="text-sm leading-relaxed mb-5 max-w-sm text-stone-300">
              Box et cadeaux personnalisés haut de gamme & formation présentielle à l'entrepreneuriat créatif dispensée par Tiffany Inès Akowé.
            </p>
            
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <MapPin size={16} style={{ color: 'var(--color-rose-500)' }} />
              <span>Zone d'intervention : Bénin & Afrique de l'Ouest</span>
            </div>
          </div>

          {/* Navigation rapide */}
          <div className="md:col-span-2">
            <h4 
              className="text-sm font-semibold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-stone-300">
              <li><a href="#hero" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#a-propos" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#box-cadeaux" className="hover:text-white transition-colors">Box & Cadeaux</a></li>
              <li><a href="#entreprises" className="hover:text-white transition-colors">Solutions entreprises</a></li>
              <li><a href="#formation" className="hover:text-white transition-colors">Formation</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Coordonnées [PLACEHOLDER email/téléphone] */}
          <div className="md:col-span-3">
            <h4 
              className="text-sm font-semibold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Coordonnées
            </h4>
            <div className="flex flex-col gap-3 text-sm text-stone-300">
              <a 
                href="mailto:flareshop01@gmail.com" 
                className="flex items-center gap-2 hover:text-white transition-colors"
                title="Adresse email de contact"
              >
                <Mail size={16} style={{ color: 'var(--color-rose-500)' }} />
                <span>flareshop01@gmail.com</span>
              </a>

              <a 
                href="https://wa.me/2290157776448" 
                className="flex items-center gap-2 hover:text-white transition-colors"
                title="Ligne WhatsApp & Téléphone"
              >
                <Phone size={16} style={{ color: 'var(--color-rose-500)' }} />
                <span>+229 01 57 77 64 48</span>
              </a>

              <p className="text-xs text-stone-400 mt-1">
                Atelier basé à Cotonou, Bénin.
              </p>
            </div>
          </div>

          {/* Réseaux sociaux [PLACEHOLDER liens] */}
          <div className="md:col-span-2">
            <h4 
              className="text-sm font-semibold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Réseaux sociaux
            </h4>
            <p className="text-xs mb-3 text-stone-400">
              [PLACEHOLDER liens]
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                aria-label="Instagram FlareShop"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-white/10 hover:bg-white/20 text-white"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://wa.me/2290157776448"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp FlareShop"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-white/10 hover:bg-white/20 text-white"
              >
                <MessageCircle size={17} />
              </a>
              <a
                href="#contact"
                aria-label="LinkedIn FlareShop"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-white/10 hover:bg-white/20 text-white"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

        </div>

        {/* Mention légale */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© FlareShop — Tous droits réservés.</p>
          <p>Conçu pour Tiffany Inès Akowé — Bénin & Afrique de l'Ouest</p>
        </div>
      </div>

      {/* Reproduction de l'agencement footer-reference-layout.png :
          Watermark pleine largeur en très grand "FLARESHOP" en Outfit en bas de page,
          fond --color-ink-900, texte du watermark subtil */}
      <div 
        className="w-full select-none pointer-events-none overflow-hidden text-center mt-6 -mb-6 leading-none"
        aria-hidden="true"
      >
        <span 
          className="block font-black tracking-tight uppercase"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(4rem, 14vw, 15rem)',
            color: 'var(--color-bg)',
            opacity: 0.06,
            letterSpacing: '0.04em',
            lineHeight: 0.8,
          }}
        >
          FLARESHOP
        </span>
      </div>
    </footer>
  );
};
