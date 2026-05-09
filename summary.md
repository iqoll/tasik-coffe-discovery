# PRD — Tasik Coffee Discovery

## 1. Ringkasan Produk

Tasik Coffee Discovery adalah platform hyperlocal untuk membantu orang menemukan coffee shop di Tasikmalaya berdasarkan kebutuhan spesifik, seperti tempat kerja, nongkrong, meeting, outdoor, atau sekadar cari suasana baru.

Produk ini dimulai sebagai **discovery platform** terlebih dahulu, bukan booking system dan bukan subscription product. Namun, sejak awal struktur data dan alur produk disiapkan agar mudah berkembang ke **Tasik Coffee Pass** di fase berikutnya.

**Tech stack yang digunakan:**

* Frontend: **Next.js**
* Backend / Database / Auth: **Supabase**

---

## 2. Tujuan Aplikasi

### Tujuan utama

Membantu pengguna menemukan coffee shop yang paling sesuai dengan kebutuhan mereka dengan cepat, jelas, dan mudah dipahami.

### Tujuan bisnis

* Membangun traffic organik lokal melalui SEO.
* Menjadi sumber data coffee shop Tasik yang terstruktur.
* Menciptakan channel distribusi untuk partner coffee shop.
* Menyiapkan fondasi produk monetisasi di fase berikutnya, terutama Coffee Pass.

### Masalah yang ingin diselesaikan

Di kota dengan jumlah coffee shop yang sangat banyak, informasi sering tersebar di berbagai tempat seperti Google Maps, Instagram, atau rekomendasi teman. Akibatnya:

* user sulit membandingkan tempat secara cepat,
* coffee shop baru sulit mendapat eksposur awal,
* belum ada katalog lokal yang benar-benar fokus pada konteks penggunaan di Tasik.

---

## 3. Target User

### 3.1 User utama

Orang yang ingin mencari coffee shop di Tasik berdasarkan konteks penggunaan, misalnya:

* kerja atau nugas,
* nongkrong santai,
* meeting kecil,
* outdoor / semi outdoor,
* tempat ramai untuk kumpul,
* tempat yang nyaman untuk malam hari.

### 3.2 User sekunder

Pemilik atau pengelola coffee shop yang ingin:

* mendapatkan eksposur lokal,
* menampilkan profil tempat dengan rapi,
* mempromosikan keunggulan tempatnya,
* siap ikut program Coffee Pass di fase berikutnya.

---

## 4. Product Positioning

Produk ini bukan hanya direktori cafe.

Posisi produk yang diinginkan adalah:

**"Tempat paling cepat untuk menemukan coffee shop Tasik yang cocok buat kerja, nongkrong, atau cari suasana tertentu."**

Artinya, fokus produk bukan pada sekadar daftar tempat, melainkan pada **relevansi dan kecocokan**.

---

## 5. Ruang Lingkup MVP

### 5.1 Yang termasuk MVP

* Halaman daftar coffee shop.
* Pencarian berdasarkan nama atau area.
* Filter berdasarkan kebutuhan pengguna.
* Halaman detail coffee shop.
* Halaman area.
* Admin dashboard sederhana untuk mengelola data coffee shop.
* Struktur data yang siap berkembang ke Coffee Pass.

### 5.2 Yang tidak termasuk MVP

* Reservasi meja.
* Booking co-working spot.
* Payment subscription.
* Review dan rating publik.
* Realtime crowd level.
* Chat antara user dan owner.
* Mobile app native.

---

## 6. Feature MVP

### 6.1 Listing coffee shop

Menampilkan daftar coffee shop dalam bentuk card dengan informasi inti:

* nama tempat,
* area,
* thumbnail,
* ringkasan singkat,
* tag utama.

### 6.2 Search

User bisa mencari coffee shop berdasarkan:

* nama tempat,
* area,
* kata kunci umum.

### 6.3 Filter

Filter utama yang disediakan:

* work friendly,
* wifi,
* power outlet,
* outdoor / semi outdoor,
* smoking area,
* live music,
* meeting friendly,
* open now.

Filter work tidak menjadi niche utama produk, tetapi tetap harus ada karena itu salah satu kebutuhan paling sering dicari.

### 6.4 Detail coffee shop

Setiap coffee shop memiliki halaman detail yang memuat:

* nama,
* deskripsi,
* alamat,
* area,
* jam buka,
* galeri foto,
* tag fasilitas,
* link ke Google Maps,
* link ke Instagram atau kanal sosial lain.

### 6.5 Area page

Halaman area berfungsi untuk mengelompokkan coffee shop berdasarkan wilayah, misalnya:

* Cihideung,
* Tamansari,
* area pusat kota,
* dan area lain yang relevan.

### 6.6 Admin dashboard

Admin dapat:

* menambah coffee shop,
* mengedit data,
* mengunggah foto,
* menambahkan tag fitur,
* mem-publish atau unpublish data.

---

## 7. Ke arah Coffee Pass

Aplikasi ini disiapkan untuk ekspansi ke **Tasik Coffee Pass** pada fase berikutnya.

Coffee Pass akan menjadi layer monetisasi dan loyalty di atas discovery layer yang sudah ada.

Contoh arah ekspansi:

* member subscription,
* benefit di partner cafe,
* voucher atau klaim benefit,
* partner management,
* redemption tracking.

Karena itu, struktur data awal harus cukup fleksibel untuk mendukung relasi coffee shop, partner, membership, dan benefit di masa depan.

---

## 8. Skema Database

### 8.1 Prinsip desain database

* Relasi harus sederhana dan scalable.
* Data publik dan data admin dipisah dengan jelas.
* Struktur harus mendukung future feature seperti partner dan membership.

### 8.2 Tabel inti

#### `users`

