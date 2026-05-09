"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
}

export function SearchBar({ className, wrapperClassName, ...props }: SearchBarProps) {
  return (
    <div className={cn("relative flex items-center w-full max-w-md", wrapperClassName)}>
      <Search className="absolute left-3 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        className={cn(
          "w-full h-12 pl-10 pr-4 rounded-full border border-border bg-background/50",
          "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
          "placeholder:text-muted-foreground shadow-sm",
          className
        )}
        {...props}
      />
    </div>
  );
}
