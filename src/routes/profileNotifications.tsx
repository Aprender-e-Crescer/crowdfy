import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import { NotificationComponent } from '@/components/NotificationComponent'
import { Roadmap } from '@/components/roadmap'
import { FundCampaing } from '@/components/Fund-Campaing'
import { createFileRoute } from '@tanstack/react-router'
import { FileSignature, Loader2, Pen, PiggyBank } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute(`/profileNotifications`)({
  component: ProfileNotifications,
})

function ProfileNotifications() {
  return (
    <div className="flex ml-3 mr-3 md:mr-0 flex-col md:flex-row ">
      <div className="flex flex-col md:w-4/5 ml-2 ">
        <div className="flex md:gap-10 mr-5 max-md:flex-col max-md:mb-5 ">
          <p className="font-bold text-3xl max-md:mb-5 mb-10 mt-10 ">
            Notifications
          </p>
          <div className="flex items-center ">
            <Button
              variant="outline"
              size={'default'}
              className="rounded-r-none "
            >
              All Views
            </Button>
            <Button variant="outline" size={'default'} className="rounded-none">
              <PiggyBank />
              Funding
            </Button>
            <Button
              variant="outline"
              size={'default'}
              className="rounded-l-none "
            >
              <FileSignature />
              Signatures
            </Button>
          </div>
        </div>
        <NotificationComponent
          nome="Matheus Rodrigues"
          text1="is gathering 9000 signs to citys prefecture"
          postedIn="in 20 days"
          text2="“We need to deliver this amount of 9.000 signs to the mayor so he can approve us as international English teachers.”"
        />

        <FundCampaing
          nome="Matheus Rodrigues"
          text1="is raising $1000 to afford  their travel costs (2 persons)"
          postedIn="in 20 days"
          textbutton="Fund Campaing"
          variant="greenShadow"
        />

        <FundCampaing
          nome="Matheus Rodrigues"
          text1="is raising $1000 to afford  their travel costs (2 persons)"
          postedIn="in 20 days"
          textbutton="Fund Campaing"
          variant="grayShadow"
        />

        <FundCampaing
          nome="Matheus Rodrigues"
          text1="Your 300 uSDG + 10.000 XP will be available in 3 days"
          postedIn="2 mins ago"
          textbutton="Get 300 uSDG"
          Icon={<Loader2 className="w-5 h-5" />}
          variant="purpleShadow"
        />

        <FundCampaing
          nome="Matheus Rodrigues"
          text1="is teaching  english to 300 chinese children"
          postedIn="in 20 days"
          textbutton="Write Words of Support"
          variant="greenShadow"
          Icon={<Pen className="w-5 h-5" />}
        />

        <FundCampaing
          nome="Matheus Rodrigues"
          text1="is teaching  english to 300 chinese children"
          postedIn="in 20 days"
          textbutton="Write Words of Support"
          variant="grayShadow"
          Icon={<Pen className="w-5 h-5" />}
        />

        <FundCampaing
          nome="Matheus Rodrigues"
          text1="Your earned 300 uSDG + 10.000 XP"
          postedIn="2 mins ago"
          textbutton="Get 300 uSDG"
          Icon={<Loader2 className="w-5 h-5" />}
          variant="greenShadow"
        />

        <FundCampaing
          nome="Matheus Rodrigues"
          text1="Your 300 uSDG + 10.000 XP will be available in 3 days"
          postedIn="2 mins ago"
          textbutton="Get 300 uSDG"
          variant="greenShadow"
          Icon={<Loader2 className="w-5 h-5" />}
        />
        <Pagination className=" hidden md:flex justify-evenly w-full mt-10 ">
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
      <div>
        <Roadmap
          titulo="Help us Teach English for Kids in China Countryside"
          descrição="I need about 9.000 signatures to deliver to my mayor in two weeks and get that grant! Check more about our project, and if you want to see how we are changing the lives of lovely children in China's countryside, just teaching them how they can use the internet."
          localização="São Paulo, Brazil"
          nomeUser="Matheus Rodrigues"
          numerosBarra="4.533/9.000"
        />
      </div>
      <Pagination className="max-md:flex hidden justify-evenly w-full mt-10 ">
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
