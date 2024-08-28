import { createFileRoute } from '@tanstack/react-router'
import Tell from '@/components/Tell-form-campaings-create'
import Card from '@/components/card-help-campaings-create'
import imagemFundo from '../assets/Image.png'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/campaingformsecondstep')({
  component: campaingformsecondstep,
})
function campaingformsecondstep() {
  return (
    <>
      <div className="p-2">
        <div className="md:flex  justify-center">
          <div>
            <Tell />
          </div>

          <div className="p-2 flex gap-5 flex-col">
            <Card
              numerosBarra="4.533/9.000"
              localização="São Paulo, Brazil"
              nomeUser="Mateus Rodrigues"
              descrição=" I need about 9.000 signatures to deliver to my
              mayor in two weeks and get that grant! Check more about our
              project and if you want to see how we are changing lovely children
              lifes on China countryside just teaching how they can use the
              internet."
              titulo=" Help us Teach English for Kids on China Countryside"
              outraImagemFundo={imagemFundo}
              temImagemFundo
            />
          </div>
        </div>
      </div>
      <div className=" md:flex w-full">
        <div className=" flex flex-1 justify-between ">
          <div className="flex justify-center">
            <Link
              to="/CampaingCreate"
              className="[&.active]: flex justify-center"
            >
              <button className="flex items-center text-[#475467] font-semibold gap-2">
                <ArrowLeft className="ml-2 font-semibold" />
                Previus
              </button>
            </Link>
          </div>
          <div className="flex justify-around bg-slate-50 rounded-full items-center h-10 w-20">
            <div className="flex rounded-full h-2 w-2 bg-[#F1F5F9]">
              <div className="flex bg-[#84CC16] rounded-full h-2 w-2"></div>
            </div>
            <div className="flex rounded-full h-2 w-2 bg-[#F1F5F9]">
              <div className="flex bg-[#84CC16] rounded-full h-2 w-2"></div>
            </div>
            <div className="flex rounded-full h-2 w-2 bg-[#F1F5F9]">
              <div className="flex bg-[#84CC16] rounded-full h-2 w-2"></div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              to="/campaingformtreestep"
              className="[&.active]: flex justify-center"
            >
              <button className="flex items-center text-[#475467] font-semibold gap-2">
                Next
                <ArrowRight className="mr-2 font-semibold" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
