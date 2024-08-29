import { Card } from '@/components/component/card'
import { createFileRoute } from '@tanstack/react-router'
import ImageAvatar from '@/assets/imagemavatar.png'
import ImageFundo from '@/assets/Image overlay.png'

export const Route = createFileRoute('/profile-settings')({
  component: ProfileSettings,
})

function ProfileSettings() {
  return (
    <>
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
    </>
  )
}
