import { useState } from 'react'
import logo from '../../assets/foto1.png'
import pista2 from '../../assets/pista2.mp3'

const Music = () => {
  const [activeTab, setActiveTab] = useState('singles')
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSongId, setCurrentSongId] = useState<number | null>(null)

  const songs = [
    {
      id: 1,
      title: "Te Amo",
      artist: "Alma Morena",
      duration: "3:45",
      cover: logo,
      audioUrl: pista2,
      releaseDate: "2024",
      description: "Una fusión única de pop y cumbia"
    }
    // Aquí se pueden agregar más canciones después
  ]

  const upcomingShows = [
    {
      date: "15 Mar 2024",
      venue: "Teatro Real",
      location: "Madrid, España",
      ticketLink: "#"
    },
    {
      date: "22 Mar 2024",
      venue: "Sala Caracol",
      location: "Madrid, España",
      ticketLink: "#"
    }
  ]

  const handlePlay = (song: typeof songs[0]) => {
    if (currentAudio) {
      currentAudio.pause()
    }

    if (currentSongId === song.id && isPlaying) {
      setIsPlaying(false)
      setCurrentSongId(null)
      return
    }

    const audio = new Audio(song.audioUrl)
    audio.play()
    setCurrentAudio(audio)
    setIsPlaying(true)
    setCurrentSongId(song.id)

    audio.onended = () => {
      setIsPlaying(false)
      setCurrentSongId(null)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        <img 
          src={logo}
          alt="Alma Morena" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-cormorant font-semibold text-center">
            Nuestra Música
          </h1>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="container mx-auto px-4 py-16">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-orange-500/20 p-1 bg-black/50">
            <button
              onClick={() => setActiveTab('singles')}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'singles' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Singles
            </button>
            <button
              onClick={() => setActiveTab('shows')}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'shows' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Próximos Shows
            </button>
          </div>
        </div>

        {/* Contenido de Singles */}
        {activeTab === 'singles' && (
          <div className="max-w-4xl mx-auto">
            {/* Grid de Canciones */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {songs.map((song) => (
                <div 
                  key={song.id}
                  className="bg-gradient-to-br from-neutral-900 to-black 
                           border border-orange-500/20 rounded-xl overflow-hidden
                           hover:border-orange-500/40 transition-all duration-300
                           group"
                >
                  {/* Imagen con overlay */}
                  <div className="relative aspect-square">
                    <img 
                      src={song.cover}
                      alt={song.title}
                      className="w-full h-full object-cover transition-transform duration-500
                               group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                    
                    {/* Botón de reproducción */}
                    <button
                      onClick={() => handlePlay(song)}
                      className="absolute inset-0 m-auto w-16 h-16 flex items-center justify-center
                               bg-orange-500 rounded-full text-white transform
                               transition-all duration-300 group-hover:scale-110
                               hover:bg-orange-600"
                    >
                      <i className={`fas ${currentSongId === song.id && isPlaying ? 'fa-pause' : 'fa-play'} 
                                  ${currentSongId === song.id && isPlaying ? '' : 'ml-1'}`}></i>
                    </button>
                  </div>

                  {/* Información */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{song.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{song.artist}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-orange-500">{song.duration}</span>
                      <span className="text-gray-500 text-sm">{song.releaseDate}</span>
                    </div>
                    <p className="mt-4 text-gray-400 text-sm">{song.description}</p>
                  </div>
                </div>
              ))}

              {/* Card placeholder para agregar más canciones */}
              <div className="border-2 border-dashed border-orange-500/20 rounded-xl 
                             aspect-square flex items-center justify-center
                             text-orange-500/50 hover:text-orange-500/70 
                             hover:border-orange-500/30 transition-all duration-300">
                <div className="text-center">
                  <i className="fas fa-plus text-4xl mb-4"></i>
                  <p className="text-lg">Próximamente más canciones</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contenido de Shows */}
        {activeTab === 'shows' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {upcomingShows.map((show, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-orange-500/10 to-red-600/10 
                           border border-orange-500/20 rounded-lg p-6 
                           hover:border-orange-500/40 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{show.venue}</h3>
                      <p className="text-gray-400">{show.location}</p>
                      <p className="text-orange-500 mt-2">{show.date}</p>
                    </div>
                    <a 
                      href={show.ticketLink}
                      className="inline-flex items-center justify-center px-6 py-2 
                               bg-gradient-to-r from-orange-500 to-red-600 
                               rounded-full text-white font-medium 
                               hover:from-orange-600 hover:to-red-700 
                               transition-all duration-300"
                    >
                      Comprar Tickets
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Music
