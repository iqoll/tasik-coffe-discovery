import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Kebijakan Privasi | Tasik Coffee Discovery",
  description: "Kebijakan Privasi Tasik Coffee Discovery sesuai dengan hukum di Indonesia.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link href="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Beranda
      </Link>

      <div className="bg-white rounded-[32px] p-8 md:p-12 border border-stone-200 shadow-sm">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-stone-900 mb-2">Kebijakan Privasi</h1>
        <p className="text-stone-500 mb-8 pb-8 border-b border-stone-100">Pembaruan Terakhir: 10 Mei 2026</p>

        <div className="space-y-8 text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">1. Pendahuluan</h2>
            <p>
              Tasik Coffee Discovery ("kami", "milik kami") menghormati privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
              Kebijakan Privasi ini disusun berdasarkan ketentuan hukum dan peraturan perundang-undangan yang berlaku di Republik Indonesia, 
              khususnya Undang-Undang Pelindungan Data Pribadi (UU PDP).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">2. Data yang Kami Kumpulkan</h2>
            <p className="mb-2">Saat Anda menggunakan layanan kami, kami mungkin mengumpulkan jenis informasi berikut:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Informasi Analitik:</strong> Alamat IP, jenis peramban (browser), waktu kunjungan, dan halaman yang Anda buka, untuk keperluan statistik dan peningkatan layanan.</li>
              <li><strong>Informasi Perangkat:</strong> Data terkait perangkat yang Anda gunakan untuk mengakses situs kami.</li>
              <li><strong>Data Penggunaan:</strong> Interaksi Anda dengan situs (contoh: penggunaan filter, klik tautan Instagram atau Maps).</li>
            </ul>
            <p className="mt-2 text-sm text-stone-500 italic">*Saat ini kami tidak mewajibkan pembuatan akun pengguna untuk pengunjung publik, sehingga kami tidak mengumpulkan nama, email, atau data sensitif secara langsung kecuali Anda dengan sengaja memberikannya melalui formulir kontak atau kerja sama.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">3. Penggunaan Data</h2>
            <p className="mb-2">Data yang kami kumpulkan digunakan secara eksklusif untuk:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Meningkatkan pengalaman pengguna dan antarmuka situs web kami.</li>
              <li>Menganalisis tren penggunaan (seperti kopi shop mana yang paling sering dilihat).</li>
              <li>Mencegah aktivitas penipuan dan menjaga keamanan platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">4. Berbagi Data dengan Pihak Ketiga</h2>
            <p>
              Kami tidak memperjualbelikan, menukar, atau menyewakan data pribadi Anda kepada pihak ketiga. Kami hanya dapat membagikan informasi 
              analitik umum yang diagregasi (tidak mengidentifikasi individu mana pun) dengan mitra atau pengiklan kami untuk keperluan statistik.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">5. Hak Anda (Sesuai UU PDP)</h2>
            <p className="mb-2">Sebagai subjek data, Anda memiliki hak-hak berikut:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Hak untuk mendapatkan informasi tentang kejelasan identitas, dasar kepentingan hukum, tujuan permintaan dan penggunaan data pribadi.</li>
              <li>Hak untuk melengkapi, memperbarui, dan/atau memperbaiki kesalahan/ketidakakuratan data pribadi Anda.</li>
              <li>Hak untuk mengakhiri pemrosesan, menghapus, dan/atau memusnahkan data pribadi Anda sesuai ketentuan peraturan perundang-undangan.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">6. Tautan ke Situs Web Pihak Ketiga</h2>
            <p>
              Layanan kami dapat berisi tautan ke situs web lain (seperti Google Maps atau Instagram). Jika Anda mengklik tautan pihak ketiga, 
              Anda akan diarahkan ke situs tersebut. Kami menyarankan Anda untuk meninjau Kebijakan Privasi dari setiap situs yang Anda kunjungi, 
              karena kami tidak memiliki kendali atas konten atau praktik privasi pihak ketiga tersebut.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-3">7. Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:
              <br />
              <strong className="text-stone-900">Email:</strong> privacy@tasikcoffee.id
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
