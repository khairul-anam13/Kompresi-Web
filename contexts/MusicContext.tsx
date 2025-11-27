// contexts/MusicContext.tsx
'use client'

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react'

interface MusicContextType {
  isPlaying: boolean
  toggleMusic: () => void
  pauseMusic: () => void
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/Aylex - Happy Day (freetouse.com).mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.35 // 35% volume

    // Try to autoplay when component mounts
    const playAudio = async () => {
      try {
        await audioRef.current?.play()
        setIsPlaying(true)
      } catch (error) {
        // Autoplay was prevented, user needs to interact first
        console.log('Autoplay prevented, waiting for user interaction')
      }
    }

    playAudio()

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const pauseMusic = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic, pauseMusic }}>
      {children}
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider')
  }
  return context
}
