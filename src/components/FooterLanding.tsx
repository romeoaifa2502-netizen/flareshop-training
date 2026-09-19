import React from 'react';
import { 
  Building2, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Linkedin, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';

interface FooterLandingProps {
  onOpenGoogleSheets?: () => void;
}

export const FooterLanding: React.FC<FooterLandingProps> = ({ onOpenGoogleSheets }) => {
  return (
    <footer 
      id="footer" 
      className="w-full bg-[#111111] text-white border-t border-neutral-800 relative overflow-hidden"
      aria-label="Pied de page FlareShop"
    >
      {/* 1. Bloc Spécial Entreprises & Partenariats B2B (Charte FlareShop Luxe) */}
      <div className="w-full border-b border-white/10 py-12 md:py-16 bg-gradient-to-b from-[#181818] to-[#111111]">
        <div className="container-custom">
          <div className="rounded-3xl border border-white/10 bg-[#161616] p-8 sm:p-10 relative overflow-hidden shadow-2xl">
            
            {/* Halo lumineux rose délicat */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E85D8A]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E85D8A]/15 text-[#E85D8A] border border-[#E85D8A]/30 mb-3">
                  <Building2 size={14} />
                  <span>Solutions Corporate B2B</span>
                </div>

                <h3 
                  className="text-2xl sm:text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Vous êtes une entreprise, une institution ou une agence ?
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl font-normal">
                  Confiez-nous la confection de vos <strong className="text-white">box-cadeaux de fin d'année</strong>, vos <strong className="text-white">sacs shopping d'entreprise haut de gamme</strong>, vos coffrets VIP et vos campagnes événementielles sur-mesure. Nous gérons de la conception graphique à la livraison en grand volume à Cotonou et sous-région.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#E85D8A]" />
                    Marquage & lettrage au logo de votre marque
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#E85D8A]" />
                    Capacité de production de 10 à +1000 unités
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <a
                  href="https://wa.me/2290157776448?text=Bonjour%20FlareShop,%20je%20repr%C3%A9sente%20une%20entreprise%20et%20souhaite%20un%20devis%20pour%20des%20box%20ou%20sacs%20cadeaux."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-primary text-xs sm:text-sm py-3.5 px-6 text-center justify-center font-bold shadow-lg"
                >
                  <MessageCircle size={16} />
                  <span>Demander un devis B2B direct</span>
                </a>

                <a
                  href="mailto:flareshop01@gmail.com?subject=Demande%20de%20partenariat%20entreprise%20FlareShop"
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold border border-white/15 text-neutral-200 hover:bg-white/5 hover:border-white/30 transition-colors"
                >
                  <Mail size={16} />
                  <span>Écrire au pôle Entreprise</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Navigation 5 Colonnes (Design PadiSave adapté à la charte FlareShop) */}
      <div className="container-custom pt-14 pb-8 sm:pt-16 sm:pb-12 relative z-10">
        
        {/* Grille des 5 colonnes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 text-left">
          
          {/* Colonne 1 : Company */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-4 tracking-tight">
              Company
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#storytelling" className="hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#storytelling" className="hover:text-white transition-colors">
                  Tiffany Inès Akowé
                </a>
              </li>
              <li>
                <a href="#temoignages" className="hover:text-white transition-colors">
                  Reviews & Success
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#preinscription" className="hover:text-white transition-colors">
                  Careers & Team
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 2 : Products */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-4 tracking-tight">
              Products
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#formation-timeline" className="hover:text-white transition-colors">
                  Formation 7 Jours
                </a>
              </li>
              <li>
                <a href="#galerie-box" className="hover:text-white transition-colors">
                  Box Déclarations d'Amour
                </a>
              </li>
              <li>
                <a href="#galerie-box" className="hover:text-white transition-colors">
                  Coffrets Naissance Bébé
                </a>
              </li>
              <li>
                <a href="#galerie-box" className="hover:text-white transition-colors">
                  Collections VIP Homme
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  Sacs Shopping & B2B
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Resources */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-4 tracking-tight">
              Resources
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#formation-timeline" className="hover:text-white transition-colors">
                  Programme Détaillé
                </a>
              </li>
              <li>
                <a href="#pour-qui" className="hover:text-white transition-colors">
                  Guide d'Éligibilité
                </a>
              </li>
              <li>
                <a href="#temoignages" className="hover:text-white transition-colors">
                  Captures WhatsApp
                </a>
              </li>
              <li>
                <a href="#galerie-box" className="hover:text-white transition-colors">
                  Catalogue Photos
                </a>
              </li>
              <li>
                <a href="#modalites" className="hover:text-white transition-colors">
                  Guide Fournisseurs Cotonou
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Legal */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-4 tracking-tight">
              Legal
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Acceptance policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 5 : Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-sm sm:text-base font-semibold text-white mb-4 tracking-tight">
              Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <li>
                <a 
                  href="mailto:flareshop01@gmail.com" 
                  className="hover:text-white transition-colors break-all"
                >
                  flareshop01@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/2290157776448" 
                  className="hover:text-white transition-colors"
                >
                  +229 01 57 77 64 48
                </a>
              </li>
              <li className="text-neutral-500">
                07000-FLARESHOP
              </li>
              <li className="pt-1">
                <a 
                  href="#preinscription" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E85D8A] hover:underline"
                >
                  <span>Postuler pour la prochaine cohorte</span>
                  <ArrowRight size={13} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* 3. Ligne de séparation horizontale fine (conforme au design) */}
        <div className="w-full border-t border-white/15 mt-12 sm:mt-16 mb-8" />

        {/* 4. Barre inférieure : Adresse & Copyright à gauche, Icônes Réseaux Sociaux circulaires à droite */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
          
          {/* Adresse & Copyright (exactement comme le screenshot) */}
          <div className="space-y-1.5 text-xs sm:text-sm text-neutral-300">
            <p className="font-medium text-white">
              FlareShop HQ, Atelier & Académie de Confection de Luxe, Cotonou, Bénin.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-neutral-400">
              <span>© {new Date().getFullYear()} FlareShop. All rights reserved.</span>
              {onOpenGoogleSheets && (
                <button
                  type="button"
                  onClick={onOpenGoogleSheets}
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium cursor-pointer"
                  title="Accéder au suivi Google Sheets des candidatures"
                >
                  <FileSpreadsheet size={13} />
                  <span>Suivi Google Sheets</span>
                </button>
              )}
            </div>
          </div>

          {/* Boutons Sociaux Circulaires (In, X, Instagram, Facebook) */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn FlareShop"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <Linkedin size={17} />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) FlareShop"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram FlareShop"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <Instagram size={17} />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook FlareShop"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <Facebook size={17} />
            </a>
          </div>

        </div>

      </div>

      {/* 5. ÉNORME WATERMARK TYPOGRAPHIQUE D'ARRIÈRE-PLAN "FlareShop" (Identique à "PadiSave" dans le design) */}
      <div 
        className="w-full overflow-hidden select-none pointer-events-none relative -mb-6 sm:-mb-10 md:-mb-14 lg:-mb-18"
        aria-hidden="true"
      >
        <p 
          className="text-[80px] sm:text-[140px] md:text-[200px] lg:text-[260px] font-extrabold tracking-tighter text-white/[0.04] text-center leading-none whitespace-nowrap"
          style={{ fontFamily: 'var(--font-heading), system-ui, -apple-system, sans-serif' }}
        >
          FlareShop
        </p>
      </div>

    </footer>
  );
};
