import { createFileRoute } from '@tanstack/react-router'
import Tell from '../components/ui/Tell'

export const Route = createFileRoute('/CampaingCreate')({
  component: CampaingCreate,
})

function CampaingCreate() {
  return(<Tell/> )
}
