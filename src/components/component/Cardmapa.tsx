import { Card } from '@/components/ui/card'
import { MapPin } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

interface CardData {
  id: number
  imageSrc: string
  name: string
  description: string
  location: string
  amount: string
  progress: number
  donationText: string
}

interface CardMapaProps {
  cardData: CardData[]
}

export function CardMapa({ cardData }: CardMapaProps) {
  return (
    <div className="flex justify-center p-4 m-4">
      <div className="max-w-full">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className="flex flex-col gap-2 p-3 rounded-lg shadow-md"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src={card.imageSrc}
                alt={card.name}
                className="w-full h-at sm:w-1/3 lg:w-1/4 rounded-lg object-cover"
              />
              <div className="flex-1 flex flex-col gap-1">
                <div className="text-xs sm:text-sm text-green-500">
                  {card.donationText}
                </div>
                <h3 className="text-base sm:text-md md:text-lg font-bold text-[#1f2937]">
                  {card.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#6b7280]">
                  {card.description}
                </p>
                <div className="flex items-center justify-between text-[#6b7280] mt-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs sm:text-sm">{card.location}</span>
                  </div>
                  <span className="text-base sm:text-lg md:text-xl font-bold text-[#1f2937]">
                    {card.amount}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <Progress value={card.progress} className="bg-slate-50" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
