// app/virtual-lab/page.tsx
'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, Beaker, Zap } from 'lucide-react'

export default function VirtualLabMenu() {
  const labs = [
    {
      id: 'panel-surya',
      title: 'Merakit Panel Surya',
      description: 'Simulasi merakit dan mengoperasikan panel surya',
      icon: '☀️',
      bgColor: 'bg-orange-400',
      borderColor: 'border-orange-500',
      available: true
    },
    {
      id: 'turbin-air',
      title: 'Merakit Turbin Air',
      description: 'Simulasi konstruksi dan operasi turbin air',
      icon: '💧',
      bgColor: 'bg-blue-400',
      borderColor: 'border-blue-500',
      available: false
    },
    {
      id: 'turbin-angin',
      title: 'Merakit Turbin Angin',
      description: 'Simulasi perakitan turbin angin yang efisien',
      icon: '💨',
      bgColor: 'bg-cyan-400',
      borderColor: 'border-cyan-500',
      available: false
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

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/menu">
            <Button className="bg-white border-4 border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white font-bold text-lg px-6 py-4 rounded-full shadow-lg mb-6">
              ← Kembali ke Menu
            </Button>
          </Link>
          
          <div className="bg-white border-4 border-purple-400 rounded-3xl p-6 md:p-8 shadow-xl mb-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-purple-400 p-4 rounded-2xl border-4 border-purple-500 shadow-lg">
                <Beaker className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 drop-shadow-lg">
                🔬 Virtual Lab
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-slate-700 font-semibold">
              Simulasi interaktif energi terbarukan - Rakit dan pelajari cara kerja alat energi! 🌱
            </p>
          </div>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {labs.map((lab) => (
            <div key={lab.id}>
              {lab.available ? (
                <Link href={`/virtual-lab/${lab.id}`}>
                  <div className={`${lab.bgColor} rounded-3xl p-6 md:p-8 cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl text-white group min-h-64 flex flex-col justify-between border-4 ${lab.borderColor} shadow-xl`}>
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-6xl md:text-7xl drop-shadow-lg">{lab.icon}</span>
                      <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors border-2 border-white">
                        <ChevronRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-md">{lab.title}</h3>
                      <p className="text-white text-lg font-semibold leading-relaxed">{lab.description}</p>
                      <div className="mt-4 bg-white/20 rounded-full px-4 py-2 inline-block border-2 border-white">
                        <span className="text-sm font-bold">✅ Tersedia</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className={`${lab.bgColor} opacity-60 rounded-3xl p-6 md:p-8 text-white min-h-64 flex flex-col justify-between border-4 ${lab.borderColor} shadow-xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="text-5xl mb-3">🔒</div>
                      <div className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-full font-bold text-lg border-4 border-yellow-500 shadow-lg">
                        Segera Hadir!
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-6xl md:text-7xl drop-shadow-lg">{lab.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-md">{lab.title}</h3>
                    <p className="text-white text-lg font-semibold leading-relaxed">{lab.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white border-4 border-green-400 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-400 p-3 rounded-2xl border-4 border-green-500 shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-green-600">
              💡 Bagaimana Cara Kerja Virtual Lab?
            </h3>
          </div>
          <ol className="space-y-4">
            <li className="flex gap-4 items-start">
              <div className="bg-yellow-400 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-yellow-500 shadow-md">
                1
              </div>
              <span className="text-lg md:text-xl text-slate-700 font-semibold pt-1">
                Pilih salah satu simulasi dari pilihan di atas 🎯
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="bg-orange-400 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-orange-500 shadow-md">
                2
              </div>
              <span className="text-lg md:text-xl text-slate-700 font-semibold pt-1">
                Ikuti instruksi untuk merakit komponen 🔧
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="bg-blue-400 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-blue-500 shadow-md">
                3
              </div>
              <span className="text-lg md:text-xl text-slate-700 font-semibold pt-1">
                Atur variabel dalam simulasi ⚙️
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="bg-purple-400 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-purple-500 shadow-md">
                4
              </div>
              <span className="text-lg md:text-xl text-slate-700 font-semibold pt-1">
                Amati hasil dan analisis output 📊
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}