//  app/materi/panel-surya/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Target, BookOpen, Video, FileText } from 'lucide-react'
import { useMusic } from '@/contexts/MusicContext'

export default function PanelSuryaPage() {
  const [currentViewIndex, setCurrentViewIndex] = useState(0)
  const { pauseMusic } = useMusic()
  
  const content = {
    title: 'Panel Surya',
    icon: '☀️',
    color: 'orange',
    views: [
      {
        id: 'capaian',
        title: 'Capaian Pembelajaran',
        icon: Target,
        emoji: '🎯',
        content: `Setelah mempelajari bagian ini, siswa mampu:

• Menjelaskan pengertian panel surya.

• Menjelaskan proses kerja panel surya secara sederhana.

• Menyebutkan contoh penggunaan panel surya.

• Mengamati bahwa panel surya bekerja lebih baik saat cahaya matahari terang.

• Menjelaskan keuntungan panel surya untuk lingkungan.`
      },
      {
        id: 'materi',
        title: 'Konten Materi',
        icon: BookOpen,
        emoji: '📖',
        content: `1. Apa itu Panel Surya?

Panel surya adalah alat yang mengubah cahaya matahari menjadi listrik.

Energi dari matahari dapat digunakan untuk menyalakan lampu, kipas, atau alat elektronik lainnya.

2. Cara Kerja Sederhana Panel Surya

• Matahari menyinari panel.
• Panel menangkap cahaya dan mengubahnya menjadi listrik.
• Listrik mengalir ke alat elektronik → misalnya lampu menyala.

Gambaran proses:
☀️ Matahari → 📱 Panel Surya → ⚡ Listrik → 💡 Lampu Menyala

3. Contoh Penggunaan Panel Surya

• Atap rumah (lampu, kipas) 🏠
• Lampu taman atau lampu jalan tenaga surya 🌳
• Kalkulator tenaga surya 🔢

4. Kelebihan dan Kekurangan Panel Surya

Kelebihan:
✅ Energi matahari gratis.
✅ Ramah lingkungan.
✅ Mudah digunakan dan dipasang.

Kekurangan:
⚠️ Hanya bekerja optimal saat ada matahari.
⚠️ Tidak menghasilkan listrik di malam hari tanpa baterai.`
      },
      {
        id: 'video-animasi',
        title: 'Video Animasi - Cara Kerja Panel Surya',
        icon: Video,
        emoji: '🎬',
        videoUrl: '/Video/Cara Kerja Panel Surya.mp4',
        isLocalVideo: true,
        content: `Tonton animasi cara kerja Panel Surya!

Video animasi ini menjelaskan:
• Proses konversi cahaya matahari menjadi listrik
• Komponen-komponen panel surya
• Aliran energi dalam sistem panel surya

Selamat menonton! 🎬`
      },
      {
        id: 'video-edukasi',
        title: 'Video Edukasi - Panel Surya',
        icon: Video,
        emoji: '🎥',
        videoUrl: '/Video/Video Edukasi Matahari.mp4',
        isLocalVideo: true,
        content: `Tonton video edukasi tentang Panel Surya!

Video ini menjelaskan:
• Penjelasan lengkap tentang energi matahari
• Aplikasi panel surya dalam kehidupan sehari-hari
• Manfaat panel surya untuk lingkungan

Selamat menonton! 🎬`
      },
      {
        id: 'referensi',
        title: 'Referensi & Sumber',
        icon: FileText,
        emoji: '📚',
        content: `Sumber Pembelajaran:

1. Mahfud et al. (2025). Implementasi PLTS untuk Masyarakat.

2. Mudhofar (2017). Pembangkit Listrik Energi Panas Matahari.

Gambar ilustrasi:
• https://pin.it/6JYgXDX0Q
• https://pin.it/41rzP3wzh`
      }
    ]
  }

  const colorSchemes: any = {
    orange: {
      bg: 'bg-orange-400',
      border: 'border-orange-500',
      text: 'text-orange-900',
      lightBg: 'bg-orange-100',
      lightBorder: 'border-orange-300'
    }
  }

  const currentView = content.views[currentViewIndex]
  const hasNextView = currentViewIndex < content.views.length - 1
  const hasPrevView = currentViewIndex > 0
  const colors = colorSchemes[content.color]
  const IconComponent = currentView.icon

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

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/materi">
            <Button className="bg-white border-4 border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white font-bold text-lg px-6 py-4 rounded-full shadow-lg mb-4">
              ← Kembali ke Materi
            </Button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-green-600 drop-shadow-lg flex items-center gap-4">
            <span className="text-6xl">{content.icon}</span>
            {content.title}
          </h1>
        </div>

        {/* Progress Indicator */}
        <div className="bg-white border-4 border-purple-300 rounded-3xl p-6 mb-8 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-purple-700">
              📊 Progres: {currentViewIndex + 1} dari {content.views.length}
            </span>
          </div>
          <div className="flex gap-3">
            {content.views.map((view: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setCurrentViewIndex(idx)}
                className={`flex-1 h-4 rounded-full transition-all border-2 ${
                  idx === currentViewIndex
                    ? `${colors.bg} ${colors.border} shadow-md`
                    : 'bg-slate-200 border-slate-300 hover:bg-slate-300'
                }`}
                title={view.title}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className={`bg-white border-4 ${colors.lightBorder} rounded-3xl p-8 md:p-10 mb-8 shadow-xl`}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`${colors.bg} p-4 rounded-2xl text-white border-4 ${colors.border} shadow-lg`}>
              <IconComponent className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-bold text-slate-800">
              {currentView.emoji} {currentView.title}
            </h2>
          </div>
          
          {/* Video Section */}
          {currentView.videoUrl && (
            <div className="mb-6">
              {currentView.isLocalVideo ? (
                // Local Video Player
                <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border-4 border-slate-200">
                  <video
                    key={currentView.videoUrl}
                    className="w-full h-full"
                    controls
                    controlsList="nodownload"
                    onPlay={pauseMusic}
                  >
                    <source src={currentView.videoUrl} type="video/mp4" />
                    Browser Anda tidak mendukung video HTML5.
                  </video>
                </div>
              ) : (
                // YouTube Embed
                <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border-4 border-slate-200" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={currentView.videoUrl}
                    title="Video Pembelajaran"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          )}
          
          <div className={`${colors.lightBg} rounded-2xl p-6 border-2 ${colors.lightBorder}`}>
            <div className="text-slate-700 text-lg whitespace-pre-wrap leading-relaxed font-semibold">
              {currentView.content}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <Button
            onClick={() => setCurrentViewIndex(prev => Math.max(0, prev - 1))}
            disabled={!hasPrevView}
            className={`flex-1 font-bold text-xl py-7 rounded-full border-4 shadow-lg ${
              hasPrevView 
                ? 'bg-white border-slate-400 text-slate-700 hover:bg-slate-400 hover:text-white' 
                : 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-6 h-6 mr-2" />
            Sebelumnya
          </Button>

          {hasNextView && (
            <Button
              className={`flex-1 ${colors.bg} hover:opacity-90 text-white font-bold text-xl py-7 rounded-full border-4 ${colors.border} shadow-lg`}
              onClick={() => setCurrentViewIndex(prev => Math.min(content.views.length - 1, prev + 1))}
            >
              Selanjutnya
              <ChevronRight className="w-6 h-6 ml-2" />
            </Button>
          )}
          
          {!hasNextView && (
            <Link href="/materi" className="flex-1">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-7 rounded-full border-4 border-green-600 shadow-lg">
                ✅ Selesai - Kembali ke Materi
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
