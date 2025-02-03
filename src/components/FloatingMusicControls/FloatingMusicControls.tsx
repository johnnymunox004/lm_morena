import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa'
import { useAudio } from '../../context/AudioContext'

const FloatingMusicControls = () => {
  const { handlePlayPause, isPlaying, handleNext, handlePrevious } = useAudio()

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 backdrop-blur-lg rounded-full p-4 
                    shadow-lg shadow-orange-500/20 border border-orange-500/20
                    lg:bottom-20 lg:left-8"> {/* Ajustada la posición */}
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrevious}
          className="text-white/80 hover:text-orange-500 transition-colors"
          aria-label="Anterior canción"
        >
          <FaBackward size={20} />
        </button>

        <button
          onClick={handlePlayPause}
          className="w-12 h-12 flex items-center justify-center bg-gradient-to-r 
                   from-orange-500 to-red-600 rounded-full text-white 
                   hover:from-orange-600 hover:to-red-700 transition-all 
                   shadow-lg shadow-orange-500/20"
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>

        <button
          onClick={handleNext}
          className="text-white/80 hover:text-orange-500 transition-colors"
          aria-label="Siguiente canción"
        >
          <FaForward size={20} />
        </button>
      </div>
    </div>
  )
}

export default FloatingMusicControls 