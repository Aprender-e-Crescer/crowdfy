import { createFileRoute, Link } from '@tanstack/react-router'
import Give from '@/components/give-form'
import Card from '@/components/card-help'
import { ArrowLeft, ArrowRight, } from 'lucide-react'




export const Route = createFileRoute('/campaing-third-step')({
  component: campaingformtreestep,
})

function campaingformtreestep() {
  return (
    <>
      <div className="p-2">
        <div className="xl:flex gap-52 justify-center">
          <div>
            <Give
              title="3. Give final details"
              subtitle="What it's about your campaign?"
              labelTitle="Your campaign title"
              labelDateBirth="Create a deadline for your campaign"
              labelMoney="Goal"
              placeholderTitle="Write here your beautiful title 🪴"
              placeholderDateBirth="dd/mm/aaaa"
              placeholderMoney="$10.000"
            />
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
        <div className=" flex flex-1 justify-between mr-3 ">
          <div className="flex justify-center">
            <Link
              to="/campaing-second-step"
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
              <div className="flex bg-[#F1F5F9] rounded-full h-2 w-2"></div>
            </div>
            <div className="flex rounded-full h-2 w-2 bg-[#F1F5F9]">
              <div className="flex bg-[#F1F5F9] rounded-full h-2 w-2"></div>
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
