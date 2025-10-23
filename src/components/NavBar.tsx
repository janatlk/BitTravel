import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Ship, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToContact = () => {
    if (location.pathname !== '/activities') {
      navigate('/activities')
      // Small delay to ensure the page has loaded before scrolling
      setTimeout(() => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const navLinks = (
    <>
      <NavLink to="/" end className={({ isActive }) => `transition-colors ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}`}>
        Main
      </NavLink>
      <NavLink to="/activities" className={({ isActive }) => `transition-colors ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}`}>
        Activities
      </NavLink>
    </>
  )

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="bg-card/50 border border-border rounded-lg backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 text-lg font-bold text-foreground">
            <Ship size={20} />
            <span>BIT TRAVEL</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks}
          </nav>

          <div className="hidden md:block">
            <button 
              onClick={scrollToContact} 
              className="btn btn-secondary"
            >
              Contact Us
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-dark-border p-4">
            <nav className="flex flex-col gap-4 text-sm font-medium">
              {navLinks}
              <button 
                onClick={scrollToContact} 
                className="btn btn-secondary w-full mt-2"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
