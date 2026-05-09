"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Coffee, ArrowRight, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to Supabase
    if (email && password) {
      router.push('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[40px] p-10 border border-stone-200 shadow-xl shadow-stone-200/50"
      >
        <div className="text-center mb-10">
          <div className="bg-stone-900 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Coffee className="text-white w-8 h-8" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-stone-900 mb-2">Admin Panel</h1>
          <p className="text-stone-500 font-medium tracking-tight">Masuk untuk mengelola data coffee shop</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-3 ml-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-stone-100 focus:border-stone-400 transition-all text-stone-900"
              placeholder="admin@tasikcoffee.id"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-3 ml-1">Password</label>
            <div className="relative">
               <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-stone-100 focus:border-stone-400 transition-all text-stone-900"
                placeholder="••••••••"
              />
              <Lock className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-stone-900 text-white rounded-[24px] font-bold text-lg hover:bg-stone-800 transition-all shadow-lg flex items-center justify-center gap-3"
          >
            Masuk Sekarang <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-stone-400 font-medium">
          Lupa password? Silakan hubungi tim IT Tasik Coffee Discovery.
        </p>
      </motion.div>
    </div>
  );
}
