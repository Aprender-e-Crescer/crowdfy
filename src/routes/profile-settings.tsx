import { Localization } from '@/components/localization'
import { createFileRoute } from '@tanstack/react-router'
import ImageAvatar from '@/assets/imagemavatar.png'
import ImageFundo from '@/assets/Image overlay.png'
import PersonalInfo from '@/components/personal-info'
import ProfileInfo from '@/components/profile-info'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/card-donate'
import { SubHeader } from '@/components/subHeader'
import { Bell, Heart, History, Settings } from 'lucide-react'

export const Route = createFileRoute('/profile-settings')({
  component: ProfileSettings,
})

function ProfileSettings() {
  const buttonsSubHeader = [
    {
      title: 'Settings',
      variant: 'lightYellow' as const,
      route: '/profile-settings',
      icon: <Settings />,
    },
    {
      title: 'Notifications',
      variant: 'ghost' as const,
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
  return (
    <>
      {/*Mobile*/}
      <div className="md:hidden flex flex-col mx-3 gap-y-4 justify-center items-center">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col justify-center items-center gap-y-8">
            <PersonalInfo />
            <Localization />
          </div>
        </div>
        <Card
          cardDescription=""
          type="settings"
          cardTitle=""
          donationValue=""
          isLink={false}
          avatarName="Marcus Dutra"
          avatarSrc={ImageAvatar}
          progressValue={90}
          level="level 8"
          experience="18.543 XP/20.000 XP"
          avatarDescription="Designer, Rio de Janeiro, Brasil"
          imageSrc={ImageFundo}
        />

        <div className="flex justify-center gap-10 mb-5">
          <Button variant="greenShadow" size="lg">
            Save Settings
          </Button>
        </div>
      </div>

      {/*PC*/}

      <div className="">
        <SubHeader buttons={buttonsSubHeader} />
      </div>

      <div className="hidden md:flex flex-col mx-32 gap-y-4 mb-5">
        <div className="flex flex-col gap-y-5 gap-x-5 ">
          <div className="flex w-full justify-between items-center mt-5">
            <ProfileInfo />
            <Button variant="greenShadow" size="lg">
              Save Settings
            </Button>
          </div>
          <hr className="my-4 border-[#EAECF0]" />

          <div className="flex gap-20 flex-col xl:flex-row justify-around items-center max-w-[1500px]">
            <PersonalInfo />
            <Card
              cardDescription=""
              type="settings"
              cardTitle=""
              donationValue=""
              isLink={false}
              avatarName="Marcus Dutra"
              avatarSrc={ImageAvatar}
              progressValue={90}
              level="level 8"
              experience="18.543 XP/20.000 XP"
              avatarDescription="Designer, Rio de Janeiro, Brasil"
              imageSrc={ImageFundo}
            />
          </div>
        </div>
        <div>
          <Localization />
        </div>
      </div>
    </>
  )
}
