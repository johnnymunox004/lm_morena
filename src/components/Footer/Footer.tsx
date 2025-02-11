import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold text-white mb-4">
              Alma Morena
            </h3>
            <p className="text-stone-400 mb-6">
              Fusionando la esencia del pop con ritmos latinos, 
              creando una experiencia musical única.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-amber-500 transition-colors">
                <i className="fab fa-spotify"></i>
              </a>
              <a href="#" className="text-2xl hover:text-amber-500 transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-2xl hover:text-amber-500 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl hover:text-amber-500 transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-playfair text-xl text-white mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-amber-500 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/music" className="hover:text-amber-500 transition-colors">
                  Música
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-500 transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-500 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-playfair text-xl text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <i className="far fa-envelope mr-2"></i>
                josedherrera@msn.com
              </li>
              <li>
                <i className="fas fa-phone mr-2"></i>
                +52 4776739436
              </li>
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i>
                owatonna, MN
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-500">
          <p>&copy; {new Date().getFullYear()} Alma Morena. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

