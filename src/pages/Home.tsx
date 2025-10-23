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
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Historic Architecture",
      description: "Discover centuries of history in every corner.",
      imageUrl: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1200&auto=format&fit=crop",
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
          {/* Highlights Grid */}
          <FadeIn>
            <section>
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
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <ContactSection />
      </footer>
    </>
  )
}
