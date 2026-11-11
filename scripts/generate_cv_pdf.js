const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const profileImagePath = path.join(__dirname, '../assets/profile.jpg');
const profileImageBuffer = fs.readFileSync(profileImagePath);
const profileImageBase64 = `data:image/jpeg;base64,${profileImageBuffer.toString('base64')}`;

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Curriculum Vitae - Muhamad Aditia Davina Kholik</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    @page {
      size: A4;
      margin: 12mm 15mm;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #0F172A;
      background: #FFFFFF;
      line-height: 1.4;
      font-size: 9.5pt;
      -webkit-font-smoothing: antialiased;
    }

    .cv-container {
      max-width: 100%;
    }

    /* HEADER */
    .header {
      border-bottom: 2px solid #2563EB;
      padding-bottom: 12px;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .profile-photo {
      width: 76px;
      height: 76px;
      border-radius: 8px;
      object-fit: cover;
      border: 2px solid #2563EB;
      box-shadow: 0 2px 6px rgba(37, 99, 235, 0.15);
      flex-shrink: 0;
    }

    .identity-info h1 {
      font-size: 18pt;
      font-weight: 800;
      color: #080B12;
      letter-spacing: -0.4px;
      line-height: 1.15;
    }

    .identity-info .title-sub {
      font-size: 10.5pt;
      font-weight: 600;
      color: #2563EB;
      margin-top: 2px;
    }

    .identity-info .meta-nim {
      font-size: 8.5pt;
      color: #475569;
      margin-top: 2px;
      font-weight: 500;
    }

    .header-right {
      text-align: right;
      font-size: 8.5pt;
      color: #334155;
      line-height: 1.45;
      flex-shrink: 0;
    }

    .header-right strong {
      color: #0F172A;
    }

    /* SUMMARY */
    .summary {
      font-size: 8.8pt;
      color: #334155;
      line-height: 1.45;
      margin-bottom: 12px;
      padding: 7px 12px;
      background: #F8FAFC;
      border-left: 3px solid #2563EB;
      border-radius: 0 4px 4px 0;
    }

    /* SECTION */
    .section {
      margin-bottom: 11px;
    }

    .section-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: #080B12;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid #E2E8F0;
      padding-bottom: 3px;
      margin-bottom: 7px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .section-title::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 12px;
      background-color: #2563EB;
      border-radius: 2px;
    }

    /* ACADEMIC SCORE BOX */
    .score-banner {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin-bottom: 8px;
    }

    .score-card {
      background: #F1F5F9;
      border: 1px solid #CBD5E1;
      border-radius: 6px;
      padding: 5px 8px;
      text-align: center;
    }

    .score-card .val {
      font-size: 11.5pt;
      font-weight: 800;
      color: #2563EB;
    }

    .score-card .lbl {
      font-size: 7.2pt;
      font-weight: 600;
      color: #475569;
      text-transform: uppercase;
    }

    /* ITEMS */
    .item {
      margin-bottom: 8px;
    }

    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    .item-title {
      font-size: 9pt;
      font-weight: 700;
      color: #0F172A;
    }

    .item-sub {
      font-size: 8.5pt;
      font-weight: 600;
      color: #2563EB;
    }

    .item-date {
      font-size: 8pt;
      font-weight: 500;
      color: #64748B;
    }

    .item-bullets {
      margin-top: 2px;
      padding-left: 15px;
      font-size: 8.3pt;
      color: #334155;
      line-height: 1.35;
    }

    .item-bullets li {
      margin-bottom: 2px;
    }

    /* SKILLS GRID */
    .skills-grid {
      display: grid;
      grid-template-columns: 135px 1fr;
      gap: 4px 10px;
      font-size: 8.3pt;
    }

    .skill-category {
      font-weight: 700;
      color: #1E293B;
    }

    .skill-list {
      color: #334155;
    }

    /* BADGE TAGS */
    .tag {
      display: inline-block;
      padding: 1px 5px;
      background: #E2E8F0;
      border-radius: 4px;
      font-size: 7pt;
      font-weight: 600;
      color: #334155;
      margin-left: 4px;
    }

    /* FOOTER */
    .footer {
      border-top: 1px solid #E2E8F0;
      padding-top: 5px;
      font-size: 7.2pt;
      color: #94A3B8;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="cv-container">
    <!-- HEADER WITH PROFILE PHOTO -->
    <div class="header">
      <div class="header-left">
        <img class="profile-photo" src="${profileImageBase64}" alt="Foto Profil Muhamad Aditia Davina Kholik" />
        <div class="identity-info">
          <h1>Muhamad Aditia Davina Kholik</h1>
          <div class="title-sub">Mahasiswa Sistem Informasi & Junior Software Developer</div>
          <div class="meta-nim">NIM: 242505030 · Masoem University · Kelas SI-5A</div>
        </div>
      </div>
      <div class="header-right">
        <div><strong>Email:</strong> muhammadaditiadavina@gmail.com</div>
        <div><strong>WhatsApp / HP:</strong> +62 859-7431-4120</div>
        <div><strong>Lokasi:</strong> Jatinangor, Sumedang, Jawa Barat</div>
        <div><strong>GitHub:</strong> github.com/muhammadaditiadavina</div>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="summary">
      Mahasiswa aktif semester 5 Program Studi Sistem Informasi di Masoem University dengan spesialisasi pengembangan aplikasi mobile multiplatform (React Native & Expo) dan rekayasa antarmuka web modern. Memiliki fondasi analitis kuat, kedisiplinan belajar tinggi, dan rekam jejak akademik unggul dengan pencapaian <strong>Level 10 (Industry Tier)</strong>, Nilai 89 (Grade A), dan 12.375 Learning Points pada mata kuliah Pemrograman Mobile 2.
    </div>

    <!-- ACADEMIC DASHBOARD / SCORE HIGHLIGHT -->
    <div class="section">
      <div class="section-title">Pencapaian Akademik & Kinerja UTS (Pemrograman Mobile 2)</div>
      <div class="score-banner">
        <div class="score-card">
          <div class="val">89 / 100</div>
          <div class="lbl">Nilai Akhir UTS (Grade A)</div>
        </div>
        <div class="score-card">
          <div class="val">12.375 LP</div>
          <div class="lbl">Rank #1 (Master Tier)</div>
        </div>
        <div class="score-card">
          <div class="val">100%</div>
          <div class="lbl">Kehadiran (16/16 Sesi)</div>
        </div>
        <div class="score-card">
          <div class="val">10 / 10</div>
          <div class="lbl">Challenge Level 10</div>
        </div>
      </div>
    </div>

    <!-- EDUCATION -->
    <div class="section">
      <div class="section-title">Riwayat Pendidikan Formal</div>
      <div class="item">
        <div class="item-header">
          <div>
            <span class="item-title">Masoem University</span> — <span class="item-sub">Mahasiswa di Masoem University (S1 Sistem Informasi)</span>
          </div>
          <span class="item-date">2024 – Sekarang</span>
        </div>
        <ul class="item-bullets">
          <li>Fokus Studi: Pemrograman Mobile, Pengembangan Aplikasi Web, Rekayasa Perangkat Lunak, dan Basis Data.</li>
          <li>Predikat Akademik: Mahasiswa Berprestasi dengan Indeks Prestasi Akademik Unggul (Grade A).</li>
        </ul>
      </div>

      <div class="item">
        <div class="item-header">
          <div>
            <span class="item-title">SMA 1 JATINANGOR</span> — <span class="item-sub">Pernah Belajar di SMA 1 JATINANGOR (MIPA)</span>
          </div>
          <span class="item-date">2020 – 2023</span>
        </div>
        <ul class="item-bullets">
          <li>Menyelesaikan pendidikan menengah atas di SMA 1 Jatinangor dengan peminatan MIPA dan ketertarikan pada teknologi informasi.</li>
        </ul>
      </div>

      <div class="item">
        <div class="item-header">
          <div>
            <span class="item-title">SMP 1 JATINANGOR</span> — <span class="item-sub">Pernah Belajar di SMP 1 JATINANGOR</span>
          </div>
          <span class="item-date">2018 – 2020</span>
        </div>
        <ul class="item-bullets">
          <li>Menempuh dan menyelesaikan masa studi pendidikan tingkat menengah pertama di SMP 1 Jatinangor.</li>
        </ul>
      </div>
    </div>

    <!-- TECHNICAL SKILLS -->
    <div class="section">
      <div class="section-title">Keahlian Teknis & Alat Rekayasa</div>
      <div class="skills-grid">
        <div class="skill-category">Mobile Development:</div>
        <div class="skill-list">React Native, Expo SDK 58, React Native Web, Cross-Platform Architecture, Mobile UI Optimization</div>

        <div class="skill-category">Frontend & UI/UX:</div>
        <div class="skill-list">React.js, JavaScript (ES6+), HTML5 Semantik, CSS3 / Modern Flexbox, Enterprise Design System, WCAG 2.2 AA</div>

        <div class="skill-category">Backend & Database:</div>
        <div class="skill-list">PHP, Laravel Framework, Node.js, RESTful API Integration, MySQL Relational Database</div>

        <div class="skill-category">Tools & Workflow:</div>
        <div class="skill-list">Git, GitHub, Visual Studio Code, Figma (Wireframing & Prototype), Postman, PowerShell CLI</div>
      </div>
    </div>

    <!-- PROJECTS & PORTFOLIO -->
    <div class="section">
      <div class="section-title">Pengalaman Portofolio Proyek</div>

      <div class="item">
        <div class="item-header">
          <div>
            <span class="item-title">Aplikasi Personal CV & UTS Academic Dashboard</span>
            <span class="tag">React Native</span><span class="tag">Expo</span><span class="tag">Design System</span>
          </div>
          <span class="item-date">2026</span>
        </div>
        <ul class="item-bullets">
          <li>Membangun aplikasi mobile multi-layar enterprise-grade berstandar Level 10 (Industry) sesuai kurikulum dosen pengampu Iin, M.Kom.</li>
          <li>Mengimplementasikan Design System monokromatik biru-hitam (#080B12, #2563EB) dengan dark/light theme switcher dinamis, validasi input form interaktif, dan simulasi riwayat pesan mock-API.</li>
          <li>Memvisualisasikan data nilai akademik, learning progress bar, dan sistem checklist kompetensi 10 Level secara scalable.</li>
        </ul>
      </div>

      <div class="item">
        <div class="item-header">
          <div>
            <span class="item-title">Aplikasi E-Commerce Katalog Mahasiswa (AgroMas)</span>
            <span class="tag">React Native</span><span class="tag">REST API</span>
          </div>
          <span class="item-date">2025</span>
        </div>
        <ul class="item-bullets">
          <li>Mengembangkan katalog digital terintegrasi untuk promosi produk lokal mahasiswa dengan fitur pencarian real-time, filter kategori, dan antarmuka responsif.</li>
        </ul>
      </div>

      <div class="item">
        <div class="item-header">
          <div>
            <span class="item-title">Sistem Informasi Akademik & Rekap Nilai Kampus</span>
            <span class="tag">Laravel</span><span class="tag">MySQL</span><span class="tag">Bootstrap</span>
          </div>
          <span class="item-date">2024</span>
        </div>
        <ul class="item-bullets">
          <li>Merancang skema database relasional untuk presensi, pengelolaan data mahasiswa, dan otomasi perhitungan transkrip nilai semester.</li>
        </ul>
      </div>
    </div>

    <!-- CERTIFICATES & ACTIVITIES -->
    <div class="section">
      <div class="section-title">Aktivitas & Karakter Personal</div>
      <div class="skills-grid">
        <div class="skill-category">Filosofi Belajar:</div>
        <div class="skill-list">"Belajar coding adalah proses bertahap. Setiap pesan kesalahan adalah kesempatan memahami logika lebih dalam, dan setiap baris program yang berhasil dieksekusi adalah langkah nyata menuju masa depan yang lebih baik."</div>

        <div class="skill-category">Minat & Hobi:</div>
        <div class="skill-list">Eksplorasi Framework Modern, Aktivitas Kebugaran & Olahraga Teratur, serta Seni Musik Kreatif di waktu senggang.</div>
      </div>
    </div>

    <!-- FOOTER -->
    <div class="footer">
      <div>Dokumen Resmi Curriculum Vitae — Muhamad Aditia Davina Kholik (NIM: 242505030)</div>
      <div>Diverifikasi Resmi untuk Keperluan Akademik & Profesional</div>
    </div>
  </div>
</body>
</html>`;

const tempHtmlPath = path.join(__dirname, 'cv_rendered.html');
fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

const outputPdfPath = path.join(__dirname, '../assets/CV_Muhamad_Aditia_Davina_Kholik.pdf');
const publicPdfPath = path.join(__dirname, '../public/CV_Muhamad_Aditia_Davina_Kholik.pdf');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const fileUrl = `file:///${tempHtmlPath.replace(/\\/g, '/')}`;

console.log('Generating PDF using Microsoft Edge headless...');
try {
  execSync(`"${edgePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${outputPdfPath}" "${fileUrl}"`, { stdio: 'inherit' });
  console.log('PDF generated successfully at:', outputPdfPath);

  // Copy to public folder
  fs.copyFileSync(outputPdfPath, publicPdfPath);
  console.log('PDF copied to public folder:', publicPdfPath);
} catch (error) {
  console.error('Error generating PDF:', error);
  process.exit(1);
}

