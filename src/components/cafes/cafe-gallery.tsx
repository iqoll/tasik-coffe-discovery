"use client";

import { useState } from "react";
import Image from "next/image";
import type { CafePhoto } from "@/types/cafe";
import { cn } from "@/lib/utils";

interface CafeGalleryProps {
  photos: CafePhoto[];
  cafeName: string;
}

export function CafeGallery({ photos, cafeName }: CafeGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!photos || photos.length === 0) {
    return (
      <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-muted rounded-2xl overflow-hidden relative">
        <Image 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
          alt={`${cafeName} default image`}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  const activePhoto = photos[activeIndex];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-muted rounded-2xl overflow-hidden relative group">
        <Image 
          src={activePhoto.image_url}
          alt={`${cafeName} image ${activeIndex + 1}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
      </div>

      {/* Thumbnails */}
      {photos.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative w-24 md:w-32 aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0 transition-all",
                activeIndex === index 
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background opacity-100" 
                  : "opacity-60 hover:opacity-100"
              )}
            >
              <Image 
                src={photo.image_url}
                alt={`${cafeName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
