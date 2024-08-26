import { Card } from '@/components/component/card'
import { Localization } from '@/components/localization'
import { createFileRoute } from '@tanstack/react-router'
import ImageAvatar from '@/assets/imagemavatar.png'
import ImageFundo from '@/assets/Image overlay.png'
import PersonalInfo from '@/components/personalInfo'
import ProfileInfo from '@/components/profileInfo'
import { Button } from '@/components/button'

export const Route = createFileRoute('/profile-settings')({
  component: ProfileSettings,
})

function ProfileSettings() {
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
          avatarName="Marcus Dutra"
          avatarSrc={ImageAvatar}
          cardDescription=""
          cardTitle=""
          donationValue="18.543 XP/20.000 XP"
          imageSrc={ImageFundo}
          progressValue={80}
          avatarAvengers={true}
          avatarDefault={false}
          avatarDescription="Designer, Rio de Janeiro, Brasil"
          level="level 8"
          experience="18.543 XP/20.000 XP"
        />
        <div className="flex justify-center gap-10 mb-5">
          <Button
            className="bg-lime-500 text-white"
            variant={'shadow'}
            size={'lg'}
          >
            Save Settings
          </Button>
        </div>
      </div>

      {/*PC*/}

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

          <div className="flex gap-20 flex-col xl:flex-row justify-around items-center max-w-[1500px]">
            <PersonalInfo />
            <Card
              avatarName="Marcus Dutra"
              avatarSrc={ImageAvatar}
              cardDescription=""
              cardTitle=""
              donationValue="18.543 XP/20.000 XP"
              imageSrc={ImageFundo}
              progressValue={80}
              avatarAvengers={true}
              avatarDefault={false}
              avatarDescription="Designer, Rio de Janeiro, Brasil"
              level="level 8"
              experience="18.543 XP/20.000 XP"
            />
          </div>
        </div>
        <div className="mt-8">
          <Localization />
        </div>
      </div>
    </>
  )
}
