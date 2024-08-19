import { Card } from '@/components/ui/card'
import { MapPin } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import imagem1 from '@/assets/imagemmao.png'
import imagem2 from '@/assets/Image.png'

const cardData = [
  {
    id: 1,
    imageSrc: imagem1,
    name: 'Ms. Saint-Martin Doranyia Pascal',
    description:
      'In 2022 my husband and I moved to Portugal to follow our simple life dream and build our..',
    location: 'São Paulo, Brasil',
    amount: '€3,182.49',
    progress: 45,
    donationText: 'Donations',
  },
  {
    id: 2,
    imageSrc: imagem2,
    name: 'Huni Kuin Sacred Support',
    description:
      'I tend not to speak too much about this work, perhaps it is to be experienced and not to be explained.',
    location: 'São Paulo, Brasil',
    amount: '4.141 signs',
    progress: 20,
    donationText: 'Petition',
  },
  {
    id: 3,
    imageSrc: imagem2,
    name: 'Huni Kuin Sacred Support',
    description:
      'I tend not to speak too much about this work, perhaps it is to be experienced and not to be explained.',
    location: 'São Paulo, Brasil',
    amount: '4.141 signs',
    progress: 10,
    donationText: 'Petition',
  },
]

export function CardMapa() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-4 max-w-[50%]">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className="flex flex-col gap-4 p-4 rounded-lg shadow-md"
          >
            <div className="flex items-start gap-4">
              <img
                src={card.imageSrc}
                alt={card.name}
                className="w-[150px] h-[150px] rounded-lg object-cover"
                width="150"
                height="150"
                style={{ aspectRatio: '150/150', objectFit: 'cover' }}
              />
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  {card.donationText}
                </div>
                <h3 className="text-xl font-bold text-[#1f2937]">
                  {card.name}
                </h3>
                <p className="text-[#6b7280] text-sm">{card.description}</p>
                <div className="flex items-center justify-between text-[#6b7280] mt-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{card.location}</span>
                  </div>
                  <span className="text-[#1f2937] text-lg font-bold">
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
