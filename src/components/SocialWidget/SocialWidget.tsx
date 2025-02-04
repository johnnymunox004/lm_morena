import { useState } from 'react'

interface SocialLink {
  icon: string
  color: string
  url: string
  label: string
}

const SocialWidget = () => {
  const [isOpen, setIsOpen] = useState(false)

  const socialLinks: SocialLink[] = [
    {
      icon: "fab fa-whatsapp",
      color: "bg-[#25D366] hover:bg-[#20BD5C]",
      url: "https://wa.me/+34123456789",
      label: "WhatsApp"
    },
    {
      icon: "fab fa-facebook",
      color: "bg-[#0084FF] hover:bg-[#0078E9]",
      url: "https://www.facebook.com/Almamorenaoficial/?ref=embed_page",
      label: "Messenger"
    },
    {
      icon: "fab fa-youtube",
      color: "bg-[#FF0000] hover:bg-[#E60000]",
      url: "https://www.youtube.com/channel/UC5NxqHGdEJrRNkCGvZmccrA",
      label: "YouTube"
    },
    {
      icon: "fas fa-phone",
      color: "bg-[#00B300] hover:bg-[#009900]",
      url: "tel:+34123456789",
      label: "Llamar"
    }
  ]

  return (
    <>
      {/* Versión Desktop */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              w-14 h-14 rounded-full ${link.color} text-white
              flex items-center justify-center text-2xl
              shadow-lg transform hover:scale-110
              transition-all duration-300 group relative
            `}
          >
            <i className={link.icon}></i>
            
            {/* Tooltip */}
            <span className="
              absolute right-full mr-3 px-3 py-1 
              bg-black/80 text-white text-sm rounded-lg
              whitespace-nowrap opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              pointer-events-none
            ">
              {link.label}
            </span>
          </a>
        ))}
      </div>

      {/* Versión Mobile */}
      <div className="md:hidden">
        {/* Botón flotante de contacto */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            fixed bottom-6 right-6 z-50
            w-16 h-16 rounded-full 
            bg-gradient-to-r from-orange-500 to-red-600
            text-white text-2xl
            flex items-center justify-center
            shadow-lg transform transition-all duration-300
            ${isOpen ? 'rotate-45' : 'hover:scale-110'}
          `}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'}`}></i>
        </button>

        {/* Menú desplegable */}
        <div className={`
          fixed bottom-28 right-6 z-40
          flex flex-col gap-4
          transition-all duration-300 transform
          ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
        `}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                w-14 h-14 rounded-full ${link.color} text-white
                flex items-center justify-center text-2xl
                shadow-lg transform hover:scale-110
                transition-all duration-300 group relative
              `}
              onClick={() => setIsOpen(false)}
            >
              <i className={link.icon}></i>
              
              {/* Label a la izquierda */}
              <span className="
                absolute right-full mr-3 px-3 py-1 
                bg-black/80 text-white text-sm rounded-lg
                whitespace-nowrap opacity-100
                pointer-events-none
              ">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Overlay para cerrar al tocar fuera */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  )
}

export default SocialWidget 