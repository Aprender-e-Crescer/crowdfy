import { Progress } from '@/components/component/progress'
import { LuUpload } from 'react-icons/lu'
import { FaRegHeart } from 'react-icons/fa'
import { FiGift } from 'react-icons/fi'

export function Card() {
    return (
        <div className="relative w-[396px] max-w-[396px] rounded-lg overflow-hidden shadow-lg font-plusjakartasans">
            <div className="relative">
                <img src="/imagemCard.png" alt="Card Image"
                    className="w-full h-auto"
                />
                <div className="absolute bottom-2 right-2 flex gap-2">
                    <div className="flex items-center justify-center bg-gray-100 rounded-lg
                        w-10 h-10 text-xs
                        border border-[#E2E8F0]">
                        <LuUpload className="text-black text-xs" />
                    </div>
                    <div className="flex items-center justify-center bg-gray-100 rounded-lg
                        w-10 h-10 text-xs
                        border border-[#E2E8F0]">
                        <FaRegHeart className="text-black text-xs" />
                    </div>
                </div>
            </div>
            <div className="p-4 pt-5">
                <div className="relative flex items-center mb-4">
                    <div className="w-10 h-10 bg-lime-300 rounded-full flex items-center justify-center">
                        <img src="/avatar.png" alt="Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                    <p className="ml-3 mb-4 text-base font-medium text-[#475467]">nameAvatar</p>
                </div>
                <h3 className="text-2xl font-semibold font-inter mb-4">titleCard</h3>
                <p className="text-[#475467] mb-4">cardDescription</p>
                <Progress value={75} className='mb-4'/>
                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center">
                        <FiGift className='text-black text-lg' />
                        <p className="ml-2 text-base font-medium leading-none">€0,000.00</p>
                    </div>
                    <p className='text-base font-medium leading-none'>75%</p>
                </div>
            </div>
        </div>
    )
}
