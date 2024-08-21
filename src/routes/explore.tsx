import { Map } from '@/components/map'
import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/component/card'
import { SectionHeader } from '@/components/component/SectionHeader'

export const Route = createFileRoute('/explore')({
  component: Explore,
})

function Explore() {
  return (
    <>
      <SectionHeader title="Favorites" /> {}
      
      <div className='flex'>
        <Map />
        <Card 
        imageSrc="/imagemCard.png"
        avatarSrc="/avatar.png"
        avatarName="John Doe"
        cardTitle="tilt"
        cardDescription="Help."
        donationValue="90.00"
        progressValue={75}
      />{}
      </div>
      
    </>
  )
}
