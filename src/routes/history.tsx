import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/card-donate'
import { SectionHeader } from '@/components/Sectionheader'
import Header from '@/components/header'
import { SubHeader } from '@/components/subHeader'
import { LuSettings } from "react-icons/lu"
import { IoIosNotificationsOutline } from "react-icons/io"
import { FaRegHeart } from "react-icons/fa"
import { MdOutlineWatchLater } from "react-icons/md"
import { link } from 'fs'

export const Route = createFileRoute('/history')({
  component: Favorites,
})

function Favorites() {
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
      donationValue: '4,177.20',
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
      variant: 'ghost',
      icon: <LuSettings className='text-2xl' />,
      route: '/explore'
    },
    {
      title: 'Maps',
      variant: 'ghost',
      icon: <IoIosNotificationsOutline className='text-3xl' />,
      route: '/explore-map'
    },
    {
      title: 'Favorites',
      variant: 'ghost',
      icon: <FaRegHeart className='text-2xl' />,
      route: '/favorites'
    },
    {
      title: 'History',
      variant: 'green',
      icon: <MdOutlineWatchLater className='text-2xl' />,
      route: '/history'
    }
  ]
  
  return (
    <>
        <div className="px-4 sm:px-6 md:px-8 lg:px-24">
          <Header />
        </div>
        <div className='border-b-2 border-gray-100 pb-2'></div>
        <div className="pb-2 px-4 sm:px-6 md:px-8 lg:px-24">
          <SubHeader buttons={buttons} />
        </div>
        <div className='border-b-2 border-gray-100'></div>
        <div className="px-4 sm:px-6 md:px-8 lg:px-24">
        <div className='mt-12 mb-24'>
          <SectionHeader title='History'/>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
                isLink={true}
              />
            ))}
          </div>
        </div>
        </div>
    </>
  )
}

