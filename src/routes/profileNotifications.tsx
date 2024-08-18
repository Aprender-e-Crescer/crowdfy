import Card from '@/components/card'
import { Roadmap } from '@/components/roadmap'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(`/profileNotifications`)({
  component: ProfileNotifications,
})

function ProfileNotifications() {
  return (
    <div className="p-2">
      {/* <Card
        titulo="Help us Teach English for Kids on China Countryside"
        descrição="I need about 9.000 signatures to deliver to my mayor in two weeks and get that grant!
          Check more about our project and if you want to see how we are changing lovely children lifes on China countryside just teaching how they can use the internet."
        nomeUser="Mateus Rodrigues"
        localização="São Paulo, Brazil"
        numerosBarra="4.533/9.000"
        temImagemFundo={false}
      /> */}
    </div>
  )
}
