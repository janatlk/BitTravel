
import FadeIn from '../components/FadeIn'
import ContactSection from '../components/ContactSection'

export default function Activities() {
  const activities = [
    {
      title: "Personalized European Journeys",
      description: "Private tours designed around you. Explore cities like Prague, Vienna, or Dresden at your own pace — with local guides and tailored experiences.",
      imageUrl: "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Shared Adventures Across Europe",
      description: "Join fellow travelers and explore Europe's most fascinating cities together. Experience culture, history, and fun with professional guides and great company.",
      imageUrl: "/images/Picture10.jpg",
    },
    {
      title: "Boat Trips",
      description: "Relaxing river cruises on the Vltava. Enjoy breathtaking views of Prague's skyline, bridges, and historic architecture from the water.",
      imageUrl: "/images/Picture12.avif",
    },
    {
      title: "Transfer Services",
      description: "Comfortable and reliable transfers. Professional drivers, door-to-door service between airport, hotel, and city attractions available 24/7.",
      imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-24">
        <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter mb-4">
            Our Activities
          </h1>
          <p className="text-xl text-secondary">
            Choose from our curated experiences across Europe's most beautiful cities.
          </p>
        </section>

        {/* Activities Grid */}
        <FadeIn>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <div key={index} className="card card-hover group relative overflow-hidden">
                  <img 
                    src={activity.imageUrl} 
                    alt={activity.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>
                    <p className="text-secondary mb-6">{activity.description}</p>
                    <a href="#contact" className="btn btn-secondary">
                      Contact Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Contact Section */}
        <FadeIn>
          <section id="contact" className="max-w-3xl mx-auto py-24">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Get In Touch</h2>
            <div className="card p-8">
              <form className="space-y-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-transparent border-b-2 border-border focus:border-primary outline-none py-3 transition-colors"
                />
                <button type="submit" className="btn btn-primary w-full">
                  Book a Tour
                </button>
              </form>
            </div>
          </section>
        </FadeIn>
        </div>
      </main>
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
