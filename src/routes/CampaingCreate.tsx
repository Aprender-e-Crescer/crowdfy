
import Choose from '@/components/ui/Choose'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/CampaingCreate')({
  component: CampaingCreate,
})

function CampaingCreate() {
  return (
    <div className="p-2">
      
        
      <Choose 
      tittle='1. Choose your campaign style' 
      subtittle='What its about your campaign?'
      donation='Donation'
      petition='Petition'
      descrição1='Create a donation to receive funds'
      descrição2='Create a petition to crowd signatures'/>  
    </div>
  )
}
