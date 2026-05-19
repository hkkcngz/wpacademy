/**
 * Boş ders/egzersiz/odev index.html şablonlarını oluşturur.
 * Zaten var olan dosyaların üzerine YAZMAZ.
 * Kullanım: node scripts/generate-templates.js
 */
const fs   = require('fs');
const path = require('path');

const ROOT     = path.join(__dirname, '..');
const LESSONS  = path.join(ROOT, 'lessons');

const SECTION_TEMPLATES = {
  ders: (weekN, dayN) => `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ders — Hafta ${weekN} / Gün ${dayN}</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    body { font-family:'Inter',sans-serif; }
    pre  { background:#1e1e2e;color:#cdd6f4;padding:1rem;border-radius:.5rem;overflow-x:auto;font-size:.875rem;line-height:1.7; }
    .content h2 { font-size:1.5rem;font-weight:700;margin:2rem 0 1rem;color:#1e293b; }
    .content h3 { font-size:1.2rem;font-weight:600;margin:1.5rem 0 .75rem;color:#334155; }
    .content p  { color:#475569;line-height:1.8;margin-bottom:1rem; }
    .content ul { list-style:disc;padding-left:1.5rem;color:#475569;line-height:1.8;margin-bottom:1rem; }
  </style>
</head>
<body class="bg-slate-50 min-h-screen">
  <div class="max-w-3xl mx-auto px-6 py-12">
    <div class="mb-8">
      <span class="text-xs font-semibold uppercase tracking-widest text-blue-500">Hafta ${weekN} · Gün ${dayN}</span>
      <h1 class="text-3xl font-bold text-slate-900 mt-2">Ders Başlığı</h1>
      <p class="text-slate-500 mt-2">Ders açıklaması burada yer alacak.</p>
    </div>
    <div class="content bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
      <h2>Konu Başlığı</h2>
      <p>Ders içeriğini buraya ekle. Başlık, paragraf ve kod blokları kullanabilirsin.</p>
      <pre><code>&lt;!-- Örnek kod --&gt;</code></pre>
    </div>
    <div class="mt-8 text-sm">
      <button onclick="window.history.back()" class="text-slate-500 hover:text-slate-800">← Geri Dön</button>
    </div>
  </div>
</body>
</html>`,

  egzersiz: (weekN, dayN) => `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Egzersiz — Hafta ${weekN} / Gün ${dayN}</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>body{font-family:'Inter',sans-serif;}.task{border-left:3px solid #3b82f6;padding-left:1rem;margin-bottom:1.5rem;}</style>
</head>
<body class="bg-slate-50 min-h-screen">
  <div class="max-w-3xl mx-auto px-6 py-12">
    <div class="mb-8">
      <span class="text-xs font-semibold uppercase tracking-widest text-emerald-500">Egzersiz · Hafta ${weekN} / Gün ${dayN}</span>
      <h1 class="text-3xl font-bold text-slate-900 mt-2">Egzersiz Başlığı</h1>
      <p class="text-slate-500 mt-2">Aşağıdaki görevleri sırasıyla tamamla.</p>
    </div>
    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-6">
      <div class="task">
        <h3 class="font-semibold text-slate-800 mb-1">Görev 1</h3>
        <p class="text-slate-600">Egzersiz görevini buraya yaz.</p>
      </div>
      <div class="task">
        <h3 class="font-semibold text-slate-800 mb-1">Görev 2</h3>
        <p class="text-slate-600">İkinci görevi buraya ekle.</p>
      </div>
    </div>
    <div class="mt-8 text-sm">
      <button onclick="window.history.back()" class="text-slate-500 hover:text-slate-800">← Geri Dön</button>
    </div>
  </div>
</body>
</html>`,

  odev: (weekN, dayN) => `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ödev — Hafta ${weekN} / Gün ${dayN}</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>body{font-family:'Inter',sans-serif;}</style>
</head>
<body class="bg-slate-50 min-h-screen">
  <div class="max-w-3xl mx-auto px-6 py-12">
    <div class="mb-8">
      <span class="text-xs font-semibold uppercase tracking-widest text-violet-500">Ödev · Hafta ${weekN} / Gün ${dayN}</span>
      <h1 class="text-3xl font-bold text-slate-900 mt-2">Ödev Başlığı</h1>
      <p class="text-slate-500 mt-2">Ödevi tamamla ve bir sonraki derse hazır ol.</p>
    </div>
    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
      <h2 class="text-xl font-semibold text-slate-800 mb-4">Görev</h2>
      <p class="text-slate-600 leading-relaxed mb-4">Ödev içeriğini buraya ekle.</p>
      <div class="bg-violet-50 border border-violet-100 rounded-xl p-4 mt-6">
        <p class="text-violet-700 text-sm font-medium">Teslim: Bir sonraki derse kadar tamamla.</p>
      </div>
    </div>
    <div class="mt-8 text-sm">
      <button onclick="window.history.back()" class="text-slate-500 hover:text-slate-800">← Geri Dön</button>
    </div>
  </div>
</body>
</html>`,
};

let created = 0;
let skipped = 0;

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (['ders', 'egzersiz', 'odev'].includes(entry.name)) {
      const target = path.join(full, 'index.html');
      if (fs.existsSync(target)) { skipped++; continue; }

      // Extract week/day numbers from path
      const parts = full.split(path.sep);
      const weekPart = parts.find(p => /^week\d+$/.test(p)) || 'week?';
      const dayPart  = parts.find(p => /^day\d+$/.test(p))  || 'day?';
      const weekN = weekPart.replace('week', '');
      const dayN  = dayPart.replace('day', '');

      const tpl = SECTION_TEMPLATES[entry.name];
      if (tpl) {
        fs.writeFileSync(target, tpl(weekN, dayN), 'utf-8');
        console.log('  + created:', path.relative(ROOT, target));
        created++;
      }
    } else {
      walk(full);
    }
  }
}

walk(LESSONS);
console.log(`\nBitti: ${created} dosya oluşturuldu, ${skipped} mevcut atlandı.`);
