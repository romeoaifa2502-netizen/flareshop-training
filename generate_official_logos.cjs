const fs = require('fs');
const path = require('path');

// 1. MOOV AFRICA SVG (Matches user's exact uploaded image)
const moovAfricaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="500" height="280">
  <rect width="500" height="280" rx="36" fill="#005BAB" />
  <g transform="translate(140, 110)">
    <text x="0" y="0" fill="#ffffff" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="54" font-weight="900" letter-spacing="-0.5">Moov</text>
    <text x="0" y="52" fill="#ffffff" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" letter-spacing="-0.5">Africa</text>
  </g>
  <!-- Iconic Orange Swoosh Arc -->
  <path d="M 70 200 C 180 215 320 185 410 70 C 370 125 240 185 100 175 Z" fill="#F47216" />
  <!-- Diamond Tiles -->
  <g transform="translate(385, 115) rotate(45)">
    <rect x="-24" y="-24" width="22" height="22" rx="3" fill="#ffffff" />
    <rect x="2" y="-24" width="22" height="22" rx="3" fill="#F47216" />
    <rect x="-24" y="2" width="22" height="22" rx="3" fill="#F47216" />
    <rect x="2" y="2" width="22" height="22" rx="3" fill="#F47216" />
  </g>
</svg>`;

// 2. EDEN FOOD FOR CHANGE SVG (Matches user's exact uploaded image)
const edenFoodSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" width="520" height="220">
  <!-- Leaves at top -->
  <g transform="translate(25, 20)">
    <!-- Red/burgundy leaf -->
    <path d="M 40 45 C 28 25 32 8 50 2 C 58 18 54 36 40 45 Z" fill="#9B2626" />
    <!-- Orange leaf -->
    <path d="M 52 42 C 64 25 80 18 94 25 C 88 42 72 48 52 42 Z" fill="#E56B1E" />
    <!-- Green leaf -->
    <path d="M 26 52 C 14 42 16 28 30 28 C 34 38 32 48 26 52 Z" fill="#4A9E28" />
    
    <!-- Stylized Apple with 'e' cutout -->
    <path d="M 42 50 C 75 35 105 55 105 92 C 105 130 75 155 45 155 C 10 155 -15 130 -15 92 C -15 55 15 35 42 50 Z" fill="#71B72F" />
    <path d="M 45 68 C 65 68 76 80 76 98 C 76 103 74 105 68 105 L 16 105 C 18 120 32 133 50 133 C 60 133 68 127 72 120 L 86 126 C 78 140 64 147 48 147 C 18 147 0 126 0 98 C 0 70 20 68 45 68 Z M 18 94 L 62 94 C 60 82 52 78 44 78 C 33 78 22 82 18 94 Z" fill="#FFFFFF" />
  </g>

  <!-- Wordmark 'eden' -->
  <g fill="#71B72F" transform="translate(150, 135)">
    <!-- d -->
    <path d="M 80 -82 L 95 -82 L 95 12 C 95 18 98 22 103 22 C 106 22 110 20 113 17 L 120 28 C 113 36 105 40 94 40 C 84 40 79 33 79 23 L 79 16 C 72 26 60 31 46 31 C 21 31 3 13 3 -16 C 3 -45 21 -63 46 -63 C 60 -63 72 -58 79 -48 L 79 -82 Z M 50 -48 C 33 -48 20 -35 20 -16 C 20 3 33 16 50 16 C 67 16 80 3 80 -16 C 80 -35 67 -48 50 -48 Z" />
    <!-- e -->
    <path d="M 155 -50 C 174 -50 186 -37 186 -17 C 186 -12 184 -9 178 -9 L 134 -9 C 136 7 148 19 166 19 C 176 19 184 13 187 6 L 201 12 C 194 25 181 33 164 33 C 136 33 118 13 118 -17 C 118 -43 136 -50 155 -50 Z M 136 -21 L 171 -21 C 169 -32 162 -37 153 -37 C 143 -37 137 -32 136 -21 Z" />
    <!-- n -->
    <path d="M 218 -48 L 234 -48 L 234 -34 C 242 -44 254 -49 267 -49 C 288 -49 300 -36 300 -14 L 300 31 L 283 31 L 283 -11 C 283 -26 274 -34 259 -34 C 246 -34 234 -24 234 -8 L 234 31 L 218 31 Z" />
  </g>

  <!-- Subtitle 'food for change' -->
  <text x="35" y="195" fill="#71B72F" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="44" font-weight="800" letter-spacing="1">food for change</text>
</svg>`;

