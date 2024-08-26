import { Progress } from '@/components/component/progress'
import { LuUpload } from 'react-icons/lu'
import { FaRegHeart } from 'react-icons/fa'
import { FiGift } from 'react-icons/fi'

interface CardProps {
  imageSrc: string
  avatarSrc: string
  avatarName: string
  cardTitle: string
  cardDescription: string
  donationValue: string
  progressValue: number
  level: string
  experience: string
  avatarDefault: boolean
  avatarAvengers: boolean
  avatarDescription: string
}

export function Card({
  imageSrc,
  avatarSrc,
  avatarName,
  cardTitle,
  cardDescription,
  donationValue,
  progressValue,
  level,
  experience,
  avatarDefault,
  avatarAvengers,
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
      {avatarDefault && (
        <div className="p-4 pt-5">
          <div className="relative flex items-center mb-4">
            <div className="w-10 h-10 bg-lime-300 rounded-full flex items-center justify-center">
              <img
                src={avatarSrc}
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <p className="ml-3 text-base font-medium text-[#475467]">
              {avatarName}
            </p>
          </div>
          <h3 className="text-2xl font-semibold font-inter mb-4">
            {cardTitle}
          </h3>
          <p className="text-[#475467] mb-4">{cardDescription}</p>
          <Progress value={progressValue} className="mb-4" />
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <FiGift className="text-black text-lg" />
              <p className="ml-2 text-base font-medium leading-none">
                €{donationValue}
              </p>
            </div>
            <p className="text-base font-medium leading-none">
              {progressValue}%
            </p>
          </div>
        </div>
      )}
      {avatarAvengers && (
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
              <p className="ml-3 text-base text-gray-600">
                {avatarDescription}
              </p>
            </div>
          </div>
          <h3 className="text-2xl font-semibold font-inter mb-4">
            {cardTitle}
          </h3>
          <p className="text-[#475467] mb-4">{cardDescription}</p>
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
      )}
    </div>
  )
}
