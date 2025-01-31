import { useState } from 'react'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: '/images/gallery/img1.jpg',
      alt: 'Concierto 1',
      size: 'large', // rectangular
    },
    {
      src: '/images/gallery/img2.jpg',
      alt: 'Estudio',
      size: 'square',
    },
    {
      src: '/images/gallery/img3.jpg',
      alt: 'Backstage',
      size: 'tall', // rectangular vertical
    },
    // ... más imágenes
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
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
