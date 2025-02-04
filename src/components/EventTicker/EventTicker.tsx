import { useEffect, useState } from 'react'

interface Event {
  date: string
  title: string
  location: string
}

const events: Event[] = [
  {
    date: "15 Mayo",
    title: "Noche de Country Latino",
    location: "Madrid"
  },
  {
    date: "22 Mayo",
    title: "Festival Raíces",
    location: "Barcelona"
  },
  {
    date: "30 Mayo",
    title: "Concierto Bajo las Estrellas",
    location: "Madrid"
  },
  {
    date: "5 Junio",
    title: "Alma Morena en Vivo",
    location: "Valencia"
  }
]

const EventTicker = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-1 text-sm">
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...events, ...events].map((event, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-1 px-3 min-w-max"
            >
              <div className="md:hidden">
                <span className="font-semibold">{event.date}</span>
                <span className="mx-1">•</span>
                <span>{event.title}</span>
              </div>

              <div className="hidden md:flex md:items-center md:gap-2">
                <span className="font-semibold">{event.date}</span>
                <span className="mx-1">|</span>
                <span>{event.title}</span>
                <span className="mx-1">•</span>
                <span className="text-white/80">{event.location}</span>
              </div>

              <span className="mx-6 text-orange-200">★</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventTicker
