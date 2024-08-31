import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/card-donate'
import {Pagination,PaginationContent,PaginationEllipsis,PaginationItem,PaginationLink, PaginationNext,PaginationPrevious,} from '@/components/ui/pagination'
import { HeaderCard } from '@/components/headerCard'
import Header from '@/components/header'
import { SubHeader } from '@/components/subHeader'
import { FiMapPin } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { LuNewspaper } from "react-icons/lu";

export const Route = createFileRoute('/explore')({
  component: Explore,
})

function Explore() {
  const cardsData = [
    {
      imageSrc: '/imagemCard1.png',
      avatarSrc: '/avatar.png',
      avatarName: 'Olivia Reyes',
      cardTitle: 'Ms. Saint-Martin Doraniya Pascal',
      cardDescription:
        'In 2022 my husband and I moved to Portugal to follow our simple life dream and build our...',
      donationValue: '3,182.49',
      progressValue: 50,
    },
    {
      imageSrc: '/imagemCard2.png',
      avatarSrc: '/avatar.png',
      avatarName: 'Olivia Reyes',
      cardTitle: 'Educación en Academia de...',
      cardDescription:
        'Hola, mi nombre es Bernal Torres y la educación de mi sobrino Christian Tomas es mi principal preocupación.',
      donationValue: '4,177.20 ',
      progressValue: 50,
    },
    {
      imageSrc: '/imagemCard.png',
      avatarSrc: '/avatar.png',
      avatarName: 'Olivia Reyes',
      cardTitle: 'Aidez la famille Mimba...',
      cardDescription:
        'Je suis Bernard REPER. Ce projet est très important pour moi car cela aide une famille dans le besoin.',
      donationValue: '3,100.50',
      progressValue: 75,
    },
    {
      imageSrc: '/imagemCard4.png',
      avatarSrc: '/avatar.png',
      avatarName: 'Olivia Reyes',
      cardTitle: 'Huni Kuin Sacred Support',
      cardDescription:
        'I tend not to speak too much about this work, perhaps it is to be experienced and not to be explained.',
      donationValue: '5,411.79',
      progressValue: 75,
    },
    {
      imageSrc: '/imagemCard5.png',
      avatarSrc: '/avatar.png',
      avatarName: 'Olivia Reyes',
      cardTitle: 'LETS MAKE THE DIY...',
      cardDescription:
        'Im David Perez aka Chino, who started skating this spot some years ago with my...',
      donationValue: '7,490.26',
      progressValue: 75,
    },
    {
      imageSrc: '/imagemCard6.png',
      avatarSrc: '/avatar.png',
      avatarName: 'Olivia Reyes',
      cardTitle: 'Solar project of Bobryk...',
      cardDescription:
        'In March 2022 the secondary school of Bobrytskiy Lyceum of Kyiv Region...',
      donationValue: '3,427.64',
      progressValue: 75,
    },
    {
      imageSrc: '/imagemCard7.png',
      avatarSrc: '/avatar.png',
      avatarName: 'Olivia Reyes',
      cardTitle: 'Our animals need...',
      cardDescription:
        'For the last 6 years we are saving and collecting animals from different farms...',
      donationValue: '6,691.26',
      progressValue: 75,
    },
    {
      imageSrc: '/imagemCard8.png',
      avatarSrc: '/avatar.png',
      avatarName: 'Olivia Reyes',
      cardTitle: 'Mini-Oven for pick-a-pão',
      cardDescription:
        'I would like nothing more than to continue baking bread for you, to be able to ...',
      donationValue: '9,184.17',
      progressValue: 75,
    },
    {
      imageSrc: '/imagemCard9.png',
      avatarSrc: '/avatar.png',
      avatarName: 'Olivia Reyes',
      cardTitle: 'Streetart stamping for...',
      cardDescription:
        'In the spirit of generosity and compassion, a charitable organization tirelessly...',
      donationValue: '3,182.49',
      progressValue: 75,
    },
    {
      imageSrc: '/imagemCard10.png',
      avatarSrc: '/avatar.png',
      avatarName: 'Olivia Reyes',
      cardTitle: 'Embracing Humanity...',
      cardDescription:
        'Charitable endeavors blossom like flowers of goodwill, as individuals and communities...',
      donationValue: '8,207.41',
      progressValue: 75,
    },
  ]
  const buttons = [
    {
      title: 'Gallery',
      variant: 'green',
      icon: <FiGrid className='text-2xl' />,
      route: '/donate',
    },
    {
      title: 'Maps',
      variant: 'ghost',
      icon: <FiMapPin className='text-2xl' />,
      route: '/donate',
    },
    {
      title: 'Feed',
      variant: 'ghost',
      icon: <LuNewspaper className='text-2xl' />,
      route: '/donate',
    },
  ]
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 lg:px-24">
        <Header />
        <SubHeader buttons={buttons} />
        <HeaderCard />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              avatarSrc={card.avatarSrc}
              avatarName={card.avatarName}
              cardTitle={card.cardTitle}
              cardDescription={card.cardDescription}
              donationValue={card.donationValue}
              progressValue={card.progressValue}
              type={'default'}
              level={''}
              experience={''}
              avatarDescription={''}
            />
          ))}
        </div>
        <Pagination className="mt-6">
          <PaginationContent className="flex items-center justify-between w-full border-t border-gray-300 p-5">
            <PaginationItem>
              <PaginationPrevious href="#" useArrows={true} />
            </PaginationItem>
            <PaginationItem className="flex">
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
    </>
  )
}
