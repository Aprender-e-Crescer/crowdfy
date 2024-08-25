import { createFileRoute } from "@tanstack/react-router";
import TituloPage from "@/componentes/tituloPage";
import CardOverview from "@/componentes/CardOverview";
import ViewActivity from "@/componentes/ViewActivity";
import Titulo from "@/componentes/Titulo";
import CardsViews from "@/componentes/cardsViews";

export const Route = createFileRoute("/Campaigns")({
  component: Campaigns,
});

function Campaigns() {
  return (
    <div className="Campaigns px-4 sm:px-6 md:px-10 lg:px-16 ">
      {/* Ajuste para centralizar o TituloPage e manter responsividade */}
      <div className="mt-8 mb-4 sm:mt-8 sm:mb-6 mx-auto sm:max-w-[95%] md:max-w-[85%]">
        <TituloPage />
      </div>
      
      {/* Ajustes no layout flex e overflow */}
      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-center max-w-full m-auto">
        {/* Primeira Coluna com os Cards */}
        <div className="flex flex-col items-center w-full sm:w-auto">
          <CardOverview />
          <div className="mt-4 sm:mt-6">
            <CardsViews />
          </div>
        </div>

        {/* Segunda Coluna com o Titulo e as Atividades */}
        <div className="flex flex-col items-center sm:items-start sm:ml-4 mt-4 sm:mt-0 w-full sm:w-auto">
          <Titulo />
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[400px] sm:max-h-[500px] md:max-h-full w-full">
            <ViewActivity />
            <ViewActivity />
            <ViewActivity />
            <ViewActivity />
            <ViewActivity />
            <ViewActivity />
            <ViewActivity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
