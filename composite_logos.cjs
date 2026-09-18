const { execSync } = require('child_process');

// Generate badge for Gozem: White rounded plate with Gozem logo
const gozemBadgeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 120" width="280" height="120">
  <defs>
    <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.25" />
    </filter>
  </defs>
  <rect x="10" y="10" width="260" height="100" rx="16" ry="16" fill="#FFFFFF" filter="url(#shadow)" stroke="#E5E7EB" stroke-width="1.5" />
  <g transform="translate(45, 18) scale(0.38)">
    <g fill="#00A650">
      <path d="M 150 15 C 205 15 250 35 285 45 C 298 49 298 62 285 64 C 255 70 215 72 175 72 C 208 86 228 114 228 148 C 228 191 193 226 150 226 C 107 226 72 191 72 148 C 72 105 107 70 150 70 C 168 70 185 76 200 87 C 228 72 265 60 295 54 C 265 30 210 15 150 15 Z" />
      <circle cx="150" cy="148" r="22" />
    </g>
    <g fill="#00A650" transform="translate(-10, 190) scale(1.1)">
      <!-- G -->
      <path d="M 50 10 C 22 10 0 32 0 60 C 0 88 22 110 50 110 C 74 110 93 94 98 72 L 54 72 L 54 52 L 120 52 L 120 62 C 116 98 87 128 50 128 C 12 128 -18 97 -18 60 C -18 23 12 -8 50 -8 C 76 -8 98 6 110 26 L 90 38 C 82 22 67 10 50 10 Z" />
      <!-- O symbol -->
      <g transform="translate(130, 0) scale(0.38)">
        <path d="M 150 15 C 205 15 250 35 285 45 C 298 49 298 62 285 64 C 255 70 215 72 175 72 C 208 86 228 114 228 148 C 228 191 193 226 150 226 C 107 226 72 191 72 148 C 72 105 107 70 150 70 C 168 70 185 76 200 87 C 228 72 265 60 295 54 C 265 30 210 15 150 15 Z" />
        <circle cx="150" cy="148" r="22" />
      </g>
      <!-- Z -->
      <path d="M 235 0 L 290 0 L 290 18 L 255 64 L 292 64 L 292 82 L 235 82 L 235 64 L 270 18 L 235 18 Z" />
      <!-- E -->
      <path d="M 308 0 L 360 0 L 360 18 L 328 18 L 328 34 L 356 34 L 356 52 L 328 52 L 328 64 L 362 64 L 362 82 L 308 82 Z" />
      <!-- M -->
      <path d="M 378 0 L 398 0 L 413 43 L 428 0 L 448 0 L 448 82 L 430 82 L 430 36 L 418 72 L 408 72 L 396 36 L 396 82 L 378 82 Z" />
    </g>
  </g>
</svg>`;

// Generate badge for Eden Food: White rounded plate with Eden Food logo
const edenBadgeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 120" width="280" height="120">
  <defs>
    <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.25" />
    </filter>
  </defs>
  <rect x="10" y="10" width="260" height="100" rx="16" ry="16" fill="#FFFFFF" filter="url(#shadow)" stroke="#E5E7EB" stroke-width="1.5" />
  <g transform="translate(30, 20) scale(0.36)">
    <!-- Leaves -->
    <path d="M 95 65 C 80 40 85 15 110 5 C 120 25 115 50 95 65 Z" fill="#9B2626" />
    <path d="M 112 62 C 125 40 145 30 165 40 C 155 60 135 70 112 62 Z" fill="#E86C15" />
    <path d="M 75 75 C 60 62 62 45 80 45 C 85 58 82 70 75 75 Z" fill="#58A834" />
    <!-- Apple with 'e' -->
    <path d="M 98 75 C 145 55 185 85 185 135 C 185 185 145 220 100 220 C 50 220 10 185 10 135 C 10 85 55 55 98 75 Z" fill="#71B72F" />
    <path d="M 100 95 C 128 95 145 112 145 138 C 145 145 143 148 135 148 L 60 148 C 62 170 80 188 105 188 C 120 188 132 180 138 170 L 158 178 C 148 198 128 208 105 208 C 65 208 40 178 40 138 C 40 98 68 95 100 95 Z M 62 132 L 125 132 C 123 115 112 110 100 110 C 85 110 68 116 62 132 Z" fill="#FFFFFF" />
    <!-- eden text -->
    <g fill="#71B72F" transform="translate(210, 165) scale(0.9)">
      <path d="M 32 -60 C 55 -60 70 -44 70 -20 C 70 -14 68 -11 60 -11 L 8 -11 C 10 8 25 22 46 22 C 58 22 68 15 72 7 L 88 14 C 80 30 65 40 46 40 C 14 40 -8 16 -8 -20 C -8 -52 14 -60 32 -60 Z M 10 -25 L 53 -25 C 51 -39 42 -45 32 -45 C 20 -45 13 -39 10 -25 Z" />
      <path d="M 140 -80 L 158 -80 L 158 22 C 158 28 161 32 166 32 C 170 32 174 30 178 26 L 186 38 C 178 46 168 50 156 50 C 144 50 138 42 138 30 L 138 22 C 130 34 116 40 100 40 C 70 40 48 18 48 -18 C 48 -54 70 -76 100 -76 C 116 -76 130 -70 138 -58 L 138 -80 Z M 104 -58 C 84 -58 68 -42 68 -18 C 68 6 84 22 104 22 C 124 22 140 6 140 -18 C 140 -42 124 -58 104 -58 Z" />
      <path d="M 230 -60 C 253 -60 268 -44 268 -20 C 268 -14 266 -11 258 -11 L 206 -11 C 208 8 223 22 244 22 C 256 22 266 15 270 7 L 286 14 C 278 30 263 40 244 40 C 212 40 190 16 190 -20 C 190 -52 212 -60 230 -60 Z M 208 -25 L 251 -25 C 249 -39 240 -45 230 -45 C 218 -45 211 -39 208 -25 Z" />
      <path d="M 292 -58 L 310 -58 L 310 -42 C 320 -54 335 -60 350 -60 C 375 -60 390 -45 390 -18 L 390 38 L 372 38 L 372 -14 C 372 -32 362 -42 344 -42 C 328 -42 312 -30 312 -10 L 312 38 L 292 38 Z" />
    </g>
    <!-- food for change -->
    <text x="30" y="235" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="700" fill="#71B72F">food for change</text>
  </g>
</svg>`;

const fs = require('fs');
fs.writeFileSync('/tmp/gozem-badge.svg', gozemBadgeSvg);
fs.writeFileSync('/tmp/eden-badge.svg', edenBadgeSvg);

execSync('rsvg-convert -w 280 /tmp/gozem-badge.svg -o /tmp/gozem-badge.png');
execSync('rsvg-convert -w 280 /tmp/eden-badge.svg -o /tmp/eden-badge.png');

// Composite onto images at top-right corner with 30px offset
execSync('composite -geometry +890+30 /tmp/gozem-badge.png public/images/octobre-rose-gozem.jpg public/images/octobre-rose-gozem.jpg');
execSync('composite -geometry +890+30 /tmp/eden-badge.png public/images/octobre-rose-eden-food.jpg public/images/octobre-rose-eden-food.jpg');

// Also composite onto entreprises-bandeau-1.jpg
execSync('composite -geometry +100+40 /tmp/gozem-badge.png public/images/entreprises-bandeau-1.jpg /tmp/bandeau-step1.jpg');
execSync('composite -geometry +1000+40 /tmp/eden-badge.png /tmp/bandeau-step1.jpg public/images/entreprises-bandeau-1.jpg');

console.log('Badge compositing complete!');
