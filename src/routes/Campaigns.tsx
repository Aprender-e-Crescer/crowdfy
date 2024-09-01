import { createFileRoute } from '@tanstack/react-router';
import TituloPage from "@/components/titlePage";
import CardOverview from "@/components/CardOverview";
import ViewActivity from "@/components/ViewActivity";
import Titulo from '@/components/titleViewActivity';
import CardsViews from '@/components/cardsViews';

export const Route = createFileRoute('/Campaigns')({
  component: Campaigns,
});

function Campaigns() {
  return (
    <div className="Campaigns ml-[16px] md:ml-[110px]">
      <div className='mt-[24px] mb-[16px] md:mt-[48px] md:mb-[32px]'>
        <TituloPage />
      </div>
      <div className='flex flex-col md:flex-row h-full w-full mr9'>
        <div>
          <div className='mr-4'>
            <CardOverview />
          </div>
          <div className='mt-6 md:mt-10'>
            <CardsViews />
          </div>
        </div>

        <div className='flex flex-col md:ml-5 mt-6 md:mt-0'>
          <Titulo />
          {/* Envolva as atividades em uma div com rolagem vertical em telas pequenas */}
          <div className='flex flex-col gap-4 overflow-y-auto max-h-[400px] md:max-h-full ml-7 MR-7'>
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
