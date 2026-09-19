import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ArrowUpRight, 
  Maximize2, 
  X, 
  Check, 
  Sparkles, 
  Layers, 
  ShieldCheck,
  ChevronRight,
  Palette
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface RealizationItem {
  id: string;
  title: string;
  brandOrType: string;
  category: 'corporate' | 'signature' | 'atelier';
  categoryLabel: string;
  image: string;
  logo?: string;
  logoDarkBg?: boolean;
  accentColors: { hex: string; name: string }[];
  tagline: string;
  summary: string;
  story: string;
  specs: {
    structure: string;
    habillage: string;
    ruban: string;
    calage: string;
  };
  highlights: string[];
}

export const realizationsData: RealizationItem[] = [
  {
    id: 'moov-africa',
    title: "Coffret Grand Compte Moov Africa",
    brandOrType: "Moov Africa",
    category: "corporate",
    categoryLabel: "Télécom • Direction Générale & VIP",
    image: "/images/box-moov-africa-luxe.jpg",
    logo: "/images/logo-moov-africa.svg",
    accentColors: [
      { hex: '#005BAB', name: 'Bleu Royal' },
      { hex: '#F47216', name: 'Orange Énergie' },
      { hex: '#FFFFFF', name: 'Blanc Pur' },
    ],
    tagline: "Cartonnage rigide bleu royal & ruban mandarine satiné",
    summary: "Conception sur-mesure d'un coffret exécutif pour les directions générales et partenaires officiels avec fermeture magnétique invisible et calage velours haute densité.",
    story: "Pour Moov Africa, l'atelier FlareShop a confectionné un coffret rigide d'apparat respectant le bleu roi institutionnel et l'arche orange dynamique. L'intérieur est doublé d'un compartimentage thermoformé en suédine feutrée protégeant papeterie de prestige et cadeaux d'affaires.",
    specs: {
      structure: "Carton compact 2.4 mm indéformable à angles vifs 90°",
      habillage: "Papier teinté dans la masse bleu roi avec pelliculage soft-touch",
      ruban: "Satin double-face 38 mm mandarine noué à la main",
      calage: "Mousse EVA recouverte de velours suédé découpé au laser",
    },
    highlights: [
      "Fermeture aimantée invisible sous papier",
      "Angles biseautés haute précision sans bavure",
      "Finition soft-touch au toucher soyeux",
      "Conforme à la charte officielle Moov Africa"
    ]
  },
  {
    id: 'gozem',
    title: "Coffret Ambassadeur Gozem",
    brandOrType: "Gozem",
    category: "corporate",
    categoryLabel: "Tech & Super-App • Coffrets VIP",
    image: "/images/box-gozem-luxe.jpg",
    logo: "/images/logo-gozem.svg",
    accentColors: [
      { hex: '#00A650', name: 'Vert Gozem' },
      { hex: '#1A1A1A', name: 'Noir Graphite' },
      { hex: '#FFFFFF', name: 'Blanc Pur' },
    ],
    tagline: "Design technologique vert émeraude & blanc contemporain",
    summary: "Esthétique avant-gardiste associant vert émeraude signature et blanc pur avec gaufrage de l'emblème ailé pour les partenaires clés et ambassadeurs de la super-app.",
    story: "Gozem incarne l'agilité numérique en Afrique de l'Ouest. FlareShop a conçu un écrin aux arêtes franches et au contraste puissant entre le vert Pantone signature et le blanc pur, intégrant un insert amovible double niveau pour goodies connectés et cartes privilèges.",
    specs: {
      structure: "Carton compact rigide 2 mm découpé au micromètre",
      habillage: "Papier couché mat ultra-lisse avec traitement anti-traces",
      ruban: "Gros-grain texturé vert émeraude 25 mm artisanal",
      calage: "Insert double niveau amovible en mousse noire floquée",
    },
    highlights: [
      "Respect scrupuleux du vert officiel Gozem",
      "Embossage en relief du logo ailé",
      "Ouverture fluide avec jeu d'ajustement 0.5 mm",
      "Packaging pensé pour l'unboxing événementiel"
    ]
  },
  {
    id: 'le-ruisseau',
    title: "Panier Prestige Le Ruisseau",
    brandOrType: "Le Ruisseau Supermarché",
    category: "corporate",
    categoryLabel: "Grande Distribution • Épicerie Fine",
    image: "/images/box-le-ruisseau-luxe.jpg",
    logo: "/images/logo-le-ruisseau.svg",
    logoDarkBg: true,
    accentColors: [
      { hex: '#0D1624', name: 'Bleu Nuit' },
      { hex: '#FFA500', name: 'Flamme Dorée' },
      { hex: '#4BA4E8', name: 'Bleu Ciel' },
    ],
    tagline: "Bleu nuit profond, flamme d'or & ruban d'apparat",
    summary: "Boîte prestige bleu nuit profond ornée de la flamme dorée et rehaussée d'un ruban bleu ciel tissé, conçue pour les paniers gourmands et coffrets de fin d'année.",
    story: "Le Ruisseau est l'adresse de référence pour la sélection gourmande à Cotonou. FlareShop a développé un coffret généreux capable de supporter jusqu'à 8 kg de bouteilles et spécialités fines, tout en offrant une présentation royale pour les tables de fêtes.",
    specs: {
      structure: "Carton compact renforcé 3 mm triple cannelure haute densité",
      habillage: "Papier texturé grain toile bleu nuit avec vernis sélectif",
      ruban: "Ruban gros-grain satiné double teinte bleu ciel et or",
      calage: "Coussin de copeaux de bois noble et papier de soie doré",
    },
    highlights: [
      "Résistance structurelle testée pour charges lourdes",
      "Finition d'apparat associant flamme dorée et bleu nuit",
      "Calage aéré pour protéger verrerie et épicerie fine",
      "Fermoir nœud papillon double d'inspiration haute couture"
    ]
  },
  {
    id: 'eden-food',
    title: "Box Éco-Luxe Eden Food",
    brandOrType: "Eden Food",
    category: "corporate",
    categoryLabel: "Alimentation Saine • Food for change",
    image: "/images/box-eden-food-luxe.jpg",
    logo: "/images/logo-eden-food.svg",
    accentColors: [
      { hex: '#71B72F', name: 'Vert Eden' },
      { hex: '#E56B1E', name: 'Orange Sève' },
      { hex: '#9B2626', name: 'Bordeaux Feuille' },
    ],
    tagline: "Cartonnage éco-responsable, vert feuille & écru naturel",
    summary: "Harmonie végétale vert tendre et écru naturel avec gaufrage botanique délicat, ruban en sergé de coton bio et cartonnage 100% recyclable pour les produits sains.",
    story: "Porté par sa devise 'food for change', Eden Food valorise une alimentation durable. FlareShop a traduit cet engagement dans une box éco-luxe : matériaux certifiés FSC, zéro plastique, ruban en coton brut et encres végétales.",
    specs: {
      structure: "Carton gris recyclé certifié FSC 2 mm haute cohésion",
      habillage: "Papier kraft blanc non chloré imprimé encres végétales",
      ruban: "Sergé de coton biologique écru et liseré vert sauge",
      calage: "Compartimentage cartonné modulaire sans colle toxique",
    },
    highlights: [
      "Engagement zéro-plastique et 100% biodégradable",
      "Palette inspirée du logo tricolore feuille d'Eden",
      "Valorisation authentique des produits du terroir",
      "Finition soignée avec gaufrage floral naturel"
    ]
  },
  {
    id: 'erevan',
    title: "Coffret Prestige Erevan",
    brandOrType: "Supermarché Erevan",
    category: "corporate",
    categoryLabel: "Centre Commercial • Luxe & Retail",
    image: "/images/box-erevan-luxe.jpg",
    logo: "/images/logo-erevan.svg",
    accentColors: [
      { hex: '#3683C7', name: 'Bleu Azur' },
      { hex: '#E26D1E', name: 'Terre Cuite Amphore' },
      { hex: '#8BBEE5', name: 'Ciel Clair' },
    ],
    tagline: "Duo bleu azur et terre cuite d'inspiration méditerranéenne",
    summary: "Duo boîte chapeau ronde et coffret tiroir d'apparat en harmonie bleu azur et terre cuite, garni d'une doublure satinée pour les opérations commerciales et VIP du centre.",
    story: "L'emblématique centre commercial Erevan accueille les familles et la clientèle d'affaires béninoise. FlareShop a imaginé un ensemble de coffrets collectors alliant le bleu ciel éclatant de la marque à la chaleur de la terre cuite de son amphore historique.",
    specs: {
      structure: "Structure cartonnée roulée pour boîte chapeau & angles vifs tiroir",
      habillage: "Papier teinté masse azur avec dorure terre d'argile",
      ruban: "Ruban royal satiné à lisière renforcée pour nouage généreux",
      calage: "Doublure en satin drapé et cales amovibles",
    },
    highlights: [
      "Double proposition : boîte ronde d'art et coffret tiroir",
      "Rappel stylisé de l'amphore et des couleurs du centre",
      "Expérience d'unboxing théâtralisée",
      "Très forte mémorabilité de marque auprès des clients"
    ]
  },
  {
    id: 'box-amour',
    title: "Box Déclaration d'Amour",
    brandOrType: "Romance & Fêtes",
    category: "signature",
    categoryLabel: "Particuliers • Saint-Valentin & Fiançailles",
    image: "/images/box-declarations-amour.jpg",
    accentColors: [
      { hex: '#9B111E', name: 'Rouge Cardinal' },
      { hex: '#E85D8A', name: 'Rose Flare' },
      { hex: '#FDF2F5', name: 'Rose Poudré' },
    ],
    tagline: "Cartonnage rigide rouge cardinal & rose éternelle préservée",
    summary: "La quintessence de la déclaration romantique : boîte rigide cubique, ruban rouge satiné 50 mm et calage velours pour rose éternelle et mot doux manuscrit.",
    story: "Best-seller de la Saint-Valentin et des demandes en mariage à Cotonou. Chaque coffret est façonné avec une précision d'orfèvre : la découpe à 90 degrés ne laisse apparaître aucun raccord de carton, et le ruban français offre une tenue impeccable.",
    specs: {
      structure: "Carton compact 2 mm d'artisanat d'art haute densité",
      habillage: "Papier texturé grain cuir rouge passion teinté dans la masse",
      ruban: "Satin double-face français 50 mm à coupe thermique",
      calage: "Lit de velours rouge cardinal avec socle rose éternelle",
    },
    highlights: [
      "Meilleure vente historique FlareShop (+300 exemplaires vendus)",
      "Coupe biseautée des angles sans débord de colle",
      "Format compact pensé pour être conservé comme boîte à bijoux",
      "Effet de surprise maximal à l'ouverture"
    ]
  },
  {
    id: 'box-bebe',
    title: "Box Bienvenue Bébé",
    brandOrType: "Naissance & Baptême",
    category: "signature",
    categoryLabel: "Particuliers • Naissance & Cadeau Maman",
    image: "/images/box-mon-bebe.jpg",
    accentColors: [
      { hex: '#E8C5D3', name: 'Rose Poudré Pastel' },
      { hex: '#F9F5F0', name: 'Crème Lait' },
      { hex: '#D4AF37', name: 'Or Délicat' },
    ],
    tagline: "Boîte ronde à chapeau sur-mesure & nœud double papillon",
    summary: "Douceur des teintes pastel, structure cylindrique roulée à la main et compartimentage sécurisé pour souvenirs de naissance, doudous et layette délicate.",
    story: "La boîte ronde à chapeau est l'une des techniques les plus recherchées de la formation FlareShop. Ce modèle allie la tendresse des nuances pastel à une rigidité protectrice qui permet aux parents de garder les trésors de leur enfant pendant des années.",
    specs: {
      structure: "Tambour cartonné thermo-formé sans rupture de courbure",
      habillage: "Papier buvard texturé rose poudré et blanc cassé",
      ruban: "Taffetas soyeux et nœud papillon double symétrique",
      calage: "Nid d'ange ouate hypoallergénique et papier de soie",
    },
    highlights: [
      "Technique de roulage de boîte ronde maîtrisée en formation",
      "Couvercle parfaitement ajusté sans résistance excessive",
      "Élégance intemporelle pour baptême et baby shower",
      "Finition personnalisée avec prénom calligraphié doré"
    ]
  },
  {
    id: 'box-gentleman',
    title: "Box Prestige Gentleman",
    brandOrType: "Édition Homme",
    category: "signature",
    categoryLabel: "Particuliers & Cadres • Cadeau Masculin",
    image: "/images/box-my-man.jpg",
    accentColors: [
      { hex: '#1C1C1C', name: 'Noir Ébène' },
      { hex: '#D4AF37', name: 'Or Champagne' },
      { hex: '#3A3A3A', name: 'Anthracite' },
    ],
    tagline: "Noir mat texturé, intérieur champagne & fermeture magnétique",
    summary: "Un design sobre et puissant pensé pour les hommes d'affaires : montre de valeur, maroquinerie, parfums rares et accessoires d'exception.",
    story: "Conçue pour répondre à la forte demande de cadeaux masculins raffinés à Cotonou. Les angles affûtés, le noir profond anti-traces et les charnières renforcées confèrent à ce coffret une présence statutaire immédiate.",
    specs: {
      structure: "Carton compact 2.5 mm ultra-rigide indéformable",
      habillage: "Papier noir charbon toucher peau de pêche (soft-touch)",
      ruban: "Gros-grain noir et liseré or tissé haute densité",
      calage: "Coussinets feutrés et compartiment montre sur-mesure",
    },
    highlights: [
      "Fermeture magnétique intégrée totalement invisible",
      "Charnière arrière renforcée pour ouverture à 180°",
      "Idéal pour anniversaires, promotions et fêtes des pères",
      "Finition dorée à chaud avec initiales personnalisées"
    ]
  },
  {
    id: 'box-signature',
    title: "Coffret Collection Signature",
    brandOrType: "Haute Maroquinerie Carton",
    category: "atelier",
    categoryLabel: "Atelier d'Art • Pièce Maîtresse",
    image: "/images/box-collection-premium.jpg",
    accentColors: [
      { hex: '#C43467', name: 'Framboise Intense' },
      { hex: '#1A1A1A', name: 'Noir Profond' },
      { hex: '#E8D2AA', name: 'Dorure Champagne' },
    ],
    tagline: "L'apogée du cartonnage d'art : calage multi-niveaux & dorure",
    summary: "La démonstration absolue du savoir-faire FlareShop : tiroir secret coulissant, plateau supérieur amovible et ruban de soie brodé d'or.",
    story: "Cette création illustre tout ce que les participantes de l'Académie apprennent à réaliser au terme de leur cursus. Chaque détail, du jeu millimétré du tiroir à la découpe d'onglet du papier, est calculé pour susciter une admiration unanime.",
    specs: {
      structure: "Carton bois 2.5 mm assemblé avec renforts d'angles invisibles",
      habillage: "Duo papier gaufré motif géométrique et dorure micro-texturée",
      ruban: "Ruban de soie naturelle 40 mm teinté artisanalement",
      calage: "Double plateau thermo-formé velours avec tirette en cuir",
    },
    highlights: [
      "Structure multi-compartiments avec tiroir coulissant fluide",
      "Valeur perçue perçue 5x supérieure aux emballages standards",
      "Finition musée sans la moindre trace d'assemblage",
      "Modèle enseigné dans le module perfectionnement"
    ]
  },
  {
    id: 'box-ribbons',
    title: "L'Art des Nœuds Haute Couture",
    brandOrType: "Savoir-Faire Atelier",
    category: "atelier",
    categoryLabel: "Technique Artisanale • Finition d'Élite",
    image: "/images/box-ribbons.jpg",
    accentColors: [
      { hex: '#E85D8A', name: 'Rose Signature' },
      { hex: '#FFFFFF', name: 'Blanc Taffetas' },
      { hex: '#2A2A2A', name: 'Noir Ardoise' },
    ],
    tagline: "Pliages d'art, boucles géométriques & finitions d'orfèvre",
    summary: "Un coffret n'est jamais complet sans la majesté de son nœud. Découvrez les 6 techniques exclusives de nouage enseignées par Tiffany Inès Akowé.",
    story: "C'est la signature FlareShop que les clientes reconnaissent au premier coup d'œil. Du nœud Dior classique au nœud double cascade en passant par la rosace plissée, chaque nœud est coupé à l'onglet et scellé thermiquement pour une tenue éternelle.",
    specs: {
      structure: "Gabarits de découpe et de pliage calibrés au millimètre",
      habillage: "Rubaneries d'importation : satin lourd, gros-grain, velours de soie",
      ruban: "Coupes d'onglets franches sans effilochage avec scellement thermique",
      calage: "Fixation invisible sous gorge pour un maintien sans décalage",
    },
    highlights: [
      "Techniques secrètes enseignées dès le jour 2 de formation",
      "Différenciation immédiate face aux créations amateurs",
      "Rubans haute résistance qui ne s'affaissent pas avec le temps",
      "Valorisation instantanée de chaque coffret confectionné"
    ]
  }
];

