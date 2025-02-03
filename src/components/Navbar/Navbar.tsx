import React from 'react'
import { Link } from 'react-router-dom'

// Navbar Component
const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
      <nav className="bg-black text-white border-b border-neutral-800 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-cormorant text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Alma Morena
            </Link>
  
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-orange-500 transition-colors">
                Inicio
              </Link>
              <Link to="/about" className="hover:text-orange-500 transition-colors">
                Nosotros
              </Link>
              <Link to="/music" className="hover:text-orange-500 transition-colors">
                Música
              </Link>
              <Link to="/gallery" className="hover:text-orange-500 transition-colors">
                Galería
              </Link>
              <Link to="/contact" className="hover:text-orange-500 transition-colors">
                Contacto
              </Link>
            </div>
  
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl hover:text-orange-500 transition-colors"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
  
          <div 
            className={`
              md:hidden absolute top-16 left-0 right-0 
              bg-black border-b border-neutral-800
              transition-all duration-300 ease-in-out
              ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                to="/" 
                className="block hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className="block hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                to="/music" 
                className="block hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Música
              </Link>
              <Link 
                to="/gallery" 
                className="block hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Galería
              </Link>
              <Link 
                to="/contact" 
                className="block hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar


