import { Card } from '@/components/component/card'
import Footer from '@/components/footer'
import { Localization } from '@/components/localization'
import { createFileRoute } from '@tanstack/react-router'
import ImageAvatar from '@/assets/imagemavatar.png'
import ImageFundo from '@/assets/Image overlay.png'

export const Route = createFileRoute('/profile-settings')({
  component: ProfileSettings,
})

function ProfileSettings() {
  return (
    <>
      <div className="flex">
        <Localization />
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
      <Footer />
    </>
  )
}
