import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Première question ouverte par défaut

  const faqs = [
    {
      question: "Combien coûte la formation FlareShop ?",
      answer: "Le tarif exact et les facilités de paiement vous sont présentés en toute transparence lors de votre court échange téléphonique ou WhatsApp avec notre équipe. Ce premier contact nous permet avant tout de comprendre votre situation, vos motivations et de nous assurer que la formation est parfaitement adaptée à vos ambitions avant toute validation de place. Remplissez simplement le formulaire de préinscription ci-dessous pour en discuter sans aucun engagement.",
      highlight: "Transparence & Échange personnalisé"
    },
    {
      question: "Faut-il déjà avoir des compétences manuelles ou en bricolage ?",
      answer: "Absolument pas. La méthode FlareShop a été conçue pour partir de zéro. Tiffany Inès Akowé décompose chaque geste en étapes simples : comment positionner la règle métallique, tenir le cutter d'art, appliquer le bon grammage de colle ou nouer un ruban sans le plisser. 100% de nos anciennes participantes qui n'avaient jamais touché une boîte ont réussi à créer des pièces de prestige dès le 2ème jour.",
      highlight: "Accessible à tous niveaux"
    },
    {
      question: "Dois-je apporter mon propre matériel lors des 3 jours d'atelier ?",
      answer: "Non, vous n'avez strictement rien à acheter ni à apporter. L'ensemble des fournitures de qualité professionnelle (cartons rigides de luxe, papiers texturés d'importation, rubans satin & gros-grain, outils de coupe, colle d'orfèvre et accessoires décoratifs) est intégralement mis à votre disposition à l'atelier. Vous repartez également avec toutes les box confectionnées.",
      highlight: "100% fourni à l'atelier"
    },
    {
      question: "Comment se déroule la sélection des candidatures ?",
      answer: "Pour préserver un encadrement individualisé de très haute qualité, nous limitons chaque session à 8 ou 10 participants au maximum. Après l'envoi de votre formulaire de préinscription, un conseiller FlareShop vous contacte sous 24h ouvrées pour un court entretien de 10 minutes. Si votre candidature correspond à l'esprit de la promotion, votre place vous est alors réservée.",
      highlight: "8 à 10 participants maximum"
    },
    {
      question: "Je vis en dehors de Cotonou (Calavi, Porto-Novo ou province), puis-je participer ?",
      answer: "Tout à fait ! De nombreuses participantes viennent de Calavi, Porto-Novo, Parakou et même de pays voisins (Togo, Côte d'Ivoire). L'atelier est facilement accessible au cœur de Cotonou avec des horaires adaptés pour vous permettre d'arriver sereinement chaque matin. Les 4 jours d'accompagnement vente se font ensuite à distance via WhatsApp.",
      highlight: "Ouvert à la sous-région"
    },
    {
      question: "Puis-je continuer à être accompagnée après les 7 jours de formation ?",
      answer: "Oui ! En validant votre formation, vous intégrez automatiquement le réseau privé des alumni FlareShop. Vous bénéficiez d'un canal d'échange privilégié avec Tiffany et vos pairs pour poser vos questions, partager vos devis, échanger sur de nouveaux fournisseurs et célébrer vos victoires commerciales au fil des mois.",
      highlight: "Réseau alumni à vie"
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-white"
      aria-label="Foire aux questions sur la formation FlareShop"
    >
      <div className="container-custom max-w-4xl">
        
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ 
              backgroundColor: 'var(--color-rose-light)', 
              borderColor: 'var(--color-border)', 
              color: 'var(--color-rose)' 
            }}
          >
            <HelpCircle size={14} className="text-[#E85D8A]" />
            <span>Réponses claires & directes</span>
          </div>

          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Questions fréquemment posées
          </h2>

          <p className="text-base sm:text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Vous avez une hésitation ? Voici toutes les réponses pour aborder votre session en toute sérénité.
          </p>
        </div>

        {/* Accordéon FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border transition-all duration-200 overflow-hidden bg-[#FDF6F8]/60 hover:bg-[#FDF6F8]"
                style={{ borderColor: isOpen ? '#E85D8A' : 'var(--color-border)' }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span 
                    className="text-base sm:text-lg font-bold text-[#1A1A1A] leading-snug"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {faq.question}
                  </span>
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#E85D8A] text-white' : 'bg-white text-[#6B6B6B] border border-[#F0DDE3]'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-sm text-[#6B6B6B] leading-relaxed border-t border-[#F0DDE3]/50 mt-1 pt-4 bg-white/70">
                    <p className="mb-3">{faq.answer}</p>
                    {faq.highlight && (
                      <span className="inline-block text-[11px] font-semibold text-[#B8406A] px-2.5 py-1 rounded bg-[#FDF6F8] border border-[#F0DDE3]">
                        {faq.highlight}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bloc d'aide supplémentaire */}
        <div className="mt-10 p-6 rounded-2xl border bg-[#FDF6F8] text-center flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--color-border)' }}>
          <div className="text-left">
            <p className="text-sm font-bold text-[#1A1A1A]">Vous avez une question spécifique qui n'est pas listée ?</p>
            <p className="text-xs text-[#6B6B6B]">Notre équipe vous répond directement sur WhatsApp sous quelques minutes.</p>
          </div>
          <a
            href="https://wa.me/2290157776448?text=Bonjour%20FlareShop,%20j'ai%20une%20question%20sur%20la%20formation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-whatsapp text-xs py-2.5 px-4 shrink-0"
          >
            <MessageCircle size={15} />
            <span>Poser ma question sur WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
