import type { Cafe } from "@/types/cafe";
import { CafeCard } from "./cafe-card";
import { cn } from "@/lib/utils";

interface CafeListProps {
  cafes: Cafe[];
  className?: string;
}

export function CafeList({ cafes, className }: CafeListProps) {
  if (cafes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">🔍</span>
        </div>
        <h3 className="text-xl font-bold font-heading mb-2">Tidak ada coffee shop yang cocok</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Coba sesuaikan filter pencarian atau coba area lain untuk menemukan coffee shop yang Anda cari.
        </p>
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8", className)}>
      {cafes.map((cafe) => (
        <CafeCard key={cafe.id} cafe={cafe} />
      ))}
    </div>
  );
}
