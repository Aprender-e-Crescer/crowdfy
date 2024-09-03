import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import { NotificationComponent } from '@/components/notification-component'
import { Roadmap } from '@/components/roadmap'
import { FundCampaing } from '@/components/fund-campaing'
import { createFileRoute } from '@tanstack/react-router'
import { FileSignature, Loader2, Pen, PiggyBank } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Bell, Heart, History, Settings } from 'lucide-react'
import { SubHeader } from '@/components/subHeader'

export const Route = createFileRoute(`/profile-notifications`)({
  component: ProfileNotifications,
})

const buttonsSubHeader = [
  {
    title: 'Settings',
    variant: 'ghost' as const,
    route: '/profile-settings',
    icon: <Settings />,
  },
  {
    title: 'Notifications',
    variant: 'lightYellow' as const,
    route: '/profile-notifications',
    icon: <Bell />,
  },
  {
    title: 'Favorites',
    variant: 'ghost' as const,
    route: '/explore-map',
    icon: <Heart />,
  },
  {
    title: 'History',
    variant: 'ghost' as const,
    route: '/explore-map',
    icon: <History />,
  },
]

function ProfileNotifications() {
  return (
    <>
      <div className="mx-16 pb-10">
        <SubHeader buttons={buttonsSubHeader} />
      </div>
      <div className="flex max-[400px]:ml-0 ml-5 flex-col min-[1110px]:flex-row">
        <div className="flex flex-col min-[1110px]:w-4/5 ml-2">
          <div className="flex min-[1110px]:gap-10 lg:mr-5 max-[1110px]:flex-col max-[1110px]:mb-5">
            <p className="font-bold text-3xl max-[1110px]:mb-5 mb-10 mt-10">
              Notifications
            </p>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="default"
                className="rounded-r-none"
              >
                All Views
              </Button>
              <Button variant="outline" size="default" className="rounded-none">
                <PiggyBank />
                Funding
              </Button>
              <Button
                variant="outline"
                size="default"
                className="rounded-l-none"
              >
                <FileSignature />
                Signatures
              </Button>
            </div>
          </div>
          <NotificationComponent
            name="Matheus Rodrigues"
            title="is gathering 9000 signs to citys prefecture"
            postedIn="in 20 days"
            description="“We need to deliver this amount of 9.000 signs to the mayor so he can approve us as international English teachers.”"
          />

          <FundCampaing
            name="Matheus Rodrigues"
            description="is raising $1000 to afford  their travel costs (2 persons)"
            postedIn="in 20 days"
            textbutton="Fund Campaing"
            variant="greenShadow"
          />

          <FundCampaing
            name="Matheus Rodrigues"
            description="is raising $1000 to afford  their travel costs (2 persons)"
            postedIn="in 20 days"
            textbutton="Fund Campaing"
            variant="grayShadow"
          />

          <FundCampaing
            name="Matheus Rodrigues"
            description="Your 300 uSDG + 10.000 XP will be available in 3 days"
            postedIn="2 mins ago"
            textbutton="Get 300 uSDG"
            icon={<Loader2 className="w-5 h-5" />}
            variant="purpleShadow"
          />

          <FundCampaing
            name="Matheus Rodrigues"
            description="is teaching  english to 300 chinese children"
            postedIn="in 20 days"
            textbutton="Write Words of Support"
            variant="greenShadow"
            icon={<Pen className="w-5 h-5" />}
          />

          <FundCampaing
            name="Matheus Rodrigues"
            description="is teaching  english to 300 chinese children"
            postedIn="in 20 days"
            textbutton="Write Words of Support"
            variant="grayShadow"
            icon={<Pen className="w-5 h-5" />}
          />

          <FundCampaing
            name="Matheus Rodrigues"
            description="Your earned 300 uSDG + 10.000 XP"
            postedIn="2 mins ago"
            textbutton="Get 300 uSDG"
            icon={<Loader2 className="w-5 h-5" />}
            variant="greenShadow"
          />

          <FundCampaing
            name="Matheus Rodrigues"
            description="Your 300 uSDG + 10.000 XP will be available in 3 days"
            postedIn="2 mins ago"
            textbutton="Get 300 uSDG"
            variant="greenShadow"
            icon={<Loader2 className="w-5 h-5" />}
          />

          <Pagination className="hidden min-[1110px]:flex justify-evenly w-full mt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious useArrows href="#" />
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
                <PaginationNext useArrows href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <div>
          <Roadmap
            title="Help us Teach English for Kids in China Countryside"
            descrition="I need about 9.000 signatures to deliver to my mayor in two weeks and get that grant! Check more about our project, and if you want to see how we are changing the lives of lovely children in China's countryside, just teaching them how they can use the internet."
            location="São Paulo, Brazil"
            userName="Matheus Rodrigues"
            barNumbers="4.533/9.000"
          />
        </div>
        <Pagination className="max-[1110px]:flex hidden justify-evenly w-full mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious useArrows href="#" />
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
              <PaginationNext useArrows href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  )
}

export default ProfileNotifications
