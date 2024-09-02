import { createFileRoute } from '@tanstack/react-router';
import TitlePage from "@/components/titlePage";
import CardOverview from "@/components/CardOverview";
import ViewActivity from "@/components/ViewActivity";
import TitleViewActivity from '@/components/titleViewActivity';
import CardsViews from '@/components/cardsViews';


function Campaigns() {
  return (
  <div className="Campaigns ml-[7px] md:ml-auto justify-center mr-[7px] md:mr-auto md:justify-center">
         <div className='mt-[24px] mb-[16px] md:mt-[48px] md:mb-[32px]'>
        <TitlePage />
      </div>
      <div className='flex flex-col md:flex-row lg:flex-row'>
        <div className='flex flex-col md:flex-row'>
          <div>
            <div className='mb-11 md:mb-10 max-w-65'>
              <CardOverview />
            </div>
            <CardsViews />
          </div>
        </div>
        <div className='flex-row md:flex-col  ml-auto mr-auto sm:ml-[px] md:ml-[2px] md:w-auto md:h-auto'>
          <TitleViewActivity />
          <div className='flex-row md:flex-col mt-4'>
            <ViewActivity />
            <ViewActivity />
            <ViewActivity />
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

export const Route = createFileRoute('/Campaigns')({
  component: Campaigns,
});
