import { Progress } from '@/components/component/progress'
import { LuUpload } from 'react-icons/lu'
import { FaRegHeart } from 'react-icons/fa'
import { FiGift } from 'react-icons/fi'
import { Link } from '@tanstack/react-router'

interface CardProps {
  imageSrc: string
  avatarSrc: string
  avatarName: string
  cardTitle?: string
  cardDescription?: string
  donationValue?: string
  progressValue?: number
  level?: string
  experience?: string
  avatarDescription?: string
  isLink?: boolean
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
  avatarDescription,
  isLink = false,
}: CardProps) {
  const Container = isLink ? Link : 'div';

  return (
    <Container
      to={isLink ? "/explore-map" : undefined}
      className="text-start rounded-lg overflow-hidden shadow-lg font-sans"
    >
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
        <div className="relative flex items-center mb-1">
          <div className="w-10 h-10 bg-lime-300 rounded-full flex items-center justify-center">
            <img
              src={avatarSrc}
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="ml-3 text-base font-medium text-[#475467]">
            {avatarName}
            {avatarDescription && (
              <p className="text-sm text-gray-500">{avatarDescription}</p>
            )}
          </div>
        </div>
        {cardTitle && <h3 className="text-2xl font-semibold font-inter mb-2">{cardTitle}</h3>}
        {cardDescription && <p className="text-[#475467] mb-4">{cardDescription}</p>}
        <Progress value={progressValue} className="mb-2" />
        {donationValue && (
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <FiGift className="text-black text-lg" />
              <p className="ml-2 text-base font-medium leading-none">
                €{donationValue}
              </p>
            </div>
            <p className="text-base font-medium leading-none">{progressValue}%</p>
          </div>
        )}
        {level && <p className="mt-2 text-base font-medium">Level: {level}</p>}
        {experience && <p className="text-base font-medium">Experience: {experience}</p>}
      </div>
    </Container>
  );
}
