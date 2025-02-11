import React, { useState } from 'react'
import foto2 from '../../assets/foto2.jpeg'

const About = () => {
  const bandMembers = [
    {
      role: "Vocalista Principal",
      name: "Nombre del Vocalista",
      photo: "/images/members/member1.jpg",
      description: "Voz principal y líder de Alma Morena"
    },
    {
      role: "Acordeón",
      name: "Nombre del Acordeonista",
      photo: "/images/members/member2.jpg",
      description: "Maestro del acordeón y arreglos musicales"
    },
    {
      role: "Bajo",
      name: "Nombre del Bajista",
      photo: "/images/members/member3.jpg",
      description: "Base rítmica y groove de la banda"
    },
    {
      role: "Batería",
      name: "Nombre del Baterista",
      photo: "/images/members/member4.jpg",
      description: "El corazón del ritmo de Alma Morena"
    },
    {
      role: "Guitarra",
      name: "Nombre del Guitarrista",
      photo: "/images/members/member5.jpg",
      description: "Guitarrista principal y arreglos"
    },
    {
      role: "Percusión",
      name: "Nombre del Percusionista",
      photo: "/images/members/member6.jpg",
      description: "Sabor y ritmo latino en cada canción"
    },
    {
      role: "Teclados",
      name: "Nombre del Tecladista",
      photo: "/images/members/member7.jpg",
      description: "Melodías y armonías que dan vida"
    },
    {
      role: "Coros",
      name: "Nombre del Corista",
      photo: "/images/members/member8.jpg",
      description: "Armonías vocales que complementan"
    },
    {
      role: "Manager",
      name: "Nombre del Manager",
      photo: "/images/members/manager.jpg",
      description: "Guía y dirección de Alma Morena"
    }
  ];

  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const awards = [
    {
      year: "2023",
      title: "Mejor Artista Revelación",
      organization: "Premios de la Música pop Latina",
      description: "Reconocimiento al talento emergente en la fusión de géneros"
    },
    {
      year: "2023",
      title: "Álbum del Año",
      organization: "Latin Music Awards",
      description: "Por el álbum 'Raíces y Botas'"
    },
    {
      year: "2022",
      title: "Mejor Performance en Vivo",
      organization: "Festival Internacional de Música",
      description: "Actuación destacada en el escenario principal"
    }
  ]

  return (
    <div className="bg-black text-white min-h-screen font-montserrat">
      {/* Header de la página */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        <img 
          src={foto2}
          alt="Alma Morena Band" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-cormorant font-semibold mb-4">
              Alma Morena
            </h1>
            <p className="text-xl text-gray-300">Cumbia con Corazón</p>
          </div>
        </div>
      </div>

      {/* Sección de integrantes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-cormorant font-semibold text-center mb-4 
                       bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Nuestros Integrantes
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Conoce a los artistas que dan vida a nuestra música, cada uno aportando su talento único 
            para crear el sonido distintivo de Alma Morena
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bandMembers.map((member, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500/5 to-red-600/5
                         border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300
                         cursor-pointer"
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent 
                              opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className={`absolute inset-x-0 bottom-0 p-6 transform transition-all duration-300
                              ${selectedMember === index ? 'translate-y-0' : 'translate-y-6 group-hover:translate-y-0'}`}>
                  <h3 className="text-xl font-cormorant font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-2">{member.role}</p>
                  <p className={`text-gray-300 text-sm transition-opacity duration-300
                              ${selectedMember === index ? 'opacity-100' : 'opacity-0'}`}>
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de historia */}
      <section className="py-20 bg-gradient-to-b from-black to-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-cormorant font-semibold text-center mb-8 
                       bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Nuestra Historia
          </h2>
          <div className="max-w-3xl mx-auto text-gray-300 space-y-6">
            <p>
              Alma Morena nació de la pasión por la cumbia y el deseo de crear música que haga 
              bailar y sentir a la gente. Desde nuestros inicios, nos hemos dedicado a fusionar 
              ritmos tradicionales con un toque moderno y único.
            </p>
            <p>
              Con cada presentación, buscamos no solo entretener, sino también conectar con 
              nuestro público a través de la música, creando momentos inolvidables y llevando 
              la alegría de la cumbia a todos los rincones.
            </p>
          </div>
        </div>
      </section>

      {/* Nueva sección de Reconocimientos y Premios */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-cormorant font-semibold text-center mb-12
                       bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Reconocimientos y Premios
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-neutral-900 to-black 
                         border border-orange-500/20 rounded-xl p-8
                         hover:border-orange-500/40 transition-all duration-300
                         relative overflow-hidden group"
              >
                {/* Año destacado */}
                <div className="absolute -top-6 -right-6 w-24 h-24 
                             bg-gradient-to-br from-orange-500 to-red-600 
                             rounded-full flex items-center justify-center
                             transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    {award.year}
                  </span>
                </div>

                {/* Contenido del premio */}
                <div className="relative">
                  <h3 className="text-xl font-bold mb-2 text-white">{award.title}</h3>
                  <p className="text-orange-500 mb-4">{award.organization}</p>
                  <p className="text-gray-400">{award.description}</p>
                </div>

                {/* Icono decorativo */}
                <div className="absolute -bottom-8 -left-8 text-[120px] text-white/5
                             transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <i className="fas fa-award"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
