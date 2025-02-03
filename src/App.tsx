import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AudioProvider } from './context/AudioContext'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Music from './pages/Music/Music'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
import FloatingMusicControls from './components/FloatingMusicControls/FloatingMusicControls'

function App() {
  return (
    <AudioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="music" element={<Music />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        <FloatingMusicControls />
      </Router>
    </AudioProvider>
  )
}

export default App
