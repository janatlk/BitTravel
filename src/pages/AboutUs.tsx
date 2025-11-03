import { FaGlobe, FaHeart, FaMapMarkedAlt } from 'react-icons/fa';

export default function AboutUs() {
  const qualities = [
    {
      icon: <FaGlobe className="text-3xl text-amber-400 mb-4" />,
      title: 'Global Reach',
      description: 'Explore over 50+ destinations worldwide with our carefully curated travel experiences.'
    },
    {
      icon: <FaHeart className="text-3xl text-amber-400 mb-4" />,
      title: 'Passionate Team',
      description: 'Our travel experts live and breathe adventure, ensuring every trip is extraordinary.'
    },
    {
      icon: <FaMapMarkedAlt className="text-3xl text-amber-400 mb-4" />,
      title: 'Unique Itineraries',
      description: 'Discover hidden gems and local secrets with our handcrafted travel routes.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-amber-400">Story</span>
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Creating unforgettable journeys since 2020
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who We <span className="text-amber-400">Are</span>
            </h2>
            <div className="space-y-4 text-gray-400">
              <p className="leading-relaxed">
                At BitTravel, we believe that travel is not just about visiting new places, 
                but about creating stories that last a lifetime. Founded by a team of passionate 
                travelers, we set out to redefine the way people experience the world.
              </p>
              <p className="leading-relaxed">
                Our mission is to connect you with authentic experiences that go beyond the 
                typical tourist path. We carefully design each journey to immerse you in the 
                local culture, cuisine, and natural beauty of your chosen destination.
              </p>
              <p className="leading-relaxed">
                Whether you're seeking adventure, relaxation, or cultural discovery, 
                we're here to make your travel dreams a reality.
              </p>
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
            <img 
              src="/images/Picture10.jpg" 
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Qualities Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-amber-400">Choose Us</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {qualities.map((quality, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 p-8 rounded-xl text-center transform transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center">
                  {quality.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{quality.title}</h3>
                <p className="text-gray-400">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}