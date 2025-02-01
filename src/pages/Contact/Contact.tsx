import { useState } from 'react'
import foto3 from '../../assets/foto2.jpeg'

const Contact = () => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null)

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      color: 'bg-[#25D366] hover:bg-[#20BD5C]',
      url: 'https://wa.me/+34123456789',
      description: 'Contáctanos directamente por WhatsApp'
    },
    {
      name: 'Facebook',
      icon: 'fab fa-facebook',
      color: 'bg-[#1877F2] hover:bg-[#0D65D9]',
      url: 'https://facebook.com/almamorena',
      description: 'Síguenos en Facebook para más contenido'
    },
    {
      name: 'YouTube',
      icon: 'fab fa-youtube',
      color: 'bg-[#FF0000] hover:bg-[#CC0000]',
      url: 'https://youtube.com/@almamorena',
      description: 'Mira nuestros videos en YouTube'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      color: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:from-[#7232A8] hover:via-[#E31111] hover:to-[#E56B2B]',
      url: 'https://instagram.com/almamorena',
      description: 'Síguenos en Instagram'
    },
    {
      name: 'X (Twitter)',
      icon: 'fab fa-x-twitter',
      color: 'bg-black hover:bg-neutral-900',
      url: 'https://x.com/almamorena',
      description: 'Síguenos en X'
    }
  ]

  return (
    <div className="min-h-screen relative bg-black text-white">
      {/* Fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={foto3} 
          alt="Alma Morena Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-5xl md:text-6xl font-cormorant font-semibold text-center mb-4
                       bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Conecta con Nosotros
          </h1>
          <p className="text-center text-gray-300 mb-16 text-lg">
            Síguenos en nuestras redes sociales y mantente al día con todas nuestras novedades
          </p>

          {/* Grid de redes sociales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-xl ${social.color}
                         transition-all duration-300 transform hover:scale-105
                         hover:shadow-xl hover:shadow-black/30`}
                onMouseEnter={() => setActiveIcon(social.name)}
                onMouseLeave={() => setActiveIcon(null)}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <i className={`${social.icon} text-4xl text-white`}></i>
                    <h3 className="text-xl font-bold text-white">{social.name}</h3>
                  </div>
                  <p className="text-white/80">
                    {social.description}
                  </p>
                  
                  {/* Icono flotante */}
                  <div className={`absolute -right-8 -bottom-8 text-[120px] text-white/10
                                transition-all duration-500 transform
                                ${activeIcon === social.name ? 'scale-110 opacity-20' : 'scale-100 opacity-10'}`}>
                    <i className={social.icon}></i>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Información adicional */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">¿Necesitas más información?</h2>
            <p className="text-gray-300 mb-6">
              También puedes contactarnos directamente por correo o teléfono
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
              <a href="mailto:info@almamorena.com" 
                 className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors">
                <i className="fas fa-envelope"></i>
                info@almamorena.com
              </a>
              <a href="tel:+34123456789" 
                 className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors">
                <i className="fas fa-phone"></i>
                +34 123 456 789
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
