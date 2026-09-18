const fs = require('fs');
const path = require('path');

const captures = [
  {
    filename: 'whatsapp-capture-deux-box.svg',
    headerTitle: 'Élève Académie • Promo Cotonou',
    badge: '2 box déjà commandées',
    time: '14:54',
    content: `
      <!-- Message briefing call de Tiffany -->
      <g transform="translate(18, 24)">
        <rect width="364" height="74" rx="10" fill="#1f2c34" />
        <rect x="0" y="0" width="4" height="74" rx="2" fill="#25d366" />
        <text x="14" y="20" fill="#25d366" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600">Vous</text>
        <text x="14" y="40" fill="#d1d7db" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">On a un call à 20h unh pour un briefing et</text>
        <text x="14" y="58" fill="#d1d7db" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">de là où vous allez trouver les matériels</text>
      </g>

      <!-- Message Élève : D'accord -->
      <g transform="translate(18, 110)">
        <rect width="130" height="40" rx="10" fill="#202c33" />
        <text x="14" y="25" fill="#e9edef" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">D'accord</text>
        <text x="86" y="28" fill="#8696a0" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">14:51</text>
      </g>

      <!-- Message Élève : Ma copine veut pour elle aussi + 2 box à réaliser -->
      <g transform="translate(18, 162)">
        <rect width="364" height="106" rx="12" fill="#202c33" />
        <text x="14" y="28" fill="#e9edef" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Je disais que ma copine veut pour elle aussi 🥰</text>
        <text x="14" y="62" fill="#ffffff" font-size="15" font-weight="700" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Finalement j'ai deux box à réaliser 🤣</text>
        <text x="318" y="94" fill="#8696a0" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">14:53</text>
      </g>

      <!-- Message Élève : J'ai même dis que je ne maîtrisais pas encore -->
      <g transform="translate(18, 280)">
        <rect width="364" height="84" rx="12" fill="#202c33" />
        <text x="14" y="28" fill="#e9edef" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">J'ai même dis que je ne maîtrisais pas</text>
        <text x="14" y="52" fill="#e9edef" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">encore elle veut ça comme ça</text>
        <text x="318" y="72" fill="#8696a0" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">14:54</text>
      </g>
    `
  },
  {
    filename: 'whatsapp-capture-deja-commande.svg',
    headerTitle: 'Élève Académie • Promo Cotonou',
    badge: '1ère commande immédiate',
    time: '23:59',
    content: `
      <!-- Message Vous call matériels à Cotonou -->
      <g transform="translate(18, 24)">
        <rect width="364" height="74" rx="10" fill="#1f2c34" />
        <rect x="0" y="0" width="4" height="74" rx="2" fill="#25d366" />
        <text x="14" y="20" fill="#25d366" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600">Vous</text>
        <text x="14" y="40" fill="#d1d7db" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Demain soir on fera un call sur où trouver les</text>
        <text x="14" y="58" fill="#d1d7db" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">matériels à Cotonou et environs.</text>
      </g>

      <!-- Message Élève : Ah j'ai déjà une commande -->
      <g transform="translate(18, 112)">
        <rect width="320" height="54" rx="12" fill="#202c33" />
        <text x="14" y="32" fill="#ffffff" font-size="15" font-weight="700" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Ah 😹 , j'ai Deja une commande</text>
        <text x="274" y="38" fill="#8696a0" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">23:59</text>
      </g>

      <!-- Date tag "Aujourd'hui" -->
      <g transform="translate(150, 184)">
        <rect width="100" height="26" rx="6" fill="#182229" />
        <text x="17" y="18" fill="#8696a0" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Aujourd'hui</text>
      </g>

      <!-- Réponse envoyée par Tiffany : je n'aime ça -->
      <g transform="translate(130, 226)">
        <rect width="252" height="92" rx="12" fill="#005c4b" />
        <!-- Cadre citation du message de l'élève -->
        <rect x="8" y="8" width="236" height="38" rx="6" fill="#025143" />
        <rect x="8" y="8" width="4" height="38" rx="2" fill="#25d366" />
        <text x="18" y="24" fill="#25d366" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600">Élève</text>
        <text x="18" y="38" fill="#d1d7db" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Ah 😹 , j'ai Deja une commande</text>
        <!-- Texte de réponse -->
        <text x="14" y="68" fill="#ffffff" font-size="15" font-weight="600" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">😂 je n'aime ça 😂</text>
        <text x="195" y="80" fill="#8696a0" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">00:13</text>
        <text x="230" y="80" fill="#53bdeb" font-size="12">✓✓</text>
      </g>
    `
  },
  {
    filename: 'whatsapp-capture-aime-formation.svg',
    headerTitle: 'Élève Académie • Cotonou',
    badge: '100% satisfaite de l\'atelier',
    time: '23:15',
    content: `
      <!-- Message Consigne FlareShop -->
      <g transform="translate(18, 24)">
        <rect width="364" height="74" rx="10" fill="#1f2c34" />
        <rect x="0" y="0" width="4" height="74" rx="2" fill="#25d366" />
        <text x="14" y="20" fill="#25d366" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600">Vous • Académie FLARE SHOP -Formation de B...</text>
        <text x="14" y="40" fill="#d1d7db" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Venez avec un cahier de note et un bic pour</text>
        <text x="14" y="58" fill="#d1d7db" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">noté quelques trucs.</text>
      </g>

      <!-- Message Élève : D'accord -->
      <g transform="translate(18, 110)">
        <rect width="130" height="40" rx="10" fill="#202c33" />
        <text x="14" y="25" fill="#e9edef" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">D'accord</text>
        <text x="86" y="28" fill="#8696a0" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">07:23</text>
      </g>

      <!-- Message Élève : Bien rentrée, j'ai vraiment aimé -->
      <g transform="translate(18, 162)">
        <rect width="364" height="74" rx="12" fill="#202c33" />
        <text x="14" y="28" fill="#ffffff" font-size="14" font-weight="700" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Je suis bien rentrée , j'ai vraiment aimé la</text>
        <text x="14" y="50" fill="#ffffff" font-size="14" font-weight="700" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">formation</text>
        <text x="318" y="58" fill="#8696a0" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">23:15</text>
      </g>

      <!-- Message Élève : Envie d'apprendre box simples et sacs -->
      <g transform="translate(18, 248)">
        <rect width="364" height="74" rx="12" fill="#202c33" />
        <text x="14" y="28" fill="#e9edef" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">J'ai bien envie d'apprendre pour les box</text>
        <text x="14" y="50" fill="#e9edef" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">simples et sac shopping</text>
        <text x="318" y="58" fill="#8696a0" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">23:15</text>
      </g>
    `
  },
  {
    filename: 'whatsapp-capture-belle-experience.svg',
    headerTitle: 'Élève Académie • Promo Cotonou',
    badge: 'Très belle expérience ❤️',
    time: '23:21',
    content: `
      <!-- Réponse au Statut Tiffany -->
      <g transform="translate(18, 24)">
        <rect width="364" height="114" rx="12" fill="#202c33" />
        <!-- Cadre aperçu statut vidéo -->
        <rect x="8" y="8" width="348" height="52" rx="6" fill="#182229" />
        <rect x="8" y="8" width="4" height="52" rx="2" fill="#25d366" />
        <!-- Vignette vidéo statut à droite -->
        <rect x="290" y="10" width="62" height="48" rx="4" fill="#323739" />
        <circle cx="321" cy="34" r="12" fill="#E85D8A" opacity="0.9" />
        <polygon points="318,28 327,34 318,40" fill="#ffffff" />
        <text x="18" y="26" fill="#25d366" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600">Vous • Statut</text>
        <text x="18" y="44" fill="#d1d7db" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">📹 Le stress 🏃‍♂️ , hum ce fut une b...</text>
        
        <!-- Texte élève : Très belle expérience -->
        <text x="14" y="90" fill="#ffffff" font-size="16" font-weight="700" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Très belle expérience ❤️🤗</text>
        <text x="318" y="98" fill="#8696a0" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">23:21</text>
      </g>

      <!-- Réponse Tiffany envoyée -->
      <g transform="translate(150, 160)">
        <rect width="232" height="50" rx="12" fill="#005c4b" />
        <text x="16" y="30" fill="#ffffff" font-size="15" font-weight="700" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Ravi ma chérie 🔥</text>
        <text x="164" y="34" fill="#8696a0" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">23:33</text>
        <text x="202" y="34" fill="#53bdeb" font-size="12">✓✓</text>
        <!-- Badge réaction coeur rouge -->
        <circle cx="218" cy="54" r="14" fill="#202c33" stroke="#0b141a" stroke-width="2" />
        <text x="210" y="59" font-size="15">❤️</text>
      </g>
    `
  },
  {
    filename: 'whatsapp-capture-vraiment-top.svg',
    headerTitle: 'Élève Académie • Promo Cotonou',
    badge: 'C\'était vraiment top 👌🏾',
    time: '00:17',
    content: `
      <!-- Réponse au Statut Tiffany transmission & créativité -->
      <g transform="translate(18, 24)">
        <rect width="364" height="124" rx="12" fill="#202c33" />
        <!-- Cadre aperçu statut vidéo -->
        <rect x="8" y="8" width="348" height="62" rx="6" fill="#182229" />
        <rect x="8" y="8" width="4" height="62" rx="2" fill="#25d366" />
        <!-- Vignette photo statut atelier à droite -->
        <rect x="290" y="10" width="62" height="58" rx="4" fill="#323739" />
        <circle cx="321" cy="39" r="12" fill="#E85D8A" opacity="0.9" />
        <polygon points="318,33 327,39 318,45" fill="#ffffff" />
        <text x="18" y="24" fill="#25d366" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600">Vous • Statut</text>
        <text x="18" y="42" fill="#d1d7db" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">📹 Une belle journée 🔥 de transmission,</text>
        <text x="18" y="58" fill="#d1d7db" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">de créativité 🎁 et de partage autour...</text>
        
        <!-- Texte élève : C'était vraiment top -->
        <text x="14" y="102" fill="#ffffff" font-size="16" font-weight="700" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">C'était vraiment top 👌🏾</text>
        <text x="318" y="110" fill="#8696a0" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">00:17</text>
      </g>

      <!-- Badge de certification d'authenticité -->
      <g transform="translate(18, 172)">
        <rect width="364" height="70" rx="12" fill="#182229" stroke="#E85D8A" stroke-width="1.5" />
        <text x="16" y="28" fill="#E85D8A" font-size="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700">✓ Message Spontané Reçu sur WhatsApp</text>
        <text x="16" y="48" fill="#e9edef" font-size="12" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Transmission de compétences & satisfaction élève</text>
        <text x="16" y="62" fill="#8696a0" font-size="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Formation certifiante • Académie FlareShop Cotonou</text>
      </g>
    `
  }
];

