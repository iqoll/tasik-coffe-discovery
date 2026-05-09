"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft, ImagePlus, X, Clock } from "lucide-react";
import Link from "next/link";
import type { Cafe, OpeningHours } from "@/types/cafe";
import { MOCK_AREAS } from "@/constants/mock-data";
import { FEATURES } from "@/constants/filters";

interface CafeFormProps {
  initialData?: Cafe;
}

const DEFAULT_OPENING_HOURS: OpeningHours = {
  senin: { open: "08:00", close: "22:00" },
  selasa: { open: "08:00", close: "22:00" },
  rabu: { open: "08:00", close: "22:00" },
  kamis: { open: "08:00", close: "22:00" },
  jumat: { open: "08:00", close: "23:00" },
  sabtu: { open: "09:00", close: "23:00" },
  minggu: { open: "09:00", close: "22:00" },
};

const DAYS = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];

export function CafeForm({ initialData }: CafeFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState<string[]>(
    initialData?.photos?.map(p => p.image_url) || []
  );
  const [features, setFeatures] = useState<string[]>(
    initialData?.features?.map(f => f.id) || []
  );
  const [openingHours, setOpeningHours] = useState<OpeningHours>(
    initialData?.opening_hours || DEFAULT_OPENING_HOURS
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/admin/cafes");
    }, 1000);
  };

  const handleFeatureToggle = (featureId: string) => {
    setFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleDayToggle = (day: string) => {
    setOpeningHours(prev => ({
      ...prev,
      [day]: prev[day] ? null : { open: "08:00", close: "22:00" }
    }));
  };

  const handleTimeChange = (day: string, type: 'open' | 'close', value: string) => {
    setOpeningHours(prev => {
      const currentDay = prev[day];
      if (!currentDay) return prev;
      return {
        ...prev,
        [day]: { ...currentDay, [type]: value }
      };
    });
  };

  const handleAddPhotoMock = () => {
    // Just a mock to add a placeholder image
    setPhotos(prev => [...prev, "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"]);
  };

  const handleRemovePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto pb-20">
      {/* Header Actions */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/cafes" 
            className="p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-stone-600" />
          </Link>
          <h1 className="text-2xl font-bold font-heading text-stone-900">
            {initialData ? "Edit Cafe" : "Tambah Cafe Baru"}
          </h1>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center gap-2 px-6 py-2.5 bg-stone-900 text-white rounded-xl hover:bg-stone-800 transition-colors disabled:opacity-50 font-medium"
        >
          <Save className="w-4 h-4" />
          {isLoading ? "Menyimpan..." : "Simpan"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6">
            <h2 className="text-lg font-semibold text-stone-900 mb-4 border-b border-stone-100 pb-2">Informasi Dasar</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Nama Cafe *</label>
                <input
                  required
                  type="text"
                  name="name"
                  defaultValue={initialData?.name}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all"
                  placeholder="Contoh: Kopi Suung"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Slug (URL)</label>
                <input
                  type="text"
                  name="slug"
                  defaultValue={initialData?.slug}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all font-mono text-sm"
                  placeholder="kopi-suung"
                />
                <p className="text-xs text-stone-500 mt-1.5">Biarkan kosong untuk generate otomatis dari nama</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Area *</label>
                <select
                  required
                  name="area_id"
                  defaultValue={initialData?.area_id}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all bg-white"
                >
                  <option value="">Pilih Area...</option>
                  {MOCK_AREAS.map(area => (
                    <option key={area.id} value={area.id}>{area.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Deskripsi Singkat *</label>
                <textarea
                  required
                  name="short_description"
                  defaultValue={initialData?.short_description}
                  rows={2}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all resize-none"
                  placeholder="Deskripsi singkat yang muncul di card..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Deskripsi Lengkap *</label>
                <textarea
                  required
                  name="full_description"
                  defaultValue={initialData?.full_description}
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all"
                  placeholder="Ceritakan lebih detail tentang cafe ini..."
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6">
            <h2 className="text-lg font-semibold text-stone-900 mb-4 border-b border-stone-100 pb-2">Lokasi & Kontak</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Alamat Lengkap *</label>
                <textarea
                  required
                  name="address"
                  defaultValue={initialData?.address}
                  rows={2}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all resize-none"
                  placeholder="Jl. Contoh No. 123..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Latitude</label>
                  <input
                    type="number"
                    step="any"
                    name="latitude"
                    defaultValue={initialData?.latitude}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all font-mono text-sm"
                    placeholder="-7.327"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Longitude</label>
                  <input
                    type="number"
                    step="any"
                    name="longitude"
                    defaultValue={initialData?.longitude}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all font-mono text-sm"
                    placeholder="108.219"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Google Maps URL</label>
                  <input
                    type="url"
                    name="maps_url"
                    defaultValue={initialData?.maps_url}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all"
                    placeholder="https://maps.google.com/..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Instagram URL</label>
                  <input
                    type="url"
                    name="instagram_url"
                    defaultValue={initialData?.instagram_url}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all"
                    placeholder="https://instagram.com/..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Status */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <h2 className="text-lg font-semibold text-stone-900 mb-4 border-b border-stone-100 pb-2">Status Publikasi</h2>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="is_published"
                defaultChecked={initialData?.is_published ?? true}
                className="w-5 h-5 rounded border-stone-300 text-stone-900 focus:ring-stone-900"
              />
              <span className="text-sm font-medium text-stone-700">Tampilkan ke Publik</span>
            </label>
          </div>

          {/* Jam Operasional */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-stone-100 pb-2">
              <Clock className="w-5 h-5 text-stone-400" />
              <h2 className="text-lg font-semibold text-stone-900">Jam Operasional</h2>
            </div>
            
            <div className="space-y-3">
              {DAYS.map(day => {
                const dayData = openingHours[day];
                const isOpen = dayData !== null;

                return (
                  <div key={day} className="flex items-center justify-between gap-2">
                    <label className="flex items-center gap-2 cursor-pointer w-24">
                      <input
                        type="checkbox"
                        checked={isOpen}
                        onChange={() => handleDayToggle(day)}
                        className="rounded border-stone-300 text-stone-900 focus:ring-stone-900"
                      />
                      <span className="text-sm font-medium capitalize text-stone-700">{day}</span>
                    </label>
                    
                    {isOpen ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="time"
                          value={dayData.open}
                          onChange={(e) => handleTimeChange(day, 'open', e.target.value)}
                          className="px-2 py-1 text-sm border border-stone-200 rounded-md focus:outline-none focus:border-stone-900"
                        />
                        <span className="text-stone-400">-</span>
                        <input
                          type="time"
                          value={dayData.close}
                          onChange={(e) => handleTimeChange(day, 'close', e.target.value)}
                          className="px-2 py-1 text-sm border border-stone-200 rounded-md focus:outline-none focus:border-stone-900"
                        />
                      </div>
                    ) : (
                      <span className="text-sm text-stone-400 italic">Tutup</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fasilitas */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <h2 className="text-lg font-semibold text-stone-900 mb-4 border-b border-stone-100 pb-2">Fasilitas & Fitur</h2>
            <div className="flex flex-wrap gap-2">
              {FEATURES.map(feature => {
                const isSelected = features.includes(feature.id);
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={() => handleFeatureToggle(feature.id)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      isSelected 
                        ? "bg-stone-900 text-white" 
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {feature.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Foto */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-stone-900 mb-4 border-b border-stone-100 pb-2">Foto Cafe</h2>
            
            <div className="grid grid-cols-2 gap-3">
              {photos.map((photo, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => handleRemovePhoto(i)}
                      className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              
              <button
                type="button"
                onClick={handleAddPhotoMock}
                className="aspect-square rounded-xl border-2 border-dashed border-stone-200 flex flex-col items-center justify-center gap-2 text-stone-500 hover:text-stone-900 hover:border-stone-400 hover:bg-stone-50 transition-all"
              >
                <ImagePlus className="w-6 h-6" />
                <span className="text-sm font-medium">Tambah Foto</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
