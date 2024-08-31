import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
interface Props {
  circleLeft: boolean
  circleCenter: boolean
  circleRigth: boolean
  previous: string
  next: string
}

export default function ReturnNext({
  circleLeft,
  circleCenter,
  circleRigth,
  previous,
  next,
}: Props) {
  return (
    <div className="flex flex-1 justify-between">
      <div className="flex justify-center">
        <Link
          to="/campaing-third-step"
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
          {circleLeft && (
            <div className="flex bg-[#84CC16] rounded-full h-2 w-2"></div>
          )}
        </div>

        <div className="flex rounded-full h-2 w-2 bg-[#F1F5F9]">
          {circleCenter && (
            <div className="flex bg-[#84CC16] rounded-full h-2 w-2"></div>
          )}
        </div>

        <div className="flex rounded-full h-2 w-2 bg-[#F1F5F9]">
          {circleRigth && (
            <div className="flex bg-[#84CC16] rounded-full h-2 w-2"></div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          to="/campaing-second-step"
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
