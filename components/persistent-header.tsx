// components/persistent-header.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Volume2, VolumeX, ArrowLeft, Maximize2, Minimize2 } from 'lucide-react'
import { useMusic } from '@/contexts/MusicContext'

interface PersistentHeaderProps {
  showBackButton?: boolean
  backHref?: string
  showLogo?: boolean
}

export function PersistentHeader({ 
  showBackButton = true, 
  backHref,
  showLogo = false 
}: PersistentHeaderProps) {
  const router = useRouter()
  const pathname = usePathname()
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

  const handleBackClick = () => {
    if (backHref) {
      router.push(backHref)
    } else {
      router.back()
    }
  }

  // Jangan tampilkan header di splash screen
  const isSplashScreen = pathname === '/'
  if (isSplashScreen) return null

  if (!mounted) return null

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-4 z-50 pointer-events-none">
      {/* Left Controls - Enhanced Liquid Glass Buttons with Hover Animations */}
      <div className="flex gap-3 pointer-events-auto">
        {/* Fullscreen Button with Hover Animation */}
        <button
          onClick={handleFullscreen}
          className="glass-button group relative overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 active:scale-105"
          aria-label="Toggle fullscreen"
        >
          <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          {isFullscreen ? (
            <Minimize2 className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <Maximize2 className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          )}
        </button>

        {/* Sound Button with Hover Animation - Connected to MusicContext */}
        <button
          onClick={toggleMusic}
          className="glass-button group relative overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-accent/30 active:scale-105"
          aria-label={isPlaying ? "Matikan musik" : "Nyalakan musik"}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          {isPlaying ? (
            <>
              <Volume2 className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              {/* Music Playing Indicator */}
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </>
          ) : (
            <VolumeX className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          )}
        </button>
      </div>

      {/* Right Controls - Logo or Back Button */}
      <div className="flex gap-3 pointer-events-auto">
        {showBackButton ? (
          <button
            onClick={handleBackClick}
            className="glass-button group relative overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-white/20 active:scale-105"
            aria-label="Go back"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-x-0.5" />
          </button>
        ) : null}
        
        {showLogo && (
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-ios-md flex items-center justify-center shadow-lg shadow-primary/20 backdrop-blur-md border border-white/30 hover:shadow-primary/40 transition-all duration-300 hover:scale-110 hover:rotate-12 group cursor-pointer">
            <span className="text-white text-lg font-bold transition-transform duration-300 group-hover:scale-110">⚡</span>
          </div>
        )}
      </div>
    </div>
  )
}