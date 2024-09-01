import { createFileRoute } from '@tanstack/react-router'
import { HeaderCard } from '@/components/headerCard'
import { CardMapa } from '@/components/Cardmapa'
import { Map } from '@/components/map'
import Header from '@/components/header'
import { SubHeader } from '@/components/subHeader'
import { FiMapPin } from 'react-icons/fi'
import { FiGrid } from 'react-icons/fi'
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
    icon: <FiGrid className='text-2xl' />,
    route: '/donate'
  },
  {
    title: 'Maps',
    variant: 'green',
    icon: <FiMapPin className='text-2xl' />,
    route: '/donate'
  },
  {
    title: 'Feed',
    variant: 'ghost',
    icon: <LuNewspaper className='text-2xl' />,
    route: '/donate'
  }
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
    <div>
      <div className='px-4 sm:px-6 md:px-8 lg:px-24'>
        <Header /> 
      </div>     
      <div>
        <div className='border-b-2 border-gray-100 pb-2'></div>
      </div>
      <div className='pb-2 px-4 sm:px-6 md:px-8 lg:px-24'>
        <SubHeader buttons={buttons} />
      </div>
      <div>
        <div className='border-b-2 border-gray-100 mb-8'></div>
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col md:flex-row gap-4 flex-grow">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className='mx-4'>
              <HeaderCard />
            </div>
            <CardMapa cardData={cardData} />
            <div className='mx-4'>
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
    </div>
  )
}
