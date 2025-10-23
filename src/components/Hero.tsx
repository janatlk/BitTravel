import { ArrowRight, MessageCircle, Calendar } from 'lucide-react'

type HeroProps = {
  title: string
  subtitle?: string
  backgroundUrl: string
}

export default function Hero({ title, subtitle, backgroundUrl }: HeroProps) {
  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={backgroundUrl} alt="Prague" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue/30 via-white/40 to-pastel-lavender/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-padded py-20 sm:py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow mb-6">
            <div className="h-2 w-2 rounded-full bg-pastel-blue animate-pulse" />
            <span className="text-sm font-semibold text-pastel-charcoal">Premium Prague Tours</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-pastel-charcoal leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-6 text-lg sm:text-xl text-pastel-gray leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary text-base group">
              <MessageCircle className="h-5 w-5" />
              Contact Us
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/activities" className="btn-secondary text-base group">
              <Calendar className="h-5 w-5" />
              View Activities
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-pastel-gray">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-pastel-blue border-2 border-white" />
                <div className="h-8 w-8 rounded-full bg-pastel-mint border-2 border-white" />
                <div className="h-8 w-8 rounded-full bg-pastel-blush border-2 border-white" />
              </div>
              <span className="font-medium">500+ Happy Travelers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