// 3. LE RUISSEAU SUPERMARCHÉ SVG (Matches user's exact uploaded image)
const leRuisseauSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 460" width="420" height="460">
  <rect width="420" height="460" rx="24" fill="#0D1624" />
  <!-- Big Blue 'R' with Golden Flame -->
  <g transform="translate(110, 60)">
    <!-- Stylized R in Bright Sky Blue -->
    <path d="M 70 0 L 140 0 C 185 0 215 28 215 75 C 215 115 190 140 150 150 L 225 240 L 175 240 L 108 160 L 70 160 L 70 240 L 25 240 L 25 0 Z M 70 45 L 70 115 L 135 115 C 158 115 172 100 172 80 C 172 60 158 45 135 45 Z" fill="#4BA4E8" />
    <!-- Golden Flame Motif on the left curve of R -->
    <path d="M 60 210 C 20 190 0 145 0 95 C 0 50 25 15 50 0 C 35 25 35 60 48 85 C 55 98 62 105 60 120 C 58 135 48 145 52 165 C 55 180 65 195 60 210 Z" fill="#FFA500" />
    <path d="M 50 175 C 35 160 22 135 25 105 C 32 75 48 55 58 40 C 48 60 45 85 52 105 C 58 120 66 135 62 155 C 60 165 55 170 50 175 Z" fill="#FFD700" />
  </g>
  <!-- Text LE RUISSEAU -->
  <text x="210" y="360" text-anchor="middle" fill="#4BA4E8" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="44" font-weight="900" letter-spacing="1">LE RUISSEAU</text>
  <!-- Text Supermarché -->
  <text x="210" y="405" text-anchor="middle" fill="#FBBF24" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="30" font-weight="800" letter-spacing="0.5">Supermarché</text>
</svg>`;

// 4. GOZEM SVG (Matches user's exact uploaded image)
const gozemSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <rect width="400" height="400" rx="36" fill="#ffffff" />
  <!-- Iconic Green Winged Concentric Emblem -->
  <g transform="translate(60, 60) scale(1.1)">
    <!-- Main Outer Wing -->
    <path d="M 125 10 C 185 10 235 30 250 45 C 220 58 180 62 145 62 C 175 75 195 102 195 135 C 195 175 162 208 122 208 C 82 208 50 175 50 135 C 50 95 82 62 122 62 C 138 62 154 68 167 78 C 195 65 228 54 250 45 C 220 22 175 10 125 10 Z" fill="#00A650" />
    <!-- Wing Tail -->
    <path d="M 140 62 C 190 62 245 45 250 45 C 255 58 245 78 220 95 C 195 95 160 95 140 95 C 170 108 185 125 185 145 C 185 155 170 170 155 170 L 155 195 C 185 195 210 170 210 140 C 210 115 195 95 175 82 C 215 82 245 70 255 60 C 252 50 240 35 220 25 C 190 40 160 48 135 50 Z" fill="#00A650" opacity="0.95" />
    <!-- Inner Swirl Core -->
    <circle cx="122" cy="135" r="42" fill="none" stroke="#00A650" stroke-width="22" />
    <circle cx="122" cy="135" r="15" fill="#00A650" />
  </g>
</svg>`;

// 5. EREVAN CENTRE COMMERCIAL SVG (Matches user's exact uploaded image)
const erevanSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 280" width="520" height="280">
  <!-- Terracotta Clay Jar / Amphora with Hands on the left -->
  <g transform="translate(30, 70)">
    <!-- Amphora Silhouette -->
    <path d="M 50 15 C 30 15 18 35 15 55 C 12 75 22 100 35 125 L 35 165 L 65 165 L 65 125 C 78 100 88 75 85 55 C 82 35 70 15 50 15 Z" fill="#E26D1E" />
    <!-- Hands holding Amphora -->
    <path d="M 5 95 C 8 75 22 65 22 80 C 22 105 18 135 25 165 L 10 165 C 5 140 2 115 5 95 Z" fill="#D45C10" />
    <path d="M 95 95 C 92 75 78 65 78 80 C 78 105 82 135 75 165 L 90 165 C 95 140 98 115 95 95 Z" fill="#D45C10" />
    <path d="M 40 120 C 40 100 48 95 50 95 C 52 95 60 100 60 120 L 60 165 L 40 165 Z" fill="#C04E08" />
  </g>

  <!-- 3D Styled Blue Wordmark EREVAN -->
  <g transform="translate(150, 140)">
    <!-- 3D Shadow Layers in Darker Navy/Blue -->
    <text x="3" y="3" fill="#1C5382" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="78" font-weight="900" letter-spacing="3">EREVAN</text>
    <!-- Top Face in Vivid French Blue -->
    <text x="0" y="0" fill="#3683C7" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="78" font-weight="900" letter-spacing="3">EREVAN</text>
  </g>

  <!-- Light Blue Pill for 'centre commercial' -->
  <rect x="150" y="158" width="345" height="42" rx="21" fill="#8BBEE5" />
  <text x="322" y="186" text-anchor="middle" fill="#ffffff" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="22" font-weight="800" letter-spacing="1">centre commercial</text>
</svg>`;

// Write all SVGs
fs.writeFileSync('public/images/logo-moov-africa.svg', moovAfricaSvg);
fs.writeFileSync('public/images/logo-eden-food.svg', edenFoodSvg);
fs.writeFileSync('public/images/logo-le-ruisseau.svg', leRuisseauSvg);
fs.writeFileSync('public/images/logo-gozem.svg', gozemSvg);
fs.writeFileSync('public/images/logo-erevan.svg', erevanSvg);

console.log('Logos successfully generated in public/images/');
