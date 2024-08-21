import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'


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
    <div className="flex justify-evenly w-full">
      <Pagination className="flex justify-between w-full">
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

      <FundCampaing
        nome="Matheus Rodrigues"
        text1="is gathering 9000 signs to citys prefecture"
        postedIn="in 20 days"
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

      <div className="mt-36">
        <Roadmap
          titulo="Help us Teach English for Kids on China Countryside"
          descrição="I need about 9.000 signatures to deliver to my mayor in two weeks and get that grant! Check more about our project and if you want to see how we are changing lovely children lifes on China countryside just teaching how they can use the internet."
          localização="São Paulo, Brazil"
          nomeUser="Mateus Rodrigues"
          numerosBarra="4.533/9.000"
        />
      </div>
    </div>
  )
}
