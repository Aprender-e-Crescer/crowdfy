
import { Map } from '@/components/map'
import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/component/card'
import { SectionHeader } from '@/components/component/Sectionheader'
import { CardMapa } from '@/components/component/Cardmapa'
import { HeaderCard } from '@/components/headerCard'
import Footer from '@/components/ui/footer'
export const Route = createFileRoute('/explore')({
  component: Explore,
})

function Explore() {
  return (
    <>
      <SectionHeader title="Favorites" /> {}
      
      <div className='flex'>
      <HeaderCard/>
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
      
      <CardMapa/>
      <Footer />
      
    </>
  )
}
