import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Clock, ExternalLink, ArrowLeft } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
import { MOCK_CAFES } from "@/constants/mock-data";
import { FILTER_DEFINITIONS } from "@/constants/filters";
import { CafeGallery } from "@/components/cafes/cafe-gallery";
import { CafeList } from "@/components/cafes/cafe-list";

interface CafeDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CafeDetailPage({ params }: CafeDetailPageProps) {
  const resolvedParams = await params;
  const cafe = MOCK_CAFES.find(c => c.slug === resolvedParams.slug);

  if (!cafe) {
    notFound();
  }

  // Find related cafes (same area, excluding current)
  const relatedCafes = MOCK_CAFES.filter(c => c.area_id === cafe.area_id && c.id !== cafe.id).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Link href="/cafes" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Eksplor
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Column: Gallery & Description */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <CafeGallery photos={cafe.photos || []} cafeName={cafe.name} />

          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{cafe.name}</h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              {cafe.area && (
                <Link href={`/areas/${cafe.area.slug}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <MapPin className="w-4 h-4" />
                  {cafe.area.name}
                </Link>
              )}
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {cafe.address}
              </div>
              {cafe.instagram_url && (
                <a href={cafe.instagram_url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                  Instagram
                </a>
              )}
              {cafe.maps_url && (
                <a href={cafe.maps_url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Google Maps
                </a>
              )}
            </div>

            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">{cafe.full_description}</p>
            </div>

            <h3 className="font-semibold text-lg mb-4 mt-8">Fasilitas</h3>
            <div className="flex flex-wrap gap-2">
              {cafe.features?.map(feature => {
                const filterDef = FILTER_DEFINITIONS.find(f => f.id === feature.slug);
                const Icon = filterDef?.icon;
                return (
                  <div key={feature.id} className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1.5 rounded-full text-sm">
                    {Icon && <Icon className="w-4 h-4 text-primary" />}
                    {feature.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Info Card */}
        <div>
          <div className="bg-secondary/20 border border-border rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Jam Operasional
            </h3>
            <div className="space-y-2 mb-8">
              {Object.entries(cafe.opening_hours || {}).map(([day, hours]) => (
                <div key={day} className="flex justify-between text-sm">
                  <span className="capitalize text-muted-foreground">{day}</span>
                  <span className="font-medium">
                    {hours ? `${hours.open} - ${hours.close}` : "Tutup"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-stone-900 p-8 rounded-[40px] text-white overflow-hidden relative mt-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h4 className="font-bold mb-8 relative">Lokasi & Kontak</h4>
            <div className="space-y-6 relative">
              <a
                href={cafe.maps_url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col gap-4 group"
              >
                <div className="bg-stone-800 p-3 rounded-2xl flex items-center justify-center border border-stone-700/50 group-hover:bg-stone-700 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Google Maps</p>
                  <p className="font-bold group-hover:underline">Buka via Navigasi</p>
                </div>
              </a>

              {cafe.instagram_url && (
                <a
                  href={cafe.instagram_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col gap-4 group border-t border-stone-800 pt-6"
                >
                  <div className="bg-stone-800 p-3 rounded-2xl flex items-center justify-center border border-stone-700/50 group-hover:bg-stone-700 transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Instagram</p>
                    <p className="font-bold group-hover:underline">@{cafe.instagram_url.split('/').filter(Boolean).pop()}</p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Cafes */}
      {relatedCafes.length > 0 && (
        <div className="mt-20 pt-12 border-t border-border">
          <h2 className="font-heading text-3xl font-bold mb-8">Pilihan Lain di {cafe.area?.name}</h2>
          <CafeList cafes={relatedCafes} />
        </div>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  return MOCK_CAFES.map((cafe) => ({
    slug: cafe.slug,
  }));
}
