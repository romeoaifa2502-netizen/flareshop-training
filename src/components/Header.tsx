import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, ArrowUpRight, MessageCircle, FileSpreadsheet } from 'lucide-react';

interface HeaderProps {
  onNavigateToForm: () => void;
  onOpenGoogleSheets?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateToForm, onOpenGoogleSheets }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#hero', hasDropdown: true },
    { label: 'Programme', href: '#formation-timeline', hasDropdown: true },
    { label: 'Pour qui', href: '#pour-qui', hasDropdown: true },
    { label: 'Tiffany Akowé', href: '#storytelling', hasDropdown: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1A1A1A]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        
        {/* Brand Logo avec icône étoilée / astérisque style Finovate */}
        <a 
          href="#hero" 
          id="brand-logo"
          className="flex items-center gap-2.5 text-decoration-none group"
        >
          {/* Astérisque vibrant rose signature */}
          <div className="w-8 h-8 rounded-full bg-[#E85D8A] flex items-center justify-center text-white font-black text-lg shadow-sm transition-transform group-hover:scale-105">
            <span className="leading-none text-base">✻</span>
          </div>
          <span 
            className="text-2xl font-bold tracking-tight text-white drop-shadow-sm"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Flare<span className="text-[#E85D8A]">Shop</span>
          </span>
        </a>

        {/* Navigation Desktop Centrale style Finovate */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-white flex items-center gap-1 transition-colors drop-shadow-xs"
            >
              <span>{link.label}</span>
              {link.hasDropdown && <ChevronDown size={13} className="opacity-70" />}
            </a>
          ))}

          {/* Capsule Insight / Formation style Finovate */}
          <a
            href="#modalites"
            className="text-xs font-semibold px-4 py-1.5 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-md border border-white/25 transition-all shadow-xs"
          >
            Formation 7J
          </a>
        </nav>

        {/* Actions Droite style Finovate */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Bouton Espace Google Sheets (Gestionnaire) */}
          {onOpenGoogleSheets && (
            <button
              type="button"
              onClick={onOpenGoogleSheets}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-emerald-500/30 text-white hover:text-emerald-200 backdrop-blur-md border border-white/20 hover:border-emerald-400/40 flex items-center justify-center transition-all shadow-xs"
              title="Ouvrir le suivi Google Sheets des candidatures"
              aria-label="Suivi Google Sheets"
            >
              <FileSpreadsheet size={16} />
            </button>
          )}

          {/* Bouton recherche / contact WhatsApp en cercle dépoli */}
          <a
            href="https://wa.me/2290157776448?text=Bonjour%20FlareShop,%20je%20souhaite%20des%20informations%20sur%20la%20formation."
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-xs"
            title="Recherche & WhatsApp"
            aria-label="Contacter sur WhatsApp"
          >
            <Search size={16} />
          </a>

          {/* Bouton Pill Finovate Contact Us / Préinscription */}
          <a
            href="#preinscription"
            id="finovate-header-contact"
            onClick={onNavigateToForm}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#E85D8A] hover:bg-[#d94877] text-white font-semibold text-xs sm:text-sm transition-all transform hover:scale-[1.02] shadow-md hover:shadow-[#E85D8A]/30"
          >
            <span>Préinscription</span>
          </a>
        </div>

        {/* Menu mobile hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#preinscription"
            onClick={onNavigateToForm}
            className="px-3.5 py-1.5 rounded-full bg-[#E85D8A] text-white font-semibold text-xs sm:hidden"
          >
            Postuler
          </a>
          <button
            type="button"
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Menu mobile déroulant avec fond sombre élégant */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-menu"
          className="lg:hidden w-full bg-[#1A1A1A]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 mt-2 text-white shadow-2xl animate-fade-in"
        >
          <div className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium py-1 text-white/90 hover:text-[#E85D8A] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronDown size={16} className="opacity-50" />
              </a>
            ))}
            <a
              href="#modalites"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold px-4 py-2 rounded-full bg-white/15 text-[#E85D8A] border border-white/20 w-fit"
            >
              Formation 7J à Cotonou
            </a>
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            {onOpenGoogleSheets && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGoogleSheets();
                }}
                className="w-full py-2.5 rounded-full bg-emerald-600/25 hover:bg-emerald-600/35 text-emerald-200 font-semibold text-xs flex items-center justify-center gap-2 border border-emerald-400/30 transition-colors"
              >
                <FileSpreadsheet size={15} />
                <span>Espace Suivi Google Sheets</span>
              </button>
            )}

            <a
              href="#preinscription"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToForm();
              }}
              className="w-full py-3 rounded-full bg-[#E85D8A] text-white font-bold text-center text-sm shadow-md"
            >
              Faire ma demande de préinscription
            </a>
            <a
              href="https://wa.me/2290157776448"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-center text-xs flex items-center justify-center gap-2 border border-white/15"
            >
              <MessageCircle size={15} className="text-[#25D366]" />
              <span>Échanger sur WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
