import { createFileRoute } from '@tanstack/react-router';
import TituloPage from "@/componentes/tituloPage";
import Card from "@/componentes/cardMyMyCampaigns";
import CardOverview from "@/componentes/footerOverview";
import ViewActivity from  "@/componentes/ViewActivity"
import Titulo from '@/componentes/Titulo';
import FooterOverview from "@/componentes/footerOverview"

export const Route = createFileRoute('/Campaigns')({
  component: Campaigns,
});


function Campaigns() {
  return (
    <div className="Campaigns">

      <TituloPage />
      <Titulo />
     <ViewActivity />
     <ViewActivity />
     <ViewActivity />
     <ViewActivity />
     <ViewActivity />
     <ViewActivity />
     <ViewActivity />
     
    
     
     
    </div>
  );
}

export default Campaigns;
