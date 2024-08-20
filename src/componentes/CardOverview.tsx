
import Card from '@/componentes/cardMyMyCampaigns'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { PiTimer } from "react-icons/pi";
import { LuCheckCheck } from "react-icons/lu";



function CardOverview() {

  return(
      <div className="border-solid border-[#EAECF0] border-[4px] h-[868.08px] w-[936px] rounded-[12px]">
        <div className="flex">
          <h2 className="font-semibold text-[18px] mt-[28px] mb-[28px] ml-[20px]">Your campaigns (2)</h2>
          <div className="flex ml-[405px]">
            <Button variant="BrancoBorda" className="mt-[20px] h-[40px] w-[50px] rounded-br-[0px] rounded-tr-[0px]">
              All
            </Button>
            <Button variant="AcinzentadoIcon" className="mt-[20px] h-[40px] w-[134px] rounded-br-[0px] rounded-tr-[0px] rounded-bl-[0px] rounded-tl-[0px]">
              <div>
                <PiTimer className="h-[20px]" />
              </div>
              <div className="ml-2">In Progress</div>
            </Button>
            <Button variant="AcinzentadoIcon" className="mt-[20px] h-[40px] w-[134px] rounded-bl-[0px] rounded-tl-[0px]">
              <LuCheckCheck />
              <div className="ml-2">Concluded</div>
            </Button>
          </div>
        </div>
        <div className="flex mb-[20px] ml-[20px]">
          <div className="mr-[20px]">
            <Card Titulo={<span>Renovate<br />Kingstown<br />Orphanage</span>} Nome={'ANA YAMAMOTO'} NumeroId={'0xbb AC23 43af 98fg'} Imagem={'https://www.brighthope.org/wp-content/uploads/2022/02/tim-trad-sS28i1H39AY-unsplash-800x533.jpg'} CorFundo={"#BEF264"} CorTexto={"#1E293B"}/>
            <Progress value={55} className="mt-2" />
          </div>
          <div>
            <Card Titulo={<span>Install Water<br />Well in<br />Kingstown</span>} Nome={'ANA YAMAMOTO'} NumeroId={'5226 6749 6789 4341'} Imagem={'https://th.bing.com/th/id/OIP.Rsr2pvOkUH8jQy3TajZ6LAAAAA?pid=ImgDet&w=200&h=200&c=7'} CorFundo={"#3F6212"} CorTexto={"#FFFFFF"}/>
            <Progress value={30} className="mt-2" />
          </div>
        </div>
        <div className="flex ml-[20px]">
          <div className="mr-[20px] ">
            <Card Titulo={<span>Install Water<br />Well in<br />Kingstown</span>} Nome={'ANA YAMAMOTO'} NumeroId={'5226 6749 6789 4341'} Imagem={'https://th.bing.com/th/id/OIP.cKrnleA9Ut-H9geNg99UwgHaFj?pid=ImgDet&w=200&h=150&c=7'} CorFundo={"#BEF264"} CorTexto={"#1E293B"}/>
            <Progress value={30} className="mt-2" />
          </div>
          <div>
            <Card Titulo={<span>Install Water<br />Well in<br />Kingstown</span>} Nome={'ANA YAMAMOTO'} NumeroId={'5226 6749 6789 4341'} Imagem={'https://th.bing.com/th/id/OIP.cKrnleA9Ut-H9geNg99UwgHaFj?pid=ImgDet&w=200&h=150&c=7'} CorFundo={"#BEF264"} CorTexto={"#1E293B"}/>
            <Progress value={30} className="mt-2" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#EAECF0] mt-[35px] flex" />
        <div>
          <Button variant="letraVerde" className="flex-1 mt-[12px] mr-[640px]">
            Need help?
          </Button>
          <Button variant="BrancoBorda" className="flex-1 mt-[12px]">
            Manage campagins
          </Button>
        </div>
      </div>
    
  );
}

export default CardOverview;