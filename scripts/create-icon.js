/**
 * Basit bir SVG'den placeholder icon.png üretir.
 * Gereksinim: npm install canvas  (veya elle 512x512 PNG ekle)
 * Bu script yoksa Electron varsayılan ikonla açılır.
 */
const fs   = require('fs');
const path = require('path');

// Minimal 1x1 seffaf PNG (base64) — electron-builder hatası vermemesi için
const TINY_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);

const outDir = path.join(__dirname, '..', 'assets');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const outPath = path.join(outDir, 'icon.png');
if (!fs.existsSync(outPath)) {
  fs.writeFileSync(outPath, TINY_PNG);
  console.log('Placeholder icon.png oluşturuldu →', outPath);
  console.log('NOT: Gerçek ikonla değiştirmek için 512x512 PNG yükle.');
} else {
  console.log('icon.png zaten mevcut, atlandı.');
}
