"use client";

import {
  Coffee, Users, MapPin, LogOut, BarChart3
} from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: BarChart3 },
    { name: 'Kelola Cafe', href: '/admin/cafes', icon: Coffee },
    { name: 'Wilayah', href: '/admin/areas', icon: MapPin },
    { name: 'Pengguna', href: '/admin/users', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Admin Sidebar */}
      <aside className="w-80 bg-stone-900 text-white flex-col hidden lg:flex shrink-0 min-h-screen sticky top-0">
        <div className="p-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-lg">
              <Coffee className="w-5 h-5 text-stone-900" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">Tasik Coffee</span>
          </Link>
        </div>

        <nav className="flex-1 px-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
            return (
              <Link 
                key={item.name}
                href={item.href} 
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all ${
                  isActive 
                    ? 'bg-white/10 text-white' 
                    : 'text-stone-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-5 h-5" /> {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-10 border-t border-stone-800">
          <button
            onClick={() => router.push('/admin/login')}
            className="flex items-center gap-4 text-stone-400 font-bold text-sm hover:text-red-400 transition-colors"
          >
            <LogOut className="w-5 h-5" /> Keluar Panel
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