const targetDir = path.join(process.cwd(), 'public', 'images');

captures.forEach(cap => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="480" viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Filtre ombre douce -->
    <filter id="cardShadow" x="-10" y="-10" width="420" height="500" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.45" />
    </filter>
    <linearGradient id="headerGrad" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1f2c34" />
      <stop offset="100%" stop-color="#121b22" />
    </linearGradient>
  </defs>

  <!-- Fond smartphone WhatsApp sombre -->
  <rect width="400" height="480" rx="20" fill="#0b141a" filter="url(#cardShadow)" />
  
  <!-- Motif doodle WhatsApp décoratif de fond -->
  <path d="M40 80 Q60 60 80 80 T120 80 M180 140 Q200 120 220 140 M300 240 Q320 220 340 240" stroke="#121b22" stroke-width="12" fill="none" opacity="0.6"/>
  <circle cx="280" cy="70" r="16" stroke="#121b22" stroke-width="3" fill="none" opacity="0.5"/>
  <circle cx="70" cy="280" r="20" stroke="#121b22" stroke-width="3" fill="none" opacity="0.5"/>
  <path d="M30 350 L50 330 L70 350" stroke="#121b22" stroke-width="3" fill="none" opacity="0.5"/>

  <!-- En-tête de chat WhatsApp -->
  <rect width="400" height="54" rx="20" fill="url(#headerGrad)" />
  <rect y="40" width="400" height="14" fill="#121b22" />
  
  <!-- Icône retour & Avatar FlareShop -->
  <g transform="translate(14, 14)">
    <path d="M8 12 L2 6 L8 0" stroke="#aebac1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <circle cx="26" cy="6" r="16" fill="#E85D8A" />
    <text x="18" y="11" fill="#ffffff" font-size="12" font-weight="bold" font-family="-apple-system, BlinkMacSystemFont, sans-serif">FS</text>
    <text x="50" y="5" fill="#e9edef" font-size="13" font-weight="600" font-family="-apple-system, BlinkMacSystemFont, sans-serif">${cap.headerTitle}</text>
    <text x="50" y="18" fill="#8696a0" font-size="10" font-family="-apple-system, BlinkMacSystemFont, sans-serif">en ligne • Preuve vérifiée ✓</text>
  </g>

  <!-- Contenu des échanges WhatsApp -->
  <g transform="translate(0, 48)">
    ${cap.content}
  </g>

  <!-- Barre inférieure de saisie WhatsApp -->
  <g transform="translate(14, 422)">
    <rect width="324" height="44" rx="22" fill="#202c33" />
    <text x="16" y="27" font-size="17">😊</text>
    <text x="44" y="28" fill="#8696a0" font-size="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Message</text>
    <text x="254" y="27" font-size="17">📎</text>
    <text x="288" y="27" font-size="17">📷</text>
    <!-- Bouton vocal micro vert WhatsApp -->
    <circle cx="358" cy="22" r="21" fill="#00a884" />
    <path d="M354 15 C354 12.8 355.8 11 358 11 C360.2 11 362 12.8 362 15 L362 21 C362 23.2 360.2 25 358 25 C355.8 25 354 23.2 354 21 Z M351 19 C351 23 354 26.5 358 26.5 C362 26.5 365 23 365 19 M358 27 L358 31 M355 31 L361 31" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" fill="none" />
  </g>
</svg>`;

  fs.writeFileSync(path.join(targetDir, cap.filename), svg);
  console.log('Regenerated ' + cap.filename);
});
