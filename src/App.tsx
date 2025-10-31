import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import Activities from './pages/Activities.tsx'
import AboutUs from './pages/AboutUs.tsx'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-full flex flex-col">
      <NavBar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
