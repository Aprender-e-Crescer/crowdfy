import { createFileRoute } from '@tanstack/react-router'
import { Uploadimagens } from '@/components/ui/UploadImagens'

export const Route = createFileRoute('/CampaingCreate')({
  component: CampaingCreate,
})

function CampaingCreate() {
return(
  <>
  <Uploadimagens tiposEnvio='SVG, PNG, JPG ou GIF (max. 1MB)' descricao='ou solte sua foto aqui' enviar='Clique para enviar'/>
  </>
)

}
