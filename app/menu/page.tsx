//app/menu/page.tsx
'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, BookOpen, FlaskConical, Info, Users, ArrowLeft, Lightbulb, Sun, Wind, Droplets, Zap } from 'lucide-react'

export default function MainMenu() {
  const menuItems = [
    {
      href: '/materi',
      title: 'Materi Pembelajaran',
      description: 'Pelajari berbagai topik energi terbarukan secara mendalam',
      icon: BookOpen,
      decorIcon: Sun,
      emoji: '📚',
      color: 'text-white',
      bg: 'bg-sky-400',
      hoverBg: 'hover:bg-sky-500',
      borderColor: 'border-sky-500',
    },
    {
      href: '/virtual-lab',
      title: 'Virtual Lab',
      description: 'Simulasi interaktif untuk eksperimen energi terbarukan',
      icon: FlaskConical,
      decorIcon: Wind,
      emoji: '🧪',
      color: 'text-white',
      bg: 'bg-green-400',
      hoverBg: 'hover:bg-green-500',
      borderColor: 'border-green-500',
    },
    {
      href: '/petunjuk',
      title: 'Petunjuk Penggunaan',
      description: 'Panduan lengkap cara menggunakan aplikasi ini',
      icon: Info,
      decorIcon: Droplets,
      emoji: '📖',
      color: 'text-white',
      bg: 'bg-amber-400',
      hoverBg: 'hover:bg-amber-500',
      borderColor: 'border-amber-500',
    },
    {
      href: '/profil',
      title: 'Tentang Kami',
      description: 'Berkenalan dengan tim pengembang aplikasi',
      icon: Users,
      decorIcon: Zap,
      emoji: '👥',
      color: 'text-white',
      bg: 'bg-purple-400',
      hoverBg: 'hover:bg-purple-500',
      borderColor: 'border-purple-500',
    }
  ]

  return (
    <div className="min-h-screen relative font-sans">
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
      
      {/* Solid Color Overlay - Softer background */}
      <div className="fixed inset-0 z-0 bg-linear-to-br from-sky-50 via-blue-50 to-purple-50" />

      {/* Decorative Elements - Smaller on mobile */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-20 w-20 sm:w-32 h-20 sm:h-32 bg-yellow-300 rounded-full opacity-15 animate-pulse" />
        <div className="absolute bottom-20 sm:bottom-32 left-5 sm:left-20 w-24 sm:w-40 h-24 sm:h-40 bg-green-300 rounded-full opacity-15" />
        <div className="absolute top-1/2 right-1/4 sm:right-1/3 w-16 sm:w-24 h-16 sm:h-24 bg-blue-300 rounded-full opacity-15" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header Navigation - Mobile Optimized */}
        <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mb-8 sm:mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold text-green-600 bg-white px-6 sm:px-5 py-4 sm:py-3 rounded-full border-4 border-green-400 shadow-lg">
            <Sun className="w-6 h-6 sm:w-5 sm:h-5 text-yellow-500 animate-pulse" />
            <span className="text-base sm:text-base">Menu Utama</span>
          </div>
          <Link href="/" className="group w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-white border-4 border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white font-bold text-lg sm:text-lg px-8 sm:px-6 py-6 sm:py-6 rounded-full shadow-lg transition-all min-h-14 active:scale-95">
              <ArrowLeft className="w-6 h-6 sm:w-5 sm:h-5 mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>
        </nav>

        {/* Hero Section - Larger text on mobile */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-green-500 tracking-tight mb-4 sm:mb-6 drop-shadow-lg leading-tight">
            🌱 Energi <span className="text-yellow-500">Hijau</span> 🌞
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 leading-relaxed font-bold bg-white/90 px-5 sm:px-6 py-4 sm:py-5 rounded-3xl border-4 border-blue-300 shadow-lg">
            Ayo belajar tentang energi terbarukan dengan cara yang seru dan menyenangkan!
          </p>
        </div>

        {/* Menu Grid - Single column on mobile, better spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            const DecorIcon = item.decorIcon
            return (
              <Link key={item.href} href={item.href} className="group relative">
                <div className={`h-full bg-white rounded-3xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 shadow-xl hover:shadow-2xl active:shadow-lg transition-all duration-300 border-4 ${item.borderColor} relative overflow-hidden transform hover:scale-[1.02] active:scale-[0.98] min-h-[180px] sm:min-h-[200px]`}>
                  {/* Decorative Icon Background - Hidden on small mobile */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 opacity-8 sm:opacity-10">
                    <DecorIcon className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      {/* Larger icon box on mobile */}
                      <div className={`p-4 sm:p-5 rounded-2xl ${item.bg} ${item.color} border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                        <span className="text-4xl sm:text-5xl lg:text-4xl">{item.emoji}</span>
                      </div>
                      {/* Arrow indicator - larger on mobile */}
                      <div className={`w-12 h-12 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${item.bg} ${item.color} border-4 border-white shadow-lg group-hover:translate-x-1 transition-all duration-300`}>
                        <ChevronRight className="w-6 h-6 sm:w-6 sm:h-6" />
                      </div>
                    </div>
                    
                    {/* Larger text on mobile */}
                    <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-2 sm:mb-3 leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-semibold">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Tip Section - Better mobile spacing */}
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 px-2">
          <div className="bg-linear-to-br from-yellow-100 to-yellow-50 border-4 border-yellow-400 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 items-start shadow-xl">
            <div className="p-3 sm:p-3 bg-yellow-400 text-white rounded-2xl shrink-0 shadow-md">
              <Lightbulb className="w-8 h-8 sm:w-8 sm:h-8" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-yellow-900 mb-2 sm:mb-2 text-xl sm:text-xl">💡 Tips Belajar</h3>
              <p className="text-yellow-800 text-base sm:text-base leading-relaxed font-semibold">
                Mulailah dengan mempelajari materi dasar sebelum mencoba simulasi di Virtual Lab. Jangan lupa membaca petunjuk penggunaan jika mengalami kesulitan ya! 😊
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
