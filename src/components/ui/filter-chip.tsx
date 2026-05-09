"use client";

import { cn } from "@/lib/utils";

interface FilterChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: React.ReactNode;
  label: string;
}

export function FilterChip({ active, icon, label, className, ...props }: FilterChipProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
        "border",
        active 
          ? "bg-primary text-primary-foreground border-primary shadow-sm" 
          : "bg-background text-foreground border-border hover:border-primary/50 hover:bg-secondary/20",
        className
      )}
      {...props}
    >
      {icon && <span className={cn("w-4 h-4", active ? "text-primary-foreground" : "text-primary")}>{icon}</span>}
      {label}
    </button>
  );
}
