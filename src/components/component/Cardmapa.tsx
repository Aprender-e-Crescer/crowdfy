import { Card } from '@/components/ui/card'
import { MapPin } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import imagem1 from '@/assets/imagemmao.png'

const cardData = [
  {
    id: 1,
    imageSrc: imagem1,
    name: 'Ms. Saint-Martin Doranyia Pascal',
    description:
      'In 2022 my husband and I moved to Portugal to follow our simple life dream and build our',
    location: 'São Paulo, Brasil',
    amount: '€3,182.49',
    progress: 45,
    donationText: 'Donations',
  },
]

export function CardMapa() {
  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className="flex flex-col gap-4 p-4 rounded-lg shadow-md"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src={card.imageSrc}
                alt={card.name}
                className="w-full sm:w-32 md:w-40 lg:w-48 h-auto rounded-lg object-cover"
                width="150"
                height="150"
              />
              <div className="flex-1 flex flex-col gap-2">
                <div className="text-xs sm:text-sm text-green-500">
                  {card.donationText}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1f2937]">
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
            <div className="flex flex-col gap-2 mt-4">
              <Progress value={card.progress} className="bg-slate-50" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
