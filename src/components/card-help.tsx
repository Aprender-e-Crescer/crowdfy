import avatar from '../assets/Avatar.png'
import avatar2 from '../assets/Avatar2.png'
import iconLocalização from '../assets/Icon.png'
import iconAvatar from '../assets/Avatars.png'
import { Progress } from '../components/progress'
import { Button } from './ui/button'

interface Props {
  barNumbers: string
  location: string
  userName: string
  descrition: string
  title: string
  backgroundImage?: boolean
}

export default function Card({
  title,
  descrition,
  userName,
  location,
  barNumbers,
  backgroundImage,
}: Props) {
  return (
    <>
      <div
        className={`px-2 rounded-xl md:bg-cover md:bg-no-repeat ${
          backgroundImage
            ? "pt-36 pb-64 bg-[url('@/assets/ImageBgCard.png')]"
            : ''
        }`}
      >
        <div className="md:flex md:justify-end md:flex-col md:h-full">
          <div className="flex flex-col md:hidden justify-center items-center max-w-full">
            <div className="flex flex-col bg-white w-full h-max rounded-xl  gap-4 p-2">
              <div className="flex gap-3">
                <img className="w-14 h-14 mt-2" src={avatar} alt="Avatar" />
                <p className="flex items-center justify-center text-[#101828] text-lg font-bold">
                  {title}
                </p>
              </div>
              <div className="text-[13px] mr-4 ml-3 mt-1 text-[#475467]">
                {descrition}
              </div>
              <div className="flex items-center justify-between min-[487px]:w-full">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 items-center justify-center ml-2"
                    src={avatar2}
                    alt="User Avatar"
                  />
                  <p className="text-[#475467] text-[14px] ml-2">{userName}</p>
                </div>
                <div className="flex ml-2 gap-1 items-center max-[510px]:flex-col">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-2 h-3 mt-1"
                      src={iconLocalização}
                      alt="Location Icon"
                    />
                    <p className="text-[#475467] text-[12px]">{location}</p>
                  </div>
                  <Button variant="greenShadow">Sign Campaign</Button>
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
                <p className="mr-3 ml-3 font-bold">{barNumbers}</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:justify-start">
            <div className="flex justify-center items-center">
              <div className="flex flex-col bg-white w-4/5 h-full rounded-xl  p-4">
                <div className="flex gap-3 items-center">
                  <img className="w-16 h-16 mt-2" src={avatar} alt="Avatar" />
                  <p className="flex text-2xl items-center justify-center text-[#101828] font-bold">
                    {title}
                  </p>
                </div>
                <div className="text-base mr-4 ml-4 mt-1 text-[#475467]">
                  {descrition}
                </div>
                <div className="flex items-center mt-3 ml-10 max-[1300px]:flex-col min-[1210px]:flex min-[1110px]:gap-5">
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 items-center justify-center ml-3 mt-2"
                      src={avatar2}
                      alt="User Avatar"
                    />
                    <p className="text-[#475467] text-base ml-2 max-[1340px]:w-min">
                      {userName}
                    </p>
                  </div>
                  <div className="flex gap-1 items-center justify-center">
                    <div className="flex gap-32 md:gap-10">
                      <div className="flex items-center justify-center gap-5 max-[1400px]:flex-col">
                        <div className="flex gap-5 items-center">
                          <div className="flex gap-2">
                            <img
                              className="w-5 h-5 mt-1 ml-5"
                              src={iconLocalização}
                              alt="Location Icon"
                            />
                            <p className="text-[#475467] text-base">
                              {location}
                            </p>
                          </div>

                          <Button variant="greenShadow">Sign Campaign</Button>
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
                      className="bg-blue-800 w-44 h-3 ml-4"
                      value={50}
                    />
                    <p className="text-xl font-bold">{barNumbers}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
