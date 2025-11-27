'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { Volume2, VolumeX, Maximize2 } from 'lucide-react'
import { Earth3D } from '@/components/earth-3d'

export default function SplashScreen() {
  const [isMusicOn, setIsMusicOn] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [mounted, setMounted] = useState(false)

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-green-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="min-h-screen flex items-stretch relative z-10">
        {/* Left Side - Visual/Image Area with 3D Earth */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8 relative bg-transparent">
          {/* Gunakan absolute agar tidak terikat layout flex */}
          <div className="absolute inset-0"> {/* Memenuhi ukuran parent lg:w-1/2 */}
            <Earth3D />
          </div>
        </div>

        {/* Right Side - Content Area */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-8 md:p-12 relative">
          {/* Top Controls */}
          <div className="flex justify-between items-start gap-4">
            {/* Left Top - Control Buttons */}
            <div className="flex gap-3">
              <button 
                onClick={handleFullscreen}
                className="glass-button"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsMusicOn(!isMusicOn)}
                className="glass-button"
                aria-label="Toggle music"
              >
                {isMusicOn ? (
                  <Volume2 className="w-5 h-5" />
                ) : (
                  <VolumeX className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Right Top - Logo with iOS style */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-ios-md flex items-center justify-center shadow-lg shadow-primary/20 backdrop-blur-md border border-white/30 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                <span className="text-white text-3xl font-bold">⚡</span>
              </div>
            </div>
          </div>

          {/* Center - Title */}
          <div className="flex-1 flex items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight text-balance">
                Laboratorium <br />
                <span className="text-gradient">Virtual Energi</span> <br />
                Terbarukan
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg font-sans leading-relaxed">
                Jelajahi dan pelajari berbagai sumber energi terbarukan melalui simulasi interaktif dan virtual lab yang menarik.
              </p>
            </div>
          </div>

          {/* Bottom - Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Link href="/menu" className="flex-1">
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground h-14 text-lg rounded-ios-md font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95">
                Mulai
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="flex-1 h-14 text-lg rounded-ios-md font-semibold border-2 border-secondary hover:bg-secondary/10 transition-all active:scale-95"
              onClick={() => {
                if (typeof window !== 'undefined') window.close()
              }}
            >
              Keluar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
