import { Progress } from '@/components/component/progress'
import { LuUpload } from 'react-icons/lu'
import { FaRegHeart } from 'react-icons/fa'

export function Card() {
    return (
        <div className="relative w-[396px] max-w-[396px] rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
                <img 
                    src="/imagemCard.png" 
                    alt="Card Image"
                    className="w-full h-auto"
                />
                <div className="absolute bottom-3 right-3 flex gap-2">
                    <div className="flex items-center justify-center bg-gray-100 rounded-lg
                        w-10 h-10 text-xl
                        md:w-12 md:h-12 md:text-2xl
                        lg:w-10 lg:h-10 lg:text-xl
                        border border-[#E2E8F0]">
                        <LuUpload className="text-black" />
                    </div>
                    <div className="flex items-center justify-center bg-gray-100 rounded-lg
                        w-10 h-10 text-xl
                        md:w-12 md:h-12 md:text-2xl
                        lg:w-10 lg:h-10 lg:text-xl
                        border border-[#E2E8F0]">
                        <FaRegHeart className="text-black" />
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold">Card Title</h3>
                <p className="text-xs sm:text-sm md:text-gray-600">Card description goes here. It can be a brief detail about the card content.</p>
                <Progress value={75} />
            </div>
        </div>
    )
}
