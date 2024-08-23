import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import { BackgroundButton } from '@/components/backgroundButton'
import { NotificationComponent } from '@/components/NotificationComponent'
import { Roadmap } from '@/components/roadmap'
import { FundCampaing } from '@/components/ui/Fund-Campaing'
import { createFileRoute } from '@tanstack/react-router'

export let Route = createFileRoute(`/profileNotifications`)({
  component: ProfileNotifications,
})

function ProfileNotifications() {
  return (
    <div className="flex flex-col ml-3 mr-3">
      <div className="flex flex-col">
        <NotificationComponent
          nome="Matheus Rodrigues"
          text1="is gathering 9000 signs to citys prefecture"
          postedIn="in 20 days"
          text2="“We need to deliver this amount of 9.000 signs to the mayor so he can approve us as international English teachers.”"
        />

        <NotificationComponent
          nome="Matheus Rodrigues"
          text1="is gathering 9000 signs to citys prefecture"
          postedIn="in 20 days"
          text2="“We need to deliver this amount of 9.000 signs to the mayor so he can approve us as international English teachers.”"
        />

        <NotificationComponent
          nome="Matheus Rodrigues"
          text1="is gathering 9000 signs to citys prefecture"
          postedIn="in 20 days"
          text2="“We need to deliver this amount of 9.000 signs to the mayor so he can approve us as international English teachers.”"
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
          text2="“We need to deliver this amount of 9.000 signs to the mayor so he can approve us as international English teachers.”"
        />

        <FundCampaing
          nome="Matheus Rodrigues"
          text1="is gathering 9000 signs to citys prefecture"
          postedIn="in 20 days"
        />

        <BackgroundButton preço="$53.88" />
      </div>

      <div>
        <Roadmap
          titulo="Help us Teach English for Kids in China Countryside"
          descrição="I need about 9.000 signatures to deliver to my mayor in two weeks and get that grant! Check more about our project, and if you want to see how we are changing the lives of lovely children in China's countryside, just teaching them how they can use the internet."
          localização="São Paulo, Brazil"
          nomeUser="Matheus Rodrigues"
          numerosBarra="4.533/9.000"
        />
      </div>

      <Pagination className="flex justify-evenly w-full mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default ProfileNotifications
