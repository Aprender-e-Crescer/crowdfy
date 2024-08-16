import Card from '@/components/card'
import { Progress } from '@/components/ui/progress'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/CampaingCreate')({
  component: CampaingCreate,
})

function CampaingCreate() {
  return (
    <div className="p-2">
      <Card />
    </div>
  )
}
