import { useNavigate } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import { useRef } from 'react'
import ContactSection from '../components/ContactSection'

export default function Home() {
  const navigate = useNavigate();
  const activitiesRef = useRef<HTMLDivElement>(null);

  const scrollToActivities = () => {
    if (activitiesRef.current) {
      activitiesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCardClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    navigate('/activities', { state: { selectedCard: index } });
  };
  const highlights = [
    {
      title: "Golden Hour in Prague",
      description: "Experience the city's magical atmosphere at sunset.",
      imageUrl: "/images/Picture1.jpg",
    },
    {
      title: "Historic Architecture",
      description: "Discover centuries of history in every corner.",
      imageUrl: "images/Picture2.jpg",
    },
    {
      title: "Vltava River Cruise",
      description: "See the city's landmarks from a unique perspective.",
      imageUrl: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  return (
    <>
      <header 
        className="min-h-screen flex items-center justify-center text-center text-white relative  no-fixed-bg" 
        style={{
          backgroundImage: 'url(/images/wallpapersden.com_prague-czech-republic-city_3840x2400.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '100vh',
          width: '100%',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter mb-6">
            Explore the Heart of Europe
          </h1>
          <p className="text-xl sm:text-2xl text-secondary mb-10">
            Unforgettable journeys through the historic streets of Prague.
          </p>
          <button 
            onClick={scrollToActivities}
            className="btn btn-primary"
          >
            View All Tours
          </button>
        </div>
      </header>
      <main className="bg-black py-24" ref={activitiesRef}>
        <div className="container mx-auto px-4">
          {/* Showcase Section */}
          <FadeIn>
            <section className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12">Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="card card-hover group relative overflow-hidden text-center cursor-pointer"
                  onClick={(e) => handleCardClick(e, index)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                    <p className="text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            </section>
          </FadeIn>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Tours Section */}
          <FadeIn>
            <section className="text-center">
              <h2 className="text-4xl font-bold mb-4">Our Top Tours</h2>
              <p className="text-xl text-gray-400 mb-12">Discover three unforgettable destinations with BitTravel</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Karlovy Vary",
                    description: "Discover the charm of the Czech Republic's most famous spa town. Walk along colorful colonnades, taste healing mineral springs, and relax in pure luxury.",
                    imageUrl: "/images/Picture3.png"
                  },
                  {
                    title: "Dresden",
                    description: "A city reborn from history — baroque palaces, riverside views, and art that inspires. Perfect for culture lovers and weekend explorers.",
                    imageUrl: "/images/Picture7.jpg"
                  },
                  {
                    title: "Vienna",
                    description: "Elegant, timeless, and full of music. Stroll through royal gardens, visit cozy cafés, and feel the rhythm of classical Vienna.",
                    imageUrl: "/images/Picture9.jpg"
                  }
                ].map((item, index) => (
                  <div 
                    key={`tour-${index}`}
                    className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer h-[500px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-between p-6 z-20 text-left">
                      <div className="flex items-center">
                        <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center border border-white/10">
                          <svg className="w-4 h-4 text-amber-400 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm font-medium text-white">Europe</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-200 mb-6 line-clamp-3">{item.description}</p>
                        <button className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full text-sm transition-all duration-300 transform group-hover:scale-105">
                          Explore More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <ContactSection />
      </footer>
    </>
  )
}
