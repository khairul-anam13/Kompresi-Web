//  app/materi/page.tsx
'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, BookOpen, Sun } from 'lucide-react'

export default function MateriMenu() {
  const topics = [
    {
      slug: 'energi-terbarukan',
      title: 'Energi Listrik Terbarukan',
      subtitle: '(EBT)',
      description: 'Pelajari konsep dasar energi listrik terbarukan',
      icon: '⚡',
      bgColor: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
      borderColor: 'border-yellow-500',
      shadowColor: 'shadow-yellow-200'
    },
    {
      slug: 'panel-surya',
      title: 'Panel Surya',
      subtitle: '',
      description: 'Konversi energi matahari menjadi listrik',
      icon: '☀️',
      bgColor: 'bg-gradient-to-br from-orange-400 to-orange-500',
      borderColor: 'border-orange-500',
      shadowColor: 'shadow-orange-200'
    },
    {
      slug: 'turbin-air',
      title: 'Turbin Air',
      subtitle: '',
      description: 'Memanfaatkan energi aliran air',
      icon: '💧',
      bgColor: 'bg-gradient-to-br from-blue-400 to-blue-500',
      borderColor: 'border-blue-500',
      shadowColor: 'shadow-blue-200'
    },
    {
      slug: 'turbin-angin',
      title: 'Turbin Angin',
      subtitle: '',
      description: 'Memanfaatkan energi angin untuk listrik',
      icon: '💨',
      bgColor: 'bg-gradient-to-br from-cyan-400 to-cyan-500',
      borderColor: 'border-cyan-500',
      shadowColor: 'shadow-cyan-200'
    }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Opacity */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.12
        }}
      />
      
      {/* Solid Color Overlay - Softer gradient */}
      <div className="fixed inset-0 z-0 bg-linear-to-br from-sky-50 via-blue-50 to-indigo-50" />

      {/* Decorative Elements - Responsive sizing */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-20 w-20 sm:w-32 h-20 sm:h-32 bg-yellow-300 rounded-full opacity-15 animate-pulse" />
        <div className="absolute bottom-20 sm:bottom-32 left-5 sm:left-20 w-24 sm:w-40 h-24 sm:h-40 bg-green-300 rounded-full opacity-15" />
        <div className="absolute top-1/2 right-1/4 sm:right-1/3 w-16 sm:w-24 h-16 sm:h-24 bg-blue-300 rounded-full opacity-15" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="w-full sm:w-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-500 mb-3 sm:mb-4 drop-shadow-lg leading-tight">
              📚 Materi <span className="text-yellow-500">Pembelajaran</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 font-bold bg-white/90 px-4 sm:px-5 py-3 sm:py-3 rounded-2xl border-4 border-blue-300 inline-block shadow-lg">
              Pilih topik yang ingin dipelajari
            </p>
          </div>
          <Link href="/menu" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-white border-4 border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white font-bold text-lg px-8 sm:px-6 py-6 sm:py-4 rounded-full shadow-lg transition-all min-h-14 active:scale-95">
              ← Kembali
            </Button>
          </Link>
        </div>

        {/* Topics Grid - Single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-6 sm:mb-8">
          {topics.map((topic) => (
            <Link key={topic.slug} href={`/materi/${topic.slug}`}>
              <div className={`${topic.bgColor} rounded-3xl p-6 sm:p-7 md:p-8 cursor-pointer transform transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-2xl active:shadow-lg text-white group min-h-[200px] sm:min-h-[220px] flex flex-col justify-between border-4 ${topic.borderColor} shadow-xl ${topic.shadowColor}`}>
                <div className="flex items-start justify-between mb-4">
                  {/* Larger emoji on mobile */}
                  <span className="text-6xl sm:text-7xl md:text-8xl drop-shadow-lg transform group-hover:scale-110 transition-transform">{topic.icon}</span>
                  {/* Arrow - always visible on mobile, more prominent */}
                  <div className="bg-white/30 p-3 sm:p-3 rounded-full group-hover:bg-white/40 transition-colors border-2 sm:border-3 border-white shadow-lg">
                    <ChevronRight className="w-7 h-7 sm:w-7 sm:h-7 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div>
                  {/* Larger, clearer text on mobile */}
                  <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 drop-shadow-md leading-tight">
                    {topic.title}
                    {topic.subtitle && <span className="block text-xl sm:text-2xl">{topic.subtitle}</span>}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold opacity-95">{topic.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Access Section - Better mobile layout */}
        <div className="bg-linear-to-br from-green-100 to-green-50 border-4 border-green-400 rounded-3xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-4 sm:mb-5 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="bg-green-500 p-3 sm:p-3 rounded-2xl text-white shadow-lg">
              <BookOpen className="w-7 h-7 sm:w-7 sm:h-7" />
            </div>
            <span>📝 Evaluasi Pembelajaran</span>
          </h3>
          <p className="text-base sm:text-lg text-green-800 mb-5 sm:mb-6 font-semibold leading-relaxed">
            Setelah mempelajari semua materi, ikuti evaluasi untuk mengukur pemahaman kamu dan dapatkan sertifikat! 🏆
          </p>
          <Link href="/evaluasi" className="block sm:inline-block">
            <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold text-lg sm:text-xl py-6 sm:py-6 px-8 sm:px-8 rounded-full border-4 border-green-600 shadow-lg transition-all min-h-14 active:scale-95">
              🎯 Buka Evaluasi →
            </Button>
          </Link>
        </div>

        {/* Navigation Buttons - Full width on mobile */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/menu" className="flex-1">
            <Button className="w-full bg-white border-4 border-purple-400 text-purple-600 hover:bg-purple-400 hover:text-white font-bold text-lg sm:text-xl py-6 rounded-full shadow-lg transition-all min-h-14 active:scale-95">
              🏠 Kembali ke Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
