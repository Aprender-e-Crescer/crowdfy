import { createFileRoute } from '@tanstack/react-router'
import { Uploadimagens } from '@/components/ui/UploadImagens'

export const Route = createFileRoute('/CampaingCreate')({
  component: CampaingCreate,
})

function CampaingCreate() {
return(
  <>
  <Uploadimagens />
  </>
)

}
