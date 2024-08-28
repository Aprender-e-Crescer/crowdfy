import { createFileRoute } from '@tanstack/react-router'
import Choose from '@/components/Choose-campaings-create'
import imagemFundo from '../assets/Image.png'
import Card from '@/components/card-help-campaings-create'
import ReturnNext from '@/components/Return-Next-pagination-campaings-create'

export const Route = createFileRoute('/CampaingCreate')({
  component: CampaingCreate,
})

function CampaingCreate() {
  return (
    <>
      <div className="p-2">
        <div className="md:flex gap-10 justify-center ">
          <div>
            <Choose
              tittle="1. Choose your campaign style"
              subtittle="What its about your campaign?"
              donation="Donation"
              petition="Petition"
              descrição1="Create a donation to receive funds"
              descrição2="Create a petition to crowd signatures"
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
              outraImagemFundo={imagemFundo}
              temImagemFundo
            />
          </div>
        </div>
        <ReturnNext
          circulo1={true}
          circulo2={true}
          circulo3={true}
          next="Next"
          previous="Previous"
        />
      </div>
    </>
  )
}
