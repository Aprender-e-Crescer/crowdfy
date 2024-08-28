import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
interface Props {
  circuloEsquerdo: boolean
  circuloCentral: boolean
  circuloDireito: boolean
  previous: string
  next: string
}

export default function ReturnNext({
  circuloEsquerdo,
  circuloCentral,
  circuloDireito,
  previous,
  next,
}: Props) {
  return (
    <div className="flex flex-1 justify-between">
      <div className="flex justify-center">
        <Link
          to="/campaingformtreestep"
          className="[&.active]: flex justify-center"
        >
          <button className="flex items-center text-[#475467] font-semibold gap-2">
            <ArrowLeft className="ml-2 font-semibold" />
            {previous}
          </button>
        </Link>
      </div>

      <div className="flex justify-around bg-slate-50 rounded-full items-center h-10 w-20">
        <div className="flex rounded-full h-2 w-2 bg-[#F1F5F9]">
          {circuloEsquerdo && (
            <div className="flex bg-[#84CC16] rounded-full h-2 w-2"></div>
          )}
        </div>

        <div className="flex rounded-full h-2 w-2 bg-[#F1F5F9]">
          {circuloCentral && (
            <div className="flex bg-[#84CC16] rounded-full h-2 w-2"></div>
          )}
        </div>

        <div className="flex rounded-full h-2 w-2 bg-[#F1F5F9]">
          {circuloDireito && (
            <div className="flex bg-[#84CC16] rounded-full h-2 w-2"></div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          to="/campaingformsecondstep"
          className="[&.active]: flex justify-center"
        >
          <button className="flex items-center text-[#475467] font-semibold gap-2">
            {next}
            <ArrowRight className="mr-2 font-semibold" />
          </button>
        </Link>
      </div>
    </div>
  )
}
