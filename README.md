# Project UTS: Enterprise Personal CV & Academic Score Application
**Mata Kuliah:** Pemrograman Mobile 2  
**Dosen Pengampu:** Iin, M.Kom  
**Teknologi:** React Native & Expo (Expo SDK 58, React 19, React Native 0.88, React Native Web)  
**Model Ujian:** Progressive Challenge — 10 Levels  
**Level yang Diklaim:** **Level 10 — Industry (Pencapaian Maksimal)**  
**Standar Desain:** Enterprise Industrial Design System (Non-AI-Slop, High Usability, WCAG 2.2 AA Target)  

---

## 1. Identitas Mahasiswa

| Informasi | Data Mahasiswa |
| :--- | :--- |
| **Nama Lengkap** | Muhamad Aditia Davina Kholik |
| **NIM** | 242505030 |
| **Program Studi** | Sistem Informasi |
| **Perguruan Tinggi** | Masoem University |
| **Mata Kuliah** | Pemrograman Mobile 2 |
| **Dosen Pengampu** | Iin, M.Kom |
| **Status Target** | Level 10 — Industry (Nilai: 89 / Grade A) |

> *Catatan:* Seluruh data profil dan capaian akademik tersimpan rapi dan modular di file [data/profile.json](file:///d:/UTS%20PAK%20IIN/data/profile.json) dan [data/academic.json](file:///d:/UTS%20PAK%20IIN/data/academic.json).

---

## 2. Fitur Baru: Unduh CV Berformat PDF & Pratinjau Interaktif

Aplikasi kini dilengkapi dengan fitur resmi **Download CV (PDF)**:
1. **Berkas PDF Resmi:**
   - Nama Berkas: `CV_Muhamad_Aditia_Davina_Kholik.pdf`
   - Ukuran: ~475 KB (Standar Cetak A4, ATS-Friendly, lengkap dengan Foto Profil resmi beresolusi tinggi).
   - Memuat: Foto profil resmi, identitas lengkap, ringkasan eksekutif, rekap capaian akademik UTS (Nilai 89, Grade A, 12.375 LP), linimasa pendidikan Masoem University, keahlian teknis (Mobile, Frontend, Backend, Tools), dan riwayat 3 portofolio proyek.
2. **Aksesibilitas Unduhan Multi-Platform:**
   - **Header Top Navigation:** Tombol *"Unduh CV (PDF)"* langsung diakses di desktop dan mobile.
   - **Hero Profile Card:** Tombol aksi utama berdampingan dengan WhatsApp dan Kirim Pesan.
   - **Spotlight Banner di HomeScreen & AboutScreen:** Akses cepat untuk mengunduh atau meninjau berkas.
3. **Enterprise CV Modal:**
   - Modal pratinjau dokumen dengan rincian metadata, opsi *"Unduh PDF Sekarang"*, dan *"Buka di Tab Baru"*.
   - Mendukung unduhan langsung di browser web (`<a download>`) maupun native platform via linking URI.

---

## 3. Sistem Desain Enterprise (Industrial Digital Product)

Sesuai standar antarmuka enterprise modern, seluruh UI dirancang terstruktur, konsisten, dan menghindari tren AI generik:

### A. Palet Warna Resmi
- **Primary Background (`#080B12`):** Hitam kebiruan sebagai latar belakang utama.
- **Secondary Background (`#0E1420`):** Latar belakang section dan area sekunder.
- **Surface / Card (`#141C2B`):** Permukaan kartu, panel, dan komponen.
- **Elevated Surface (`#1B2638`):** Permukaan modal preview CV dan dropdown.
- **Primary Blue (`#2563EB`):** Aksen biru utama untuk tombol dan elemen interaktif.
- **Secondary Blue (`#3B82F6`):** Biru pendukung untuk penekanan visual dan tab aktif.
- **Subtle Blue (`#172B4D`):** Area aksen biru lembut dan badge container.
- **Primary Text (`#F8FAFC`):** Putih lembut untuk judul dan teks utama (kontras tinggi).
- **Secondary Text (`#A7B2C4`):** Abu-abu terang untuk deskripsi pendukung.
- **Muted Text (`#778399`):** Teks sekunder untuk label dan metadata.
- **Border (`#263247`):** Garis pembatas tipis 1px pada seluruh kartu, tabel, dan input.
- **Status Fungsional:**
  - Success: `#22C55E`
  - Warning: `#F59E0B`
  - Error: `#EF4444`

### B. Tipografi & Hierarki
- Font Family: **Inter** & **Manrope** (Google Fonts).
- Ukuran, line-height, dan weight terukur (400 regular, 600 semi-bold, 700 bold, 800 extra-bold).
- Menghindari penggunaan bold berlebihan dan heading raksasa yang tidak fungsional.

### C. Layout Responsif (Desktop, Tablet, & Smartphone)
- **Desktop (Layar $\ge 800$px):**
  - Topbar horizontal navigasi 6 menu lengkap (*Beranda, Tentang, Keahlian, Portofolio, Nilai UTS, Kontak*).
  - Kontainer konten terpusat dengan `maxWidth: 1080px` agar tidak melebar canggung di layar monitor lebar.
  - Tombol unduh CV dan Theme Switcher di topbar kanan.
- **Smartphone & Tablet (< 800px):**
  - Topbar ringkas dengan identitas, badge status, dan quick download CV.
  - Bottom Tab Navigation 6 tombol responsif yang nyaman dioperasikan satu tangan.

---

## 4. Pemenuhan 10 Progressive Challenge Levels

Aplikasi ini memenuhi seluruh kriteria dari Level 1 sampai Level 10:

- **Level 1 — Novice (Identitas Mahasiswa):** Menampilkan NIM (`242505030`), Nama Lengkap (`Muhamad Aditia Davina Kholik`), Foto Profil (`assets/profile.jpg`).
- **Level 2 — Beginner (Personal Introduction):** Status Mahasiswa Sistem Informasi Masoem University, Tagline *"Mahasiswa yang Belajar Membuat Web"*, Bio singkat terstruktur.
- **Level 3 — Elementary (Layout & Styling):** Flexbox murni React Native, spacing 4px/8px, tidak ada teks terpotong pada berbagai resolusi.
- **Level 4 — Intermediate (Interactive CV & Contact Form):** State management (`useState`, `useMemo`), validasi form input (nama, email, pesan), error state, dan submit feedback.
- **Level 5 — Competent (Separation of UI and Data):** Pemisahan tegas antara folder `data/`, `components/`, `screens/`, dan `context/`.
- **Level 6 — Proficient (Local JSON Data):** Data profil, akademik, keahlian, portofolio, dan pengalaman disimpan dalam file `.json` valid.
- **Level 7 — Advanced (Dynamic Exploration):** Dynamic skills bar, modal detail proyek, linimasa pendidikan, theme switcher (Dark/Light mode), search bar dan category filter real-time.
- **Level 8 — Expert (My Score & Academic Dashboard):** Dashboard resmi UTS: Nilai **89**, Grade **A**, Learning Points **12.375 LP**, 4 indikator persentase capaian belajar dinamis (Attendance 100%, Practice 87%, Quest 95%, Challenge 100%).
- **Level 9 — Professional (Multi-Screen Architecture):** 6 layar terintegrasi (*Home, About, Skills, Projects, My Score, Contact*).
- **Level 10 — Industry (Production-Oriented Application):** Enterprise Design System, unduh dokumen CV PDF nyata, penanganan empty/error states, dan dokumentasi lengkap.

---

## 5. Struktur Direktori Proyek

```text
D:\UTS PAK IIN\
├── assets/
│   ├── CV_Muhamad_Aditia_Davina_Kholik.pdf  # Berkas CV resmi berformat PDF (348 KB)
│   ├── profile.jpg                         # Foto profil resmi Muhamad Aditia
│   ├── icon.png
│   └── ...
├── components/
│   ├── Header.js                           # Responsive Top Navigation & Brand Header
│   ├── ProfileHeader.js                    # Hero profil, stats, dan tombol Unduh CV
│   ├── CVModal.js                          # Modal pratinjau dokumen CV & trigger unduh PDF
│   ├── SectionTitle.js                     # Reusable header seksi enterprise
│   ├── ScoreCard.js                        # Tabel nilai akademik UTS (Nilai 89, Grade A, 12.375 LP)
│   ├── ProgressBar.js                      # Indikator progres capaian belajar dinamis
│   ├── SkillCard.js                        # Kartu keahlian dengan persentase & bar
│   ├── ProjectCard.js                      # Kartu portofolio dengan tag teknologi
│   ├── TimelineItem.js                     # Linimasa riwayat karir & pendidikan
│   ├── ContactForm.js                      # Formulir kontak validasi interaktif
│   └── BottomNav.js                        # Bottom Navigation Bar 6 menu
├── context/
│   └── ThemeContext.js                     # Design System Tokens (#080B12, #2563EB, dll.)
├── data/
│   ├── profile.json                        # Identitas, bio, dan kontak
│   ├── academic.json                       # Nilai UTS 89 (A), 12.375 LP, 10 Level checklist
│   ├── skills.json                         # 8 keahlian IT & kategori
│   ├── portfolio.json                      # 3 proyek portofolio mahasiswa
│   └── experience.json                     # Linimasa studi Masoem University
├── public/
│   └── CV_Muhamad_Aditia_Davina_Kholik.pdf  # Berkas statis untuk unduhan via Web
├── screens/
│   ├── HomeScreen.js                       # Hero profil, spotlight akademik, & CV section
│   ├── AboutScreen.js                      # Biografi, What I Do, & linimasa studi
│   ├── SkillsScreen.js                     # Search & filter keahlian teknologi
│   ├── PortfolioScreen.js                  # Galeri portofolio proyek & modal arsitektur
│   ├── ScoreScreen.js                      # Academic Score Dashboard & checklist 10 Level
│   └── ContactScreen.js                    # Formulir kontak & riwayat respons pesan
├── utils/
│   └── cvHelper.js                         # Handler unduh PDF & buka berkas
├── web/
│   └── index.html                          # Template web dengan font Inter & Manrope
├── App.js                                  # Root component, responsive container, & modal
├── app.json                                # Konfigurasi Expo SDK 58
└── package.json                            # Dependensi aplikasi
```

---

## 6. Cara Menjalankan Aplikasi

### A. Menjalankan di Web Browser (Rekomendasi Evaluasi Desktop & Mobile)
1. Buka terminal di folder proyek:
   ```powershell
   npx expo start --web
   ```
2. Aplikasi akan terbuka di browser (misalnya `http://localhost:8081`).
3. Nikmati antarmuka responsif Enterprise Desktop dan coba tombol **"Unduh CV (PDF)"** untuk mengunduh dokumen secara langsung.

### B. Menjalankan di Android Emulator
1. Pastikan Android Emulator telah aktif atau jalankan:
   ```powershell
   emulator -avd Medium_Phone_API_36.1
   ```
2. Jalankan server Expo:
   ```powershell
   npx expo start --android
   ```

### C. Menjalankan di Smartphone Fisik (Expo Go)
1. Sambungkan PC dan smartphone ke jaringan Wi-Fi yang sama.
2. Buka aplikasi **Expo Go** lalu scan QR Code dari terminal `npx expo start`.
