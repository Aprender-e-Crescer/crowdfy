import imagemFundo from '../assets/Image.png'
import { BackgroundButton } from '@/components/backgroundButton'
import Card from '@/components/card'
import { NotificationComponent } from '@/components/NotificationComponent'
import { Roadmap } from '@/components/roadmap'
import { createFileRoute } from '@tanstack/react-router'

export let Route = createFileRoute(`/profileNotifications`)({
  component: ProfileNotifications,
})

function ProfileNotifications() {
  return (
    <div className="flex flex-col gap-36">
      <NotificationComponent
        nome="Matheus Rodrigues"
        text1="is gathering 9000 signs to citys prefecture"
        postedIn="in 20 days"
        text2="“We need to deliver this about of 9.000 signs to the mayor to he approve us as
       international english teacher”"
      />

      <BackgroundButton preço="$53.88" />
      <div cla>
        {/* <Card
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
          temImagemFundo={false}
        /> */}

        <Roadmap />
      </div>
    </div>
  )
}
