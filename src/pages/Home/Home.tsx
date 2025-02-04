// Home Component

import { Disco } from "../../components/Disco/Disco";
import logo from "../../assets/foto1.png";
import logo2 from "../../assets/foto2.jpeg";
import logo3 from "../../assets/foto3.jpg";
import pista1 from "../../assets/pista_1.mp3";
import pista2 from "../../assets/pista2.mp3";
import pista3 from "../../assets/pista_3.mp3";

import entrada1 from "../../assets/foto5.jpg"
import entrada2 from "../../assets/foto6.jpg"
import entrada3 from "../../assets/foto7.jpg"

import foto9 from "../../assets/foto9.jpg";
import foto10 from "../../assets/foto10.jpg";

// import { isMobile } from "react-device-detect";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/playfair-display"; // Instalar con: npm install @fontsource/playfair-display
import { songs } from '../../data/songs'  // Importar songs desde el archivo correcto
import { useRef } from 'react'
import { useAudio } from '../../context/AudioContext'
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa' // Instala react-icons si no lo tienes


// Datos de ejemplo para el componente Disco
const songsData = [

  {
    id: 1,
    title: "sera prudente ",
    artist: "Alma Morena",
    duration: "3:45",
    cover: logo,
    audioUrl: pista2,
  },
  {
    id: 2,
    title: "no debes pensar en mi ",
    artist: "Alma Morena",
    duration: "3:45",
    cover: logo,
    audioUrl: pista3,
  },
  {
    id: 3,
    title: "no quiero hacerte daño",
    artist: "Alma Morena",
    duration: "3:45",
    cover: logo,
    audioUrl: pista1,
  },
  {
    id: 4,
    title: "no quiero hacerte daño",
    artist: "Alma Morena",
    duration: "3:45",
    cover: logo,
    audioUrl: pista1,
  }

];

