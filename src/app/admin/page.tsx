"use client";

import { 
  Coffee, Users, MapPin, Plus, Edit2, Trash2, 
  ExternalLink, LogOut, Search, Settings, 
  BarChart3, CheckCircle2, MoreHorizontal 
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MOCK_CAFES } from '@/constants/mock-data';

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Admin Sidebar */}
      <aside className="w-80 bg-stone-900 text-white flex-col hidden lg:flex">
        <div className="p-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-lg">
              <Coffee className="w-5 h-5 text-stone-900" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">Tasik Coffee</span>
          </Link>
        </div>

        <nav className="flex-1 px-6 space-y-2">
          <Link href="/admin" className="flex items-center gap-4 px-6 py-4 bg-white/10 rounded-2xl font-bold text-sm">
            <BarChart3 className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/admin/cafes" className="flex items-center gap-4 px-6 py-4 hover:bg-white/5 rounded-2xl font-bold text-sm text-stone-400 hover:text-white transition-all">
            <Coffee className="w-5 h-5" /> Kelola Cafe
          </Link>
          <Link href="/admin/areas" className="flex items-center gap-4 px-6 py-4 hover:bg-white/5 rounded-2xl font-bold text-sm text-stone-400 hover:text-white transition-all">
            <MapPin className="w-5 h-5" /> Wilayah
          </Link>
          <Link href="/admin/users" className="flex items-center gap-4 px-6 py-4 hover:bg-white/5 rounded-2xl font-bold text-sm text-stone-400 hover:text-white transition-all">
            <Users className="w-5 h-5" /> Pengguna
          </Link>
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
        <header className="h-20 bg-white border-b border-stone-200 flex items-center justify-between px-10 sticky top-0 z-10">
          <h2 className="text-xl font-serif font-bold text-stone-900">Ringkasan Produk</h2>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input 
                type="text" 
                placeholder="Cari data..." 
                className="pl-10 pr-4 py-2 bg-stone-50 border border-stone-100 rounded-xl text-sm focus:outline-none focus:border-stone-300 transition-all"
              />
            </div>
            <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600">
              <Settings className="w-5 h-5" />
            </div>
          </div>
        </header>

        <div className="p-10">
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { label: 'Total Cafe', value: MOCK_CAFES.length.toString(), icon: <Coffee />, color: 'bg-stone-900' },
              { label: 'Total Member', value: '1,204', icon: <Users />, color: 'bg-stone-600' },
              { label: 'Page Views', value: '8.4k', icon: <BarChart3 />, color: 'bg-stone-400' },
              { label: 'Active Areas', value: '5', icon: <MapPin />, color: 'bg-stone-200' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-8 rounded-[32px] border border-stone-200 shadow-sm">
                <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6`}>
                   {stat.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">{stat.label}</p>
                  <h3 className="text-3xl font-serif font-bold text-stone-900">{stat.value}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Table Listing */}
          <div className="bg-white rounded-[40px] border border-stone-200 overflow-hidden shadow-sm">
            <div className="p-8 border-b border-stone-100 flex items-center justify-between">
              <div>
                 <h3 className="text-xl font-bold text-stone-900">Daftar Coffee Shop</h3>
                 <p className="text-sm text-stone-500 font-medium">Data terbaru coffee shop yang terdaftar</p>
              </div>
              <button className="px-6 py-3 bg-stone-900 text-white rounded-2xl font-bold text-sm hover:scale-105 transition-all flex items-center gap-2">
                <Plus className="w-4 h-4" /> Tambah Cafe
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-stone-50 border-b border-stone-100">
                  <tr>
                    <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest">Nama Cafe</th>
                    <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest">Wilayah</th>
                    <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest">Status</th>
                    <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-sm">
                  {MOCK_CAFES.map((cafe) => (
                    <tr key={cafe.id} className="hover:bg-stone-50 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                             {cafe.photos && cafe.photos.length > 0 ? (
                               /* eslint-disable-next-line @next/next/no-img-element */
                               <img src={cafe.photos[0].image_url} alt={cafe.name} className="w-full h-full object-cover" />
                             ) : (
                               <div className="w-full h-full bg-stone-200 flex items-center justify-center">
                                 <Coffee className="w-5 h-5 text-stone-400" />
                               </div>
                             )}
                           </div>
                           <div>
                             <p className="font-bold text-stone-900">{cafe.name}</p>
                             <p className="text-xs text-stone-500">{cafe.created_at.split('T')[0]}</p>
                           </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-bold">
                          {cafe.area?.name || 'Tidak ada'}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="font-bold">{cafe.is_published ? 'Published' : 'Draft'}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-3 text-stone-400">
                          <button className="hover:text-stone-900 p-2 hover:bg-stone-100 rounded-lg transition-all"><Edit2 className="w-4 h-4" /></button>
                          <button className="hover:text-red-500 p-2 hover:bg-red-50 rounded-lg transition-all"><Trash2 className="w-4 h-4" /></button>
                          <button className="hover:text-stone-900 p-2 hover:bg-stone-100 rounded-lg transition-all"><MoreHorizontal className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
