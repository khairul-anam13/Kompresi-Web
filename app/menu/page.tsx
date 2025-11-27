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
      color: 'text-white',
      bg: 'bg-sky-500',
      hoverBg: 'hover:bg-sky-600',
      borderColor: 'border-sky-600',
    },
    {
      href: '/virtual-lab',
      title: 'Virtual Lab',
      description: 'Simulasi interaktif untuk eksperimen energi terbarukan',
      icon: FlaskConical,
      decorIcon: Wind,
      color: 'text-white',
      bg: 'bg-green-500',
      hoverBg: 'hover:bg-green-600',
      borderColor: 'border-green-600',
    },
    {
      href: '/petunjuk',
      title: 'Petunjuk Penggunaan',
      description: 'Panduan lengkap cara menggunakan aplikasi ini',
      icon: Info,
      decorIcon: Droplets,
      color: 'text-white',
      bg: 'bg-amber-500',
      hoverBg: 'hover:bg-amber-600',
      borderColor: 'border-amber-600',
    },
    {
      href: '/profil',
      title: 'Tentang Kami',
      description: 'Berkenalan dengan tim pengembang aplikasi',
      icon: Users,
      decorIcon: Zap,
      color: 'text-white',
      bg: 'bg-purple-500',
      hoverBg: 'hover:bg-purple-600',
      borderColor: 'border-purple-600',
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
          opacity: 0.15
        }}
      />
      
      {/* Solid Color Overlay */}
      <div className="fixed inset-0 z-0 bg-sky-50" />

      {/* Decorative Elements - Renewable Energy Theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400 rounded-full opacity-20" />
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-green-400 rounded-full opacity-20" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-blue-400 rounded-full opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Navigation */}
        <nav className="flex items-center justify-between mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex items-center gap-3 text-base font-bold text-green-700 bg-white px-5 py-3 rounded-full border-4 border-green-500 shadow-lg">
            <Sun className="w-5 h-5 text-yellow-500 animate-pulse" />
            Menu Utama
          </div>
          <Link href="/" className="group">
            <Button className="bg-white border-4 border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white font-bold text-lg px-6 py-6 rounded-full shadow-lg transition-all">
              <ArrowLeft className="w-5 h-5 mr-2 rotate-180" />
              Kembali
            </Button>
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <h1 className="text-6xl md:text-7xl font-extrabold text-green-600 tracking-tight mb-4 drop-shadow-lg">
            🌱 Energi <span className="text-yellow-500">Hijau</span> 🌞
          </h1>
          <p className="text-2xl text-slate-700 leading-relaxed font-bold bg-white/80 px-6 py-4 rounded-3xl border-4 border-blue-300 shadow-lg">
            Ayo belajar tentang energi terbarukan dengan cara yang seru dan menyenangkan!
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            const DecorIcon = item.decorIcon
            return (
              <Link key={item.href} href={item.href} className="group relative">
                <div className={`h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 ${item.borderColor} relative overflow-hidden transform hover:scale-105`}>
                  {/* Decorative Icon Background */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <DecorIcon className="w-32 h-32" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-5 rounded-2xl ${item.bg} ${item.color} border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-10 h-10" />
                      </div>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bg} ${item.color} border-4 border-white shadow-lg opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300`}>
                        <ChevronRight className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-slate-800 mb-3">
                      {item.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-semibold">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Tip Section */}
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="bg-yellow-100 border-4 border-yellow-400 rounded-3xl p-6 flex gap-4 items-start shadow-xl">
            <div className="p-3 bg-yellow-400 text-white rounded-2xl shrink-0 shadow-md">
              <Lightbulb className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-yellow-900 mb-2 text-xl">💡 Tips Belajar</h3>
              <p className="text-yellow-800 text-base leading-relaxed font-semibold">
                Mulailah dengan mempelajari materi dasar sebelum mencoba simulasi di Virtual Lab untuk pemahaman yang lebih optimal. Jangan lupa membaca petunjuk penggunaan jika mengalami kesulitan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