Dipakai untuk admin sekarang, dan bisa dipakai untuk member nanti.

Field utama:

* `id` : uuid
* `email` : text
* `role` : enum (`admin`, `member`)
* `created_at` : timestamp

#### `areas`

Menyimpan area / wilayah kota.

Field utama:

* `id` : uuid
* `name` : text
* `slug` : text

#### `cafes`

Tabel utama coffee shop.

Field utama:

* `id` : uuid
* `area_id` : uuid
* `name` : text
* `slug` : text
* `short_description` : text
* `full_description` : text
* `address` : text
* `opening_hours` : jsonb
* `latitude` : numeric
* `longitude` : numeric
* `instagram_url` : text
* `maps_url` : text
* `is_published` : boolean
* `created_at` : timestamp

#### `features`

Master tag atau master fitur.

Field utama:

* `id` : uuid
* `name` : text
* `slug` : text

Contoh data:

* wifi
* power-outlet
* work-friendly
* outdoor
* smoking-area
* live-music
* meeting-friendly

#### `cafe_features`

Relasi many-to-many antara cafe dan fitur.

Field utama:

* `cafe_id` : uuid
* `feature_id` : uuid

#### `cafe_photos`

Menyimpan foto per coffee shop.

Field utama:

* `id` : uuid
* `cafe_id` : uuid
* `image_url` : text
* `sort_order` : int

---

## 9. Authentication dan Authorization

### 9.1 Strategi auth MVP

Public user tidak perlu login di MVP.

Alasan:

* friction rendah,
* lebih cepat untuk launch,
* fokus ke discovery dan validasi.

### 9.2 Auth admin

Admin login menggunakan Supabase Auth.

Role minimal:

* `admin`

Pada fase berikutnya, role bisa berkembang menjadi:

* `member`,
* `partner`,
* `super_admin`.

### 9.3 Akses data

* Halaman publik hanya membaca data published.
* Halaman admin bisa create, update, publish, dan unpublish.
* Data sensitif dan operasi tulis dibatasi oleh role.

---

## 10. List Screen dan Fungsinya

### 10.1 Home page

**Tujuan:** pintu masuk utama discovery.

Isi utama:

* hero search,
* shortcut filter populer,
* featured cafe,
* area populer,
* section rekomendasi.

### 10.2 Cafe listing page

**Route:** `/cafes`

Fungsi:

* menampilkan semua cafe yang dipublish,
* search,
* filter,
* sorting sederhana jika diperlukan.

### 10.3 Cafe detail page

**Route:** `/cafes/[slug]`

Fungsi:

* detail informasi tempat,
* foto,
* fasilitas,
* lokasi,
* link eksternal.

### 10.4 Area page

**Route:** `/areas/[slug]`

Fungsi:

* menampilkan cafe di area tertentu,
* membantu eksplorasi berbasis wilayah.

### 10.5 Admin login

**Route:** `/admin/login`

Fungsi:

* login admin.

### 10.6 Admin dashboard

**Route:** `/admin`

Fungsi:

* melihat daftar cafe,
* tambah data baru,
* edit data lama,
* publish / unpublish.

### 10.7 Admin create / edit cafe

**Route:** `/admin/cafes/new` dan `/admin/cafes/[id]`

Fungsi:

* form input data cafe,
* assign area,
* pilih fitur,
* upload foto,
* simpan perubahan.

---

## 11. Struktur Direktori Project

Struktur project yang disarankan:

```txt
src/
  app/
    page.tsx
    cafes/
      page.tsx
      [slug]/
        page.tsx
    areas/
      [slug]/
        page.tsx
    admin/
      login/
        page.tsx
      page.tsx
      cafes/
        new/
          page.tsx
        [id]/
          page.tsx

  components/
    layout/
      navbar.tsx
      footer.tsx

    cafes/
      cafe-card.tsx
      cafe-list.tsx
      cafe-filters.tsx
      cafe-gallery.tsx

    areas/
      area-card.tsx

    admin/
      cafe-form.tsx

    ui/

  lib/
    supabase/
      client.ts
      server.ts

    queries/
      cafes.ts
      areas.ts
      features.ts

    utils/
      format.ts
      slug.ts

  types/
    cafe.ts
    area.ts
    feature.ts
    user.ts

  constants/
    filters.ts
```

---

## 12. Prinsip Implementasi

### 12.1 Prinsip produk

* Cepat ditemukan.
* Ringan dipakai.
* Mudah dibaca.
* Data harus rapi.
* SEO-friendly.

### 12.2 Prinsip teknis

* Gunakan Next.js untuk routing, SEO, dan struktur halaman publik.
* Gunakan Supabase untuk database, auth, dan storage.
* Jangan membuat fitur yang belum dibutuhkan.
* Jangan membebani MVP dengan sistem booking atau payment dulu.

---

## 13. Success Metric Awal

Beberapa metrik awal yang bisa dipantau:

* jumlah coffee shop yang sudah masuk database,
* jumlah page view listing dan detail,
* penggunaan filter,
* jumlah klik ke maps atau Instagram,
* jumlah coffee shop partner yang mau dicantumkan.

---

## 14. Roadmap Singkat

### Fase 1 — Discovery MVP

* launch website,
* isi data awal coffee shop,
* fokus pada SEO dan pengalaman browsing.

### Fase 2 — Growth

* tambah konten editorial,
* tambah pengelompokan area,
* tambah featured listing,
* kumpulkan partner awal.

### Fase 3 — Coffee Pass

* subscription,
* benefit partner,
* member account,
* redemption flow.

---

## 15. Catatan Penutup

Produk ini paling kuat kalau dimulai dari nilai yang sederhana tapi nyata: membantu orang memilih tempat dengan cepat.

Discovery adalah pondasi.
Coffee Pass adalah monetisasi berikutnya.
