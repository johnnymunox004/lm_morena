import { createContext, useContext, useState, useRef, ReactNode, useEffect, useCallback } from 'react'
import { songs as initialSongsList } from '../data/songs'

interface Song {
  id: number
  title: string
  artist: string
  duration: string
  cover: string
  audioUrl: string
}

interface AudioContextType {
  currentSong: Song
  isPlaying: boolean
  progress: number
  volume: number
  songs: Song[]
  setCurrentSong: (song: Song) => void
  handlePlayPause: () => void
  handleVolumeChange: (newVolume: number) => void
  handleProgressChange: (newProgress: number) => void
  handleNext: () => void
  handlePrevious: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [currentSong, setCurrentSong] = useState<Song>(initialSongsList[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(1)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleNext = useCallback(() => {
    const currentIndex = initialSongsList.findIndex(song => song.id === currentSong.id)
    const nextSong = initialSongsList[(currentIndex + 1) % initialSongsList.length]
    setCurrentSong(nextSong)
  }, [currentSong])

  const handlePrevious = useCallback(() => {
    const currentIndex = initialSongsList.findIndex(song => song.id === currentSong.id)
    const previousSong = initialSongsList[(currentIndex - 1 + initialSongsList.length) % initialSongsList.length]
    setCurrentSong(previousSong)
  }, [currentSong])

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100)
    }
  }, [])

  const handleEnded = useCallback(() => {
    setIsPlaying(false)
    handleNext()
  }, [handleNext])

  const handlePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const handleVolumeChange = useCallback((newVolume: number) => {
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }, [])

  const handleProgressChange = useCallback((newProgress: number) => {
    if (audioRef.current) {
      const time = (newProgress * audioRef.current.duration) / 100
      audioRef.current.currentTime = time
      setProgress(newProgress)
    }
  }, [])

  // Efecto para manejar la reproducción
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong.audioUrl
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error)
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [currentSong, isPlaying])

  // Efecto para los event listeners
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
      audioRef.current.addEventListener('ended', handleEnded)
      return () => {
        audioRef.current?.removeEventListener('timeupdate', handleTimeUpdate)
        audioRef.current?.removeEventListener('ended', handleEnded)
      }
    }
  }, [handleTimeUpdate, handleEnded])

  // Mantener el estado de reproducción entre navegaciones
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error)
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [currentSong, isPlaying])

  // Persistir el estado en localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('audioState')
    if (savedState) {
      const { songId, playing, currentProgress, currentVolume } = JSON.parse(savedState)
      const savedSong = initialSongsList.find(song => song.id === songId)
      if (savedSong) {
        setCurrentSong(savedSong)
        setIsPlaying(playing)
        setProgress(currentProgress)
        setVolume(currentVolume)
      }
    }
  }, [])

  // Guardar estado en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('audioState', JSON.stringify({
      songId: currentSong.id,
      playing: isPlaying,
      currentProgress: progress,
      currentVolume: volume
    }))
  }, [currentSong, isPlaying, progress, volume])

  // Inicializar el elemento de audio
  useEffect(() => {
    audioRef.current = new Audio()
    audioRef.current.volume = volume
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
      }
    }
  }, [])

  return (
    <AudioContext.Provider
      value={{
        currentSong,
        isPlaying,
        progress,
        volume,
        songs: initialSongsList,
        setCurrentSong,
        handlePlayPause,
        handleVolumeChange,
        handleProgressChange,
        handleNext,
        handlePrevious
      }}
    >
      {children}
      {/* Audio element siempre presente */}
      <audio
        ref={audioRef}
        src={currentSong.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
    </AudioContext.Provider>
  )
}

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
} 