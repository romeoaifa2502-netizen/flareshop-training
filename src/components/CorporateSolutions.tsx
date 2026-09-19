import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Maximize2, 
  X, 
  ArrowRight,
  Palette,
  PackageCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CorporateSolutionsProps {
  onSelectCorporate: () => void;
}

interface EnterpriseRealization {
  id: string;
  name: string;
  sector: string;
  categoryTag: string;
  logo: string;
  logoDarkBg?: boolean;
  boxImage: string;
  accentColors: { hex: string; name: string }[];
  tagline: string;
  summary: string;
  conceptStory: string;
  technicalSpecs: {
    carton: string;
    habillage: string;
    rubanerie: string;
    calage: string;
    delai: string;
  };
  highlights: string[];
}

export const CorporateSolutions: React.FC<CorporateSolutionsProps> = ({ onSelectCorporate }) => {
  const [activeBrandId, setActiveBrandId] = useState<string>('all');
  const [selectedBrandModal, setSelectedBrandModal] = useState<EnterpriseRealization | null>(null);

  const enterprises: EnterpriseRealization[] = [
    {
      id: 'moov-africa',
      name: 'Moov Africa',
      sector: 'Opérateur Télécom Panafricain',
      categoryTag: 'Grand Compte & Direction Générale',
      logo: '/images/logo-moov-africa.svg',
      boxImage: '/images/box-moov-africa-luxe.jpg',
      accentColors: [
        { hex: '#005BAB', name: 'Bleu Royal Moov' },
        { hex: '#F47216', name: 'Orange Énergie' },
        { hex: '#FFFFFF', name: 'Blanc Pur' },
      ],
      tagline: "L'élégance institutionnelle aux couleurs du leader télécom",
      summary: "Cartonnage rigide bleu royal profond habillé d'un ruban mandarine en satin français double-face, fermeture magnétique invisible et calage velours haute densité.",
      conceptStory: "Pour Moov Africa, FlareShop a imaginé un coffret exécutif haut de gamme répondant aux exigences des directions générales. La boîte reprend la dualité chromatique emblématique bleu royal et orange vif. Le couvercle s'ouvre sur un intérieur doublé de feutrine bleu nuit avec compartiments thermoformés sur-mesure pour cadeaux d'affaires prestige et papeterie dorée.",
      technicalSpecs: {
        carton: "Carton compact 2.4 mm haute résistance anti-déformation",
        habillage: "Papier teinté masse bleu roi avec pelliculage soyeux soft-touch",
        rubanerie: "Satin double-face 38 mm noué main avec coupe d'onglet thermocollée",
        calage: "Mousse EVA recouverte de suédine feutrée sur-mesure",
        delai: "Prototypage sous 72h • Séries de 50 à 3 000 unités"
      },
      highlights: [
        "Fermeture aimantée invisible sous papier",
        "Angles biseautés à 90° sans bavure",
        "Dorure à chaud et gaufrage précis",
        "Test de résistance au transport validé"
      ]
    },
    {
      id: 'gozem',
      name: 'Gozem',
      sector: 'Super-App Africaine (Mobilité & Fintech)',
      categoryTag: 'Tech VIP & Ambassadeurs',
      logo: '/images/logo-gozem.svg',
      boxImage: '/images/box-gozem-luxe.jpg',
      accentColors: [
        { hex: '#00A650', name: 'Vert Signature Gozem' },
        { hex: '#1A1A1A', name: 'Noir Graphite' },
        { hex: '#FFFFFF', name: 'Blanc Optique' },
      ],
      tagline: "Le design technologique et contemporain pour la super-app",
      summary: "Esthétique avant-gardiste vert émeraude signature et blanc mat épuré, intégrant le symbole ailé emblématique en léger embossage pour les cadres et partenaires clés.",
      conceptStory: "Gozem incarne l'agilité et l'innovation en Afrique de l'Ouest. FlareShop a conçu un coffret aux arêtes franches et au contraste puissant entre le vert signature et le blanc pur. À l'intérieur, un calage ergonomique accueille accessoires connectés, cartes privilèges et attentions VIP pour les ambassadeurs de la marque.",
      technicalSpecs: {
        carton: "Gabarit structurel 2 mm rigide à géométrie millimétrée",
        habillage: "Papier couché mat ultra-lisse avec traitement anti-traces",
        rubanerie: "Gros-grain texturé vert émeraude 25 mm de confection artisanale",
        calage: "Insert double niveau amovible en mousse noire floquée",
        delai: "Production express possible sous 5 à 7 jours ouvrés"
      },
      highlights: [
        "Respect scrupuleux du vert Pantone Gozem",
        "Embossage en relief du logo ailé",
        "Ouverture fluide avec jeu d'ajustement 0.5 mm",
        "Conception moderne adaptée aux goodies tech"
      ]
    },
    {
      id: 'le-ruisseau',
      name: 'Le Ruisseau Supermarché',
      sector: 'Grande Distribution & Épicerie Fine',
      categoryTag: 'Gastronomie & Fêtes de Fin d’Année',
      logo: '/images/logo-le-ruisseau.svg',
      logoDarkBg: true,
      boxImage: '/images/box-le-ruisseau-luxe.jpg',
      accentColors: [
        { hex: '#0D1624', name: 'Bleu Nuit Profond' },
        { hex: '#FFA500', name: 'Flamme Dorée' },
        { hex: '#4BA4E8', name: 'Bleu Ruisseau' },
      ],
      tagline: "Le raffinement de la gastronomie d'exception en coffret d'apparat",
      summary: "Boîte prestige bleu nuit profond ornée de la flamme dorée et rehaussée d'un ruban bleu ciel tissé, conçue pour les paniers gourmands et coffrets de Noël de haute tenue.",
      conceptStory: "Le Ruisseau est une référence pour les produits d'exception et la sélection gourmande à Cotonou. FlareShop a conçu un coffret généreux et ultra-robuste capable de soutenir jusqu'à 8 kg de bouteilles et spécialités fines, tout en offrant une présentation royale digne des réceptions privées.",
      technicalSpecs: {
        carton: "Carton compact renforcé 3 mm triple cannelure haute densité",
        habillage: "Papier texturé grain toile bleu nuit avec vernis sélectif",
        rubanerie: "Ruban gros-grain satiné double teinte bleu ciel et or",
        calage: "Coussin de copeaux de bois noble et papier de soie doré",
        delai: "Capacité jusqu'à 2 500 paniers en période de fêtes"
      },
      highlights: [
        "Résistance structurelle testée pour charges lourdes",
        "Finition luxueuse associant flamme dorée et bleu nuit",
        "Calage aéré pour protéger verrerie et épicerie fine",
        "Fermoir nœud papillon double d'inspiration haute couture"
      ]
    },
    {
      id: 'eden-food',
      name: 'Eden Food',
      sector: 'Agroalimentaire & Alimentation Durable',
      categoryTag: 'Éco-Luxe & Saveurs Naturelles',
      logo: '/images/logo-eden-food.svg',
      boxImage: '/images/box-eden-food-luxe.jpg',
      accentColors: [
        { hex: '#71B72F', name: 'Vert Pomme Eden' },
        { hex: '#E56B1E', name: 'Orange Sève' },
        { hex: '#9B2626', name: 'Bordeaux Feuille' },
      ],
      tagline: "L'éco-conception raffinée : quand la nature devient un cadeau d'exception",
      summary: "Harmonie végétale vert tendre et écru naturel avec gaufrage botanique délicat, ruban en sergé de coton bio et cartonnage 100% recyclable pour les produits sains.",
      conceptStory: "Porté par sa devise 'food for change', Eden Food milite pour une alimentation savoureuse et responsable. FlareShop a traduit cette vision dans une box éco-luxe : matériaux éco-certifiés, absence de plastique, ruban en coton brut teinté d'encres végétales et habillage respirant mettant en valeur pots de miel et douceurs locales.",
      technicalSpecs: {
        carton: "Carton gris recyclé certifié FSC 2 mm haute cohésion",
        habillage: "Papier kraft blanc non chloré imprimé encres végétales",
        rubanerie: "Sergé de coton biologique écru et liseré vert sauge",
        calage: "Compartimentage cartonné modulaire sans colle toxique",
        delai: "Séries éco-responsables disponibles toute l'année"
      },
      highlights: [
        "Engagement zéro-plastique et biodégradable",
        "Teintes inspirées du logo tricolore feuille d'Eden",
        "Valorisation authentique des produits du terroir",
        "Finition soignée avec gaufrage floral naturel"
      ]
    },
    {
      id: 'erevan',
      name: 'Supermarché Erevan',
      sector: 'Centre Commercial & Hypermarché Prestige',
      categoryTag: 'Retail Prestige & Événements',
      logo: '/images/logo-erevan.svg',
      boxImage: '/images/box-erevan-luxe.jpg',
      accentColors: [
        { hex: '#3683C7', name: 'Bleu Azur Erevan' },
        { hex: '#E26D1E', name: 'Terre Cuite Amphore' },
        { hex: '#8BBEE5', name: 'Ciel Clair' },
      ],
      tagline: "Le temple du shopping célèbre ses temps forts avec panache",
      summary: "Duo boîte chapeau ronde et coffret tiroir d'apparat en harmonie bleu azur et terre cuite, garni d'une doublure satinée pour les opérations commerciales et VIP du centre.",
      conceptStory: "L'emblématique centre commercial Erevan accueille les familles et la clientèle d'affaires béninoise. FlareShop a imaginé un ensemble de coffrets collectors alliant le bleu ciel éclatant de la marque à la chaleur de la terre cuite de son amphore historique. Un cadeau mémorable pour célébrer anniversaires, tombolas VIP et fêtes calendaires.",
      technicalSpecs: {
        carton: "Structure cartonnée roulée pour boîte chapeau & angles vifs tiroir",
        habillage: "Papier teinté masse azur avec dorure terre d'argile",
        rubanerie: "Ruban royal satiné à lisière renforcée pour nouage généreux",
        calage: "Doublure en satin drapé et cales amovibles pour multiformats",
        delai: "Déploiement pour grands temps forts commerciaux"
      },
      highlights: [
        "Double proposition : boîte ronde d'art et coffret tiroir",
        "Rappel stylisé de l'amphore et des couleurs du centre",
        "Expérience d'unboxing théâtralisée",
        "Très forte mémorabilité de marque auprès des clients"
      ]
    },
  ];

  const filteredEnterprises = activeBrandId === 'all' 
    ? enterprises 
    : enterprises.filter(item => item.id === activeBrandId);

  return (
    <section 
      id="entreprises" 
      className="section bg-[#FBF7F8] border-t border-[#F0DDE3] overflow-hidden"
      aria-labelledby="corporate-title"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE8EF] border border-[#F5C2D4] text-[#C43467] text-xs sm:text-sm font-semibold mb-4 shadow-2xs">
            <Sparkles size={14} className="text-[#E85D8A]" />
            <span>Réalisations Corporate & Grandes Entreprises</span>
          </div>

          <h2 
            id="corporate-title"
            className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Des coffrets cadeaux sur-mesure aux <span className="text-[#E85D8A]">couleurs exactes</span> de votre marque
          </h2>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            FlareShop conçoit, prototype et fabrique des packagings d'affaires exclusifs pour les leaders économiques du Bénin. Chaque création respecte scrupuleusement l'ADN, la charte graphique et les objectifs relationnels de nos clients partenaires.
          </p>
        </div>

        {/* Barre de filtrage / sélection rapide des marques */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            type="button"
            onClick={() => setActiveBrandId('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeBrandId === 'all'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'bg-white text-[#555555] hover:bg-[#FDF6F8] border border-[#E8D7DC]'
            }`}
          >
            Toutes les réalisations ({enterprises.length})
          </button>
          {enterprises.map((brand) => (
            <button
              key={brand.id}
              type="button"
              onClick={() => setActiveBrandId(brand.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeBrandId === brand.id
                  ? 'bg-[#E85D8A] text-white shadow-sm'
                  : 'bg-white text-[#555555] hover:bg-[#FDF6F8] border border-[#E8D7DC]'
              }`}
            >
              <span 
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: brand.accentColors[0].hex }}
              />
              <span>{brand.name}</span>
            </button>
          ))}
        </div>

        {/* Grille principale des réalisations entreprises */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredEnterprises.map((item) => (
            <article
              key={item.id}
              id={`corporate-${item.id}`}
              className="group flex flex-col bg-white rounded-2xl border border-[#F0DDE3] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:border-[#E85D8A]/50"
            >
              {/* Conteneur de l'image de la box avec overlay et badge de logo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5EDF0]">
                <img
                  src={item.boxImage}
                  alt={`Coffret sur-mesure FlareShop créé pour ${item.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Badge Logo officiel en haut à gauche */}
                <div className="absolute top-3 left-3 z-10">
                  <div 
                    className={`px-3 py-1.5 rounded-xl border shadow-md flex items-center justify-center max-w-[140px] backdrop-blur-md ${
                      item.logoDarkBg 
                        ? 'bg-[#0D1624] border-white/20' 
                        : 'bg-white/95 border-[#EAD0D8]'
                    }`}
                  >
                    <img 
                      src={item.logo} 
                      alt={`Logo officiel ${item.name}`}
                      className="h-6 w-auto max-w-[110px] object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Badge du secteur / usage */}
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#1A1A1A]/80 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide">
                    {item.categoryTag}
                  </span>
                </div>

                {/* Bouton d'agrandissement en haut à droite */}
                <button
                  type="button"
                  onClick={() => setSelectedBrandModal(item)}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 text-[#1A1A1A] hover:bg-[#E85D8A] hover:text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
                  title="Agrandir les détails du coffret"
                  aria-label={`Agrandir le coffret de ${item.name}`}
                >
                  <Maximize2 size={14} />
                </button>
              </div>

              {/* Corps de la carte */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Titre & Secteur */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 
                      className="text-lg sm:text-xl font-bold text-[#1A1A1A] group-hover:text-[#E85D8A] transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.name}
                    </h3>
                    {/* Palette de couleurs de la marque */}
                    <div className="flex items-center gap-1.5 shrink-0" title="Couleurs identitaires du coffret">
                      {item.accentColors.map((col, idx) => (
                        <span 
                          key={idx}
                          className="w-3 h-3 rounded-full border border-black/10 shadow-2xs"
                          style={{ backgroundColor: col.hex }}
                          title={col.name}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-[#8C3A5A] uppercase tracking-wider mb-2">
                    {item.sector}
                  </p>

                  <p className="text-sm text-[#555555] leading-relaxed line-clamp-3 mb-4">
                    {item.summary}
                  </p>

                  {/* Points clés de fabrication FlareShop */}
                  <div className="space-y-1.5 pt-3 border-t border-[#F5E6EC] mb-4">
                    {item.highlights.slice(0, 2).map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#444444]">
                        <Check size={14} className="text-[#E85D8A] shrink-0 font-bold" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Boutons d'interaction */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#F5E6EC]">
                  <button
                    type="button"
                    onClick={() => setSelectedBrandModal(item)}
                    className="text-xs font-semibold text-[#1A1A1A] hover:text-[#E85D8A] inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Fiche technique</span>
                    <ArrowRight size={13} />
                  </button>

                  <button
                    type="button"
                    onClick={onSelectCorporate}
                    className="px-3.5 py-1.5 rounded-lg bg-[#E85D8A] hover:bg-[#D44774] text-white text-xs font-medium shadow-xs transition-colors cursor-pointer"
                  >
                    Devis similaire
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bloc récapitulatif des garanties Corporate FlareShop */}
        <div className="bg-white rounded-3xl border border-[#F0DDE3] p-6 sm:p-10 mb-14 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FDF2F5] text-[#E85D8A] flex items-center justify-center shrink-0 border border-[#F5D2DF]">
                <Palette size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1A1A1A] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  100% Charte Graphique
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Respect rigoureux de vos codes Pantone, découpe de logos vectoriels et marquage à chaud.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FDF2F5] text-[#E85D8A] flex items-center justify-center shrink-0 border border-[#F5D2DF]">
                <Layers size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1A1A1A] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  Cartonnage d'Art Rigide
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Carton compact 2.4 à 3 mm indéformable, arêtes vives 90° et fermetures aimantées invisibles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FDF2F5] text-[#E85D8A] flex items-center justify-center shrink-0 border border-[#F5D2DF]">
                <PackageCheck size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1A1A1A] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  De 50 à 5 000 Unités
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Capacité de production flexible avec prototypage physique d'approbation avant tout lancement.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FDF2F5] text-[#E85D8A] flex items-center justify-center shrink-0 border border-[#F5D2DF]">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1A1A1A] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  Livraison Sécurisée
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Expédition en cartons de suremballage blindés directement dans vos sièges ou chez vos VIPs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA d'action finale pour les entreprises */}
        <div className="text-center bg-gradient-to-r from-[#1A1A1A] via-[#2A1B22] to-[#1A1A1A] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E85D8A]/20 border border-[#E85D8A]/40 text-[#FFAAC5] text-xs font-semibold uppercase tracking-wider mb-3">
              Direction & Relations Publiques
            </span>
            <h3 
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Prêt à sublimer l'image de marque de votre entreprise ?
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
              Partagez-nous votre charte, le nombre de coffrets souhaité et votre échéance. Notre atelier vous transmet une étude de faisabilité et un devis personnalisé sous 24 heures.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                id="corporate-cta"
                onClick={onSelectCorporate}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#E85D8A] hover:bg-[#D44774] text-white font-semibold text-sm shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Demander un devis entreprise sur-mesure</span>
                <ArrowRight size={16} />
              </button>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition-colors flex items-center justify-center"
              >
                Discuter avec notre équipe
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Modal d'inspection détaillée du coffret d'entreprise */}
      <AnimatePresence>
        {selectedBrandModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedBrandModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton de fermeture */}
              <button
                type="button"
                onClick={() => setSelectedBrandModal(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-[#E85D8A] hover:text-white text-[#1A1A1A] flex items-center justify-center shadow-md transition-colors cursor-pointer"
                aria-label="Fermer la vue détaillée"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto flex-1 p-6 sm:p-8">
                {/* En-tête de la modal avec Logo et Nom */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F0DDE3] mb-6">
                  <div className="flex items-center gap-4">
                    <div 
                      className={`p-2.5 rounded-2xl border flex items-center justify-center ${
                        selectedBrandModal.logoDarkBg ? 'bg-[#0D1624] border-white/20' : 'bg-white border-[#EAD0D8]'
                      } shadow-xs`}
                    >
                      <img
                        src={selectedBrandModal.logo}
                        alt={`Logo ${selectedBrandModal.name}`}
                        className="h-8 sm:h-10 w-auto object-contain max-w-[130px]"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                        {selectedBrandModal.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#777777]">
                        {selectedBrandModal.sector} • <span className="text-[#E85D8A] font-semibold">{selectedBrandModal.categoryTag}</span>
                      </p>
                    </div>
                  </div>

                  {/* Palette de couleurs de la marque */}
                  <div className="flex items-center gap-2">
                    {selectedBrandModal.accentColors.map((col, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-[#555555]">
                        <span 
                          className="w-4 h-4 rounded-full border border-black/15 shadow-2xs" 
                          style={{ backgroundColor: col.hex }} 
                        />
                        <span className="hidden sm:inline font-medium">{col.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image grand format */}
                <div className="rounded-2xl overflow-hidden border border-[#F0DDE3] aspect-[16/10] bg-[#F5EDF0] mb-6 relative">
                  <img
                    src={selectedBrandModal.boxImage}
                    alt={`Coffret FlareShop pour ${selectedBrandModal.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium">
                    {selectedBrandModal.tagline}
                  </div>
                </div>

                {/* Récit de la conception */}
                <div className="mb-6">
                  <h4 className="text-base font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    La conception sur-mesure FlareShop
                  </h4>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {selectedBrandModal.conceptStory}
                  </p>
                </div>

                {/* Tableau des spécifications techniques de fabrication */}
                <div className="bg-[#FAF5F7] rounded-2xl p-5 border border-[#F0DDE3] mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C3A5A] mb-4">
                    Fiche Technique & Savoir-Faire Industriel
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-[#444444]">
                    <div className="p-3 bg-white rounded-xl border border-[#F0DDE3]">
                      <span className="font-semibold block text-[#1A1A1A] mb-0.5">Structure cartonnée :</span>
                      {selectedBrandModal.technicalSpecs.carton}
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#F0DDE3]">
                      <span className="font-semibold block text-[#1A1A1A] mb-0.5">Habillage & Marquage :</span>
                      {selectedBrandModal.technicalSpecs.habillage}
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#F0DDE3]">
                      <span className="font-semibold block text-[#1A1A1A] mb-0.5">Rubanerie haute couture :</span>
                      {selectedBrandModal.technicalSpecs.rubanerie}
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#F0DDE3]">
                      <span className="font-semibold block text-[#1A1A1A] mb-0.5">Calage de protection :</span>
                      {selectedBrandModal.technicalSpecs.calage}
                    </div>
                  </div>
                </div>

                {/* Bouton d'action dans la modal */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#F0DDE3]">
                  <p className="text-xs text-[#777777]">
                    {selectedBrandModal.technicalSpecs.delai}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedBrandModal(null);
                      onSelectCorporate();
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E85D8A] hover:bg-[#D44774] text-white text-sm font-semibold shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Commander un coffret dans ce style</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
