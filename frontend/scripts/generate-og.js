const sharp = require('sharp');
const path = require('path');

const WIDTH = 1200;
const HEIGHT = 630;

async function generateOG() {
  const svgGradient = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a1a2e;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />
      <rect x="0" y="0" width="6" height="${HEIGHT}" fill="url(#accent)" />
      <circle cx="1050" cy="100" r="200" fill="#1e3a5f" opacity="0.3" />
      <circle cx="1100" cy="500" r="150" fill="#1e3a5f" opacity="0.2" />
      <rect x="800" y="300" width="400" height="400" rx="40" fill="#2563eb" opacity="0.05" transform="rotate(15 1000 500)" />
      <text x="60" y="180" font-family="'Helvetica Neue', Arial, sans-serif" font-size="72" font-weight="800" fill="#ffffff">TANZIBABA</text>
      <text x="60" y="240" font-family="'Helvetica Neue', Arial, sans-serif" font-size="28" fill="#94a3b8" font-weight="500">Premium Construction Materials — Dar es Salaam</text>
      <rect x="60" y="270" width="80" height="4" rx="2" fill="url(#accent)" />
      <text x="60" y="320" font-family="'Helvetica Neue', Arial, sans-serif" font-size="20" fill="#64748b" font-weight="400">Ready-Mix Concrete · Gravel · Crushed Stone · Aggregates</text>
      <rect x="60" y="370" width="160" height="36" rx="18" fill="#1e293b" stroke="#334155" stroke-width="1" />
      <text x="140" y="393" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle" font-weight="500">16+ Batch Plants</text>
      <rect x="240" y="370" width="160" height="36" rx="18" fill="#1e293b" stroke="#334155" stroke-width="1" />
      <text x="320" y="393" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle" font-weight="500">Washed Sand Tech</text>
      <rect x="420" y="370" width="140" height="36" rx="18" fill="#1e293b" stroke="#334155" stroke-width="1" />
      <text x="490" y="393" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle" font-weight="500">VAT Included</text>
      <rect x="60" y="440" width="220" height="50" rx="12" fill="#2563eb" />
      <text x="170" y="471" font-family="'Helvetica Neue', Arial, sans-serif" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="700">Get Instant Quote</text>
      <text x="60" y="550" font-family="'Helvetica Neue', Arial, sans-serif" font-size="16" fill="#475569" font-weight="400">tanzibaba.co.tz</text>
      <text x="60" y="580" font-family="'Helvetica Neue', Arial, sans-serif" font-size="16" fill="#475569" font-weight="400">0716 002 790</text>
    </svg>
  `;

  const outPath = path.join(__dirname, '..', 'public', 'images', 'og-brand-image.png');
  await sharp(Buffer.from(svgGradient)).png().toFile(outPath);
  console.log('OG image generated:', outPath);
}

generateOG().catch(console.error);
