"use client";

import Link from "next/link";
import { Coffee, Menu, Search, MapPin, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Eksplor", href: "/cafes" },
  { name: "Area", href: "/areas" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
              <Coffee className="w-5 h-5" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight hidden sm:inline-block">
              Tasik Coffee Discovery
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            Beranda
          </Link>
          <Link href="/cafes" className="transition-colors hover:text-primary flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            Eksplor
          </Link>
          <Link href="/areas" className="transition-colors hover:text-primary flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Area
          </Link>
          <Link href="/admin/login" className="transition-colors hover:text-primary bg-stone-900 hover:bg-stone-800 rounded-full px-3 py-1.5 text-white hover:text-white flex items-center gap-1.5">
            Admin
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/admin/login"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 bg-stone-900 text-white text-center rounded-xl font-medium hover:bg-stone-800 transition-colors"
              >
                Admin Panel
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
