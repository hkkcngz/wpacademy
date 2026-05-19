# WP Academy — Proje Yapılacaklar Listesi

## ✅ Tamamlananlar

- [x] Proje klasör mimarisi kuruldu (`lessons/month/week/day/ders|egzersiz|odev`)
- [x] Electron.js ana proses yazıldı (`src/main/index.js`)
- [x] Preload köprüsü kuruldu (`src/main/preload.js`) — contextBridge ile güvenli IPC
- [x] Renderer ana UI yazıldı (`src/renderer/index.html`) — Alpine.js + Tailwind CDN
- [x] Dinamik klasör okuma: `get-lessons` ve `get-extras` IPC handler'ları
- [x] `desc.md` desteği — hafta ve gün açıklamaları otomatik okunuyor
- [x] `ders / egzersiz / odev` index.html şablonları oluşturuldu
- [x] Extras: Playground (canlı kod editörü) ve Kodex Kütüphanesi eklendi
- [x] package.json güncellendi — electron-builder build konfigürasyonu
- [x] `.gitignore` oluşturuldu
- [x] Sidebar navigasyon: Ay > Hafta > Extras ağacı
- [x] İçerik iframe görüntüleyici (ders/egzersiz/ödev tek tıkla açılıyor)
- [x] `scripts/generate-templates.js` yazıldı — eksik şablonları otomatik üretir, mevcutlara dokunmaz
- [x] Tüm haftalar için `desc.md` eklendi (week1-4)
- [x] Tüm günler için `desc.md` eklendi (week1-4, day1-4 = 16 gün)
- [x] Week1-4 / Day1-4 için tüm ders/egzersiz/odev şablonları üretildi (45 dosya)
- [x] `assets/icon.png` placeholder oluşturuldu (`scripts/create-icon.js`)
- [x] `README.md` oluşturuldu
- [x] `npm run start` ile yerel test yapıldı — hata yok (exit 0)
- [x] Sidebar nav-item sarma sorunu giderildi (`flex-nowrap`, `flex-shrink-0`, `truncate`)
- [x] Tüm tıklanabilir alanlara `cursor: pointer` eklendi

---

## 🔲 Yapılacaklar — v1.0 için Zorunlu

- [ ] `assets/icon.png` gerçek ikonla değiştir (512x512 PNG — şu an 1x1 placeholder)
- [ ] `assets/icon.icns` oluştur (macOS build için)
- [ ] GitHub repository oluştur ve v1.0 commit'i at

---

## 🔲 Yapılacaklar — v1.x Geliştirmeler

### İçerik & Yapı
- [ ] **Haftada 4 gün** tam olarak doldur (week1-4, her hafta day1-4)
- [ ] `extras/` içine yeni klasörler ekle — otomatik listelenecek
- [ ] `extras/eklentiler-rehberi/` gibi ek referans sayfaları

### UI / UX
- [ ] Tema desteği: açık/koyu mod toggle
- [ ] Arama çubuğu — günler ve dersler içinde arama
- [ ] İlerleme takibi — hangi günleri tamamladı, localStorage ile sakla
- [ ] Klavye kısayolları (←/→ gün geçişi, Esc = geri)
- [ ] Ders tamamlandı işareti (checkbox, yeşil tik)
- [ ] Mobil responsive iyileştirme (sidebar collapse)

### Playground
- [ ] Syntax highlighting (CodeMirror veya Monaco Editor entegrasyonu)
- [ ] PHP simülasyonu için notlar ekle
- [ ] Playground'a "Kaydedilen Örnekler" bölümü (localStorage)

### Codex Kütüphanesi
- [ ] WordPress kod parçacıkları (hook'lar, filter'lar, template tags)
- [ ] WordPress PHP cheat sheet
- [ ] WP-CLI komutları referans tablosu

### Electron & Build
- [ ] Auto-updater ekle (electron-updater)
- [ ] Deep link desteği — `wpacademy://week1/day2/ders`
- [ ] Uygulama içi güncelleme bildirimi
- [ ] Windows/macOS için NSIS installer özelleştir

### GitHub & Dağıtım
- [ ] GitHub Actions CI/CD kur (otomatik build + release)
- [ ] GitHub Releases'e win + mac + linux artifact'ları yükle
- [ ] `CHANGELOG.md` oluştur
- [ ] Release v1.0.0 tag'i at

---

## 💡 Fikir Havuzu (Eklenebilir Özellikler)

- **Not defteri**: Her derse özel not alma alanı (markdown, localStorage)
- **Geri sayım**: Hafta bitişine kaç gün kaldı widget'ı
- **WP Quiz**: Hafta sonunda bilgi testi (JSON tabanlı soru bankası)
- **Embed YouTube**: Ders içeriğine video embed desteği
- **Baskı modu**: Ders sayfasını PDF olarak dışa aktar
- **Çoklu ay desteği**: İleride 2. ay, 3. ay içerik ekleme (`lessons/month2/...`)
- **Öğrenci profili**: İsim, avatar, favori dersler (yerel)
- **Versiyon geçmişi**: Git commit linki ile ders güncellemelerini takip et
- **Markdown ders desteği**: index.html yerine .md dosyasını da oku ve render et

---

## 📁 Klasör Mimarisi Özeti

```
wpacademy/
├── src/
│   ├── main/
│   │   ├── index.js      ← Electron ana proses + IPC handlers
│   │   └── preload.js    ← contextBridge (güvenli köprü)
│   └── renderer/
│       └── index.html    ← Ana UI (Alpine.js + Tailwind)
├── lessons/
│   └── month1/
│       ├── week1/
│       │   ├── desc.md          ← Hafta açıklaması (opsiyonel)
│       │   └── day1/
│       │       ├── desc.md      ← Gün açıklaması (opsiyonel)
│       │       ├── ders/index.html
│       │       ├── egzersiz/index.html
│       │       └── odev/index.html
│       ├── week2/ ...
│       ├── week3/ ...
│       └── week4/ ...
├── extras/
│   ├── playground/index.html
│   └── kodex-kutuphanesi/index.html
├── assets/
│   └── icon.png          ← OLUŞTURULMALI
├── package.json
├── .gitignore
├── todo.md               ← Bu dosya
└── README.md
```
