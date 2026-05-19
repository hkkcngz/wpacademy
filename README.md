# WP Academy

**WordPress Bootcamp — 1 Aylık Eğitim Platformu**  
by [Hakkı Cengiz](https://github.com/hakkicengiz7)

Electron.js masaüstü uygulaması. Alpine.js + Tailwind CSS arayüzü. Dinamik klasör mimarisi — ders içerikleri klasör yapısından otomatik okunur.

---

## Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Uygulamayı başlat
npm start
```

## Build (Dağıtım)

```bash
# Windows
npm run build:win

# macOS
npm run build:mac

# Linux
npm run build:linux
```

Çıktı `dist/` klasörüne yazılır.

---

## Klasör Mimarisi

```
lessons/
└── month1/
    ├── week1/
    │   ├── desc.md          ← Hafta açıklaması
    │   └── day1/
    │       ├── desc.md      ← Gün açıklaması
    │       ├── ders/index.html
    │       ├── egzersiz/index.html
    │       └── odev/index.html
    ├── week2/ ...
    ├── week3/ ...
    └── week4/ ...

extras/
├── playground/index.html
└── kodex-kutuphanesi/index.html
```

### Yeni içerik eklemek

- **Yeni gün**: `lessons/month1/weekX/dayY/` klasörü oluştur, içine `ders/`, `egzersiz/`, `odev/` ekle.  
  Her birinin içinde `index.html` olsun — uygulama açılışta otomatik algılar.
- **Gün açıklaması**: `dayY/desc.md` dosyası oluştur.
- **Hafta açıklaması**: `weekX/desc.md` dosyası oluştur.
- **Yeni extra**: `extras/klasor-adi/index.html` oluştur — sidebar'a otomatik eklenir.

### Şablonları yeniden üretmek

```bash
node scripts/generate-templates.js
```

Mevcut dosyaların üzerine yazmaz, sadece eksik olanları oluşturur.

---

## Teknoloji Yığını

| Katman | Teknoloji |
|--------|-----------|
| Masaüstü kabuk | Electron 42 |
| UI framework | Alpine.js 3 |
| CSS | Tailwind CSS 3 (CDN) |
| Markdown render | Marked.js |
| Build | electron-builder |

---

## Lisans

MIT © Hakkı Cengiz
