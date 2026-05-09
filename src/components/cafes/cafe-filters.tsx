"use client";

import { FILTER_DEFINITIONS } from "@/constants/filters";
import { FilterChip } from "@/components/ui/filter-chip";

interface CafeFiltersProps {
  selectedFilters: string[];
  onChange: (filterSlug: string) => void;
}

export function CafeFilters({ selectedFilters, onChange }: CafeFiltersProps) {
  return (
    <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex gap-3 px-1 min-w-max">
        {FILTER_DEFINITIONS.map((filter) => {
          const Icon = filter.icon;
          const isActive = selectedFilters.includes(filter.id);
          
          return (
            <FilterChip
              key={filter.id}
              label={filter.label}
              icon={<Icon />}
              active={isActive}
              onClick={() => onChange(filter.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
