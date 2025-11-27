//  app/materi/page.tsx
'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, BookOpen, Sun } from 'lucide-react'

export default function MateriMenu() {
  const topics = [
    {
      slug: 'energi-terbarukan',
      title: 'Energi Listrik Terbarukan (EBT)',
      description: 'Pelajari konsep dasar energi listrik terbarukan',
      icon: '⚡',
      bgColor: 'bg-yellow-400',
      borderColor: 'border-yellow-500'
    },
    {
      slug: 'panel-surya',
      title: 'Panel Surya',
      description: 'Konversi energi matahari menjadi listrik',
      icon: '☀️',
      bgColor: 'bg-orange-400',
      borderColor: 'border-orange-500'
    },
    {
      slug: 'turbin-air',
      title: 'Turbin Air',
      description: 'Memanfaatkan energi aliran air',
      icon: '💧',
      bgColor: 'bg-blue-400',
      borderColor: 'border-blue-500'
    },
    {
      slug: 'turbin-angin',
      title: 'Turbin Angin',
      description: 'Memanfaatkan energi angin untuk listrik',
      icon: '💨',
      bgColor: 'bg-cyan-400',
      borderColor: 'border-cyan-500'
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
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-blue-400 rounded-full opacity-20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-600 mb-3 drop-shadow-lg">
              📚 Materi <span className="text-yellow-500">Pembelajaran</span>
            </h1>
            <p className="text-xl text-slate-700 font-bold bg-white/80 px-4 py-2 rounded-2xl border-4 border-blue-300 inline-block">
              Pilih topik energi terbarukan yang ingin dipelajari
            </p>
          </div>
          <Link href="/menu">
            <Button className="bg-white border-4 border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white font-bold text-lg px-6 py-4 rounded-full shadow-lg">
              ← Kembali
            </Button>
          </Link>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {topics.map((topic) => (
            <Link key={topic.slug} href={`/materi/${topic.slug}`}>
              <div className={`${topic.bgColor} rounded-3xl p-6 md:p-8 cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl text-white group min-h-48 flex flex-col justify-between border-4 ${topic.borderColor} shadow-xl`}>
                <div className="flex items-start justify-between">
                  <span className="text-6xl drop-shadow-lg">{topic.icon}</span>
                  <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors border-2 border-white">
                    <ChevronRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3 drop-shadow-md">{topic.title}</h3>
                  <p className="text-white text-lg font-semibold">{topic.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Access Section */}
        <div className="bg-green-100 border-4 border-green-400 rounded-3xl p-8 mb-8 shadow-xl">
          <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-3">
            <div className="bg-green-500 p-3 rounded-2xl text-white">
              <BookOpen className="w-7 h-7" />
            </div>
            <span>📝 Evaluasi Pembelajaran</span>
          </h3>
          <p className="text-lg text-green-800 mb-6 font-semibold">
            Setelah mempelajari semua materi, ikuti evaluasi untuk mengukur pemahaman Anda dan dapatkan sertifikat!
          </p>
          <Link href="/evaluasi">
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-6 px-8 rounded-full border-4 border-green-600 shadow-lg">
              🎯 Buka Evaluasi →
            </Button>
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/menu" className="flex-1">
            <Button className="w-full bg-white border-4 border-purple-500 text-purple-700 hover:bg-purple-500 hover:text-white font-bold text-xl py-6 rounded-full shadow-lg">
              🏠 Kembali ke Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
