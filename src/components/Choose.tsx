import { PiggyBank, FilePenLine } from 'lucide-react'

interface Props {
  tittle: string
  subtittle: string
  donation: string
  petition: string
  donationDescrição: string
  petitionDescrição: string
}
export default function Choose({
  tittle,
  subtittle,
  donation,
  petition,
  donationDescrição,
  petitionDescrição,
}: Props) {
  return (
    <>
      <div className="flex md:hidden flex-col gap-4 justify-center">
        <div className="flex flex-col">
          <div className="flex">
            <p className="text-2xl text-[#101828] font-bold">{tittle}</p>
          </div>
          <div className="flex">
            <p className="text-[#475467] font-normal text-[16px]">
              {subtittle}
            </p>
          </div>
        </div>
        <div className="flex gap-1 flex-1">
          <div className="flex w-[320px] h-[165px] border-2 rounded-xl items-center flex-1">
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
                <p className="text-[#64748B] text-[16px]">{donationDescrição}</p>
              </div>
            </div>
          </div>

          <div className="flex w-[320px] h-[165px] border-2 rounded-xl items-center flex-1">
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
                <p className="text-[#64748B]">{petitionDescrição}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="flex">
            <p className="text-2xl text-[#101828] font-bold">{tittle}</p>
          </div>
          <div className="flex">
            <p className="text-[#475467] font-normal text-[20px]">
              {subtittle}
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="flex w-[320px] h-[593px] border-2 rounded-xl items-center">
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
                <p className="text-[#64748B] text-[21px]">{donationDescrição}</p>
              </div>
            </div>
          </div>

          <div className="flex w-[320px] h-[593px] border-2 rounded-xl items-center">
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
                <p className="text-[#64748B] text-[21px]">{petitionDescrição}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
