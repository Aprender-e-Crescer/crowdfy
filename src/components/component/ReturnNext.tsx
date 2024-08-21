import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export default function ReturnNext({
  circulo1,
  circulo2,
  circulo3,
  previous,
  next,
  linkVai,
  linkVem,
}: {
  circulo1: boolean
  circulo2: boolean
  circulo3: boolean
  previous: string
  next: string
  linkVai: string
  linkVem: string
}) {
  return (
    <div className=" flex flex-1 justify-between ">
      <div className="flex justify-center">
        <Link to={linkVem} className="[&.active]: flex justify-center">
          <button className="flex items-center text-[#475467] font-semibold gap-2">
            <ArrowLeft className="ml-2 font-semibold" />
            {previous}
          </button>
        </Link>
      </div>
      <div className="flex justify-around bg-slate-50 rounded-full items-center h-10 w-20">
        <div className="flex rounded-full h-2 w-2 bg-[#F1F5F9]">
          {circulo1 && (
            <div className="flex bg-[#84CC16] rounded-full h-2 w-2"></div>
          )}
        </div>
        <div className="flex rounded-full h-2 w-2 bg-[#F1F5F9]">
          {circulo2 && (
            <div className="flex bg-[#84CC16] rounded-full h-2 w-2"></div>
          )}
        </div>
        <div className="flex rounded-full h-2 w-2 bg-[#F1F5F9]">
          {circulo3 && (
            <div className="flex bg-[#84CC16] rounded-full h-2 w-2"></div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <Link to={linkVai} className="[&.active]: flex justify-center">
          <button className="flex items-center text-[#475467] font-semibold gap-2">
            {next}
            <ArrowRight className="mr-2 font-semibold" />
          </button>
        </Link>
      </div>
    </div>
  )
}
