import { createFileRoute } from '@tanstack/react-router'
import Tell from '@/components/Tell-form'
import Card from '@/components/card-help'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/campaing-second-step')({
  component: campaingformsecondstep,
})
function campaingformsecondstep() {
  return (
    <>
      <div className="flex-col">
        <div className="p-2">
          <div className="xl:flex justify-center gap-52">
            <div>
              <Tell />
            </div>

            <div className="p-2 flex gap-5 flex-col">
              <Card
                barNumbers="4.533/9.000"
                location="São Paulo, Brazil"
                userName="Mateus Rodrigues"
                descrition=" I need about 9.000 signatures to deliver to my
              mayor in two weeks and get that grant! Check more about our
              project and if you want to see how we are changing lovely children
              lifes on China countryside just teaching how they can use the
              internet."
                title=" Help us Teach English for Kids on China Countryside"
                backgroundImage
              />
            </div>
          </div>
        </div>
        <div className=" xl:flex w-full">
          <div className=" flex flex-1 justify-between ">
            <div className="flex justify-center">
              <Link
                to="/campaing-create"
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
                <div className="flex bg-[#F1F5F9] rounded-full h-2 w-2"></div>
              </div>
              <div className="flex rounded-full h-2 w-2 bg-[#F1F5F9]">
                <div className="flex bg-[#84CC16] rounded-full h-2 w-2"></div>
              </div>
              <div className="flex rounded-full h-2 w-2 bg-[#F1F5F9]">
                <div className="flex bg-[#F1F5F9 rounded-full h-2 w-2"></div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                to="/campaing-third-step"
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
      </div>
    </>
  )
}
