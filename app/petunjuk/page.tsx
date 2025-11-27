'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp, BookOpen, FlaskConical, Video, FileText, ClipboardCheck, Navigation, Sun } from 'lucide-react'
import { useState } from 'react'

export default function Petunjuk() {
  const [openIndex, setOpenIndex] = useState(0)

  const guides = [
    {
      title: '🚀 Mulai Belajar',
      content: 'Klik tombol "Mulai Belajar" di halaman awal untuk masuk ke menu utama. Dari sini Anda dapat memilih kategori pembelajaran yang ingin dipelajari.',
      icon: BookOpen,
      color: 'bg-blue-500'
    },
    {
      title: '📚 Pilih Materi',
      content: 'Di bagian "Materi Pembelajaran", pilih salah satu topik energi terbarukan. Setiap topik memiliki beberapa sub-materi yang perlu dipelajari secara berurutan.',
      icon: FileText,
      color: 'bg-green-500'
    },
    {
      title: '📖 Pelajari Konten',
      content: 'Setiap materi terdiri dari empat bagian: Capaian Pembelajaran, Konten Materi, Video, dan Referensi. Gunakan tombol "Selanjutnya" untuk berpindah antar bagian.',
      icon: Video,
      color: 'bg-purple-500'
    },
    {
      title: '🔬 Virtual Lab',
      content: 'Di Virtual Lab, Anda dapat mensimulasikan pengoperasian berbagai sistem energi terbarukan. Pertama selesaikan tahap perakitan, kemudian jalankan simulasi dengan berbagai parameter.',
      icon: FlaskConical,
      color: 'bg-amber-500'
    },
    {
      title: '✅ Evaluasi',
      content: 'Setelah mempelajari semua materi, buka halaman Evaluasi untuk mengakses Google Form penilaian. Jawab semua pertanyaan dengan jujur untuk mengukur pemahaman Anda.',
      icon: ClipboardCheck,
      color: 'bg-red-500'
    },
    {
      title: '🧭 Navigasi Umum',
      content: 'Gunakan tombol "Kembali" untuk kembali ke halaman sebelumnya. Setiap halaman memiliki breadcrumb untuk membantu navigasi.',
      icon: Navigation,
      color: 'bg-cyan-500'
    }
  ]

  return (
    <div className="min-h-screen relative p-4 md:p-8">
      {/* Background Image with Opacity */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15
        }}
      />
      
      {/* Solid Color Overlay */}
      <div className="fixed inset-0 z-0 bg-sky-50" />

      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400 rounded-full opacity-20" />
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-green-400 rounded-full opacity-20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-600 mb-3 drop-shadow-lg">
              📖 <span className="text-yellow-500">Petunjuk</span> Penggunaan
            </h1>
            <p className="text-xl text-slate-700 font-bold bg-white/80 px-4 py-2 rounded-2xl border-4 border-blue-300 inline-block">
              Panduan lengkap penggunaan platform ini
            </p>
          </div>
          <Link href="/menu">
            <Button className="bg-white border-4 border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white font-bold text-lg px-6 py-4 rounded-full shadow-lg">
              ← Kembali
            </Button>
          </Link>
        </div>

        {/* Guide Items */}
        <div className="space-y-5 mb-8">
          {guides.map((guide, idx) => {
            const Icon = guide.icon
            return (
              <div
                key={idx}
                className="bg-white border-4 border-slate-300 rounded-3xl overflow-hidden shadow-xl"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 ${guide.color} text-white rounded-2xl shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 text-left">{guide.title}</h3>
                  </div>
                  {openIndex === idx ? (
                    <ChevronUp className="w-7 h-7 text-green-600 font-bold" />
                  ) : (
                    <ChevronDown className="w-7 h-7 text-slate-500" />
                  )}
                </button>
                {openIndex === idx && (
                  <div className="px-6 py-5 bg-slate-50 border-t-4 border-slate-200">
                    <p className="text-lg text-slate-700 leading-relaxed font-semibold">{guide.content}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-yellow-100 border-4 border-yellow-400 rounded-3xl p-8 mb-8 shadow-xl">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6 flex items-center gap-3">
            <Sun className="w-8 h-8" />
            ❓ Pertanyaan Umum
          </h2>
          <ul className="space-y-4 text-base text-yellow-900">
            <li className="flex gap-3 bg-white/60 p-4 rounded-2xl border-2 border-yellow-300">
              <span className="text-green-600 font-bold text-xl">Q:</span>
              <span className="font-semibold">Apakah saya perlu menyelesaikan materi secara berurutan?</span>
            </li>
            <li className="flex gap-3 bg-white/60 p-4 rounded-2xl border-2 border-yellow-300 ml-8">
              <span className="text-blue-600 font-bold text-xl">A:</span>
              <span className="font-semibold">Tidak, Anda bebas memilih urutan materi mana yang ingin dipelajari terlebih dahulu.</span>
            </li>
            <li className="flex gap-3 bg-white/60 p-4 rounded-2xl border-2 border-yellow-300">
              <span className="text-green-600 font-bold text-xl">Q:</span>
              <span className="font-semibold">Dapatkah saya mengulangi Virtual Lab berkali-kali?</span>
            </li>
            <li className="flex gap-3 bg-white/60 p-4 rounded-2xl border-2 border-yellow-300 ml-8">
              <span className="text-blue-600 font-bold text-xl">A:</span>
              <span className="font-semibold">Ya, Anda dapat menjalankan simulasi Virtual Lab sebanyak yang Anda inginkan untuk eksperimen yang berbeda.</span>
            </li>
          </ul>
        </div>

        <Link href="/menu">
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-8 rounded-3xl border-4 border-green-600 shadow-xl">
            🏠 Kembali ke Menu Utama
          </Button>
        </Link>
      </div>
    </div>
  )
}
