import avatar from '../assets/Avatar.png'
import avatar2 from '../assets/Avatar2.png'
import icon from '../assets/Icon.png'
import iconAvatar from '../assets/Avatars.png'
import { Progress } from '../components/component/progress'
import { Button } from './ui/button'

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
    <>
      <div className="flex sm:hidden  justify-center items-center max-w-full">
        <div className="flex flex-col absolute  bg-white w-96 h-56 rounded-xl">
          <div className="flex">
            <img className="w-14 h-14 ml-4 mt-2" src={avatar} alt="" />
            <p className="flex items-center justify-center text-[#101828] font-bold">
              {titulo}
            </p>
          </div>
          <div className=" text-[10px] mr-4 ml-4 mt-1 text-[#475467]">
            {descrição}
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-8 h-8 items-center justify-center ml-3 mt-"
              src={avatar2}
              alt=""
            />
            <p className="text-[#475467] text-[14px] ml-2">{nomeUser}</p>
            <div className="flex  gap-1">
              <img className="w-2 h-3 mt-1" src={icon} alt="" />
              <p className="text-[#475467] text-xs ">{localização}</p>
              <Button
                className="bg-lime-500 text-white"
                size={'sm'}
                variant={'shadow'}
              >
                Sign campaign
              </Button>
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
            <img className="rounded-md" src={outraImagemFundo} alt="" />
          </div>
        )}
      </div>

      <div className="hidden sm:flex max-w-80 sm:max-w-full">
        <div className="flex justify-center items-center">
          <div className="flex flex-col absolute  bg-white w-[658px] h-[323px] rounded-xl p-4">
            <div className="flex gap-3 justify-center items-center">
              <img className="w-16 h-16 ml-4 mt-2" src={avatar} alt="" />
              <p className="flex text-2xl items-center justify-center text-[#101828] font-bold">
                {titulo}
              </p>
            </div>
            <div className="text-base mr-4 ml-4 mt-1 text-[#475467]">
              {descrição}
            </div>
            <div className="flex items-center mt-3">
              <img
                className="w-10 h-10 items-center justify-center ml-3 mt-2"
                src={avatar2}
                alt=""
              />
              <p className="text-[#475467] text-base ml-2">{nomeUser}</p>
              <div className="flex ml-2 gap-1 items-center justify-center">
                <div className="flex gap-32">
                  <div className="flex items-center justify-center gap-2">
                    <img className="w-5 h-5 mt-1 ml-5" src={icon} alt="" />
                    <p className="text-[#475467] text-base ">{localização}</p>
                  </div>
                  <Button
                    className="bg-[#84CC16] text-white "
                    variant={'shadow'}
                  >
                    Sign Campaing
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex mt-3 ml-3 items-center gap-7">
              <img className="w-60 h-9" src={iconAvatar} alt="" />
              <Progress className="bg-blue-800 w-44 h-3 ml-4" value={50} />
              <p className="text-xl font-bold">{numerosBarra}</p>
            </div>
          </div>
          {temImagemFundo && (
            <div>
              <img className="rounded-md" src={outraImagemFundo} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
