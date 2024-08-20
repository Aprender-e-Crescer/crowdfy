import imagemFundo from '../assets/Image.png'
import { BackgroundButton } from '@/components/backgroundButton'
import Card from '@/components/card'
import { NotificationComponent } from '@/components/NotificationComponent'
import { Roadmap } from '@/components/roadmap'
import { FundCampaing } from '@/components/ui/Fund-Campaing'
import { createFileRoute } from '@tanstack/react-router'

export let Route = createFileRoute(`/profileNotifications`)({
  component: ProfileNotifications,
})

function ProfileNotifications() {
  return (
   <div>
     <FundCampaing text1='is raising $1000 to afford  their travel costs (2 persons)' nome='Mateus Rodrigues' postedIn='in 20 days'/>
     <FundCampaing text1='is raising $1000 to afford  their travel costs (2 persons)' nome='Mateus Rodrigues' postedIn='in 20 days'/>
     <FundCampaing text1='is raising $1000 to afford  their travel costs (2 persons)' nome='Mateus Rodrigues' postedIn='in 20 days'/>
   </div>
  )
}
