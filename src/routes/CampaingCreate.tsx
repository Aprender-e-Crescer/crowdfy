import  ReturnNext from '@/components/ui/ReturnNext'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/CampaingCreate')({
  component: CampaingCreate,
})

function CampaingCreate() {
  return (
    <ReturnNext/>
  )
}
