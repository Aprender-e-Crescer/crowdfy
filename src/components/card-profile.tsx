import { Progress } from '@/components/progress'
import { LuUpload } from 'react-icons/lu'
import { FaRegHeart } from 'react-icons/fa'

interface CardProps {
  imageSrc: string
  avatarSrc: string
  avatarName: string
  progressValue: number
  level: string
  experience: string
  avatarDescription: string
}

export function CardAvengers({
  imageSrc,
  avatarSrc,
  avatarName,
  progressValue,
  level,
  experience,
  avatarDescription,
}: CardProps) {
  return (
    <div className="max-w-[396px] min-w-[260px] rounded-lg overflow-hidden shadow-lg font-plusjakartasans">
      <div className="relative">
        <img src={imageSrc} alt="Card Image" className="w-full h-auto" />
        <div className="absolute bottom-2 right-2 flex gap-2">
          <div className="flex items-center justify-center bg-gray-100 rounded-lg w-10 h-10 text-xs border border-[#E2E8F0]">
            <LuUpload className="text-black text-xs" />
          </div>
          <div className="flex items-center justify-center bg-gray-100 rounded-lg w-10 h-10 text-xs border border-[#E2E8F0]">
            <FaRegHeart className="text-black text-xs" />
          </div>
        </div>
      </div>
      <div className="p-4 pt-5">
        <div className="relative flex items-center mb-4">
          <div className="w-14 h-14 bg-lime-100 rounded-full flex items-center justify-center relative">
            <div className="w-12 h-12 bg-lime-200 rounded-full flex items-center justify-center relative">
              <img
                src={avatarSrc}
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div
                className="flex absolute justify-center items-center
               bg-[#84CC16] rounded-full w-[16hpx] h-[16px] p-1 top-8 left-8"
              >
                <p className="text-white font-extrabold">8</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="ml-3 font-bold text-2xl">{avatarName}</p>
            <p className="ml-3 text-base text-gray-600">{avatarDescription}</p>
          </div>
        </div>
        <Progress value={progressValue} className="mb-4" />
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            <p className="ml-2 text-base text-gray-600 leading-none">
              {experience}
            </p>
          </div>
          <p className="text-base text-gray-600 leading-none">{level}</p>
        </div>
      </div>
    </div>
  )
}
