import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Coffee } from "lucide-react";
import { MOCK_AREAS, MOCK_CAFES } from "@/constants/mock-data";
import { CafeList } from "@/components/cafes/cafe-list";

interface AreaDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AreaDetailPage({ params }: AreaDetailPageProps) {
  const resolvedParams = await params;
  const area = MOCK_AREAS.find(a => a.slug === resolvedParams.slug);

  if (!area) {
    notFound();
  }

  const areaCafes = MOCK_CAFES.filter(c => c.area_id === area.id);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Link href="/areas" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Area
      </Link>

      <div className="bg-secondary/20 rounded-3xl p-8 md:p-12 mb-12 border border-border flex flex-col md:flex-row gap-8 items-center md:items-start justify-between text-center md:text-left">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Coffee Shop di {area.name}
          </h1>
          <p className="text-lg text-muted-foreground">
            {area.description || `Jelajahi berbagai pilihan coffee shop menarik di kawasan ${area.name}.`}
          </p>
        </div>
        <div className="bg-background rounded-2xl p-6 border border-border flex flex-col items-center justify-center min-w-[150px] shadow-sm">
          <Coffee className="w-8 h-8 text-primary mb-2" />
          <span className="text-3xl font-bold">{areaCafes.length}</span>
          <span className="text-sm text-muted-foreground font-medium mt-1">Tempat Ngopi</span>
        </div>
      </div>

      <CafeList cafes={areaCafes} />
    </div>
  );
}

export async function generateStaticParams() {
  return MOCK_AREAS.map((area) => ({
    slug: area.slug,
  }));
}
