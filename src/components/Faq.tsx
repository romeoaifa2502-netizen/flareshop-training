import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqItems = [
    {
      question: "Comment se passe la personnalisation d'une box ?",
      answer: "[PLACEHOLDER] Nous échangeons d'abord sur l'occasion, le profil du destinataire et vos souhaits précis. Nous vous soumettons ensuite une proposition d'assortiment et de finitions soignées avant confection artisanale.",
    },
    {
      question: "Livrez-vous en dehors de Cotonou ? À l'international ?",
      answer: "FlareShop intervient au Bénin et en Afrique de l'Ouest. [PLACEHOLDER modalités de livraison selon les zones urbaines et sous-régionales].",
    },
    {
      question: "Quels sont les délais de réalisation ?",
      answer: "[PLACEHOLDER] Les délais varient selon la complexité et le volume, généralement de 48h à quelques jours pour les particuliers et selon calendrier convenu pour les volumes d'entreprises.",
    },
    {
      question: "Comment se passe une commande pour une entreprise (volume, facturation) ?",
      answer: "[PLACEHOLDER] Nous établissons un devis formel détaillé avec échantillonnage si nécessaire, conditions de facturation professionnelle et calendrier de livraison dédié.",
    },
    {
      question: "La formation est-elle accessible sans expérience ?",
      answer: "Oui, la formation est conçue pour accueillir des débutants, jeunes comme professionnels.",
    },
    {
      question: "Que se passe-t-il après les 7 jours de formation ?",
      answer: "Vous repartez avec les compétences de confection et un accompagnement pour réaliser votre première vente réelle.",
    },
    {
      question: "Quels sont les tarifs ?",
      answer: "Nos tarifs dépendent du niveau de personnalisation — contactez-nous pour un devis adapté.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="section section-bg-main"
      aria-labelledby="faq-title"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 id="faq-title">
            Foire aux questions
          </h2>
          <div className="prose">
            <p>
              Toutes les réponses pour préparer sereinement votre projet de box, votre commande entreprise ou votre candidature en formation.
            </p>
          </div>
        </div>

        {/* Accordion list */}
        <div className="max-w-[760px] flex flex-col gap-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className="card-on-main overflow-hidden transition-colors"
                style={{
                  backgroundColor: isOpen ? 'var(--color-surface)' : 'var(--color-surface-alt)',
                  borderColor: isOpen ? 'var(--color-border-strong)' : 'var(--color-border)'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rose-600)]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span 
                    className="text-base font-semibold leading-snug"
                    style={{ 
                      fontFamily: 'var(--font-heading)',
                      color: isOpen ? 'var(--color-rose-700)' : 'var(--color-ink-900)'
                    }}
                  >
                    {item.question}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200"
                    style={{ 
                      backgroundColor: isOpen ? 'var(--color-rose-100)' : 'var(--color-rose-50)',
                      color: 'var(--color-rose-700)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 pb-6 sm:px-6 sm:pb-6"
                  >
                    <div className="prose pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-600)' }}>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
