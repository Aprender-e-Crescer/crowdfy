
import Tell from '@/components/ui/Tell'
import Card from '@/components/card'
import { createFileRoute } from '@tanstack/react-router'
import imagemFundo from '../assets/Image.png'

export const Route = createFileRoute('/CampaingCreate')({
 component: CampaingCreate,
})

function CampaingCreate() {
  return(
    <Tell/>
)
  return (
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
        temImagemFundo={true}
      />
    </div>
  )
}
