import React from 'react';
import { Quote, MessageCircle, Heart, CheckCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 'temoignage-entreprise',
      audience: 'Entreprise cliente',
      category: 'RH & Direction',
      initials: 'RH',
      author: 'Directrice des Ressources Humaines',
      role: 'Entreprise partenaire (secteur services & tech, Cotonou)',
      quote: "« Nous cherchions une alternative aux cadeaux d'affaires impersonnels pour clore l'année. La réactivité de Tiffany et l'impact sur nos équipes ont été remarquables : des coffrets soignés au ruban près, qui ont suscité une vraie fierté interne. »",
      focus: "Réactivité et impact collaborateur",
    },
    {
      id: 'temoignage-particulier',
      audience: 'Client particulier',
      category: 'Particulier',
      initials: 'CP',
      author: 'Cliente particulière',
      role: 'Commande personnalisée pour un anniversaire',
      quote: "« J'ai commandé une box avec une calligraphie personnalisée. Au moment de l'offrir, l'émotion était palpable. La qualité des finitions, le toucher du coffret et l'attention aux détails font toute la différence. Rien à voir avec un achat standard. »",
      focus: "Émotion créée et finitions artisanales",
    },
    {
      id: 'temoignage-formation',
      audience: 'Ancienne apprenante',
      category: 'Formation',
      initials: 'AA',
      author: 'Apprenante certifiée FlareShop',
      role: 'Promotion 2024, désormais à son compte',
      quote: "« En 7 jours intensifs, j'ai non seulement appris les techniques précises de confection, mais surtout comment fixer mes prix et démarcher. J'ai conclu ma toute première vente avant même la fin de la semaine de formation. »",
      focus: "Première vente concrète dès la fin de formation",
    },
  ];

  return (
    <section 
      id="temoignages" 
      className="section section-bg-alt"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 id="testimonials-title">
            Ce qu'ils en disent
          </h2>
          <div className="prose">
            <p>
              Retours d'expérience d'entreprises, de particuliers et d'apprenants formés par Tiffany Inès Akowé.
            </p>
          </div>
        </div>

        {/* 3 Témoignages représentatifs des 3 publics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="card-on-alt p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  {/* Initiales dans un cercle aux couleurs du site — jamais d'avatar générique */}
                  <div 
                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ 
                      backgroundColor: 'var(--color-rose-100)', 
                      color: 'var(--color-rose-700)',
                      border: '1px solid var(--color-border-strong)',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    {item.initials}
                  </div>

                  <span 
                    className="text-xs font-semibold px-2.5 py-1 rounded"
                    style={{ 
                      backgroundColor: 'var(--color-surface)', 
                      color: 'var(--color-rose-700)',
                      border: '1px solid var(--color-border)'
                    }}
                  >
                    {item.audience}
                  </span>
                </div>

                <Quote size={22} className="mb-3" style={{ color: 'var(--color-rose-400)', opacity: 0.6 }} />

                <blockquote 
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--color-ink-900)' }}
                >
                  {item.quote}
                </blockquote>
              </div>

              <div className="pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <p className="text-sm font-semibold leading-tight" style={{ color: 'var(--color-ink-900)' }}>
                  {item.author}
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--color-ink-600)' }}>
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Retours WhatsApp réels sur le vif */}
        <div 
          className="card-on-alt p-6 sm:p-8 max-w-[880px]"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
            >
              <MessageCircle size={18} />
            </div>
            <div>
              <h3 className="text-base font-semibold" style={{ color: 'var(--color-ink-900)' }}>
                Échanges spontanés après livraison
              </h3>
              <p className="text-xs" style={{ color: 'var(--color-ink-600)' }}>
                Messages reçus sur le compte WhatsApp officiel de FlareShop
              </p>
            </div>
          </div>

          <div 
            className="p-4 sm:p-5 rounded-xl border text-sm leading-relaxed"
            style={{ 
              backgroundColor: 'var(--color-surface-alt)',
              borderColor: 'var(--color-border)'
            }}
          >
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold" style={{ color: 'var(--color-rose-700)' }}>
              <Heart size={14} className="fill-current" />
              <span>Extrait de message client vérifié :</span>
            </div>
            <p className="italic text-sm" style={{ color: 'var(--color-ink-900)' }}>
              « Cc chérie, je tiens à te dire merci beaucoup 🥰 Grâce à toi l'anniversaire s'est bien passé (...) il s'est éclaté de rire et les boxs cadeaux prouvent déjà qu'il aura des pépites. Sache que à partir de maintenant tu as gagné une cliente ! »
            </p>
            <div className="flex items-center justify-between mt-3 pt-2 border-t text-xs" style={{ borderColor: 'var(--color-border)', color: 'var(--color-ink-400)' }}>
              <span>Expérience client FlareShop</span>
              <span className="flex items-center gap-1 text-[#E85D8A] font-medium">
                <CheckCheck size={14} /> Message reçu Cotonou
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
