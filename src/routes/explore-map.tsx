import { createFileRoute } from '@tanstack/react-router'
import { HeaderCard } from '@/components/headerCard'
import { CardMapa } from '@/components/Cardmapa'
import { Map } from '@/components/map'
import { SubHeader } from '@/components/subHeader'
import { FiMapPin, FiGrid } from 'react-icons/fi'
import { LuNewspaper } from 'react-icons/lu'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const buttons = [
  {
    title: 'Gallery',
    variant: 'ghost',
    icon: <FiGrid className="text-2xl" />,
    route: '/explore',
  },
  {
    title: 'Maps',
    variant: 'lightYellow',
    icon: <FiMapPin className="text-2xl" />,
    route: '#',
  },
  {
    title: 'Feed',
    variant: 'ghost',
    icon: <LuNewspaper className="text-2xl" />,
    route: '#',
  },
]

const cardData = [
  {
    id: 1,
    imageSrc: '/imagemmao.png',
    name: 'Ms. Saint-Martin Doranyia Pascal',
    description:
      'In 2022 my husband and I moved to Portugal to follow our simple life dream and build our',
    location: 'São Paulo, Brasil',
    amount: '€3,182.49 ',
    moeda: 'euros',
    progress: 45,
    donationText: 'Donations',
  },
  {
    id: 2,
    imageSrc: '/imagem1.png',
    name: 'Huni Kuin Sacred Support',
    description:
      'I tend not to speak too much about this work, perhaps it is to be experienced and not to be explained.',
    location: 'São Paulo, Brasil',
    amount: '4.141 ',
    moeda: ' signs',
    progress: 45,
    donationText: 'Petition',
  },
  {
    id: 3,
    imageSrc: '/imagem1.png',
    name: 'Huni Kuin Sacred Support',
    description:
      'I tend not to speak too much about this work, perhaps it is to be experienced and not to be explained.',
    location: 'São Paulo, Brasil',
    amount: '4.141',
    moeda: ' signs',
    progress: 45,
    donationText: 'Petition',
  },
]

export const Route = createFileRoute('/explore-map')({
  component: Explore,
})

function Explore() {
  return (
    <>   
      <div className="pb-2"></div>
      <SubHeader buttons={buttons} />
      <div className="mt-10 flex flex-col ">
        <div className="flex flex-col md:flex-row gap-4 flex-grow">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="mx-4">
              <HeaderCard />
            </div>
            <CardMapa cardData={cardData} />
            <div className="mx-4">
              <Pagination className="flex items-center justify-center mt-4">
                <PaginationContent className="flex items-center justify-between w-full ">
                  <PaginationItem>
                    <PaginationPrevious href="#" useArrows={true} />
                  </PaginationItem>
                  <PaginationItem className="flex ">
                    <PaginationLink href="#">1</PaginationLink>
                    <PaginationLink href="#">2</PaginationLink>
                    <PaginationLink href="#">3</PaginationLink>
                    <PaginationEllipsis />
                    <PaginationLink href="#">8</PaginationLink>
                    <PaginationLink href="#">9</PaginationLink>
                    <PaginationLink href="#">10</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" useArrows={true} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
          <div className="flex-none w-full md:w-1/2 h-96 md:h-auto">
            <Map />
          </div>
        </div>
      </div>
    </>
  )
}
