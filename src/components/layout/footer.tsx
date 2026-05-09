import Link from "next/link";
import { Coffee, MapPin, Link2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                <Coffee className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-lg">
                Tasik Coffee Discovery
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Platform hyperlocal untuk menemukan coffee shop terbaik, tempat nongkrong, dan spot WFC di Tasikmalaya.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Link2 className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Link2 className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Eksplorasi</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/cafes" className="text-muted-foreground hover:text-primary transition-colors">
                  Semua Coffee Shop
                </Link>
              </li>
              <li>
                <Link href="/cafes?feature=work-friendly" className="text-muted-foreground hover:text-primary transition-colors">
                  Work From Cafe
                </Link>
              </li>
              <li>
                <Link href="/cafes?feature=outdoor" className="text-muted-foreground hover:text-primary transition-colors">
                  Outdoor Space
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Area Populer</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/areas/cihideung" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <MapPin className="w-3 h-3" /> Cihideung
                </Link>
              </li>
              <li>
                <Link href="/areas/tamansari" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <MapPin className="w-3 h-3" /> Tamansari
                </Link>
              </li>
              <li>
                <Link href="/areas/mangkubumi" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <MapPin className="w-3 h-3" /> Mangkubumi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Tasik Coffee Discovery. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
