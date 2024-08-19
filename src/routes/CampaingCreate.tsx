import Card from '@/components/card'
import { createFileRoute } from '@tanstack/react-router'
import { Uploadimagens } from '@/components/ui/UploadImagens'
import imagemFundo from '../assets/Image.png'

function CampaingCreate() {
return(
  <>
  <Uploadimagens tiposEnvio='SVG, PNG, JPG ou GIF (max. 1MB)' descricao='ou solte sua foto aqui' enviar='Clique para enviar'/>
  </>
)
  return (
    <div className="p-2">
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
