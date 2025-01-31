import { useState } from 'react'
import { Link } from 'react-router-dom'

// Navbar Component
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="bg-white shadow-md">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="Alma Morena" className="h-14 w-auto" />
              <span className="font-bold text-2xl bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Alma Morena
              </span>
            </a>
  
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-orange-500 hover:text-orange-400 transition-colors"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
  
            <ul className="hidden md:flex items-center space-x-8">
              {[
                { href: "/", text: "Inicio" },
                { href: "/about", text: "Nosotros" },
                { href: "/music", text: "Música" },
                { href: "/gallery", text: "Galería" },
                { href: "/contact", text: "Contacto" }
              ].map((link) => (
                <li key={link.text}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-all duration-300 text-sm uppercase tracking-wider font-medium"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
            <ul className="flex flex-col space-y-4">
              {[
                { href: "/", text: "Inicio" },
                { href: "/nosotros", text: "Nosotros" },
                { href: "/musica", text: "Música" },
                { href: "/galeria", text: "Galería" },
                { href: "/contacto", text: "Contacto" }
              ].map((link) => (
                <li key={link.text}>
                  <a 
                    href={link.href}
                    className="block text-gray-300 hover:text-orange-500 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar


