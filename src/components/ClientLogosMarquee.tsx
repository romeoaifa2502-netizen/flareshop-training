import React from 'react';

export const ClientLogosMarquee: React.FC = () => {
  const clients = [
    {
      name: 'Moov Africa',
      category: 'Télécommunications',
      logoUrl: '/images/logo-moov-africa.svg',
      isSvg: true,
      tag: 'Grand Compte & Cadeaux VIP',
    },
    {
      name: 'Gozem',
      category: 'Super-App Africaine',
      logoUrl: '/images/logo-gozem.svg',
      isSvg: true,
      tag: 'Coffrets VIP & Partenaires',
    },
    {
      name: 'Supermarché Erevan',
      category: 'Centre Commercial & Luxe',
      logoUrl: '/images/logo-erevan.svg',
      isSvg: true,
      tag: 'Box Fêtes & Événements',
    },
    {
      name: 'Le Ruisseau Supermarché',
      category: 'Grande Distribution & Épicerie',
      logoUrl: '/images/logo-le-ruisseau.svg',
      isSvg: true,
      tag: 'Coffrets Gourmets Prestige',
    },
    {
      name: 'Eden Food',
      category: 'Food for change',
      logoUrl: '/images/logo-eden-food.svg',
      isSvg: true,
      tag: 'Box Bien-être & Nutrition',
    },
  ];

  return (
    <section 
      id="partenaires-logos" 
      className="w-full py-10 sm:py-12 bg-white overflow-hidden"
      aria-label="Entreprises partenaires et clientes FlareShop"
    >
      <div className="w-full px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#6B6B6B]">
            La signature <span className="text-[#E85D8A] font-bold">FlareShop</span> approuvée par les plus grandes marques du Bénin :
          </p>
        </div>

        {/* Version Mobile & Tablette (<1024px) : Marquee fluide horizontal infini pour ne jamais tasser les logos */}
        <div className="lg:hidden relative w-full overflow-hidden py-2">
          {/* Dégradés latéraux pour fondu élégant */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-4 animate-marquee-slow hover:[animation-play-state:paused] active:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={idx}
                className="w-[200px] shrink-0 group relative flex flex-col items-center justify-center p-3.5 rounded-xl border border-[#F0DDE3] bg-[#FDF6F8]/60 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-[#E85D8A]/50 cursor-default min-h-[95px]"
              >
                {client.logoUrl ? (
                  <div className="h-10 w-full flex items-center justify-center">
                    <img
                      src={client.logoUrl}
                      alt={`Partenaire officiel ${client.name}`}
                      className="max-h-9 max-w-[125px] w-auto object-contain transition-all"
                      loading="lazy"
                    />
                  </div>
                ) : null}
                
                <span className="mt-2 text-[10px] font-medium text-[#6B6B6B] group-hover:text-[#1A1A1A] transition-colors text-center whitespace-nowrap">
                  {client.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Version Desktop (>1024px) : Grille 5 colonnes alignée */}
        <div className="hidden lg:grid grid-cols-5 gap-5 items-center justify-center max-w-6xl mx-auto">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center p-4 rounded-xl border border-[#F0DDE3] bg-[#FDF6F8]/60 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-[#E85D8A]/50 cursor-default min-h-[100px]"
            >
              {client.logoUrl ? (
                <div className="h-10 w-full max-w-[140px] flex items-center justify-center transition-all duration-300 transform group-hover:scale-105">
                  <img
                    src={client.logoUrl}
                    alt={`Partenaire officiel ${client.name}`}
                    className="max-h-9 max-w-[120px] w-auto object-contain transition-all"
                    loading="lazy"
                  />
                </div>
              ) : null}
              
              <span className="mt-2 text-[10px] font-medium text-[#6B6B6B] group-hover:text-[#1A1A1A] transition-colors text-center">
                {client.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Message discret de réassurance */}
        <p className="text-center text-[11px] text-[#6B6B6B] mt-5">
          Des partenariats institutionnels et des coffrets d'affaires distribués à grande échelle en Afrique de l'Ouest.
        </p>
      </div>
    </section>
  );
};
