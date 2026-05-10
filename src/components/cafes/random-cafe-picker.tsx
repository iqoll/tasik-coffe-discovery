"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Dices } from "lucide-react";
import { MOCK_CAFES } from "@/constants/mock-data";

export function RandomCafePicker() {
  const router = useRouter();
  const [isPicking, setIsPicking] = useState(false);

  const pickRandomCafe = () => {
    if (MOCK_CAFES.length === 0) return;
    
    setIsPicking(true);
    // Add a slight delay for dramatic effect
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * MOCK_CAFES.length);
      const randomCafe = MOCK_CAFES[randomIndex];
      router.push(`/cafes/${randomCafe.slug}`);
    }, 600);
  };

  return (
    <div className="mt-12 w-full max-w-2xl bg-secondary/30 border border-border rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors hover:bg-secondary/40">
      <div className="flex items-center gap-4 text-left">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
          <Dices className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-foreground">Bingung mau ke mana?</h3>
          <p className="text-sm text-muted-foreground">Biar kami yang pilihkan secara acak</p>
        </div>
      </div>
      
      <button
        onClick={pickRandomCafe}
        disabled={isPicking}
        className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 shrink-0"
      >
        {isPicking ? (
          <>
            <Dices className="w-4 h-4 animate-spin" />
            Mencarikan...
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4" />
            Pilih Acak
          </>
        )}
      </button>
    </div>
  );
}