export const CurvedRealizationsCarousel: React.FC = () => {
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  const [selectedRealization, setSelectedRealization] = useState<RealizationItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'corporate' | 'signature'>('all');

  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const isDraggingCarouselRef = useRef<boolean>(false);
  const isDraggingScrubberRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const startOffsetRef = useRef<number>(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioOscillatorRef = useRef<OscillatorNode | null>(null);

  // Filtrage selon onglet si souhaité
  const items = activeTab === 'all' 
    ? realizationsData 
    : realizationsData.filter(item => activeTab === 'corporate' ? item.category === 'corporate' : item.category !== 'corporate');

  // Dimensions d'une carte dans le carrousel 3D
  const cardWidth = 270;
  const cardGap = 24;
  const singleCycleWidth = items.length * (cardWidth + cardGap);
  const scrollSpeed = 0.045; // pixels par milliseconde

  // Animation continue
  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== null && isPlaying && !isDraggingCarouselRef.current && !isDraggingScrubberRef.current) {
        const delta = time - lastTimeRef.current;
        setScrollOffset((prev) => (prev + delta * scrollSpeed) % singleCycleWidth);
      }
      lastTimeRef.current = time;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying, singleCycleWidth]);

  // Audio d'ambiance atelier subtil et apaisant
  const toggleAudio = () => {
    if (!isAudioActive) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioCtx();
        }
        if (audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume();
        }
        const ctx = audioContextRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(432, ctx.currentTime); // Note de sérénité 432 Hz
        gain.gain.setValueAtTime(0.015, ctx.currentTime); // Très doux et discret
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        audioOscillatorRef.current = osc;
        setIsAudioActive(true);
      } catch {
        setIsAudioActive(false);
      }
    } else {
      if (audioOscillatorRef.current) {
        audioOscillatorRef.current.stop();
        audioOscillatorRef.current.disconnect();
        audioOscillatorRef.current = null;
      }
      setIsAudioActive(false);
    }
  };

  // Drag sur le carrousel
  const handleCarouselTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    isDraggingCarouselRef.current = true;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    startXRef.current = clientX;
    startOffsetRef.current = scrollOffset;
  };

  const handleCarouselTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDraggingCarouselRef.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = startXRef.current - clientX;
    const newOffset = (startOffsetRef.current + diff + singleCycleWidth * 10) % singleCycleWidth;
    setScrollOffset(newOffset);
  };

  const handleCarouselTouchEnd = () => {
    isDraggingCarouselRef.current = false;
  };

  // Drag & Scrub sur la barre rose du bas (comme dans la vidéo)
  const handleScrubberMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDraggingScrubberRef.current = true;
    updateScrubberPosition(e);

    const onMove = (moveEvent: MouseEvent | TouchEvent) => {
      if (isDraggingScrubberRef.current) {
        updateScrubberPosition(moveEvent);
      }
    };

    const onUp = () => {
      isDraggingScrubberRef.current = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onUp);
  };

  const updateScrubberPosition = useCallback((e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const clickX = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const ratio = clickX / rect.width;
    setScrollOffset(ratio * singleCycleWidth);
  }, [singleCycleWidth]);

  // Répétition pour rotation panoramique 3D infinie
  const extendedItems = [...items, ...items, ...items, ...items];
  const progressRatio = (scrollOffset % singleCycleWidth) / singleCycleWidth;

  return (
    <section 
      id="galerie-box" 
      className="w-full py-16 sm:py-24 bg-white text-[#111111] overflow-hidden select-none"
      aria-label="Galerie 3D panoramique des réalisations FlareShop"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. EN-TÊTE SUPÉRIEUR EXACTEMENT DANS L'ESTHÉTIQUE DU DESIGN VIDÉO */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          
          {/* Badge discret */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF6F8] border border-[#F0DDE3] text-[#C43467] text-xs font-semibold mb-4 shadow-2xs">
            <Sparkles size={14} className="text-[#E85D8A]" />
            <span>Galerie Panoramique des Créations</span>
          </div>

          {/* Titre monumental en deux lignes épurées - typographie fluide clamp() */}
          <h2 
            className="text-[clamp(1.65rem,4.5vw,3.4rem)] font-extrabold tracking-tight text-[#111111] leading-[1.14] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Façonnées pour l'excellence,<br />
            <span className="text-[#E85D8A] font-medium italic" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Plébiscitées
            </span> par nos partenaires
          </h2>

          {/* Sous-titre textuel */}
          <p className="text-sm sm:text-base md:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed mb-6">
            Des coffrets exécutifs de grands comptes béninois aux créations de prestige pour particuliers : explorez nos finitions d'artisanat d'art haute précision.
          </p>

          {/* Bouton Pill centré façon "Explore Shadonspace Free" */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#preinscription"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-200 text-xs sm:text-sm font-semibold shadow-2xs group cursor-pointer min-h-[44px] w-full sm:w-auto"
            >
              <span>Découvrir le programme de confection</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Filtres discrets en pilules */}
            <div className="flex items-center gap-1 bg-[#F7F4F5] p-1 rounded-full border border-[#EDE4E7] overflow-x-auto max-w-full">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer min-h-[36px] ${
                  activeTab === 'all' ? 'bg-white text-[#111111] shadow-2xs' : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                Tous ({realizationsData.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('corporate')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer min-h-[36px] ${
                  activeTab === 'corporate' ? 'bg-white text-[#111111] shadow-2xs' : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                Entreprises (5)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('signature')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer min-h-[36px] ${
                  activeTab === 'signature' ? 'bg-white text-[#111111] shadow-2xs' : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                Particuliers (5)
              </button>
            </div>
          </div>
        </div>

        {/* 2. LE CARROUSEL 3D COURBÉ EN CYLINDRE PANORAMIQUE (EFFET VIDÉO REPRODUIT FIDÈLEMENT) */}
        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden py-6 cursor-grab active:cursor-grabbing"
          style={{ perspective: '1100px', perspectiveOrigin: '50% 45%' }}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => {
            if (!isDraggingCarouselRef.current) setIsPlaying(true);
            handleCarouselTouchEnd();
          }}
          onMouseDown={handleCarouselTouchStart}
          onMouseMove={handleCarouselTouchMove}
          onMouseUp={handleCarouselTouchEnd}
          onTouchStart={handleCarouselTouchStart}
          onTouchMove={handleCarouselTouchMove}
          onTouchEnd={handleCarouselTouchEnd}
        >
          {/* Conteneur 3D préservant l'espace */}
          <div 
            className="flex items-center relative w-full h-[360px] sm:h-[430px]"
            style={{ 
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Piste coulissante avec transformation 3D par carte */}
            <div 
              className="flex items-center gap-4 sm:gap-6 absolute left-0 top-0 h-full transition-transform duration-75 ease-linear"
              style={{
                transform: `translateX(-${scrollOffset}px)`,
                width: `${extendedItems.length * (cardWidth + cardGap)}px`,
                transformStyle: 'preserve-3d'
              }}
            >
              {extendedItems.map((item, index) => {
                // Calcul de la courbure 3D cylindrique selon la position écran de la carte
                const cardLeft = index * (cardWidth + cardGap) - scrollOffset;
                const containerW = containerRef.current ? containerRef.current.clientWidth : 1200;
                const centerX = containerW / 2;
                const distFromCenter = (cardLeft + cardWidth / 2) - centerX;
                const normDist = distFromCenter / (containerW / 2); // -1 à gauche, 0 au centre, +1 à droite

                // Formule mathématique du cylindre concave (incurvé vers le spectateur)
                const rotateY = -normDist * 28; // Les côtés pivotent vers l'intérieur
                const translateZ = -Math.abs(normDist) * 120 - Math.pow(normDist, 2) * 50; // Les côtés s'éloignent en profondeur
                const scale = Math.max(0.86, 1 - Math.abs(normDist) * 0.08);

                return (
                  <div
                    key={`${item.id}-${index}`}
                    onClick={() => setSelectedRealization(item)}
                    className="w-[230px] sm:w-[270px] h-[330px] sm:h-[390px] rounded-2xl sm:rounded-[22px] overflow-hidden shrink-0 relative shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-[#EFE5E8]"
                    style={{
                      transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                      transformOrigin: '50% 50%',
                      zIndex: Math.round(100 - Math.abs(normDist) * 50),
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    {/* Image haute résolution plein format */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Badge Logo pour les entreprises ou Badge Catégorie */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      {item.logo ? (
                        <div 
                          className={`px-2.5 py-1 rounded-lg border shadow-md flex items-center justify-center backdrop-blur-md ${
                            item.logoDarkBg ? 'bg-[#0D1624]/95 border-white/20' : 'bg-white/95 border-[#EAD0D8]'
                          }`}
                        >
                          <img
                            src={item.logo}
                            alt={`Logo ${item.brandOrType}`}
                            className="h-5 w-auto max-w-[85px] object-contain"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide border border-white/20">
                          {item.brandOrType}
                        </div>
                      )}
                    </div>

                    {/* Pastille Zoom en haut à droite */}
                    <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full bg-white/90 text-[#111111] flex items-center justify-center shadow-md">
                        <Maximize2 size={14} />
                      </div>
                    </div>

                    {/* Overlay dégradé inférieur et cartel descriptif */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-4 sm:p-5 flex flex-col justify-end text-white text-left">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFAAC5] mb-1">
                        {item.categoryLabel}
                      </span>
                      <h3 
                        className="text-base sm:text-lg font-bold leading-tight mb-1 text-white group-hover:text-[#FFAAC5] transition-colors"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                        {item.tagline}
                      </p>

                      {/* Indicateur d'interaction discret */}
                      <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-[#FFAAC5] opacity-90 group-hover:translate-x-1 transition-transform">
                        <span>Voir la réalisation</span>
                        <ChevronRight size={13} />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. BARRE DE COMMANDE DU BAS EXACTEMENT COMME DANS LA VIDÉO (PLAY/PAUSE + MUTE + LIGNE PROGRESSIVE ROSE) */}
        <div className="mt-6 sm:mt-8 max-w-5xl mx-auto flex items-center gap-3 sm:gap-4 px-2">
          
          {/* Bouton Play / Pause rond - min 44px */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-11 h-11 rounded-full bg-white hover:bg-neutral-100 text-[#111111] border border-[#E0D0D5] flex items-center justify-center shadow-md transition-all active:scale-95 shrink-0 cursor-pointer touch-target-min"
            title={isPlaying ? "Mettre en pause le carrousel" : "Reprendre le défilement"}
            aria-label={isPlaying ? "Pause" : "Lecture"}
          >
            {isPlaying ? (
              <Pause size={17} className="fill-[#111111]" />
            ) : (
              <Play size={17} className="fill-[#111111] ml-0.5" />
            )}
          </button>

          {/* Bouton Audio / Son rond avec croix - min 44px */}
          <button
            type="button"
            onClick={toggleAudio}
            className="w-11 h-11 rounded-full bg-white hover:bg-neutral-100 text-[#111111] border border-[#E0D0D5] flex items-center justify-center shadow-md transition-all active:scale-95 shrink-0 cursor-pointer touch-target-min"
            title={isAudioActive ? "Couper le son d'ambiance atelier" : "Activer le son d'ambiance atelier"}
            aria-label="Contrôle sonore"
          >
            {isAudioActive ? (
              <Volume2 size={18} className="text-[#E85D8A]" />
            ) : (
              <VolumeX size={18} className="text-[#666666]" />
            )}
          </button>

          {/* Ligne progressive rose interactive avec scrubber draggable & hit-box confortable */}
          <div 
            ref={progressBarRef}
            onMouseDown={handleScrubberMouseDown}
            onTouchStart={handleScrubberMouseDown}
            className="flex-1 py-3.5 cursor-pointer select-none relative flex items-center"
            title="Glissez pour faire défiler les créations"
          >
            <div className="w-full h-2.5 sm:h-3 bg-[#EFE3E7] hover:bg-[#EAD5DC] rounded-full relative transition-colors shadow-inner overflow-hidden">
              {/* Remplissage rose vibrant FlareShop (#E85D8A) */}
              <div 
                className="h-full bg-gradient-to-r from-[#E85D8A] via-[#E85D8A] to-[#D44774] rounded-full relative transition-all duration-75"
                style={{ width: `${progressRatio * 100}%` }}
              >
                {/* Curseur blanc/rose illuminé à l'extrémité droite */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#E85D8A] shadow-md -mr-1.5" />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* MODAL D'INSPECTION DÉTAILLÉE DE LA RÉALISATION */}
      <AnimatePresence>
        {selectedRealization && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md"
            onClick={() => setSelectedRealization(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-[#111111]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton fermer */}
              <button
                type="button"
                onClick={() => setSelectedRealization(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-[#E85D8A] hover:text-white text-[#111111] flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto flex-1 p-6 sm:p-8">
                
                {/* En-tête de la modal */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#F0DDE3] mb-6">
                  <div className="flex items-center gap-3.5">
                    {selectedRealization.logo ? (
                      <div 
                        className={`p-2 rounded-xl border ${
                          selectedRealization.logoDarkBg ? 'bg-[#0D1624] border-white/20' : 'bg-white border-[#EAD0D8]'
                        } shadow-xs`}
                      >
                        <img
                          src={selectedRealization.logo}
                          alt={selectedRealization.brandOrType}
                          className="h-8 w-auto max-w-[110px] object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-[#FDF2F5] text-[#E85D8A] border border-[#F5D2DF] flex items-center justify-center font-bold text-sm">
                        FS
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#111111]" style={{ fontFamily: 'var(--font-heading)' }}>
                        {selectedRealization.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#666666]">
                        {selectedRealization.categoryLabel}
                      </p>
                    </div>
                  </div>

                  {/* Palette de couleurs */}
                  <div className="flex items-center gap-1.5" title="Palette chromatique">
                    {selectedRealization.accentColors.map((col, idx) => (
                      <span 
                        key={idx} 
                        className="w-4 h-4 rounded-full border border-black/15 shadow-2xs" 
                        style={{ backgroundColor: col.hex }}
                        title={col.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Image grand format */}
                <div className="rounded-2xl overflow-hidden border border-[#F0DDE3] aspect-[16/10] bg-[#FAF5F7] mb-6 relative shadow-inner">
                  <img
                    src={selectedRealization.image}
                    alt={selectedRealization.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-lg text-xs font-medium">
                    {selectedRealization.tagline}
                  </div>
                </div>

                {/* Histoire & Concept */}
                <div className="mb-6">
                  <h4 className="text-sm sm:text-base font-bold text-[#111111] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    Conception artisanale & Exigence FlareShop
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {selectedRealization.story}
                  </p>
                </div>

                {/* Fiche technique */}
                <div className="bg-[#FAF5F7] rounded-2xl p-5 border border-[#F0DDE3] mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C3A5A] mb-3 flex items-center gap-1.5">
                    <Layers size={14} />
                    <span>Fiche Technique & Matériaux Nobles</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#444444]">
                    <div className="p-3 bg-white rounded-xl border border-[#F0DDE3]">
                      <span className="font-semibold block text-[#111111] mb-0.5">Structure cartonnée :</span>
                      {selectedRealization.specs.structure}
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#F0DDE3]">
                      <span className="font-semibold block text-[#111111] mb-0.5">Habillage & Marquage :</span>
                      {selectedRealization.specs.habillage}
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#F0DDE3]">
                      <span className="font-semibold block text-[#111111] mb-0.5">Rubanerie haute couture :</span>
                      {selectedRealization.specs.ruban}
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#F0DDE3]">
                      <span className="font-semibold block text-[#111111] mb-0.5">Calage de maintien :</span>
                      {selectedRealization.specs.calage}
                    </div>
                  </div>
                </div>

                {/* Points forts */}
                <div className="space-y-1.5 mb-6">
                  {selectedRealization.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#333333]">
                      <Check size={14} className="text-[#E85D8A] font-bold shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Actions au bas de la modal */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#F0DDE3]">
                  <p className="text-xs text-[#777777]">
                    Technique enseignée et certifiée par FlareShop Académie
                  </p>
                  <a
                    href="#preinscription"
                    onClick={() => setSelectedRealization(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E85D8A] hover:bg-[#D44774] text-white text-xs sm:text-sm font-semibold shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Apprendre à confectionner ce coffret</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
