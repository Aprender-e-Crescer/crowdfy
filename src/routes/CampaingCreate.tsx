import Choose from '@/components/ui/Choose'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/CampaingCreate')({
  component: CampaingCreate,
})

function CampaingCreate() {
  return (
    <div className="p-2">
      
        
      <Choose/>
    </div>
  )
}
