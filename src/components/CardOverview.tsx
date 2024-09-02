import Card from '@/components/CardCampaigns'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { PiTimer } from 'react-icons/pi'
import { LuCheckCheck } from 'react-icons/lu'

function CardOverview() {
  return (
    <div className="border-solid border-[#EAECF0] border-[2px] h-auto w-[500px] xl:w-[936px] rounded-[12px] p-[20px]">
      <div className="flex flex-col lg:flex-row justify-between">
        <h2 className="font-semibold text-[18px] mt-[28px] mb-[28px]">
          Your campaigns (2)
        </h2>
        <div className="flex justify-center :ml-[405px] mb-[28px]">
          <Button
            variant="BrancoShadow"
            className="mt-[20px] h-[40px] w-[50px] rounded-br-[0px] rounded-tr-[0px]"
          >
            All
          </Button>
          <Button
            variant="AcinzentadoIcon"
            className="mt-[20px] h-[40px] w-[134px] rounded-br-[0px] rounded-tr-[0px] rounded-bl-[0px] rounded-tl-[0px]"
          >
            <div>
              <PiTimer className="h-[20px]" />
            </div>
            <div className="ml-2">In Progress</div>
          </Button>
          <Button
            variant="AcinzentadoIcon"
            className="mt-[20px] h-[40px] w-[134px] rounded-bl-[0px] rounded-tl-[0px]"
          >
            <LuCheckCheck />
            <div className="ml-2">Concluded</div>
          </Button>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row mb-[20px] ">
        <div className="mb-[20px] lg:mr-[20px]">
          <Card
            titulo={
              <span>
                Celso
                <br />
                Kingstown
                <br />
                Orphanage
              </span>
            }
            nomeCard={'ANA YAMAMOTO'}
            numeroId={'0xbb AC23 43af 98fg'}
            imagem={
              'https://www.brighthope.org/wp-content/uploads/2022/02/tim-trad-sS28i1H39AY-unsplash-800x533.jpg'
            }
            corFundo={'#BEF264'}
            corTexto={'#1E293B'}
            valorCard={'$2,840.40'}
          />
          <Progress value={55} className="mt-2" />
        </div>
        <div className="mb-[20px]">
          <Card
            titulo={
              <span>
                Install Water
                <br />
                Well in
                <br />
                Kingstown
              </span>
            }
            nomeCard={'ANA YAMAMOTO'}
            numeroId={'5226 6749 6789 4341'}
            imagem={
              'https://th.bing.com/th/id/OIP.Rsr2pvOkUH8jQy3TajZ6LAAAAA?pid=ImgDet&w=200&h=200&c=7'
            }
            corFundo={'#3F6212'}
            corTexto={'#FFFFFF'}
            valorCard={'$1,260.20'}
          />
          <Progress value={30} className="mt-2" />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row lg:ml-[0px]">        
        <div className="mb-[20px] lg:mr-[20px]">
          <Card
            titulo={
              <span>
                Install Water
                <br />
                Well in
                <br />
                Kingstown
              </span>
            }
            nomeCard={'ANA YAMAMOTO'}
            numeroId={'5226 6749 6789 4341'}
            imagem={
              'https://th.bing.com/th/id/OIP.cKrnleA9Ut-H9geNg99UwgHaFj?pid=ImgDet&w=200&h=150&c=7'
            }
            corFundo={'#BEF264'}
            corTexto={'#1E293B'}
            valorCard={'$1,260.20'}
          />
          <Progress value={30} className="mt-2" />
        </div>
        <div className="mb-[20px]">
          <Card
            titulo={
              <span>
                Install Water
                <br />
                Well in
                <br />
                Kingstown
              </span>
            }
            nomeCard={'ANA YAMAMOTO'}
            numeroId={'5226 6749 6789 4341'}
            imagem={
              'https://th.bing.com/th/id/OIP.cKrnleA9Ut-H9geNg99UwgHaFj?pid=ImgDet&w=200&h=150&c=7'
            }
            corFundo={'#BEF264'}
            corTexto={'#1E293B'}
            valorCard={'$1,260.20'}
          />
          <Progress value={30} className="mt-2" />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#EAECF0] mt-[35px] flex" />
      <div className="flex flex-col lg:flex-row justify-between">
        <Button variant="letraVerde" className="mt-[12px] lg:mr-[20px]">
          Need help?
        </Button>
        <Button variant="BrancoShadow" className="mt-[12px]">
          Manage campaigns
        </Button>
      </div>
    </div>
  )
}

export default CardOverview
