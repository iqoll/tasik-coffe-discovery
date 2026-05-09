import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Clock, ExternalLink, ArrowLeft, Link2 } from "lucide-react";
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
              <Link href={`/areas/${cafe.area?.slug}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4" />
                {cafe.area?.name}
              </Link>
              {cafe.instagram_url && (
                <a href={cafe.instagram_url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Link2 className="w-4 h-4" />
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
          </div>
        </div>

        {/* Right Column: Info Card */}
        <div>
          <div className="bg-secondary/20 border border-border rounded-2xl p-6 sticky top-24">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Alamat
            </h3>
            <p className="text-muted-foreground mb-6">{cafe.address}</p>

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

            <h3 className="font-semibold text-lg mb-4">Fasilitas</h3>
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
