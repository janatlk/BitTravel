import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary">
            &copy; {new Date().getFullYear()} BIT TRAVEL. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-secondary">
            <Link to="/" className="hover:text-primary transition-colors">Main</Link>
            <Link to="/activities" className="hover:text-primary transition-colors">Activities</Link>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
