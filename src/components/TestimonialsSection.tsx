import React from 'react';
import { AnimatedStatsBandeau } from './AnimatedStatsBandeau';
import { CurvedTestimonialsCarousel } from './CurvedTestimonialsCarousel';

export const TestimonialsSection: React.FC = () => {
  return (
    <section 
      id="temoignages" 
      className="py-16 md:py-24 bg-[#FDF6F8] relative overflow-hidden"
      aria-label="Témoignages et retours d'anciennes participantes FlareShop"
    >
      {/* 1. CARROUSEL 3D EN PERSPECTIVE COURBÉE (DESIGN MODÈLE VIDÉO ADAPTÉ À FLARESHOP) */}
      <div className="w-full mb-10 md:mb-14">
        <CurvedTestimonialsCarousel />
      </div>

      <div className="container-custom">
        {/* 2. CHIFFRES CLÉS BANDEAU ANIMÉ ET RESPONSIVE */}
        <AnimatedStatsBandeau />
      </div>
    </section>
  );
};
