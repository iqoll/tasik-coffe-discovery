import Link from "next/link";
import Image from "next/image";
import { Coffee } from "lucide-react";
import type { Area } from "@/types/area";

interface AreaCardProps {
  area: Area;
  className?: string;
}

// Temporary mapping of area slugs to images since the PRD doesn't have image field
const AREA_IMAGES: Record<string, string> = {
  "cihideung": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
  "tamansari": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80",
  "mangkubumi": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
  "pusat-kota": "https://images.unsplash.com/photo-1445116572658-220740702852?auto=format&fit=crop&w=600&q=80",
  "indihiang": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80"
};

export function AreaCard({ area, className = "" }: AreaCardProps) {
  const imageUrl = AREA_IMAGES[area.slug] || "https://images.unsplash.com/photo-1445116572658-220740702852?auto=format&fit=crop&w=600&q=80";

  return (
    <Link 
      href={`/areas/${area.slug}`}
      className={`group relative overflow-hidden rounded-2xl block aspect-[4/5] ${className}`}
    >
      <Image 
        src={imageUrl} 
        alt={`Area ${area.name}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-primary transition-colors">
          {area.name}
        </h3>
        <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
          <Coffee className="w-4 h-4" />
          <span>{area.cafe_count || 0} Coffee Shop</span>
        </div>
      </div>
    </Link>
  );
}
