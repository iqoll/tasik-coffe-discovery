"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SearchBar } from "@/components/ui/search-bar";
import { CafeFilters } from "@/components/cafes/cafe-filters";
import { CafeList } from "@/components/cafes/cafe-list";
import { MOCK_CAFES } from "@/constants/mock-data";
import { AdBanner } from "@/components/ui/ad-banner";

function CafeExplorer() {
  const searchParams = useSearchParams();
  const initialFeature = searchParams.get("feature");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>(
    initialFeature ? [initialFeature] : []
  );

  const handleFilterChange = (filterSlug: string) => {
    setSelectedFilters(prev =>
      prev.includes(filterSlug)
        ? prev.filter(f => f !== filterSlug)
        : [...prev, filterSlug]
    );
  };

  const filteredCafes = useMemo(() => {
    return MOCK_CAFES.filter(cafe => {
      // 1. Filter by search query
      const matchesSearch =
        cafe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cafe.area?.name.toLowerCase().includes(searchQuery.toLowerCase());

      // 2. Filter by selected features (must have ALL selected features)
      const matchesFilters = selectedFilters.length === 0 || selectedFilters.every(filterSlug =>
        cafe.features?.some(f => f.slug === filterSlug)
      );

      return matchesSearch && matchesFilters;
    });
  }, [searchQuery, selectedFilters]);

  return (
    <>
      <div className="flex flex-col gap-6 mb-8">
        <SearchBar
          placeholder="Cari nama cafe atau area..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          wrapperClassName="max-w-xl"
        />

        <CafeFilters
          selectedFilters={selectedFilters}
          onChange={handleFilterChange}
        />
      </div>

      <div className="mb-6 flex justify-between items-center text-sm text-muted-foreground">
        <p>Menampilkan {filteredCafes.length} coffee shop</p>
        {selectedFilters.length > 0 && (
          <button
            onClick={() => setSelectedFilters([])}
            className="text-primary hover:underline font-medium"
          >
            Hapus Filter
          </button>
        )}
      </div>

      <CafeList cafes={filteredCafes} />
    </>
  );
}

export default function CafesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="mb-10">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Eksplor Coffee Shop</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Temukan coffee shop yang sesuai dengan preferensimu. Gunakan pencarian dan filter untuk hasil yang lebih spesifik.
        </p>
      </div>

      <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Memuat data...</div>}>
        <CafeExplorer />
      </Suspense>

      <div className="mt-16">
        <AdBanner size="leaderboard" />
      </div>
    </div>
  );
}
