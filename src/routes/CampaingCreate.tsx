import Give from '@/components/component/give'
import Choose from '@/components/component/Choose'
import ReturnNext from '@/components/component/ReturnNext'
import Tell from '@/components/component/Tell'
import Card from '@/components/card'
import { createFileRoute } from '@tanstack/react-router'
import { Uploadimagens } from '@/components/UploadImagens'
import imagemFundo from '../assets/Image.png'

export const Route = createFileRoute('/CampaingCreate')({
  component: CampaingCreate,
})

function CampaingCreate() {
  return (
    <>
      <div className="p-2">
        <div>
          <Choose
            tittle="1. Choose your campaign style"
            subtittle="What its about your campaign?"
            donation="Donation"
            petition="Petition"
            descrição1="Create a donation to receive funds"
            descrição2="Create a petition to crowd signatures"
          />
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
        </div>
        <ReturnNext
          circulo1={true}
          circulo2={true}
          circulo3={true}
          next="Next"
          previous="Previous"
        />
      </div>
      <Give
        title="3. Give final details"
        subtitle="What it's about your campaign?"
        label1="Your campaign title"
        label2="Create a deadline for your campaign"
        label3="Goal"
        placeholder1="Write here your beautiful title 🪴"
        placeholder2="dd/mm/aaaa"
        placeholder3="$10.000"
      />
      <Tell />
      <Uploadimagens
        tiposEnvio="SVG, PNG, JPG ou GIF (max. 1MB)"
        descricao="ou solte sua foto aqui"
        enviar="Clique para enviar"
      />
    </>
  )
}
