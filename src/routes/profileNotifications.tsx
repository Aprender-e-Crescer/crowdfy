import imagemFundo from '../assets/Image.png'
import { BackgroundButton } from '@/components/backgroundButton'
import Card from '@/components/card'
import { NotificationComponent } from '@/components/NotificationComponent'
import { Roadmap } from '@/components/roadmap'
import { FundCampaing } from '@/components/ui/Fund-Campaing'
import { createFileRoute } from '@tanstack/react-router'

export let Route = createFileRoute(`/profileNotifications`)({
  component: ProfileNotifications,
})

function ProfileNotifications() {
  return (
    <div className="flex flex-col ">
      <NotificationComponent
        nome="Matheus Rodrigues"
        text1="is gathering 9000 signs to citys prefecture"
        postedIn="in 20 days"
        text2="“We need to deliver this about of 9.000 signs to the mayor to he approve us as
       international english teacher”"
      />

      <NotificationComponent
        nome="Matheus Rodrigues"
        text1="is gathering 9000 signs to citys prefecture"
        postedIn="in 20 days"
        text2="“We need to deliver this about of 9.000 signs to the mayor to he approve us as
       international english teacher”"
      />

      <NotificationComponent
        nome="Matheus Rodrigues"
        text1="is gathering 9000 signs to citys prefecture"
        postedIn="in 20 days"
        text2="“We need to deliver this about of 9.000 signs to the mayor to he approve us as
       international english teacher”"
      />

      <NotificationComponent
        nome="Matheus Rodrigues"
        text1="is gathering 9000 signs to citys prefecture"
        postedIn="in 20 days"
        text2="“We need to deliver this about of 9.000 signs to the mayor to he approve us as
       international english teacher”"
      />

      <NotificationComponent
        nome="Matheus Rodrigues"
        text1="is gathering 9000 signs to citys prefecture"
        postedIn="in 20 days"
        text2="“We need to deliver this about of 9.000 signs to the mayor to he approve us as
       international english teacher”"
      />

      <FundCampaing
        nome="Matheus Rodrigues"
        text1="is gathering 9000 signs to citys prefecture"
        postedIn="in 20 days"
      />

      <BackgroundButton preço="$53.88" />
      <Roadmap />
    </div>
  )
}
