import { useEffect, useState } from 'react'

interface Event {
  date: string
  title: string
  location: string
}

const events: Event[] = [
  {
    date: "15 Mayo 2024",
    title: "Noche de Country Latino",
    location: "Teatro Real, Madrid"
  },
  {
    date: "22 Mayo 2024",
    title: "Festival Raíces",
    location: "Plaza Mayor, Barcelona"
  },
  {
    date: "30 Mayo 2024",
    title: "Concierto Bajo las Estrellas",
    location: "Jardines del Retiro, Madrid"
  },
  {
    date: "5 Junio 2024",
    title: "Alma Morena en Vivo",
    location: "Palacio de la Música, Valencia"
  }
]

const EventTicker = () => {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % events.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 z-50">
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-ticker">
          {events.concat(events).map((event, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-4 min-w-max"
            >
              <span className="font-bold">{event.date}</span>
              <span className="mx-2">|</span>
              <span>{event.title}</span>
              <span className="mx-2">•</span>
              <span className="text-white/80">{event.location}</span>
              <span className="mx-8">★</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventTicker 