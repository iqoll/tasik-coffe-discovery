import { cn } from "@/lib/utils";

interface AdBannerProps {
  className?: string;
  size?: "leaderboard" | "rectangle" | "responsive";
}

export function AdBanner({ className, size = "responsive" }: AdBannerProps) {
  return (
    <div 
      className={cn(
        "bg-secondary/40 border border-border/50 rounded-xl flex flex-col items-center justify-center text-muted-foreground relative overflow-hidden",
        {
          "w-full max-w-[728px] h-[90px] mx-auto": size === "leaderboard",
          "w-full max-w-[300px] h-[250px] mx-auto": size === "rectangle",
          "w-full min-h-[90px] md:min-h-[120px]": size === "responsive",
        },
        className
      )}
    >
      <div className="absolute top-2 right-3 text-[10px] uppercase tracking-wider opacity-50 font-medium">
        Advertisement
      </div>
      <p className="text-sm font-medium opacity-60">Ruang Iklan Tersedia</p>
    </div>
  );
}
