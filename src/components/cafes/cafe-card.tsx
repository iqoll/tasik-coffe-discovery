import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import type { Cafe } from "@/types/cafe";
import { cn } from "@/lib/utils";
import { FILTER_DEFINITIONS } from "@/constants/filters";

interface CafeCardProps {
  cafe: Cafe;
  className?: string;
}

export function CafeCard({ cafe, className }: CafeCardProps) {
  const mainPhoto = cafe.photos && cafe.photos.length > 0 
    ? cafe.photos[0].image_url 
    : "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80";

  // Get icons for top 3 features
  const topFeatures = cafe.features?.slice(0, 3) || [];

  return (
    <Link 
      href={`/cafes/${cafe.slug}`}
      className={cn(
        "group flex flex-col bg-background rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image 
          src={mainPhoto} 
          alt={cafe.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {cafe.area && (
          <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium shadow-sm flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-primary" />
            {cafe.area.name}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
          {cafe.name}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
          {cafe.short_description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <div className="flex flex-wrap gap-1.5">
            {topFeatures.map(feature => {
              const filterDef = FILTER_DEFINITIONS.find(f => f.id === feature.slug);
              if (!filterDef) return null;
              const Icon = filterDef.icon;
              return (
                <div 
                  key={feature.id} 
                  className="bg-secondary/30 text-secondary-foreground p-1.5 rounded-md"
                  title={feature.name}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
              );
            })}
            {cafe.features && cafe.features.length > 3 && (
              <div className="bg-secondary/30 text-secondary-foreground px-1.5 py-0.5 rounded-md text-xs font-medium flex items-center justify-center">
                +{cafe.features.length - 3}
              </div>
            )}
          </div>
          
          {cafe.opening_hours?.monday && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{cafe.opening_hours.monday.open} - {cafe.opening_hours.monday.close}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
