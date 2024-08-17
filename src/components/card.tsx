import imagemFundo from '../assets/Image.png'
import avatar from '../assets/Avatar.png'
import avatar2 from '../assets/Avatar2.png'
import icon from '../assets/Icon.png'
import iconAvatar from '../assets/Avatars.png'
import { Progress } from './ui/progress'

export default function Card() {
  return (
    <div>
      <div>
        <div>
          <div className="flex flex-col absolute bg-white mt-40 w-96 h-56 ml-2 rounded-xl">
            <div className="flex">
              <img className="w-14 h-14 ml-4 mt-2" src={avatar} alt="" />
              <p className="mt-3 ml-2 text-[#101828] font-bold">
                Help us Teach English for Kids on China Countryside
              </p>
            </div>
            <div className=" text-[10px] mr-4 ml-4 mt-1 text-[#475467]">
              I need about <strong>9.000 signatures</strong> to deliver to my
              mayor in two weeks and get that grant! Check more about our
              project and if you want to see how we are changing lovely children
              lifes on China countryside just teaching how they can use the
              internet.
            </div>
            <div className="flex items-center">
              <img className="w-8 h-8 ml-4 mt-2" src={avatar2} alt="" />
              <p className="text-[#475467] text-[14px] ml-2">
                Mateus Rodrigues
              </p>
              <div className="flex ml-2 gap-1">
                <img className="w-2 h-3 mt-1" src={icon} alt="" />
                <p className="text-[#475467] text-[12px] ">São Paulo, Brazil</p>
              </div>
            </div>
            <div className="flex mt-3 ml-3 items-center">
              <img className="w-36 h-6" src={iconAvatar} alt="" />
              <Progress className="bg-blue-800 w-28 h-[5px] ml-4" value={50} />
              <p className="mr-3 ml-3 font-bold">4.533/9.000</p>
            </div>
          </div>
          <img src={imagemFundo} alt="" />
        </div>
      </div>
    </div>
  )
}
