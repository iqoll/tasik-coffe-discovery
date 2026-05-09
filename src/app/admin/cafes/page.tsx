"use client";

import {
  Coffee, Plus, Edit2, Trash2,
  Search, Settings, CheckCircle2, MoreHorizontal
} from 'lucide-react';
import Link from 'next/link';
import { MOCK_CAFES } from '@/constants/mock-data';
import { AdminLayout } from '@/components/admin/admin-layout';

export default function AdminCafesPage() {
  return (
    <AdminLayout>
      <header className="h-20 bg-white border-b border-stone-200 flex items-center justify-between px-10 sticky top-0 z-10">
        <h2 className="text-xl font-serif font-bold text-stone-900">Kelola Coffee Shop</h2>
        <div className="flex items-center gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Cari cafe..."
              className="pl-10 pr-4 py-2 bg-stone-50 border border-stone-100 rounded-xl text-sm focus:outline-none focus:border-stone-300 transition-all"
            />
          </div>
          <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600">
            <Settings className="w-5 h-5" />
          </div>
        </div>
      </header>

      <div className="p-10">
        <div className="bg-white rounded-[40px] border border-stone-200 overflow-hidden shadow-sm">
          <div className="p-8 border-b border-stone-100 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-stone-900">Daftar Coffee Shop</h3>
              <p className="text-sm text-stone-500 font-medium">Kelola semua data coffee shop yang ada</p>
            </div>
            <Link href="/admin/cafes/new" className="px-6 py-3 bg-stone-900 text-white rounded-2xl font-bold text-sm hover:scale-105 transition-all flex items-center gap-2">
              <Plus className="w-4 h-4" /> Tambah Cafe
            </Link>
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
                        <Link href={`/admin/cafes/${cafe.id}`} className="hover:text-stone-900 p-2 hover:bg-stone-100 rounded-lg transition-all"><Edit2 className="w-4 h-4" /></Link>
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
    </AdminLayout>
  );
}