const Home = () => {
  const { handlePlayPause, isPlaying, setCurrentSong } = useAudio()
  const reproductorRef = useRef<HTMLDivElement>(null)

  const handleEscucharClick = () => {
    // Seleccionar la primera canción
    setCurrentSong(songs[0])
    
    // Pequeño delay para asegurar que la canción esté cargada
    setTimeout(() => {
      if (!isPlaying) {
        handlePlayPause()
      }
    }, 100)
    
    // Scroll suave hasta el reproductor
    reproductorRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    })
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };

  const images = [logo, logo2, foto10 ];

  return (
    <div className="flex flex-col bg-black text-white font-playfair">
      {/* Hero Section */}
      <section className="min-h-screen relative lg:h-screen lg:overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
  

        <div className="relative z-20 container mx-auto px-4 py-12 lg:h-full">
          <div className="h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 w-full items-center">
              {/* Texto Hero */}
              <div className="flex flex-col items-center lg:items-start">
                {/* Carrusel de imágenes */}
                <div className="relative w-full overflow-hidden">
                  <div className="relative group mx-auto lg:mx-0 max-w-[90%] lg:max-w-[100%]">
                    <Slider {...sliderSettings}>
                      {images.map((img, index) => (
                        <div key={index} className="outline-none px-4">
                          <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-contain 
                             drop-shadow-[0_0_30px_rgba(255,165,0,0.4)]
                             group-hover:drop-shadow-[0_0_40px_rgba(255,165,0,0.6)]
                             group-hover:scale-105 transition-all duration-700"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-tr from-orange-500/0 via-orange-500/10 to-orange-500/0 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-700
                                      rounded-xl"
                          ></div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>

                <div className="text-center lg:text-left mt-4 lg:mt-6 w-full max-w-[90%] lg:max-w-none">
                  <p className="text-lg md:text-xl text-gray-300 mb-4 font-playfair italic">
                    Donde el country se encuentra con el alma latina
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <button
                      onClick={handleEscucharClick}
                      className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 
                               text-white rounded-full font-medium 
                               hover:from-orange-600 hover:to-red-700 
                               transition-all duration-300 shadow-lg shadow-orange-500/20"
                    >
                      Escuchar Ahora
                    </button>
                    <a
                      href="/contact"
                      className="px-6 py-2 border border-orange-500 text-orange-500 
                               rounded-full font-medium hover:bg-orange-500 
                               hover:text-white transition-all duration-300"
                    >
                      Conócenos
                    </a>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Reproductor y App */}
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full gap-8">
                {/* Lado izquierdo: Reproductor */}
                <div ref={reproductorRef} className="w-full max-w-[250px] lg:max-w-[320px] flex justify-center lg:ml-8 lg:flex-1">
                  <div className="transform scale-[0.85] hover:scale-[0.87] transition-transform duration-300 flex justify-center">
                    <DeviceFrameset device="iPhone X" color="gold">
                      <div className="w-full h-full bg-black">
                        <Disco songs={songs} />
                      </div>
                    </DeviceFrameset>
                  </div>
                </div>

                {/* Lado derecho: Cards y Botones */}
                <div className="flex flex-col gap-4 w-full max-w-[300px] px-4 lg:px-0">
                  {/* Cards en row */}
                  <div className="flex gap-4 justify-center lg:justify-start">
                    {/* Card 1: Música Offline */}
                    <div className="flex items-center gap-2 p-3 bg-black/30 rounded-xl backdrop-blur-sm
                                   border border-orange-500/20 hover:border-orange-500/40 
                                   transition-all duration-300 flex-1">
                      <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center 
                                     text-orange-500">
                        <i className="fas fa-music text-sm"></i>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">Offline</h3>
                        <p className="text-xs text-gray-400">Escucha siempre</p>
                      </div>
                    </div>

                    {/* Card 2: Notificaciones */}
                    <div className="flex items-center gap-2 p-3 bg-black/30 rounded-xl backdrop-blur-sm
                                   border border-orange-500/20 hover:border-orange-500/40 
                                   transition-all duration-300 flex-1">
                      <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center 
                                     text-orange-500">
                        <i className="fas fa-bell text-sm"></i>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">Alertas</h3>
                        <p className="text-xs text-gray-400">No te pierdas nada</p>
                      </div>
                    </div>
                  </div>

                  {/* Botones de store en row */}
                  <div className="flex gap-4 justify-center lg:justify-start">
                    <a href="#" className="flex items-center gap-2 p-3 
                                        bg-gradient-to-br from-neutral-900 to-black
                                        border border-orange-500/20 rounded-xl hover:border-orange-500/40 
                                        transition-all duration-300 flex-1">
                      <i className="fab fa-apple text-xl"></i>
                      <div className="text-left">
                        <div className="text-xs text-gray-400">Descarga en</div>
                        <div className="text-sm font-semibold">App Store</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-2 p-3 
                                        bg-gradient-to-br from-neutral-900 to-black
                                        border border-orange-500/20 rounded-xl hover:border-orange-500/40 
                                        transition-all duration-300 flex-1">
                      <i className="fab fa-google-play text-xl"></i>
                      <div className="text-left">
                        <div className="text-xs text-gray-400">Disponible en</div>
                        <div className="text-sm font-semibold">Play Store</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Eventos Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Próximos Eventos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-black/50 rounded-xl overflow-hidden border border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-orange-500 font-medium mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{event.location}</p>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                    Comprar Entradas
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Releases Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Últimos Lanzamientos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {releases.map((release, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={release.cover}
                    alt={release.title}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <i className="fas fa-play mr-2"></i> Reproducir
                    </button>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1 text-white">
                  {release.title}
                </h3>
                <p className="text-gray-400">{release.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Mantente Conectado
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Suscríbete a nuestro newsletter para recibir las últimas noticias y
            fechas de conciertos
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-orange-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all duration-300"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-700 transition-all duration-300"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

// Sample data
const events = [
  {
    title: "Noche de Country Latino",
    date: "15 de Mayo, 2024",
    location: "Teatro Real, Madrid",
    image: entrada1
  },
  {
    title: "Festival Raíces",
    date: "22 de Mayo, 2024",
    location: "Plaza Mayor, Barcelona",
    image: entrada2
  },
  {
    title: "Concierto Bajo las Estrellas",
    date: "30 de Mayo, 2024",
    location: "Jardines del Retiro, Madrid",
    image: entrada3
  }
]

const releases = [
  {
    title: "valio la pena",
    year: "2024",
    cover: foto9
  },
  {
    title: "no quiero hacerte daño",
    year: "2023",
    cover: foto10
  },
  {
    title: "Alma Latina",
    year: "2023",
    cover: logo2
  },
  {
    title: "Entre Dos Mundos",
    year: "2022",
    cover: logo3
  }
]

export default Home;
