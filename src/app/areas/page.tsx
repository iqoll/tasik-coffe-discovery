import { MOCK_AREAS } from "@/constants/mock-data";
import { AreaCard } from "@/components/areas/area-card";

export default function AreasPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Area Populer</h1>
        <p className="text-muted-foreground text-lg">
          Jelajahi coffee shop berdasarkan wilayah di Tasikmalaya. Setiap area memiliki karakteristik dan pesonanya tersendiri.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MOCK_AREAS.map((area) => (
          <AreaCard key={area.id} area={area} />
        ))}
      </div>
    </div>
  );
}
