// Home Component

import { Disco } from '../../components/Disco/Disco'
import logo from '../../assets/foto1.png'
import logo2 from '../../assets/foto2.jpeg'
import logo3 from '../../assets/foto3.jpg'
import pista1 from '../../assets/pista_1.mp3'

import { isMobile } from 'react-device-detect';
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fontsource/playfair-display'; // Instalar con: npm install @fontsource/playfair-display

// Datos de ejemplo para el componente Disco
const songs = [
  {
    id: 1,
    title: "te amo",
    artist: "Alma Morena",
    duration: "3:45",
    cover: logo,
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars3.wav"
  },
  {
    id: 2,
    title: "loca",
    artist: "Alma Morena",
    duration: "3:45",
    cover: logo,
    audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch.wav"
  }
];

const Home = () => {
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
    pauseOnHover: false
  };

  const images = [logo, logo2, logo3];

  return (
    <div className="flex flex-col bg-black text-white font-playfair">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        ></div>
        
        <div className="relative z-20 container mx-auto px-4 pt-8 md:pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-[calc(100vh-80px)]">
            {/* Texto Hero */}
            <div className="flex flex-col items-center lg:items-start pt-8 md:pt-12">
              {/* Carrusel de imágenes */}
              <div className="relative w-full max-w-[150%] md:max-w-[130%] lg:max-w-[140%] -mx-16 md:mx-0 overflow-hidden">
                <div className="relative group">
                  <Slider {...sliderSettings}>
                    {images.map((img, index) => (
                      <div key={index} className="outline-none">
                        <img 
                          src={img}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-auto object-contain 
                                   drop-shadow-[0_0_30px_rgba(255,165,0,0.4)]
                                   group-hover:drop-shadow-[0_0_40px_rgba(255,165,0,0.6)]
                                   group-hover:scale-105 transition-all duration-700"
                        />
                        {/* Efecto de brillo */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/0 via-orange-500/10 to-orange-500/0 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              <div className="text-center lg:text-left mt-8">
                <p className="text-xl md:text-2xl text-gray-300 mb-8 font-playfair italic">
                  Donde el country se encuentra con el alma latina
                </p>
                <div className="flex gap-4">
                  <a href="/musica" className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-orange-500/20">
                    Escuchar Ahora
                  </a>
                  <a href="/nosotros" className="px-8 py-3 border border-orange-500 text-orange-500 rounded-full font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
                    Conócenos
                  </a>
                </div>
              </div>
            </div>

            {/* Reproductor */}
            <div className="w-full">
              <div className="lg:justify-self-end w-full max-w-md mt-8 lg:mt-16">
                {isMobile ? (
                  <div className="w-full h-full bg-black">
                    <Disco songs={songs} />
                  </div>
                ) : (
                  <DeviceFrameset device="iPhone X" color="gold">
                    <div className="w-full h-full bg-black">
                      <Disco songs={songs} />
                    </div>
                  </DeviceFrameset>
                )}
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
              <div key={index} className="bg-black/50 rounded-xl overflow-hidden border border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-orange-500 font-medium mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
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
                <h3 className="font-bold text-lg mb-1 text-white">{release.title}</h3>
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
            Suscríbete a nuestro newsletter para recibir las últimas noticias y fechas de conciertos
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-orange-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all duration-300"
            />
            <button type="submit" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-700 transition-all duration-300">
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
    image: "/images/event1.jpg"
  },
  {
    title: "Festival Raíces",
    date: "22 de Mayo, 2024",
    location: "Plaza Mayor, Barcelona",
    image: "/images/event2.jpg"
  },
  {
    title: "Concierto Bajo las Estrellas",
    date: "30 de Mayo, 2024",
    location: "Jardines del Retiro, Madrid",
    image: "/images/event3.jpg"
  }
];

const releases = [
  {
    title: "Corazón Country",
    year: "2024",
    cover: "/images/album1.jpg"
  },
  {
    title: "Raíces y Botas",
    year: "2023",
    cover: "/images/album2.jpg"
  },
  {
    title: "Alma Latina",
    year: "2023",
    cover: "/images/album3.jpg"
  },
  {
    title: "Entre Dos Mundos",
    year: "2022",
    cover: "/images/album4.jpg"
  }
];

export default Home;