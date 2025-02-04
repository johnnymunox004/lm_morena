import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SocialWidget from '../SocialWidget/SocialWidget'
import EventTicker from '../EventTicker/EventTicker'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <EventTicker />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <SocialWidget />
    </div>
  )
}

export default Layout 