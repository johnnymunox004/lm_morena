import { useState } from 'react'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import foto3 from '../../assets/foto3.jpg'
import foto4 from '../../assets/foto4.jpg'
import foto5 from '../../assets/foto5.jpg'
import foto6 from '../../assets/foto6.jpg'
import foto7 from '../../assets/foto7.jpg'
import foto8 from '../../assets/foto8.jpg'
import foto9 from '../../assets/foto9.jpg'
import foto10 from '../../assets/foto10.jpg'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: foto3,
      alt: 'Alma Morena en Concierto',
      size: 'large',
    },
    {
      src: foto9,
      alt: 'Momentos Especiales',
      size: 'tall',
    },
    {
      src: foto4,
      alt: 'Presentación en Vivo',
      size: 'square',
    },
    {
      src: foto10,
      alt: 'Entre Bastidores',
      size: 'large',
    },
    {
      src: foto5,
      alt: 'Backstage',
      size: 'tall',
    },
    {
      src: foto6,
      alt: 'Ensayo',
      size: 'square',
    },
    {
      src: foto7,
      alt: 'En el Escenario',
      size: 'large',
    },
    {
      src: foto8,
      alt: 'Momentos Únicos',
      size: 'tall',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-montserrat">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-cormorant font-semibold text-center mb-4 
                     bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Nuestra Historia
        </h1>
        <p className="text-center text-gray-400 mb-12 text-lg font-montserrat">
          Momentos que capturan nuestra esencia
        </p>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer
                         transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                         ${image.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                         ${image.size === 'tall' ? 'row-span-2' : ''}
                         ${image.size === 'square' ? '' : ''}`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/* Overlay con efecto hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            flex items-end p-6">
                <p className="text-white text-lg font-montserrat font-medium transform translate-y-4 
                             group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para vista ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            <img 
              src={selectedImage}
              alt="Vista ampliada"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white text-xl hover:text-orange-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
