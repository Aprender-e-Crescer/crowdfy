import { createFileRoute } from '@tanstack/react-router'
import Choose from '@/components/choose-action-inition'
import Card from '@/components/card-help'
import ReturnNext from '@/components/return-next-pagination'

export const Route = createFileRoute('/CampaingCreate')({
  component: CampaingCreate,
})

function CampaingCreate() {
  return (
    <>
      <div className="p-2 ">
        <div className="xl:flex gap-10 justify-center ">
          <div>
            <Choose
              title="1. Choose your campaign style"
              subtittle="What its about your campaign?"
              donation="Donation"
              petition="Petition"
              donationDescrition="Create a donation to receive funds"
              petitionDescrition="Create a petition to crowd signatures"
            />
          </div>

          <div className="p-2 flex gap-5 flex-col">
            <Card
              numerosBarra="4.533/9.000"
              localização="São Paulo, Brazil"
              nomeUser="Mateus Rodrigues"
              descrição=" I need about 9.000 signatures to deliver to my
              mayor in two weeks and get that grant! Check more about our
              project and if you want to see how we are changing lovely children
              lifes on China countryside just teaching how they can use the
              internet."
              titulo=" Help us Teach English for Kids on China Countryside"
            />
          </div>
        </div>
        <ReturnNext
          circleLeft
          circleCenter={false}
          circleRigth={false}
          next="Next"
          previous="Previous"
        />
      </div>
    </>
  )
}
