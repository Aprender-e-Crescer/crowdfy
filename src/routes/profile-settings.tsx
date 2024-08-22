import { Card } from '@/components/component/card'
import Footer from '@/components/footer'
import { Localization } from '@/components/localization'
import { createFileRoute } from '@tanstack/react-router'
import ImageAvatar from '@/assets/imagemavatar.png'
import ImageFundo from '@/assets/Image overlay.png'
import PersonalInfo from '@/components/personalInfo'
import ProfileInfo from '@/components/profileInfo'
import { Button } from '@/components/button'
// import { Button } from '@/components/button'

export const Route = createFileRoute('/profile-settings')({
  component: ProfileSettings,
})

function ProfileSettings() {
  return (
    <>
      <div className=" md:hidden  flex flex-col mx-3 gap-y-4">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col justify-center gap-y-8">
            <PersonalInfo />
            <Localization />
          </div>
        </div>
        <Card
          avatarName="Marcus Dutra"
          avatarSrc={ImageAvatar}
          cardDescription="Designer, Rio de Janeiro, Brasil"
          cardTitle=""
          donationValue="18.543 XP/20.000 XP"
          imageSrc={ImageFundo}
          progressValue={80}
        />

        <Footer />
      </div>

      <div className=" hidden md:flex flex-col mx-32 gap-y-4">
        <div className="flex flex-col gap-y-5 gap-x-5 ">
          <div className="flex w-full justify-between items-center">
            <ProfileInfo />

            <Button
              className="bg-lime-500 text-white"
              variant={'shadow'}
              size={'lg'}
            >
              Save Settings
            </Button>
          </div>
          <hr className="my-4 border-[#EAECF0]" />

          <div className="flex gap-x-24">
            <div className="w-2/4">
              <PersonalInfo />
            </div>

            <Card
              avatarName="Marcus Dutra"
              avatarSrc={ImageAvatar}
              cardDescription="Designer, Rio de Janeiro, Brasil"
              cardTitle=""
              donationValue="18.543 XP/20.000 XP"
              imageSrc={ImageFundo}
              progressValue={80}
            />
          </div>
        </div>
        <div className="flex">
          <Localization />
        </div>
      </div>
    </>
  )
}
