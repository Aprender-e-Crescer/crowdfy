import Tell from '@/components/ui/Tell'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/CampaingCreate')({
 component: CampaingCreate,
})

function CampaingCreate() {
  return(
    <Tell/>
)
}
