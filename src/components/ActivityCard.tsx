import { Link } from 'react-router-dom'
import { Ship, Users, MapPin } from 'lucide-react'

type ActivityCardProps = {
  title: string
  description: string
  icon: 'individual' | 'group' | 'boat' | 'transfer'
}

const IconMap = {
  individual: MapPin,
  group: Users,
  boat: Ship,
  transfer: MapPin,
}

export default function ActivityCard({ title, description, icon }: ActivityCardProps) {
  const Icon = IconMap[icon]
  return (
    <div className="rounded-xl bg-white/80 backdrop-blur border border-black/5 p-5 shadow hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-pastel-mint flex items-center justify-center">
          <Icon className="h-5 w-5 text-pastel-charcoal" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-black/70">{description}</p>
      <div className="mt-4">
        <Link to="#contact" className="btn-primary text-sm">Contact to Book</Link>
      </div>
    </div>
  )
}
