import avatar from '../assets/Avatar.png'
import avatar2 from '../assets/Avatar2.png'
import icon from '../assets/Icon.png'
import iconAvatar from '../assets/Avatars.png'
import { Progress } from './ui/progress'

export default function Card({
  temImagemFundo,
  outraImagemFundo,
  titulo,
  descrição,
  nomeUser,
  localização,
  numerosBarra,
}: {
  numerosBarra: string
  localização: string
  nomeUser: string
  descrição: string
  titulo: string
  temImagemFundo: boolean
  outraImagemFundo: string
}) {
  return (
    <div>
      <div>
        <div>
          <div className="flex flex-col absolute bg-white w-96 h-56 rounded-xl">
            <div className="flex">
              <img className="w-14 h-14 ml-4 mt-2" src={avatar} alt="" />
              <p className="flex items-center justify-center text-[#101828] font-bold">
                {titulo}
              </p>
            </div>
            <div className=" text-[10px] mr-4 ml-4 mt-1 text-[#475467]">
              {descrição}
            </div>
            <div className="flex items-center">
              <img
                className="w-8 h-8 items-center justify-center ml-3 mt-"
                src={avatar2}
                alt=""
              />
              <p className="text-[#475467] text-[14px] ml-2">{nomeUser}</p>
              <div className="flex ml-2 gap-1">
                <img className="w-2 h-3 mt-1" src={icon} alt="" />
                <p className="text-[#475467] text-[12px] ">{localização}</p>
              </div>
            </div>
            <div className="flex mt-3 ml-3 items-center">
              <img className="w-36 h-6" src={iconAvatar} alt="" />
              <Progress className="bg-blue-800 w-28 h-[5px] ml-4" value={50} />
              <p className="mr-3 ml-3 font-bold">{numerosBarra}</p>
            </div>
          </div>
          {temImagemFundo && (
            <div>
              <img src={outraImagemFundo} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
