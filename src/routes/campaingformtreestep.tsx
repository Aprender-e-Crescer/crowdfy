import { createFileRoute } from '@tanstack/react-router'
import Give from '../components/give'
import Card from '@/components/card-help'
import imagemFundo from '../assets/Image.png'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/campaingformtreestep')({
  component: campaingformtreestep,
})

function campaingformtreestep() {
  return (
    <>
      <div className="p-2">
        <div className="md:flex  justify-center">
          <div>
            <Give
              title="3. Give final details"
              subtitle="What it's about your campaign?"
              label1="Your campaign title"
              label2="Create a deadline for your campaign"
              label3="Goal"
              placeholder1="Write here your beautiful title 🪴"
              placeholder2="dd/mm/aaaa"
              placeholder3="$10.000"
            />
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
              temImagemFundo={true}
            />
          </div>
        </div>
      </div>
      <div className=" md:flex w-full">
        <div className=" flex flex-1 justify-between mr-3 ">
          <div className="flex justify-center">
            <Link
              to="/campaingformsecondstep"
              className="[&.active]: flex justify-center"
            >
              <button className="flex items-center text-[#475467] font-semibold gap-2">
                <ArrowLeft className="ml-2 font-semibold" />
                Previous
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
            <Link to="/" className="[&.active]: flex justify-center">
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
