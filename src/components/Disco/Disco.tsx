import { useState, useRef } from 'react'
import viniloCentro from '../../assets/foto1.png' // Asegúrate de tener esta imagen

interface Song {
  id: number
  title: string
  artist: string
  duration: string
  cover: string
  audioUrl: string
}

interface DiscoProps {
  songs: Song[]
}

export const Disco = ({ songs }: DiscoProps) => {
  const [currentSong, setCurrentSong] = useState<Song>(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(1)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const time = (parseInt(e.target.value) * audioRef.current.duration) / 100
      audioRef.current.currentTime = time
      setProgress(parseInt(e.target.value))
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(progress)
    }
  }

  // Manejador para el cambio de canción
  const handleSongChange = (song: typeof currentSong) => {
    setCurrentSong(song)
  }

  return (
    <div className="max-w-md mx-auto bg-black/95 rounded-xl overflow-hidden shadow-lg border border-orange-500/20">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-orange-500/20 to-red-600/20 p-8">
        {/* Vinilo exterior con overflow controlado */}
        <div className={`absolute inset-[5%] bg-black rounded-full overflow-hidden ${isPlaying ? 'animate-spin-slow' : ''}`}>
          {/* Surcos del vinilo contenidos */}
          <div className="absolute inset-0 bg-[repeating-radial-gradient(circle,transparent,transparent_12px,rgba(255,255,255,0.05)_12px,rgba(255,255,255,0.05)_14px)]"></div>
          {/* Anillos principales */}
          <div className="absolute inset-[15%] ring-1 ring-white/10 rounded-full"></div>
          <div className="absolute inset-[30%] ring-1 ring-white/10 rounded-full"></div>
        </div>

        {/* Borde exterior del vinilo */}
        <div className="absolute inset-[5%] rounded-full border-2 border-black/80"></div>
        
        {/* Brazo del tocadiscos con animación natural */}
        <div className="absolute top-2 right-8 w-32 h-32 z-10">
          <div 
            className={`absolute top-0 right-0 
                       transform-origin-top-right transition-transform duration-700 ease-in-out
                       ${isPlaying ? '-rotate-[25deg]' : 'rotate-[18deg]'}`}
          >
            {/* Base del brazo */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-neutral-800 rounded-full shadow-lg">
              <div className="absolute inset-0 m-auto w-2 h-2 bg-orange-500/50 rounded-full"></div>
            </div>

            {/* Brazo principal */}
            <div className="absolute top-4 right-4 w-36 h-3 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-l-full shadow-md">
              {/* Cabezal */}
              <div className="absolute left-2 top-2 w-4 h-8 bg-neutral-900 rounded-sm transform rotate-[15deg] origin-top">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-orange-500/50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Centro del vinilo con la imagen */}
        <div className="absolute inset-0 m-auto w-[75%] h-[75%] rounded-full overflow-hidden border-8 border-black/80 shadow-2xl">
          <img 
            src={currentSong.cover}
            className={`w-full h-full object-cover ${isPlaying ? 'animate-spin-slow' : ''}`}
          />
          {/* Logo central sobre la imagen */}
          <div className={`absolute inset-0 flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
            <img 
              src={viniloCentro}
              alt="Logo central"
              className="w-4/5 h-4/5 object-contain drop-shadow-[0_0_8px_rgba(255,165,0,0.5)]"
            />
          </div>
          {/* Círculo central */}
          <div className="absolute inset-0 m-auto w-4 h-4 bg-black rounded-full border-2 border-orange-500/20"></div>
        </div>

        {/* Reflejo del vinilo */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
      </div>

      {/* Controles */}
      <div className="p-6 bg-gradient-to-b from-black to-neutral-900">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-white mb-1">{currentSong.title}</h3>
          <p className="text-gray-400">{currentSong.artist}</p>
        </div>

        {/* Barra de progreso */}
        <div className="mb-4">
          <input 
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
        </div>

        {/* Controles principales */}
        <div className="flex justify-center items-center gap-8">
          <button 
            onClick={() => handleSongChange(songs[songs.indexOf(currentSong) - 1] || songs[songs.length - 1])}
            className="text-orange-500 hover:text-orange-400 transition-colors"
          >
            <i className="fas fa-backward text-2xl"></i>
          </button>

          <button 
            onClick={handlePlayPause}
            className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-white hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105"
          >
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-xl ${isPlaying ? '' : 'ml-1'}`}></i>
          </button>

          <button 
            onClick={() => handleSongChange(songs[songs.indexOf(currentSong) + 1] || songs[0])}
            className="text-orange-500 hover:text-orange-400 transition-colors"
          >
            <i className="fas fa-forward text-2xl"></i>
          </button>
        </div>

        {/* Control de volumen */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <button 
            onClick={() => handleVolumeChange({ target: { value: volume === 0 ? 1 : 0 } } as React.ChangeEvent<HTMLInputElement>)}
            className="text-orange-500/80 hover:text-orange-400 transition-colors w-8 h-8 flex items-center justify-center"
          >
            <i className={`fas ${volume === 0 ? 'fa-volume-mute' : volume < 0.5 ? 'fa-volume-down' : 'fa-volume-up'}`}></i>
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-32 h-1 accent-orange-500 bg-gray-700/50 rounded-full
                     hover:accent-orange-400 transition-colors cursor-pointer"
          />
        </div>

        {/* Lista de canciones */}
        <div className="mt-6 space-y-2">
          {songs.map((song) => (
            <button
              key={song.id}
              onClick={() => handleSongChange(song)}
              className={`w-full p-3 flex items-center justify-between rounded-lg transition-all
                ${currentSong.id === song.id 
                  ? 'bg-gradient-to-r from-orange-500/20 to-red-600/20 border-orange-500/40' 
                  : 'hover:bg-white/5'
                } border border-transparent hover:border-orange-500/20`}
            >
              <div className="flex items-center">
                <img src={song.cover} alt={song.title} className="w-10 h-10 rounded-full object-cover" />
                <div className="ml-3 text-left">
                  <div className="text-sm font-medium text-white">{song.title}</div>
                  <div className="text-xs text-gray-400">{song.duration}</div>
                </div>
              </div>
              {currentSong.id === song.id && (
                <div className="text-orange-500">
                  <i className={`fas ${isPlaying ? 'fa-volume-up' : 'fa-play'}`}></i>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <audio 
        ref={audioRef}
        src={currentSong.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  )
}
