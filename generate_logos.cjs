const fs = require('fs');
const { execSync } = require('child_process');

// 1. Gozem Logo SVG
const gozemSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 360" width="500" height="360">
  <g id="gozem-symbol" transform="translate(100, 10)">
    <!-- Outer Wing & Arc -->
    <path fill="#00A650" d="M 150 15 C 205 15 250 35 285 45 C 298 49 298 62 285 64 C 255 70 215 72 175 72 C 208 86 228 114 228 148 C 228 191 193 226 150 226 C 107 226 72 191 72 148 C 72 105 107 70 150 70 C 168 70 185 76 200 87 C 228 72 265 60 295 54 C 265 30 210 15 150 15 Z" />
    <!-- Inner Swirl & Center Dot -->
    <path fill="#00A650" d="M 150 96 C 121 96 98 119 98 148 C 98 177 121 200 150 200 C 179 200 202 177 202 148 C 202 133 194 119 182 110 C 172 104 158 106 148 114 C 140 120 134 130 134 140 C 134 149 141 156 150 156 C 159 156 166 149 166 140 C 166 135 162 130 157 129 C 153 128 150 130 150 134 C 150 136 152 138 154 138 C 155 138 156 137 156 136 C 156 134 154 132 152 132 C 148 132 144 136 144 140 C 144 143 147 146 150 146 C 153 146 156 143 156 140 C 156 136 152 132 148 132 C 142 132 136 137 136 144 C 136 152 142 158 150 158 C 158 158 164 152 164 144 C 164 132 154 122 142 122 C 130 122 120 132 120 144 C 120 161 133 174 150 174 C 167 174 180 161 180 144 C 180 127 167 114 150 114 C 131 114 116 129 116 148 C 116 167 131 182 150 182 C 169 182 184 167 184 148 C 184 137 177 127 167 120 C 162 116 156 114 150 114 Z" />
    <circle cx="150" cy="148" r="16" fill="#00A650" />
    <circle cx="150" cy="148" r="7" fill="#ffffff" />
    <circle cx="150" cy="148" r="4" fill="#00A650" />
  </g>
  <!-- GOZEM Text -->
  <g fill="#00A650" transform="translate(65, 270)">
    <!-- G -->
    <path d="M 50 10 C 22 10 0 32 0 60 C 0 88 22 110 50 110 C 74 110 93 94 98 72 L 54 72 L 54 52 L 120 52 L 120 62 C 116 98 87 128 50 128 C 12 128 -18 97 -18 60 C -18 23 12 -8 50 -8 C 76 -8 98 6 110 26 L 90 38 C 82 22 67 10 50 10 Z" transform="translate(0, -60)" />
    <!-- Stylized O -->
    <g transform="translate(130, -58) scale(0.38)">
      <path d="M 150 15 C 205 15 250 35 285 45 C 298 49 298 62 285 64 C 255 70 215 72 175 72 C 208 86 228 114 228 148 C 228 191 193 226 150 226 C 107 226 72 191 72 148 C 72 105 107 70 150 70 C 168 70 185 76 200 87 C 228 72 265 60 295 54 C 265 30 210 15 150 15 Z" />
      <circle cx="150" cy="148" r="22" />
    </g>
    <!-- Z -->
    <path d="M 235 -58 L 290 -58 L 290 -40 L 255 6 L 292 6 L 292 24 L 235 24 L 235 6 L 270 -40 L 235 -40 Z" />
    <!-- E -->
    <path d="M 308 -58 L 360 -58 L 360 -40 L 328 -40 L 328 -24 L 356 -24 L 356 -6 L 328 -6 L 328 6 L 362 6 L 362 24 L 308 24 Z" />
    <!-- M -->
    <path d="M 378 -58 L 398 -58 L 413 -15 L 428 -58 L 448 -58 L 448 24 L 430 24 L 430 -22 L 418 14 L 408 14 L 396 -22 L 396 24 L 378 24 Z" />
  </g>
