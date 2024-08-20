import  Give  from '@/components/ui/give'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/CampaingCreate')({
  component: CampaingCreate,
})

function CampaingCreate() {
  return (
  
  <Give title='3. Give final details'
        subtitle="What it's about your campaign?"
        label1='Your campaign title'
        label2='Create a deadline for your campaign'
        label3='Goal'
        placeholder1='Write here your beautiful title 🪴'
        placeholder2='dd/mm/aaaa'
        placeholder3='$10.000'/>
        


)


  



}
