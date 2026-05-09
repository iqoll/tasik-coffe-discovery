import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SearchBar } from "@/components/ui/search-bar";
import { FilterChip } from "@/components/ui/filter-chip";
import { CafeList } from "@/components/cafes/cafe-list";
import { AreaCard } from "@/components/areas/area-card";
import { MOCK_CAFES, MOCK_AREAS } from "@/constants/mock-data";
import { FILTER_DEFINITIONS } from "@/constants/filters";

export default function Home() {
  const featuredCafes = MOCK_CAFES.slice(0, 3);
  const popularFilters = FILTER_DEFINITIONS.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-secondary/20 -z-10" />
        <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl tracking-tight text-foreground mb-6">
          Temukan <span className="text-primary italic">Coffee Shop</span> Terbaik di Tasikmalaya
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
          Dari spot WFC yang tenang hingga tempat nongkrong asik bersama teman, temukan semuanya di sini.
        </p>

        {/* Search & Filter Shortcuts */}
        <div className="w-full max-w-2xl flex flex-col items-center gap-6">
          <SearchBar placeholder="Cari nama cafe atau area..." />
          
          <div className="flex flex-wrap justify-center gap-3">
            {popularFilters.map((filter) => {
              const Icon = filter.icon;
              return (
                <Link key={filter.id} href={`/cafes?feature=${filter.id}`}>
                  <FilterChip label={filter.label} icon={<Icon />} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Cafes Section */}
      <section className="py-16 md:py-24 px-4 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-10">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Rekomendasi Minggu Ini</h2>
            <p className="text-muted-foreground">Coffee shop pilihan yang wajib kamu kunjungi.</p>
          </div>
          <Link href="/cafes" className="flex items-center gap-2 text-primary font-medium hover:underline">
            Lihat semua <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <CafeList cafes={featuredCafes} />
      </section>

      {/* Popular Areas Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Eksplor Area Populer</h2>
            <p className="text-muted-foreground">Temukan tempat ngopi di sekitar wilayah favoritmu.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {MOCK_AREAS.map((area) => (
              <AreaCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 container mx-auto">
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Punya Rekomendasi Coffee Shop?</h2>
            <p className="text-lg text-primary-foreground/80 mb-10">
              Bantu kami melengkapi direktori coffee shop di Tasikmalaya. Bagikan tempat favoritmu agar lebih banyak orang tahu!
            </p>
            <Link 
              href="#"
              className="inline-block bg-background text-foreground font-semibold px-8 py-4 rounded-full transition-transform hover:scale-105"
            >
              Kirim Rekomendasi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
