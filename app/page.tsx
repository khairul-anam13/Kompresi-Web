'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { Volume2, VolumeX, Maximize2, Minimize2, ArrowRight, Power } from 'lucide-react'
import { Earth3D } from '@/components/earth-3d'
import Image from 'next/image'
import { useMusic } from '@/contexts/MusicContext'

export default function SplashScreen() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { isPlaying, toggleMusic } = useMusic()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (error) {
      console.error('Fullscreen error:', error)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Control Buttons - Top Right */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 sm:gap-3">
        <button 
          onClick={handleFullscreen}
          className="glass-button group relative overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 active:scale-105 p-2 sm:p-3"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          {isFullscreen ? (
            <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
          )}
        </button>
        
        <button 
          onClick={toggleMusic}
          className="glass-button group relative overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-accent/30 active:scale-105 p-2 sm:p-3"
          aria-label={isPlaying ? "Matikan musik" : "Nyalakan musik"}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              {/* Music Playing Indicator */}
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </>
          ) : (
            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          )}
        </button>
      </div>
      
      <div className="min-h-screen flex flex-col lg:flex-row items-stretch relative z-10">
        {/* Mobile & Tablet: Earth on Top */}
        <div className="flex lg:hidden w-full items-center justify-center p-4 bg-transparent">
          <div className="w-full max-w-[280px] h-[280px] sm:max-w-[320px] sm:h-[320px] flex items-center justify-center">
            <Earth3D />
          </div>
        </div>

        {/* Desktop: Earth on Left Side */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8 bg-transparent">
          <div className="w-full max-w-[400px] h-[400px] xl:max-w-[480px] xl:h-[480px] flex items-center justify-center">
            <Earth3D />
          </div>
        </div>

        {/* Right Side - Content Area */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12 relative">
          {/* Top - Logo Section */}
          <div className="mb-4 lg:mb-0">
            <div className="glass-card rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-lg border border-white/10 backdrop-blur-sm w-fit">
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                {/* Logo UNS */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 relative">
                  <Image
                    src="/Lambang-UNS-.png"
                    alt="Logo UNS"
                    fill
                    className="object-contain drop-shadow-sm"
                    sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                    priority
                  />
                </div>
                
                {/* Logo Hibah */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 relative">
                  <Image
                    src="/logo hibah.png"
                    alt="Logo Hibah"
                    fill
                    className="object-contain drop-shadow-sm"
                    sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                    priority
                  />
                </div>
                
                {/* Primary Horizontal Logo */}
                <div className="flex-shrink-0 w-auto h-8 sm:h-10 lg:h-12 relative"
                  style={{ 
                    minWidth: '80px',
                    maxWidth: '120px'
                  }}>
                  <Image
                    src="/Primary_Horizontal Logo.png"
                    alt="Primary Horizontal Logo"
                    fill
                    className="object-contain drop-shadow-sm"
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Center - Title */}
          <div className="flex-1 flex items-center py-4 lg:py-0">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-stroke text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-tight text-balance">
                Laboratorium <br />
                <span className="text-green-600 text-stroke">Virtual Energi</span> <br />
                Terbarukan
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-lg font-sans leading-relaxed">
                Jelajahi dan pelajari berbagai sumber energi terbarukan melalui simulasi interaktif dan virtual lab yang menarik.
              </p>
            </div>
          </div>

          {/* Bottom - Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 lg:pt-8">
            {/* Mulai Button */}
            <Link href="/menu" className="flex-1 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-ios-md transform group-hover:scale-105 transition-transform duration-300" />
              <Button className="w-full relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white h-12 sm:h-14 text-base sm:text-lg rounded-ios-md font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 active:scale-95 border-0 group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Mulai Eksplorasi
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-ios-md" />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </Link>

            {/* Keluar Button */}
            <Button 
              variant="outline" 
              className="flex-1 h-12 sm:h-14 text-base sm:text-lg rounded-ios-md font-semibold border-2 border-red-300 hover:border-red-400 hover:bg-red-50/10 text-red-600 hover:text-red-700 transition-all duration-300 active:scale-95 group relative overflow-hidden"
              onClick={() => {
                if (typeof window !== 'undefined') window.close()
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Power className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                Keluar
              </span>
              
              {/* Pulse Effect */}
              <div className="absolute inset-0 bg-red-500/10 rounded-ios-md transform scale-0 group-hover:scale-100 transition-transform duration-300" />
              
              {/* Border Glow Effect */}
              <div className="absolute inset-0 border-2 border-red-400/50 rounded-ios-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}