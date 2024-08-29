import { PiggyBank, FilePenLine } from 'lucide-react'

interface Props {
  title: string
  subtittle: string
  donation: string
  petition: string
  donationDescrition: string
  petitionDescrition: string
}
export default function Choose({
  title,
  subtittle,
  donation,
  petition,
  donationDescrition,
  petitionDescrition,
}: Props) {
  return (
    <>
      <div className="flex md:hidden flex-col gap-4 justify-center ">
        <div className="flex flex-col">
          <div className="flex">
            <p className="text-2xl text-[#101828] font-bold">{title}</p>
          </div>
          <div className="flex">
            <p className="text-[#475467] font-normal text-[16px]">
              {subtittle}
            </p>
          </div>
        </div>
        <div className="flex gap-1 flex-col items-center w-full">
          <div className="flex h-[165px] border-2 rounded-xl items-center flex-1 w-full">
            <div className="flex-col pt-2 pl-4 justify-center items-center">
              <div className="flex items-center justify-center border-4 border-slate-100 bg-[#FFFFFF] rounded-full w-16">
                <PiggyBank
                  size={56}
                  className="text-slate-500 bg-gray-200 border-8 rounded-full"
                />
              </div>
              <div className="flex">
                <p className="text-[24px] font-bold">{donation}</p>
              </div>
              <div className="flex">
                <p className="text-[#64748B] text-[16px]">{donationDescrition}</p>
              </div>
            </div>
          </div>

          <div className="flex h-[165px] border-2 rounded-xl items-center flex-1 w-full">
            <div className="flex-col pt-2 pl-4">
              <div className="flex items-center justify-center border-4 border-slate-100 bg-[#FFFF] rounded-full w-16">
                <FilePenLine
                  size={56}
                  className="text-slate-500 bg-gray-200 p-2 rounded-full"
                />
              </div>
              <div className="flex">
                <p className="text-[24px] font-bold">{petition}</p>
              </div>
              <div className="flex">
                <p className="text-[#64748B]">{petitionDescrition}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col gap-4 w-full mr-52">
        <div className="flex flex-col">
          <div className="flex">
            <p className="text-2xl text-[#101828] font-bold">{title}</p>
          </div>
          <div className="flex">
            <p className="text-[#475467] font-normal text-[20px]">
              {subtittle}
            </p>
          </div>
        </div>
        <div className="flex gap-1 ">
          <div className="flex h-[593px] border-2 rounded-xl items-center w-full">
            <div className="flex-col pt-96 pl-4 justify-center items-center">
              <div className="flex items-center justify-center border-4 border-slate-100 bg-[#FFFFFF] rounded-full w-16">
                <PiggyBank
                  size={56}
                  className="text-slate-500 bg-gray-200 border-8 rounded-full"
                />
              </div>
              <div className="flex">
                <p className="text-[35px] font-bold">{donation}</p>
              </div>
              <div className="flex">
                <p className="text-[#64748B] text-[21px]">{donationDescrition}</p>
              </div>
            </div>
          </div>

          <div className="flex h-[593px] border-2 rounded-xl items-center w-full">
            <div className="flex-col pt-96 pl-4">
              <div className="flex items-center justify-center border-4 border-slate-100 bg-[#FFFF] rounded-full w-16">
                <FilePenLine
                  size={56}
                  className="text-slate-500 bg-gray-200 p-2 rounded-full"
                />
              </div>
              <div className="flex">
                <p className="text-[35px] font-bold">{petition}</p>
              </div>
              <div className="flex">
                <p className="text-[#64748B] text-[21px]">{petitionDescrition}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
