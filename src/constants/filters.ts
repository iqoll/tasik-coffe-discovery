import type { Feature } from "@/types/feature";
import { Wifi, Plug, Laptop, TreePine, Cigarette, Music, Users, Moon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const FEATURES: Feature[] = [
  { id: "f1", name: "WiFi", slug: "wifi", icon: "Wifi" },
  { id: "f2", name: "Power Outlet", slug: "power-outlet", icon: "Plug" },
  { id: "f3", name: "Work Friendly", slug: "work-friendly", icon: "Laptop" },
  { id: "f4", name: "Outdoor", slug: "outdoor", icon: "TreePine" },
  { id: "f5", name: "Smoking Area", slug: "smoking-area", icon: "Cigarette" },
  { id: "f6", name: "Live Music", slug: "live-music", icon: "Music" },
  { id: "f7", name: "Meeting Friendly", slug: "meeting-friendly", icon: "Users" },
  { id: "f8", name: "Mushola", slug: "prayer-room", icon: "Moon" },
];

export const FILTER_OPTIONS = FEATURES.map((f) => ({
  label: f.name,
  value: f.slug,
  icon: f.icon,
}));

export interface FilterDefinition {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const FILTER_DEFINITIONS: FilterDefinition[] = [
  { id: "wifi", label: "WiFi", icon: Wifi },
  { id: "power-outlet", label: "Power Outlet", icon: Plug },
  { id: "work-friendly", label: "Work Friendly", icon: Laptop },
  { id: "outdoor", label: "Outdoor", icon: TreePine },
  { id: "smoking-area", label: "Smoking Area", icon: Cigarette },
  { id: "live-music", label: "Live Music", icon: Music },
  { id: "meeting-friendly", label: "Meeting Friendly", icon: Users },
  { id: "prayer-room", label: "Mushola", icon: Moon },
];