</svg>`;

// 2. Eden Food SVG
const edenSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" width="600" height="280">
  <!-- Apple Symbol -->
  <g transform="translate(20, 20)">
    <!-- Leaves at top -->
    <!-- Red leaf -->
    <path d="M 95 65 C 80 40 85 15 110 5 C 120 25 115 50 95 65 Z" fill="#9B2626" />
    <!-- Orange leaf -->
    <path d="M 112 62 C 125 40 145 30 165 40 C 155 60 135 70 112 62 Z" fill="#E86C15" />
    <!-- Green leaf -->
    <path d="M 75 75 C 60 62 62 45 80 45 C 85 58 82 70 75 75 Z" fill="#58A834" />
    
    <!-- Apple Body with 'e' -->
    <path d="M 98 75 C 145 55 185 85 185 135 C 185 185 145 220 100 220 C 50 220 10 185 10 135 C 10 85 55 55 98 75 Z" fill="#71B72F" />
    <!-- Inner White 'e' carving -->
    <path d="M 100 95 C 128 95 145 112 145 138 C 145 145 143 148 135 148 L 60 148 C 62 170 80 188 105 188 C 120 188 132 180 138 170 L 158 178 C 148 198 128 208 105 208 C 65 208 40 178 40 138 C 40 98 68 95 100 95 Z M 62 132 L 125 132 C 123 115 112 110 100 110 C 85 110 68 116 62 132 Z" fill="#FFFFFF" />
  </g>

  <!-- Wordmark 'eden' -->
  <g fill="#71B72F" transform="translate(225, 175)">
    <!-- e -->
    <path d="M 32 -60 C 55 -60 70 -44 70 -20 C 70 -14 68 -11 60 -11 L 8 -11 C 10 8 25 22 46 22 C 58 22 68 15 72 7 L 88 14 C 80 30 65 40 46 40 C 14 40 -8 16 -8 -20 C -8 -52 14 -60 32 -60 Z M 10 -25 L 53 -25 C 51 -39 42 -45 32 -45 C 20 -45 13 -39 10 -25 Z" />
    <!-- d -->
    <path d="M 140 -80 L 158 -80 L 158 22 C 158 28 161 32 166 32 C 170 32 174 30 178 26 L 186 38 C 178 46 168 50 156 50 C 144 50 138 42 138 30 L 138 22 C 130 34 116 40 100 40 C 70 40 48 18 48 -18 C 48 -54 70 -76 100 -76 C 116 -76 130 -70 138 -58 L 138 -80 Z M 104 -58 C 84 -58 68 -42 68 -18 C 68 6 84 22 104 22 C 124 22 140 6 140 -18 C 140 -42 124 -58 104 -58 Z" />
    <!-- e -->
    <path d="M 230 -60 C 253 -60 268 -44 268 -20 C 268 -14 266 -11 258 -11 L 206 -11 C 208 8 223 22 244 22 C 256 22 266 15 270 7 L 286 14 C 278 30 263 40 244 40 C 212 40 190 16 190 -20 C 190 -52 212 -60 230 -60 Z M 208 -25 L 251 -25 C 249 -39 240 -45 230 -45 C 218 -45 211 -39 208 -25 Z" />
    <!-- n -->
    <path d="M 292 -58 L 310 -58 L 310 -42 C 320 -54 335 -60 350 -60 C 375 -60 390 -45 390 -18 L 390 38 L 372 38 L 372 -14 C 372 -32 362 -42 344 -42 C 328 -42 312 -30 312 -10 L 312 38 L 292 38 Z" />
  </g>

  <!-- Tagline 'food for change' -->
  <g fill="#71B72F" transform="translate(30, 245)">
    <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="700" letter-spacing="1">food for change</text>
  </g>
</svg>`;

fs.writeFileSync('public/images/logo-gozem.svg', gozemSvg);
fs.writeFileSync('public/images/logo-eden-food.svg', edenSvg);

// Generate high-res transparent PNGs
execSync('rsvg-convert -w 800 public/images/logo-gozem.svg -o public/images/logo-gozem.png');
execSync('rsvg-convert -w 800 public/images/logo-eden-food.svg -o public/images/logo-eden-food.png');

console.log('Logos generated successfully!');
