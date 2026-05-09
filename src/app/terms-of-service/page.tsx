import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Syarat dan Ketentuan | Tasik Coffee Discovery",
  description: "Syarat dan Ketentuan layanan Tasik Coffee Discovery.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link href="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Beranda
      </Link>

      <div className="bg-white rounded-[32px] p-8 md:p-12 border border-stone-200 shadow-sm">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-stone-900 mb-2">Syarat dan Ketentuan</h1>
        <p className="text-stone-500 mb-8 pb-8 border-b border-stone-100">Pembaruan Terakhir: 10 Mei 2026</p>

        <div className="space-y-8 text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">1. Penerimaan Syarat</h2>
            <p>
              Dengan mengakses dan menggunakan situs web Tasik Coffee Discovery ("Layanan"), Anda menerima dan setuju 
              untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, 
              Anda tidak diperkenankan untuk menggunakan Layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">2. Penggunaan Layanan</h2>
            <p className="mb-2">Anda setuju untuk menggunakan Layanan hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku di Republik Indonesia. Anda dilarang:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Menyalin, memodifikasi, atau mendistribusikan konten dari situs ini tanpa izin tertulis dari kami.</li>
              <li>Menggunakan Layanan untuk tindakan penipuan atau melanggar hak kekayaan intelektual pihak lain.</li>
              <li>Mencoba mendapatkan akses tidak sah ke sistem atau jaringan yang terhubung ke Layanan.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">3. Keakuratan Informasi</h2>
            <p>
              Meskipun kami berusaha keras untuk menjaga informasi mengenai daftar coffee shop, jam operasional, dan lokasi seakurat mungkin, 
              Tasik Coffee Discovery tidak memberikan jaminan bahwa semua informasi selalu akurat, lengkap, atau terbaru. Keputusan yang Anda buat 
              berdasarkan informasi dari situs ini adalah tanggung jawab Anda sepenuhnya.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">4. Kekayaan Intelektual</h2>
            <p>
              Konten, logo, dan elemen desain yang ada di Tasik Coffee Discovery adalah milik kami atau mitra kami yang dilindungi oleh 
              Undang-Undang Hak Cipta Republik Indonesia. Penggunaan materi tersebut untuk tujuan komersial tanpa izin tegas dilarang.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">5. Batasan Tanggung Jawab</h2>
            <p>
              Dalam batas maksimal yang diizinkan oleh hukum Indonesia, Tasik Coffee Discovery tidak bertanggung jawab atas kerugian langsung, 
              tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan Anda menggunakan Layanan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">6. Perubahan Ketentuan</h2>
            <p>
              Kami berhak, atas kebijakan kami sendiri, untuk mengubah atau mengganti Syarat dan Ketentuan ini kapan saja. 
              Perubahan material akan diberitahukan melalui pembaruan di halaman ini. Penggunaan berkelanjutan Anda atas Layanan setelah 
              perubahan tersebut menandakan penerimaan Anda terhadap ketentuan baru.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">7. Hukum yang Berlaku</h2>
            <p>
              Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap perselisihan 
              yang timbul terkait dengan ketentuan ini akan diselesaikan secara musyawarah, atau melalui yurisdiksi pengadilan 
              yang berwenang di Indonesia.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
