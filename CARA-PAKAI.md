# Cara pakai portofolio ini

## 1. Buka di VSCode
Ekstrak/pindahin folder ini, buka pakai VSCode (`File > Open Folder`).

## 2. Siapin folder assets
Di dalam folder yang sama dengan `index.html`, bikin folder baru namanya `assets`.
Taruh di situ:
- `CV-Irma-Wahyuni.pdf` (CV PDF kamu, nama file harus persis sama)
- `cafein-1.png` (screenshot aplikasi CafeIn)
- `website-1.png` (screenshot website kamu)

## 3. Cari & ganti semua yang ditandai `GANTI`
Buka `index.html`, tekan `Cmd+F` (Mac) lalu ketik `GANTI` untuk lompat ke tiap bagian yang perlu diisi manual. Ada 13 titik:
- Ganti div placeholder screenshot jadi tag `<img>` (contohnya sudah ditulis di komentar di atasnya)
- Link GitHub repo CafeIn & website
- Judul + deskripsi project website (nama proyeknya, teknologi yang dipakai)
- Angka persentase sentimen (65/25/10 itu contoh — ganti sesuai hasil skripsi kamu)
- Nama model klasifikasi TF-IDF yang dipakai (kalau mau ditambahin)
- Link metodologi/notebook analisis (kalau boleh dipublikasikan)
- Bio singkat di bagian "Tentang"
- Email, LinkedIn, GitHub di bagian "Kontak"

## 4. Cek tampilan sebelum upload
Klik kanan `index.html` di VSCode → install extension **Live Server** kalau belum ada → klik kanan lagi → "Open with Live Server". Ini biar kamu bisa lihat hasilnya di browser sambil ngedit.

## 5. Push ke GitHub
Kalau folder ini belum ada di repo GitHub, buka Terminal di VSCode (`Ctrl+` `` ` ``) dan jalankan:
```
git init
git add .
git commit -m "Portofolio pertama"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```
(Ganti `USERNAME` dan `NAMA-REPO` sesuai punya kamu. Kalau repo-nya sudah ada, tinggal `git add .` → `git commit` → `git push` aja.)

## 6. Aktifkan link publik (GitHub Pages)
1. Buka repo kamu di github.com
2. Masuk ke **Settings** → **Pages**
3. Di bagian "Branch", pilih `main` dan folder `/ (root)`, lalu **Save**
4. Tunggu 1–2 menit, link portofolio kamu akan muncul di halaman itu, bentuknya:
   `https://USERNAME.github.io/NAMA-REPO/`

## 7. Lampirin ke MagangHub
Copy link GitHub Pages itu, lampirin bareng CV PDF kamu di form aplikasi MagangHub. Selesai.
