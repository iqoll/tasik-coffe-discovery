export interface OpeningHours {
  [key: string]: { open: string; close: string } | null;
}

export interface CafePhoto {
  id: string;
  cafe_id: string;
  image_url: string;
  sort_order: number;
}

export interface Cafe {
  id: string;
  area_id: string;
  name: string;
  slug: string;
  short_description: string;
  full_description: string;
  address: string;
  opening_hours: OpeningHours;
  latitude: number;
  longitude: number;
  instagram_url: string;
  maps_url: string;
  is_published: boolean;
  created_at: string;
  // Joined data
  area?: Area;
  features?: Feature[];
  photos?: CafePhoto[];
}

import type { Area } from "./area";
import type { Feature } from "./feature";
