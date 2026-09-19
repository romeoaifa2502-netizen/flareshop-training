import { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClientLogosMarquee } from './components/ClientLogosMarquee';
import { ProblemSection } from './components/ProblemSection';
import { TrainingTimeline } from './components/TrainingTimeline';
import { AudienceTarget } from './components/AudienceTarget';
import { TiffanyStory } from './components/TiffanyStory';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CurvedRealizationsCarousel } from './components/CurvedRealizationsCarousel';
import { OfferModalities } from './components/OfferModalities';
import { FaqAccordion } from './components/FaqAccordion';
import { QualificationForm } from './components/QualificationForm';
import { FooterLanding } from './components/FooterLanding';
import { MotionReveal } from './components/MotionReveal';
import { GoogleSheetsModal } from './components/GoogleSheetsModal';
import { FileSpreadsheet } from 'lucide-react';

export default function App() {
  const [isGoogleSheetsOpen, setIsGoogleSheetsOpen] = useState(false);

  const scrollToPreinscription = useCallback(() => {
    const el = document.getElementById('preinscription');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSelectAudienceTarget = useCallback((targetName: string) => {
    scrollToPreinscription();
    // Pre-fill or focus logic if desired
    const selectElem = document.getElementById('motivation') as HTMLSelectElement | null;
    if (selectElem) {
      if (targetName.includes('Étudiant')) {
        selectElem.value = 'lancer_activite';
      } else if (targetName.includes('Lycéen')) {
        selectElem.value = 'competence';
      } else if (targetName.includes('Salarié') || targetName.includes('Professionnel')) {
        selectElem.value = 'revenu_complementaire';
      }
    }
  }, [scrollToPreinscription]);

  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-[#FDF6F8] selection:text-[#B8406A] bg-white text-[#1A1A1A]">
      {/* Navigation & Urgent Top Bar */}
      <Header 
        onNavigateToForm={scrollToPreinscription} 
        onOpenGoogleSheets={() => setIsGoogleSheetsOpen(true)}
      />

      <main className="flex-grow flex flex-col w-full">
        {/* 1. Hero — H1 transformation, preuve sociale (+50 personnes), badge "places limitées", CTA principal avec image de fond diplômées */}
        <Hero onCtaClick={scrollToPreinscription} />

        {/* 2. Bandeau logos clients (pleine largeur, grayscale / hover couleur) avec fade-in-up */}
        <MotionReveal delay={0.05}>
          <ClientLogosMarquee />
        </MotionReveal>

        {/* 3. Agitation du problème : la difficulté de se lancer seul sans méthode avec fade-in-up */}
        <MotionReveal delay={0.1}>
          <ProblemSection onCtaClick={scrollToPreinscription} />
        </MotionReveal>

        {/* 4. La formation : timeline 3 jours confection + 4 jours accompagnement première vente */}
        <MotionReveal delay={0.1}>
          <TrainingTimeline onCtaClick={scrollToPreinscription} />
        </MotionReveal>

        {/* 5. Pour qui : 3 cards pleine largeur (jeunes & étudiants / lycéens / salariés & professionnels) */}
        <MotionReveal delay={0.1}>
          <AudienceTarget onSelectTarget={handleSelectAudienceTarget} />
        </MotionReveal>

        {/* 6. Storytelling Tiffany Inès Akowé : légitimité, exigence d'artisanat et connexion émotionnelle */}
        <MotionReveal delay={0.1}>
          <TiffanyStory onCtaClick={scrollToPreinscription} />
        </MotionReveal>

        {/* 7. Témoignages & Résultats concrets vérifiés */}
        <MotionReveal delay={0.1}>
          <TestimonialsSection />
        </MotionReveal>

        {/* 8. Galerie 3D panoramique des réalisations (Design incurvé, auto-play, scrub rose) */}
        <MotionReveal delay={0.1}>
          <CurvedRealizationsCarousel />
        </MotionReveal>

        {/* 9. Offre & modalités : durée, format, lieu — JAMAIS DE PRIX AFFICHÉ */}
        <MotionReveal delay={0.1}>
          <OfferModalities onCtaClick={scrollToPreinscription} />
        </MotionReveal>

        {/* 10. FAQ en accordéon (avec réponse prix renvoyant vers l'échange avec l'équipe) */}
        <MotionReveal delay={0.1}>
          <FaqAccordion />
        </MotionReveal>

        {/* 11. Formulaire de qualification + CTA final + note rassurante + WhatsApp */}
        <MotionReveal delay={0.1}>
          <QualificationForm />
        </MotionReveal>
      </main>

      {/* 12. Footer : bloc "Vous êtes une entreprise ?", réseaux sociaux, mentions légales */}
      <FooterLanding onOpenGoogleSheets={() => setIsGoogleSheetsOpen(true)} />

      {/* Bouton Flottant Discret d'Accès Google Sheets pour Roméo / FlareShop */}
      <button
        type="button"
        onClick={() => setIsGoogleSheetsOpen(true)}
        className="fixed bottom-5 right-5 z-40 bg-neutral-900/90 hover:bg-black text-white hover:text-emerald-300 px-3.5 py-2 rounded-full border border-neutral-700 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold transition-all hover:scale-105 active:scale-95 group"
        title="Accéder aux candidatures enregistrées & Google Sheets"
        aria-label="Ouvrir Google Sheets"
      >
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500/30">
          <FileSpreadsheet size={13} />
        </div>
        <span className="hidden sm:inline">Google Sheets</span>
      </button>

      {/* Modal de Suivi et Synchronisation Google Sheets */}
      <GoogleSheetsModal 
        isOpen={isGoogleSheetsOpen} 
        onClose={() => setIsGoogleSheetsOpen(false)} 
      />
    </div>
  );
}


