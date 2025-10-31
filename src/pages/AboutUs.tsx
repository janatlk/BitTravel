import FadeIn from '../components/FadeIn'
import ContactSection from '../components/ContactSection'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarsIcon from '@mui/icons-material/Stars';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';

export default function AboutUs() {
  const whyUsPoints = [
    {
      title: 'Local Expertise',
      description: 'Our guides are Prague natives with deep knowledge of the city\'s history, culture, and hidden gems.',
      icon: <LocationOnIcon fontSize="large" />,
    },
    {
      title: 'Personalized Experiences',
      description: 'We tailor each tour to your interests, ensuring a unique and memorable experience.',
      icon: <StarsIcon fontSize="large" />,
    },
    {
      title: 'Small Group Sizes',
      description: 'Enjoy more personalized attention with our small group tours (max 8 people).',
      icon: <GroupsIcon fontSize="large" />,
    },
    {
      title: 'Skip-the-Line Access',
      description: 'Save time with our priority access to major attractions and skip the long lines.',
      icon: <AccessTimeIcon fontSize="large" />,
    },
    {
      title: 'Flexible Booking',
      description: 'Easy rescheduling and 24/7 customer support for your peace of mind.',
      icon: <EventAvailableIcon fontSize="large" />,
    },
    {
      title: 'Sustainable Tourism',
      description: 'We\'re committed to responsible travel that supports local communities.',
      icon: <NaturePeopleIcon fontSize="large" />,
    },
  ]
  
  const values = [
    {
      title: 'Authenticity',
      description: 'We show you the real Prague, not just the tourist spots.',
      icon: <EmojiObjectsIcon fontSize="large" />,
    },
    {
      title: 'Passion',
      description: 'Our love for Prague and its history is at the heart of every tour.',
      icon: <FavoriteIcon fontSize="large" />,
    },
    {
      title: 'Community',
      description: 'We support local businesses and sustainable tourism.',
      icon: <CheckCircleIcon fontSize="large" />,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-24">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <section className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter mb-4">
              Our Story
            </h1>
            <p className="text-xl text-secondary">
              Discover the passion and expertise behind BIT TRAVEL
            </p>
          </section>

          {/* About Section */}
          <FadeIn>
            <section className="max-w-4xl mx-auto mb-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Welcome to BIT TRAVEL</h2>
                  <div className="space-y-4 text-secondary">
                    <p>
                      Founded in 2015, BIT TRAVEL was born from a shared love for Prague's rich history and vibrant culture. 
                      What started as a small group of local guides has grown into a premier tour company known for exceptional 
                      experiences and personalized service.
                    </p>
                    <p>
                      Our mission is simple: to show you the real Prague, beyond the guidebooks. We believe the best travel 
                      experiences come from connecting with locals and discovering hidden gems you won't find in tourist brochures.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop" 
                    alt="Prague city view" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </section>
          </FadeIn>

          {/* Why Us Section */}
          <FadeIn>
            <section className="mb-24">
              <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyUsPoints.map((point, index) => (
                  <div key={index} className="p-6 bg-card rounded-lg hover:bg-card/80 transition-colors">
                    <div className="text-primary mb-4">{point.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                    <p className="text-secondary">{point.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Values Section */}
          <FadeIn>
            <section className="max-w-4xl mx-auto mb-24">
              <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center p-6 bg-card rounded-lg">
                    <div className="text-primary flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-secondary">{value.description}</p>
                  </div>
                ))}
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