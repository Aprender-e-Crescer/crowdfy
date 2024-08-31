import { NotificationComponent } from './NotificationComponent'
import avatar from '../assets/Avatar.png'
import avatar2 from '../assets/Avatar2.png'
import icon from '../assets/Icon.png'
import iconAvatar from '../assets/Avatars.png'
import { Progress } from './ui/progress'
import { Button } from './ui/button'
import { FundCampaing } from './ui/Fund-Campaing'
import { Loader2 } from 'lucide-react'
import { BackgroundButton } from './background_button'

interface Props {
  titulo: string;
  descrição: string;
  nomeUser: string;
  localização: string;
  numerosBarra: string;
}

export function Roadmap({
  titulo,
  descrição,
  nomeUser,
  localização,
  numerosBarra,
}: Props) {
  return (
    <div className="bg-[url('@/assets/images-roadmap/Image.png')] pt-52 px-2 pb-2 rounded-xl md:h-full md:bg-cover md:bg-no-repeat md:pb-0">
      <div className="md:flex md:justify-end md:flex-col md:h-full">
        <div>
          <div className="flex justify-between">
            <div className="mb-10 md:hidden">
              <BackgroundButton preço="R$ 76.97" />
            </div>
            <div className="mb-10 md:hidden">
              <BackgroundButton preço="R$ 895.10" />
            </div>
          </div>
          <div className="flex flex-col md:hidden justify-center items-center max-w-full">
            <div className="flex flex-col bg-white w-full h-max rounded-xl rounded-b-none gap-4 p-2 ">
              <div className="flex gap-3 ">
                <img className="w-14 h-14  mt-2" src={avatar} alt="Avatar" />
                <p className="flex items-center justify-center text-[#101828] text-lg font-bold">
                  {titulo}
                </p>
              </div>
              <div className="text-[13px] mr-4 ml-3 mt-1 text-[#475467]">
                {descrição}
              </div>
              <div className="flex items-center justify-between min-[487px]:w-full">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 items-center justify-center ml-2"
                    src={avatar2}
                    alt="User Avatar"
                  />
                  <p className="text-[#475467] text-[14px] ml-2">{nomeUser}</p>
                </div>
                <div className="flex ml-2 gap-1 items-center max-[510px]:flex-col">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-2 h-3 mt-1"
                      src={icon}
                      alt="Location Icon"
                    />
                    <p className="text-[#475467] text-[12px]">{localização}</p>
                  </div>
                  <Button className="bg-[#84CC16] text-white" variant="shadow">
                    Sign Campaign
                  </Button>
                </div>
              </div>
              <div className="flex mt-3 items-center max-[440px]:flex-col max-[440px]:gap-4">
                <img
                  className="w-36 max-[440px]:w-60 h-6"
                  src={iconAvatar}
                  alt="Icon Avatar"
                />
                <Progress
                  className="bg-blue-800 w-28 h-[5px] max-[440px]:w-60 ml-4"
                  value={50}
                />
                <p className="mr-3 ml-3 font-bold">{numerosBarra}</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:justify-start">
            <div className="flex justify-center items-center">
              <div className="flex flex-col bg-white w-4/5 h-full rounded-xl rounded-b-none p-4">
                <div className="flex gap-3 items-center">
                  <img className="w-16 h-16 mt-2" src={avatar} alt="Avatar" />
                  <p className="flex text-2xl items-center justify-center text-[#101828] font-bold">
                    {titulo}
                  </p>
                </div>
                <div className="text-base mr-4 ml-4 mt-1 text-[#475467]">
                  {descrição}
                </div>
                <div className="flex items-center mt-3 justify-between max-[1300px]:flex-col min-[1210px]:flex min-[1110px]:gap-5">
                  <div className="flex items-center ">
                    <img
                      className="w-10 h-10 items-center justify-center ml-3 mt-2"
                      src={avatar2}
                      alt="User Avatar"
                    />
                    <p className="text-[#475467] text-base ml-2 max-[1340px]:w-min">
                      {nomeUser}
                    </p>
                  </div>
                  <div className="flex gap-1 items-center justify-center">
                    <div className="flex gap-32 md:gap-10 ">
                      <div className="flex items-center justify-center gap-5 max-[1400px]:flex-col">
                        <div className="flex gap-5 items-center ">
                          <div className="flex gap-2">
                            <img
                              className="w-5 h-5 mt-1 ml-5"
                              src={icon}
                              alt="Location Icon"
                            />
                            <p className="text-[#475467] text-base">
                              {localização}
                            </p>
                          </div>

                          <Button
                            className="bg-[#84CC16] text-white"
                            variant="shadow"
                          >
                            Sign Campaign
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-3 ml justify-center items-center gap-7 max-[1400px]:flex-col">
                  <img
                    className="w-60 h-9"
                    src={iconAvatar}
                    alt="Icon Avatar"
                  />

                  <div className="flex items-center gap-5 max-[1060px]:flex-col">
                    <Progress
                      className="bg-blue-800 w-44 h-3 ml-4 "
                      value={50}
                    />
                    <p className="text-xl font-bold">{numerosBarra}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:justify-center md:flex ">
          <div className="flex flex-col rounded-xl rounded-t-none border-white bg-white p-2 md:w-4/5  md:rounded-b-none ">
            <div className="flex flex-col ml-1 md:ml-3">
              <p className="title font-bold text-2xl mb-10">Roadmap</p>
              <div className="flex gap-3">
                <NotificationComponent
                  nome="Matheus Rodrigues"
                  text1="is gathering 9000 signs to city's prefecture"
                  postedIn="in 20 days"
                  text2="“We need to deliver this amount of 9.000 signs to the mayor so he approves us as international English teachers.”"
                />
              </div>

              <FundCampaing
                nome="Matheus Rodrigues"
                text1="Raise together $1000 to pay for our (2 persons) flights for the 1st week"
                postedIn="in 20 days"
                textbutton="Fund campaign"
                Variant="shadow"
                Icon={<Loader2 className="w-5 h-5" />}
                colorButton="gray"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

