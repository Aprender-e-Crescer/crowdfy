import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import { BackgroundButton } from '@/components/background_button'
import { NotificationComponent } from '@/components/NotificationComponent'
import { Roadmap } from '@/components/roadmap'
import { FundCampaing } from '@/components/ui/Fund-Campaing'
import { createFileRoute } from '@tanstack/react-router'
import { FileSignature, Loader2, Pen, PiggyBank } from 'lucide-react'
import { Button } from '@/components/ui/button'

export let Route = createFileRoute(`/profileNotifications`)({
  component: ProfileNotifications,
})

function ProfileNotifications() {
  return (
    <div className="flex ml-3 mr-3 min-[1110px]:mr-0 flex-col min-[1110px]:flex-row">
      <div className="flex flex-col min-[1110px]:w-4/5 ml-2">
        <div className="flex min-[1110px]:gap-10 mr-5 max-[1110px]:flex-col max-[1110px]:mb-5">
          <p className="font-bold text-3xl max-[1110px]:mb-5 mb-10 mt-10">
            Notifications
          </p>
          <div className="flex items-center">
            <Button
              campaingButton="outline"
              size={'default'}
              className="rounded-r-none"
            >
              All Views
            </Button>
            <Button campaingButton="outline" size={'default'} className="rounded-none">
              <PiggyBank />
              Funding
            </Button>
            <Button
              campaingButton="outline"
              size={'default'}
              className="rounded-l-none"
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
          Variant="shadow"
          colorButton="green"
        />

        <FundCampaing
          nome="Matheus Rodrigues"
          text1="is raising $1000 to afford  their travel costs (2 persons)"
          postedIn="in 20 days"
          textbutton="Fund Campaing"
          Variant="shadow"
          colorButton="green"
        />

        <FundCampaing
          nome="Matheus Rodrigues"
          text1="Your 300 uSDG + 10.000 XP will be available in 3 days"
          postedIn="2 mins ago"
          textbutton="Get 300 uSDG"
          Icon={<Loader2 className="w-5 h-5" />}
          Variant="shadow"
          colorButton="gray"
        />

        <FundCampaing
          nome="MathcolorButtoneus Rodrigues"
          text1="is teaching  english to 300 chinese children"
          postedIn="in 20 days"
          textbutton="Write Words of Support"
          Variant="shadow"
          colorButton="green"
          Icon={<Pen className="w-5 h-5" />}
        />

        <FundCampaing
          nome="Matheus Rodrigues"
          text1="is teaching  english to 300 chinese children"
          postedIn="in 20 days"
          textbutton="Write Words of Support"
          Variant="shadow"
          colorButton="green"
          Icon={<Pen className="w-5 h-5" />}
        />

        <FundCampaing
          nome="Matheus Rodrigues"
          text1="Your earned 300 uSDG + 10.000 XP"
          postedIn="2 mins ago"
          textbutton="Get 300 uSDG"
          Icon={<Loader2 className="w-5 h-5" />}
          Variant="shadow"
          colorButton="purple"
        />

        <FundCampaing
          nome="Matheus Rodrigues"
          text1="Your 300 uSDG + 10.000 XP will be available in 3 days"
          postedIn="2 mins ago"
          textbutton="Get 300 uSDG"
          Variant="shadow"
          colorButton="gray"
          Icon={<Loader2 className="w-5 h-5" />}
        />
        <Pagination className=" hidden min-[1110px]:flex justify-evenly w-full mt-10">
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
      <Pagination className="max-[1110px]:flex hidden justify-evenly w-full mt-10">
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
