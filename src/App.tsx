import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { SocialWidget } from './components/SocialWidget/SocialWidget'
import { AudioProvider } from './context/AudioContext'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Music from './pages/Music/Music'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <AudioProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/music" element={<Music />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <SocialWidget />
        </div>
      </Router>
    </AudioProvider>
  )
}

export default App
