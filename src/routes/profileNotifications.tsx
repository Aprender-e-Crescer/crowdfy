import img from '@/assets/img.png'
import { NotificationComponent } from '@/components/NotificationComponent'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(`/profileNotifications`)({
  component: ProfileNotifications,
})

function ProfileNotifications() {
  return <div className="p-2">

    <NotificationComponent
      nome='Matheus Rodrigues'
      text1='is gathering 9000 signs to citys prefecture'
      postedIn='in 20 days' 
      text2='“We need to deliver this about of 9.000 signs to the mayor to he approve us as
       international english teacher”'/>
  </div>
}