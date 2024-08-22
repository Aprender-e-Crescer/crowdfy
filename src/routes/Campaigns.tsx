import { createFileRoute } from '@tanstack/react-router'
import TituloPage from "@/componentes/tituloPage"

export const Route = createFileRoute('/Campaigns')({
  component: Campaigns,
})

function Campaigns() {
  return (
    <div className="Campaigns">
      <TituloPage />
     
    </div>
  );
}