
import { createFileRoute } from '@tanstack/react-router'
import { BackgroundButton } from '@/components/backgroundButton'

export let Route = createFileRoute(`/profileNotifications`)({
  component: ProfileNotifications,
})

function ProfileNotifications() {
  return <div className="p-2">
   
<BackgroundButton  preço='$53.88'/>

  </div>
}